export interface FactItem {
  label: string;
  value: string;
}

export interface CooperationBlock {
  title: string;
  bodyHtml: string;
}

function escapeHtmlAttr(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export function sanitizeRichHtml(value: string): string {
  let html = value;

  html = html.replace(/<script[\s\S]*?<\/script>/gi, '');
  html = html.replace(/<style[\s\S]*?<\/style>/gi, '');
  html = html.replace(/\son\w+=(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, '');
  html = html.replace(/\sstyle=(?:"[^"]*"|'[^']*')/gi, '');
  html = html.replace(/\sxmlns(:\w+)?=(?:"[^"]*"|'[^']*')/gi, '');
  html = html.replace(/javascript:/gi, '');

  html = html.replace(/<a\s+([^>]*?)>/gi, (_, attrs: string) => {
    const hrefMatch = attrs.match(/\bhref\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i);
    const hrefValue = hrefMatch?.[1] ?? hrefMatch?.[2] ?? hrefMatch?.[3] ?? '';
    if (!/^(https?:|mailto:|tel:|\/|#)/i.test(hrefValue)) {
      return '<a>';
    }
    return `<a href="${escapeHtmlAttr(hrefValue)}" target="_blank" rel="noreferrer noopener">`;
  });

  html = html.replace(
    /<(?!\/?(?:br|ol|ul|li|em|strong|b|i|p|a)(?=>|\s.*>))\/?[^>]+>/gi,
    ''
  );

  return html.trim();
}

export function decodeHtml(value: string): string {
  if (typeof document === 'undefined') return value;
  const textarea = document.createElement('textarea');
  textarea.innerHTML = value;
  return textarea.value;
}

export function htmlToPlainText(value: string): string {
  return decodeHtml(
    value
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<\/p>/gi, '\n')
      .replace(/<[^>]+>/g, '')
  )
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

export function parseFacts(value: string): FactItem[] {
  return htmlToPlainText(value)
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [label, ...rest] = line.split(':');
      return { label: label.trim(), value: rest.join(':').trim() };
    })
    .filter((item) => item.label.length > 0 && item.value.length > 0);
}

export function parseParagraphs(value: string): string[] {
  return htmlToPlainText(value)
    .split(/\n{2,}/)
    .map((part) => part.trim())
    .filter(Boolean);
}

export function parseCooperationBlocks(value: string): CooperationBlock[] {
  const blockRegex =
    /<div class=['"]col-md-3['"]>\s*<h3>([\s\S]*?)<\/h3>\s*<\/div>\s*<div class=['"]col-md-9['"]>\s*<h3>([\s\S]*?)<\/h3>\s*<\/div>/g;

  const blocks: CooperationBlock[] = [];
  let match = blockRegex.exec(value);
  while (match) {
    blocks.push({
      title: htmlToPlainText(match[1]),
      bodyHtml: sanitizeRichHtml(decodeHtml(match[2])),
    });
    match = blockRegex.exec(value);
  }

  if (blocks.length === 0) {
    return [{ title: '', bodyHtml: sanitizeRichHtml(decodeHtml(value)) }];
  }

  return blocks;
}

export function getHostName(url: string): string {
  try {
    return new URL(url).hostname;
  } catch {
    return url;
  }
}

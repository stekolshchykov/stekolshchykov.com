import { describe, expect, it } from 'vitest';
import { parseCooperationBlocks, sanitizeRichHtml } from '../src/content/textUtils';

describe('sanitizeRichHtml', () => {
  it('removes scripts and inline handlers', () => {
    const input = `<p onclick="evil()">Hello</p><script>alert(1)</script><img src=x onerror=evil()>`;
    const sanitized = sanitizeRichHtml(input);
    expect(sanitized).toContain('<p>Hello</p>');
    expect(sanitized).not.toContain('script');
    expect(sanitized).not.toContain('onerror');
    expect(sanitized).not.toContain('<img');
  });

  it('keeps safe anchor href and strips javascript href', () => {
    const good = sanitizeRichHtml(`<a href="https://github.com/stekolshchykov">GitHub</a>`);
    const bad = sanitizeRichHtml(`<a href="javascript:alert(1)">x</a>`);
    expect(good).toContain('href="https://github.com/stekolshchykov"');
    expect(good).toContain('rel="noreferrer noopener"');
    expect(bad).not.toContain('javascript:');
  });
});

describe('parseCooperationBlocks', () => {
  it('sanitizes block body html', () => {
    const raw = `<div class='col-md-3'><h3>T</h3></div><div class='col-md-9'><h3><ul><li>A</li></ul><script>x</script></h3></div>`;
    const blocks = parseCooperationBlocks(raw);
    expect(blocks).toHaveLength(1);
    expect(blocks[0].bodyHtml).toContain('<ul><li>A</li></ul>');
    expect(blocks[0].bodyHtml).not.toContain('script');
  });
});

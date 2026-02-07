import type { Locale } from '../../content/stekolschikovContent';
import { sourceTexts, uiTexts } from '../../content/stekolschikovContent';
import { parseCooperationBlocks } from '../../content/textUtils';
import { UILead, UIPage, UIPill, UITitle } from '../../ui-kit';

interface ExperienceFaceProps {
  locale: Locale;
}

export function ExperienceFace({ locale }: ExperienceFaceProps) {
  const source = sourceTexts[locale];
  const ui = uiTexts[locale];
  const blocks = parseCooperationBlocks(source.cooperation_text);

  return (
    <UIPage>
      <UIPill>{ui.cooperation}</UIPill>
      <UITitle className="terminal-typewriter">{source.cooperation_title}</UITitle>
      <UILead>{source.cooperation_post_title}</UILead>

      <div className="cooperation-list">
        {blocks.map((block, index) => (
          <section key={`${block.title}-${index}`} className="cooperation-item">
            <div className="terminal-row" style={{ marginBottom: '8px', borderBottom: '1px dashed rgba(0,255,65,0.2)' }}>
              <span style={{ color: 'var(--terminal-green-dim)' }}>[LOG_ENTRY_{1000 + index}]</span>
              <span style={{ color: 'var(--terminal-green)' }}>{block.title || 'SYSTEM_MSG'}</span>
            </div>
            <div dangerouslySetInnerHTML={{ __html: block.bodyHtml }} />
          </section>
        ))}
      </div>
    </UIPage>
  );
}

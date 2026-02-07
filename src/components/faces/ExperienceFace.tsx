import type { Locale } from '../../content/stekolschikovContent';
import { sourceTexts, uiTexts } from '../../content/stekolschikovContent';
import { parseCooperationBlocks } from '../../content/textUtils';
import { UILead, UIList, UIListItem, UIPage, UIPill, UITitle } from '../../ui-kit';

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

      <UIList className="cooperation-list">
        {blocks.map((block, index) => (
          <UIListItem key={`${block.title}-${index}`} className="cooperation-item">
            <div className="terminal-row header">
              <span className="log-id">[LOG_ENTRY_{1000 + index}]</span>
              <span className="log-title">{block.title || 'SYSTEM_MSG'}</span>
            </div>
            <div className="log-body" dangerouslySetInnerHTML={{ __html: block.bodyHtml }} />
          </UIListItem>
        ))}
      </UIList>
    </UIPage>
  );
}

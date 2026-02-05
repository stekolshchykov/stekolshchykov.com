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
      <UITitle>{source.cooperation_title}</UITitle>
      <UILead>{source.cooperation_post_title}</UILead>

      <div className="cooperation-list">
        {blocks.map((block) => (
          <section key={`${block.title}-${block.bodyHtml.slice(0, 20)}`} className="cooperation-item">
            {block.title ? <h3>{block.title}</h3> : null}
            <div dangerouslySetInnerHTML={{ __html: block.bodyHtml }} />
          </section>
        ))}
      </div>
    </UIPage>
  );
}

import type { Locale } from '../../content/stekolschikovContent';
import { sourceTexts, uiTexts } from '../../content/stekolschikovContent';
import { parseFacts, parseParagraphs } from '../../content/textUtils';
import { UIBlock, UILead, UIPage, UIPill, UITitle } from '../../ui-kit';

interface ProjectsFaceProps {
  locale: Locale;
}

export function ProjectsFace({ locale }: ProjectsFaceProps) {
  const source = sourceTexts[locale];
  const ui = uiTexts[locale];
  const facts = parseFacts(source.about_me_info);
  const paragraphs = parseParagraphs(source.about_me_info_full);

  return (
    <UIPage>
      <UIPill>{ui.about}</UIPill>
      <UITitle>{source.about_me_title}</UITitle>
      <UILead>{source.about_me_post_title}</UILead>

      <div className="about-layout">
        <img
          className="about-layout__photo"
          src="/me.jpg"
          alt={ui.aboutPhotoAlt}
          loading="lazy"
        />

        <div className="about-layout__facts">
          {facts.map((fact) => (
            <div key={fact.label} className="fact-item">
              <span>{fact.label}</span>
              <strong>{fact.value}</strong>
            </div>
          ))}
        </div>
      </div>

      <UIBlock>
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </UIBlock>
    </UIPage>
  );
}

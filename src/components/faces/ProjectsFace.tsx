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
      <UITitle className="terminal-typewriter">{source.about_me_title}</UITitle>
      <UILead>{source.about_me_post_title}</UILead>

      <div className="about-layout">
        <UIBlock className="about-photo-block">
          <img
            className="about-layout__photo"
            src="/me-2026.jpg"
            alt={ui.aboutPhotoAlt}
            loading="lazy"
          />
        </UIBlock>

        <UIBlock className="terminal-directory">
          <div className="terminal-row header">
            <span className="col-perms">PERMS</span>
            <span className="col-size">SIZE</span>
            <span className="col-user">USER</span>
            <span className="col-name">NAME</span>
          </div>
          {facts.map((fact, index) => (
            <div key={fact.label} className="terminal-row">
              <span className="col-perms">drwxr-xr-x</span>
              <span className="col-size">4.0K</span>
              <span className="col-user">root</span>
              <span className="col-name">
                <span className="fact-label">{fact.label}:</span> <span className="fact-value">{fact.value}</span>
              </span>
            </div>
          ))}
          <div className="terminal-row">
            <span className="col-perms">-rw-r--r--</span>
            <span className="col-size">1.2M</span>
            <span className="col-user">root</span>
            <span className="col-name">me-2026.jpg</span>
          </div>
        </UIBlock>
      </div>

      <UIBlock className="about-text">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </UIBlock>
    </UIPage>
  );
}

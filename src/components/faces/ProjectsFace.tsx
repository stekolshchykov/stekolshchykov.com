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
        <img
          className="about-layout__photo"
          src="/me.jpg"
          alt={ui.aboutPhotoAlt}
          loading="lazy"
        />

        <div className="terminal-directory">
          <div className="terminal-row header">
            <span style={{ width: '80px' }}>PERMS</span>
            <span style={{ width: '60px' }}>SIZE</span>
            <span style={{ width: '60px' }}>USER</span>
            <span>NAME</span>
          </div>
          {facts.map((fact, index) => (
            <div key={fact.label} className="terminal-row">
              <span className="file-perms" style={{ width: '80px', color: '#567' }}>drwxr-xr-x</span>
              <span className="file-size" style={{ width: '60px', color: '#567' }}>4.0K</span>
              <span className="file-user" style={{ width: '60px', color: 'var(--terminal-green)' }}>root</span>
              <span className="file-name">
                <span style={{ color: 'var(--terminal-green-dim)' }}>{fact.label}:</span> <span style={{ color: '#fff' }}>{fact.value}</span>
              </span>
            </div>
          ))}
          <div className="terminal-row">
            <span className="file-perms" style={{ width: '80px', color: '#567' }}>-rw-r--r--</span>
            <span className="file-size" style={{ width: '60px', color: '#567' }}>1.2M</span>
            <span className="file-user" style={{ width: '60px', color: 'var(--terminal-green)' }}>root</span>
            <span className="file-name" style={{ color: '#fff' }}>photo.jpg</span>
          </div>
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

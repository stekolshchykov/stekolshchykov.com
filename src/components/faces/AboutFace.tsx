import type { Locale } from '../../content/stekolschikovContent';
import { personalSiteUrl, sourceTexts, uiTexts } from '../../content/stekolschikovContent';
import { UIBlock, UILead, UILink, UIList, UIListItem, UIPage, UIPill, UITitle } from '../../ui-kit';

interface AboutFaceProps {
  locale: Locale;
}

export function AboutFace({ locale }: AboutFaceProps) {
  const source = sourceTexts[locale];
  const ui = uiTexts[locale];

  const pages = [ui.welcome, ui.skills, ui.about, ui.cooperation, ui.contacts, ui.work];
  const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(
    personalSiteUrl
  )}`;

  return (
    <UIPage>
      <UIPill>{ui.welcome}</UIPill>
      <UIBlock className="welcome-identity">
        <p className="welcome-identity__role">{ui.personRole}</p>
        <h3 className="welcome-identity__name">{ui.personName}</h3>
      </UIBlock>
      <UIBlock>
        <UITitle className="terminal-typewriter">{source.hi_title}</UITitle>
        <UILead>{source.hi_post_title}</UILead>
      </UIBlock>

      <div className="welcome-grid">
        <UIBlock className="nav-menu-block">
          <h3 className="nav-menu-title">{source.hi_nav}</h3>
          <UIList className="nav-menu-list">
            {pages.map((page, index) => (
              <UIListItem key={page}>
                <span className="nav-index">{index + 1}.</span> {page}
              </UIListItem>
            ))}
          </UIList>
        </UIBlock>

        <aside className="qr-card">
          <div className="qr-orbit">
            <img src={qrSrc} alt="QR to stekolshchykov.com" loading="lazy" />
          </div>
          <UILink href={personalSiteUrl} target="_blank" rel="noreferrer noopener" className="qr-link">
            stekolshchykov.com
          </UILink>
        </aside>
      </div>
    </UIPage>
  );
}

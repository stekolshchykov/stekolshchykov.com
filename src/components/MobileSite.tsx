import { useMemo, useState } from 'react';
import {
  Activity,
  Eye,
  EyeOff,
  Handshake,
  House,
  Shapes,
  SquareUserRound,
  UserRound,
} from 'lucide-react';
import type { Locale } from '../content/stekolschikovContent';
import {
  contactLinks,
  githubProfileUrl,
  githubUsername,
  personalSiteUrl,
  skillsBefore,
  skillsRecent,
  sourceTexts,
  uiTexts,
} from '../content/stekolschikovContent';
import { parseCooperationBlocks, parseFacts, parseParagraphs } from '../content/textUtils';
import { getMaskedContactValue, getRevealText, type ContactKey } from '../features/contacts';
import { FACE_CODES } from '../navigation';
import { UIIconButton, UILangButton, UILink, UITabButton } from '../ui-kit';
import { logRuntime } from '../observability/logger';

type FaceId = 'welcome' | 'skills' | 'about' | 'cooperation' | 'contacts' | 'work';

interface MobileSiteProps {
  locale: Locale;
  locales: Locale[];
  activeFace: FaceId;
  onFaceChange: (faceId: FaceId) => void;
  onLocaleChange: (locale: Locale) => void;
}

export function MobileSite({ locale, locales, activeFace, onFaceChange, onLocaleChange }: MobileSiteProps) {
  const source = sourceTexts[locale];
  const ui = uiTexts[locale];
  const reveal = getRevealText(locale);
  const facts = useMemo(() => parseFacts(source.about_me_info), [source.about_me_info]);
  const aboutParagraphs = useMemo(() => parseParagraphs(source.about_me_info_full), [source.about_me_info_full]);
  const cooperationBlocks = useMemo(
    () => parseCooperationBlocks(source.cooperation_text),
    [source.cooperation_text]
  );

  const tabs: Array<{ id: FaceId; label: string; Icon: typeof House }> = [
    { id: 'welcome', label: ui.welcome, Icon: House },
    { id: 'skills', label: ui.skills, Icon: Shapes },
    { id: 'about', label: ui.about, Icon: UserRound },
    { id: 'cooperation', label: ui.cooperation, Icon: Handshake },
    { id: 'contacts', label: ui.contacts, Icon: SquareUserRound },
    { id: 'work', label: ui.work, Icon: Activity },
  ];
  const activeTab = tabs.find((tab) => tab.id === activeFace) ?? tabs[0];

  const [visibleMap, setVisibleMap] = useState<Record<ContactKey, boolean>>({
    email: false,
    skype: false,
    phone: false,
    telegram: false,
  });

  const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${encodeURIComponent(personalSiteUrl)}`;

  const contacts: Array<{ key: ContactKey; label: string; value: string; href: string }> = [
    { key: 'email', label: ui.contactEmail, value: contactLinks.email, href: `mailto:${contactLinks.email}` },
    { key: 'skype', label: ui.contactSkype, value: contactLinks.skype, href: `skype:${contactLinks.skype}` },
    { key: 'phone', label: source.contacts_phone, value: contactLinks.phone, href: `tel:${contactLinks.phone}` },
    {
      key: 'telegram',
      label: ui.contactTelegram,
      value: contactLinks.telegram,
      href: `https://t.me/${contactLinks.telegram.replace('@', '')}`,
    },
  ];

  const toggleVisibility = (key: ContactKey) => {
    logRuntime('info', 'mobile-contacts', 'Contact visibility toggled', { key, visible: !visibleMap[key] });
    setVisibleMap((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleMobileTabClick = (faceId: FaceId) => {
    logRuntime('info', 'mobile-nav', 'Tab clicked', { from: activeFace, to: faceId });
    onFaceChange(faceId);
  };

  const handleLocaleClick = (nextLocale: Locale) => {
    logRuntime('info', 'mobile-locale', 'Locale button clicked', { from: locale, to: nextLocale });
    onLocaleChange(nextLocale);
  };

  return (
    <div className="mobile-site">
      <div className="mobile-cosmos mobile-cosmos--a" aria-hidden />
      <div className="mobile-cosmos mobile-cosmos--b" aria-hidden />

      <header className="mobile-header">
        <div className="mobile-header-card">
          <span className="mobile-badge">ORBIT MODE</span>
          <p className="mobile-role">{ui.personRole}</p>
          <h1>{ui.personName}</h1>
          <p className="mobile-domain">stekolshchykov.com</p>
        </div>

        <div className="lang-switcher" aria-label={ui.language}>
          {locales.map((lang) => (
            <UILangButton
              key={lang}
              active={lang === locale}
              onClick={() => handleLocaleClick(lang)}
            >
              {lang.toUpperCase()}
            </UILangButton>
          ))}
        </div>
      </header>

      <nav className="mobile-tabs" aria-label="Page navigation">
        {tabs.map((tab) => (
          <UITabButton
            key={tab.id}
            active={activeFace === tab.id}
            onClick={() => handleMobileTabClick(tab.id)}
          >
            <span className="mobile-tab__icon" aria-hidden>
              <tab.Icon size={14} strokeWidth={2.2} />
            </span>
            <span className="mobile-tab__text">{tab.label}</span>
          </UITabButton>
        ))}
      </nav>

      <main key={activeFace} className="mobile-panel">
        <div className="mobile-section-intro">
          <span className="mobile-section-intro__icon" aria-hidden>
            <activeTab.Icon size={16} strokeWidth={2.2} />
          </span>
          <div>
            <p className="mobile-section-intro__meta">{FACE_CODES[activeFace]}</p>
            <strong>{activeTab.label}</strong>
          </div>
        </div>

        {activeFace === 'welcome' && (
          <section className="mobile-section">
            <h2>{source.hi_title}</h2>
            <p>{source.hi_post_title}</p>

            <div className="mobile-qr-card">
              <div className="qr-orbit">
                <img src={qrSrc} alt="QR to stekolshchykov.com" loading="lazy" />
              </div>
              <UILink href={personalSiteUrl} target="_blank" rel="noreferrer noopener">
                stekolshchykov.com
              </UILink>
            </div>
          </section>
        )}

        {activeFace === 'skills' && (
          <section className="mobile-section">
            <h2>{source.skills_title}</h2>
            <p>{source.skills_post_title}</p>

            <h3>{source.skills_used_recently}</h3>
            <div className="skill-list">
              {skillsRecent.map((skill) => (
                <article key={`${skill.name}-${skill.level}`} className="skill-item">
                  <div className="skill-item__head">
                    <span>{skill.name}</span>
                    <strong>{skill.level}%</strong>
                  </div>
                  <div className="skill-item__bar">
                    <div style={{ width: `${skill.level}%` }} />
                  </div>
                </article>
              ))}
            </div>

            <h3>{source.skills_used_before}</h3>
            <div className="skill-list">
              {skillsBefore.map((skill) => (
                <article key={`${skill.name}-${skill.level}`} className="skill-item is-soft">
                  <div className="skill-item__head">
                    <span>{skill.name}</span>
                    <strong>{skill.level}%</strong>
                  </div>
                  <div className="skill-item__bar">
                    <div style={{ width: `${skill.level}%` }} />
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {activeFace === 'about' && (
          <section className="mobile-section">
            <h2>{source.about_me_title}</h2>
            <p>{source.about_me_post_title}</p>

            <img
              className="mobile-about-photo"
              src="/me.jpg"
              alt={ui.aboutPhotoAlt}
              loading="lazy"
            />

            <div className="mobile-facts">
              {facts.map((fact) => (
                <article key={fact.label} className="fact-item">
                  <span>{fact.label}</span>
                  <strong>{fact.value}</strong>
                </article>
              ))}
            </div>

            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        )}

        {activeFace === 'cooperation' && (
          <section className="mobile-section">
            <h2>{source.cooperation_title}</h2>
            <p>{source.cooperation_post_title}</p>

            <div className="cooperation-list">
              {cooperationBlocks.map((block) => (
                <article key={`${block.title}-${block.bodyHtml.slice(0, 18)}`} className="cooperation-item">
                  {block.title ? <h3>{block.title}</h3> : null}
                  <div dangerouslySetInnerHTML={{ __html: block.bodyHtml }} />
                </article>
              ))}
            </div>
          </section>
        )}

        {activeFace === 'contacts' && (
          <section className="mobile-section">
            <h2>{source.contacts_title}</h2>

            <div className="contacts-grid">
              {contacts.map((item) => {
                const isVisible = visibleMap[item.key];
                return (
                  <article key={item.key} className="contact-card">
                    <div className="contact-card__head">
                      <span>{item.label}</span>
                      <UIIconButton
                        onClick={() => toggleVisibility(item.key)}
                        aria-label={isVisible ? reveal.hide : reveal.show}
                      >
                        {isVisible ? <EyeOff size={16} /> : <Eye size={16} />}
                      </UIIconButton>
                    </div>

                    {isVisible ? (
                      <UILink href={item.href} target={item.key === 'telegram' ? '_blank' : undefined} rel="noreferrer">
                        {item.value}
                      </UILink>
                    ) : (
                      <p className="contact-hidden">{getMaskedContactValue(item.value)}</p>
                    )}
                  </article>
                );
              })}
            </div>
          </section>
        )}

        {activeFace === 'work' && (
          <section className="mobile-section">
            <h2>{ui.workTitle}</h2>

            <div className="github-feed">
              <UILink className="github-profile-link" href={githubProfileUrl} target="_blank" rel="noreferrer noopener">
                @{githubUsername}
              </UILink>

              {/* Widgets temporarily disabled due to service unavailability (503)
              <img
                className="github-widget"
                src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&rank_icon=github&hide_border=true&bg_color=00000000&title_color=8cc7ff&text_color=c8dfff&icon_color=5da8ff`}
                alt="GitHub stats widget"
                loading="lazy"
              />
              <img
                className="github-widget"
                src={`https://streak-stats.demolab.com?user=${githubUsername}&theme=transparent&hide_border=true&ring=8cc7ff&fire=8cc7ff&currStreakLabel=8cc7ff&dates=c8dfff&sideNums=c8dfff&currStreakNum=e6eefc`}
                alt="GitHub streak widget"
                loading="lazy"
              />
              <img
                className="github-widget github-widget--graph"
                src={`https://github-readme-activity-graph.vercel.app/graph?username=${githubUsername}&bg_color=0b1220&color=9ec3ef&line=5da8ff&point=9ec3ef&area=true&hide_border=true`}
                alt="GitHub activity graph"
                loading="lazy"
              />
              */}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

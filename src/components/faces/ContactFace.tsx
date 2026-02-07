import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import type { Locale } from '../../content/stekolschikovContent';
import { contactLinks, sourceTexts, uiTexts } from '../../content/stekolschikovContent';
import { getMaskedContactValue, getRevealText, type ContactKey } from '../../features/contacts';
import { UIIconButton, UILink, UIPage, UIPill, UITitle } from '../../ui-kit';
import { logRuntime } from '../../observability/logger';

interface ContactFaceProps {
  locale: Locale;
}

export function ContactFace({ locale }: ContactFaceProps) {
  const source = sourceTexts[locale];
  const ui = uiTexts[locale];
  const reveal = getRevealText(locale);

  const [visibleMap, setVisibleMap] = useState<Record<ContactKey, boolean>>({
    email: false,
    skype: false,
    phone: false,
    telegram: false,
  });

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
    logRuntime('info', 'desktop-contacts', 'Contact visibility toggled', { key, visible: !visibleMap[key] });
    setVisibleMap((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <UIPage>
      <UIPill>{ui.contacts}</UIPill>
      <UITitle className="terminal-typewriter">{source.contacts_title}</UITitle>

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
    </UIPage>
  );
}

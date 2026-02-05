import type { Locale } from '../content/stekolschikovContent';

export type ContactKey = 'email' | 'skype' | 'phone' | 'telegram';

export const revealTexts = {
  ru: { show: 'Показать', hide: 'Скрыть', more: 'Показать еще' },
  en: { show: 'Show', hide: 'Hide', more: 'Show more' },
  uk: { show: 'Показати', hide: 'Сховати', more: 'Показати ще' },
} as const;

export function getRevealText(locale: Locale) {
  return revealTexts[locale];
}

export function getMaskedContactValue(value: string): string {
  const trimmed = value.trim();
  if (trimmed.length <= 2) return trimmed;
  const visible = trimmed.slice(0, 2);
  const hiddenLength = Math.max(6, Math.min(12, trimmed.length - 2));
  return `${visible}${'*'.repeat(hiddenLength)}`;
}

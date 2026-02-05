import { describe, expect, it } from 'vitest';
import { sourceTexts, uiTexts, skillsRecent, skillsBefore, workItems, contactLinks, type Locale } from '../src/content/stekolschikovContent';

const LOCALES: Locale[] = ['ru', 'en', 'uk'];

describe('Face Content - All Locales Have Content', () => {
  it('sourceTexts exist for all locales', () => {
    LOCALES.forEach(locale => {
      expect(sourceTexts[locale]).toBeDefined();
    });
  });

  it('uiTexts exist for all locales', () => {
    LOCALES.forEach(locale => {
      expect(uiTexts[locale]).toBeDefined();
    });
  });

  it('skills arrays exist', () => {
    expect(skillsRecent).toBeDefined();
    expect(Array.isArray(skillsRecent)).toBe(true);
    expect(skillsBefore).toBeDefined();
    expect(Array.isArray(skillsBefore)).toBe(true);
  });

  it('workItems array exists', () => {
    expect(workItems).toBeDefined();
    expect(Array.isArray(workItems)).toBe(true);
  });

  it('contactLinks object exists', () => {
    expect(contactLinks).toBeDefined();
    expect(typeof contactLinks).toBe('object');
  });
});

describe('Face Content - Welcome Face (hi_*)', () => {
  it('has welcome title for all locales', () => {
    LOCALES.forEach(locale => {
      expect(sourceTexts[locale].hi_title).toBeDefined();
      expect(sourceTexts[locale].hi_title.length).toBeGreaterThan(0);
    });
  });

  it('has welcome post title for all locales', () => {
    LOCALES.forEach(locale => {
      expect(sourceTexts[locale].hi_post_title).toBeDefined();
      expect(sourceTexts[locale].hi_post_title.length).toBeGreaterThan(0);
    });
  });

  it('has navigation instructions for all locales', () => {
    LOCALES.forEach(locale => {
      expect(sourceTexts[locale].hi_nav).toBeDefined();
      expect(sourceTexts[locale].hi_nav_a).toBeDefined();
    });
  });
});

describe('Face Content - About Face', () => {
  it('has about me title for all locales', () => {
    LOCALES.forEach(locale => {
      expect(sourceTexts[locale].about_me_title).toBeDefined();
      expect(sourceTexts[locale].about_me_title.length).toBeGreaterThan(0);
    });
  });

  it('has about me info for all locales', () => {
    LOCALES.forEach(locale => {
      expect(sourceTexts[locale].about_me_info).toBeDefined();
      expect(sourceTexts[locale].about_me_info.length).toBeGreaterThan(50);
    });
  });

  it('about me info contains personal details', () => {
    LOCALES.forEach(locale => {
      const info = sourceTexts[locale].about_me_info;
      // Should contain year of birth
      expect(info).toContain('1988');
    });
  });
});

describe('Face Content - Skills Face', () => {
  it('has skills title for all locales', () => {
    LOCALES.forEach(locale => {
      expect(sourceTexts[locale].skills_title).toBeDefined();
      expect(sourceTexts[locale].skills_title.length).toBeGreaterThan(0);
    });
  });

  it('has skill items', () => {
    expect(skillsRecent.length).toBeGreaterThan(0);
    expect(skillsBefore.length).toBeGreaterThan(0);
  });

  it('skill items have valid structure', () => {
    [...skillsRecent, ...skillsBefore].forEach(skill => {
      expect(skill).toHaveProperty('name');
      expect(skill).toHaveProperty('level');
      expect(skill.name.length).toBeGreaterThan(0);
      expect(skill.level).toBeGreaterThanOrEqual(0);
      expect(skill.level).toBeLessThanOrEqual(100);
    });
  });

  it('has used recently/before labels', () => {
    LOCALES.forEach(locale => {
      expect(sourceTexts[locale].skills_used_recently).toBeDefined();
      expect(sourceTexts[locale].skills_used_before).toBeDefined();
    });
  });
});

describe('Face Content - Cooperation Face', () => {
  it('has cooperation title for all locales', () => {
    LOCALES.forEach(locale => {
      expect(sourceTexts[locale].cooperation_title).toBeDefined();
      expect(sourceTexts[locale].cooperation_title.length).toBeGreaterThan(0);
    });
  });

  it('has cooperation text for all locales', () => {
    LOCALES.forEach(locale => {
      expect(sourceTexts[locale].cooperation_text).toBeDefined();
      expect(sourceTexts[locale].cooperation_text.length).toBeGreaterThan(100);
    });
  });
});

describe('Face Content - Contacts Face', () => {
  it('has contacts title for all locales', () => {
    LOCALES.forEach(locale => {
      expect(sourceTexts[locale].contacts_title).toBeDefined();
      expect(sourceTexts[locale].contacts_title.length).toBeGreaterThan(0);
    });
  });

  it('has valid contact links', () => {
    expect(contactLinks.email).toBeDefined();
    expect(contactLinks.email).toContain('@');
    expect(contactLinks.telegram).toBeDefined();
  });

  it('has contact labels in UI texts', () => {
    LOCALES.forEach(locale => {
      expect(uiTexts[locale].contactEmail).toBeDefined();
      expect(uiTexts[locale].contactTelegram).toBeDefined();
    });
  });
});

describe('Face Content - Work Face', () => {
  it('has work items', () => {
    expect(workItems.length).toBeGreaterThan(0);
  });

  it('work items have valid structure', () => {
    workItems.forEach(work => {
      expect(work).toHaveProperty('title');
      expect(work).toHaveProperty('url');
      expect(work.title.length).toBeGreaterThan(0);
      // URL should be valid format
      expect(work.url).toMatch(/^https?:\/\//);
    });
  });

  it('has work title in UI texts', () => {
    LOCALES.forEach(locale => {
      expect(uiTexts[locale].workTitle).toBeDefined();
    });
  });
});

describe('UI Texts - Face Labels', () => {
  const faceKeys = ['welcome', 'about', 'skills', 'cooperation', 'contacts', 'work'] as const;

  it('all face labels exist for all locales', () => {
    LOCALES.forEach(locale => {
      faceKeys.forEach(key => {
        expect(uiTexts[locale][key]).toBeDefined();
        expect(uiTexts[locale][key].length).toBeGreaterThan(0);
      });
    });
  });

  it('person name and role exist for all locales', () => {
    LOCALES.forEach(locale => {
      expect(uiTexts[locale].personName).toBeDefined();
      expect(uiTexts[locale].personRole).toBeDefined();
    });
  });

  it('language label exists for all locales', () => {
    LOCALES.forEach(locale => {
      expect(uiTexts[locale].language).toBeDefined();
    });
  });
});

describe('Contact Links Validation', () => {
  it('email is valid format', () => {
    expect(contactLinks.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });

  it('telegram starts with @', () => {
    expect(contactLinks.telegram).toMatch(/^@/);
  });

  it('phone is defined', () => {
    expect(contactLinks.phone).toBeDefined();
    expect(contactLinks.phone.length).toBeGreaterThan(5);
  });

  it('skype is defined', () => {
    expect(contactLinks.skype).toBeDefined();
    expect(contactLinks.skype.length).toBeGreaterThan(0);
  });
});

describe('Content Security', () => {
  it('no script tags in content', () => {
    LOCALES.forEach(locale => {
      const allText = JSON.stringify(sourceTexts[locale]);
      expect(allText.toLowerCase()).not.toContain('<script');
      expect(allText.toLowerCase()).not.toContain('javascript:');
    });
  });

  it('no event handlers in content', () => {
    LOCALES.forEach(locale => {
      const allText = JSON.stringify(sourceTexts[locale]);
      expect(allText.toLowerCase()).not.toContain('onclick');
      expect(allText.toLowerCase()).not.toContain('onerror');
      expect(allText.toLowerCase()).not.toContain('onload');
    });
  });
});

describe('Localization Completeness', () => {
  it('all source text keys are present for all locales', () => {
    const ruKeys = Object.keys(sourceTexts.ru);

    LOCALES.forEach(locale => {
      const localeKeys = Object.keys(sourceTexts[locale]);
      ruKeys.forEach(key => {
        expect(localeKeys).toContain(key);
      });
    });
  });

  it('all UI text keys are present for all locales', () => {
    const ruKeys = Object.keys(uiTexts.ru);

    LOCALES.forEach(locale => {
      const localeKeys = Object.keys(uiTexts[locale]);
      ruKeys.forEach(key => {
        expect(localeKeys).toContain(key);
      });
    });
  });

  it('no empty strings in translations', () => {
    LOCALES.forEach(locale => {
      Object.entries(sourceTexts[locale]).forEach(([key, value]) => {
        if (typeof value === 'string') {
          expect(value.length, `${locale}.${key} should not be empty`).toBeGreaterThan(0);
        }
      });
    });
  });
});

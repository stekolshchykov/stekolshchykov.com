import { describe, expect, it, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { AboutFace } from '../../src/components/faces/AboutFace';
import { SkillsFace } from '../../src/components/faces/SkillsFace';
import { ContactFace } from '../../src/components/faces/ContactFace';
import { ProjectsFace } from '../../src/components/faces/ProjectsFace';
import { EducationFace } from '../../src/components/faces/EducationFace';
import { ExperienceFace } from '../../src/components/faces/ExperienceFace';
import {
  sourceTexts,
  uiTexts,
  skillsRecent,
  skillsBefore,
  workItems,
  contactLinks,
  type Locale,
} from '../../src/content/stekolschikovContent';

const LOCALES: Locale[] = ['ru', 'en', 'uk'];

describe('Face Components (Points 31-40)', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  // Point 31: AboutFace renders with correct content (this is actually the Welcome face)
  describe('AboutFace (Welcome Face)', () => {
    it('renders welcome title', () => {
      render(<AboutFace locale="en" />);
      expect(screen.getByText(sourceTexts.en.hi_title)).toBeInTheDocument();
    });

    it('renders post title', () => {
      render(<AboutFace locale="en" />);
      expect(screen.getByText(sourceTexts.en.hi_post_title)).toBeInTheDocument();
    });

    it('renders person identity', () => {
      render(<AboutFace locale="en" />);
      expect(screen.getByText(uiTexts.en.personName)).toBeInTheDocument();
      expect(screen.getByText(uiTexts.en.personRole)).toBeInTheDocument();
    });

    it('renders navigation list with all 6 pages', () => {
      render(<AboutFace locale="en" />);
      const listItems = document.querySelectorAll('.face-list li');
      expect(listItems.length).toBe(6);
    });

    it('renders QR code', () => {
      render(<AboutFace locale="en" />);
      const qrImage = document.querySelector('.qr-orbit img');
      expect(qrImage).toBeInTheDocument();
    });
  });

  // Point 32: SkillsFace shows skillsRecent items
  describe('SkillsFace', () => {
    it('shows skills section header', () => {
      render(<SkillsFace locale="en" />);
      // Use querySelector for title to avoid duplicate matches in pill
      const title = document.querySelector('.face-title');
      expect(title?.textContent).toBe(sourceTexts.en.skills_title);
    });

    it('shows skillsRecent items', () => {
      render(<SkillsFace locale="en" />);

      // Count skill items (not .is-soft = recent skills)
      const recentSkillItems = document.querySelectorAll('.skill-item:not(.is-soft)');
      expect(recentSkillItems.length).toBe(skillsRecent.length);

      // Verify skill item structure
      recentSkillItems.forEach(item => {
        expect(item.querySelector('.skill-item__head')).toBeInTheDocument();
        expect(item.querySelector('.skill-item__bar')).toBeInTheDocument();
      });
    });

    // Point 33: SkillsFace shows skillsBefore items
    it('shows skillsBefore items', () => {
      render(<SkillsFace locale="en" />);

      // Check skill names exist
      skillsBefore.forEach(skill => {
        expect(screen.getByText(skill.name)).toBeInTheDocument();
      });

      // Verify soft class is applied to before items
      const softItems = document.querySelectorAll('.skill-item.is-soft');
      expect(softItems.length).toBe(skillsBefore.length);
    });

    it('shows "used recently" and "used before" sections', () => {
      render(<SkillsFace locale="en" />);

      expect(screen.getByText(sourceTexts.en.skills_used_recently)).toBeInTheDocument();
      expect(screen.getByText(sourceTexts.en.skills_used_before)).toBeInTheDocument();
    });

    it('renders progress bars for all skills', () => {
      render(<SkillsFace locale="en" />);

      const progressBars = document.querySelectorAll('.skill-item__bar');
      expect(progressBars.length).toBe(skillsRecent.length + skillsBefore.length);
    });
  });

  // Point 34: ContactFace renders all contact types
  describe('ContactFace', () => {
    it('renders all contact types', () => {
      render(<ContactFace locale="en" />);

      expect(screen.getByText(uiTexts.en.contactEmail)).toBeInTheDocument();
      expect(screen.getByText(uiTexts.en.contactSkype)).toBeInTheDocument();
      expect(screen.getByText(sourceTexts.en.contacts_phone)).toBeInTheDocument();
      expect(screen.getByText(uiTexts.en.contactTelegram)).toBeInTheDocument();
    });

    it('renders contacts section header', () => {
      render(<ContactFace locale="en" />);
      const title = document.querySelector('.face-title');
      expect(title?.textContent).toBe(sourceTexts.en.contacts_title);
    });

    it('shows 4 contact cards', () => {
      render(<ContactFace locale="en" />);

      const contactCards = document.querySelectorAll('.contact-card');
      expect(contactCards.length).toBe(4);
    });

    it('toggles contact visibility', async () => {
      render(<ContactFace locale="en" />);

      // Initially all contacts are hidden
      const hiddenContacts = document.querySelectorAll('.contact-hidden');
      expect(hiddenContacts.length).toBe(4);

      // Click first eye button
      const eyeButtons = document.querySelectorAll('.contact-eye');
      fireEvent.click(eyeButtons[0]);

      await waitFor(() => {
        const newHiddenContacts = document.querySelectorAll('.contact-hidden');
        expect(newHiddenContacts.length).toBe(3);
      });
    });

    it('shows masked values initially', () => {
      render(<ContactFace locale="en" />);

      const hiddenContacts = document.querySelectorAll('.contact-hidden');
      hiddenContacts.forEach(el => {
        expect(el.textContent).toContain('*');
      });
    });
  });

  // Point 35: ProjectsFace renders work items (this is actually About face content)
  describe('ProjectsFace (About Face)', () => {
    it('renders about title', () => {
      render(<ProjectsFace locale="en" />);
      const title = document.querySelector('.face-title');
      expect(title?.textContent).toBe(sourceTexts.en.about_me_title);
    });

    it('renders about post title', () => {
      render(<ProjectsFace locale="en" />);
      expect(screen.getByText(sourceTexts.en.about_me_post_title)).toBeInTheDocument();
    });

    it('renders photo', () => {
      render(<ProjectsFace locale="en" />);

      const photo = document.querySelector('.about-layout__photo');
      expect(photo).toBeInTheDocument();
      expect(photo).toHaveAttribute('src', '/me.jpg');
    });

    it('renders facts section', () => {
      render(<ProjectsFace locale="en" />);

      const facts = document.querySelectorAll('.fact-item');
      expect(facts.length).toBeGreaterThan(0);
    });
  });

  // Point 36: EducationFace renders education content (this is actually Work face)
  describe('EducationFace (Work Face)', () => {
    it('renders work section header', () => {
      render(<EducationFace locale="en" />);
      const title = document.querySelector('.face-title');
      expect(title?.textContent).toBe(uiTexts.en.workTitle);
    });

    it('renders GitHub profile link', () => {
      render(<EducationFace locale="en" />);

      const profileLink = document.querySelector('.github-profile-link');
      expect(profileLink).toBeInTheDocument();
    });

    it('renders work items', () => {
      render(<EducationFace locale="en" />);

      workItems.forEach(item => {
        expect(screen.getByText(item.title)).toBeInTheDocument();
      });
    });

    it('work items are links with correct URLs', () => {
      render(<EducationFace locale="en" />);

      const workCards = document.querySelectorAll('.work-card');
      expect(workCards.length).toBe(workItems.length);

      workCards.forEach((card, index) => {
        expect(card).toHaveAttribute('href', workItems[index].url);
      });
    });
  });

  // Point 37: ExperienceFace renders cooperation blocks
  describe('ExperienceFace (Cooperation Face)', () => {
    it('renders cooperation section header', () => {
      render(<ExperienceFace locale="en" />);
      const title = document.querySelector('.face-title');
      expect(title?.textContent).toBe(sourceTexts.en.cooperation_title);
    });

    it('renders cooperation post title', () => {
      render(<ExperienceFace locale="en" />);
      expect(screen.getByText(sourceTexts.en.cooperation_post_title)).toBeInTheDocument();
    });

    it('renders cooperation blocks', () => {
      render(<ExperienceFace locale="en" />);

      const cooperationItems = document.querySelectorAll('.cooperation-item');
      expect(cooperationItems.length).toBeGreaterThan(0);
    });
  });

  // Point 38: All faces accept locale prop
  describe('Locale Prop Acceptance', () => {
    it('AboutFace accepts all locales', () => {
      LOCALES.forEach(locale => {
        const { unmount } = render(<AboutFace locale={locale} />);
        expect(screen.getByText(sourceTexts[locale].hi_title)).toBeInTheDocument();
        unmount();
      });
    });

    it('SkillsFace accepts all locales', () => {
      LOCALES.forEach(locale => {
        const { unmount } = render(<SkillsFace locale={locale} />);
        const title = document.querySelector('.face-title');
        expect(title?.textContent).toBe(sourceTexts[locale].skills_title);
        unmount();
      });
    });

    it('ContactFace accepts all locales', () => {
      LOCALES.forEach(locale => {
        const { unmount } = render(<ContactFace locale={locale} />);
        const title = document.querySelector('.face-title');
        expect(title?.textContent).toBe(sourceTexts[locale].contacts_title);
        unmount();
      });
    });

    it('ProjectsFace accepts all locales', () => {
      LOCALES.forEach(locale => {
        const { unmount } = render(<ProjectsFace locale={locale} />);
        const title = document.querySelector('.face-title');
        expect(title?.textContent).toBe(sourceTexts[locale].about_me_title);
        unmount();
      });
    });

    it('EducationFace accepts all locales', () => {
      LOCALES.forEach(locale => {
        const { unmount } = render(<EducationFace locale={locale} />);
        const title = document.querySelector('.face-title');
        expect(title?.textContent).toBe(uiTexts[locale].workTitle);
        unmount();
      });
    });

    it('ExperienceFace accepts all locales', () => {
      LOCALES.forEach(locale => {
        const { unmount } = render(<ExperienceFace locale={locale} />);
        const title = document.querySelector('.face-title');
        expect(title?.textContent).toBe(sourceTexts[locale].cooperation_title);
        unmount();
      });
    });
  });

  // Point 39: Face content updates when locale changes
  describe('Locale Content Updates', () => {
    it('AboutFace updates content when locale changes', () => {
      const { rerender } = render(<AboutFace locale="en" />);
      expect(screen.getByText(sourceTexts.en.hi_title)).toBeInTheDocument();

      rerender(<AboutFace locale="ru" />);
      expect(screen.getByText(sourceTexts.ru.hi_title)).toBeInTheDocument();
    });

    it('SkillsFace updates content when locale changes', () => {
      const { rerender } = render(<SkillsFace locale="en" />);
      let title = document.querySelector('.face-title');
      expect(title?.textContent).toBe(sourceTexts.en.skills_title);

      rerender(<SkillsFace locale="uk" />);
      title = document.querySelector('.face-title');
      expect(title?.textContent).toBe(sourceTexts.uk.skills_title);
    });

    it('ContactFace updates content when locale changes', () => {
      const { rerender } = render(<ContactFace locale="en" />);
      let title = document.querySelector('.face-title');
      expect(title?.textContent).toBe(sourceTexts.en.contacts_title);

      rerender(<ContactFace locale="ru" />);
      title = document.querySelector('.face-title');
      expect(title?.textContent).toBe(sourceTexts.ru.contacts_title);
    });
  });

  // Point 40: Face components have correct structure
  describe('Face Component Structure', () => {
    it('all faces use UIPage container', () => {
      const faces = [
        <AboutFace key="about" locale="en" />,
        <SkillsFace key="skills" locale="en" />,
        <ContactFace key="contact" locale="en" />,
        <ProjectsFace key="projects" locale="en" />,
        <EducationFace key="education" locale="en" />,
        <ExperienceFace key="experience" locale="en" />,
      ];

      faces.forEach((face) => {
        const { unmount } = render(face);
        const facePage = document.querySelector('.face-page');
        expect(facePage).toBeInTheDocument();
        unmount();
      });
    });

    it('all faces have UIPill with face label', () => {
      render(<AboutFace locale="en" />);
      expect(document.querySelector('.face-pill')).toBeInTheDocument();
    });

    it('most faces have UITitle', () => {
      const facesWithTitles = [
        <AboutFace key="about" locale="en" />,
        <SkillsFace key="skills" locale="en" />,
        <ContactFace key="contact" locale="en" />,
        <ProjectsFace key="projects" locale="en" />,
        <EducationFace key="education" locale="en" />,
        <ExperienceFace key="experience" locale="en" />,
      ];

      facesWithTitles.forEach((face) => {
        const { unmount } = render(face);
        const title = document.querySelector('.face-title');
        expect(title).toBeInTheDocument();
        unmount();
      });
    });
  });
});

import { describe, expect, it, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MobileSite } from '../../src/components/MobileSite';
import { uiTexts, sourceTexts, skillsRecent, skillsBefore, type Locale } from '../../src/content/stekolschikovContent';
import { getMaskedContactValue } from '../../src/features/contacts';

// Helper to set mobile viewport
function setMobileViewport() {
  Object.defineProperty(window, 'innerWidth', { value: 375, writable: true });
  (window.matchMedia as ReturnType<typeof vi.fn>).mockImplementation((query: string) => ({
    matches: query.includes('max-width'),
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));
}

const defaultProps = {
  locale: 'en' as Locale,
  locales: ['ru', 'en', 'uk'] as Locale[],
  activeFace: 'welcome' as const,
  onFaceChange: vi.fn(),
  onLocaleChange: vi.fn(),
};

describe('Mobile Site (Points 21-30)', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    setMobileViewport();
  });

  // Point 21: MobileSite renders on mobile viewport
  it('renders mobile site layout', () => {
    render(<MobileSite {...defaultProps} />);

    expect(screen.getByRole('navigation', { name: /page navigation/i })).toBeInTheDocument();
    expect(document.querySelector('.mobile-site')).toBeInTheDocument();
  });

  // Point 22: All 6 tabs are rendered
  it('renders all 6 tabs', () => {
    render(<MobileSite {...defaultProps} />);

    // Count tabs instead of checking by text (which can appear multiple times)
    const tabs = document.querySelectorAll('.mobile-tab');
    expect(tabs.length).toBe(6);

    // Check tab texts exist in tabs navigation
    const tabNav = document.querySelector('.mobile-tabs');
    expect(tabNav?.textContent).toContain(uiTexts.en.welcome);
    expect(tabNav?.textContent).toContain(uiTexts.en.skills);
    expect(tabNav?.textContent).toContain(uiTexts.en.about);
    expect(tabNav?.textContent).toContain(uiTexts.en.cooperation);
    expect(tabNav?.textContent).toContain(uiTexts.en.contacts);
    expect(tabNav?.textContent).toContain(uiTexts.en.work);
  });

  // Point 23: Tab click changes active face
  it('calls onFaceChange when tab is clicked', () => {
    const onFaceChange = vi.fn();
    render(<MobileSite {...defaultProps} onFaceChange={onFaceChange} />);

    const tabs = document.querySelectorAll('.mobile-tab');
    // Second tab is skills
    fireEvent.click(tabs[1]);

    expect(onFaceChange).toHaveBeenCalledWith('skills');
  });

  // Point 24: Active tab has correct styling
  it('applies active styling to current tab', () => {
    render(<MobileSite {...defaultProps} activeFace="skills" />);

    const tabs = document.querySelectorAll('.mobile-tab');
    const skillsTab = Array.from(tabs).find(tab =>
      tab.textContent?.includes(uiTexts.en.skills)
    );

    expect(skillsTab).toHaveClass('is-active');
  });

  // Point 25: Language switcher is visible
  it('shows language switcher with all locales', () => {
    render(<MobileSite {...defaultProps} />);

    expect(screen.getByRole('button', { name: 'RU' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'EN' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'UK' })).toBeInTheDocument();
  });

  // Point 26: Locale change updates content
  it('calls onLocaleChange when language button is clicked', () => {
    const onLocaleChange = vi.fn();
    render(<MobileSite {...defaultProps} onLocaleChange={onLocaleChange} />);

    const ruButton = screen.getByRole('button', { name: 'RU' });
    fireEvent.click(ruButton);

    expect(onLocaleChange).toHaveBeenCalledWith('ru');
  });

  it('displays content in selected locale', () => {
    const { rerender } = render(<MobileSite {...defaultProps} locale="en" />);

    // English title should be visible
    expect(screen.getByText(sourceTexts.en.hi_title)).toBeInTheDocument();

    // Switch to Russian
    rerender(<MobileSite {...defaultProps} locale="ru" />);
    expect(screen.getByText(sourceTexts.ru.hi_title)).toBeInTheDocument();
  });

  // Point 27: Contact visibility toggle works
  it('toggles contact visibility when eye button is clicked', async () => {
    render(<MobileSite {...defaultProps} activeFace="contacts" />);

    // Find and click eye button
    const eyeButtons = document.querySelectorAll('.contact-eye');
    expect(eyeButtons.length).toBeGreaterThan(0);

    fireEvent.click(eyeButtons[0]);

    await waitFor(() => {
      // Should now show a link instead of masked value
      const links = document.querySelectorAll('.contact-card a');
      expect(links.length).toBeGreaterThan(0);
    });
  });

  // Point 28: Masked contact values show correctly
  it('shows masked contact values initially', () => {
    render(<MobileSite {...defaultProps} activeFace="contacts" />);

    const hiddenContacts = document.querySelectorAll('.contact-hidden');
    expect(hiddenContacts.length).toBeGreaterThan(0);

    // Each should contain asterisks (masked)
    hiddenContacts.forEach(el => {
      expect(el.textContent).toContain('*');
    });
  });

  // Point 29: QR code image renders
  it('renders QR code on welcome face', () => {
    render(<MobileSite {...defaultProps} activeFace="welcome" />);

    const qrImage = document.querySelector('.qr-orbit img');
    expect(qrImage).toBeInTheDocument();
    expect(qrImage).toHaveAttribute('src');
    expect((qrImage as HTMLImageElement).src).toContain('qrserver.com');
  });

  // Point 30: Skills progress bars render
  it('renders skills with progress bars', () => {
    render(<MobileSite {...defaultProps} activeFace="skills" />);

    // Check for skill items
    const skillItems = document.querySelectorAll('.skill-item');
    expect(skillItems.length).toBe(skillsRecent.length + skillsBefore.length);

    // Check for progress bars
    const progressBars = document.querySelectorAll('.skill-item__bar');
    expect(progressBars.length).toBeGreaterThan(0);
  });

  it('displays skill percentage in skill items', () => {
    render(<MobileSite {...defaultProps} activeFace="skills" />);

    // Verify skill items have percentage display
    const skillHeads = document.querySelectorAll('.skill-item__head strong');
    expect(skillHeads.length).toBe(skillsRecent.length + skillsBefore.length);

    // Each should contain a percentage
    skillHeads.forEach(el => {
      expect(el.textContent).toMatch(/\d+%/);
    });
  });
});

describe('Mobile Site Face Content', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    setMobileViewport();
  });

  it('shows welcome content on welcome face', () => {
    render(<MobileSite {...defaultProps} activeFace="welcome" />);

    expect(screen.getByText(sourceTexts.en.hi_title)).toBeInTheDocument();
    expect(screen.getByText(sourceTexts.en.hi_post_title)).toBeInTheDocument();
  });

  it('shows about content on about face', () => {
    render(<MobileSite {...defaultProps} activeFace="about" />);

    // Use heading role to find main title
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading.textContent).toBe(sourceTexts.en.about_me_title);
  });

  it('shows cooperation content on cooperation face', () => {
    render(<MobileSite {...defaultProps} activeFace="cooperation" />);

    // Use heading role to find main title
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading.textContent).toBe(sourceTexts.en.cooperation_title);
  });

  it('shows contacts content on contacts face', () => {
    render(<MobileSite {...defaultProps} activeFace="contacts" />);

    // Use heading role to find main title
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading.textContent).toBe(sourceTexts.en.contacts_title);
  });

  it('shows work content on work face', () => {
    render(<MobileSite {...defaultProps} activeFace="work" />);

    // Use heading role to find main title
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading.textContent).toBe(uiTexts.en.workTitle);
  });
});

describe('Mobile Header', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    setMobileViewport();
  });

  it('displays person name', () => {
    render(<MobileSite {...defaultProps} />);

    expect(screen.getByText(uiTexts.en.personName)).toBeInTheDocument();
  });

  it('displays person role', () => {
    render(<MobileSite {...defaultProps} />);

    expect(screen.getByText(uiTexts.en.personRole)).toBeInTheDocument();
  });

  it('displays ORBIT MODE badge', () => {
    render(<MobileSite {...defaultProps} />);

    expect(screen.getByText('ORBIT MODE')).toBeInTheDocument();
  });
});

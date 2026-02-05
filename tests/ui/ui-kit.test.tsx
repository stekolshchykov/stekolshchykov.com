import { describe, expect, it, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import {
  UIPage,
  UIPill,
  UITitle,
  UILead,
  UIBlock,
  UILangButton,
  UITabButton,
  UIIconButton,
  UIKeyButton,
  UILink,
} from '../../src/ui-kit';

describe('UI Kit Components (Points 41-50)', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  // Point 41: UIPage renders children correctly
  describe('UIPage', () => {
    it('renders children correctly', () => {
      render(
        <UIPage>
          <div data-testid="child">Child Content</div>
        </UIPage>
      );

      expect(screen.getByTestId('child')).toBeInTheDocument();
      expect(screen.getByText('Child Content')).toBeInTheDocument();
    });

    it('has face-page class', () => {
      render(<UIPage>Content</UIPage>);

      const page = document.querySelector('.face-page');
      expect(page).toBeInTheDocument();
    });

    it('accepts additional className', () => {
      render(<UIPage className="custom-class">Content</UIPage>);

      const page = document.querySelector('.face-page');
      expect(page).toHaveClass('custom-class');
    });
  });

  // Point 42: UILangButton shows active state
  describe('UILangButton', () => {
    it('shows active state when active prop is true', () => {
      render(<UILangButton active>EN</UILangButton>);

      const button = screen.getByRole('button', { name: 'EN' });
      expect(button).toHaveClass('is-active');
    });

    it('does not show active state when active prop is false', () => {
      render(<UILangButton active={false}>RU</UILangButton>);

      const button = screen.getByRole('button', { name: 'RU' });
      expect(button).not.toHaveClass('is-active');
    });

    it('has lang-btn class', () => {
      render(<UILangButton>UK</UILangButton>);

      const button = screen.getByRole('button', { name: 'UK' });
      expect(button).toHaveClass('lang-btn');
    });

    it('triggers onClick handler', () => {
      const onClick = vi.fn();
      render(<UILangButton onClick={onClick}>EN</UILangButton>);

      fireEvent.click(screen.getByRole('button', { name: 'EN' }));
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });

  // Point 43: UIKeyButton renders code, arrow, label
  describe('UIKeyButton', () => {
    it('renders code', () => {
      render(<UIKeyButton code="Q" label="Skills" direction="up" />);

      expect(screen.getByText('Q')).toBeInTheDocument();
    });

    it('renders label', () => {
      render(<UIKeyButton code="Q" label="Skills" direction="up" />);

      expect(screen.getByText('Skills')).toBeInTheDocument();
    });

    it('renders arrow icon for up direction', () => {
      render(<UIKeyButton code="W" label="Contacts" direction="up" />);

      const keyArrow = document.querySelector('.key-arrow');
      expect(keyArrow).toBeInTheDocument();
      // Arrow icon should be rendered
      expect(keyArrow?.querySelector('svg')).toBeInTheDocument();
    });

    it('renders arrow icon for down direction', () => {
      render(<UIKeyButton code="S" label="Work" direction="down" />);

      const keyArrow = document.querySelector('.key-arrow');
      expect(keyArrow).toBeInTheDocument();
    });

    it('renders arrow icon for left direction', () => {
      render(<UIKeyButton code="A" label="About" direction="left" />);

      const keyArrow = document.querySelector('.key-arrow');
      expect(keyArrow).toBeInTheDocument();
    });

    it('renders arrow icon for right direction', () => {
      render(<UIKeyButton code="D" label="Cooperation" direction="right" />);

      const keyArrow = document.querySelector('.key-arrow');
      expect(keyArrow).toBeInTheDocument();
    });

    // Point 44: UIKeyButton pressed state works
    it('shows pressed state when pressed prop is true', () => {
      render(<UIKeyButton code="W" label="Test" pressed />);

      const button = screen.getByRole('button');
      expect(button).toHaveClass('is-pressed');
    });

    it('does not show pressed state when pressed prop is false', () => {
      render(<UIKeyButton code="W" label="Test" pressed={false} />);

      const button = screen.getByRole('button');
      expect(button).not.toHaveClass('is-pressed');
    });

    it('shows active state when active prop is true', () => {
      render(<UIKeyButton code="S" label="Test" active />);

      const button = screen.getByRole('button');
      expect(button).toHaveClass('is-active');
    });

    it('has nav-key class', () => {
      render(<UIKeyButton code="W" label="Test" />);

      const button = screen.getByRole('button');
      expect(button).toHaveClass('nav-key');
    });

    it('renders aria-keyshortcuts attribute', () => {
      render(<UIKeyButton code="W" label="Test" ariaKeyShortcuts="ArrowUp W" />);

      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-keyshortcuts', 'ArrowUp W');
    });
  });

  // Point 45: UITabButton active state works
  describe('UITabButton', () => {
    it('shows active state when active prop is true', () => {
      render(<UITabButton active>Tab</UITabButton>);

      const button = screen.getByRole('button', { name: 'Tab' });
      expect(button).toHaveClass('is-active');
    });

    it('does not show active state when active prop is false', () => {
      render(<UITabButton active={false}>Tab</UITabButton>);

      const button = screen.getByRole('button', { name: 'Tab' });
      expect(button).not.toHaveClass('is-active');
    });

    it('has mobile-tab class', () => {
      render(<UITabButton>Tab</UITabButton>);

      const button = screen.getByRole('button', { name: 'Tab' });
      expect(button).toHaveClass('mobile-tab');
    });

    it('triggers onClick handler', () => {
      const onClick = vi.fn();
      render(<UITabButton onClick={onClick}>Tab</UITabButton>);

      fireEvent.click(screen.getByRole('button', { name: 'Tab' }));
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });

  // Point 46: UIIconButton renders icon children
  describe('UIIconButton', () => {
    it('renders icon children', () => {
      render(
        <UIIconButton>
          <svg data-testid="icon" />
        </UIIconButton>
      );

      expect(screen.getByTestId('icon')).toBeInTheDocument();
    });

    it('has contact-eye class', () => {
      render(<UIIconButton>Icon</UIIconButton>);

      const button = screen.getByRole('button');
      expect(button).toHaveClass('contact-eye');
    });

    it('triggers onClick handler', () => {
      const onClick = vi.fn();
      render(<UIIconButton onClick={onClick}>Icon</UIIconButton>);

      fireEvent.click(screen.getByRole('button'));
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('accepts aria-label', () => {
      render(<UIIconButton aria-label="Toggle visibility">Icon</UIIconButton>);

      const button = screen.getByRole('button', { name: 'Toggle visibility' });
      expect(button).toBeInTheDocument();
    });
  });

  // Point 47: UILink renders as anchor
  describe('UILink', () => {
    it('renders as anchor element', () => {
      render(<UILink href="https://example.com">Link Text</UILink>);

      const link = screen.getByRole('link', { name: 'Link Text' });
      expect(link).toBeInTheDocument();
      expect(link.tagName).toBe('A');
    });

    it('has correct href attribute', () => {
      render(<UILink href="https://example.com">Link</UILink>);

      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('href', 'https://example.com');
    });

    it('accepts target attribute', () => {
      render(<UILink href="https://example.com" target="_blank">Link</UILink>);

      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('target', '_blank');
    });

    it('accepts rel attribute', () => {
      render(<UILink href="https://example.com" rel="noreferrer">Link</UILink>);

      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('rel', 'noreferrer');
    });

    it('accepts custom className', () => {
      render(<UILink href="https://example.com" className="custom-link">Link</UILink>);

      const link = screen.getByRole('link');
      expect(link).toHaveClass('custom-link');
    });
  });

  // Point 48: KeyArrowIcon renders correct icon (tested via UIKeyButton)
  describe('KeyArrowIcon (via UIKeyButton)', () => {
    it('renders up arrow icon', () => {
      render(<UIKeyButton code="W" label="Up" direction="up" />);

      const keyArrow = document.querySelector('.key-arrow');
      const svg = keyArrow?.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('renders down arrow icon', () => {
      render(<UIKeyButton code="S" label="Down" direction="down" />);

      const keyArrow = document.querySelector('.key-arrow');
      const svg = keyArrow?.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('renders left arrow icon', () => {
      render(<UIKeyButton code="A" label="Left" direction="left" />);

      const keyArrow = document.querySelector('.key-arrow');
      const svg = keyArrow?.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('renders right arrow icon', () => {
      render(<UIKeyButton code="D" label="Right" direction="right" />);

      const keyArrow = document.querySelector('.key-arrow');
      const svg = keyArrow?.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('renders fallback arrow text when direction not specified', () => {
      render(<UIKeyButton code="X" label="Test" arrow="↑" />);

      expect(screen.getByText('↑')).toBeInTheDocument();
    });
  });

  // Point 49: UIPill, UITitle, UILead render correctly
  describe('UIPill', () => {
    it('renders children', () => {
      render(<UIPill>Pill Content</UIPill>);

      expect(screen.getByText('Pill Content')).toBeInTheDocument();
    });

    it('has face-pill class', () => {
      render(<UIPill>Pill</UIPill>);

      const pill = document.querySelector('.face-pill');
      expect(pill).toBeInTheDocument();
    });

    it('accepts additional className', () => {
      render(<UIPill className="custom-pill">Pill</UIPill>);

      const pill = document.querySelector('.face-pill');
      expect(pill).toHaveClass('custom-pill');
    });
  });

  describe('UITitle', () => {
    it('renders children', () => {
      render(<UITitle>Title Content</UITitle>);

      expect(screen.getByText('Title Content')).toBeInTheDocument();
    });

    it('renders as h2 element', () => {
      render(<UITitle>Title</UITitle>);

      const title = screen.getByRole('heading', { level: 2 });
      expect(title).toBeInTheDocument();
    });

    it('has face-title class', () => {
      render(<UITitle>Title</UITitle>);

      const title = document.querySelector('.face-title');
      expect(title).toBeInTheDocument();
    });
  });

  describe('UILead', () => {
    it('renders children', () => {
      render(<UILead>Lead Content</UILead>);

      expect(screen.getByText('Lead Content')).toBeInTheDocument();
    });

    it('renders as p element', () => {
      render(<UILead>Lead</UILead>);

      const lead = document.querySelector('.face-lead');
      expect(lead?.tagName).toBe('P');
    });

    it('has face-lead class', () => {
      render(<UILead>Lead</UILead>);

      const lead = document.querySelector('.face-lead');
      expect(lead).toBeInTheDocument();
    });
  });

  // Point 50: UIBlock renders children
  describe('UIBlock', () => {
    it('renders children', () => {
      render(
        <UIBlock>
          <p data-testid="block-child">Block Content</p>
        </UIBlock>
      );

      expect(screen.getByTestId('block-child')).toBeInTheDocument();
      expect(screen.getByText('Block Content')).toBeInTheDocument();
    });

    it('has face-block class', () => {
      render(<UIBlock>Content</UIBlock>);

      const block = document.querySelector('.face-block');
      expect(block).toBeInTheDocument();
    });

    it('accepts additional className', () => {
      render(<UIBlock className="custom-block">Content</UIBlock>);

      const block = document.querySelector('.face-block');
      expect(block).toHaveClass('custom-block');
    });

    it('accepts additional HTML attributes', () => {
      render(<UIBlock data-custom="value">Content</UIBlock>);

      const block = document.querySelector('.face-block');
      expect(block).toHaveAttribute('data-custom', 'value');
    });
  });
});

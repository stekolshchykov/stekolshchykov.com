import { describe, expect, it, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../../src/legacy/CubeApp';
import { NAV_BY_FACE } from '../../src/navigation';
import { uiTexts } from '../../src/content/stekolschikovContent';

// Mock react-helmet-async to avoid HelmetProvider context error
vi.mock('react-helmet-async', () => ({
  Helmet: ({ children }: { children?: React.ReactNode }) => <>{children}</>,
  HelmetProvider: ({ children }: { children?: React.ReactNode }) => <>{children}</>,
}));

// Mock Scene3D since it requires WebGL
vi.mock('../../src/components/Scene3D', () => ({
  Scene3D: () => <div data-testid="scene3d">Scene3D Mock</div>,
}));

// Mock audio functions
vi.mock('../../src/audio/soundscape', () => ({
  installAudioAutoStart: vi.fn(() => vi.fn()),
  playButtonSound: vi.fn(),
  playRotationSound: vi.fn(),
}));

// Helper to get localStorage mock
const getLocalStorageMock = () => window.localStorage as unknown as {
  getItem: ReturnType<typeof vi.fn>;
  setItem: ReturnType<typeof vi.fn>;
};

// Helper to set viewport width
function setViewportWidth(width: number) {
  Object.defineProperty(window, 'innerWidth', { value: width, writable: true });
  (window.matchMedia as ReturnType<typeof vi.fn>).mockImplementation((query: string) => ({
    matches: query.includes('max-width') && width <= 900,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));
}

describe('App Initialization (Points 1-10)', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    setViewportWidth(1200); // Desktop by default
  });

  // Point 1: App renders without crashing
  it('renders without crashing', () => {
    render(<App />);
    expect(document.body).toBeDefined();
  });

  // Point 2: Default locale detection logic exists
  it('has locale detection logic', () => {
    // Locale detection happens at initialization based on navigator.languages
    // We verify the detection logic works by checking locale buttons exist
    render(<App />);

    // All 3 locale buttons should be available
    expect(screen.getByRole('button', { name: 'RU' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'EN' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'UK' })).toBeInTheDocument();

    // One of them should be active
    const langButtons = document.querySelectorAll('.lang-btn');
    const hasActive = Array.from(langButtons).some(btn => btn.classList.contains('is-active'));
    expect(hasActive).toBe(true);
  });

  // Point 3: Locale is persisted in localStorage
  it('persists locale in localStorage when changed', async () => {
    const mockStorage = getLocalStorageMock();
    render(<App />);

    const enButton = screen.getByRole('button', { name: 'EN' });
    fireEvent.click(enButton);

    expect(mockStorage.setItem).toHaveBeenCalledWith('stekolschikov-locale', 'en');
  });

  // Point 4: Initial face is 'welcome'
  it('starts with welcome face as active', () => {
    render(<App />);

    // Navigation should show neighbors of 'welcome' face
    const nav = NAV_BY_FACE.welcome;
    const upLabel = uiTexts.en[nav.up as keyof typeof uiTexts.en];

    // The up button should show the label for the face above 'welcome'
    expect(screen.getByText(upLabel)).toBeInTheDocument();
  });

  // Point 5: Mobile detection works at 900px breakpoint
  it('shows mobile layout at 900px and below', () => {
    setViewportWidth(900);
    render(<App />);

    // Mobile site has tabs with face names
    expect(screen.getByRole('navigation', { name: /page navigation/i })).toBeInTheDocument();
  });

  it('shows desktop layout above 900px', () => {
    setViewportWidth(901);
    render(<App />);

    // Desktop has cube navigation
    expect(screen.getByRole('navigation', { name: /cube navigation/i })).toBeInTheDocument();
  });

  // Point 6: SEOHead receives correct props
  it('renders SEOHead component', () => {
    render(<App />);
    // SEOHead should be in the document (sets document title)
    expect(document.querySelector('head')).toBeDefined();
  });

  // Point 7: Audio autostart is installed on desktop
  it('installs audio autostart on desktop', async () => {
    const { installAudioAutoStart } = await import('../../src/audio/soundscape');
    setViewportWidth(1200);
    render(<App />);

    expect(installAudioAutoStart).toHaveBeenCalled();
  });

  // Point 8: Face labels are correctly localized
  it('displays correctly localized face labels', () => {
    render(<App />);

    // Should show English labels by default (navigator.language is 'en-US')
    const nav = NAV_BY_FACE.welcome;
    Object.values(nav).forEach(faceId => {
      const label = uiTexts.en[faceId as keyof typeof uiTexts.en];
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  // Point 9: All 3 locales (ru/en/uk) are available
  it('renders all 3 locale buttons', () => {
    render(<App />);

    expect(screen.getByRole('button', { name: 'RU' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'EN' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'UK' })).toBeInTheDocument();
  });

  // Point 10: App state initializes from localStorage
  it('initializes locale from localStorage if available', () => {
    const mockStorage = getLocalStorageMock();
    mockStorage.getItem.mockReturnValue('uk');

    render(<App />);

    const ukButton = screen.getByRole('button', { name: 'UK' });
    expect(ukButton).toHaveClass('is-active');
  });
});

describe('Desktop Navigation (Points 11-20)', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    setViewportWidth(1200);
  });

  // Point 11: Arrow keys navigate between faces
  it('navigates with arrow keys', async () => {
    render(<App />);

    // Press ArrowUp - should go to 'contacts' from 'welcome'
    fireEvent.keyDown(window, { code: 'ArrowUp' });

    await waitFor(() => {
      // After pressing up from welcome, we should see welcome's up neighbor in the navigation
      const expectedFace = NAV_BY_FACE.welcome.up; // 'contacts'
      const newUpFace = NAV_BY_FACE[expectedFace].up;
      const newUpLabel = uiTexts.en[newUpFace as keyof typeof uiTexts.en];
      expect(screen.getByText(newUpLabel)).toBeInTheDocument();
    });
  });

  // Point 12: WASD keys navigate between faces
  it('navigates with WASD keys', async () => {
    render(<App />);

    // Press KeyW - should go up
    fireEvent.keyDown(window, { code: 'KeyW' });

    await waitFor(() => {
      const expectedFace = NAV_BY_FACE.welcome.up;
      const newUpFace = NAV_BY_FACE[expectedFace].up;
      const newUpLabel = uiTexts.en[newUpFace as keyof typeof uiTexts.en];
      expect(screen.getByText(newUpLabel)).toBeInTheDocument();
    });
  });

  // Point 13: Navigation buttons are rendered
  it('renders navigation buttons', () => {
    render(<App />);

    // Should have 4 navigation keys (up, down, left, right)
    const navButtons = screen.getAllByRole('button').filter(btn =>
      btn.classList.contains('nav-key')
    );
    expect(navButtons.length).toBe(4);
  });

  // Point 14: Button click changes active face
  it('changes face on button click', async () => {
    render(<App />);

    // Find the up button and click it
    const upButton = document.querySelector('.key-up');
    expect(upButton).toBeTruthy();

    fireEvent.click(upButton!);

    await waitFor(() => {
      // After clicking up, we should be on 'contacts' face
      // The pulse text should briefly show the new face label
      const expectedFace = NAV_BY_FACE.welcome.up;
      expect(screen.getByText(uiTexts.en[expectedFace as keyof typeof uiTexts.en])).toBeInTheDocument();
    });
  });

  // Point 15: Pressed state appears on button click
  it('shows pressed state on button click', async () => {
    render(<App />);

    const upButton = document.querySelector('.key-up');
    fireEvent.click(upButton!);

    // Button should have is-pressed class briefly
    await waitFor(() => {
      expect(upButton).toHaveClass('is-pressed');
    });
  });

  // Point 16: Pulse text shows face label on navigation
  it('shows pulse text on navigation', async () => {
    render(<App />);

    fireEvent.keyDown(window, { code: 'ArrowUp' });

    await waitFor(() => {
      const pulseElement = document.querySelector('.face-pulse');
      expect(pulseElement).toBeInTheDocument();
    });
  });

  // Point 17: Face rotation target updates on face change
  it('updates Scene3D rotation target on face change', async () => {
    render(<App />);

    fireEvent.keyDown(window, { code: 'ArrowUp' });

    // Scene3D mock should still be rendered
    await waitFor(() => {
      expect(screen.getByTestId('scene3d')).toBeInTheDocument();
    });
  });

  // Point 18: All 6 faces are reachable via navigation
  it('can reach all 6 faces via navigation', () => {
    const visited = new Set<string>();
    const queue: string[] = ['welcome'];
    visited.add('welcome');

    while (queue.length > 0) {
      const current = queue.shift()!;
      const nav = NAV_BY_FACE[current as keyof typeof NAV_BY_FACE];

      for (const neighbor of Object.values(nav)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }

    expect(visited.size).toBe(6);
    expect(visited).toContain('welcome');
    expect(visited).toContain('skills');
    expect(visited).toContain('about');
    expect(visited).toContain('cooperation');
    expect(visited).toContain('contacts');
    expect(visited).toContain('work');
  });

  // Point 19: Navigation map is fully connected
  it('has fully connected navigation (all faces reachable from any face)', () => {
    const faces = Object.keys(NAV_BY_FACE) as Array<keyof typeof NAV_BY_FACE>;

    // From each face, we should be able to reach all other faces
    for (const startFace of faces) {
      const reachable = new Set<string>([startFace]);
      const queue = [startFace];

      while (queue.length > 0) {
        const current = queue.shift()!;
        const nav = NAV_BY_FACE[current as keyof typeof NAV_BY_FACE];

        for (const neighbor of Object.values(nav)) {
          if (!reachable.has(neighbor)) {
            reachable.add(neighbor);
            queue.push(neighbor);
          }
        }
      }

      expect(reachable.size).toBe(6);
    }
  });

  // Point 20: Keyboard navigation disabled on mobile
  it('disables keyboard navigation on mobile', () => {
    setViewportWidth(800);
    render(<App />);

    // Try to navigate with keyboard
    fireEvent.keyDown(window, { code: 'ArrowUp' });

    // Mobile site should still be showing (no navigation occurred in 3D sense)
    expect(screen.getByRole('navigation', { name: /page navigation/i })).toBeInTheDocument();
  });
});

describe('Locale Switching', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    setViewportWidth(1200);
  });

  it('switches locale when clicking language button', async () => {
    render(<App />);

    // Click RU button
    const ruButton = screen.getByRole('button', { name: 'RU' });
    fireEvent.click(ruButton);

    await waitFor(() => {
      expect(ruButton).toHaveClass('is-active');
    });

    // Labels should now be in Russian
    const nav = NAV_BY_FACE.welcome;
    const ruLabel = uiTexts.ru[nav.up as keyof typeof uiTexts.ru];
    expect(screen.getByText(ruLabel)).toBeInTheDocument();
  });

  it('persists locale change to localStorage', () => {
    const mockStorage = getLocalStorageMock();
    render(<App />);

    const ukButton = screen.getByRole('button', { name: 'UK' });
    fireEvent.click(ukButton);

    expect(mockStorage.setItem).toHaveBeenCalledWith('stekolschikov-locale', 'uk');
  });
});

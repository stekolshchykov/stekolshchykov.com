import { lazy, Suspense, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './app.css';
import { type Locale, uiTexts } from './content/stekolschikovContent';
import { MobileSite } from './components/MobileSite';
import { LoadingScreen } from './components/LoadingScreen';
import { SEOHead } from './components/SEOHead';
import { FACE_CODES, FACE_ROTATIONS, getDirectionByKey, NAV_BY_FACE, type Direction, type FaceId } from './navigation';
import { UIKeyButton, UILangButton } from './ui-kit';
import { logEvent, logRuntime } from './observability/logger';
import { installAudioAutoStart, playButtonSound, playRotationSound } from './audio/soundscape';

const Scene3D = lazy(() => import('./components/Scene3D').then((m) => ({ default: m.Scene3D })));

const MOBILE_BREAKPOINT = 700;
const BOOT_LOADER_MIN_MS = 220;
const BOOT_LOADER_FADE_MS = 200;
const BOOT_LOADER_MAX_MS = 2200;
const LOCALES: Locale[] = ['ru', 'en', 'uk'];
const LOADER_LABELS: Record<Locale, string> = {
  ru: 'Запуск 3D-сцены...',
  en: 'Launching 3D scene...',
  uk: 'Запуск 3D-сцени...',
};


const STORAGE_LOCALE_KEY = 'stekolschikov-locale';

function detectSystemLocale(): Locale {
  if (typeof navigator === 'undefined') return 'ru';

  const candidates = Array.isArray(navigator.languages) && navigator.languages.length > 0
    ? navigator.languages
    : [navigator.language];

  const normalized = candidates.map((entry) => String(entry || '').toLowerCase());
  if (normalized.some((lang) => lang.startsWith('uk') || lang.startsWith('ua'))) return 'uk';
  if (normalized.some((lang) => lang.startsWith('ru'))) return 'ru';
  return 'en';
}

function getInitialLocale(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_LOCALE_KEY);
    if (stored === 'ru' || stored === 'en' || stored === 'uk') {
      return stored;
    }
  } catch {
    // ignore storage read errors and continue with system locale
  }
  return detectSystemLocale();
}

function getIsMobileViewport(): boolean {
  return window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).matches;
}

export default function App() {
  const [locale, setLocale] = useState<Locale>(() => getInitialLocale());
  const [activeFace, setActiveFace] = useState<FaceId>('welcome');
  const [isMobile, setIsMobile] = useState<boolean>(() => getIsMobileViewport());
  const [pulseText, setPulseText] = useState<string>('');
  const [pulseKey, setPulseKey] = useState(0);
  const [pressedDirection, setPressedDirection] = useState<Direction | null>(null);
  const [isSceneReady, setIsSceneReady] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [isLoaderLeaving, setIsLoaderLeaving] = useState(false);
  const pulseTimerRef = useRef<number | null>(null);
  const pressedTimerRef = useRef<number | null>(null);
  const bootStartRef = useRef(typeof performance !== 'undefined' ? performance.now() : Date.now());

  const t = uiTexts[locale];

  const faceLabels = useMemo(
    () => ({
      welcome: t.welcome,
      skills: t.skills,
      about: t.about,
      cooperation: t.cooperation,
      contacts: t.contacts,
      work: t.work,
    }),
    [t]
  );
  useEffect(() => {
    logRuntime('info', 'app', 'App mounted', {
      locale,
      activeFace,
      isMobile,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);

    const onChange = (event: MediaQueryListEvent) => {
      logRuntime('info', 'viewport', 'Viewport mode changed', { isMobile: event.matches });
      setIsMobile(event.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', onChange);
      return () => mediaQuery.removeEventListener('change', onChange);
    }

    mediaQuery.addListener(onChange);
    return () => mediaQuery.removeListener(onChange);
  }, []);

  useEffect(() => {
    logRuntime('debug', 'app-state', 'Locale changed', { locale });
  }, [locale]);

  useEffect(() => {
    logRuntime('debug', 'app-state', 'Face changed', { activeFace });
    logEvent('navigation.menu.rendered', { face: activeFace }, 'debug');
  }, [activeFace]);

  useEffect(() => {
    logRuntime('debug', 'app-state', 'Layout mode changed', { isMobile });
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;
    const cleanupAudioAutoStart = installAudioAutoStart();
    return () => {
      cleanupAudioAutoStart();
    };
  }, [isMobile]);

  useEffect(() => {
    return () => {
      if (pulseTimerRef.current) {
        window.clearTimeout(pulseTimerRef.current);
      }
      if (pressedTimerRef.current) {
        window.clearTimeout(pressedTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const appReady = isMobile || isSceneReady;
    if (!appReady || !showLoader || isLoaderLeaving) return;

    const now = typeof performance !== 'undefined' ? performance.now() : Date.now();
    const elapsed = now - bootStartRef.current;
    const waitMs = Math.max(0, BOOT_LOADER_MIN_MS - elapsed);

    const leaveTimer = window.setTimeout(() => setIsLoaderLeaving(true), waitMs);

    return () => {
      window.clearTimeout(leaveTimer);
    };
  }, [isMobile, isSceneReady, showLoader, isLoaderLeaving]);

  useEffect(() => {
    if (!showLoader || !isLoaderLeaving) return;
    const removeTimer = window.setTimeout(() => setShowLoader(false), BOOT_LOADER_FADE_MS);
    return () => {
      window.clearTimeout(removeTimer);
    };
  }, [showLoader, isLoaderLeaving]);

  useEffect(() => {
    if (!showLoader || isLoaderLeaving) return;
    const leaveTimer = window.setTimeout(() => setIsLoaderLeaving(true), BOOT_LOADER_MAX_MS);
    return () => {
      window.clearTimeout(leaveTimer);
    };
  }, [showLoader, isLoaderLeaving]);

  const handleSceneReady = useCallback(() => {
    setIsSceneReady(true);
  }, []);

  const triggerPulse = (label: string) => {
    logRuntime('debug', 'ui', 'Pulse triggered', { label });
    setPulseText(label);
    setPulseKey((prev) => prev + 1);
    if (pulseTimerRef.current) {
      window.clearTimeout(pulseTimerRef.current);
    }
    pulseTimerRef.current = window.setTimeout(() => {
      setPulseText('');
    }, 700);
  };

  const switchLocale = (nextLocale: Locale) => {
    logRuntime('info', 'locale', 'Locale switch requested', { from: locale, to: nextLocale });
    localStorage.setItem(STORAGE_LOCALE_KEY, nextLocale);
    setLocale(nextLocale);
  };

  const applyPressedDirection = (direction: Direction) => {
    setPressedDirection(direction);
    if (!isMobile) {
      playButtonSound();
    }
    if (pressedTimerRef.current) {
      window.clearTimeout(pressedTimerRef.current);
    }
    pressedTimerRef.current = window.setTimeout(() => {
      setPressedDirection(null);
    }, 180);
  };

  const changeFace = (faceId: FaceId, withPulse = false, trigger?: { source: 'key' | 'click'; key?: string; direction?: Direction }) => {
    const current = activeFace;
    const currentNav = NAV_BY_FACE[current];
    const direction = (Object.keys(currentNav) as Array<keyof typeof currentNav>).find((key) => currentNav[key] === faceId);
    logRuntime('info', 'navigation', 'Face change requested', {
      from: current,
      to: faceId,
      direction: direction ?? 'direct',
      nav: currentNav,
      withPulse,
    });
    if (trigger?.source === 'key' && trigger.direction) {
      logEvent('navigation.input.key', { key: trigger.key, direction: trigger.direction, to: faceId });
      applyPressedDirection(trigger.direction);
    }
    if (trigger?.source === 'click' && trigger.direction) {
      logEvent('navigation.input.click', { direction: trigger.direction, to: faceId });
      applyPressedDirection(trigger.direction);
    }
    if (!isMobile && current !== faceId) {
      playRotationSound();
    }
    setActiveFace(faceId);
    if (withPulse && !isMobile) {
      triggerPulse(faceLabels[faceId]);
    }
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (isMobile) return;
      const direction = getDirectionByKey(event.code);
      if (!direction) return;
      event.preventDefault();
      const targetFace = NAV_BY_FACE[activeFace][direction];
      changeFace(targetFace, true, { source: 'key', key: event.code, direction });
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFace, isMobile]);

  return (
    <>
      <SEOHead locale={locale} activeFace={activeFace} />
      {showLoader ? <LoadingScreen leaving={isLoaderLeaving} label={LOADER_LABELS[locale]} /> : null}
      {isMobile ? (
        <MobileSite
          locale={locale}
          locales={LOCALES}
          activeFace={activeFace}
          onFaceChange={(faceId) => changeFace(faceId, false)}
          onLocaleChange={switchLocale}
        />
      ) : (
        <div className="cube-app">
          <Suspense fallback={<div className="scene-fallback" />}>
            <Scene3D targetRotation={FACE_ROTATIONS[activeFace]} locale={locale} onReady={handleSceneReady} />
          </Suspense>

          <header className="cube-header">
            <div className="lang-switcher" aria-label={t.language}>
              {LOCALES.map((lang) => (
                <UILangButton key={lang} active={lang === locale} onClick={() => switchLocale(lang)}>
                  {lang.toUpperCase()}
                </UILangButton>
              ))}
            </div>
          </header>

          {pulseText ? (
            <div key={`${pulseText}-${pulseKey}`} className="face-pulse" aria-live="polite">
              {pulseText}
            </div>
          ) : null}

          <nav className="desktop-nav" aria-label="Cube navigation">
            <div className="keyboard-deck">
              <div className="arrow-cluster menu-roll-in">
                <UIKeyButton
                  className="key-up"
                  code={FACE_CODES[NAV_BY_FACE[activeFace].up]}
                  direction="up"
                  label={faceLabels[NAV_BY_FACE[activeFace].up]}
                  pressed={pressedDirection === 'up'}
                  ariaKeyShortcuts="ArrowUp W"
                  onClick={() => changeFace(NAV_BY_FACE[activeFace].up, true, { source: 'click', direction: 'up' })}
                />

                <div className="arrow-row">
                  <UIKeyButton
                    className="key-left"
                    code={FACE_CODES[NAV_BY_FACE[activeFace].left]}
                    direction="left"
                    label={faceLabels[NAV_BY_FACE[activeFace].left]}
                    pressed={pressedDirection === 'left'}
                    ariaKeyShortcuts="ArrowLeft A"
                    onClick={() => changeFace(NAV_BY_FACE[activeFace].left, true, { source: 'click', direction: 'left' })}
                  />

                  <UIKeyButton
                    className="key-down"
                    active
                    code={FACE_CODES[NAV_BY_FACE[activeFace].down]}
                    direction="down"
                    label={faceLabels[NAV_BY_FACE[activeFace].down]}
                    pressed={pressedDirection === 'down'}
                    ariaKeyShortcuts="ArrowDown S"
                    onClick={() => changeFace(NAV_BY_FACE[activeFace].down, true, { source: 'click', direction: 'down' })}
                  />

                  <UIKeyButton
                    className="key-right"
                    code={FACE_CODES[NAV_BY_FACE[activeFace].right]}
                    direction="right"
                    label={faceLabels[NAV_BY_FACE[activeFace].right]}
                    pressed={pressedDirection === 'right'}
                    ariaKeyShortcuts="ArrowRight D"
                    onClick={() => changeFace(NAV_BY_FACE[activeFace].right, true, { source: 'click', direction: 'right' })}
                  />
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

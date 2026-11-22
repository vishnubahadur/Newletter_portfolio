import { useCallback, useEffect, useState } from 'react';
import { CaseFileView } from './components/CaseFileView';
import { ContactSection } from './components/ContactSection';
import { DetectiveIntro } from './components/DetectiveIntro';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { LedgerSection } from './components/LedgerSection';
import { MagnifierCursor } from './components/MagnifierCursor';
import { StackSection } from './components/StackSection';
import { WorkSection } from './components/WorkSection';
import { EXHIBITS } from './data/portfolioData';
import { useScrollReveal } from './hooks/useScrollReveal';

const INTRO_STORAGE_KEY = 'vb_broadsheet_intro_seen_v1';

function getExhibitIdFromHash(): string | null {
  if (typeof window === 'undefined') return null;
  const match = window.location.hash.match(/^#case-file\/([a-z0-9-]+)$/i);
  if (!match) return null;
  const exists = EXHIBITS.some((item) => item.id === match[1]);
  return exists ? match[1] : null;
}

export default function App() {
  const [activeExhibitId, setActiveExhibitId] = useState<string | null>(() =>
    getExhibitIdFromHash()
  );
  const [activeSection, setActiveSection] = useState<string>('');
  const [showIntro, setShowIntro] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return false;
    if (getExhibitIdFromHash()) return false;
    try {
      return !window.sessionStorage.getItem(INTRO_STORAGE_KEY);
    } catch {
      return true;
    }
  });

  useScrollReveal(activeExhibitId ?? 'home');

  // Sync browser back/forward hash navigation
  useEffect(() => {
    const onHashChange = () => {
      const nextExhibit = getExhibitIdFromHash();
      setActiveExhibitId(nextExhibit);
      if (nextExhibit) {
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Scrollspy for active navigation underline on the homepage
  useEffect(() => {
    if (activeExhibitId) return;

    const sectionIds = ['work', 'stack', 'ledger', 'contact'];
    const handleScroll = () => {
      const scrollY = window.scrollY + 140;
      let current = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeExhibitId]);

  const handleCompleteIntro = useCallback(() => {
    setShowIntro(false);
    try {
      window.sessionStorage.setItem(INTRO_STORAGE_KEY, '1');
    } catch {
      // Ignore storage failures in sandboxed contexts
    }
  }, []);

  const handleReplayIntro = useCallback(() => {
    setActiveExhibitId(null);
    if (window.location.hash.startsWith('#case-file/')) {
      window.history.replaceState(null, '', window.location.pathname);
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    setShowIntro(true);
  }, []);

  const scrollToElement = useCallback((elementId?: string) => {
    if (!elementId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const target = document.getElementById(elementId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleNavigateHome = useCallback(
    (sectionId?: string) => {
      if (activeExhibitId) {
        setActiveExhibitId(null);
        const nextHash = sectionId ? `#${sectionId}` : '';
        window.history.pushState(null, '', nextHash || window.location.pathname);
        window.setTimeout(() => scrollToElement(sectionId), 40);
      } else {
        if (sectionId) {
          window.history.replaceState(null, '', `#${sectionId}`);
        } else {
          window.history.replaceState(null, '', window.location.pathname);
        }
        scrollToElement(sectionId);
      }
    },
    [activeExhibitId, scrollToElement]
  );

  const handleOpenCaseFile = useCallback((exhibitId: string) => {
    setActiveExhibitId(exhibitId);
    window.history.pushState(null, '', `#case-file/${exhibitId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleBackToCase = useCallback(
    (exhibitId: string) => {
      setActiveExhibitId(null);
      window.history.pushState(null, '', `#exhibit-${exhibitId}`);
      window.setTimeout(() => scrollToElement(`exhibit-${exhibitId}`), 50);
    },
    [scrollToElement]
  );

  const currentExhibit = activeExhibitId
    ? EXHIBITS.find((item) => item.id === activeExhibitId) ?? null
    : null;

  return (
    <div className="relative min-h-screen bg-paper text-ink">
      {/* Subtle fixed newsprint fiber & vignette overlay */}
      <div className="newsprint-texture" aria-hidden="true" />

      {/* Interactive Detective Magnifying-Glass Intro */}
      <DetectiveIntro isOpen={showIntro} onComplete={handleCompleteIntro} />

      {/* Masthead & Sticky Nav */}
      <Header
        activeSection={activeSection}
        isCaseFileOpen={Boolean(currentExhibit)}
        onNavigateHome={handleNavigateHome}
      />

      {/* Active Route View */}
      {currentExhibit ? (
        <CaseFileView
          exhibit={currentExhibit}
          onBackToCase={handleBackToCase}
          onSelectExhibit={handleOpenCaseFile}
        />
      ) : (
        <main>
          <HeroSection onScrollToSection={(id) => handleNavigateHome(id)} />
          <WorkSection onOpenCaseFile={handleOpenCaseFile} />
          <StackSection />
          <LedgerSection />
          <ContactSection />
        </main>
      )}

      {/* Inverted Ink Colophon Footer */}
      <Footer onNavigateHome={handleNavigateHome} onReplayIntro={handleReplayIntro} />

      {/* Desktop Evidence Magnifier Cursor */}
      <MagnifierCursor />

      {/* Shared SVG Roughness Filter for Distressed Rubber Stamps */}
      <svg aria-hidden="true" width="0" height="0" className="absolute">
        <filter id="fm-rough" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.035 0.06"
            numOctaves={2}
            seed={7}
            result="t"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="t"
            scale={7}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
    </div>
  );
}

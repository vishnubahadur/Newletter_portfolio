import React, { useMemo, useState } from 'react';
import { ArrowUpRight, Github, MapPin } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface HeaderProps {
  activeSection: string;
  isCaseFileOpen: boolean;
  onNavigateHome: (sectionId?: string) => void;
}

const NAV_ITEMS = [
  { id: 'work', label: 'Work' },
  { id: 'stack', label: 'Stack' },
  { id: 'ledger', label: 'Ledger' },
  { id: 'contact', label: 'Contact' },
];

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  isCaseFileOpen,
  onNavigateHome,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const formattedDate = useMemo(() => {
    return new Intl.DateTimeFormat('en-GB', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(new Date());
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId?: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigateHome(sectionId);
  };

  return (
    <>
      {/* Broadsheet Newspaper Masthead */}
      {!isCaseFileOpen && (
        <header className="bg-paper pt-[18px]">
          <div className="mx-auto max-w-[1180px] px-5 sm:px-[30px]">
            <div className="flex items-center justify-between gap-4 pb-[9px] font-gothic text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
              <div className="flex-1">{PROFILE.locationShort}</div>
              <div className="hidden flex-1 text-center min-[480px]:block">
                {PROFILE.editionLabel}
              </div>
              <div className="flex-1 text-right">{PROFILE.established}</div>
            </div>

            <div className="m-0 border-t-2 border-ink px-0 pb-1 pt-1.5 text-center font-display text-[clamp(40px,8.5vw,104px)] font-normal leading-[0.92] tracking-[-0.01em] text-ink">
              {PROFILE.mastheadName}
              <small className="mt-3.5 block font-gothic text-[clamp(9px,1.7vw,14px)] font-semibold uppercase tracking-[0.2em] text-ink-soft [text-wrap:balance] sm:tracking-[0.42em]">
                {PROFILE.subtitle}
              </small>
            </div>

            <div className="mt-1 flex flex-wrap items-center justify-center gap-x-[22px] gap-y-1 border-y-2 border-ink py-[7px] font-gothic text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
              <span className="whitespace-nowrap">{formattedDate}</span>
              <span className="h-[3px] w-[3px] rounded-full bg-ink-soft" aria-hidden="true" />
              <span>{PROFILE.volume}</span>
              <span className="h-[3px] w-[3px] rounded-full bg-ink-soft" aria-hidden="true" />
              <span>{PROFILE.editionTagline}</span>
              <span className="h-[3px] w-[3px] rounded-full bg-ink-soft" aria-hidden="true" />
              <span>{PROFILE.price}</span>
            </div>
          </div>
        </header>
      )}

      {/* Sticky Navigation Strip */}
      <div className="nav-wrap sticky top-0 z-40 border-b-2 border-ink bg-paper">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-[30px]">
          <nav
            aria-label="Primary navigation"
            className="flex min-h-[50px] items-center justify-between gap-[18px] py-[9px]"
          >
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateHome();
              }}
              className="cursor-pointer select-none whitespace-nowrap font-display text-[22px] font-normal tracking-[-0.01em] text-ink transition-opacity hover:opacity-75"
            >
              {PROFILE.mastheadName}
            </button>

            {/* Desktop Links + Primary CTA */}
            <div className="hidden items-center gap-[26px] min-[940px]:flex">
              {NAV_ITEMS.map((item) => {
                const isActive = !isCaseFileOpen && activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`cursor-pointer whitespace-nowrap border-b-2 pb-0.5 font-gothic text-xs font-semibold uppercase tracking-[0.12em] text-ink transition-colors duration-150 hover:border-ink ${
                      isActive ? 'border-ink' : 'border-transparent'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="inline-flex cursor-pointer items-center gap-2.5 whitespace-nowrap border-2 border-ink bg-ink px-[15px] py-2 font-gothic text-[11.5px] font-bold uppercase tracking-[0.1em] text-paper transition-colors duration-150 hover:bg-transparent hover:text-ink"
              >
                Hire him
              </a>
            </div>

            {/* Mobile CTA + Hamburger */}
            <div className="flex items-center gap-3 min-[940px]:hidden">
              <span className="hidden min-[460px]:inline-flex">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="inline-flex cursor-pointer items-center gap-2.5 whitespace-nowrap border-2 border-ink bg-ink px-[15px] py-2 font-gothic text-[11.5px] font-bold uppercase tracking-[0.1em] text-paper transition-colors duration-150 hover:bg-transparent hover:text-ink"
                >
                  Hire him
                </a>
              </span>

              <button
                type="button"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="flex h-[42px] w-[42px] flex-none cursor-pointer flex-col items-center justify-center gap-[5px] border-2 border-ink bg-paper"
              >
                <span
                  className={`h-0.5 w-5 bg-ink transition-transform duration-200 ${
                    mobileMenuOpen ? 'translate-y-[7px] rotate-45' : ''
                  }`}
                />
                <span
                  className={`h-0.5 w-5 bg-ink transition-opacity duration-150 ${
                    mobileMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`h-0.5 w-5 bg-ink transition-transform duration-200 ${
                    mobileMenuOpen ? '-translate-y-[7px] -rotate-45' : ''
                  }`}
                />
              </button>
            </div>
          </nav>

          {/* Expandable Mobile Navigation Drawer */}
          <div
            aria-hidden={!mobileMenuOpen}
            className={`overflow-hidden transition-all duration-200 min-[940px]:hidden ${
              mobileMenuOpen
                ? 'pointer-events-auto max-h-[520px] opacity-100'
                : 'pointer-events-none max-h-0 opacity-0'
            }`}
          >
            <div className="border-t-2 border-ink pb-5 pt-1.5">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="flex items-center justify-between border-b border-ink/25 px-0.5 py-[15px] font-display text-[30px] font-normal tracking-[-0.01em] text-ink"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="h-[18px] w-[18px] text-ink-soft" />
                </a>
              ))}

              <div className="mt-[18px]">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="inline-flex cursor-pointer items-center gap-2.5 whitespace-nowrap border-2 border-ink bg-ink px-[22px] py-3 font-gothic text-[13px] font-bold uppercase tracking-[0.1em] text-paper transition-colors duration-150 hover:bg-transparent hover:text-ink"
                >
                  Hire him →
                </a>
              </div>

              <div className="mt-4 flex flex-wrap gap-x-[18px] gap-y-2 font-gothic text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-soft">
                <span className="inline-flex items-center gap-[7px]">
                  <MapPin className="h-3.5 w-3.5" />
                  {PROFILE.locationShort}
                </span>
                <a
                  href={PROFILE.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-[7px] hover:text-ink"
                >
                  <Github className="h-3.5 w-3.5" />
                  {PROFILE.githubDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

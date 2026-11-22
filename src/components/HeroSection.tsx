import React from 'react';
import { Download } from 'lucide-react';
import { PROFILE, RESUME_PDF_PATH } from '../data/portfolioData';
import { FrontPageIllustration } from './ExhibitArtwork';

interface HeroSectionProps {
  onScrollToSection: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToSection }) => {
  return (
    <section id="top" className="pb-2 pt-[30px]">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-[30px]">
        {/* Front Page Section Rule */}
        <div className="mb-[18px] flex items-center justify-between gap-4 border-b border-ink/25 pb-[9px] font-gothic text-[11px] font-bold uppercase tracking-[0.16em] text-ink-soft">
          <span>Front Page</span>
          <span>Filed under: Open Investigations</span>
        </div>

        {/* Asymmetric Broadsheet Front-Page Grid */}
        <div className="grid grid-cols-1 items-start gap-10 min-[940px]:grid-cols-[1.55fr_1fr]">
          {/* Left Lead Story Column */}
          <div>
            <span className="rv rv-settle block font-gothic text-xs font-bold uppercase tracking-[0.18em] text-ink">
              {PROFILE.caseNumber} — Findings Published
            </span>

            <div className="rv rv-settle" style={{ '--rv-delay': '60ms' } as React.CSSProperties}>
              <h1 className="mt-1 font-display text-[clamp(40px,6.4vw,84px)] font-normal leading-none tracking-[-0.02em] text-ink [text-wrap:balance]">
                {PROFILE.heroHeadlineStart}
                <em className="italic">{PROFILE.heroHeadlineItalic}</em>
              </h1>
            </div>

            <p
              className="rv rv-settle mt-5 max-w-[34ch] border-l-4 border-ink pl-[18px] font-text text-[clamp(18px,2vw,22px)] italic leading-[1.45] text-ink-soft"
              style={{ '--rv-delay': '140ms' } as React.CSSProperties}
            >
              {PROFILE.heroDeck}
            </p>

            <p
              className="rv rv-settle mt-5 font-gothic text-xs font-semibold uppercase tracking-[0.06em] text-ink-soft"
              style={{ '--rv-delay': '200ms' } as React.CSSProperties}
            >
              By <b className="text-ink">The Investigation Desk</b> &nbsp;·&nbsp;{' '}
              {PROFILE.bylineLocation}
            </p>

            {/* Primary & Secondary Action Buttons + Actual Resume Download */}
            <div
              className="rv rv-settle mt-[22px] flex flex-wrap gap-3"
              style={{ '--rv-delay': '260ms' } as React.CSSProperties}
            >
              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  onScrollToSection('work');
                }}
                className="inline-flex cursor-pointer items-center gap-2.5 whitespace-nowrap border-2 border-ink bg-ink px-7 py-[15px] font-gothic text-[14px] font-bold uppercase tracking-[0.1em] text-paper transition-colors duration-150 hover:bg-transparent hover:text-ink"
              >
                Read the work →
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onScrollToSection('contact');
                }}
                className="inline-flex cursor-pointer items-center gap-2.5 whitespace-nowrap border-2 border-ink bg-transparent px-7 py-[15px] font-gothic text-[14px] font-bold uppercase tracking-[0.1em] text-ink transition-colors duration-150 hover:bg-ink hover:text-paper"
              >
                Get in touch
              </a>

              <a
                href={RESUME_PDF_PATH}
                download="Vishnu_Bahadur_Budhathoki_Resume.pdf"
                className="inline-flex cursor-pointer items-center gap-2 whitespace-nowrap border-2 border-ink/70 bg-paper-warm px-5 py-[15px] font-gothic text-[13px] font-bold uppercase tracking-[0.1em] text-ink transition-colors duration-150 hover:border-ink hover:bg-ink hover:text-paper"
              >
                <Download className="h-4 w-4 shrink-0" />
                Resume PDF
              </a>
            </div>

            {/* 4-Column Edition Metadata Bar */}
            <div
              className="rv rv-settle mt-[30px] grid grid-cols-2 border-y-2 border-ink min-[600px]:grid-cols-4"
              style={{ '--rv-delay': '320ms' } as React.CSSProperties}
            >
              {PROFILE.frontPageFacts.map((fact, idx) => {
                const borderClasses =
                  idx === 0
                    ? 'border-r border-b border-ink/25 min-[600px]:border-b-0'
                    : idx === 1
                      ? 'border-b border-ink/25 min-[600px]:border-r min-[600px]:border-b-0'
                      : idx === 2
                        ? 'border-r border-ink/25'
                        : '';
                return (
                  <div key={fact.label} className={`px-[16px] py-4 ${borderClasses}`}>
                    <div className="whitespace-nowrap font-display text-[clamp(22px,2.3vw,32px)] leading-none text-ink tabular-nums">
                      {fact.value}
                    </div>
                    <div className="mt-[7px] font-gothic text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-soft">
                      {fact.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Subject Portrait & Drop-Cap Editorial Column */}
          <div className="border-t-2 border-ink pt-[22px] min-[940px]:border-l min-[940px]:border-t-0 min-[940px]:border-ink/25 min-[940px]:pl-[34px] min-[940px]:pt-0">
            <div
              className="rv rv-develop relative aspect-square w-full overflow-hidden border-2 border-ink bg-paper"
              style={{ '--rv-delay': '180ms' } as React.CSSProperties}
            >
              <FrontPageIllustration />
            </div>

            <p
              className="rv rv-settle mt-2 font-gothic text-[11px] font-medium leading-[1.4] tracking-[0.04em] text-ink-soft"
              style={{ '--rv-delay': '240ms' } as React.CSSProperties}
            >
              <b className="font-bold uppercase tracking-[0.1em] text-ink">Pictured:</b>{' '}
              the subject&apos;s engineering desk — React on screen, Node &amp; MongoDB on the wire.
            </p>

            <div
              className="rv rv-settle dropcap mt-[18px] font-text text-[16px] leading-[1.6] text-ink [hyphens:auto] [text-align:justify]"
              style={{ '--rv-delay': '300ms' } as React.CSSProperties}
            >
              {PROFILE.bioParagraphs.map((paragraph, idx) => (
                <p key={idx} className="mb-3 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { EXHIBITS, ExhibitItem } from '../data/portfolioData';
import { ExhibitArtwork } from './ExhibitArtwork';

interface WorkSectionProps {
  onOpenCaseFile: (exhibitId: string) => void;
}

const EvidenceFrame: React.FC<{
  exhibit: ExhibitItem;
  featured?: boolean;
}> = ({ exhibit, featured = false }) => (
  <div
    data-magnify="true"
    className="relative border border-ink/25 bg-paper-bright p-2 pb-0 shadow-[0_2px_14px_rgba(22,20,15,0.14)]"
  >
    {/* Archival tape strip */}
    <span
      aria-hidden="true"
      className="absolute -top-2 left-1/2 z-[1] h-4 w-16 -translate-x-1/2 -rotate-2 border border-ink/10 bg-paper-deep/80"
    />

    {/* Image window */}
    <div
      className={`relative overflow-hidden border border-ink/40 bg-paper ${
        featured
          ? 'aspect-video min-[940px]:aspect-auto min-[940px]:h-[272px]'
          : 'h-[196px]'
      }`}
    >
      <div className="h-full w-full grayscale contrast-[1.04] mix-blend-multiply transition-transform duration-500 ease-out group-hover:scale-[1.03] group-focus-within:scale-[1.03]">
        <ExhibitArtwork artworkKey={exhibit.artworkKey} />
      </div>

      {/* Crimson halftone dots hover overlay */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(166,56,44,0.5)_0.7px,transparent_0.8px)] bg-[length:4px_4px] opacity-0 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-60 group-focus-within:opacity-60"
      />

      {/* Slamming red rubber stamp */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-2.5 top-2.5 rotate-[8deg] scale-150 border-[3px] border-stamp bg-paper-bright/90 px-2.5 py-1 font-gothic text-[11px] font-black uppercase tracking-[0.18em] text-stamp opacity-0 transition-all duration-200 ease-out [filter:url(#fm-rough)] group-hover:-rotate-[8deg] group-hover:scale-100 group-hover:opacity-100 group-focus-within:-rotate-[8deg] group-focus-within:scale-100 group-focus-within:opacity-100"
      >
        Confirmed
      </span>
    </div>

    {/* Exhibit Polaroid Footer Strip */}
    <div className="flex items-center justify-between gap-3 px-1 py-1.5 font-mono text-[11px] tracking-[0.02em] text-ink-soft">
      <span className="relative shrink-0 font-bold uppercase text-ink">
        {exhibit.code}
        <svg
          aria-hidden="true"
          viewBox="0 0 80 6"
          preserveAspectRatio="none"
          className="pointer-events-none absolute -bottom-0.5 left-0 h-[5px] w-full text-stamp"
        >
          <path
            d="M1 4 Q22 1 42 3.5 T79 2.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            pathLength={1}
            className="rv-sketch"
          />
        </svg>
      </span>
      <span className="truncate">recovered from {exhibit.sourceDomain}</span>
    </div>
  </div>
);

export const WorkSection: React.FC<WorkSectionProps> = ({ onOpenCaseFile }) => {
  const featuredExhibit = EXHIBITS.find((e) => e.featured) ?? EXHIBITS[0];
  const secondaryExhibits = EXHIBITS.filter((e) => e.id !== featuredExhibit.id);

  return (
    <section id="work" className="scroll-mt-16 py-[76px]">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-[30px]">
        {/* Section Header */}
        <div className="mb-[30px]">
          <div className="rv flex flex-wrap items-baseline justify-between gap-5 pb-2.5">
            <div>
              <span className="rv-fade font-gothic text-xs font-bold uppercase tracking-[0.18em] text-ink">
                The Evidence
              </span>
              <h2 className="mt-1.5 font-display text-[clamp(30px,4vw,46px)] font-normal leading-[1.02] tracking-[-0.015em] text-ink">
                <span className="rv-word" style={{ '--i': 0 } as React.CSSProperties}>
                  Selected
                </span>{' '}
                <span className="rv-word" style={{ '--i': 1 } as React.CSSProperties}>
                  Works
                </span>
              </h2>
            </div>
            <span className="rv-fade max-w-full font-gothic text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft">
              Exhibits A – C · MERN &amp; Production Engineering
            </span>
          </div>
          <div className="rv rv-rule h-1 bg-ink" />
        </div>

        {/* Lead Featured Exhibit (Full-width horizontal broadsheet feature) */}
        <article
          id={`exhibit-${featuredExhibit.id}`}
          className="group relative flex flex-col items-stretch gap-8 border-b border-ink/25 px-1 py-7 transition-colors hover:bg-paper-warm min-[940px]:flex-row min-[940px]:px-3"
        >
          <div className="rv rv-develop w-full self-start min-[940px]:w-[46%] min-[940px]:flex-none">
            <EvidenceFrame exhibit={featuredExhibit} featured />
          </div>

          <div
            className="rv rv-settle flex flex-1 flex-col"
            style={{ '--rv-delay': '80ms' } as React.CSSProperties}
          >
            <span className="font-gothic text-[11px] font-bold uppercase tracking-[0.14em] text-stamp">
              {featuredExhibit.code}
            </span>
            <span className="mt-3 font-gothic text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink">
              {featuredExhibit.categoryLabel}
            </span>
            <h3 className="mt-2 font-display text-[clamp(30px,3.6vw,46px)] font-normal leading-[1.06] tracking-[-0.01em] text-ink">
              {featuredExhibit.title}
            </h3>
            <p className="mb-auto mt-3.5 max-w-[60ch] font-text text-[17px] leading-[1.55] text-ink-soft [hyphens:auto] [text-align:justify]">
              {featuredExhibit.summary}
            </p>

            {/* Monospace technical evidence tags */}
            <div className="mb-4 mt-[18px] flex flex-wrap gap-1.5">
              {featuredExhibit.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 border border-ink bg-transparent px-2.5 py-[3px] font-mono text-[11px] font-medium text-ink"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Footer bar */}
            <div className="flex items-center justify-between gap-3 border-t border-ink/25 pt-3.5">
              <span className="font-mono text-xs text-ink-soft">
                {featuredExhibit.dateLabel} · {featuredExhibit.roleLabel}
              </span>
              <button
                type="button"
                onClick={() => onOpenCaseFile(featuredExhibit.id)}
                className="group/link inline-flex cursor-pointer items-center gap-1.5 border-b-[1.5px] border-stamp pb-0.5 font-gothic text-xs font-bold uppercase tracking-[0.08em] text-stamp after:absolute after:inset-0 after:content-['']"
              >
                Open case file{' '}
                <span className="transition-transform duration-150 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>
        </article>

        {/* Secondary Exhibits Grid (Balanced 2-column broadsheet columns) */}
        <div className="grid grid-cols-1 min-[700px]:grid-cols-2">
          {secondaryExhibits.map((exhibit, idx) => (
            <article
              key={exhibit.id}
              id={`exhibit-${exhibit.id}`}
              className={`rv rv-settle group relative flex flex-col border-b border-ink/25 px-1 py-[28px] transition-colors hover:bg-paper-warm ${
                idx === 0
                  ? 'min-[700px]:border-r min-[700px]:border-ink/25 min-[700px]:pr-[30px]'
                  : 'min-[700px]:pl-[30px]'
              }`}
              style={{ '--rv-delay': `${idx * 80}ms` } as React.CSSProperties}
            >
              <span className="font-gothic text-[11px] font-bold uppercase tracking-[0.14em] text-stamp">
                {exhibit.code}
              </span>
              <span className="mt-3 font-gothic text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink">
                {exhibit.categoryLabel}
              </span>
              <h3 className="mt-2 font-display text-[30px] font-normal leading-[1.06] tracking-[-0.01em] text-ink">
                {exhibit.title}
              </h3>

              <div className="mt-4">
                <EvidenceFrame exhibit={exhibit} />
              </div>

              <p className="mb-auto mt-4 font-text text-[15.5px] leading-[1.58] text-ink-soft [hyphens:auto] [text-align:justify]">
                {exhibit.summary}
              </p>

              <div className="mb-4 mt-[18px] flex flex-wrap gap-1.5">
                {exhibit.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 border border-ink bg-transparent px-2.5 py-[3px] font-mono text-[11px] font-medium text-ink"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between gap-3 border-t border-ink/25 pt-3.5">
                <span className="font-mono text-xs text-ink-soft">
                  {exhibit.dateLabel} · {exhibit.roleLabel}
                </span>
                <button
                  type="button"
                  onClick={() => onOpenCaseFile(exhibit.id)}
                  className="inline-flex cursor-pointer items-center gap-1.5 border-b-[1.5px] border-stamp pb-0.5 font-gothic text-xs font-bold uppercase tracking-[0.08em] text-stamp after:absolute after:inset-0 after:content-['']"
                >
                  Open case file{' '}
                  <span className="transition-transform duration-150 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

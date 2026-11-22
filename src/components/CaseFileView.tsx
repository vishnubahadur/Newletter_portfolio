import React from 'react';
import { EXHIBITS, ExhibitItem } from '../data/portfolioData';
import { ExhibitArtwork } from './ExhibitArtwork';

interface CaseFileViewProps {
  exhibit: ExhibitItem;
  onBackToCase: (exhibitId: string) => void;
  onSelectExhibit: (exhibitId: string) => void;
}

export const CaseFileView: React.FC<CaseFileViewProps> = ({
  exhibit,
  onBackToCase,
  onSelectExhibit,
}) => {
  const relatedExhibits = EXHIBITS.filter((item) => exhibit.relatedIds.includes(item.id));

  return (
    <main>
      {/* Case File Header */}
      <header className="border-b-2 border-ink bg-paper pb-10 pt-8">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-[30px]">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-ink/25 pb-2.5 font-gothic text-[11px] font-bold uppercase tracking-[0.16em] text-ink-soft">
            <button
              type="button"
              onClick={() => onBackToCase(exhibit.id)}
              className="link-pencil cursor-pointer text-ink"
            >
              ← Return to Front Page
            </button>
            <span>
              Case File · {exhibit.code} · {exhibit.categoryLabel}
            </span>
          </div>

          <div>
            <span className="rv rv-settle block font-gothic text-xs font-bold uppercase tracking-[0.18em] text-stamp">
              {exhibit.code} — {exhibit.title}
            </span>

            <div className="rv rv-settle" style={{ '--rv-delay': '60ms' } as React.CSSProperties}>
              <h1 className="mt-1.5 font-display text-[clamp(36px,6vw,74px)] font-normal leading-[1.02] tracking-[-0.02em] text-ink [text-wrap:balance]">
                {exhibit.caseHeadline}
              </h1>
            </div>

            <p
              className="rv rv-settle mt-4 max-w-[56ch] border-l-4 border-ink pl-[18px] font-text text-[clamp(17px,1.8vw,21px)] italic leading-[1.5] text-ink-soft"
              style={{ '--rv-delay': '140ms' } as React.CSSProperties}
            >
              {exhibit.deck}
            </p>

            <p
              className="rv rv-settle mt-4 font-gothic text-xs font-semibold uppercase tracking-[0.06em] text-ink-soft"
              style={{ '--rv-delay': '200ms' } as React.CSSProperties}
            >
              By <b className="text-ink">The Investigation Desk</b> &nbsp;·&nbsp; {exhibit.dateLabel}
            </p>
          </div>

          {/* Wide Taped Evidence Plate */}
          <figure className="mt-7">
            <div
              data-magnify="true"
              className="relative border border-ink/25 bg-paper-bright p-2 pb-0 shadow-[0_2px_14px_rgba(22,20,15,0.14)]"
            >
              <span
                aria-hidden="true"
                className="absolute -top-2 left-1/2 z-[1] h-4 w-16 -translate-x-1/2 -rotate-2 border border-ink/10 bg-paper-deep/80"
              />
              <div className="relative aspect-[2/1] w-full overflow-hidden border border-ink/40 bg-paper">
                <div className="h-full w-full grayscale contrast-[1.04] mix-blend-multiply">
                  <ExhibitArtwork artworkKey={exhibit.artworkKey} />
                </div>
              </div>
              <figcaption className="flex items-center justify-between gap-3 px-1 py-1.5 font-mono text-[12px] tracking-[0.02em] text-ink-soft">
                <span className="shrink-0 font-bold uppercase text-ink">{exhibit.code}</span>
                <span className="truncate">{exhibit.figureCaption}</span>
              </figcaption>
            </div>
          </figure>
        </div>
      </header>

      {/* Two-Column Broadsheet Report + Technical Specs Sidebar */}
      <section className="py-12">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-[30px]">
          <div className="grid grid-cols-1 items-start gap-10 min-[940px]:grid-cols-[1.6fr_1fr]">
            {/* Multi-Column Newspaper Article */}
            <article className="rv rv-settle dropcap font-text text-[16.5px] leading-[1.65] text-ink [hyphens:auto] [text-align:justify] min-[600px]:columns-2 min-[600px]:gap-9 min-[600px]:[column-rule:1px_solid_rgba(22,20,15,0.25)]">
              {exhibit.articleParagraphs.map((para, idx) => (
                <p key={idx} className="mb-4">
                  {para}
                </p>
              ))}

              <blockquote className="my-6 border-y-2 border-ink py-4 text-center font-display text-[24px] italic leading-[1.25] text-ink [column-span:all] [text-align:center]">
                {exhibit.pullQuote}
              </blockquote>

              {exhibit.closingParagraphs.map((para, idx) => (
                <p key={idx} className="mb-4 last:mb-0">
                  {para}
                </p>
              ))}
            </article>

            {/* Right Specification Ledger */}
            <aside
              className="rv rv-settle border-2 border-ink"
              style={{ '--rv-delay': '120ms' } as React.CSSProperties}
            >
              <div className="bg-ink px-4 py-[9px] font-gothic text-[11px] font-bold uppercase tracking-[0.12em] text-paper">
                How it was built
              </div>

              {exhibit.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="grid grid-cols-[1fr_1.45fr] gap-3 border-t border-ink/25 px-4 py-3 first-of-type:border-t-0"
                >
                  <span className="font-gothic text-[11px] font-bold uppercase tracking-[0.1em] text-ink-soft">
                    {spec.label}
                  </span>
                  <span className="font-mono text-[13px] text-ink">{spec.value}</span>
                </div>
              ))}

              <div className="border-t border-ink/25 bg-paper-warm px-4 py-4">
                <p className="mb-3 font-gothic text-[11px] font-bold uppercase tracking-[0.12em] text-ink-soft">
                  Related exhibits
                </p>
                {relatedExhibits.map((rel) => (
                  <button
                    key={rel.id}
                    type="button"
                    onClick={() => onSelectExhibit(rel.id)}
                    className="link-pencil mb-2 block w-fit cursor-pointer text-left font-text text-[15px] text-ink last:mb-0"
                  >
                    {rel.code} — {rel.title}
                  </button>
                ))}
              </div>
            </aside>
          </div>

          {/* Case File Bottom Navigation Rule */}
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t-4 border-ink pt-5">
            <button
              type="button"
              onClick={() => onBackToCase(exhibit.id)}
              className="inline-block cursor-pointer border-2 border-ink px-5 py-3 font-gothic text-xs font-bold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              ← Back to the case
            </button>

            <a
              href={exhibit.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-ink bg-ink px-5 py-3 font-gothic text-xs font-bold uppercase tracking-[0.14em] text-paper transition-colors hover:bg-paper hover:text-ink"
            >
              {exhibit.externalLabel} →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

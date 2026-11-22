import React from 'react';
import { CAREER_LEDGER } from '../data/portfolioData';

export const LedgerSection: React.FC = () => {
  return (
    <section id="ledger" className="scroll-mt-20 py-14 sm:py-[76px]">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-[30px]">
        {/* Section Header */}
        <div className="mb-[30px]">
          <div className="rv flex flex-wrap items-baseline justify-between gap-5 pb-2.5">
            <div>
              <span className="rv-fade font-gothic text-xs font-bold uppercase tracking-[0.18em] text-ink">
                The Archive
              </span>
              <h2 className="mt-1.5 font-display text-[clamp(30px,4vw,46px)] font-normal leading-[1.02] tracking-[-0.015em] text-ink">
                <span className="rv-word" style={{ '--i': 0 } as React.CSSProperties}>
                  The
                </span>{' '}
                <span className="rv-word" style={{ '--i': 1 } as React.CSSProperties}>
                  Career
                </span>{' '}
                <span className="rv-word" style={{ '--i': 2 } as React.CSSProperties}>
                  Ledger
                </span>
              </h2>
            </div>
            <span className="rv-fade max-w-full font-gothic text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft">
              Experience, certification &amp; academic record
            </span>
          </div>
          <div className="rv rv-rule h-1 bg-ink" />
        </div>

        {/* Chronological Ledger Rows */}
        <div className="border-t-2 border-ink">
          {CAREER_LEDGER.map((entry, idx) => (
            <div
              key={`${entry.title}-${entry.organization}`}
              className="rv rv-settle grid grid-cols-1 items-baseline gap-2 border-b border-ink/25 px-1 py-[24px] transition-colors hover:bg-paper-warm/70 min-[680px]:grid-cols-[180px_1fr_1.05fr] min-[680px]:gap-6"
              style={{ '--rv-delay': `${idx * 100}ms` } as React.CSSProperties}
            >
              <div className="font-mono text-[13px] text-ink-soft tabular-nums">
                <span className="rv-stampchild">{entry.period}</span>
              </div>

              <div className="font-display text-[24px] leading-[1.12] text-ink">
                {entry.title}
                <b className="mt-1.5 block font-gothic text-xs font-bold uppercase tracking-[0.12em] text-ink-soft">
                  {entry.organization}
                </b>
              </div>

              <div className="font-text text-[15px] leading-[1.58] text-ink-soft">
                {entry.summary}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

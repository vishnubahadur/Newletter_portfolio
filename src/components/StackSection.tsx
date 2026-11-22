import React from 'react';
import { LAB_REPORT } from '../data/portfolioData';

export const StackSection: React.FC = () => {
  return (
    <section id="stack" className="scroll-mt-20 py-14 sm:py-[76px]">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-[30px]">
        {/* Section Header */}
        <div className="mb-[30px]">
          <div className="rv flex flex-wrap items-baseline justify-between gap-5 pb-2.5">
            <div>
              <span className="rv-fade font-gothic text-xs font-bold uppercase tracking-[0.18em] text-ink">
                Forensics
              </span>
              <h2 className="mt-1.5 font-display text-[clamp(30px,4vw,46px)] font-normal leading-[1.02] tracking-[-0.015em] text-ink">
                <span className="rv-word" style={{ '--i': 0 } as React.CSSProperties}>
                  The
                </span>{' '}
                <span className="rv-word" style={{ '--i': 1 } as React.CSSProperties}>
                  Lab
                </span>{' '}
                <span className="rv-word" style={{ '--i': 2 } as React.CSSProperties}>
                  Report
                </span>
              </h2>
            </div>
            <span className="rv-fade max-w-full font-gothic text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft">
              Substances detected on the subject, as of this edition
            </span>
          </div>
          <div className="rv rv-rule h-1 bg-ink" />
        </div>

        {/* Forensic Ledger Table */}
        <div className="border-2 border-ink">
          <div className="hidden grid-cols-[2.4fr_1fr_1.2fr_1.3fr] bg-ink font-gothic text-[11px] font-bold uppercase tracking-[0.12em] text-paper sm:grid">
            <span className="border-r border-paper/25 px-4 py-[9px]">Substance</span>
            <span className="border-r border-paper/25 px-4 py-[9px]">Code</span>
            <span className="border-r border-paper/25 px-4 py-[9px]">Detected</span>
            <span className="px-4 py-[9px] text-right">Finding</span>
          </div>

          {LAB_REPORT.map((row, idx) => {
            const isPrimary = row.finding === 'Primary tool';
            return (
              <div
                key={row.substance}
                className="rv rv-settle grid gap-2 border-t border-ink/25 px-3.5 py-3.5 font-mono transition-colors first:border-t-0 hover:bg-paper-warm sm:grid-cols-[2.4fr_1fr_1.2fr_1.3fr] sm:items-center sm:gap-0 sm:px-0 sm:py-0"
                style={{ '--rv-delay': `${Math.min(idx * 35, 350)}ms` } as React.CSSProperties}
              >
                <span className="flex min-w-0 items-baseline justify-between gap-3 sm:block sm:border-r sm:border-ink/25 sm:px-4 sm:py-[11px]">
                  <span className="truncate font-display text-[19px] tracking-normal text-ink sm:tracking-[-0.01em]">
                    {row.substance}
                  </span>
                  <span className="shrink-0 font-gothic text-[10px] font-bold uppercase tracking-[0.14em] text-ink-soft sm:hidden">
                    {row.code}
                  </span>
                </span>

                <span className="hidden border-r border-ink/25 px-4 py-[11px] text-[13px] text-ink-soft sm:block">
                  {row.code}
                </span>

                <span className="text-[12px] uppercase tracking-[0.08em] text-ink-soft sm:border-r sm:border-ink/25 sm:px-4 sm:py-[11px] sm:text-[13px] sm:normal-case sm:tracking-normal sm:text-ink">
                  {row.detected}
                </span>

                <span className="sm:px-4 sm:py-[9px] sm:text-right">
                  <span
                    className={`rv-stampchild border-2 px-2 py-0.5 font-gothic text-[10px] font-black uppercase tracking-[0.14em] ${row.tilt} ${
                      isPrimary
                        ? 'border-stamp text-stamp'
                        : 'border-ink/60 text-ink'
                    }`}
                  >
                    {row.finding}
                  </span>
                </span>
              </div>
            );
          })}
        </div>

        <p className="mt-3 text-left font-gothic text-[11px] font-medium tracking-[0.04em] text-ink-soft sm:text-right">
          Findings reflect technologies verified across production projects, coursework, and engineering work.
        </p>
      </div>
    </section>
  );
};

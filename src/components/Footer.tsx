import React from 'react';
import { ArrowUp, Fingerprint, Github, Linkedin } from 'lucide-react';
import { PROFILE, RESUME_PDF_PATH } from '../data/portfolioData';

interface FooterProps {
  onNavigateHome: (sectionId?: string) => void;
  onReplayIntro: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateHome, onReplayIntro }) => {
  const year = new Date().getFullYear();

  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, sectionId?: string) => {
    e.preventDefault();
    onNavigateHome(sectionId);
  };

  return (
    <footer className="border-t-[6px] border-ink bg-ink px-0 pb-[30px] pt-14 text-paper">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-[30px]">
        {/* Giant Inverted Broadsheet Nameplate */}
        <div className="border-b border-paper/30 pb-[22px] text-center font-display text-[clamp(42px,7vw,82px)] leading-[0.9] tracking-[-0.01em] text-paper">
          {PROFILE.mastheadName}
        </div>

        {/* 4-Column Colophon */}
        <div className="grid grid-cols-1 gap-8 pt-[30px] min-[680px]:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <p className="max-w-[34ch] font-text text-[15px] leading-[1.6] text-paper/[0.78]">
              Dispatches from {PROFILE.locationShort}. {PROFILE.fullName} builds full-stack web
              applications across React, Node.js, Express, and MongoDB — leaving clean APIs and
              responsive interfaces in working order. Set in Libre Caslon and Libre Franklin.
            </p>
          </div>

          <div>
            <h4 className="mb-3.5 font-gothic text-[11px] font-bold uppercase tracking-[0.14em] text-paper/60">
              Sections
            </h4>
            <a
              className="link-pencil-bright mb-2.5 block w-fit font-text text-[15px] text-paper"
              href="#work"
              onClick={(e) => handleLink(e, 'work')}
            >
              Selected Works
            </a>
            <a
              className="link-pencil-bright mb-2.5 block w-fit font-text text-[15px] text-paper"
              href="#stack"
              onClick={(e) => handleLink(e, 'stack')}
            >
              The Lab Report
            </a>
            <a
              className="link-pencil-bright mb-2.5 block w-fit font-text text-[15px] text-paper"
              href="#ledger"
              onClick={(e) => handleLink(e, 'ledger')}
            >
              The Career Ledger
            </a>
            <a
              className="link-pencil-bright mb-2.5 block w-fit font-text text-[15px] text-paper"
              href="#contact"
              onClick={(e) => handleLink(e, 'contact')}
            >
              Contact
            </a>
          </div>

          <div>
            <h4 className="mb-3.5 font-gothic text-[11px] font-bold uppercase tracking-[0.14em] text-paper/60">
              The Desk
            </h4>
            <p className="mb-2.5 font-text text-[15px] text-paper">{PROFILE.locationShort}</p>
            <a
              className="link-pencil-bright mb-2.5 block w-fit font-text text-[15px] text-paper"
              href={PROFILE.phoneHref}
            >
              +91 {PROFILE.phone}
            </a>
            <a
              className="link-pencil-bright mb-2.5 block w-fit font-text text-[15px] text-paper [overflow-wrap:anywhere]"
              href={`mailto:${PROFILE.email}`}
            >
              {PROFILE.email}
            </a>
            <a
              className="link-pencil-bright mb-2.5 block w-fit font-text text-[15px] text-paper"
              href={RESUME_PDF_PATH}
              download="Vishnu_Bahadur_Budhathoki_Resume.pdf"
            >
              Resume (PDF)
            </a>
          </div>

          <div>
            <h4 className="mb-3.5 font-gothic text-[11px] font-bold uppercase tracking-[0.14em] text-paper/60">
              Wire Services
            </h4>
            <a
              className="link-pencil-bright mb-2.5 block w-fit font-text text-[15px] text-paper"
              href={PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="link-pencil-bright mb-2.5 block w-fit font-text text-[15px] text-paper"
              href={PROFILE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="link-pencil-bright mb-2.5 block w-fit font-text text-[15px] text-paper"
              href={PROFILE.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Netlify Portfolio
            </a>
          </div>
        </div>

        {/* Distressed Tilted Crimson CASE CLOSED Stamp */}
        <div className="mt-12 flex justify-center">
          <span
            aria-hidden="true"
            className="inline-block -rotate-6 border-4 border-stamp-bright px-6 py-2 font-gothic text-[15px] font-black uppercase tracking-[0.3em] text-stamp-bright [filter:url(#fm-rough)]"
          >
            Case Closed
          </span>
        </div>

        {/* Bottom Copyright + Utility Controls */}
        <div className="mt-8 flex flex-col items-center gap-4 border-t border-paper/30 pt-5 font-gothic text-[11px] font-medium uppercase tracking-[0.1em] text-paper/70 min-[680px]:flex-row min-[680px]:justify-between">
          <span>
            © {year} {PROFILE.paperTitle} · All rights reserved · Butwal, Nepal
          </span>

          <div className="flex items-center gap-2.5">
            <a
              className="flex h-10 w-10 items-center justify-center border border-paper/45 text-paper transition-colors hover:bg-paper hover:text-ink"
              href={PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <Github className="h-[18px] w-[18px]" />
            </a>
            <a
              className="flex h-10 w-10 items-center justify-center border border-paper/45 text-paper transition-colors hover:bg-paper hover:text-ink"
              href={PROFILE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Linkedin className="h-[18px] w-[18px]" />
            </a>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              title="Back to top"
              aria-label="Back to top"
              className="flex h-10 w-10 cursor-pointer items-center justify-center border border-paper/45 text-paper transition-colors hover:bg-paper hover:text-ink"
            >
              <ArrowUp className="h-[18px] w-[18px]" />
            </button>
            <button
              type="button"
              onClick={onReplayIntro}
              title="Reopen the case — replay the intro"
              aria-label="Reopen the case — replay the intro"
              className="flex h-10 w-10 cursor-pointer items-center justify-center border border-paper/45 text-paper transition-colors hover:border-stamp-bright hover:text-stamp-bright"
            >
              <Fingerprint className="h-[20px] w-[20px]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

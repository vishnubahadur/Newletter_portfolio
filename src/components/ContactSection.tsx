import React, { useState } from 'react';
import { Check, Download, Github, Globe, Linkedin, Mail, Phone } from 'lucide-react';
import { PROFILE, RESUME_PDF_PATH } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedName = formState.name.trim();
    const trimmedEmail = formState.email.trim();
    const trimmedMessage = formState.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setErrorMsg('Please fill in your name, email address, and message before dispatching.');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
  };

  const mailtoDirectHref = () => {
    const subject = encodeURIComponent(
      formState.subject.trim() || `Portfolio inquiry from ${formState.name.trim() || 'a reader'}`
    );
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
    );
    return `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="scroll-mt-16 border-t-4 border-ink py-[76px]">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-[30px]">
        {/* Section Header */}
        <div className="mb-[30px]">
          <div className="rv flex flex-wrap items-baseline justify-between gap-5 pb-2.5">
            <div>
              <span className="rv-fade font-gothic text-xs font-bold uppercase tracking-[0.18em] text-ink">
                Submit a Tip
              </span>
              <h2 className="mt-1.5 font-display text-[clamp(30px,4vw,46px)] font-normal leading-[1.02] tracking-[-0.015em] text-ink">
                <span className="rv-word" style={{ '--i': 0 } as React.CSSProperties}>
                  Letters
                </span>{' '}
                <span className="rv-word" style={{ '--i': 1 } as React.CSSProperties}>
                  &amp;
                </span>{' '}
                <span className="rv-word" style={{ '--i': 2 } as React.CSSProperties}>
                  Commissions
                </span>
              </h2>
            </div>
            <span className="rv-fade max-w-full font-gothic text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft">
              The desk is open for full-stack roles &amp; select projects
            </span>
          </div>
          <div className="rv rv-rule h-1 bg-ink" />
        </div>

        {/* Two-Column Bordered Contact Broadsheet Box */}
        <div className="rv rv-settle grid grid-cols-1 border-2 border-ink min-[720px]:grid-cols-[1.15fr_0.85fr]">
          {/* Left Form Column */}
          <div className="border-b-2 border-ink p-6 min-[720px]:border-b-0 min-[720px]:border-r-2 min-[720px]:p-9">
            <h3 className="mb-1.5 font-display text-[32px] font-normal text-ink">
              Put it in writing
            </h3>
            <p className="mb-6 font-text text-[15px] leading-[1.55] text-ink-soft">
              A role to fill, a full-stack product in mind, or a technical question — send it
              through and he&apos;ll get back to you.
            </p>

            {submitted ? (
              <div className="border-2 border-ink bg-paper-warm p-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/25 pb-4">
                  <span className="inline-flex items-center gap-2 font-gothic text-xs font-bold uppercase tracking-[0.14em] text-ink">
                    <Check className="h-4 w-4 text-stamp" />
                    Letter Logged at the Desk
                  </span>
                  <span className="inline-block -rotate-3 border-2 border-stamp px-2.5 py-0.5 font-gothic text-[10px] font-black uppercase tracking-[0.16em] text-stamp">
                    Received
                  </span>
                </div>

                <p className="mt-4 font-text text-[16px] leading-[1.6] text-ink">
                  Thank you, <strong>{formState.name}</strong>. Your message has been prepared for{' '}
                  <span className="font-mono text-[14px]">{PROFILE.email}</span>.
                </p>
                <p className="mt-2 font-text text-[14px] leading-[1.55] text-ink-soft">
                  Since this portfolio runs purely client-side without a third-party mail relay,
                  click below to open your email client pre-addressed with your letter — or send
                  another note.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={mailtoDirectHref()}
                    className="inline-flex cursor-pointer items-center gap-2 border-2 border-ink bg-ink px-5 py-3 font-gothic text-xs font-bold uppercase tracking-[0.12em] text-paper transition-colors hover:bg-transparent hover:text-ink"
                  >
                    Open in email client →
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="inline-flex cursor-pointer items-center border-2 border-ink px-5 py-3 font-gothic text-xs font-bold uppercase tracking-[0.12em] text-ink transition-colors hover:bg-ink hover:text-paper"
                  >
                    Write another letter
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 gap-4 min-[600px]:grid-cols-2">
                  <div className="mb-4">
                    <label
                      className="mb-[7px] block font-gothic text-[11px] font-bold uppercase tracking-[0.12em] text-ink-soft"
                      htmlFor="contact-name"
                    >
                      Your name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                      placeholder="Jane Doe"
                      className="w-full border-2 border-ink bg-paper-bright px-3.5 py-3 font-text text-[16px] text-ink placeholder:text-ink-faint focus:border-stamp focus:outline-none"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      className="mb-[7px] block font-gothic text-[11px] font-bold uppercase tracking-[0.12em] text-ink-soft"
                      htmlFor="contact-email"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                      placeholder="jane@company.com"
                      className="w-full border-2 border-ink bg-paper-bright px-3.5 py-3 font-text text-[16px] text-ink placeholder:text-ink-faint focus:border-stamp focus:outline-none"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    className="mb-[7px] block font-gothic text-[11px] font-bold uppercase tracking-[0.12em] text-ink-soft"
                    htmlFor="contact-subject"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={formState.subject}
                    onChange={(e) => setFormState((s) => ({ ...s, subject: e.target.value }))}
                    placeholder="Full-stack role, MERN product, collaboration..."
                    className="w-full border-2 border-ink bg-paper-bright px-3.5 py-3 font-text text-[16px] text-ink placeholder:text-ink-faint focus:border-stamp focus:outline-none"
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="mb-[7px] block font-gothic text-[11px] font-bold uppercase tracking-[0.12em] text-ink-soft"
                    htmlFor="contact-message"
                  >
                    The story
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    value={formState.message}
                    onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                    placeholder="Tell him about the team or what you're building."
                    className="min-h-[120px] w-full resize-y border-2 border-ink bg-paper-bright px-3.5 py-3 font-text text-[16px] leading-[1.5] text-ink placeholder:text-ink-faint focus:border-stamp focus:outline-none"
                  />
                </div>

                {errorMsg && (
                  <p
                    role="alert"
                    className="mb-4 border border-stamp bg-paper-warm px-3.5 py-2.5 font-gothic text-xs font-semibold text-stamp"
                  >
                    {errorMsg}
                  </p>
                )}

                <div className="mt-[22px] flex flex-wrap items-center justify-between gap-4">
                  <span className="font-gothic text-[11px] uppercase tracking-[0.06em] text-ink-soft">
                    Usually replies within 24 hours
                  </span>
                  <button
                    type="submit"
                    className="inline-flex cursor-pointer items-center gap-2.5 whitespace-nowrap border-2 border-ink bg-ink px-7 py-[15px] font-gothic text-[14px] font-bold uppercase tracking-[0.1em] text-paper transition-colors duration-150 hover:bg-transparent hover:text-ink"
                  >
                    Send the letter
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Desk Metadata Column */}
          <div className="flex flex-col bg-paper-warm p-6 min-[720px]:p-8">
            <div className="border-b border-ink/25 pb-4 pt-0">
              <p className="mb-[5px] font-gothic text-[11px] font-bold uppercase tracking-[0.12em] text-ink-soft">
                Direct line
              </p>
              <p className="font-display text-[21px] leading-[1.2] text-ink [overflow-wrap:anywhere]">
                <a className="link-pencil" href={`mailto:${PROFILE.email}`}>
                  {PROFILE.email}
                </a>
              </p>
              <p className="mt-1.5 font-mono text-[14px] text-ink">
                <a className="link-pencil" href={PROFILE.phoneHref}>
                  +91 {PROFILE.phone}
                </a>
              </p>
              <p className="mt-1 font-text text-[14px] text-ink-soft">
                For full-stack roles, technical interviews, and web engineering collaborations.
              </p>
            </div>

            <div className="border-b border-ink/25 py-4">
              <p className="mb-[5px] font-gothic text-[11px] font-bold uppercase tracking-[0.12em] text-ink-soft">
                The Desk
              </p>
              <p className="font-display text-[21px] leading-[1.2] text-ink">
                {PROFILE.locationFull}
              </p>
              <p className="mt-1 font-text text-[14px] text-ink-soft">
                IST — comfortable in fast-paced on-site and remote engineering teams.
              </p>
            </div>

            <div className="border-b border-ink/25 py-4">
              <p className="mb-[5px] font-gothic text-[11px] font-bold uppercase tracking-[0.12em] text-ink-soft">
                Official Dossier
              </p>
              <p className="font-display text-[21px] leading-[1.2] text-ink">
                Curriculum Vitae (PDF)
              </p>
              <p className="mt-1 font-text text-[14px] text-ink-soft">
                Full employment history, projects, skills, and education in one printable sheet.
              </p>
              <a
                href={RESUME_PDF_PATH}
                download="Vishnu_Bahadur_Budhathoki_Resume.pdf"
                className="mt-3 inline-flex items-center gap-2 border-2 border-ink bg-paper-bright px-4 py-2 font-gothic text-[11px] font-bold uppercase tracking-[0.12em] text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                <Download className="h-3.5 w-3.5" />
                Download Resume PDF
              </a>
            </div>

            {/* Social Square Icon Links */}
            <div className="mt-auto flex flex-wrap gap-2.5 pt-[22px]">
              <a
                className="flex h-[42px] w-[42px] items-center justify-center border-2 border-ink text-ink transition-colors hover:bg-ink hover:text-paper"
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <Github className="h-[19px] w-[19px]" />
              </a>
              <a
                className="flex h-[42px] w-[42px] items-center justify-center border-2 border-ink text-ink transition-colors hover:bg-ink hover:text-paper"
                href={PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="h-[19px] w-[19px]" />
              </a>
              <a
                className="flex h-[42px] w-[42px] items-center justify-center border-2 border-ink text-ink transition-colors hover:bg-ink hover:text-paper"
                href={PROFILE.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Netlify Portfolio"
                title="Portfolio Website"
              >
                <Globe className="h-[19px] w-[19px]" />
              </a>
              <a
                className="flex h-[42px] w-[42px] items-center justify-center border-2 border-ink text-ink transition-colors hover:bg-ink hover:text-paper"
                href={`mailto:${PROFILE.email}`}
                aria-label="Email"
                title="Email"
              >
                <Mail className="h-[19px] w-[19px]" />
              </a>
              <a
                className="flex h-[42px] w-[42px] items-center justify-center border-2 border-ink text-ink transition-colors hover:bg-ink hover:text-paper"
                href={PROFILE.phoneHref}
                aria-label="Phone"
                title="Call Vishnu"
              >
                <Phone className="h-[19px] w-[19px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

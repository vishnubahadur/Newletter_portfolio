import React, { useEffect, useRef } from 'react';

export const MagnifierCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    const el = cursorRef.current;
    if (!el) return;

    let active = false;

    const onMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const overEvidence = Boolean(target?.closest('[data-magnify="true"]'));

      if (overEvidence !== active) {
        active = overEvidence;
        el.style.opacity = active ? '1' : '0';
      }

      if (active) {
        el.style.transform = `translate3d(${e.clientX + 14}px, ${e.clientY + 14}px, 0)`;
      }
    };

    const onLeave = () => {
      active = false;
      el.style.opacity = '0';
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9000] opacity-0 transition-opacity duration-150 will-change-transform"
    >
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" className="drop-shadow-sm">
        <circle
          cx="10.5"
          cy="10.5"
          r="7"
          stroke="#16140f"
          strokeWidth="2.5"
          fill="rgba(251,250,245,0.65)"
        />
        <line
          x1="15.8"
          y1="15.8"
          x2="23"
          y2="23"
          stroke="#16140f"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="8.4" cy="8.2" r="2.1" fill="rgba(251,250,245,0.88)" />
      </svg>
    </div>
  );
};

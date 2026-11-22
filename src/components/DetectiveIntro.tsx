import React, { useCallback, useEffect, useRef, useState } from 'react';
import { PROFILE } from '../data/portfolioData';

interface DetectiveIntroProps {
  isOpen: boolean;
  onComplete: () => void;
}

const COLUMNS = [
  'The Investigation',
  'Field Dispatch',
  'MERN Architecture',
  'Case Summary',
  'On the Record',
];

const LINE_PATTERN = [
  '', '', 's', '', '', '', '', 's', '', '', 's', '', 'x',
  '', '', 's', '', '', '', '', 's', '', '', 's', '', 'x',
  '', '', 's', '', '', '', '', 's', '', '', 's', '', 'x',
  '', '', 's', '', '', '', '', 's', '', '', 's',
];

const NewsprintColumns: React.FC<{ magnified?: boolean }> = ({ magnified = false }) => (
  <div className={`fm-scene ${magnified ? 'fm-scene--mag' : 'fm-scene--base'}`}>
    {COLUMNS.map((heading) => (
      <div className="fm-col" key={heading}>
        <div className="fm-col-h">{heading}</div>
        <div className="fm-col-r" />
        {LINE_PATTERN.map((cls, i) => (
          <div key={i} className={`fm-col-l ${cls}`} />
        ))}
      </div>
    ))}
    <div className="fm-masthead">
      <div className="fm-masthead-k">Wanted</div>
      <div className="fm-masthead-t">{PROFILE.mastheadName}</div>
      <div className="fm-masthead-r" />
    </div>
  </div>
);

export const DetectiveIntro: React.FC<DetectiveIntroProps> = ({ isOpen, onComplete }) => {
  const [phase, setPhase] = useState<'searching' | 'found' | 'exiting'>('searching');
  const [lensPos, setLensPos] = useState({ x: 0, y: 0 });
  const [viewport, setViewport] = useState({ w: 1200, h: 800 });
  const dwellRef = useRef<number | null>(null);
  const completedRef = useRef(false);

  const finishIntro = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;
    if (dwellRef.current) {
      window.clearTimeout(dwellRef.current);
      dwellRef.current = null;
    }
    setPhase('exiting');
    window.setTimeout(() => {
      onComplete();
    }, 440);
  }, [onComplete]);

  const triggerFound = useCallback(() => {
    if (completedRef.current || phase !== 'searching') return;
    setPhase('found');
    window.setTimeout(() => {
      finishIntro();
    }, 820);
  }, [finishIntro, phase]);

  useEffect(() => {
    if (!isOpen) return;
    completedRef.current = false;
    setPhase('searching');

    const w = window.innerWidth;
    const h = window.innerHeight;
    setViewport({ w, h });
    setLensPos({ x: w * 0.28, y: h * 0.44 });

    const onResize = () => {
      setViewport({ w: window.innerWidth, h: window.innerHeight });
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        finishIntro();
      }
    };

    window.addEventListener('resize', onResize);
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('keydown', onKeyDown);
      if (dwellRef.current) window.clearTimeout(dwellRef.current);
    };
  }, [isOpen, finishIntro]);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (phase !== 'searching') return;
    const x = e.clientX;
    const y = e.clientY;
    setLensPos({ x, y });

    const cx = viewport.w / 2;
    const cy = viewport.h / 2;
    const dist = Math.hypot(x - cx, y - cy);

    if (dist < 105) {
      if (!dwellRef.current) {
        dwellRef.current = window.setTimeout(() => {
          triggerFound();
        }, 260);
      }
    } else if (dwellRef.current) {
      window.clearTimeout(dwellRef.current);
      dwellRef.current = null;
    }
  };

  const handleSceneClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest('button')) return;
    const cx = viewport.w / 2;
    const cy = viewport.h / 2;
    setLensPos({ x: cx, y: cy });
    triggerFound();
  };

  if (!isOpen) return null;

  const lensRadius = 92;
  const zoomScale = 1.48;
  const offsetX = lensRadius - lensPos.x * zoomScale;
  const offsetY = lensRadius - lensPos.y * zoomScale;

  return (
    <div
      className={`fm-intro ${phase === 'exiting' ? 'fm-intro--exit' : ''}`}
      onPointerMove={handlePointerMove}
      onClick={handleSceneClick}
      role="dialog"
      aria-modal="true"
      aria-label="Interactive broadsheet introduction"
    >
      <div className="fm-zoom">
        {/* Blurred base broadsheet */}
        <NewsprintColumns />

        {/* Subtle spotlight vignette */}
        <div
          className="pointer-events-none absolute inset-0 z-[4]"
          style={{
            background: `radial-gradient(circle 160px at ${lensPos.x}px ${lensPos.y}px, transparent 0%, rgba(22,20,15,0.22) 55%, rgba(22,20,15,0.44) 100%)`,
          }}
        />

        {/* Grain */}
        <div className="fm-grain" />

        {/* Magnifying glass circular viewport */}
        <div
          className="fm-lens"
          style={{
            transform: `translate3d(${lensPos.x}px, ${lensPos.y}px, 0) scale(${phase === 'found' ? 1.12 : 1})`,
            transition: phase === 'found' ? 'transform 0.35s cubic-bezier(0.22,1,0.36,1)' : 'none',
          }}
        >
          <div className="fm-lens-handle" />
          <div className="fm-magwin h-full w-full bg-paper">
            <div
              className="fm-maginner"
              style={{
                width: `${viewport.w}px`,
                height: `${viewport.h}px`,
                transform: `translate3d(${offsetX}px, ${offsetY}px, 0) scale(${zoomScale})`,
                transformOrigin: '0 0',
              }}
            >
              <NewsprintColumns magnified />
            </div>
          </div>
          <div className="fm-lens-glass" />
          <div className="fm-lens-rim" />
        </div>

        {/* Slammed stamp on subject discovery */}
        {phase !== 'searching' && (
          <div className="fm-stampwrap">
            <div
              className="fm-stamp -rotate-6"
              style={{
                animation: 'none',
                transition: 'transform 0.28s cubic-bezier(0.34,1.56,0.64,1)',
              }}
            >
              Subject Located
            </div>
          </div>
        )}

        <div className="fm-hint">
          {phase === 'searching'
            ? 'Take the glass — find the subject (or click anywhere)'
            : 'Opening the front page...'}
        </div>

        <button
          className="fm-skip"
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            finishIntro();
          }}
        >
          Skip intro →
        </button>
      </div>
    </div>
  );
};

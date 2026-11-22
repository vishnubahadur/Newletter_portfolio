import { useEffect } from 'react';

export function useScrollReveal(dependencyKey?: string) {
  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const elements = Array.from(document.querySelectorAll<HTMLElement>('.rv'));
    if (!elements.length) return;

    if (prefersReduced || typeof IntersectionObserver === 'undefined') {
      document.documentElement.classList.remove('js-motion');
      elements.forEach((el) => el.classList.add('is-revealed'));
      return;
    }

    document.documentElement.classList.add('js-motion');

    // Immediately reveal elements already within or near the initial viewport
    const viewportHeight = window.innerHeight || 900;
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < viewportHeight * 0.96) {
        el.classList.add('is-revealed');
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -36px 0px',
      }
    );

    elements.forEach((el) => {
      if (!el.classList.contains('is-revealed')) {
        observer.observe(el);
      }
    });

    // Safety fallback so nothing ever stays permanently hidden
    const fallbackTimer = window.setTimeout(() => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 120) {
          el.classList.add('is-revealed');
        }
      });
    }, 900);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallbackTimer);
    };
  }, [dependencyKey]);
}

'use client';

import { useEffect, useState } from 'react';

// Letter-by-letter roll used on every NOIRÉ CTA label (28ms stagger)
export function Roll({ children }) {
  const text = String(children);
  return (
    <span className="roll" aria-label={text}>
      {Array.from(text).map((ch, i) => (
        <span key={i} aria-hidden="true" className="roll-ch" style={{ transitionDelay: `${i * 28}ms` }}>
          {ch === ' ' ? ' ' : ch}
        </span>
      ))}
    </span>
  );
}

export function Arrow({ className = 'tlink-arrow' }) {
  return (
    <svg className={className} viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M1 7h11.5M8 2.5 12.5 7 8 11.5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function Eyebrow({ children, className = '', reveal = true }) {
  return (
    <div className={`eyebrow ${className}`} {...(reveal ? { 'data-reveal': '' } : {})}>
      <span className="eyebrow-rule" />
      <span className="t-label">{children}</span>
    </div>
  );
}

// "OUR STORY →" style link; renders a button when given onClick
export function TextLink({ children, href, onClick, className = '', ...rest }) {
  const inner = (
    <>
      <span className="t-label"><Roll>{children}</Roll></span>
      <Arrow />
    </>
  );
  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={`tlink roll-host ${className}`} {...rest}>
        {inner}
      </button>
    );
  }
  return (
    <a href={href} className={`tlink roll-host ${className}`} {...rest}>
      {inner}
    </a>
  );
}

export function Button({ children, variant = 'ink', arrow = false, className = '', ...rest }) {
  return (
    <button type="button" className={`btn btn-${variant} roll-host ${className}`} {...rest}>
      <span className="t-label"><Roll>{children}</Roll></span>
      {arrow && <Arrow />}
    </button>
  );
}

// Italic phrase inside a Boska headline
export function Em({ children }) {
  return <span className="t-italic">{children}</span>;
}

// 0..1 progress of a tall "runway" element scrolling past a sticky stage
export function useRunwayProgress(ref) {
  const [p, setP] = useState(0);
  useEffect(() => {
    let raf = 0;
    const measure = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      const next = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 0;
      setP((prev) => (Math.abs(prev - next) > 0.0005 ? next : prev));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ref]);
  return p;
}

export function useIsDesktop(query = '(min-width: 1024px)') {
  const [ok, setOk] = useState(true);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const set = () => setOk(mq.matches);
    set();
    mq.addEventListener('change', set);
    return () => mq.removeEventListener('change', set);
  }, [query]);
  return ok;
}

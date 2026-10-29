'use client';

import { useEffect } from 'react';

export default function NoireiEngine() {
  useEffect(() => {
    const doc = document;
    const root = doc.documentElement;

    // Mark html with noire tags
    root.classList.add('noire-cursor');
    root.setAttribute('data-noire-home', '');
    root.setAttribute('data-noire-js', '');

    // 1. Exact Noirei Cursor with Inertia Glide
    let cursorEl = null;
    let labelEl = null;
    let currentLabel = '';
    let currentMode = '';
    let tau = 0.075;
    let targetX = 0, targetY = 0;
    let pX = 0, pY = 0;
    let curX = 0, curY = 0;
    let rafId = 0;
    let lastTime = 0;

    const setCursorLabel = (text, icon) => {
      if (!cursorEl || !labelEl) return;
      cursorEl.classList.toggle('nc-plus', icon === 'plus');
      if (text !== currentLabel) {
        currentLabel = text;
        labelEl.textContent = '';
        text.split('').forEach((ch, idx) => {
          const s = doc.createElement('span');
          s.textContent = ch === ' ' ? '\u00A0' : ch;
          s.style.setProperty('--i', idx);
          labelEl.appendChild(s);
        });
      }
    };

    const updateCursorPos = () => {
      if (cursorEl) {
        cursorEl.style.transform = `translate3d(${curX.toFixed(2)}px, ${curY.toFixed(2)}px, 0)`;
      }
    };

    const animateGlide = (time) => {
      const dt = Math.min(Math.max(time - lastTime, 1), 64) / 1000;
      lastTime = time;
      const nTau = currentMode === 'media' ? tau * 1.3 : tau;
      const r1 = 1 - Math.exp(-dt / (nTau * 0.4));
      const r2 = 1 - Math.exp(-dt / (nTau * 0.6));
      pX += (targetX - pX) * r1;
      pY += (targetY - pY) * r2;
      curX += (pX - curX) * r2;
      curY += (pY - curY) * r2;

      if (
        Math.abs(targetX - curX) < 0.05 &&
        Math.abs(targetY - curY) < 0.05 &&
        Math.abs(targetX - pX) < 0.05 &&
        Math.abs(targetY - pY) < 0.05
      ) {
        curX = pX = targetX;
        curY = pY = targetY;
        updateCursorPos();
        rafId = 0;
      } else {
        updateCursorPos();
        rafId = requestAnimationFrame(animateGlide);
      }
    };

    const onPointerMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!cursorEl) return;
      if (!cursorEl.classList.contains('is-on')) {
        cursorEl.classList.add('is-on');
        curX = pX = targetX;
        curY = pY = targetY;
        updateCursorPos();
      } else if (!rafId) {
        lastTime = performance.now();
        rafId = requestAnimationFrame(animateGlide);
      }
    };

    const setCursorMode = (mode, label, icon) => {
      if (!cursorEl) return;
      if (mode === 'media') {
        setCursorLabel(label || 'EXPLORE', icon || '');
      }
      if (mode !== currentMode) {
        currentMode = mode;
        cursorEl.classList.toggle('is-link', mode === 'link');
        cursorEl.classList.toggle('is-button', mode === 'button');
        cursorEl.classList.toggle('is-media', mode === 'media');
        cursorEl.classList.toggle('is-off', mode === 'off');
      }
    };

    const detectCursorTarget = (target) => {
      if (!target || !target.closest) return;
      const nc = target.closest('[data-nc]');
      if (nc) {
        const mode = nc.getAttribute('data-nc');
        const label = nc.getAttribute('data-nc-label') || 'VIEW';
        const icon = nc.getAttribute('data-nc-icon') || '';
        setCursorMode(mode, label, icon);
        return;
      }
      if (target.closest('button, [data-noire-roll-root]')) {
        setCursorMode('button');
        return;
      }
      if (target.closest('a')) {
        setCursorMode('link');
        return;
      }
      if (target.closest('input, textarea')) {
        setCursorMode('off');
        return;
      }
      setCursorMode('');
    };

    // Initialize cursor DOM
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      cursorEl = doc.createElement('div');
      cursorEl.className = 'noire-cursor-el';
      cursorEl.setAttribute('aria-hidden', 'true');
      cursorEl.innerHTML = `
        <div class="nc-press">
          <div class="nc-dot"></div>
          <div class="nc-ring"></div>
          <div class="nc-view">
            <span class="nc-label"></span>
            <svg class="nc-icon nc-icon-arrow" viewBox="0 0 14 14" aria-hidden="true">
              <path d="M3.5 10.5 10.5 3.5M5 3.5h5.5V9" fill="none" stroke="currentColor" stroke-width="1.25"/>
            </svg>
            <svg class="nc-icon nc-icon-plus" viewBox="0 0 14 14" aria-hidden="true">
              <path d="M7 2.5v9M2.5 7h9" fill="none" stroke="currentColor" stroke-width="1.25"/>
            </svg>
          </div>
        </div>
      `;
      labelEl = cursorEl.querySelector('.nc-label');
      doc.body.appendChild(cursorEl);

      window.addEventListener('mousemove', onPointerMove, { passive: true });
      doc.addEventListener('mouseover', (e) => detectCursorTarget(e.target), { passive: true });
      doc.addEventListener('mousedown', () => cursorEl && cursorEl.classList.add('is-down'));
      doc.addEventListener('mouseup', () => cursorEl && cursorEl.classList.remove('is-down'));
      doc.addEventListener('mouseleave', () => cursorEl && cursorEl.classList.remove('is-on'));
    }

    // 2. Navbar scroll hide / reveal
    let lastY = window.scrollY;
    let acc = 0;
    let hidden = false;
    const onScrollNav = () => {
      const y = window.scrollY;
      const dy = y - lastY;
      lastY = y;
      if (y < window.innerHeight * 0.4) {
        acc = 0;
        if (hidden) {
          hidden = false;
          root.removeAttribute('data-noire-nav-hidden');
        }
        return;
      }
      if (dy > 0) {
        acc = Math.max(0, acc) + dy;
        if (acc > 30 && !hidden) {
          hidden = true;
          root.setAttribute('data-noire-nav-hidden', '');
        }
      } else if (dy < 0) {
        acc = Math.min(0, acc) + dy;
        if (acc < -10 && hidden) {
          hidden = false;
          root.removeAttribute('data-noire-nav-hidden');
        }
      }
    };
    window.addEventListener('scroll', onScrollNav, { passive: true });

    // 3. Scroll reveals: [data-reveal] gets .is-in once it enters the viewport.
    // Fully clipped elements never report as intersecting, so clip reveals and
    // text masked by an overflow-hidden parent are watched through that parent.
    const watched = new Map();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (watched.get(entry.target) || []).forEach((el) => el.classList.add('is-in'));
          watched.delete(entry.target);
          io.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.01 }
    );
    const observeReveals = () =>
      doc.querySelectorAll('[data-reveal]:not(.is-in)').forEach((el) => {
        const parent = el.parentElement;
        const masked = el.dataset.reveal === 'clip' || (parent && getComputedStyle(parent).overflow !== 'visible');
        const target = masked && parent ? parent : el;
        const list = watched.get(target) || [];
        if (list.includes(el)) return;
        list.push(el);
        watched.set(target, list);
        io.observe(target);
      });
    observeReveals();
    const revealTimer = setTimeout(observeReveals, 600);

    return () => {
      if (cursorEl && cursorEl.parentNode) cursorEl.parentNode.removeChild(cursorEl);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('scroll', onScrollNav);
      io.disconnect();
      clearTimeout(revealTimer);
    };
  }, []);

  return null;
}


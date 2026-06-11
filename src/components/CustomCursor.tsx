'use client';

import { useEffect } from 'react';

export default function CustomCursor() {
  useEffect(() => {
    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let animId: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    const tick = () => {
      ringX += (mouseX - ringX) * 0.13;
      ringY += (mouseY - ringY) * 0.13;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      animId = requestAnimationFrame(tick);
    };

    tick();
    window.addEventListener('mousemove', onMove, { passive: true });

    const expand = () => ring.classList.add('expanded');
    const shrink = () => ring.classList.remove('expanded');

    const attachHovers = () => {
      document.querySelectorAll('a, button').forEach((el) => {
        el.addEventListener('mouseenter', expand);
        el.addEventListener('mouseleave', shrink);
      });
    };

    attachHovers();
    const t = setTimeout(attachHovers, 600);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(animId);
      clearTimeout(t);
    };
  }, []);

  return (
    <>
      <div id="cursor-dot" />
      <div id="cursor-ring" />
    </>
  );
}

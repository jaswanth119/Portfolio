'use client';

import { useEffect, useRef } from 'react';

const TESTING = [
  'Playwright', 'Page Object Model', 'Test Fixtures', 'API Testing',
  'CI/CD', 'Restful API', 'Test Automation', 'Jest', 'E2E Testing',
  'Playwright', 'Page Object Model', 'Test Fixtures', 'API Testing',
  'CI/CD', 'Restful API', 'Test Automation', 'Jest', 'E2E Testing',
];

const PROGRAMMING = [
  'TypeScript', 'JavaScript', 'HTML', 'CSS', 'PostgreSQL', 'Node.js', 'Git',
  'TypeScript', 'JavaScript', 'HTML', 'CSS', 'PostgreSQL', 'Node.js', 'Git',
];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll<HTMLElement>('.reveal').forEach((el, i) => {
          el.style.transitionDelay = `${i * 80}ms`;
          el.classList.add('visible');
        });
        observer.disconnect();
      },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 lg:py-32 overflow-hidden"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <div className="reveal section-label">
          <span>02</span>
          <div className="line" />
          <span>Skills</span>
        </div>
        <h2
          className="reveal font-bold text-white mb-3"
          style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
        >
          Skills &amp; Tools
        </h2>
        <p className="reveal text-zinc-500 text-sm">Technologies I use every day</p>
      </div>

      {/* Row 1 — forward */}
      <div className="mb-5 overflow-hidden">
        <div className="marquee-track">
          {TESTING.map((skill, i) => (
            <span key={i} className="flex items-center gap-5 text-sm font-medium uppercase tracking-widest text-zinc-300 whitespace-nowrap">
              <span style={{ color: 'var(--accent)', fontSize: '0.5rem' }}>◆</span>
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Row 2 — reverse */}
      <div className="overflow-hidden">
        <div className="marquee-track-rev">
          {PROGRAMMING.map((skill, i) => (
            <span key={i} className="flex items-center gap-5 text-sm font-medium uppercase tracking-widest text-zinc-600 whitespace-nowrap">
              <span className="text-zinc-700" style={{ fontSize: '0.5rem' }}>◆</span>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

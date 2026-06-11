'use client';

import { useEffect, useRef } from 'react';

const EXPERIENCES = [
  {
    period: 'May 2026 — Present',
    role: 'Quality Test Engineer (E2E)',
    company: 'SAP Fioneer',
    points: [
      'Building and maintaining E2E test automation for the Commercial Workbench Platform (CWP) as part of Team Alpha',
      'Implementing scalable Page Object Model architecture with reusable fixtures and utility helpers in Playwright + TypeScript',
      'Writing E2E test flows covering deal lifecycle management features end-to-end',
      'Collaborating across QA, BA, frontend and backend engineers in a cross-functional agile team',
    ],
  },
  {
    period: 'May 2021 — May 2026',
    role: 'Senior Software Engineer',
    company: 'Surfboard Payments',
    points: [
      'Lead testing teams across SoftPOS Mobile Apps (iOS & Android) and Terminal Testing',
      'Developed automated test scripts using JavaScript, Jest, and Maestro',
      'Achieved 90% test efficiency in API automation and 50% automation coverage in mobile',
      'Conducted L3 testing for payment terminals, ensuring European payment compliance',
      'Integrated automation into CI/CD pipelines with real-time Slack notifications',
    ],
  },
];

export default function Experience() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll<HTMLElement>('.reveal').forEach((el, i) => {
          el.style.transitionDelay = `${i * 100}ms`;
          el.classList.add('visible');
        });
        observer.disconnect();
      },
      { threshold: 0.06 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={ref}
      className="py-24 lg:py-32"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="reveal section-label">
          <span>03</span>
          <div className="line" />
          <span>Experience</span>
        </div>

        <h2
          className="reveal font-bold text-white mb-16"
          style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
        >
          Work History
        </h2>

        <div>
          {EXPERIENCES.map((exp, i) => (
            <div
              key={i}
              className="reveal group grid lg:grid-cols-[260px_1fr] gap-6 lg:gap-12 py-10"
              style={{ borderBottom: '1px solid var(--border)' }}
            >
              {/* Left */}
              <div className="pt-1">
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-2"
                  style={{ color: 'var(--accent)' }}
                >
                  {exp.period}
                </p>
                <p className="text-sm text-zinc-500">{exp.company}</p>
              </div>

              {/* Right */}
              <div>
                <h3
                  className="font-bold text-white text-lg lg:text-xl mb-5 transition-colors duration-300 group-hover:text-accent"
                >
                  {exp.role}
                </h3>
                <ul className="space-y-2.5">
                  {exp.points.map((pt, j) => (
                    <li key={j} className="flex gap-3 text-zinc-400 text-sm leading-relaxed">
                      <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '0.25rem' }}>—</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { useEffect, useRef } from 'react';

const EDUCATION = [
  { degree: 'B.TECH (ECE)', institution: 'SRM University', location: 'Chennai', period: '2016 — 2020' },
  { degree: 'H.S.C', institution: 'Sri Chaitanya', location: 'Vijayawada', period: '2015 — 2016' },
  { degree: 'S.S.C', institution: 'Bhashyam', location: 'Guntur', period: '2013 — 2014' },
];

const LANGUAGES = ['Telugu', 'English', 'Hindi', 'Tamil'];

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll<HTMLElement>('.reveal').forEach((el, i) => {
          el.style.transitionDelay = `${i * 90}ms`;
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
      id="about"
      ref={ref}
      className="py-24 lg:py-32"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <div className="reveal section-label">
          <span>01</span>
          <div className="line" />
          <span>About</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <h2
              className="reveal font-bold text-white leading-tight mb-8"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
            >
              QA specialist &amp; E2E test automation engineer
            </h2>
            <p className="reveal text-zinc-400 text-base leading-relaxed mb-10">
              Quality Test Engineer with 5+ years of experience across fintech and
              enterprise software. Currently at SAP Fioneer in Hyderabad, building
              scalable E2E test automation for commercial banking platforms using
              Playwright and TypeScript. Previously led QA across payments, mobile,
              and terminal certification at Surfboard Payments.
            </p>

            <div className="reveal">
              <p className="text-xs font-medium text-zinc-500 uppercase tracking-[0.2em] mb-4">
                Languages
              </p>
              <div className="flex flex-wrap gap-2.5">
                {LANGUAGES.map((lang) => (
                  <span
                    key={lang}
                    className="text-sm text-zinc-300 px-4 py-2 rounded-sm"
                    style={{ border: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: education */}
          <div>
            <p className="reveal text-xs font-medium text-zinc-500 uppercase tracking-[0.2em] mb-8">
              Education
            </p>
            <div className="space-y-6">
              {EDUCATION.map((edu, i) => (
                <div
                  key={i}
                  className="reveal group pl-6 transition-colors duration-300"
                  style={{ borderLeft: '2px solid rgba(255,255,255,0.07)' }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.borderLeftColor = 'rgba(232,255,71,0.5)')
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.borderLeftColor = 'rgba(255,255,255,0.07)')
                  }
                >
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <h3 className="font-semibold text-white text-sm group-hover:text-accent transition-colors">
                      {edu.degree}
                    </h3>
                    <span className="text-xs text-zinc-400 whitespace-nowrap mt-0.5">{edu.period}</span>
                  </div>
                  <p className="text-sm text-zinc-400">{edu.institution}</p>
                  <p className="text-xs text-zinc-500 mt-0.5">{edu.location}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

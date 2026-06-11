'use client';

import { useEffect, useRef, useState } from 'react';

type Company = 'Surfboard Payments' | 'SAP Fioneer';

const SAP_PROJECTS = [
  {
    title: 'CWP E2E Automation Framework',
    period: 'May 2026 — Present',
    description:
      'Building end-to-end test coverage for a commercial workbench platform using Playwright and TypeScript, following scalable POM architecture with custom fixtures and retry utilities.',
    tech: ['TypeScript', 'Playwright', 'POM', 'E2E Testing', 'CI/CD'],
    role: 'QA Engineer',
    team: 1,
  },
];

const SURFBOARD_PROJECTS = [
  {
    title: 'API Automation Framework',
    period: 'Jun 2023 — Apr 2026',
    description:
      'Led development of an API automation framework streamlining testing of 100+ endpoints. Reduced manual effort by 70% with full CI/CD integration and comprehensive coverage reports.',
    tech: ['JavaScript', 'Jest', 'Insomnia', 'CI/CD'],
    role: 'Team Lead',
    team: 4,
  },
  {
    title: 'SoftPOS iOS App',
    period: 'Oct 2024 — Apr 2026',
    description:
      'Led QA for an iOS payment app that transforms iPhones into contactless payment terminals, supporting Apple Pay, Klarna, and Swish. Conducted L3 testing for certification compliance.',
    tech: ['iOS', 'NFC', 'Apple Pay', 'Klarna', 'Swish', 'Linear'],
    role: 'Team Lead',
    team: 2,
  },
  {
    title: 'SoftPOS Android',
    period: 'Feb 2023 — Apr 2026',
    description:
      'Led testing for an Android NFC payment app achieving 50% automation coverage with Maestro. Validated compliance with banking standards and integrated real-time test monitoring.',
    tech: ['Android', 'NFC', 'Maestro', 'CI/CD', 'Slack'],
    role: 'Team Lead',
    team: 3,
  },
  {
    title: 'Terminal Testing (BP-55 & BP-5500)',
    period: 'Mar 2022 — Apr 2026',
    description:
      'Led testing for two payment terminal models, ensuring European payment compliance across Visa, Mastercard, and local payment networks via L3 certification testing.',
    tech: ['Android OS', 'Manual Testing', 'Linear', 'Notion'],
    role: 'Team Lead',
    team: 3,
  },
  {
    title: 'Lendhope Platform',
    period: 'Jan 2021 — Jul 2023',
    description:
      'End-to-end testing for a charitable donation platform — 90% Cypress automation coverage on the Learning Portal, API/DB validation on the admin dashboard, and Maestro-based mobile automation.',
    tech: ['Cypress', 'JavaScript', 'Maestro', 'CI/CD', 'Slack'],
    role: 'QA Engineer',
    team: 1,
  },
];

const TABS: { label: Company; accent: boolean }[] = [
  { label: 'Surfboard Payments', accent: false },
  { label: 'SAP Fioneer', accent: true },
];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState<Company>('Surfboard Payments');
  const [fading, setFading] = useState(false);

  const projects = active === 'SAP Fioneer' ? SAP_PROJECTS : SURFBOARD_PROJECTS;

  const switchTab = (tab: Company) => {
    if (tab === active) return;
    setFading(true);
    setTimeout(() => {
      setActive(tab);
      setFading(false);
    }, 220);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll<HTMLElement>('.reveal').forEach((el, i) => {
          el.style.transitionDelay = `${i * 70}ms`;
          el.classList.add('visible');
        });
        observer.disconnect();
      },
      { threshold: 0.04 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 lg:py-32"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <div className="reveal section-label">
          <span>04</span>
          <div className="line" />
          <span>Projects</span>
        </div>

        {/* Heading + tabs row */}
        <div className="reveal flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <h2
            className="font-bold text-white"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
          >
            Selected Work
          </h2>

          {/* Tab toggle */}
          <div
            className="flex items-center gap-1 p-1 rounded-sm self-start sm:self-auto"
            style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}
          >
            {TABS.map(({ label }) => (
              <button
                key={label}
                onClick={() => switchTab(label)}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all duration-200 whitespace-nowrap"
                style={
                  active === label
                    ? { backgroundColor: 'var(--accent)', color: '#000' }
                    : { color: 'rgb(113 113 122)', backgroundColor: 'transparent' }
                }
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Project cards — fade on tab switch */}
        <div
          className="space-y-3 transition-opacity duration-200"
          style={{ opacity: fading ? 0 : 1 }}
        >
          {projects.map((p, index) => {
            const num = String(index + 1).padStart(2, '0');
            return (
              <div
                key={`${active}-${index}`}
                className="group rounded-sm p-6 lg:p-8 transition-all duration-300 hover:bg-[#141414]"
                style={{
                  backgroundColor: 'var(--surface)',
                  border: '1px solid var(--border)',
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(232,255,71,0.22)')
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor = 'var(--border)')
                }
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-8">
                  {/* Number */}
                  <span
                    className="font-bold shrink-0 w-10 text-white/[0.05] group-hover:text-accent/20 transition-colors duration-300"
                    style={{ fontSize: '2.25rem', lineHeight: 1 }}
                  >
                    {num}
                  </span>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h3 className="font-bold text-white text-base lg:text-lg group-hover:text-accent transition-colors duration-300">
                        {p.title}
                      </h3>
                      <span className="text-xs text-zinc-600 shrink-0">{p.period}</span>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-4">{p.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs text-zinc-500 px-2.5 py-1 rounded-sm"
                          style={{ border: '1px solid rgba(255,255,255,0.07)' }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Role */}
                  <div className="hidden lg:block shrink-0 text-right min-w-[90px]">
                    <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">{p.role}</p>
                    <p className="text-xs text-zinc-500">
                      {p.team} {p.team === 1 ? 'person' : 'people'}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

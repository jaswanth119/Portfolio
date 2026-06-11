'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const NAV = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 30);

      const sections = document.querySelectorAll<HTMLElement>('section[id]');

      // When within 80px of the page bottom, activate the last section
      const nearBottom =
        scrollY + window.innerHeight >= document.documentElement.scrollHeight - 80;
      if (nearBottom && sections.length) {
        setActive(sections[sections.length - 1].id);
        return;
      }

      sections.forEach((s) => {
        const top = s.offsetTop - 130;
        if (scrollY >= top && scrollY < top + s.offsetHeight) {
          setActive(s.id);
        }
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(10,10,10,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        <Link href="/" className="text-lg font-bold text-white tracking-tight">
          JM<span style={{ color: 'var(--accent)' }}>.</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors duration-200"
              style={{
                color: active === item.href.slice(1) ? 'var(--accent)' : 'rgb(161 161 170)',
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-zinc-400 hover:text-white transition-colors p-1"
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t px-6 py-4 space-y-1"
          style={{
            borderColor: 'rgba(255,255,255,0.06)',
            backgroundColor: 'rgba(10,10,10,0.97)',
          }}
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm font-medium transition-colors"
              style={{ color: active === item.href.slice(1) ? 'var(--accent)' : 'rgb(161 161 170)' }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

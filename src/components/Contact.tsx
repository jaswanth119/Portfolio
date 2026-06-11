'use client';

import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../lib/emailjs';

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    emailjs.init({ publicKey: emailConfig.publicKey });
  }, []);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError('');
    try {
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        { name: form.name, email: form.email, message: form.message, date: new Date().toLocaleDateString() },
        { publicKey: emailConfig.publicKey }
      );
      setSuccess(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    } catch {
      setError('Failed to send. Please try again.');
      setTimeout(() => setError(''), 5000);
    } finally {
      setSending(false);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const inputClass =
    'w-full text-sm text-white placeholder-zinc-600 px-4 py-3 rounded-sm focus:outline-none transition-colors duration-200';
  const inputStyle = {
    backgroundColor: 'var(--surface)',
    border: '1px solid rgba(255,255,255,0.08)',
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 lg:py-32"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="reveal section-label">
          <span>05</span>
          <div className="line" />
          <span>Contact</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <h2
              className="reveal font-bold text-white leading-tight mb-6"
              style={{ fontSize: 'clamp(36px, 5.5vw, 68px)' }}
            >
              LET&apos;S WORK
              <br />
              <span style={{ color: 'var(--accent)' }}>TOGETHER</span>
            </h2>
            <a
              href="mailto:jaswanthmallampati@gmail.com"
              className="reveal inline-block text-zinc-400 text-sm transition-colors duration-200 hover:text-accent pb-1 mb-8"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.15)' }}
            >
              jaswanthmallampati@gmail.com
            </a>
            <p className="reveal text-zinc-400 text-sm leading-relaxed max-w-xs">
              Whether you have a project in mind, a question about my work, or just want to say
              hello — my inbox is always open.
            </p>
          </div>

          {/* Right: form */}
          <div>
            {success && (
              <div
                className="mb-6 text-sm px-5 py-4 rounded-sm"
                style={{
                  color: 'var(--accent)',
                  backgroundColor: 'rgba(232,255,71,0.08)',
                  border: '1px solid rgba(232,255,71,0.25)',
                }}
              >
                Message sent! I&apos;ll get back to you soon.
              </div>
            )}
            {error && (
              <div
                className="mb-6 text-sm px-5 py-4 rounded-sm"
                style={{
                  color: '#f87171',
                  backgroundColor: 'rgba(248,113,113,0.08)',
                  border: '1px solid rgba(248,113,113,0.25)',
                }}
              >
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="reveal grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-zinc-500 uppercase tracking-wider mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    required
                    placeholder="Your name"
                    className={inputClass}
                    style={inputStyle}
                    onFocus={(e) => ((e.target as HTMLElement).style.borderColor = 'rgba(232,255,71,0.4)')}
                    onBlur={(e) => ((e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)')}
                  />
                </div>
                <div>
                  <label className="block text-xs text-zinc-500 uppercase tracking-wider mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    required
                    placeholder="your@email.com"
                    className={inputClass}
                    style={inputStyle}
                    onFocus={(e) => ((e.target as HTMLElement).style.borderColor = 'rgba(232,255,71,0.4)')}
                    onBlur={(e) => ((e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)')}
                  />
                </div>
              </div>
              <div className="reveal">
                <label className="block text-xs text-zinc-500 uppercase tracking-wider mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project..."
                  className={`${inputClass} resize-none`}
                  style={inputStyle}
                  onFocus={(e) => ((e.target as HTMLElement).style.borderColor = 'rgba(232,255,71,0.4)')}
                  onBlur={(e) => ((e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)')}
                />
              </div>
              <div className="reveal">
                <button
                  type="submit"
                  disabled={sending}
                  className="px-8 py-3 text-sm font-bold tracking-widest uppercase rounded-sm transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90"
                  style={{ backgroundColor: 'var(--accent)', color: '#000' }}
                >
                  {sending ? 'Sending...' : 'Send Message →'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Footer() {
  return (
    <footer
      className="py-8"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-zinc-400">
          © 2025 Jaswanth Mallampati. All rights reserved.
        </p>
        <p className="text-xs text-zinc-600">
          Built with Next.js &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

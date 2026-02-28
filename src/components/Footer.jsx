export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[var(--c-glass-border)] py-8 px-[clamp(24px,4vw,64px)]">
      <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <span className="text-[var(--c-accent)] text-lg drop-shadow-[0_0_8px_var(--c-accent-glow)]">◆</span>
          <span className="text-xs text-[var(--c-text-dim)] opacity-60">
            © 2026 Agency X. All rights reserved.
          </span>
        </div>
        <div className="flex gap-6">
          {['Terms', 'Privacy', 'Status'].map((label) => (
            <a
              key={label}
              href="#"
              className="text-xs text-[var(--c-text-dim)] opacity-60 hover:text-[var(--c-text)] hover:opacity-100
                transition-all duration-300 tracking-wide"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

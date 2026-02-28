import RevealWrap from './RevealWrap';

export default function Access() {
  return (
    <section id="access" className="relative z-10 py-[clamp(80px,12vh,140px)] pb-[clamp(100px,16vh,180px)] px-[clamp(24px,4vw,64px)]">
      <div className="max-w-[1100px] mx-auto">
        <RevealWrap>
          <div className="glass rounded-2xl relative overflow-hidden max-w-[640px] mx-auto p-[clamp(40px,6vw,64px)] text-center">
            {/* Ambient glow */}
            <div
              className="absolute top-[-50%] left-1/2 -translate-x-1/2 w-[300px] h-[300px] pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(14,165,233,0.06), transparent 70%)',
                animation: 'cta-glow 6s ease infinite alternate',
              }}
            />

            <span className="inline-block text-[11px] font-medium tracking-[3px] uppercase text-[var(--c-accent)] mb-4 opacity-70">
              04 — Access
            </span>
            <h2 className="font-sans font-bold text-[clamp(30px,4.5vw,52px)] tracking-tight leading-[1.1] text-[rgba(220,235,230,0.95)] mb-4">
              Work With Us
            </h2>
            <p className="text-[clamp(14px,1.5vw,16px)] font-light text-[var(--c-text-dim)] mb-8 leading-relaxed">
              Schedule a professional consultation to discuss how we can upgrade your business.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="relative z-[1]">
              <div className="flex gap-2.5 max-w-[440px] mx-auto mb-4 flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="glass flex-1 px-5 py-3.5 rounded-lg text-sm text-[var(--c-text)]
                    placeholder:text-[var(--c-text-dim)] outline-none
                    focus:border-[var(--c-accent-glow)] focus:shadow-[0_0_0_3px_rgba(14,165,233,0.06)]
                    transition-all duration-400"
                />
                <button
                  type="submit"
                  className="group relative inline-flex items-center justify-center px-7 py-3.5
                    text-[13px] font-medium tracking-[1.5px] uppercase rounded-lg overflow-hidden shrink-0
                    bg-gradient-to-br from-[rgba(14,165,233,0.15)] to-[rgba(14,165,233,0.08)]
                    border border-[rgba(14,165,233,0.3)] text-[var(--c-accent)]
                    hover:from-[rgba(14,165,233,0.25)] hover:to-[rgba(14,165,233,0.12)]
                    hover:border-[rgba(14,165,233,0.5)] hover:-translate-y-0.5
                    hover:shadow-[0_8px_32px_rgba(14,165,233,0.12)] transition-all duration-500"
                >
                  <span className="relative z-[1]">Book Consultation</span>
                  <span className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,var(--c-accent-glow),transparent_70%)]
                    opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                </button>
              </div>
              <span className="block text-xs text-[var(--c-text-dim)] opacity-60 tracking-wide">
                We'll reach out to schedule a time.
              </span>
            </form>
          </div>
        </RevealWrap>
      </div>
    </section>
  );
}

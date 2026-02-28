import RevealWrap from './RevealWrap';

const specs = [
  { label: 'Phase 1 (Now)', value: 'AI Automation & Custom Web' },
  { label: 'Phase 2', value: 'Industry-focused Optimization' },
  { label: 'Phase 3', value: 'Long-term Scalable AI Systems' },
];

export default function Specs() {
  return (
    <section id="roadmap" className="relative z-10 py-[clamp(80px,12vh,140px)] px-[clamp(24px,4vw,64px)]">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(40px,6vw,80px)] items-start">
          {/* Left */}
          <RevealWrap>
            <span className="inline-block text-[11px] font-medium tracking-[3px] uppercase text-[var(--c-accent)] mb-4 opacity-70">
              03 — Roadmap
            </span>
            <h2 className="font-sans font-bold text-[clamp(30px,4.5vw,52px)] tracking-tight leading-[1.1] text-[rgba(220,235,230,0.95)] mb-5">
              Service
              <br />
              Roadmap
            </h2>
            <p className="text-[clamp(14px,1.5vw,16px)] font-light text-[var(--c-text-dim)] max-w-[500px] leading-relaxed">
              Our phased approach to scaling your operations and driving long-term efficiency.
            </p>
          </RevealWrap>

          {/* Right — Spec Rows */}
          <div className="flex flex-col gap-2">
            {specs.map((spec, i) => (
              <RevealWrap key={spec.label} delay={i * 0.08}>
                <div
                  className="glass rounded-lg flex justify-between items-center px-6 py-[18px]
                    hover:translate-x-1.5 transition-transform duration-400"
                >
                  <span className="text-[13px] font-normal tracking-[1px] uppercase text-[var(--c-text-dim)]">
                    {spec.label}
                  </span>
                  <span className="font-sans text-sm font-medium text-[var(--c-text)] tracking-wide">
                    {spec.value}
                  </span>
                </div>
              </RevealWrap>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

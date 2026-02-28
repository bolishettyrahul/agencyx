import { useState } from 'react';

const services = [
  {
    title: 'AI Workflow Automation',
    desc: 'Streamlining operations with custom AI agents and automated pipelines.',
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Custom Platform Development',
    desc: 'Bespoke web applications and portals tailored to your business needs.',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Business-Specific Integrations',
    desc: 'Seamlessly connect your existing tools and workflows to reduce friction.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
  },
];

export default function Features() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="services" className="relative z-10 py-[clamp(60px,10vh,150px)] px-[clamp(16px,4vw,64px)] w-full overflow-hidden">

      {/* Background Giant Text */}
      <div className="absolute top-[20%] left-[-5%] text-[clamp(80px,25vw,350px)] font-bold font-sans text-[var(--c-text)] opacity-[0.02] pointer-events-none select-none tracking-tighter mix-blend-overlay">
        SERVICES
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

        {/* Left Column: Heading */}
        <div className="lg:col-span-4 flex flex-col justify-start pt-2 lg:pt-10">
          <span className="inline-block text-[11px] font-medium tracking-[3px] uppercase font-sans text-[var(--c-accent)] mb-4 lg:mb-6 opacity-70 border-l border-[var(--c-accent)] pl-4">
            // 02 Operations
          </span>
          <h2 className="font-sans font-bold text-[clamp(36px,5vw,72px)] tracking-tight leading-[1.05] text-[var(--c-text)]">
            Core <br /> Architecture
          </h2>
        </div>

        {/* Right Column: Interactive List + Image */}
        <div className="lg:col-span-8 flex flex-col gap-6 lg:gap-8">

          {/* Mobile image preview — shown above list on small screens, hidden on md+ */}
          <div className="block md:hidden border border-[rgba(255,255,255,0.1)] p-2 relative overflow-hidden tech-bracket h-[220px]">
            {services.map((item, i) => (
              <img
                key={i}
                src={item.img}
                alt={item.title}
                className={`absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover grayscale sepia-[0.3] contrast-125 brightness-90 saturate-50 transition-opacity duration-700 ease-in-out ${activeIdx === i ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              />
            ))}
          </div>

          {/* List + Desktop image side by side on md+ */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch">

            {/* List items */}
            <div className="border-t border-[rgba(255,255,255,0.08)] flex flex-col w-full md:w-1/2">
              {services.map((item, i) => (
                <div
                  key={i}
                  className="group relative flex flex-col justify-center py-5 sm:py-7 border-b border-[rgba(255,255,255,0.08)] cursor-pointer select-none"
                  onMouseEnter={() => setActiveIdx(i)}
                  onClick={() => setActiveIdx(i)}
                >
                  {/* Title */}
                  <h3 className={`font-sans text-[clamp(17px,3.5vw,26px)] font-bold transition-all duration-500 mb-1.5 pr-8 ${activeIdx === i ? 'text-[var(--c-accent)] translate-x-3' : 'text-[var(--c-text)]'}`}>
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className={`font-sans text-[13px] leading-relaxed text-[var(--c-text-dim)] max-w-[280px] transition-all duration-500 ${activeIdx === i ? 'opacity-100 translate-x-3' : 'opacity-50'}`}>
                    {item.desc}
                  </p>

                  {/* Arrow icon — faint by default on mobile, hidden until active on desktop */}
                  <div className={`absolute right-2 top-1/2 -translate-y-1/2 transition-all duration-500 ${activeIdx === i ? 'opacity-100' : 'opacity-20 md:opacity-0'}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--c-accent)" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="square" strokeLinejoin="miter" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Image Box — hidden on mobile (uses the top preview instead) */}
            <div className="hidden md:block md:w-1/2 border border-[rgba(255,255,255,0.1)] p-2 relative overflow-hidden tech-bracket min-h-[320px] lg:min-h-[400px]">
              {services.map((item, i) => (
                <img
                  key={i}
                  src={item.img}
                  alt={item.title}
                  className={`absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover grayscale sepia-[0.3] contrast-125 brightness-90 saturate-50 transition-opacity duration-700 ease-in-out ${activeIdx === i ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

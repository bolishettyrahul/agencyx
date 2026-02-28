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
  const [hoveredIdx, setHoveredIdx] = useState(0);

  return (
    <section id="services" className="relative z-10 py-[150px] px-[clamp(24px,4vw,64px)] w-full overflow-hidden">

      {/* Background Giant Text */}
      <div className="absolute top-[20%] left-[-5%] text-[clamp(100px,25vw,350px)] font-bold font-sans text-[var(--c-text)] opacity-[0.02] pointer-events-none select-none tracking-tighter mix-blend-overlay">
        SERVICES
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* Left Column: Heading */}
        <div className="lg:col-span-4 flex flex-col justify-start pt-10">
          <span className="inline-block text-[11px] font-medium tracking-[3px] uppercase font-sans text-[var(--c-accent)] mb-6 opacity-70 border-l border-[var(--c-accent)] pl-4">
            // 02 Operations
          </span>
          <h2 className="font-sans font-bold text-[clamp(40px,5vw,72px)] tracking-tight leading-[1.05] text-[var(--c-text)]">
            Core <br /> Architecture
          </h2>
        </div>

        {/* Right Column: Interactive List & Image Side by Side Grid */}
        <div className="lg:col-span-8 flex flex-col md:flex-row gap-8 mt-10 lg:mt-0 items-stretch">

          {/* List items */}
          <div className="border-t border-[rgba(255,255,255,0.08)] flex flex-col w-full md:w-1/2">
            {services.map((item, i) => (
              <div
                key={i}
                className="group relative flex flex-col justify-center py-8 border-b border-[rgba(255,255,255,0.08)] cursor-pointer"
                onMouseEnter={() => setHoveredIdx(i)}
              >
                {/* Title */}
                <h3 className={`font-sans text-[clamp(20px,2vw,28px)] font-bold transition-all duration-500 mb-2 ${hoveredIdx === i ? 'text-[var(--c-accent)] translate-x-4' : 'text-[var(--c-text)]'}`}>
                  {item.title}
                </h3>

                {/* Description snippet */}
                <p className={`font-sans text-[13px] text-[var(--c-text-dim)] max-w-[280px] transition-all duration-500 ${hoveredIdx === i ? 'opacity-100 translate-x-4' : 'opacity-50'}`}>
                  {item.desc}
                </p>

                {/* Arrow icon */}
                <div className={`absolute right-4 top-1/2 -translate-y-1/2 transition-all duration-500 ${hoveredIdx === i ? 'opacity-100' : 'opacity-0 -translate-x-4'}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--c-accent)" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="square" strokeLinejoin="miter" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Static Image Box that swaps on hover */}
          <div className="w-full md:w-1/2 flex-1 border border-[rgba(255,255,255,0.1)] p-2 relative overflow-hidden tech-bracket min-h-[400px]">
            {services.map((item, i) => (
              <img
                key={i}
                src={item.img}
                alt="Service visual"
                className={`absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover grayscale sepia-[0.3] contrast-125 brightness-90 saturate-50 transition-opacity duration-700 ease-in-out ${hoveredIdx === i ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

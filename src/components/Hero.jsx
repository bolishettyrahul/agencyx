import { useEffect, useRef } from 'react';

export default function Hero() {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    const ctx = window.gsap.context(() => {
      // Split the main text
      const split = new window.SplitType(headlineRef.current, { types: 'lines, words' });

      // Animate the words up
      window.gsap.set(split.words, { yPercent: 115 });
      window.gsap.to(split.words, {
        yPercent: 0,
        duration: 1.2,
        stagger: 0.05,
        ease: 'power4.out',
        delay: 0.2
      });

      // Fade up other elements
      window.gsap.fromTo(elementsRef.current,
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.6 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return (
    <section ref={heroRef} className="relative z-10 w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="relative z-[2] text-center max-w-[800px] px-6">
        {/* Badge - Removed as per request */}


        {/* Title */}
        <div className="overflow-hidden mb-6 mt-16">
          <h1
            ref={headlineRef}
            className="font-sans font-bold leading-[1.05] tracking-tighter
              text-[clamp(42px,7vw,88px)] text-white clip-text-reveal"
          >
            Automate Smarter.
          </h1>
        </div>

        {/* Subtitle */}
        <p
          ref={addToRefs}
          className="text-[clamp(15px,1.8vw,18px)] font-normal text-[#a0a0a0]
            tracking-wide max-w-[520px] mx-auto mb-10 leading-relaxed font-sans"
        >
          We design personalized AI workflows and build custom platforms that reduce operational workload and improve business efficiency.
        </p>

        {/* Buttons */}
        <div ref={addToRefs} className="flex gap-6 justify-center flex-wrap mt-4">
          <div className="tech-bracket">
            <a
              href="#access"
              className="group relative inline-flex items-center justify-center px-10 py-4
                text-[13px] font-bold tracking-[1.5px] uppercase rounded-sm overflow-hidden
                bg-[var(--c-text)] text-[var(--c-bg)] transition-all duration-500"
            >
              <span className="relative z-[1]">Initialize</span>
              <span className="absolute inset-0 bg-[#fff] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            </a>
          </div>

          <div className="tech-bracket opacity-70 hover:opacity-100 transition-opacity duration-300">
            <a
              href="#overview"
              className="inline-flex items-center justify-center px-10 py-4
                text-[13px] font-medium tracking-[1.5px] uppercase rounded-sm
                border border-[rgba(255,255,255,0.1)] text-[var(--c-text)]
                hover:border-[var(--c-accent-glow)] hover:bg-[rgba(255,255,255,0.02)] transition-all duration-500"
            >
              Explore Frame
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={addToRefs}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[2]
          flex flex-col items-center gap-3"
      >
        <div
          className="w-px h-10 bg-gradient-to-b from-[var(--c-accent)] to-transparent"
          style={{ animation: 'scroll-line 2s cubic-bezier(0.16,1,0.3,1) infinite' }}
        />
        <span className="text-[10px] tracking-[3px] uppercase font-sans text-[var(--c-text-dim)]">
          // SYS.SCROLL
        </span>
      </div>
    </section>
  );
}

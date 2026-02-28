import { useEffect, useRef } from 'react';

/**
 * VideoBackground — Fixed fullscreen video that persists across the entire page.
 * Scroll-driven effects are applied via direct DOM mutation (ref) to avoid
 * a React re-render on every scroll tick.
 * Optimization: rerender-use-ref-transient-values, client-passive-event-listeners
 */
export default function VideoBackground() {
  const videoRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = window.pageYOffset || document.documentElement.scrollTop;
          const progress = Math.min(y / window.innerHeight, 1);

          if (videoRef.current) {
            videoRef.current.style.transform = `scale(${1 + progress * 0.05})`;
            videoRef.current.style.filter = `brightness(${1 - progress * 0.25})`;
          }

          if (overlayRef.current) {
            const blur = progress * 18;
            const alpha = progress * 0.7;
            overlayRef.current.style.backdropFilter = `blur(${blur}px)`;
            overlayRef.current.style.webkitBackdropFilter = `blur(${blur}px)`;
            overlayRef.current.style.backgroundColor = `rgba(5,10,14,${alpha})`;
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed inset-0 z-0" aria-hidden="true">
      {/* Video layer */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Gradient vignette — always present */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(180deg,
              rgba(5,10,14,0.3) 0%,
              rgba(5,10,14,0.05) 35%,
              rgba(5,10,14,0.1) 60%,
              rgba(5,10,14,0.85) 100%
            ),
            radial-gradient(ellipse at center, transparent 40%, rgba(5,10,14,0.35) 100%)
          `,
        }}
      />

      {/* Scroll-driven blur + darkness overlay — mutated directly, no re-render */}
      <div
        ref={overlayRef}
        className="absolute inset-0 pointer-events-none"
      />
    </div>
  );
}

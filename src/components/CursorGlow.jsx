import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const isDesktop = window.matchMedia('(pointer: fine)').matches;
    if (!isDesktop) return;

    const el = glowRef.current;
    if (!el) return;
    el.style.display = 'block';

    const onMove = (e) => {
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed w-[400px] h-[400px] rounded-full pointer-events-none z-[9999]"
      style={{
        display: 'none',
        left: '-200px',
        top: '-200px',
        transform: 'translate(-50%, -50%)',
        background: 'radial-gradient(circle, rgba(14,165,233,0.03) 0%, transparent 70%)',
      }}
      aria-hidden="true"
    />
  );
}

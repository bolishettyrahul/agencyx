import { useEffect, useRef } from 'react';

export default function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = window.pageYOffset || document.documentElement.scrollTop;
          navRef.current?.classList.toggle('nav-scrolled', y > 60);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full px-4 pointer-events-none">
      <nav
        ref={navRef}
        className="pointer-events-auto flex items-center gap-1 sm:gap-6 px-2 py-2 rounded-full transition-all duration-500
          bg-[#1a1a1a]/90 backdrop-blur-md border border-white/5 shadow-2xl"
      >
        {/* Links */}
        <div className="hidden md:flex items-center gap-6 pl-4 font-sans max-w-[500px] justify-between flex-1">
          {['Home', 'Services', 'Pricing'].map((label, idx) => (
            <a
              key={label}
              href={`#${label.toLowerCase().replace(' ', '-')}`}
              className={`text-[13px] font-medium tracking-wide transition-colors duration-300
                ${idx === 0 ? 'text-white' : 'text-[#a0a0a0] hover:text-white'}
              `}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 pl-4">
          <a
            href="#access"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-medium text-white
              bg-white/5 hover:bg-white/10 transition-colors duration-300 border border-white/5 whitespace-nowrap"
          >
            Book Consultation
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
          </a>

          <button className="flex items-center justify-center w-9 h-9 rounded-full bg-white text-black hover:bg-gray-200 transition-colors duration-300 shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M12 8v4" />
              <path d="M12 16h.01" />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
}

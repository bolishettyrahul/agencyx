import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Overview', href: '#overview' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing',  href: '#pricing'  },
]

/** Single nav link with animated underline */
function NavLink({ label, href, mobile = false, onClick }) {
  const [hovered, setHovered] = useState(false)

  if (mobile) {
    return (
      <motion.a
        href={href}
        onClick={onClick}
        className="block text-[22px] font-light tracking-wide text-neutral-300 hover:text-white transition-colors py-2"
        initial={{ x: -16, opacity: 0 }}
        animate={{ x: 0,   opacity: 1 }}
        exit={{ x: -16,    opacity: 0 }}
      >
        {label}
      </motion.a>
    )
  }

  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: 'relative', display: 'inline-flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none' }}
    >
      <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, fontWeight: 500, letterSpacing: '0.2px', color: hovered ? '#ffffff' : '#a0a0a0', transition: 'color 0.25s', whiteSpace: 'nowrap' }}>
        {label}
      </span>
      <motion.span
        layoutId={`underline-${label}`}
        initial={false}
        animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          bottom: -3,
          left: 0,
          right: 0,
          height: 1,
          background: 'rgba(255,255,255,0.55)',
          borderRadius: 1,
          transformOrigin: 'left',
        }}
      />
    </a>
  )
}

export default function Navbar() {
  const navRef   = useRef(null)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled((window.pageYOffset || document.documentElement.scrollTop) > 60)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Close mobile menu on resize to desktop */
  useEffect(() => {
    const mq = window.matchMedia('(min-width:768px)')
    const handler = (e) => { if (e.matches) setOpen(false) }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return (
    <>
      {/* ── Pill Navbar ── */}
      <motion.div
        style={{ position: 'fixed', top: 24, left: 0, right: 0, zIndex: 50, display: 'flex', justifyContent: 'center', padding: '0 16px', pointerEvents: 'none' }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.nav
          ref={navRef}
          animate={{
            background:  scrolled ? 'rgba(5,5,5,0.92)'  : 'rgba(12,12,12,0.72)',
            borderColor: scrolled ? 'rgba(255,255,255,0.10)' : 'rgba(255,255,255,0.07)',
            boxShadow:   scrolled ? '0 8px 40px rgba(0,0,0,0.55)' : '0 4px 20px rgba(0,0,0,0.3)',
          }}
          transition={{ duration: 0.4 }}
          style={{
            pointerEvents: 'auto',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            padding: '7px 10px',
            borderRadius: 9999,
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid',
          }}
        >
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', paddingLeft: 4, paddingRight: 14 }}>
            {/* Animated diamond logo mark */}
            <motion.span
              animate={{ rotate: [0, 90, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              style={{ display: 'inline-block', color: '#e5e5e5', fontSize: 14, lineHeight: 1 }}
            >
              ◆
            </motion.span>
            <span style={{ fontFamily: 'Inter,sans-serif', fontWeight: 700, fontSize: 13, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#ffffff' }}>
              ProjectX
            </span>
          </a>

          {/* Divider */}
          <div style={{ width: 1, height: 18, background: 'rgba(255,255,255,0.08)', flexShrink: 0 }} />

          {/* Desktop Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 28, padding: '0 14px' }} className="hidden md:flex">
            {NAV_LINKS.map(({ label, href }) => (
              <NavLink key={label} label={label} href={href} />
            ))}
          </div>

          {/* Divider (desktop only) */}
          <div style={{ width: 1, height: 18, background: 'rgba(255,255,255,0.08)', flexShrink: 0 }} className="hidden md:block" />

          {/* CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingLeft: 8 }}>
            <motion.a
              href="#access"
              whileHover={{ scale: 1.04, background: 'rgba(255,255,255,0.14)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.18 }}
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '7px 16px',
                borderRadius: 9999,
                fontFamily: 'Inter,sans-serif',
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.5px',
                color: '#ffffff',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.09)',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              Join Now
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </motion.a>

            {/* Hamburger (mobile) */}
            <motion.button
              onClick={() => setOpen(o => !o)}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
              className="flex md:hidden"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: 34, height: 34,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.08)',
                cursor: 'pointer',
                flexShrink: 0,
              }}
            >
              <motion.svg
                width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white"
                strokeWidth="2" strokeLinecap="round" animate={open ? 'open' : 'closed'}
              >
                <motion.line
                  x1="3" y1="6"  x2="21" y2="6"
                  variants={{ closed: { d: 'M3 6 L21 6' }, open: { d: 'M4 4 L20 20' } }}
                />
                <motion.line
                  x1="3" y1="12" x2="21" y2="12"
                  variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
                  transition={{ duration: 0.15 }}
                />
                <motion.line
                  x1="3" y1="18" x2="21" y2="18"
                  variants={{ closed: { d: 'M3 18 L21 18' }, open: { d: 'M4 20 L20 4' } }}
                />
              </motion.svg>
            </motion.button>
          </div>
        </motion.nav>
      </motion.div>

      {/* ── Mobile Fullscreen Menu ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{  opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 40,
              background: 'rgba(5,5,5,0.96)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
            }}
          >
            {NAV_LINKS.map(({ label, href }, i) => (
              <motion.div
                key={label}
                initial={{ y: 18, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.04 * i, duration: 0.35, ease: 'easeOut' }}
              >
                <NavLink label={label} href={href} mobile onClick={() => setOpen(false)} />
              </motion.div>
            ))}
            <motion.div
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.04 * NAV_LINKS.length + 0.04, duration: 0.35, ease: 'easeOut' }}
              className="mt-6"
            >
              <a
                href="#access"
                onClick={() => setOpen(false)}
                style={{
                  display: 'inline-block',
                  padding: '12px 36px',
                  borderRadius: 9999,
                  background: '#ffffff',
                  color: '#000',
                  fontFamily: 'Inter,sans-serif',
                  fontWeight: 700,
                  fontSize: 13,
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                }}
              >
                Join Now
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

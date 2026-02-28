import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import SplitType from 'split-type'
import { Spotlight } from '@/components/ui/spotlight'

/* ─────────────────────────────────────────────
   Workflow node definitions
───────────────────────────────────────────── */
const NODES = [
  { id: 'trigger',  label: 'Trigger',    sublabel: 'Business event',    icon: '⚡' },
  { id: 'ai',       label: 'AI Agent',   sublabel: 'Processes & decides', icon: '🧠' },
  { id: 'automate', label: 'Automate',   sublabel: 'Executes workflow',  icon: '⚙️' },
  { id: 'output',   label: 'Output',     sublabel: 'Result delivered',   icon: '✅' },
]

const METRICS = [
  { value: '60%', label: 'Less manual work',  color: 'rgba(99,102,241,0.9)',  delay: 0.9 },
  { value: '3×',  label: 'Faster workflows',   color: 'rgba(16,185,129,0.9)', delay: 1.15 },
  { value: '40%', label: 'Cost reduction',     color: 'rgba(245,158,11,0.9)', delay: 1.4 },
]

const TOOLS = ['Slack', 'Notion', 'Zapier', 'OpenAI', 'HubSpot']

/* Animated dashed connector line */
function FlowLine({ delay }) {
  return (
    <motion.div
      className="flex-1 mx-1 border-t border-dashed border-violet-500/30"
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ scaleX: 1, opacity: 1 }}
      style={{ transformOrigin: 'left' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    />
  )
}

/* Single workflow node */
function WorkflowNode({ node, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.16, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center gap-1.5"
    >
      <div
        className="relative rounded-xl px-3 py-2.5 text-center"
        style={{
          background: 'rgba(18,18,26,0.95)',
          border: '1px solid rgba(139,92,246,0.22)',
          boxShadow: node.id === 'ai' ? '0 0 24px rgba(139,92,246,0.18)' : 'none',
          minWidth: 80,
        }}
      >
        {/* pulse ring on AI node */}
        {node.id === 'ai' && (
          <motion.div
            className="absolute inset-0 rounded-xl border border-violet-500/30"
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2.4, repeat: Infinity }}
          />
        )}
        <div className="text-lg mb-0.5">{node.icon}</div>
        <div className="text-[11px] font-semibold text-white tracking-wide">{node.label}</div>
        <div className="text-[9px] text-neutral-500 mt-0.5 leading-tight">{node.sublabel}</div>
      </div>
    </motion.div>
  )
}

/* Animated right panel */
function WorkflowVisual() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 md:p-10 relative select-none">
      {/* background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: 'linear-gradient(rgba(139,92,246,0.9) 1px,transparent 1px),linear-gradient(90deg,rgba(139,92,246,0.9) 1px,transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <motion.p
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-[10px] tracking-[3px] uppercase text-violet-400/60 mb-8 font-medium"
      >
        Live Workflow Preview
      </motion.p>

      {/* Nodes row with connectors */}
      <div className="flex items-center w-full max-w-[520px] mb-8">
        {NODES.map((node, i) => (
          <>
            <WorkflowNode key={node.id} node={node} index={i} />
            {i < NODES.length - 1 && <FlowLine key={`line-${i}`} delay={0.55 + i * 0.18} />}
          </>
        ))}
      </div>

      {/* Animated data packet */}
      <div className="relative w-full max-w-[520px] h-0 overflow-visible">
        <motion.div
          className="absolute top-[-20px] w-2 h-2 rounded-full bg-violet-400"
          style={{ boxShadow: '0 0 8px rgba(139,92,246,0.9)' }}
          initial={{ left: '0%' }}
          animate={{ left: ['0%', '100%'] }}
          transition={{ duration: 2.6, delay: 1.8, repeat: Infinity, repeatDelay: 1.4, ease: 'linear' }}
        />
      </div>

      {/* Metric cards */}
      <div className="flex flex-wrap gap-3 justify-center mt-6">
        {METRICS.map((m) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: m.delay, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: 'rgba(12,12,18,0.9)',
              border: `1px solid ${m.color.replace('0.9', '0.25')}`,
              boxShadow: `0 0 20px ${m.color.replace('0.9', '0.07')}`,
            }}
            className="rounded-xl px-5 py-3 text-center min-w-[110px]"
          >
            <div className="text-2xl font-bold text-white leading-none">{m.value}</div>
            <div className="text-[9px] text-neutral-400 mt-1 tracking-wide uppercase">{m.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Integration badges */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 0.6 }}
        className="flex gap-2 mt-6 flex-wrap justify-center"
      >
        {TOOLS.map((tool) => (
          <span
            key={tool}
            className="text-[10px] text-neutral-500 border border-white/[0.06] rounded-full px-3 py-1"
          >
            {tool}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   Main Hero
───────────────────────────────────────────── */
export default function Hero() {
  const heroRef     = useRef(null)
  const headlineRef = useRef(null)
  const subRef      = useRef(null)
  const btnsRef     = useRef(null)
  const badgeRef    = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const split = new SplitType(headlineRef.current, { types: 'lines,words' })
      gsap.set(split.words, { yPercent: 110, opacity: 0 })
      gsap.to(split.words, {
        yPercent: 0, opacity: 1, duration: 1.1, stagger: 0.04, ease: 'power4.out', delay: 0.2,
      })
      gsap.fromTo(
        [badgeRef.current, subRef.current, btnsRef.current],
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.85, stagger: 0.12, ease: 'power3.out', delay: 0.6 }
      )
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative z-10 w-full min-h-screen flex flex-col"
    >
      {/* ── Full-screen ambient background ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 pointer-events-none overflow-hidden"
      >
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 110% 80% at 50% -10%, rgba(30,20,60,0.95) 0%, #050505 60%)' }} />
        <div className="absolute w-[700px] h-[700px] rounded-full -top-32 -left-40 blur-[120px]" style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.22) 0%, transparent 70%)' }} />
        <div className="absolute w-[600px] h-[600px] rounded-full top-1/4 right-0 blur-[100px]" style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)' }} />
        <div className="absolute w-[500px] h-[400px] rounded-full bottom-0 left-1/3 blur-[110px]" style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)' }} />
      </div>

      {/* Spotlight sweep */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

      {/* Subtle grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.7) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.7) 1px,transparent 1px)',
          backgroundSize: '52px 52px',
        }}
      />

      {/* ── Content: grows to fill viewport, split 50/50 ── */}
      <div className="flex flex-col md:flex-row flex-1 min-h-screen">
          {/* ── Left: Copy ── */}
          <div className="flex-1 flex flex-col justify-center px-8 md:px-20 py-28 md:py-0 relative z-10">
            {/* Badge */}
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2 mb-6 self-start px-3 py-1 rounded-full border border-white/10 bg-white/[0.04]"
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                style={{ animation: 'pulse-dot 2s ease-in-out infinite' }}
              />
              <span className="text-[11px] tracking-[2.5px] uppercase font-medium text-neutral-400">
                AI Automation Agency
              </span>
            </div>

            {/* Headline */}
            <div className="overflow-hidden mb-5">
              <h1
                ref={headlineRef}
                className="font-bold leading-[1.06] tracking-tight text-[clamp(34px,5vw,68px)]"
                style={{
                  background: 'linear-gradient(140deg,#f5f5f5 0%,#a3a3a3 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Automate Smarter.
                <br />
                Reduce Costs.
                <br />
                Scale Efficiently.
              </h1>
            </div>

            {/* Subtitle */}
            <p
              ref={subRef}
              className="text-[clamp(13px,1.3vw,15px)] text-neutral-400 leading-relaxed max-w-[380px] mb-10"
            >
              We design personalized AI workflows and build AI-powered platforms that save time, reduce operational costs, and grow your business.
            </p>

            {/* CTA Buttons */}
            <div ref={btnsRef} className="flex gap-4 flex-wrap">
              <div className="tech-bracket">
                <a
                  href="#access"
                  className="inline-flex items-center justify-center px-8 py-3.5
                    text-[11px] font-bold tracking-[1.8px] uppercase rounded-sm
                    bg-white text-black transition-all duration-300 hover:bg-neutral-200"
                >
                  Book a Consultation
                </a>
              </div>
              <div className="tech-bracket">
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 justify-center px-8 py-3.5
                    text-[11px] font-medium tracking-[1.8px] uppercase rounded-sm
                    border border-white/10 text-neutral-300
                    hover:border-white/30 hover:bg-white/[0.04] transition-all duration-300"
                >
                  See How It Works
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-7 mt-10 pt-8 border-t border-white/[0.06]">
              {[
                { value: '50+',  label: 'Projects' },
                { value: '10×',  label: 'Avg ROI'  },
                { value: '24/7', label: 'Support'  },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="text-[clamp(18px,2vw,24px)] font-bold text-white leading-none mb-1">
                    {value}
                  </div>
                  <div className="text-[9px] tracking-[2.5px] uppercase text-neutral-500">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Animated workflow visual ── */}
          <div className="flex-1 relative border-t md:border-t-0 md:border-l border-white/[0.05]">
            <WorkflowVisual />
          </div>
        </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2">
        <div
          className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent"
          style={{ animation: 'scroll-line 2s cubic-bezier(0.16,1,0.3,1) infinite' }}
        />
        <span className="text-[9px] tracking-[3px] uppercase text-neutral-600">scroll</span>
      </div>
    </section>
  )
}

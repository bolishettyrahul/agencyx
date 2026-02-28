import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import RevealWrap from './RevealWrap';

const stats = [
  { value: '50', unit: '+', label: 'Projects Delivered', fill: '85%' },
  { value: '99', unit: '%', label: 'Client Satisfaction', fill: '99%' },
  { value: '10', unit: 'x', label: 'Average ROI', fill: '90%' },
  { value: '24', unit: '/7', label: 'Expert Support', fill: '100%' },
];

export default function Overview() {
  return (
    <section id="overview" className="relative z-10 py-[clamp(80px,12vh,140px)] px-[clamp(24px,4vw,64px)]">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <RevealWrap className="mb-[clamp(48px,8vh,80px)]">
          <span className="inline-block text-[11px] font-medium tracking-[3px] uppercase text-[var(--c-accent)] mb-4 opacity-70">
            01 — Overview
          </span>
          <h2 className="font-sans font-bold text-[clamp(30px,4.5vw,52px)] tracking-tight leading-[1.1] text-[rgba(220,235,230,0.95)] mb-4">
            Proven Impact
          </h2>
          <p className="text-[clamp(14px,1.5vw,16px)] font-light text-[var(--c-text-dim)] max-w-[500px] leading-relaxed">
            Delivering measurable outcomes mapping directly to business efficiency and growth.
          </p>
        </RevealWrap>

        {/* Stats Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, delay }) {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      className="glass rounded-xl p-7 flex flex-col gap-2
        hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3),0_0_0_1px_rgba(14,165,233,0.08)]
        transition-all duration-500"
    >
      <span className="font-sans font-bold text-4xl text-[rgba(220,235,230,0.95)] leading-none">
        {stat.value}
        <span className="text-lg font-normal text-[var(--c-accent)] ml-0.5">{stat.unit}</span>
      </span>
      <span className="text-xs font-normal tracking-[1.5px] uppercase text-[var(--c-text-dim)]">
        {stat.label}
      </span>
      <div className="mt-2 h-0.5 bg-[rgba(255,255,255,0.05)] rounded-sm overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[var(--c-accent)] to-[rgba(14,165,233,0.3)] rounded-sm transition-[width] duration-[1.5s] ease-out"
          style={{ width: isInView ? stat.fill : '0%' }}
        />
      </div>
    </motion.div>
  );
}

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import NumberFlow from '@number-flow/react'
import confetti from 'canvas-confetti'
import { cn } from '@/lib/utils'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { buttonVariants } from '@/components/ui/button'
import { useMediaQuery } from '@/hooks/use-media-query'

export function Pricing({
  plans,
  title = 'Simple, Transparent Pricing',
  description = 'Choose the plan that works for you\nAll plans include access to our platform, learning tools, and dedicated support.',
}) {
  const [isMonthly, setIsMonthly] = useState(true)
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const switchRef = useRef(null)

  const handleToggle = (checked) => {
    setIsMonthly(!checked)
    if (checked && switchRef.current) {
      const rect = switchRef.current.getBoundingClientRect()
      confetti({
        particleCount: 60,
        spread: 70,
        origin: {
          x: (rect.left + rect.width / 2) / window.innerWidth,
          y: (rect.top + rect.height / 2) / window.innerHeight,
        },
        colors: ['#8b5cf6', '#6366f1', '#a78bfa', '#c4b5fd', '#ffffff'],
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
        shapes: ['circle'],
      })
    }
  }

  return (
    <div className="w-full py-20 px-4">
      {/* Header */}
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">{title}</h2>
        <p className="text-neutral-400 text-base md:text-lg whitespace-pre-line max-w-xl mx-auto">
          {description}
        </p>
      </div>

      {/* Billing toggle */}
      <div className="flex justify-center items-center gap-3 mb-14">
        <span className={cn('text-sm font-medium', isMonthly ? 'text-white' : 'text-neutral-500')}>Monthly</span>
        <Label>
          <Switch
            ref={switchRef}
            checked={!isMonthly}
            onCheckedChange={handleToggle}
          />
        </Label>
        <span className={cn('text-sm font-medium', !isMonthly ? 'text-white' : 'text-neutral-500')}>
          Annual{' '}
          <span className="text-violet-400 font-semibold">(Save 20%)</span>
        </span>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto items-center">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ y: 50, opacity: 0 }}
            whileInView={
              isDesktop
                ? {
                    y: plan.isPopular ? -20 : 0,
                    opacity: 1,
                    x: index === 2 ? -20 : index === 0 ? 20 : 0,
                    scale: index === 0 || index === 2 ? 0.95 : 1.0,
                  }
                : { opacity: 1, y: 0 }
            }
            viewport={{ once: true }}
            transition={{ duration: 1.4, type: 'spring', stiffness: 90, damping: 28, delay: 0.1 * index }}
            className={cn(
              'rounded-2xl border p-7 flex flex-col relative',
              plan.isPopular
                ? 'border-violet-500/60 bg-white/[0.04] shadow-[0_0_40px_rgba(139,92,246,0.15)]'
                : 'border-white/[0.07] bg-white/[0.02]',
              !plan.isPopular && 'mt-5 md:mt-0'
            )}
          >
            {/* Popular badge */}
            {plan.isPopular && (
              <div className="absolute -top-px right-6 bg-violet-600 py-0.5 px-3 rounded-b-xl flex items-center gap-1">
                <Star className="h-3 w-3 fill-white text-white" />
                <span className="text-white text-[11px] font-semibold tracking-wide">Popular</span>
              </div>
            )}

            {/* Plan name */}
            <p className="text-[11px] font-bold tracking-[2px] uppercase text-neutral-500 mb-5">
              {plan.name}
            </p>

            {/* Price */}
            <div className="flex items-end gap-1 mb-1">
              <span className="text-5xl font-bold text-white">
                <NumberFlow
                  value={isMonthly ? Number(plan.price) : Number(plan.yearlyPrice)}
                  format={{ style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }}
                  transformTiming={{ duration: 450, easing: 'ease-out' }}
                  willChange
                />
              </span>
              {plan.period !== 'Next 3 months' && (
                <span className="text-sm text-neutral-500 mb-2">/ {plan.period}</span>
              )}
            </div>
            <p className="text-xs text-neutral-600 mb-6">
              {isMonthly ? 'billed monthly' : 'billed annually'}
            </p>

            {/* Features */}
            <ul className="flex flex-col gap-2.5 mb-8 flex-1">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-violet-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-neutral-300">{feature}</span>
                </li>
              ))}
            </ul>

            <hr className="border-white/[0.06] mb-6" />

            {/* CTA */}
            <a
              href={plan.href}
              className={cn(
                buttonVariants({ variant: plan.isPopular ? 'default' : 'outline' }),
                'w-full text-center font-semibold tracking-wide transition-all duration-300',
                plan.isPopular
                  ? 'bg-violet-600 text-white hover:bg-violet-500 border-0'
                  : 'border-white/10 text-neutral-300 hover:bg-violet-600/20 hover:border-violet-500/50 hover:text-white'
              )}
            >
              {plan.buttonText}
            </a>

            <p className="mt-4 text-xs text-center text-neutral-600">{plan.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

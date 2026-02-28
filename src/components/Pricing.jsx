import { Pricing as PricingUI } from '@/components/ui/pricing'

const PLANS = [
  {
    name: 'Starter',
    price: '0',
    yearlyPrice: '0',
    period: 'per month',
    features: [
      '1 automated workflow',
      'Basic AI agent setup',
      'Email support',
      'Standard integrations',
      'Monthly performance report',
    ],
    description: 'Perfect for small businesses exploring automation',
    buttonText: 'Get Started',
    href: '#access',
    isPopular: false,
  },
  {
    name: 'Pro',
    price: '12',
    yearlyPrice: '10',
    period: 'per month',
    features: [
      'Up to 10 automated workflows',
      'Custom AI agent development',
      'Priority support',
      'All platform integrations',
      'Real-time analytics dashboard',
      'Dedicated onboarding call',
      'Workflow optimization reviews',
    ],
    description: 'Best for growing businesses scaling operations',
    buttonText: 'Get Pro',
    href: '#access',
    isPopular: true,
  },
  {
    name: 'Enterprise',
    price: '49',
    yearlyPrice: '39',
    period: 'per month',
    features: [
      'Unlimited workflows & agents',
      'Custom platform development',
      'Dedicated account manager',
      'SLA & uptime guarantee',
      'SSO & admin controls',
      '1-hour priority support',
      'Usage analytics & reports',
      'White-label options',
    ],
    description: 'For enterprises needing full-scale AI automation',
    buttonText: 'Contact Us',
    href: '#access',
    isPopular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative z-10 w-full overflow-hidden">
      {/* Section label */}
      <div className="text-center pt-20 pb-2">
        <span className="inline-block text-[11px] font-medium tracking-[3px] uppercase text-neutral-500 mb-2">
          // 03 Pricing
        </span>
      </div>

      <PricingUI
        plans={PLANS}
        title="Simple, Transparent Pricing"
        description={`Choose the plan that works for you\nAll plans include access to our platform, learning tools, and community support.`}
      />
    </section>
  )
}

import { Pricing as PricingUI } from '@/components/ui/pricing'

const PLANS = [
  {
    name: 'Starter',
    price: '0',
    yearlyPrice: '0',
    period: 'per month',
    features: [
      'Up to 10 learning paths',
      'Community forum access',
      'Basic progress tracking',
      'Standard resources library',
      'Email support',
    ],
    description: 'Perfect for individual students getting started',
    buttonText: 'Start Free',
    href: '#access',
    isPopular: false,
  },
  {
    name: 'Pro',
    price: '12',
    yearlyPrice: '10',
    period: 'per month',
    features: [
      'Unlimited learning paths',
      'Advanced analytics dashboard',
      'Priority community support',
      'Full resource library access',
      'Peer collaboration tools',
      'Certificate generation',
      'Offline downloads',
    ],
    description: 'Best for dedicated learners and contributors',
    buttonText: 'Get Pro',
    href: '#access',
    isPopular: true,
  },
  {
    name: 'Institution',
    price: '49',
    yearlyPrice: '39',
    period: 'per month',
    features: [
      'Everything in Pro',
      'Unlimited team seats',
      'Custom curriculum builder',
      'Dedicated account manager',
      'SSO & admin dashboard',
      'Priority 1-hour support',
      'Usage analytics & reports',
      'Custom branding',
    ],
    description: 'For schools, bootcamps & organizations',
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

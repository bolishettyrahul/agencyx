export default function Pricing() {
    const tiers = [
        {
            name: 'Basic',
            price: '$1K',
            term: '/mo',
            desc: 'Essential automation & workflows.',
            features: ['2 Core Workflows', 'Standard Integration', 'Email Support', 'Basic Analytics'],
        },
        {
            name: 'Pro',
            price: '$3K',
            term: '/mo',
            desc: 'Advanced systems for growing teams.',
            features: ['Unlimited Workflows', 'Custom AI Agents', 'Priority Support', 'Advanced Telemetry'],
        },
        {
            name: 'Exclusive',
            price: 'Custom',
            term: '',
            desc: 'Full-scale enterprise infrastructure.',
            features: ['Dedicated Engineers', 'On-Premise Deployment', '24/7 SLA', 'Bespoke Architecture'],
        },
    ];

    return (
        <section id="pricing" className="relative z-10 py-[150px] px-[clamp(24px,4vw,64px)] w-full overflow-hidden">
            <div className="max-w-[1200px] mx-auto relative z-10">

                {/* Header */}
                <div className="text-center mb-24">
                    <span className="inline-block text-[11px] font-medium tracking-[3px] uppercase font-sans text-[var(--c-accent)] mb-4 opacity-70">
            // 03 Subscription
                    </span>
                    <h2 className="font-sans font-bold text-[clamp(32px,4vw,56px)] tracking-tight leading-[1.1] text-[var(--c-text)]">
                        Scalable Infrastructure
                    </h2>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 items-center">

                    {/* Basic Tier */}
                    <div className="glass p-10 flex flex-col h-full justify-between z-10 tech-bracket relative">
                        <div>
                            <h3 className="text-xl font-bold font-sans text-[var(--c-text)] mb-2">{tiers[0].name}</h3>
                            <p className="text-[13px] font-sans text-[var(--c-text-dim)] mb-8 h-[40px]">{tiers[0].desc}</p>
                            <div className="mb-8">
                                <span className="text-4xl font-bold text-[var(--c-text)]">{tiers[0].price}</span>
                                <span className="text-sm font-sans text-[var(--c-text-dim)]">{tiers[0].term}</span>
                            </div>
                            <ul className="flex flex-col gap-4 mb-10">
                                {tiers[0].features.map((f, i) => (
                                    <li key={i} className="text-[13px] font-sans text-[var(--c-text-dim)] flex items-center justify-between border-b border-[rgba(255,255,255,0.05)] pb-2">
                                        {f}
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--c-accent)" strokeWidth="2"><path d="M5 12l5 5L20 7" strokeLinecap="square" /></svg>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Pro Tier (Elevated & Intersecting) */}
                    <div className="bg-[var(--c-text)] p-12 flex flex-col h-[105%] justify-between z-20 md:-mx-4 shadow-[0_0_50px_rgba(0,0,0,0.5)] transform scale-105 relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-[var(--c-bg)] to-transparent opacity-50"></div>
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-xl font-bold font-sans text-[var(--c-bg)]">{tiers[1].name}</h3>
                                <span className="text-[10px] uppercase font-sans bg-[var(--c-bg)] text-[var(--c-text)] px-2 py-1 tracking-widest">Recommended</span>
                            </div>
                            <p className="text-[13px] font-sans text-[var(--c-bg)] opacity-70 mb-8 h-[40px]">{tiers[1].desc}</p>
                            <div className="mb-8">
                                <span className="text-5xl font-bold text-[var(--c-bg)]">{tiers[1].price}</span>
                                <span className="text-sm font-sans text-[var(--c-bg)] opacity-70">{tiers[1].term}</span>
                            </div>
                            <ul className="flex flex-col gap-4 mb-10">
                                {tiers[1].features.map((f, i) => (
                                    <li key={i} className="text-[13px] font-sans text-[var(--c-bg)] flex items-center justify-between border-b border-[rgba(0,0,0,0.1)] pb-2">
                                        {f}
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--c-bg)" strokeWidth="3"><path d="M5 12l5 5L20 7" strokeLinecap="square" /></svg>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <a href="#access" className="w-full text-center bg-[var(--c-bg)] text-[var(--c-text)] py-4 text-[12px] font-bold tracking-[2px] uppercase hover:bg-[var(--c-accent)] hover:text-[#000] transition-colors">
                            Initialize Pro
                        </a>
                    </div>

                    {/* Exclusive Tier */}
                    <div className="glass p-10 flex flex-col h-full justify-between z-10 tech-bracket relative group overflow-hidden">
                        {/* Procedural noise background for exclusive tier */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-1000 mix-blend-overlay pointer-events-none" style={{ background: 'url("data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E")' }}></div>

                        <div className="relative z-10">
                            <h3 className="text-xl font-bold font-sans text-[var(--c-text)] mb-2">{tiers[2].name}</h3>
                            <p className="text-[13px] font-sans text-[var(--c-text-dim)] mb-8 h-[40px]">{tiers[2].desc}</p>
                            <div className="mb-8">
                                <span className="text-4xl font-bold text-[var(--c-text)]">{tiers[2].price}</span>
                                <span className="text-sm font-sans text-[var(--c-text-dim)]">{tiers[2].term}</span>
                            </div>
                            <ul className="flex flex-col gap-4 mb-10">
                                {tiers[2].features.map((f, i) => (
                                    <li key={i} className="text-[13px] font-sans text-[var(--c-text-dim)] flex items-center justify-between border-b border-[rgba(255,255,255,0.05)] pb-2">
                                        {f}
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--c-accent)" strokeWidth="2"><path d="M5 12l5 5L20 7" strokeLinecap="square" /></svg>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

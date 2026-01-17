'use client';

import Link from 'next/link';

export default function BlogPage() {
    return (
        <>
            <main>
                <section className="border-b border-border-subtle overflow-hidden">
                    <div className="max-w-screen-2xl mx-auto px-8 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-7 space-y-10">
                            <div className="flex items-center gap-4">
                                <span className="data-label text-desaturated-teal">Featured Insights</span>
                                <span className="w-12 h-[1px] bg-border-subtle"></span>
                                <span className="data-label">Strategy</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-light leading-tight text-deep-charcoal">
                                Winning on <br />
                                <span className="font-semibold italic">Amazon in 2026</span>
                            </h1>
                            <p className="text-xl text-deep-charcoal/60 max-w-xl">
                                We're building the next generation of fulfillment strategies. Learn how decentralised networks and smarter routing are changing the game for UK sellers.
                            </p>
                            <div className="flex items-center gap-8 pt-6">
                                <div className="flex flex-col">
                                    <span className="data-label !text-[8px] opacity-40">READ TIME</span>
                                    <span className="font-mono text-xs font-bold">12 MIN</span>
                                </div>
                                <div className="w-[1px] h-8 bg-border-subtle"></div>
                                <div className="flex flex-col">
                                    <span className="data-label !text-[8px] opacity-40">CATEGORY</span>
                                    <span className="font-mono text-xs font-bold">LOGISTICS</span>
                                </div>
                                <Link href="#" className="bg-deep-charcoal text-white px-10 py-5 font-bold uppercase tracking-widest text-[11px] rounded-sm hover:bg-desaturated-teal transition-all flex items-center gap-4">
                                    Read Article
                                    <span className="material-symbols-outlined text-sm">arrow_outward</span>
                                </Link>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative group">
                            <div className="aspect-square bg-white p-4 border border-border-subtle shadow-2xl shadow-black/5 overflow-hidden">
                                <img
                                    alt="Modern Abstract Visual"
                                    className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 transition-transform duration-1000"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfigwmoRZmNFL23ceYUbc9gUxdKZn9BBCPoTJyzLaXcZykpVU-kb7Iz8e5IYp0yv6aUcStpKuvx_rKqFckfTLm0f0aimyPfbpShz1NcKJgAX621uekZG89h-pKbMQsV_0wQI7wc6x-u3fXBatcxSuRm4Z-n9_NU28iTpM-Hiq_1uNi2IZcQrmbX_6GOW7hAojSsnbGGUlgAa0Bl2_dtBlKGnCkufBRAQv4MQoS00fsXR-TFSpeWLHlF_9uC-xBB0xwD9pKcqzv2myM"
                                />
                            </div>
                            <div className="absolute -top-4 -right-4 w-32 h-32 border-t border-r border-desaturated-teal/30 pointer-events-none"></div>
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-b border-l border-desaturated-teal/30 pointer-events-none"></div>
                        </div>
                    </div>
                </section>

                <section className="py-24 px-8 max-w-screen-2xl mx-auto">
                    <div className="flex justify-between items-end mb-16">
                        <div>
                            <div className="data-label mb-4">Latest Updates</div>
                            <h2 className="text-4xl font-semibold">Newest Insights</h2>
                        </div>
                        <div className="flex gap-4">
                            <button className="px-6 py-2 text-[10px] font-mono border border-desaturated-teal text-desaturated-teal rounded-full hover:bg-desaturated-teal hover:text-white transition-all">VIEW_ALL</button>
                            <button className="px-6 py-2 text-[10px] font-mono border border-border-subtle text-deep-charcoal/40 rounded-full hover:border-deep-charcoal transition-all">FBA_TIPS</button>
                            <button className="px-6 py-2 text-[10px] font-mono border border-border-subtle text-deep-charcoal/40 rounded-full hover:border-deep-charcoal transition-all">SEARCH_SECRETS</button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[340px]">
                        <div className="bento-article md:col-span-2 group">
                            <div className="space-y-4">
                                <div className="flex justify-between items-start">
                                    <span className="data-label text-desaturated-teal">Amazon Search Secrets</span>
                                    <span className="data-label text-amber-600/60">Expert Pick</span>
                                </div>
                                <h3 className="text-3xl font-medium leading-tight group-hover:text-desaturated-teal transition-colors">Decoding the New Search Engine</h3>
                                <p className="text-deep-charcoal/50 text-sm line-clamp-3">The way customers find products is changing. We break down why relevance is now more important than just stuffing keywords into your titles.</p>
                            </div>
                            <div className="flex justify-between items-center border-t border-border-subtle pt-6">
                                <div className="flex gap-6">
                                    <div className="flex flex-col">
                                        <span className="data-label !text-[8px] opacity-40">READ TIME</span>
                                        <span className="font-mono text-[10px] font-bold">08 MIN</span>
                                    </div>
                                </div>
                                <span className="material-symbols-outlined text-border-subtle group-hover:text-desaturated-teal transition-colors">arrow_right_alt</span>
                            </div>
                        </div>

                        <div className="bento-article group">
                            <div className="space-y-4">
                                <div className="data-label">FBA Tips</div>
                                <h3 className="text-xl font-medium group-hover:text-desaturated-teal transition-colors">Mastering Your Inventory</h3>
                                <p className="text-deep-charcoal/50 text-xs line-clamp-2">How to keep your stock levels perfect and avoid those pesky Q4 storage fees.</p>
                            </div>
                            <div className="flex justify-between items-center border-t border-border-subtle pt-4">
                                <span className="font-mono text-[9px] font-bold">05 MIN</span>
                                <span className="material-symbols-outlined text-border-subtle text-lg">arrow_right_alt</span>
                            </div>
                        </div>

                        <div className="bento-article group">
                            <div className="space-y-4">
                                <div className="data-label">Advertising</div>
                                <h3 className="text-xl font-medium group-hover:text-desaturated-teal transition-colors">Ads That Actually Sell</h3>
                                <p className="text-deep-charcoal/50 text-xs line-clamp-2">Moving beyond basic search to build a brand that shoppers actually remember.</p>
                            </div>
                            <div className="flex justify-between items-center border-t border-border-subtle pt-4">
                                <span className="font-mono text-[9px] font-bold">09 MIN</span>
                                <span className="material-symbols-outlined text-border-subtle text-lg">arrow_right_alt</span>
                            </div>
                        </div>

                        <div className="bento-article group">
                            <div className="space-y-4">
                                <div className="data-label">Content Strategy</div>
                                <h3 className="text-xl font-medium group-hover:text-desaturated-teal transition-colors">The Power of Video</h3>
                                <p className="text-deep-charcoal/50 text-xs line-clamp-2">Why short-form video is becoming the most effective way to climb the rankings.</p>
                            </div>
                            <div className="flex justify-between items-center border-t border-border-subtle pt-4">
                                <span className="font-mono text-[9px] font-bold">04 MIN</span>
                                <span className="material-symbols-outlined text-border-subtle text-lg">arrow_right_alt</span>
                            </div>
                        </div>

                        <div className="bento-article md:col-span-2 group">
                            <div className="space-y-4">
                                <div className="flex justify-between items-start">
                                    <span className="data-label">Market Insights</span>
                                    <span className="font-mono text-[10px] bg-soft-bg px-2 py-0.5 border border-border-subtle">FREE GUIDE</span>
                                </div>
                                <h3 className="text-2xl font-medium group-hover:text-desaturated-teal transition-colors">What Shoppers Want in 2027</h3>
                                <p className="text-deep-charcoal/50 text-sm">A clear look at how buying habits are shifting across Europe and what you can do to prepare.</p>
                            </div>
                            <div className="flex justify-between items-center border-t border-border-subtle pt-6">
                                <div className="font-mono text-[10px] font-bold">15 MIN READ // RESOURCE_02</div>
                                <span className="material-symbols-outlined text-border-subtle group-hover:text-desaturated-teal transition-colors">arrow_right_alt</span>
                            </div>
                        </div>

                        <div className="bento-article bg-deep-charcoal text-white group">
                            <div className="space-y-4">
                                <div className="data-label text-white/50">Supply Chain</div>
                                <h3 className="text-xl font-medium">Protecting Your Sourcing</h3>
                                <p className="text-white/40 text-xs">Our simple checklist for finding reliable manufacturers and avoiding delays.</p>
                            </div>
                            <div className="flex justify-between items-center border-t border-white/10 pt-4">
                                <span className="font-mono text-[9px] font-bold">07 MIN</span>
                                <span className="material-symbols-outlined text-desaturated-teal text-lg">verified</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="border-y border-border-subtle bg-white">
                    <div className="max-w-screen-2xl mx-auto px-8 py-16 flex flex-col lg:flex-row items-center justify-between gap-12">
                        <div className="max-w-md">
                            <h2 className="text-2xl font-bold mb-3 tracking-tight text-deep-charcoal">Get Weekly Tips</h2>
                            <p className="text-sm text-deep-charcoal/60">Join over 5,000 sellers receiving our best Amazon advice and market alerts every Tuesday.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                            <div className="relative min-w-[320px]">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-sm opacity-30">alternate_email</span>
                                <input className="w-full bg-soft-bg border-border-subtle focus:ring-1 focus:ring-desaturated-teal focus:border-desaturated-teal text-[10px] font-mono py-4 pl-12 pr-4 transition-all" placeholder="YOUR EMAIL ADDRESS" type="email" />
                            </div>
                            <button className="bg-deep-charcoal text-white font-bold px-12 py-4 hover:bg-desaturated-teal transition-all uppercase tracking-[0.2em] text-[11px] rounded-sm whitespace-nowrap">
                                Join the List
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

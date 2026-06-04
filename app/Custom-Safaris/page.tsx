import React from 'react';
import Link from 'next/link';

export default function CustomSafarisPage() {
  return (
    <div className="bg-white">
      
    {/*  Header  */}
    

    {/*  Hero Section  */}
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
            <div className="absolute inset-0 hero-texture"></div>
            <div className="absolute inset-0 hero-grid opacity-40"></div>
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-orange-500/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-120px] left-[-80px] w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20 grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-sm uppercase tracking-[0.3em]">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    Custom Safari Collection
                </div>
                <h1 className="headline text-5xl md:text-6xl mt-6 mb-6">Design the Safari That Fits Your Pace</h1>
                <p className="text-lg text-white/80 max-w-xl">Short escapes, deep explorations, and grand tours — every
                    itinerary is curated by WildMed to match your adventure style and wildlife dreams.</p>
                <div className="mt-8 flex flex-wrap gap-4">
                    <a href="#safaris" className="bg-emerald-500 hover:bg-emerald-600 text-slate-900 px-6 py-3 rounded-lg font-semibold transition-colors">Browse
                        Safaris</a>
                    <Link href="/Review" className="border border-white/30 hover:border-white/60 px-6 py-3 rounded-lg font-semibold transition-colors">Traveler
                        Stories</Link>
                </div>
            </div>

            <div className="slide-up delay-2">
                <div className="floating-card rounded-3xl p-8 border border-white/30 shadow-2xl">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Safari Snapshot</p>
                            <h2 className="headline text-3xl text-slate-900">Build Your Mix</h2>
                        </div>
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm font-semibold">Featured</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="rounded-2xl bg-white p-4 border border-slate-100">
                            <p className="text-slate-500">Short Adventures</p>
                            <p className="text-2xl font-semibold text-slate-900">3</p>
                        </div>
                        <div className="rounded-2xl bg-white p-4 border border-slate-100">
                            <p className="text-slate-500">Explorer Packages</p>
                            <p className="text-2xl font-semibold text-slate-900">4</p>
                        </div>
                        <div className="rounded-2xl bg-white p-4 border border-slate-100">
                            <p className="text-slate-500">Grand Tours</p>
                            <p className="text-2xl font-semibold text-slate-900">6</p>
                        </div>
                        <div className="rounded-2xl bg-white p-4 border border-slate-100">
                            <p className="text-slate-500">Custom Itineraries</p>
                            <p className="text-2xl font-semibold text-slate-900">Unlimited</p>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center gap-3 text-sm text-slate-600">
                        <i className="ri-map-pin-line text-emerald-500"></i>
                        Tell us your dates and we will tailor every detail.
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  Safari Listings  */}
    <section id="safaris" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">Choose a Journey</p>
                <h2 className="headline text-4xl md:text-5xl mt-4">Custom Safaris, Crafted for Every Pace</h2>
                <p className="text-lg text-slate-600 mt-4">Each itinerary highlights signature wildlife, culture, and
                    scenery — and can be fully customized.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
                {/*  3-Day Gorilla Trekking  */}
                <div className="trip-card bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                    <div className="p-6 border-b border-slate-100">
                        <div className="flex flex-wrap items-center gap-3 text-sm text-emerald-700">
                            <span className="px-3 py-1 rounded-full bg-emerald-100">3 Days</span>
                            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600">Short Adventure</span>
                        </div>
                        <h3 className="headline text-2xl mt-4">3-Day Gorilla Trekking</h3>
                        <p className="text-slate-600 mt-3">A focused escape into Bwindi’s rainforest for a once-in-a-lifetime
                            gorilla encounter.</p>
                    </div>
                    <div className="p-6">
                        <div className="grid grid-cols-3 gap-3 mb-6">
                            <img src="img/Destination/UG/bwindi.jpeg" alt="Bwindi" className="h-24 w-full object-cover rounded-2xl" />
                            <img src="img/Destination/UG/gorilla.jpeg" alt="Mountain Gorillas" className="h-24 w-full object-cover rounded-2xl" />
                            <img src="img/Destination/UG/volcanoes-safaris-bwindi-lodge-uganda-jungle-gorilla-lodge.jpg" alt="Bwindi Lodge" className="h-24 w-full object-cover rounded-2xl" />
                        </div>
                        <Link href="/Ugandan-3Days" className="inline-flex items-center text-emerald-700 font-semibold hover:text-emerald-600">View
                            Itinerary <i className="ri-arrow-right-line ml-2"></i></Link>
                    </div>
                </div>

                {/*  4-Day Uganda Express  */}
                <div className="trip-card bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                    <div className="p-6 border-b border-slate-100">
                        <div className="flex flex-wrap items-center gap-3 text-sm text-emerald-700">
                            <span className="px-3 py-1 rounded-full bg-emerald-100">4 Days</span>
                            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600">Short Adventure</span>
                        </div>
                        <h3 className="headline text-2xl mt-4">4-Day Uganda Express</h3>
                        <p className="text-slate-600 mt-3">A quick blend of rainforest trekking and Uganda’s signature
                            wildlife moments.</p>
                    </div>
                    <div className="p-6">
                        <div className="grid grid-cols-3 gap-3 mb-6">
                            <img src="img/Destination/UG/Queen.jpeg" alt="Queen Elizabeth" className="h-24 w-full object-cover rounded-2xl" />
                            <img src="img/Destination/UG/elephant.jpeg" alt="Elephants" className="h-24 w-full object-cover rounded-2xl" />
                            <img src="img/Destination/UG/falls.jpeg" alt="Murchison Falls" className="h-24 w-full object-cover rounded-2xl" />
                        </div>
                        <Link href="/Ugandan-4Days" className="inline-flex items-center text-emerald-700 font-semibold hover:text-emerald-600">View
                            Itinerary <i className="ri-arrow-right-line ml-2"></i></Link>
                    </div>
                </div>

                {/*  4-Day Luxury Fly-in  */}
                <div className="trip-card bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                    <div className="p-6 border-b border-slate-100">
                        <div className="flex flex-wrap items-center gap-3 text-sm text-emerald-700">
                            <span className="px-3 py-1 rounded-full bg-emerald-100">4 Days</span>
                            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600">Luxury Fly-in</span>
                        </div>
                        <h3 className="headline text-2xl mt-4">4-Day Luxury Fly-in</h3>
                        <p className="text-slate-600 mt-3">Arrive in style with aerial transfers and premium jungle lodges
                            near gorilla habitats.</p>
                    </div>
                    <div className="p-6">
                        <div className="grid grid-cols-3 gap-3 mb-6">
                            <img src="img/Destination/UG/volcanoes-safaris-bwindi-lodge-uganda-jungle-gorilla-lodge.jpg" alt="Luxury Lodge" className="h-24 w-full object-cover rounded-2xl" />
                            <img src="img/Destination/UG/bwindi.jpeg" alt="Bwindi Forest" className="h-24 w-full object-cover rounded-2xl" />
                            <img src="img/Destination/UG/gorilla.jpeg" alt="Gorilla" className="h-24 w-full object-cover rounded-2xl" />
                        </div>
                        <Link href="/Ugandan-4Days2" className="inline-flex items-center text-emerald-700 font-semibold hover:text-emerald-600">View
                            Itinerary <i className="ri-arrow-right-line ml-2"></i></Link>
                    </div>
                </div>

                {/*  5-Day Best of Kisoro  */}
                <div className="trip-card bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                    <div className="p-6 border-b border-slate-100">
                        <div className="flex flex-wrap items-center gap-3 text-sm text-emerald-700">
                            <span className="px-3 py-1 rounded-full bg-emerald-100">5 Days</span>
                            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600">Explorer Package</span>
                        </div>
                        <h3 className="headline text-2xl mt-4">5-Day Best of Kisoro</h3>
                        <p className="text-slate-600 mt-3">Combine gorilla trekking with scenic lake districts and cultural
                            encounters.</p>
                    </div>
                    <div className="p-6">
                        <div className="grid grid-cols-3 gap-3 mb-6">
                            <img src="img/Destination/UG/bwindi.jpeg" alt="Bwindi" className="h-24 w-full object-cover rounded-2xl" />
                            <img src="img/Destination/UG/croc.jpg" alt="Lakeside" className="h-24 w-full object-cover rounded-2xl" />
                            <img src="img/Destination/UG/elephant.jpeg" alt="Wildlife" className="h-24 w-full object-cover rounded-2xl" />
                        </div>
                        <Link href="/Ugandan-5-Days" className="inline-flex items-center text-emerald-700 font-semibold hover:text-emerald-600">View
                            Itinerary <i className="ri-arrow-right-line ml-2"></i></Link>
                    </div>
                </div>

                {/*  5-Day Short Holiday  */}
                <div className="trip-card bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                    <div className="p-6 border-b border-slate-100">
                        <div className="flex flex-wrap items-center gap-3 text-sm text-emerald-700">
                            <span className="px-3 py-1 rounded-full bg-emerald-100">5 Days</span>
                            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600">Explorer Package</span>
                        </div>
                        <h3 className="headline text-2xl mt-4">5-Day Short Holiday</h3>
                        <p className="text-slate-600 mt-3">A balanced itinerary for travelers who want both gorillas and
                            Uganda’s landscapes.</p>
                    </div>
                    <div className="p-6">
                        <div className="grid grid-cols-3 gap-3 mb-6">
                            <img src="img/Destination/UG/Queen.jpeg" alt="Queen Elizabeth" className="h-24 w-full object-cover rounded-2xl" />
                            <img src="img/Destination/UG/hippos.jpeg" alt="Hippos" className="h-24 w-full object-cover rounded-2xl" />
                            <img src="img/Destination/UG/bwindi.jpeg" alt="Bwindi" className="h-24 w-full object-cover rounded-2xl" />
                        </div>
                        <Link href="/Ugandan-5Days" className="inline-flex items-center text-emerald-700 font-semibold hover:text-emerald-600">View
                            Itinerary <i className="ri-arrow-right-line ml-2"></i></Link>
                    </div>
                </div>

                {/*  6-Day Kisoro Adventure  */}
                <div className="trip-card bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                    <div className="p-6 border-b border-slate-100">
                        <div className="flex flex-wrap items-center gap-3 text-sm text-emerald-700">
                            <span className="px-3 py-1 rounded-full bg-emerald-100">6 Days</span>
                            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600">Explorer Package</span>
                        </div>
                        <h3 className="headline text-2xl mt-4">6-Day Kisoro Adventure</h3>
                        <p className="text-slate-600 mt-3">Extended gorilla trekking with added wildlife drives and cultural
                            immersion.</p>
                    </div>
                    <div className="p-6">
                        <div className="grid grid-cols-3 gap-3 mb-6">
                            <img src="img/Destination/UG/bwindi.jpeg" alt="Bwindi" className="h-24 w-full object-cover rounded-2xl" />
                            <img src="img/Destination/UG/kiable.jpeg" alt="Kibale" className="h-24 w-full object-cover rounded-2xl" />
                            <img src="img/Destination/UG/Queen.jpeg" alt="Queen Elizabeth" className="h-24 w-full object-cover rounded-2xl" />
                        </div>
                        <Link href="/Ugandan-6Days2" className="inline-flex items-center text-emerald-700 font-semibold hover:text-emerald-600">View
                            Itinerary <i className="ri-arrow-right-line ml-2"></i></Link>
                    </div>
                </div>

                {/*  7-Day Rwanda Explorer  */}
                <div className="trip-card bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                    <div className="p-6 border-b border-slate-100">
                        <div className="flex flex-wrap items-center gap-3 text-sm text-emerald-700">
                            <span className="px-3 py-1 rounded-full bg-emerald-100">7 Days</span>
                            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600">Explorer Package</span>
                        </div>
                        <h3 className="headline text-2xl mt-4">7-Day Rwanda Explorer</h3>
                        <p className="text-slate-600 mt-3">Volcanoes, Nyungwe, and Kigali culture in one primate-focused\n+                            journey.</p>
                    </div>
                    <div className="p-6">
                        <div className="grid grid-cols-3 gap-3 mb-6">
                            <img src="img/Destination/rwanda/volcanoes park.jpeg" alt="Volcanoes" className="h-24 w-full object-cover rounded-2xl" />
                            <img src="img/Destination/rwanda/nyungwe.jpeg" alt="Nyungwe" className="h-24 w-full object-cover rounded-2xl" />
                            <img src="img/Destination/rwanda/lakekivu.jpeg" alt="Lake Kivu" className="h-24 w-full object-cover rounded-2xl" />
                        </div>
                        <Link href="/Rwanda-7-Days" className="inline-flex items-center text-emerald-700 font-semibold hover:text-emerald-600">View
                            Itinerary <i className="ri-arrow-right-line ml-2"></i></Link>
                    </div>
                </div>

                {/*  8-Day Chimps & Gorillas  */}
                <div className="trip-card bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                    <div className="p-6 border-b border-slate-100">
                        <div className="flex flex-wrap items-center gap-3 text-sm text-emerald-700">
                            <span className="px-3 py-1 rounded-full bg-emerald-100">8 Days</span>
                            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600">Grand Tour</span>
                        </div>
                        <h3 className="headline text-2xl mt-4">8-Day Chimps & Gorillas</h3>
                        <p className="text-slate-600 mt-3">The classic primate combo with rainforest trekking and savanna\n+                            wildlife.</p>
                    </div>
                    <div className="p-6">
                        <div className="grid grid-cols-3 gap-3 mb-6">
                            <img src="img/Destination/UG/kiable.jpeg" alt="Kibale" className="h-24 w-full object-cover rounded-2xl" />
                            <img src="img/Destination/UG/gorilla.jpeg" alt="Gorillas" className="h-24 w-full object-cover rounded-2xl" />
                            <img src="img/Destination/UG/Queen.jpeg" alt="Queen Elizabeth" className="h-24 w-full object-cover rounded-2xl" />
                        </div>
                        <Link href="/Ugandan-8days" className="inline-flex items-center text-emerald-700 font-semibold hover:text-emerald-600">View
                            Itinerary <i className="ri-arrow-right-line ml-2"></i></Link>
                    </div>
                </div>

                {/*  8-Day Uganda & Rwanda  */}
                <div className="trip-card bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                    <div className="p-6 border-b border-slate-100">
                        <div className="flex flex-wrap items-center gap-3 text-sm text-emerald-700">
                            <span className="px-3 py-1 rounded-full bg-emerald-100">8 Days</span>
                            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600">Grand Tour</span>
                        </div>
                        <h3 className="headline text-2xl mt-4">8-Day Uganda & Rwanda</h3>
                        <p className="text-slate-600 mt-3">Cross-border gorilla trekking with rainforest drives and\n+                            crater-lake scenery.</p>
                    </div>
                    <div className="p-6">
                        <div className="grid grid-cols-3 gap-3 mb-6">
                            <img src="img/Destination/UG/bwindi.jpeg" alt="Bwindi" className="h-24 w-full object-cover rounded-2xl" />
                            <img src="img/Destination/rwanda/virunga.jpeg" alt="Virunga" className="h-24 w-full object-cover rounded-2xl" />
                            <img src="img/Destination/rwanda/lakekivu.jpeg" alt="Lake Kivu" className="h-24 w-full object-cover rounded-2xl" />
                        </div>
                        <Link href="/Ugandan-8days2" className="inline-flex items-center text-emerald-700 font-semibold hover:text-emerald-600">View
                            Itinerary <i className="ri-arrow-right-line ml-2"></i></Link>
                    </div>
                </div>

                {/*  8-Day Luxury Big Five  */}
                <div className="trip-card bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                    <div className="p-6 border-b border-slate-100">
                        <div className="flex flex-wrap items-center gap-3 text-sm text-emerald-700">
                            <span className="px-3 py-1 rounded-full bg-emerald-100">8 Days</span>
                            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600">Luxury</span>
                        </div>
                        <h3 className="headline text-2xl mt-4">8-Day Luxury Big Five</h3>
                        <p className="text-slate-600 mt-3">Luxury lodges, private game drives, and iconic Big Five moments.</p>
                    </div>
                    <div className="p-6">
                        <div className="grid grid-cols-3 gap-3 mb-6">
                            <img src="img/Destination/UG/elephant.jpeg" alt="Elephants" className="h-24 w-full object-cover rounded-2xl" />
                            <img src="img/Destination/UG/hippos.jpeg" alt="Hippos" className="h-24 w-full object-cover rounded-2xl" />
                            <img src="img/Destination/UG/fallschamp.jpeg" alt="Luxury Lodge" className="h-24 w-full object-cover rounded-2xl" />
                        </div>
                        <Link href="/Ugandan-8days3" className="inline-flex items-center text-emerald-700 font-semibold hover:text-emerald-600">View
                            Itinerary <i className="ri-arrow-right-line ml-2"></i></Link>
                    </div>
                </div>

                {/*  11-Day Uganda & Rwanda  */}
                <div className="trip-card bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                    <div className="p-6 border-b border-slate-100">
                        <div className="flex flex-wrap items-center gap-3 text-sm text-emerald-700">
                            <span className="px-3 py-1 rounded-full bg-emerald-100">11 Days</span>
                            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600">Grand Tour</span>
                        </div>
                        <h3 className="headline text-2xl mt-4">11-Day Uganda & Rwanda</h3>
                        <p className="text-slate-600 mt-3">An extended cross-border journey blending primates, savannas, and\n+                            cultural moments.</p>
                    </div>
                    <div className="p-6">
                        <div className="grid grid-cols-3 gap-3 mb-6">
                            <img src="img/Destination/UG/Queen.jpeg" alt="Queen Elizabeth" className="h-24 w-full object-cover rounded-2xl" />
                            <img src="img/Destination/rwanda/volcanoes park.jpeg" alt="Volcanoes" className="h-24 w-full object-cover rounded-2xl" />
                            <img src="img/Destination/rwanda/akagera.jpeg" alt="Akagera" className="h-24 w-full object-cover rounded-2xl" />
                        </div>
                        <Link href="/Ugandan-11-Days" className="inline-flex items-center text-emerald-700 font-semibold hover:text-emerald-600">View
                            Itinerary <i className="ri-arrow-right-line ml-2"></i></Link>
                    </div>
                </div>

                {/*  11-Day Luxury Safari  */}
                <div className="trip-card bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                    <div className="p-6 border-b border-slate-100">
                        <div className="flex flex-wrap items-center gap-3 text-sm text-emerald-700">
                            <span className="px-3 py-1 rounded-full bg-emerald-100">11 Days</span>
                            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600">Luxury</span>
                        </div>
                        <h3 className="headline text-2xl mt-4">11-Day Luxury Safari</h3>
                        <p className="text-slate-600 mt-3">High-end lodges, private guides, and curated wildlife moments\n+                            across Uganda.</p>
                    </div>
                    <div className="p-6">
                        <div className="grid grid-cols-3 gap-3 mb-6">
                            <img src="img/Destination/UG/fallschamp.jpeg" alt="Luxury Lodge" className="h-24 w-full object-cover rounded-2xl" />
                            <img src="img/Destination/UG/elephant.jpeg" alt="Elephant" className="h-24 w-full object-cover rounded-2xl" />
                            <img src="img/Destination/UG/hippos.jpeg" alt="Hippos" className="h-24 w-full object-cover rounded-2xl" />
                        </div>
                        <Link href="/Ugandan-11Days" className="inline-flex items-center text-emerald-700 font-semibold hover:text-emerald-600">View
                            Itinerary <i className="ri-arrow-right-line ml-2"></i></Link>
                    </div>
                </div>

                {/*  14-Day Luxury Safari  */}
                <div className="trip-card bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                    <div className="p-6 border-b border-slate-100">
                        <div className="flex flex-wrap items-center gap-3 text-sm text-emerald-700">
                            <span className="px-3 py-1 rounded-full bg-emerald-100">14 Days</span>
                            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600">Luxury Grand Tour</span>
                        </div>
                        <h3 className="headline text-2xl mt-4">14-Day Luxury Safari</h3>
                        <p className="text-slate-600 mt-3">The ultimate East Africa journey with premium lodges and Big Five\n+                            experiences.</p>
                    </div>
                    <div className="p-6">
                        <div className="grid grid-cols-3 gap-3 mb-6">
                            <img src="img/Destination/UG/elephant.jpeg" alt="Elephants" className="h-24 w-full object-cover rounded-2xl" />
                            <img src="img/Destination/UG/Queen.jpeg" alt="Queen Elizabeth" className="h-24 w-full object-cover rounded-2xl" />
                            <img src="img/Destination/UG/gorilla.jpeg" alt="Gorilla" className="h-24 w-full object-cover rounded-2xl" />
                        </div>
                        <Link href="/Ugandan-14-Days" className="inline-flex items-center text-emerald-700 font-semibold hover:text-emerald-600">View
                            Itinerary <i className="ri-arrow-right-line ml-2"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  CTA Section  */}
    <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6 slide-up delay-1">
                <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Tailor Your Safari</p>
                <h2 className="headline text-4xl">Want a Custom Route?</h2>
                <p className="text-white/80">Share your dream destinations, travel dates, and interests. We will craft an
                    itinerary that fits your timeline and budget.</p>
                <div className="flex flex-wrap gap-4">
                    <Link href="/Uganda-Adventures" className="bg-emerald-500 hover:bg-emerald-600 text-slate-900 px-6 py-3 rounded-lg font-semibold transition-colors">Start
                        Planning</Link>
                    <Link href="/Review" className="border border-white/30 hover:border-white/60 px-6 py-3 rounded-lg font-semibold transition-colors">Read
                        Reviews</Link>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 slide-up delay-3">
                <div className="rounded-2xl bg-white/10 p-6">
                    <p className="text-sm text-white/60">Wildlife Focus</p>
                    <p className="text-2xl font-semibold mt-2">Gorillas, Big Five, Chimps</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-6">
                    <p className="text-sm text-white/60">Academic Tracks</p>
                    <p className="text-2xl font-semibold mt-2">Medical + Conservation</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-6">
                    <p className="text-sm text-white/60">Adventure Style</p>
                    <p className="text-2xl font-semibold mt-2">Luxury, Mid-range, Budget</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-6">
                    <p className="text-sm text-white/60">Support</p>
                    <p className="text-2xl font-semibold mt-2">Dedicated Trip Planner</p>
                </div>
            </div>
        </div>
    </section>

    {/*  Footer  */}
    

    








    </div>
  );
}

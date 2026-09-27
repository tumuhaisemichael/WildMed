"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import UnifiedHero from "@/components/layout/UnifiedHero";

const itinerary = [
  {
    day: "01",
    title: "Journey to Bwindi Impenetrable Forest",
    route: "Entebbe / Kampala to Bwindi",
    icon: "ri-road-map-line",
    image: "/assets/3day-gorilla/gorilla2.png",
    segments: [
      { heading: "Scenic transfer", icon: "ri-car-line", items: ["Pickup from Entebbe Airport or Kampala hotel", "Drive through lush green landscapes", "Journey to Southwest Uganda", "Arrive at Bwindi Impenetrable National Park"] },
      { heading: "Evening at the lodge", icon: "ri-hotel-line", items: ["Check into Rushaga Gorilla Lodge", "Briefing about gorilla trekking", "Dinner and overnight stay", "Prepare for next day's adventure"] },
    ],
    note: { title: "Park insight", icon: "ri-lightbulb-flash-line", text: "Bwindi Impenetrable National Park is home to nearly half the world's remaining mountain gorillas. The park is a UNESCO World Heritage Site." },
  },
  {
    day: "02",
    title: "Gorilla Trekking & Batwa Culture",
    route: "Bwindi Impenetrable Forest",
    icon: "ri-footprint-line",
    image: "/assets/3day-gorilla/gorilla1.png",
    segments: [
      { heading: "Gorilla trekking", icon: "ri-user-star-line", items: ["Early morning briefing at park headquarters", "Guided trek into the impenetrable forest", "Find and observe a mountain gorilla family", "One unforgettable hour with the gorillas", "Return to the lodge for lunch"] },
      { heading: "Batwa cultural experience", icon: "ri-community-line", items: ["Afternoon visit to the Batwa community", "Learn about the indigenous forest lifestyle", "Traditional dances and storytelling", "Cultural exchange with Batwa people", "Understand their conservation role"] },
    ],
    note: { title: "Conservation note", icon: "ri-team-line", text: "Your visit supports both gorilla conservation and Batwa community livelihoods. Tourism provides sustainable income for forest protection." },
  },
  {
    day: "03",
    title: "Scenic Return to Kampala or Entebbe",
    route: "Bwindi to Entebbe / Kampala",
    icon: "ri-car-line",
    image: "/assets/3day-gorilla/gorilla4.png",
    segments: [
      { heading: "Morning at Bwindi", icon: "ri-sun-line", items: ["Final breakfast at Rushaga Gorilla Lodge", "Last views of the forest canopy", "Opportunity for souvenir shopping", "Share trekking stories with fellow travellers"] },
      { heading: "Return journey", icon: "ri-plane-line", items: ["Begin the return journey with a packed lunch", "Scenic drive through the Ugandan countryside", "Stop for photos and refreshments", "Drop-off at the airport or hotel in Entebbe/Kampala"] },
    ],
    note: { title: "Departure planning", icon: "ri-flight-takeoff-line", text: "Schedule flights for the evening, after 6pm, from Entebbe. For early morning flights, we recommend booking an extra night in Entebbe." },
  },
];

const highlights = [
  { title: "Mountain Gorilla Encounter", category: "Wildlife", text: "Spend a remarkable hour with a mountain gorilla family in its natural habitat.", image: "/assets/3day-gorilla/gorilla1.png", layout: "lg:col-span-2 lg:row-span-2" },
  { title: "Bwindi Impenetrable Forest", category: "Landscape", text: "Follow forest trails through one of Africa's most biologically rich landscapes.", image: "/assets/3day-gorilla/gorilla2.png", layout: "" },
  { title: "Batwa Cultural Experience", category: "Culture", text: "Meet an indigenous community and learn about its deep relationship with the forest.", image: "/assets/3day-gorilla/gorilla3.png", layout: "" },
  { title: "Gorilla Trekking Group", category: "Expedition", text: "Travel with an experienced guide who handles the route, timing and park formalities.", image: "/assets/3day-gorilla/gorilla4.png", layout: "lg:col-span-2" },
];

const lodges = [
  {
    name: "Rushaga Gorilla Lodge",
    location: "Bwindi Impenetrable Forest",
    nights: "2 nights",
    level: "Mid-range",
    image: "/assets/3day-gorilla/rushaga-lodge.png",
    description: "A comfortable lodge near the park headquarters, offering modern amenities with stunning forest views. It is the perfect base for a gorilla trekking adventure.",
    amenities: [["ri-wifi-line", "Free WiFi"], ["ri-restaurant-line", "On-site restaurant"], ["ri-fire-line", "Hot showers"], ["ri-landscape-line", "Forest views"]],
  },
];

const features = [
  { icon: "ri-user-star-line", title: "Private tour", text: "Exclusively for you and your group" },
  { icon: "ri-calendar-event-line", title: "Flexible dates", text: "Start any day, perfect for last-minute travel" },
  { icon: "ri-user-heart-line", title: "Solo traveller friendly", text: "Perfect for individual adventurers" },
  { icon: "ri-shield-check-line", title: "Permit assistance", text: "We coordinate gorilla permit availability" },
];

const included = [
  "Airport/hotel transfers in Entebbe/Kampala",
  "Private transportation in a luxury 4x4 vehicle",
  "English-speaking driver/guide throughout",
  "Gorilla trekking permit* (USD 700 value)",
  "Two nights at Rushaga Gorilla Lodge",
  "All meals as listed in the itinerary",
  "Batwa community visit experience",
  "Park entrance fees",
  "Bottled water during drives",
];

const excluded = [
  "International flights to/from Uganda",
  "Uganda visa fees (USD $50)",
  "Travel and medical insurance",
  "Alcoholic and premium beverages",
  "Personal shopping and souvenirs",
  "Tips for guides and lodge staff",
  "Optional activities not mentioned",
  "Personal expenses",
];

const preparation = [
  {
    icon: "ri-file-list-3-line",
    title: "Required documentation & permits",
    groups: [
      { title: "Essential documents", items: ["Valid passport (6+ months remaining)", "Uganda visa (available on arrival, USD $50)", "Yellow fever vaccination certificate", "Travel insurance with medical evacuation", "Gorilla permit confirmation (we provide)"] },
      { title: "Permit information", items: ["Gorilla permit: USD $700 per person", "Permits included in tour price", "Must be booked months in advance", "Non-refundable once confirmed", "Minimum age: 15 years"] },
    ],
  },
  {
    icon: "ri-luggage-cart-line",
    title: "Packing for 3-day gorilla trek",
    groups: [
      { title: "Trekking essentials", items: ["Waterproof hiking boots (broken in)", "Garden gloves for vegetation", "Lightweight rain jacket/poncho", "Small daypack (waterproof)", "Walking sticks (provided)"] },
      { title: "Clothing", items: ["Long-sleeved shirts (neutral colours)", "Long pants (quick-dry material)", "Warm layer (fleece/jacket)", "Hat with brim", "Extra socks (wool recommended)"] },
      { title: "Personal items", items: ["High SPF sunscreen", "Insect repellent (DEET based)", "Camera with extra batteries", "Personal medications", "Small first aid kit"] },
    ],
  },
  {
    icon: "ri-heart-pulse-line",
    title: "Fitness & trekking protocol",
    groups: [
      { title: "Physical requirements", items: ["Moderate fitness level required", "Trekking duration: 2-6 hours", "Altitude: 1,190-2,607 metres", "Uneven, muddy terrain", "Can be physically demanding"] },
      { title: "Gorilla trekking rules", items: ["Maximum 8 visitors per gorilla group", "Stay 7 metres from gorillas", "No flash photography", "Keep voices low at all times", "If sick (cold/flu), do not trek", "Follow guide instructions strictly"] },
    ],
  },
];

const pricingRows = [
  ["Base tour package (per person)", "Included"],
  ["Gorilla trekking permit*", "Included (USD $700 value)"],
  ["Batwa cultural experience", "Included"],
  ["Transportation & guiding", "Included"],
];

const bookingBenefits = ["Quick confirmation (24-48 hours if permits are available)", "Flexible payment options", "Complimentary airport transfer coordination", "Free trip planning consultation"];
const pricingInclusions = ["All accommodation (2 nights mid-range lodge)", "All meals as specified in the itinerary", "Professional English-speaking guide", "Private 4x4 transportation throughout", "Gorilla trekking permit (USD $700 value)", "Batwa Cultural Experience visit", "Park entrance fees for Bwindi", "Airport/hotel transfers in Entebbe/Kampala", "Bottled water during drives"];
const importantNotes = ["Price based on double occupancy", "Single supplement: $250", "Gorilla permits are non-refundable", "Minimum age: 15 years", "Maximum group: 8 people (park rule)", "50% deposit required to secure permits", "Balance due 30 days before travel"];

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-[0.24em] text-sunset-gold">
          <span className="h-2 w-2 rounded-full bg-sunset-gold" />{eyebrow}
        </p>
        <h2 className="headline max-w-3xl text-4xl font-bold leading-[1.05] text-white sm:text-5xl">{title}</h2>
      </div>
      {copy && <p className="max-w-xl text-sm leading-6 text-slate-400 lg:text-right">{copy}</p>}
    </div>
  );
}

export default function Ugandan3DaysPage() {
  const [activeLodge, setActiveLodge] = useState(0);
  const [selectedHighlight, setSelectedHighlight] = useState<(typeof highlights)[number] | null>(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [groupSize, setGroupSize] = useState(2);
  const [activityLevel, setActivityLevel] = useState("Moderate");
  const [accommodation, setAccommodation] = useState("Mid-range Lodges (Included)");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (lodges.length < 2) return;
    const timer = window.setInterval(() => setActiveLodge((current) => (current + 1) % lodges.length), 6000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!selectedHighlight && !bookingOpen) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedHighlight(null);
        setBookingOpen(false);
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", close);
    };
  }, [selectedHighlight, bookingOpen]);

  const openBooking = () => {
    setSubmitted(false);
    setBookingOpen(true);
  };

  const submitBooking = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const response = await fetch("https://formspree.io/f/mldlkwke", {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Submission failed");
      form.reset();
      setSubmitted(true);
    } catch {
      window.alert("There was an error submitting your request. Please try again or contact us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const lodge = lodges[activeLodge];

  return (
    <div className="overflow-hidden bg-slate-950 text-white">
      <UnifiedHero eyebrow="Express gorilla adventure" title={<>3-Day Gorilla Trekking <span className="block italic text-sunset-gold">& Batwa Experience</span></>} description="Experience the magic of mountain gorillas on a compact journey pairing intimate wildlife encounters with meaningful cultural immersion in Uganda's magnificent Bwindi Impenetrable Forest." backgroundImage="/assets/3day-gorilla/gorilla1.png" mainImage="/assets/3day-gorilla/gorilla2.png" secondaryImage="/assets/3day-gorilla/gorilla4.png" imageAlt="Mountain gorilla in Bwindi Impenetrable Forest" trustText="4.9/5 traveler rating" note="One journey, lifelong memories" stats={[{value:'3 days',label:'2 nights',icon:'ri-calendar-check-line'},{value:'Bwindi',label:'Destination',icon:'ri-map-pin-2-line'},{value:'Private',label:'Your own group',icon:'ri-group-line'},{value:'USD 2,540',label:'Per person',icon:'ri-price-tag-3-line'}]} actions={<><button onClick={openBooking} className="rounded-2xl bg-sunset-gold px-8 py-4 font-black text-slate-950 transition hover:bg-white">Book this journey <i className="ri-arrow-right-line" /></button><button onClick={openBooking} className="rounded-2xl border border-sunset-gold/70 bg-slate-950/30 px-8 py-4 font-black text-white backdrop-blur transition hover:bg-sunset-gold hover:text-slate-950">Check permit availability</button></>} />

      <section className="bg-slate-950 px-6 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Detailed itinerary" title="Your 3-day adventure" copy="A compact yet powerful itinerary combining gorilla encounters with meaningful cultural immersion, a scenic arrival and an easy return to Kampala or Entebbe." />
          <div className="grid gap-6 lg:grid-cols-3">
            {itinerary.map((day) => (
              <article key={day.day} className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900 shadow-xl">
                <div className="relative h-56 overflow-hidden">
                  <Image src={day.image} alt={day.title} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
                  <span className="headline absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-full bg-sunset-gold text-xl font-black text-slate-950 shadow-xl">{day.day}</span>
                  <p className="absolute bottom-4 left-5 right-5 flex items-center gap-2 text-xs font-bold text-white"><i className={`${day.icon} text-sunset-gold`} />{day.route}</p>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="headline text-2xl font-bold leading-tight text-white">{day.title}</h3>
                  <div className="mt-6 space-y-6">
                    {day.segments.map((segment) => (
                      <div key={segment.heading}>
                        <h4 className="flex items-center gap-2 text-sm font-black text-slate-200"><i className={`${segment.icon} text-lg text-sunset-gold`} />{segment.heading}</h4>
                        <ul className="mt-3 space-y-2 text-xs leading-5 text-slate-400">
                          {segment.items.map((item) => <li key={item} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sunset-gold" />{item}</li>)}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 border border-sunset-gold/20 bg-sunset-gold/10 p-4">
                    <h4 className="flex items-center gap-2 text-sm font-black text-sunset-gold"><i className={day.note.icon} />{day.note.title}</h4>
                    <p className="mt-2 text-xs leading-5 text-slate-300">{day.note.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900 px-6 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Unforgettable experiences" title="Adventure highlights" copy="Extraordinary wildlife, an ancient rainforest and cultural encounters make this short journey feel remarkably complete." />
          <div className="grid auto-rows-[230px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((highlight) => (
              <button type="button" onClick={() => setSelectedHighlight(highlight)} key={highlight.title} className={`gallery-media group relative cursor-zoom-in overflow-hidden border border-white/10 text-left ${highlight.layout}`} aria-label={`Open ${highlight.title}`}>
                <Image src={highlight.image} alt={highlight.title} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent transition group-hover:from-black" />
                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-6 transition duration-300 group-hover:translate-y-0">
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-sunset-gold">{highlight.category} · Bwindi</p>
                  <div className="mt-2 flex items-end justify-between gap-4"><div><h3 className="headline text-xl font-bold text-white sm:text-2xl">{highlight.title}</h3><p className="mt-2 max-w-lg text-xs leading-5 text-slate-200">{highlight.text}</p></div><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/25 bg-black/25 text-white opacity-0 backdrop-blur transition group-hover:opacity-100"><i className="ri-fullscreen-line" /></span></div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Tour details & accommodations" title="Your comfortable stay" copy="Perfect for last-minute bookings and budget-conscious explorers. When an itinerary includes several lodges, this space rotates through each stay automatically." />
          <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div key={lodge.name}>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-sunset-gold">{lodge.location} · {lodge.nights}</p>
              <div className="mt-3 flex flex-wrap items-center gap-4"><h3 className="headline text-4xl font-bold text-white sm:text-5xl">{lodge.name}</h3><span className="rounded-full bg-emerald-500/15 px-4 py-1.5 text-xs font-bold text-emerald-400">{lodge.level}</span></div>
              <p className="mt-6 max-w-xl leading-7 text-slate-400">{lodge.description}</p>
              <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-slate-300">
                {lodge.amenities.map(([icon, item]) => <div key={item} className="flex items-center gap-3"><i className={`${icon} text-lg text-sunset-gold`} />{item}</div>)}
              </div>
              {lodges.length > 1 && (
                <div className="mt-8 flex items-center gap-3">
                  <button type="button" onClick={() => setActiveLodge((activeLodge - 1 + lodges.length) % lodges.length)} className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white hover:border-sunset-gold hover:text-sunset-gold" aria-label="Previous lodge"><i className="ri-arrow-left-line" /></button>
                  <div className="flex gap-2">{lodges.map((item, index) => <button type="button" key={item.name} onClick={() => setActiveLodge(index)} className={`h-2 rounded-full transition-all ${index === activeLodge ? "w-8 bg-sunset-gold" : "w-2 bg-white/25"}`} aria-label={`Show ${item.name}`} />)}</div>
                  <button type="button" onClick={() => setActiveLodge((activeLodge + 1) % lodges.length)} className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white hover:border-sunset-gold hover:text-sunset-gold" aria-label="Next lodge"><i className="ri-arrow-right-line" /></button>
                </div>
              )}
            </div>
            <div key={lodge.image} className="relative min-h-[350px] overflow-hidden rounded-[2rem] border border-white/10 lg:min-h-[430px]"><Image src={lodge.image} alt={lodge.name} fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 to-transparent" /></div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900 px-6 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Tour features" title="Why travel with WildMed" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => <article key={feature.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"><div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-sunset-gold/15 text-2xl text-sunset-gold"><i className={feature.icon} /></div><h3 className="mt-4 font-black text-white">{feature.title}</h3><p className="mt-2 text-xs leading-5 text-slate-400">{feature.text}</p></article>)}
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <div className="rounded-[1.75rem] border border-emerald-500/20 bg-emerald-500/10 p-7 sm:p-8">
              <h3 className="headline flex items-center gap-3 text-2xl font-bold text-white"><span className="grid h-9 w-9 place-items-center rounded-full bg-emerald-400 text-slate-950"><i className="ri-check-line" /></span>What&apos;s included</h3>
              <ul className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2">{included.map((item) => <li key={item} className="flex gap-2 text-xs leading-5 text-slate-300"><i className="ri-checkbox-circle-fill mt-0.5 text-emerald-400" />{item}</li>)}</ul>
              <p className="mt-6 border-t border-emerald-400/15 pt-5 text-xs leading-5 text-slate-400"><span className="font-black text-emerald-400">Note:</span> Gorilla permits are limited and must be booked well in advance. The minimum age for gorilla trekking is 15 years.</p>
            </div>
            <div className="rounded-[1.75rem] border border-red-400/15 bg-red-400/10 p-7 sm:p-8">
              <h3 className="headline flex items-center gap-3 text-2xl font-bold text-white"><span className="grid h-9 w-9 place-items-center rounded-full bg-red-400 text-slate-950"><i className="ri-close-line" /></span>Not included</h3>
              <ul className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2">{excluded.map((item) => <li key={item} className="flex gap-2 text-xs leading-5 text-slate-300"><i className="ri-close-circle-fill mt-0.5 text-red-400" />{item}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div><p className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-[0.24em] text-sunset-gold"><span className="h-2 w-2 rounded-full bg-sunset-gold" />Good to know</p><h2 className="headline text-4xl font-bold text-white sm:text-5xl">Gorilla trekking preparation</h2><p className="mt-5 leading-7 text-slate-400">Essential information for your 3-day express gorilla adventure and a comfortable, respectful forest experience.</p></div>
          <div className="space-y-3">
            {preparation.map((item, index) => (
              <details key={item.title} className="group rounded-2xl border border-white/10 bg-slate-900 open:border-sunset-gold/40" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center gap-4 px-5 py-5 font-bold text-white marker:content-none"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-sunset-gold/15 text-sunset-gold"><i className={item.icon} /></span><span className="flex-1">{item.title}</span><i className="ri-add-line text-xl text-slate-400 transition group-open:rotate-45 group-open:text-sunset-gold" /></summary>
                <div className={`grid gap-7 border-t border-white/10 px-5 py-6 sm:pl-[5.25rem] ${item.groups.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
                  {item.groups.map((group) => (
                    <div key={group.title}>
                      <h4 className="text-sm font-black text-slate-200">{group.title}</h4>
                      <ul className="mt-3 space-y-2">
                        {group.items.map((entry) => <li key={entry} className="flex gap-2 text-xs leading-5 text-slate-400"><i className="ri-check-line mt-0.5 text-sunset-gold" />{entry}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden border-t border-white/10 bg-slate-900 px-6 py-20 sm:px-8 lg:py-28">
        <Image src="/assets/3day-gorilla/gorilla2.png" alt="Bwindi forest landscape" fill sizes="100vw" className="-z-20 object-cover opacity-20" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/95 to-secondary/50" />
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-slate-950/85 p-7 shadow-2xl backdrop-blur-lg sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-sunset-gold">Transparent pricing</p>
            <h2 className="headline mt-3 text-3xl font-bold text-white sm:text-4xl">3-Day Gorilla Trekking & Batwa Experience</h2>
            <p className="mt-3 text-sm text-slate-400">All-inclusive 3-day express gorilla adventure, privately guided and designed around your travel dates.</p>
            <dl className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/90">
              {pricingRows.map(([label, value]) => <div key={label} className="flex flex-col justify-between gap-2 border-b border-white/10 px-5 py-4 text-sm last:border-0 sm:flex-row sm:items-center"><dt className="text-slate-300">{label}</dt><dd className="font-bold text-emerald-400">{value}</dd></div>)}
              <div className="flex flex-col justify-between gap-3 bg-sunset-gold/10 px-5 py-5 sm:flex-row sm:items-center"><dt className="max-w-md font-black text-white">Estimated total per person <span className="block text-[10px] font-normal text-slate-500">Subject to change by season and time</span></dt><dd className="headline text-3xl font-black text-sunset-gold">$2,540 USD*</dd></div>
            </dl>
            <p className="mt-3 text-[11px] italic text-slate-500">*Prices are subject to change based on season, availability and exchange rates.</p>
            <div className="mt-6 rounded-2xl border border-sky-400/15 bg-sky-400/10 p-5"><h3 className="font-black text-sky-300">Last-minute booking benefits</h3><ul className="mt-3 grid gap-2 sm:grid-cols-2">{bookingBenefits.map((item) => <li key={item} className="flex gap-2 text-xs leading-5 text-slate-300"><i className="ri-flashlight-line mt-0.5 text-sky-300" />{item}</li>)}</ul></div>
            </div>
            <div className="space-y-5">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="headline flex items-center gap-3 text-xl font-bold text-white"><i className="ri-check-double-line text-emerald-400" />Tour inclusions summary</h3>
                <ul className="mt-5 space-y-2">{pricingInclusions.map((item) => <li key={item} className="flex gap-2 text-xs leading-5 text-slate-300"><i className="ri-check-line mt-0.5 text-emerald-400" />{item}</li>)}</ul>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="headline flex items-center gap-3 text-xl font-bold text-white"><i className="ri-information-line text-sunset-gold" />Important notes</h3>
                <ul className="mt-5 space-y-2">{importantNotes.map((item) => <li key={item} className="flex gap-2 text-xs leading-5 text-slate-300"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sunset-gold" />{item}</li>)}</ul>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center justify-between gap-5 rounded-2xl bg-sunset-gold p-6 text-slate-950 sm:flex-row sm:p-7">
            <div><p className="text-xs font-black uppercase tracking-[0.2em]">Ready for the forest?</p><p className="headline mt-1 text-2xl font-black">Book your 3-day gorilla experience</p></div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row"><button onClick={openBooking} className="bg-slate-950 px-6 py-4 font-black text-white transition hover:bg-secondary">Book your journey <i className="ri-arrow-right-line ml-1" /></button><button onClick={openBooking} className="border border-slate-950/25 px-6 py-4 text-sm font-bold transition hover:bg-white/40"><i className="ri-calendar-check-line mr-2" />Check permit availability</button></div>
          </div>
        </div>
      </section>

      {selectedHighlight && (
        <div className="gallery-lightbox fixed inset-0 z-[200] flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur-xl" role="dialog" aria-modal="true" aria-label={`Expanded ${selectedHighlight.title}`} onClick={() => setSelectedHighlight(null)}>
          <button type="button" onClick={() => setSelectedHighlight(null)} className="absolute right-5 top-5 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-xl text-white hover:border-sunset-gold hover:text-sunset-gold" aria-label="Close photograph"><i className="ri-close-line" /></button>
          <div className="relative h-[84vh] w-full max-w-6xl" onClick={(event) => event.stopPropagation()}><Image src={selectedHighlight.image} alt={selectedHighlight.title} fill sizes="100vw" className="object-contain" /></div>
        </div>
      )}

      {bookingOpen && (
        <div className="fixed inset-0 z-[210] overflow-y-auto bg-slate-950/95 p-4 backdrop-blur-xl" role="dialog" aria-modal="true" aria-label="Book the 3-day gorilla trekking adventure" onClick={() => setBookingOpen(false)}>
          <div className="mx-auto my-8 max-w-2xl rounded-[2rem] border border-white/10 bg-slate-900 p-6 shadow-2xl sm:p-9" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-start justify-between gap-5">
              <div><p className="text-xs font-black uppercase tracking-[0.22em] text-sunset-gold">Trip request</p><h2 className="headline mt-2 text-3xl font-bold text-white">Book your 3-day gorilla adventure</h2></div>
              <button type="button" onClick={() => setBookingOpen(false)} className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 text-xl text-slate-300 hover:border-sunset-gold hover:text-sunset-gold" aria-label="Close booking form"><i className="ri-close-line" /></button>
            </div>

            {submitted ? (
              <div className="py-14 text-center"><i className="ri-checkbox-circle-fill text-6xl text-emerald-400" /><h3 className="headline mt-5 text-3xl font-bold text-white">Request received</h3><p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-400">Thank you. The WildMed team will confirm permit availability and contact you with the next steps.</p><button type="button" onClick={() => setBookingOpen(false)} className="mt-7 bg-sunset-gold px-7 py-3 font-black text-slate-950">Close</button></div>
            ) : (
              <form onSubmit={submitBooking} className="mt-8 grid gap-5 sm:grid-cols-2">
                <input type="hidden" name="safari" value="3-Day Gorilla Trekking & Batwa Experience" />
                <input type="hidden" name="activityLevel" value={activityLevel} />
                <input type="hidden" name="accommodation" value={accommodation} />
                <label className="text-sm font-bold text-slate-300">Full name<input type="text" name="name" required placeholder="Enter your full name" className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 font-normal text-white outline-none focus:border-sunset-gold" /></label>
                <label className="text-sm font-bold text-slate-300">Email address<input type="email" name="email" required placeholder="Enter your email" className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 font-normal text-white outline-none focus:border-sunset-gold" /></label>
                <label className="text-sm font-bold text-slate-300">Preferred travel date<input type="date" name="date" required className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 font-normal text-white outline-none focus:border-sunset-gold" /></label>
                <label className="text-sm font-bold text-slate-300">Group size: <span className="text-sunset-gold">{groupSize} person{groupSize === 1 ? "" : "s"}</span><input type="range" min="1" max="6" value={groupSize} onChange={(event) => setGroupSize(Number(event.target.value))} name="groupSize" className="mt-4 w-full accent-[#FFB830]" /></label>
                <fieldset className="sm:col-span-2"><legend className="text-sm font-bold text-slate-300">Activity level preference</legend><div className="mt-3 grid grid-cols-3 gap-2">{["Moderate", "Intermediate", "Advanced"].map((level) => <button type="button" key={level} onClick={() => setActivityLevel(level)} className={`rounded-xl border px-3 py-3 text-xs font-bold transition ${activityLevel === level ? "border-sunset-gold bg-sunset-gold text-slate-950" : "border-white/10 bg-slate-950 text-slate-300 hover:border-sunset-gold/60"}`}>{level}</button>)}</div></fieldset>
                <label className="text-sm font-bold text-slate-300 sm:col-span-2">Accommodation level<select value={accommodation} onChange={(event) => setAccommodation(event.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 font-normal text-white outline-none focus:border-sunset-gold"><option>Mid-range Lodges (Included)</option><option>Upgrade to Luxury (+$500)</option></select></label>
                <label className="text-sm font-bold text-slate-300 sm:col-span-2">Special requests<textarea name="requests" rows={3} placeholder="Dietary needs, photography focus, cultural interests..." className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-slate-950 px-4 py-3 font-normal text-white outline-none focus:border-sunset-gold" /></label>
                <button type="submit" disabled={submitting} className="bg-sunset-gold px-7 py-4 font-black text-slate-950 transition hover:bg-white disabled:opacity-50 sm:col-span-2">{submitting ? "Submitting request..." : "Submit booking request"}</button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

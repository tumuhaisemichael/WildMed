import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const destinations = [
  {
    name: 'Queen Elizabeth National Park',
    desc: "Uganda's most popular savanna park with tree-climbing lions and diverse ecosystems",
    price: '1,750',
    rating: '4.8',
    img: '/img/bwinda (3).png',
    href: '/Uganda-Adventures',
    tag: 'Uganda',
  },
  {
    name: 'Murchison Falls National Park',
    desc: 'Home to the powerful Murchison Falls where the Nile forces through a narrow gorge',
    price: '1,680',
    rating: '4.7',
    img: '/img/bwinda (2).png',
    href: '/Uganda-Adventures',
    tag: 'Uganda',
  },
  {
    name: 'Bwindi Impenetrable Forest',
    desc: 'UNESCO World Heritage Site and home to endangered mountain gorillas',
    price: '3,200',
    rating: '4.9',
    img: '/img/bwinda (1).png',
    href: '/Ugandan-3Days',
    tag: 'Gorillas',
  },
  {
    name: 'Kibale National Park',
    desc: 'Renowned for chimpanzee tracking, this rich rainforest offers exceptional primate encounters.',
    price: '1,490',
    rating: '4.8',
    img: '/img/home/kibale.webp',
    href: '/Ugandan-5Days',
    tag: 'Primates',
  },
  {
    name: 'Kidepo National Park',
    desc: 'A remote and wild park known for vast plains, rugged valleys, and rare wildlife species.',
    price: '1,980',
    rating: '4.9',
    img: '/img/home/kidapo.webp',
    href: '/Uganda-Adventures',
    tag: 'Wildlife',
  },
  {
    name: 'Lake Mburo National Park',
    desc: 'Ideal for short safaris with zebras, giraffes, and scenic boat trips.',
    price: '980',
    rating: '4.6',
    img: '/img/home/lakemburo.webp',
    href: '/Ugandan-4Days',
    tag: 'Scenic',
  }
];

const FeaturedDestinations = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-sunset-gold text-sm font-semibold uppercase tracking-widest mb-3">
            East Africa's Finest
          </span>
          <h2 className="headline text-4xl font-bold mb-4 text-white">Featured Destinations</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore the most spectacular wildlife destinations in East Africa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <div
              key={dest.name}
              className="group relative bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-sunset-brown/20 transition-all duration-500 border border-sunset-brown/20 hover:border-sunset-gold/40"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={dest.img}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Tag */}
                <span className="absolute top-4 left-4 bg-sunset-brown/80 backdrop-blur-sm text-sunset-honey text-xs font-semibold px-3 py-1 rounded-full">
                  {dest.tag}
                </span>

                {/* Rating */}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                  <i className="ri-star-fill text-sunset-gold text-sm" />
                  <span className="text-sm font-semibold text-white">{dest.rating}</span>
                </div>

                {/* Hover CTA overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link
                    href={dest.href}
                    className="bg-sunset-gold text-black px-6 py-2.5 rounded-full font-bold text-sm hover:bg-sunset-orange transition-colors shadow-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    View Package →
                  </Link>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 text-white group-hover:text-sunset-honey transition-colors">{dest.name}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">{dest.desc}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-gray-500 uppercase tracking-wide">Starting from</span>
                    <div className="text-xl font-bold text-sunset-gold">${dest.price}<span className="text-sm font-normal text-gray-500">/person</span></div>
                  </div>
                  <Link
                    href={dest.href}
                    className="inline-flex items-center gap-1 border border-sunset-gold/40 hover:border-sunset-gold text-sunset-honey hover:text-sunset-gold px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-sunset-gold/10"
                  >
                    Details <i className="ri-arrow-right-line" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link
            href="/Destinations"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-sunset-gold to-sunset-amber hover:from-sunset-amber hover:to-sunset-coral text-black px-10 py-4 rounded-full text-base font-bold transition-all duration-300 shadow-lg hover:shadow-sunset-gold/30 hover:-translate-y-0.5"
          >
            View All Destinations
            <i className="ri-arrow-right-line text-lg" />
          </Link>
          <p className="mt-4 text-xs text-gray-600 italic">*Prices subject to change based on season, availability, and exchange rates.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;

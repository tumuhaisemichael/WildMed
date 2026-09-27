import Image from "next/image";
import type { ReactNode } from "react";

export type HeroStat = {
  value: string;
  label: string;
  icon?: string;
};

type UnifiedHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  backgroundImage: string;
  mainImage?: string;
  secondaryImage?: string;
  imageAlt?: string;
  actions?: ReactNode;
  stats?: HeroStat[];
  trustText?: string;
  note?: string;
  curveClassName?: string;
};

export default function UnifiedHero({
  eyebrow,
  title,
  description,
  backgroundImage,
  mainImage = backgroundImage,
  secondaryImage = backgroundImage,
  imageAlt = "WildMed East African experience",
  actions,
  stats = [],
  trustText = "Trusted by travelers worldwide",
  note = "Travel with purpose",
  curveClassName = "text-slate-950",
}: UnifiedHeroProps) {
  return (
    <section className="immersive-hero relative isolate min-h-[780px] overflow-hidden bg-slate-950 text-white lg:min-h-[760px]">
      <Image src={backgroundImage} alt="" fill priority sizes="100vw" className="-z-30 object-cover" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/20" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/45" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_76%_43%,rgba(251,191,36,0.16),transparent_28%)]" />

      <div className="mx-auto max-w-7xl px-6 pb-32 pt-12 sm:px-8 sm:pt-14 lg:pb-28 lg:pt-16">
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_.92fr] lg:gap-10">
          <div className="relative z-10 max-w-3xl">
            <p className="mb-5 flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-sunset-gold">
              <span className="h-0.5 w-9 bg-sunset-orange" />
              {eyebrow}
            </p>
            <h1 className="headline text-5xl font-bold leading-[0.96] text-white sm:text-6xl lg:text-7xl xl:text-[5rem]">
              {title}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">{description}</p>
            {actions && <div className="mt-9 flex flex-col gap-3 sm:flex-row">{actions}</div>}
          </div>

          <div className="relative mx-auto h-[430px] w-full max-w-[560px] sm:h-[500px] lg:mx-0 lg:ml-auto">
            <div className="absolute right-0 top-[22%] h-[58%] w-[43%] rotate-[5deg] overflow-hidden rounded-[2rem] border-2 border-sunset-gold/70 bg-slate-900 shadow-2xl">
              <Image src={secondaryImage} alt="" fill sizes="(min-width:1024px) 20vw,40vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 to-transparent" />
            </div>

            <div className="absolute left-[2%] top-[4%] h-[82%] w-[70%] -rotate-[4deg] overflow-hidden rounded-[2.5rem] border-2 border-sunset-gold bg-slate-900 shadow-[0_30px_70px_rgba(0,0,0,.5)]">
              <Image src={mainImage} alt={imageAlt} fill sizes="(min-width:1024px) 32vw,70vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <p className="headline absolute bottom-7 left-7 -rotate-2 text-2xl italic text-white">More than<br /><span className="text-sunset-gold">just travel</span></p>
            </div>

            <div className="absolute left-[59%] top-0 grid h-20 w-20 place-items-center rounded-full border-4 border-slate-950 bg-sunset-orange text-3xl text-slate-950 shadow-xl sm:h-24 sm:w-24">
              <i className="ri-leaf-line" aria-hidden="true" />
            </div>

            <div className="absolute bottom-[8%] right-[1%] flex max-w-[250px] items-center gap-3 rounded-full border border-white/30 bg-[#fff7e8] px-5 py-3 text-slate-950 shadow-2xl">
              <div className="flex -space-x-2">
                {["ri-user-smile-line", "ri-user-heart-line", "ri-user-star-line"].map((icon) => <span key={icon} className="grid h-9 w-9 place-items-center rounded-full border-2 border-[#fff7e8] bg-sunset-gold text-slate-950"><i className={icon} /></span>)}
              </div>
              <span className="text-xs font-black leading-4">{trustText}</span>
            </div>

            <p className="absolute bottom-0 right-[8%] -rotate-6 text-sm font-bold italic tracking-wide text-sunset-gold sm:text-base">{note}</p>
          </div>
        </div>

        {stats.length > 0 && (
          <dl className="relative z-10 mt-9 grid max-w-5xl grid-cols-2 gap-y-6 border-t border-white/15 pt-7 sm:grid-cols-4 lg:mt-3">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3 border-white/15 pr-5 sm:border-r sm:last:border-r-0">
                <i className={`${stat.icon || "ri-star-line"} text-2xl text-sunset-gold`} aria-hidden="true" />
                <div><dt className="text-xl font-black text-white sm:text-2xl">{stat.value}</dt><dd className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-300">{stat.label}</dd></div>
              </div>
            ))}
          </dl>
        )}
      </div>

      <svg className={`absolute -bottom-px left-0 h-16 w-full sm:h-24 ${curveClassName}`} viewBox="0 0 1440 110" preserveAspectRatio="none" aria-hidden="true">
        <path fill="currentColor" d="M0,82 C180,15 360,104 570,63 C790,20 902,13 1080,58 C1230,96 1335,85 1440,52 L1440,110 L0,110 Z" />
      </svg>
    </section>
  );
}

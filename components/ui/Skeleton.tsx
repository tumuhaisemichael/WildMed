import { HTMLAttributes } from 'react';

type SkeletonProps = HTMLAttributes<HTMLDivElement>;

export function Skeleton({ className = '', ...props }: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={`animate-pulse rounded-lg bg-slate-700/70 ${className}`}
      {...props}
    />
  );
}

export function PageSkeleton() {
  return (
    <main className="min-h-screen bg-slate-950 px-5 pb-16 pt-28 sm:px-8" aria-label="Loading page" role="status">
      <div className="mx-auto max-w-7xl">
        <Skeleton className="h-3 w-36 bg-sunset-gold/30" />
        <Skeleton className="mt-6 h-12 w-full max-w-2xl sm:h-16" />
        <Skeleton className="mt-5 h-5 w-full max-w-xl" />
        <Skeleton className="mt-3 h-5 w-4/5 max-w-lg" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[0, 1, 2].map((item) => (
            <div key={item} className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900 p-5">
              <Skeleton className="h-48 w-full rounded-2xl" />
              <Skeleton className="mt-6 h-5 w-3/5" />
              <Skeleton className="mt-3 h-4 w-full" />
              <Skeleton className="mt-2 h-4 w-4/5" />
            </div>
          ))}
        </div>
      </div>
      <span className="sr-only">Loading WildMed</span>
    </main>
  );
}

export function ReviewCardSkeleton() {
  return (
    <article className="relative mt-2 bg-[#fff7e8] px-6 pb-7 pt-8 shadow-xl" aria-hidden="true">
      <span className="absolute -top-3 left-1/2 h-5 w-5 -translate-x-1/2 rounded-full bg-sunset-gold/50" />
      <div className="flex justify-between gap-3"><Skeleton className="h-6 w-28 bg-slate-300" /><Skeleton className="h-5 w-20 bg-sunset-gold/35" /></div>
      <Skeleton className="mt-3 h-4 w-24 bg-slate-300" />
      <Skeleton className="mt-7 h-4 w-full bg-slate-300" />
      <Skeleton className="mt-3 h-4 w-11/12 bg-slate-300" />
      <Skeleton className="mt-3 h-4 w-3/4 bg-slate-300" />
    </article>
  );
}

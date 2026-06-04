"use client";

import Link from "next/link";

export default function RootError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-6 py-16">
      <div className="max-w-xl text-center rounded-3xl border border-slate-700 bg-slate-900/90 p-10 shadow-2xl shadow-slate-900/50">
        <h1 className="text-4xl font-bold text-sunset-orange mb-4">Something went wrong</h1>
        <p className="text-lg text-slate-300 mb-6">An unexpected error occurred while loading this page.</p>
        <pre className="mb-6 overflow-x-auto rounded-lg bg-slate-800 p-4 text-left text-sm text-slate-200">{error.message}</pre>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center rounded-full bg-sunset-gold px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sunset-amber"
          >
            Try again
          </button>
          <Link href="/" className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:border-sunset-gold hover:text-sunset-gold">
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
}

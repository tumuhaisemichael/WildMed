import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-6 py-16">
      <div className="max-w-lg text-center rounded-3xl border border-slate-700 bg-slate-900/90 p-10 shadow-2xl shadow-slate-900/50">
        <h1 className="text-4xl font-bold text-sunset-orange mb-4">Page not found</h1>
        <p className="text-lg text-slate-300 mb-6">The page you are looking for does not exist or may have moved.</p>
        <Link href="/" className="inline-flex items-center justify-center rounded-full bg-sunset-gold px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sunset-amber">
          Return home
        </Link>
      </div>
    </div>
  );
}

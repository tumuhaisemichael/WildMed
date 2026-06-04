export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
      <div className="animate-pulse rounded-3xl border border-slate-700 bg-slate-900/90 p-10 text-center shadow-2xl shadow-slate-900/50">
        <div className="mb-4 text-2xl font-semibold text-sunset-gold">Loading WildMed...</div>
        <div className="h-2.5 w-48 rounded-full bg-slate-700"></div>
      </div>
    </div>
  );
}

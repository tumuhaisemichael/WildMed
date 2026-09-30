'use client';

type FormSuccessProps = {
  title?: string;
  message?: string;
  onClose?: () => void;
  actionLabel?: string;
};

export default function FormSuccess({
  title = 'Request received',
  message = 'Thank you for reaching out. Our WildMed team will review your information and contact you with the next steps.',
  onClose,
  actionLabel = 'Done',
}: FormSuccessProps) {
  return (
    <div className="relative isolate overflow-hidden rounded-[1.75rem] border border-emerald-400/20 bg-slate-950 px-6 py-12 text-center text-white shadow-2xl sm:px-10">
      <div className="absolute left-1/2 top-0 -z-10 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/15 blur-3xl" />
      <div className="mx-auto grid h-20 w-20 place-items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 text-4xl text-emerald-400">
        <i className="ri-check-double-line" aria-hidden="true" />
      </div>
      <p className="mt-6 text-[10px] font-black uppercase tracking-[0.3em] text-sunset-gold">Successfully submitted</p>
      <h3 className="headline mt-3 text-3xl font-bold sm:text-4xl">{title}</h3>
      <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-slate-400">{message}</p>
      <div className="mx-auto mt-7 flex max-w-md items-center justify-center gap-2 border-t border-white/10 pt-5 text-xs text-slate-500">
        <i className="ri-time-line text-sunset-gold" aria-hidden="true" />
        A response usually arrives within 24 hours
      </div>
      {onClose && <button type="button" onClick={onClose} className="mt-7 rounded-xl bg-sunset-gold px-8 py-3.5 font-black text-slate-950 transition hover:bg-white">{actionLabel}</button>}
    </div>
  );
}

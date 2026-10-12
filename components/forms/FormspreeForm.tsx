'use client';

import { FormEvent, ReactNode, useState } from 'react';
import FormSuccess from './FormSuccess';
import { Skeleton } from '@/components/ui/Skeleton';

type FormspreeFormProps = {
  children: ReactNode;
  className?: string;
  formName: string;
  successTitle?: string;
  successMessage?: string;
};

export default function FormspreeForm({ children, className, formName, successTitle, successMessage }: FormspreeFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/mldlkwke', {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ form_name: formName, ...Object.fromEntries(new FormData(form)) }),
      });
      if (!response.ok) throw new Error('Submission failed');
      form.reset();
      setSubmitted(true);
    } catch (error) {
      console.error(`${formName} submission error:`, error);
      alert('There was an error submitting your request. Please try again or contact us at info@wildmedug.com.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) return <div className="bg-slate-900 p-5 sm:p-8"><FormSuccess title={successTitle} message={successMessage} onClose={() => setSubmitted(false)} actionLabel="Send another request" /></div>;

  return <form onSubmit={submit} className={`${className || ''} relative`} aria-busy={submitting}>{children}{submitting && <div className="absolute inset-0 z-20 grid place-items-center rounded-xl bg-[rgba(15,23,42,0.22)] backdrop-blur-[1px]"><div className="w-40 space-y-3"><Skeleton className="h-4 w-2/3 bg-slate-500/60" /><Skeleton className="h-10 w-full bg-slate-500/60" /></div></div>}<input type="hidden" name="submission_status" value={submitting ? 'submitting' : 'ready'} /></form>;
}

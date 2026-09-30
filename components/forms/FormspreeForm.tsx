'use client';

import { FormEvent, ReactNode, useState } from 'react';
import FormSuccess from './FormSuccess';

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

  return <form onSubmit={submit} className={className} aria-busy={submitting}>{children}<input type="hidden" name="submission_status" value={submitting ? 'submitting' : 'ready'} /></form>;
}

// Shared by every enquiry form and by /api/enquiry.
// Deliberately meaningless so browsers and password managers never auto-fill it (which would drop a real enquiry).
export const SPAM_TRAP_FIELD = 'wm_hp_x7';

export type EnquiryPayload = {
  formName: string;
  fields: Record<string, string>;
};

// Collects a form's fields, keeping every value of repeated fields (e.g. several ticked checkboxes).
export function collectFields(form: HTMLFormElement, extra: Record<string, string> = {}) {
  const fields: Record<string, string> = { ...extra };
  const data = new FormData(form);
  for (const key of Array.from(new Set(data.keys()))) {
    const values = data.getAll(key).filter((value): value is string => typeof value === 'string' && value.trim() !== '');
    if (values.length) fields[key] = values.join(', ');
  }
  return fields;
}

export async function sendEnquiry(form: HTMLFormElement, formName: string, extra?: Record<string, string>) {
  const payload: EnquiryPayload = { formName, fields: collectFields(form, extra) };
  const response = await fetch('/api/enquiry', {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!response.ok) throw new Error('Enquiry submission failed');
}

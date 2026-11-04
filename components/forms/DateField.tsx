'use client';

import { useRef, useState } from 'react';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

type DateFieldProps = {
  name: string;
  id?: string;
  required?: boolean;
  allowPast?: boolean;
  placeholder?: string;
  inputClassName?: string;
  buttonClassName?: string;
};

function toIso(year: number, month: number, day: number) {
  const date = new Date(Date.UTC(year, month - 1, day));
  if (date.getUTCFullYear() !== year || date.getUTCMonth() !== month - 1 || date.getUTCDate() !== day) return '';
  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

// Accepts 14/03/2027, 14-3-2027, 2027-03-14, 14 Mar 2027 and March 14 2027; returns YYYY-MM-DD or ''.
export function parseDate(text: string) {
  const value = text.trim();
  let match = value.match(/^(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})$/);
  if (match) return toIso(+match[1], +match[2], +match[3]);
  match = value.match(/^(\d{1,2})[-/.](\d{1,2})[-/.](\d{4})$/);
  if (match) return toIso(+match[3], +match[2], +match[1]);
  match = value.match(/^(\d{1,2})\s+([a-z]+)\.?,?\s+(\d{4})$/i) || value.match(/^([a-z]+)\.?\s+(\d{1,2}),?\s+(\d{4})$/i);
  if (match) {
    const [day, monthName] = /^\d/.test(match[1]) ? [+match[1], match[2]] : [+match[2], match[1]];
    const month = MONTHS.findIndex((name) => monthName.toLowerCase().startsWith(name.toLowerCase())) + 1;
    if (month) return toIso(+match[3], month, day);
  }
  return '';
}

function formatIso(iso: string) {
  const [year, month, day] = iso.split('-').map(Number);
  return `${day} ${MONTHS[month - 1]} ${year}`;
}

function todayIso() {
  const now = new Date();
  return toIso(now.getFullYear(), now.getMonth() + 1, now.getDate());
}

// A typed date box with a calendar button that opens the browser's native date picker.
export default function DateField({ name, id, required, allowPast = false, placeholder = 'DD/MM/YYYY', inputClassName = '', buttonClassName = '' }: DateFieldProps) {
  const textRef = useRef<HTMLInputElement>(null);
  const pickerRef = useRef<HTMLInputElement>(null);
  const [text, setText] = useState('');
  const iso = parseDate(text);

  const validate = (value: string) => {
    const parsed = parseDate(value);
    let message = '';
    if (value.trim() && !parsed) message = 'Enter a date like 14/03/2027 or pick one from the calendar.';
    else if (parsed && !allowPast && parsed < todayIso()) message = 'Please choose a date in the future.';
    textRef.current?.setCustomValidity(message);
  };

  const update = (value: string) => {
    setText(value);
    validate(value);
  };

  const openPicker = () => {
    const picker = pickerRef.current;
    if (!picker) return;
    picker.value = iso;
    try {
      picker.showPicker();
    } catch {
      picker.focus();
      picker.click();
    }
  };

  return (
    <div className="relative">
      <input
        ref={textRef}
        id={id}
        type="text"
        name={name}
        inputMode="numeric"
        autoComplete="off"
        required={required}
        placeholder={placeholder}
        value={text}
        onChange={(event) => update(event.target.value)}
        onBlur={() => iso && update(formatIso(iso))}
        className={`${inputClassName} pr-12`}
      />
      <button type="button" onClick={openPicker} aria-label="Open calendar" className={`absolute bottom-0 right-0 top-0 flex w-11 items-center justify-center text-lg transition hover:text-sunset-gold ${buttonClassName}`}>
        <i className="ri-calendar-2-line" aria-hidden="true" />
      </button>
      <input
        ref={pickerRef}
        type="date"
        tabIndex={-1}
        aria-hidden="true"
        min={allowPast ? undefined : todayIso()}
        onChange={(event) => event.target.value && update(formatIso(event.target.value))}
        className="pointer-events-none absolute bottom-0 left-0 h-px w-px opacity-0"
      />
    </div>
  );
}

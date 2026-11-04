import { SPAM_TRAP_FIELD } from '@/lib/enquiry';

// Hidden from people but filled in by most bots; the server silently drops submissions where it has a value.
export default function SpamTrap() {
  return (
    <div aria-hidden="true" className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden">
      <label>
        Leave this field empty
        <input type="text" name={SPAM_TRAP_FIELD} tabIndex={-1} autoComplete="new-password" data-lpignore="true" data-1p-ignore="true" data-bwignore="true" defaultValue="" />
      </label>
    </div>
  );
}

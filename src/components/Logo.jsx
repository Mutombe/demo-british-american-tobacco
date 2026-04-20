import React from 'react';

/**
 * Typographic BAT wordmark.
 * We intentionally do NOT use the real BAT logo artwork.
 * This is a clean typographic representation with a red accent dot.
 */
export default function Logo({ className = '', invert = false, compact = false }) {
  const primary = invert ? 'text-white' : 'text-corp-700';
  const sub = invert ? 'text-paper-200/80' : 'text-slate-500';
  return (
    <span className={`inline-flex items-baseline gap-2 leading-none select-none ${className}`}>
      <span className="inline-flex items-baseline">
        <span className={`font-display tracking-[-0.02em] font-semibold ${primary}`}>
          BAT
        </span>
        <span className="ml-[2px] text-bat-500 font-semibold">.</span>
      </span>
      {!compact && (
        <span className={`font-body text-[10px] sm:text-[11px] tracking-[0.22em] uppercase ${sub}`}>
          Zimbabwe
        </span>
      )}
    </span>
  );
}

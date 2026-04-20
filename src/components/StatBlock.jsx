import React from 'react';

export default function StatBlock({ value, label, accent = false, compact = false }) {
  return (
    <div className={compact ? 'py-4' : 'py-6 sm:py-8'}>
      <div
        className={`font-display leading-none ${compact ? 'text-3xl sm:text-4xl' : 'text-4xl sm:text-5xl lg:text-6xl'} ${
          accent ? 'text-bat-500' : 'text-corp-700'
        }`}
      >
        {value}
      </div>
      <div className="mt-3 font-mono text-[10.5px] tracking-[0.2em] uppercase text-slate-500 leading-snug">
        {label}
      </div>
    </div>
  );
}

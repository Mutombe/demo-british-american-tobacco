import React from 'react';
import { Link } from 'react-router-dom';
import {
  Leaf,
  Tree,
  ArrowsClockwise,
  UsersThree,
  ShieldCheck,
  Scales,
  ArrowUpRight,
} from '@phosphor-icons/react';

const ICONS = { Leaf, Tree, ArrowsClockwise, UsersThree, ShieldCheck, Scales };

export default function PillarCard({ pillar, href = '/sustainability' }) {
  const Icon = ICONS[pillar.icon] || Leaf;
  return (
    <Link
      to={href}
      className="block group relative bg-paper-50 border border-slate-100 card-rest p-7 sm:p-8 transition-all duration-300 hover:border-corp-600"
    >
      <div className="flex items-start justify-between mb-7">
        <span className="font-mono text-[11px] tracking-[0.22em] text-slate-400 uppercase">
          Pillar {pillar.code}
        </span>
        <span className="h-10 w-10 flex items-center justify-center bg-corp-600 text-white group-hover:bg-bat-500 transition-colors">
          <Icon size={18} weight="regular" />
        </span>
      </div>
      <h3 className="font-display text-2xl sm:text-[26px] text-corp-700 leading-tight mb-3">
        {pillar.title}
      </h3>
      <p className="text-slate-500 text-[14px] leading-relaxed mb-6">
        {pillar.short}
      </p>
      <div className="dot-rule mb-5" />
      <dl className="grid grid-cols-3 gap-3">
        {pillar.stats.slice(0, 3).map((s, i) => (
          <div key={i} className={i === 0 ? '' : 'col-rule pl-3'}>
            <dt className="font-display text-lg text-corp-700 leading-tight">{s.k}</dt>
            <dd className="mt-1 text-[10.5px] leading-snug text-slate-500">{s.v}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-7 flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-slate-400 group-hover:text-bat-500 transition-colors">
        Read more <ArrowUpRight size={12} weight="bold" />
      </div>
    </Link>
  );
}

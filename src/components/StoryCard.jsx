import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';

export default function StoryCard({ story, to = '/sustainability' }) {
  return (
    <Link
      to={to}
      className="block group"
    >
      <div className="relative overflow-hidden aspect-[4/5] bg-slate-200">
        <img
          src={story.image}
          alt={story.title}
          loading="lazy"
          onError={(e) => (e.currentTarget.style.display = 'none')}
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-x-0 top-0 p-5">
          <span className="inline-block bg-paper-50 text-corp-700 font-mono text-[10.5px] tracking-[0.2em] uppercase px-3 py-1.5">
            {story.tag}
          </span>
        </div>
      </div>
      <h3 className="mt-5 font-display text-[22px] sm:text-2xl text-corp-700 leading-snug group-hover:text-bat-600 transition-colors">
        {story.title}
      </h3>
      <p className="mt-2 text-slate-500 text-sm leading-relaxed">
        {story.excerpt}
      </p>
      <span className="mt-4 inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-bat-500">
        Read story <ArrowRight size={12} weight="bold" />
      </span>
    </Link>
  );
}

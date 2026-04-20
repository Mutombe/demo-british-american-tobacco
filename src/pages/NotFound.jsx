import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, House } from '@phosphor-icons/react';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';

export default function NotFound() {
  return (
    <PageTransition>
      <SEO
        title="Page Not Found — BAT Zimbabwe"
        description="The page you requested could not be found on BAT Zimbabwe's corporate website."
      />
      <section className="relative bg-paper-50 min-h-[75vh] flex items-center">
        <div className="paper-grain" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-20 w-full">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-bat-500 mb-5">
                Error · 404
              </p>
              <h1 className="font-display text-[72px] sm:text-[120px] lg:text-[160px] leading-[0.9] text-corp-700">
                404<span className="text-bat-500">.</span>
              </h1>
              <p className="mt-8 text-slate-600 text-[16px] leading-[1.8] max-w-xl">
                The page you requested could not be located on BAT Zimbabwe's
                corporate website. It may have been moved, archived, or the URL
                mistyped. Our navigation above or the links below will help you
                find what you're looking for.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 bg-corp-600 text-white px-7 py-3.5 text-[12px] tracking-[0.14em] uppercase hover:bg-corp-700 transition-colors"
                >
                  <House size={14} weight="bold" /> Return home
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border border-slate-700 text-slate-800 px-7 py-3.5 text-[12px] tracking-[0.14em] uppercase hover:bg-slate-800 hover:text-paper-50 transition-colors"
                >
                  Contact us <ArrowRight size={14} weight="bold" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <ul className="space-y-0 divide-y divide-slate-200 border-y border-slate-200">
                {[
                  { to: '/about', label: 'About BAT Zimbabwe' },
                  { to: '/sustainability', label: 'Sustainability' },
                  { to: '/brands', label: 'Our Brands' },
                  { to: '/careers', label: 'Careers' },
                  { to: '/newsroom', label: 'Newsroom' },
                ].map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="flex items-center justify-between py-4 text-slate-700 hover:text-bat-600 transition-colors group"
                    >
                      <span className="font-display text-xl">{l.label}</span>
                      <ArrowRight size={16} weight="bold" className="text-slate-400 group-hover:text-bat-600 group-hover:translate-x-1 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

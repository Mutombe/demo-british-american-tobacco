import React, { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { List, X, ArrowUpRight } from '@phosphor-icons/react';
import { nav, business } from '../data/siteData';
import Logo from './Logo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [loc.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      {/* Thin parent-attribution utility strip */}
      <div className="w-full bg-corp-700 text-paper-100 text-[11px] tracking-[0.08em]">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 h-8 flex items-center justify-between">
          <span className="truncate">
            A subsidiary of British American Tobacco plc
            <span className="hidden sm:inline"> · LSE: BATS</span>
          </span>
          <a
            href={business.parentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 hover:text-bat-300 transition-colors"
          >
            Visit bat.com <ArrowUpRight size={12} weight="bold" />
          </a>
        </div>
      </div>

      {/* Report bar (3-colour rule) */}
      <div className="report-bar" />

      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-paper-50/95 backdrop-blur-md border-b border-slate-200'
            : 'bg-paper-50 border-b border-slate-100'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 h-[72px] flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center group min-w-0">
            <Logo className="text-[28px] sm:text-[30px]" />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {nav.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `relative text-[13px] font-medium tracking-wide transition-colors ${
                    isActive
                      ? 'text-bat-600'
                      : 'text-slate-700 hover:text-corp-600'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-bat-500" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/careers"
              className="hidden md:inline-flex items-center gap-1.5 bg-corp-600 text-white px-4 py-2 text-[12px] tracking-[0.12em] uppercase hover:bg-corp-700 transition-colors"
            >
              Careers
            </Link>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="h-10 w-10 flex lg:hidden items-center justify-center text-slate-800"
            >
              <List size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-slate-900/50"
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute top-0 right-0 h-full w-[88%] max-w-sm bg-paper-50 flex flex-col transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 h-[72px] border-b border-slate-200">
            <Logo className="text-xl" />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="h-10 w-10 flex items-center justify-center"
            >
              <X size={22} />
            </button>
          </div>
          <nav className="flex-1 flex flex-col px-6 py-8 gap-1 overflow-y-auto">
            {nav.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `py-3.5 font-display text-2xl border-b border-slate-100 transition-colors ${
                    isActive ? 'text-bat-600' : 'text-corp-700'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="px-6 py-6 border-t border-slate-200 space-y-3">
            <a
              href={`tel:${business.phoneRaw}`}
              className="block w-full text-center bg-corp-600 text-white py-3 text-sm tracking-[0.1em] uppercase"
            >
              {business.phone}
            </a>
            <p className="text-[11px] text-slate-500 text-center leading-relaxed">
              {business.addressLine1}
              <br />
              {business.addressLine2}
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}

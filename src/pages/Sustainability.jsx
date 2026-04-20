import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Leaf,
  Tree,
  ArrowsClockwise,
  UsersThree,
  ShieldCheck,
  Scales,
  CheckCircle,
} from '@phosphor-icons/react';
import { pillars, footnotes, business } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';

const ICONS = { Leaf, Tree, ArrowsClockwise, UsersThree, ShieldCheck, Scales };

export default function Sustainability() {
  return (
    <PageTransition>
      <SEO
        title="Sustainability & ESG — BAT Zimbabwe | A Better Tomorrow"
        description="Our sustainability framework: Climate, Nature, Circularity, Communities, Harm Reduction and Governance. Verified data, audited outcomes, delivered from Harare."
      />

      {/* HERO */}
      <section className="relative bg-paper-50">
        <div className="paper-grain" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 pt-14 lg:pt-20 pb-14 lg:pb-20">
          <nav className="flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] uppercase text-slate-400 mb-10">
            <Link to="/" className="hover:text-corp-600">Home</Link>
            <span>/</span>
            <span className="text-slate-700">Sustainability</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-bat-500 mb-5">
                Sustainability · ESG framework
              </p>
              <h1 className="font-display text-[44px] sm:text-6xl lg:text-[80px] leading-[1] text-corp-700 text-balance">
                The numbers behind{' '}
                <span className="italic text-bat-500">A Better Tomorrow.</span>
              </h1>
            </div>
            <p className="lg:col-span-4 text-slate-600 text-[15px] leading-[1.75]">
              This page presents BAT Zimbabwe's sustainability commitments and
              verified performance. Group metrics appear in full in the BAT plc
              annual ESG disclosure at bat.com.
            </p>
          </div>
        </div>
      </section>

      {/* HEADLINE METRICS */}
      <section className="bg-corp-700 text-paper-100">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-16 grid grid-cols-2 lg:grid-cols-4 gap-x-6">
          {[
            { k: '-88%', v: 'Scope 1 & 2 emissions', sub: 'vs. 2020 baseline*' },
            { k: '96%', v: 'Waste diverted', sub: 'from landfill FY24' },
            { k: '2,100', v: 'Contract growers', sub: 'Mashonaland network' },
            { k: '100%', v: 'Workforce trained', sub: 'Standards of Business Conduct' },
          ].map((m, i) => (
            <div
              key={i}
              className={`py-6 ${i > 0 ? 'lg:border-l lg:border-paper-100/15 lg:pl-6' : ''}`}
            >
              <p className="font-display text-4xl sm:text-5xl leading-none text-paper-50">
                {m.k}
              </p>
              <p className="mt-3 font-mono text-[11px] tracking-[0.2em] uppercase text-bat-300">
                {m.v}
              </p>
              <p className="mt-1.5 text-[12px] text-paper-200/70">{m.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SIX PILLARS — detailed */}
      <section className="bg-paper-50">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-20 lg:py-28">
          <SectionReveal>
            <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-bat-500 mb-4">
              Six pillars · full disclosure
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] text-corp-700 max-w-3xl mb-14">
              Our framework, broken down in full.
            </h2>
          </SectionReveal>

          <div className="space-y-px bg-slate-200">
            {pillars.map((p, i) => {
              const Icon = ICONS[p.icon] || Leaf;
              return (
                <SectionReveal key={p.code} delay={i * 50}>
                  <article className="bg-paper-50 grid lg:grid-cols-12 gap-6 p-8 lg:p-12">
                    <div className="lg:col-span-3">
                      <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-slate-400 mb-3">
                        Pillar {p.code}
                      </p>
                      <div className="h-12 w-12 bg-corp-700 text-white flex items-center justify-center mb-4">
                        <Icon size={22} />
                      </div>
                      <h3 className="font-display text-3xl text-corp-700 leading-tight">
                        {p.title}
                      </h3>
                    </div>
                    <div className="lg:col-span-5">
                      <p className="font-display italic text-xl text-bat-600 mb-4">
                        {p.short}
                      </p>
                      <p className="text-slate-600 text-[14.5px] leading-[1.8]">
                        {p.body}
                      </p>
                    </div>
                    <div className="lg:col-span-4 lg:col-rule lg:pl-8">
                      <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-slate-400 mb-5">
                        Progress metrics
                      </p>
                      <ul className="space-y-4">
                        {p.stats.map((s, j) => (
                          <li key={j} className="flex items-baseline gap-4 border-b border-slate-100 pb-3">
                            <span className="font-display text-2xl text-bat-500 min-w-[80px]">
                              {s.k}
                            </span>
                            <span className="text-[13px] text-slate-600 leading-snug">
                              {s.v}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </SectionReveal>
              );
            })}
          </div>

          <p className="mt-6 text-[11px] text-slate-400 font-mono tracking-wide max-w-3xl">
            {footnotes.emissions}
          </p>
        </div>
      </section>

      {/* COMMITMENTS CHECKLIST */}
      <section className="bg-paper-100">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-5">
              <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-bat-500 mb-4">
                Our commitments
              </p>
              <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] text-corp-700 text-balance">
                What we have signed up to — publicly, and with timelines.
              </h2>
              <p className="mt-6 text-slate-600 text-[15px] leading-[1.8]">
                These are live commitments to our stakeholders and to our
                parent company's plc-level ESG disclosure. Progress is
                reviewed quarterly by the BAT Zimbabwe leadership team and
                reported upward into Group assurance.
              </p>
            </div>
            <div className="lg:col-span-7">
              <ul className="space-y-0 divide-y divide-slate-200 border-y border-slate-200">
                {[
                  ['2030', 'Carbon neutral across Scope 1 and 2 operations'],
                  ['2035', 'Net zero across full value chain (Group)'],
                  ['2025', 'Elimination of single-use plastic in packaging'],
                  ['2026', '50% female representation in management'],
                  ['Ongoing', 'Zero deforestation in contract leaf supply'],
                  ['Ongoing', '100% renewable purchased electricity on site'],
                  ['Annual', 'Independent assurance of ESG data'],
                ].map(([y, t], i) => (
                  <li key={i} className="flex items-start gap-5 py-4">
                    <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-bat-500 min-w-[72px] pt-1">
                      {y}
                    </span>
                    <CheckCircle size={18} weight="regular" className="text-corp-600 mt-1 shrink-0" />
                    <span className="text-slate-700 text-[14.5px] leading-relaxed">
                      {t}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-paper-100">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-20 text-center">
          <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] max-w-3xl mx-auto text-balance">
            Engage with our sustainability team.
          </h2>
          <p className="mt-6 text-paper-200/80 max-w-2xl mx-auto text-[15px] leading-relaxed">
            For detailed ESG data, community partnership enquiries or press
            requests, contact our Corporate Affairs office in Harare.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`mailto:${business.email}`}
              className="inline-flex items-center gap-2 bg-bat-500 text-white px-7 py-3.5 text-[12px] tracking-[0.14em] uppercase hover:bg-bat-600"
            >
              {business.email} <ArrowRight size={14} weight="bold" />
            </a>
            <Link
              to="/newsroom"
              className="inline-flex items-center gap-2 border border-paper-100/60 px-7 py-3.5 text-[12px] tracking-[0.14em] uppercase hover:bg-paper-100 hover:text-corp-700 transition-colors"
            >
              Read newsroom
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

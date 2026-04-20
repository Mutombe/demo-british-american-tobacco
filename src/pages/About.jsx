import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Buildings, UsersThree } from '@phosphor-icons/react';
import { business, history, leadership } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import StatBlock from '../components/StatBlock';

export default function About() {
  return (
    <PageTransition>
      <SEO
        title="About BAT Zimbabwe — Operations, Heritage & Leadership"
        description="BAT Zimbabwe has operated since 1936 as a subsidiary of British American Tobacco plc. Meet the leadership, read our heritage and understand our Harare operations."
      />

      {/* HERO */}
      <section className="relative bg-paper-50">
        <div className="paper-grain" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 pt-14 lg:pt-20 pb-14 lg:pb-20">
          <nav className="flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] uppercase text-slate-400 mb-10">
            <Link to="/" className="hover:text-corp-600">Home</Link>
            <span>/</span>
            <span className="text-slate-700">About</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-end">
            <div className="lg:col-span-8">
              <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-bat-500 mb-5">
                About BAT Zimbabwe
              </p>
              <h1 className="font-display text-[44px] sm:text-6xl lg:text-[80px] leading-[1] text-corp-700 text-balance">
                Operating in Zimbabwe for{' '}
                <span className="italic text-bat-500">nine decades.</span>
              </h1>
            </div>
            <p className="lg:col-span-4 text-slate-600 text-[15px] leading-[1.75] text-pretty">
              A subsidiary of British American Tobacco plc — one of the world's
              leading consumer goods companies, listed on the London Stock
              Exchange, with operations in more than 180 markets.
            </p>
          </div>
        </div>
      </section>

      {/* KEY FACTS */}
      <section className="bg-corp-700 text-paper-100">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-14 grid grid-cols-2 lg:grid-cols-4 gap-x-6 divide-y sm:divide-y-0 divide-paper-100/15 lg:divide-x lg:divide-paper-100/15">
          {[
            ['1936', 'operating in Zimbabwe'],
            ['350+', 'direct employees'],
            ['2,100', 'contracted growers'],
            ['1', 'listed parent (LSE: BATS)'],
          ].map(([k, v], i) => (
            <div key={i} className={`py-6 ${i > 0 ? 'lg:pl-6' : ''}`}>
              <p className="font-display text-4xl sm:text-5xl text-paper-50 leading-none">
                {k}
              </p>
              <p className="mt-3 font-mono text-[10.5px] tracking-[0.2em] uppercase text-paper-300/70">
                {v}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* HERITAGE TIMELINE */}
      <section className="bg-paper-50">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-20 lg:py-28">
          <SectionReveal>
            <div className="grid lg:grid-cols-12 gap-10 mb-14">
              <div className="lg:col-span-5">
                <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-bat-500 mb-4">
                  Heritage
                </p>
                <h2 className="font-display text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] text-corp-700 text-balance">
                  Nine decades, quietly documented.
                </h2>
              </div>
              <p className="lg:col-span-6 lg:col-start-7 text-slate-600 text-[15px] leading-[1.8]">
                The story of BAT in Zimbabwe is a story of adapting to every
                chapter of the country's recent history — while keeping the
                same standards, the same discipline and the same focus on the
                people who do the work.
              </p>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200">
            {history.map((h, i) => (
              <SectionReveal key={i} delay={i * 40}>
                <div className="h-full bg-paper-50 p-7">
                  <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-bat-500 mb-3">
                    Year · {h.year}
                  </p>
                  <p className="font-display text-[22px] text-corp-700 leading-[1.3]">
                    {h.text}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* OPERATIONS */}
      <section className="bg-paper-100">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <SectionReveal>
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                  <img
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80"
                    alt="Corporate boardroom used for BAT Zimbabwe operations reviews"
                    loading="lazy"
                    onError={(e) => (e.currentTarget.style.display = 'none')}
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                </div>
              </SectionReveal>
            </div>
            <div className="lg:col-span-6">
              <SectionReveal delay={100}>
                <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-bat-500 mb-4">
                  Operations
                </p>
                <h2 className="font-display text-4xl sm:text-5xl leading-[1.08] text-corp-700">
                  Simon Mazorodze Road, Harare.
                </h2>
                <p className="mt-6 text-slate-600 text-[15px] leading-[1.8]">
                  Our principal site is a 12-hectare industrial and
                  administrative complex on Simon Mazorodze Road, south of
                  Harare's CBD. It houses primary manufacturing, quality
                  laboratories, a warehouse distribution hub and our corporate
                  offices. Since 2023, a 1.2 megawatt rooftop solar array has
                  supplied approximately a third of the site's daytime load.
                </p>
                <dl className="mt-8 grid grid-cols-2 gap-6">
                  <div>
                    <dt className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-slate-500 mb-1.5">Site area</dt>
                    <dd className="font-display text-2xl text-corp-700">12 ha</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-slate-500 mb-1.5">Rooftop solar</dt>
                    <dd className="font-display text-2xl text-corp-700">1.2 MW</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-slate-500 mb-1.5">Certifications</dt>
                    <dd className="font-display text-xl text-corp-700">ISO 45001 · 14001</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-slate-500 mb-1.5">Workforce</dt>
                    <dd className="font-display text-2xl text-corp-700">350+</dd>
                  </div>
                </dl>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="bg-paper-50">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-20 lg:py-28">
          <SectionReveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-10 border-b border-slate-200 mb-14">
              <div>
                <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-bat-500 mb-4">
                  Leadership team
                </p>
                <h2 className="font-display text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] text-corp-700 max-w-2xl">
                  Meet the people accountable for BAT Zimbabwe.
                </h2>
              </div>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {leadership.map((p, i) => (
              <SectionReveal key={p.name} delay={i * 60}>
                <div>
                  <div className="relative aspect-[4/5] overflow-hidden bg-slate-200 mb-5">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      onError={(e) => (e.currentTarget.style.display = 'none')}
                      className="absolute inset-0 h-full w-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <p className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-bat-500 mb-1.5">
                    {p.role}
                  </p>
                  <h3 className="font-display text-2xl text-corp-700 leading-tight">
                    {p.name}
                  </h3>
                  <p className="mt-3 text-slate-500 text-[13.5px] leading-relaxed">
                    {p.bio}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-corp-700 text-paper-100">
        <img
          src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&w=1600&q=80"
          alt=""
          loading="lazy"
          onError={(e) => (e.currentTarget.style.display = 'none')}
          className="absolute inset-0 h-full w-full object-cover object-center opacity-20"
        />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-20 text-center">
          <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] max-w-3xl mx-auto text-balance">
            A FTSE 100 parent. A Zimbabwean team.
          </h2>
          <p className="mt-6 text-paper-200/90 max-w-2xl mx-auto text-[15px] leading-relaxed">
            Explore our sustainability agenda or take the first step toward a
            career with us.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/sustainability"
              className="inline-flex items-center gap-2 bg-bat-500 text-white px-7 py-3.5 text-[12px] tracking-[0.14em] uppercase hover:bg-bat-600"
            >
              Sustainability <ArrowRight size={14} weight="bold" />
            </Link>
            <Link
              to="/careers"
              className="inline-flex items-center gap-2 border border-paper-100/60 text-paper-100 px-7 py-3.5 text-[12px] tracking-[0.14em] uppercase hover:bg-paper-100 hover:text-corp-700 transition-colors"
            >
              View careers
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

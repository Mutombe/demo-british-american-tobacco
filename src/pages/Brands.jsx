import React from 'react';
import { Link } from 'react-router-dom';
import { Info, ShieldCheck, ArrowUpRight } from '@phosphor-icons/react';
import { brandsIntro, brandsSegments, business } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';

export default function Brands() {
  return (
    <PageTransition>
      <SEO
        title="Our Brands — Corporate Portfolio Overview | BAT Zimbabwe"
        description="BAT plc operates a multi-category portfolio across combustibles and new-category products. This page provides a regulatory-compliant overview — not consumer marketing."
      />

      <section className="relative bg-paper-50">
        <div className="paper-grain" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 pt-14 lg:pt-20 pb-14 lg:pb-20">
          <nav className="flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] uppercase text-slate-400 mb-10">
            <Link to="/" className="hover:text-corp-600">Home</Link>
            <span>/</span>
            <span className="text-slate-700">Our Brands</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-bat-500 mb-5">
                Corporate portfolio overview
              </p>
              <h1 className="font-display text-[44px] sm:text-6xl lg:text-[76px] leading-[1] text-corp-700 text-balance">
                {brandsIntro.headline}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* IMPORTANT REGULATORY NOTICE */}
      <section className="bg-bat-50 border-y border-bat-200">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-10">
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 bg-bat-500 text-white flex items-center justify-center shrink-0">
              <Info size={18} weight="bold" />
            </div>
            <div className="flex-1">
              <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-bat-700 mb-2">
                Regulatory notice
              </p>
              <p className="text-slate-700 text-[14.5px] leading-[1.75] max-w-4xl">
                {brandsIntro.body}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEGMENTS */}
      <section className="bg-paper-50">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-20 lg:py-28">
          <SectionReveal>
            <div className="pb-8 border-b border-slate-200 mb-12">
              <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-bat-500 mb-4">
                Four category groups
              </p>
              <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] text-corp-700 max-w-2xl">
                How our parent company organises its portfolio globally.
              </h2>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-px bg-slate-200">
            {brandsSegments.map((s, i) => (
              <SectionReveal key={s.name} delay={i * 60}>
                <article className="bg-paper-50 p-8 lg:p-10 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-slate-400">
                      Segment 0{i + 1}
                    </span>
                    <span className="h-8 w-8 bg-corp-700 text-paper-100 flex items-center justify-center">
                      <ShieldCheck size={14} />
                    </span>
                  </div>
                  <h3 className="font-display text-3xl text-corp-700 leading-tight mb-4">
                    {s.name}
                  </h3>
                  <p className="text-slate-600 text-[14.5px] leading-[1.8] mb-6 flex-1">
                    {s.desc}
                  </p>
                  <p className="mt-auto pt-5 border-t border-slate-200 font-mono text-[10.5px] tracking-[0.18em] uppercase text-bat-600">
                    {s.note}
                  </p>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* RESPONSIBLE MARKETING */}
      <section className="bg-corp-700 text-paper-100">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-bat-300 mb-4">
                Responsible marketing
              </p>
              <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] text-balance">
                Clear rules, every market. No exceptions.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-paper-200/90 text-[15px] leading-[1.8]">
                BAT plc operates under International Marketing Principles that
                apply to every subsidiary worldwide. These principles explicitly
                prohibit advertising that targets minors, models smoking as
                aspirational, or implies health benefits. In Zimbabwe we
                additionally comply with the Public Health (Tobacco Control)
                Regulations including plain packaging, health warnings and
                point-of-sale restrictions.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  'No advertising to anyone under the legal age of purchase',
                  'No use of models who are, or look, under 25',
                  'No claims of health, social or sexual benefits',
                  'No direct-to-consumer digital marketing in Zimbabwe',
                  'Mandatory health warnings on all regulated packaging',
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-3 pb-4 border-b border-paper-100/15">
                    <span className="font-mono text-[10.5px] tracking-[0.2em] text-bat-300 pt-1 min-w-[24px]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[14.5px] leading-relaxed text-paper-100">
                      {t}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href={business.parentUrl + 'group/about-us/our-values'}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-bat-300 font-mono text-[12px] tracking-[0.14em] uppercase hover:text-bat-200"
              >
                Read full principles at bat.com <ArrowUpRight size={14} weight="bold" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

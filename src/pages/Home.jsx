import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Buildings,
  Leaf,
  UsersThree,
  ShieldCheck,
  Handshake,
} from '@phosphor-icons/react';
import {
  hero,
  pillars,
  stories,
  business,
  stakeholders,
  footnotes,
} from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import PillarCard from '../components/PillarCard';
import StatBlock from '../components/StatBlock';
import StoryCard from '../components/StoryCard';

const STAKEHOLDER_ICONS = {
  Newspaper: Buildings,
  Briefcase: UsersThree,
  Handshake: Handshake,
  EnvelopeSimple: ShieldCheck,
};

export default function Home() {
  return (
    <PageTransition>
      <SEO
        title="BAT Zimbabwe — A Better Tomorrow, Made Here | British American Tobacco"
        description="BAT Zimbabwe is a subsidiary of British American Tobacco plc, committed to sustainability, responsible operations and community investment in Zimbabwe since 1936."
      />

      {/* =============== HERO =============== */}
      <section className="relative bg-paper-50 overflow-hidden">
        <div className="paper-grain" />

        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 pt-12 lg:pt-20 pb-12 lg:pb-20">
          {/* Eyebrow row — plc report style */}
          <div className="flex items-center justify-between pb-6 mb-10 border-b border-slate-200">
            <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-slate-500">
              {hero.eyebrow}
            </p>
            <p className="hidden sm:block font-mono text-[11px] tracking-[0.22em] uppercase text-slate-400">
              Corporate report · {new Date().getFullYear()}
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <h1 className="font-display text-[44px] sm:text-6xl lg:text-[84px] leading-[0.98] text-corp-700 text-balance">
                {hero.headline}
                <span className="block italic text-bat-500 mt-1">
                  {hero.headlineAccent}
                </span>
              </h1>

              <p className="mt-8 text-slate-600 text-[16px] lg:text-[17px] leading-[1.7] max-w-xl text-pretty">
                {hero.sub}
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  to={hero.ctaPrimary.to}
                  className="inline-flex items-center justify-center gap-2 bg-corp-600 text-white px-7 py-3.5 text-[12px] tracking-[0.14em] uppercase hover:bg-corp-700 transition-colors"
                >
                  {hero.ctaPrimary.label}
                  <ArrowRight size={14} weight="bold" />
                </Link>
                <Link
                  to={hero.ctaSecondary.to}
                  className="inline-flex items-center justify-center gap-2 border border-slate-700 text-slate-800 px-7 py-3.5 text-[12px] tracking-[0.14em] uppercase hover:bg-slate-800 hover:text-paper-50 transition-colors"
                >
                  {hero.ctaSecondary.label}
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-200">
                <img
                  src={hero.image}
                  alt={hero.imageAlt}
                  loading="eager"
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-corp-900/80 to-transparent">
                  <p className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-paper-200">
                    Harare · Operating since 1936
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Metric strip — plc annual-report flourish */}
          <div className="mt-14 lg:mt-20 border-t border-slate-200">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6">
              {hero.metrics.map((m, i) => (
                <div
                  key={i}
                  className={`py-6 sm:py-8 ${
                    i > 0 ? 'lg:border-l lg:border-slate-200 lg:pl-6' : ''
                  } ${i > 1 ? '' : 'border-b lg:border-b-0 border-slate-200'}`}
                >
                  <StatBlock value={m.value} label={m.label} accent={i === 2} />
                </div>
              ))}
            </div>
            <p className="text-[10.5px] text-slate-400 pb-6 font-mono tracking-wide">
              {footnotes.emissions}
            </p>
          </div>
        </div>
      </section>

      {/* =============== PURPOSE STATEMENT =============== */}
      <section className="relative bg-corp-700 text-paper-100 overflow-hidden">
        <div className="data-grid absolute inset-0 opacity-[0.2]" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-20 lg:py-28">
          <SectionReveal>
            <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-bat-300 mb-6">
              Our purpose
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance max-w-4xl">
              To build{' '}
              <em className="text-bat-300 not-italic font-display">
                A Better Tomorrow™
              </em>{' '}
              by reducing the health impact of our business — and by running a
              resilient, respected company rooted in Zimbabwe.
            </h2>
            <div className="mt-14 grid md:grid-cols-3 gap-8 lg:gap-12 border-t border-paper-100/20 pt-10">
              <div>
                <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-paper-300/70 mb-3">
                  Responsible
                </p>
                <p className="text-paper-200/90 text-sm leading-relaxed">
                  Every decision — from procurement to marketing to employment
                  — is anchored to BAT plc's Standards of Business Conduct and
                  Zimbabwe's regulatory framework.
                </p>
              </div>
              <div className="md:col-rule md:pl-8">
                <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-paper-300/70 mb-3">
                  Local
                </p>
                <p className="text-paper-200/90 text-sm leading-relaxed">
                  350+ direct employees. 2,100+ contracted growers. Nearly US$5m
                  in community investment last year. Our operations are a
                  permanent part of Zimbabwe's economic fabric.
                </p>
              </div>
              <div className="md:col-rule md:pl-8">
                <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-paper-300/70 mb-3">
                  Transparent
                </p>
                <p className="text-paper-200/90 text-sm leading-relaxed">
                  All material non-financial claims are independently assured.
                  Our data feeds the BAT plc Group CDP, DJSI and ISSB-aligned
                  annual reporting cycle.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* =============== SUSTAINABILITY PILLARS =============== */}
      <section className="relative bg-paper-50">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-20 lg:py-28">
          <SectionReveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-10 border-b border-slate-200">
              <div>
                <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-bat-500 mb-4">
                  Sustainability · Six pillars
                </p>
                <h2 className="font-display text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] text-corp-700 text-balance max-w-2xl">
                  The agenda we deliver against, locally.
                </h2>
              </div>
              <Link
                to="/sustainability"
                className="inline-flex items-center gap-2 text-[12px] tracking-[0.14em] uppercase text-bat-600 hover:text-bat-700"
              >
                Full framework <ArrowUpRight size={14} weight="bold" />
              </Link>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {pillars.map((p, i) => (
              <SectionReveal key={p.code} delay={i * 60}>
                <PillarCard pillar={p} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =============== FEATURE BAND — A BETTER TOMORROW =============== */}
      <section className="relative bg-paper-100 overflow-hidden">
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <SectionReveal>
                <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-bat-500 mb-4">
                  Feature · Building a smokeless world
                </p>
                <h2 className="font-display text-4xl sm:text-5xl leading-[1.08] text-corp-700 text-balance">
                  Our parent company is actively migrating consumers away from
                  cigarettes.
                </h2>
                <p className="mt-6 text-slate-600 text-[15.5px] leading-[1.75] max-w-xl">
                  BAT plc is investing more than £2.7 billion in research and
                  development of new-category alternatives — vapour, heated
                  products and modern oral nicotine. Globally, 27.2 million
                  adult consumers now use these alternatives instead of
                  combustible cigarettes. Our role in Zimbabwe is to uphold the
                  same standards of conduct, safety and quality that underpin
                  that transition internationally.
                </p>
                <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
                  {[
                    ['£2.7bn', 'Group R&D'],
                    ['27.2m', 'new-category consumers'],
                    ['2035', 'Group milestone'],
                  ].map(([k, v], i) => (
                    <div key={i}>
                      <p className="font-display text-3xl text-bat-500 leading-none">{k}</p>
                      <p className="mt-1.5 font-mono text-[10.5px] tracking-[0.18em] uppercase text-slate-500">
                        {v}
                      </p>
                    </div>
                  ))}
                </div>
              </SectionReveal>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <SectionReveal delay={120}>
                <div className="relative aspect-[5/4] overflow-hidden bg-slate-200">
                  <img
                    src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&w=1600&q=80"
                    alt="Modern office environment reflecting BAT's corporate standards"
                    loading="lazy"
                    onError={(e) => (e.currentTarget.style.display = 'none')}
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* =============== STORIES =============== */}
      <section className="relative bg-paper-50">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-20 lg:py-28">
          <SectionReveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-10 border-b border-slate-200">
              <div>
                <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-bat-500 mb-4">
                  Stories from Harare
                </p>
                <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] text-corp-700 max-w-2xl">
                  Quietly reshaping what we do, and how we do it.
                </h2>
              </div>
              <Link
                to="/newsroom"
                className="inline-flex items-center gap-2 text-[12px] tracking-[0.14em] uppercase text-bat-600 hover:text-bat-700"
              >
                Visit newsroom <ArrowUpRight size={14} weight="bold" />
              </Link>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-10 lg:gap-12 mt-12">
            {stories.map((s, i) => (
              <SectionReveal key={s.slug} delay={i * 90}>
                <StoryCard story={s} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =============== STAKEHOLDER ROUTER =============== */}
      <section className="relative bg-slate-900 text-paper-100 overflow-hidden">
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-20 lg:py-24">
          <SectionReveal>
            <div className="grid lg:grid-cols-12 gap-10 items-end pb-10 border-b border-paper-100/15">
              <div className="lg:col-span-7">
                <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-bat-300 mb-4">
                  Talk to the right team
                </p>
                <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] text-balance">
                  Four doors in.
                </h2>
              </div>
              <p className="lg:col-span-5 text-paper-200/80 text-[15px] leading-relaxed">
                BAT Zimbabwe communicates with distinct stakeholder audiences
                through dedicated channels. Choose the route that matches your
                enquiry — we route faster that way.
              </p>
            </div>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px mt-10 bg-paper-100/10">
            {stakeholders.map((s, i) => {
              const Icon = STAKEHOLDER_ICONS[s.icon] || ShieldCheck;
              return (
                <SectionReveal key={s.audience} delay={i * 50}>
                  <a
                    href={`mailto:${s.email}`}
                    className="block h-full bg-slate-900 hover:bg-corp-700 transition-colors p-8 group"
                  >
                    <Icon size={22} className="text-bat-400 mb-6" />
                    <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-paper-300/70 mb-2">
                      {s.audience}
                    </p>
                    <p className="font-display text-lg text-paper-100 break-all group-hover:text-bat-300 transition-colors">
                      {s.email}
                    </p>
                    <p className="mt-3 text-[12.5px] text-paper-200/70 leading-relaxed">
                      {s.note}
                    </p>
                  </a>
                </SectionReveal>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[12.5px] text-paper-200/70">
            <p>
              Registered office: {business.addressLine1}, {business.city}.
            </p>
            <p>
              Switchboard: <a href={`tel:${business.phoneRaw}`} className="text-bat-300 hover:underline">{business.phone}</a>
            </p>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

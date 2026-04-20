import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  MapPin,
  Clock,
  ArrowUpRight,
  Target,
  Heart,
  Lightbulb,
  UsersThree,
} from '@phosphor-icons/react';
import { roles, careersIntro, business } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';

const DEPT_FILTERS = ['All', 'Marketing', 'Operations', 'Finance', 'Trade Marketing', 'Corporate Affairs'];

export default function Careers() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? roles : roles.filter((r) => r.dept === filter);

  return (
    <PageTransition>
      <SEO
        title="Careers at BAT Zimbabwe — Global careers, built in Harare"
        description="Explore open roles and graduate programmes at BAT Zimbabwe, the Zimbabwean subsidiary of British American Tobacco plc — a FTSE 100 employer of 46,000 people worldwide."
      />

      {/* HERO */}
      <section className="relative bg-paper-50">
        <div className="paper-grain" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 pt-14 lg:pt-20 pb-14 lg:pb-20">
          <nav className="flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] uppercase text-slate-400 mb-10">
            <Link to="/" className="hover:text-corp-600">Home</Link>
            <span>/</span>
            <span className="text-slate-700">Careers</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-bat-500 mb-5">
                Careers
              </p>
              <h1 className="font-display text-[44px] sm:text-6xl lg:text-[80px] leading-[1] text-corp-700 text-balance">
                {careersIntro.headline}
              </h1>
            </div>
            <p className="lg:col-span-4 text-slate-600 text-[15px] leading-[1.75]">
              {careersIntro.body}
            </p>
          </div>
        </div>
      </section>

      {/* CULTURE QUADS */}
      <section className="bg-corp-700 text-paper-100">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-16 lg:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {[
              { icon: Target, label: 'Purpose', text: 'Real work on A Better Tomorrow.' },
              { icon: Lightbulb, label: 'Innovation', text: 'Access to global R&D labs.' },
              { icon: UsersThree, label: 'People', text: 'DE&I council, mentoring circles.' },
              { icon: Heart, label: 'Wellbeing', text: 'Healthcare, parental leave, flex.' },
            ].map((c, i) => (
              <div key={i} className={i > 0 ? 'md:border-l md:border-paper-100/15 md:pl-6' : ''}>
                <c.icon size={24} className="text-bat-300 mb-5" />
                <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-paper-300/70 mb-2">
                  {c.label}
                </p>
                <p className="font-display text-2xl leading-tight text-paper-50">
                  {c.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS BULLETS */}
      <section className="bg-paper-100">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-16 lg:py-20">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-bat-500 mb-4">
                What we offer
              </p>
              <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] text-corp-700 text-balance">
                The package behind the FTSE badge.
              </h2>
            </div>
            <ul className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-slate-200">
              {careersIntro.bullets.map((b, i) => (
                <li key={i} className="bg-paper-100 p-6">
                  <span className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-bat-500">
                    0{i + 1}
                  </span>
                  <p className="mt-3 text-slate-700 text-[14.5px] leading-relaxed">
                    {b}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* OPEN ROLES */}
      <section className="bg-paper-50">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-20 lg:py-24">
          <SectionReveal>
            <div className="pb-8 border-b border-slate-200 mb-10">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                <div>
                  <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-bat-500 mb-4">
                    Open roles · {filtered.length} position{filtered.length === 1 ? '' : 's'}
                  </p>
                  <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] text-corp-700">
                    Currently hiring.
                  </h2>
                </div>
              </div>

              {/* Filter */}
              <div className="mt-8 flex flex-wrap gap-2">
                {DEPT_FILTERS.map((d) => (
                  <button
                    key={d}
                    onClick={() => setFilter(d)}
                    className={`px-4 py-2 text-[11.5px] tracking-[0.14em] uppercase transition-colors ${
                      filter === d
                        ? 'bg-corp-700 text-paper-50'
                        : 'bg-paper-100 text-slate-600 hover:bg-paper-200'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
          </SectionReveal>

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {filtered.map((r, i) => (
              <SectionReveal key={r.id} delay={i * 40}>
                <a
                  href={`mailto:${business.emailCareers}?subject=${encodeURIComponent(`Application — ${r.title}`)}&body=${encodeURIComponent(`Dear BAT Zimbabwe recruitment team,\n\nI would like to apply for the ${r.title} role.\n\n[Attach CV and cover letter]\n\nKind regards,`)}`}
                  className="group grid lg:grid-cols-12 gap-6 py-7 lg:py-9 items-center hover:bg-paper-100 transition-colors px-5 -mx-5"
                >
                  <div className="lg:col-span-6">
                    <p className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-bat-500 mb-2">
                      {r.dept}
                    </p>
                    <h3 className="font-display text-[26px] sm:text-3xl text-corp-700 leading-tight group-hover:text-bat-600 transition-colors">
                      {r.title}
                    </h3>
                    <p className="mt-3 text-slate-600 text-[14px] leading-relaxed max-w-2xl">
                      {r.summary}
                    </p>
                  </div>

                  <div className="lg:col-span-5 grid grid-cols-3 gap-4">
                    <div>
                      <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-slate-400 mb-1">
                        Location
                      </p>
                      <p className="text-[13px] text-slate-700 flex items-center gap-1.5">
                        <MapPin size={13} className="text-bat-500" /> {r.location}
                      </p>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-slate-400 mb-1">
                        Type
                      </p>
                      <p className="text-[13px] text-slate-700 flex items-center gap-1.5">
                        <Clock size={13} className="text-bat-500" /> {r.type}
                      </p>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-slate-400 mb-1">
                        Experience
                      </p>
                      <p className="text-[13px] text-slate-700">{r.experience}</p>
                    </div>
                  </div>

                  <div className="lg:col-span-1 flex lg:justify-end">
                    <span className="h-11 w-11 flex items-center justify-center bg-corp-700 text-paper-50 group-hover:bg-bat-500 transition-colors">
                      <ArrowUpRight size={16} weight="bold" />
                    </span>
                  </div>
                </a>
              </SectionReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-14 text-center text-slate-500 text-sm">
              No roles currently open in this department. Please check back soon.
            </p>
          )}
        </div>
      </section>

      {/* GRADUATE PROGRAMME FEATURE */}
      <section className="relative bg-corp-700 text-paper-100 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=80"
          alt=""
          loading="lazy"
          onError={(e) => (e.currentTarget.style.display = 'none')}
          className="absolute inset-0 h-full w-full object-cover object-center opacity-25"
        />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-20 lg:py-24">
          <div className="max-w-3xl">
            <GraduationCap size={40} className="text-bat-300 mb-6" />
            <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-bat-300 mb-4">
              Flagship · Global Graduate Programme 2027
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance">
              Twelve months. Four rotations. One career-defining international assignment.
            </h2>
            <p className="mt-6 text-paper-200/90 text-[15px] leading-[1.8]">
              BAT's Global Graduate Programme has been ranked a top-tier
              graduate employer across multiple African markets. The 2027
              Zimbabwe cohort will sit across Marketing, Finance, Operations
              and Digital — with a guaranteed three-month international rotation
              in Europe, Asia or the Americas. Applications close 30 September.
            </p>
            <a
              href={`mailto:${business.emailCareers}?subject=${encodeURIComponent('Graduate Programme 2027 — Application')}`}
              className="mt-10 inline-flex items-center gap-2 bg-bat-500 text-white px-7 py-3.5 text-[12px] tracking-[0.14em] uppercase hover:bg-bat-600"
            >
              Apply by email <ArrowRight size={14} weight="bold" />
            </a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

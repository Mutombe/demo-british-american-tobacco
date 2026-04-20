import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Calendar } from '@phosphor-icons/react';
import { press, business } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';

export default function Newsroom() {
  const [featured, ...rest] = press;

  return (
    <PageTransition>
      <SEO
        title="Newsroom — Press Releases & Corporate Statements | BAT Zimbabwe"
        description="The latest corporate announcements, sustainability updates, and official statements from BAT Zimbabwe."
      />

      {/* HERO */}
      <section className="relative bg-paper-50">
        <div className="paper-grain" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 pt-14 lg:pt-20 pb-14">
          <nav className="flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] uppercase text-slate-400 mb-10">
            <Link to="/" className="hover:text-corp-600">Home</Link>
            <span>/</span>
            <span className="text-slate-700">Newsroom</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-10 items-end pb-10 border-b border-slate-200">
            <div className="lg:col-span-8">
              <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-bat-500 mb-5">
                Newsroom
              </p>
              <h1 className="font-display text-[44px] sm:text-6xl lg:text-[80px] leading-[1] text-corp-700 text-balance">
                Corporate announcements,{' '}
                <span className="italic text-bat-500">on the record.</span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-slate-600 text-[14.5px] leading-[1.75]">
                Media enquiries: <a href={`mailto:${business.emailMedia}`} className="text-bat-600 underline-offset-4 hover:underline">{business.emailMedia}</a>
              </p>
              <p className="mt-2 text-slate-600 text-[14.5px]">
                Switchboard: {business.phone}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="bg-paper-50">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 pb-14 lg:pb-20">
          <SectionReveal>
            <Link to="#" className="block group">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-7">
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      loading="lazy"
                      onError={(e) => (e.currentTarget.style.display = 'none')}
                      className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <span className="inline-block bg-bat-500 text-white font-mono text-[10.5px] tracking-[0.22em] uppercase px-3 py-1.5 mb-5">
                    Featured · {featured.category}
                  </span>
                  <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] uppercase text-slate-500 mb-4">
                    <Calendar size={13} /> {featured.date}
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] text-corp-700 group-hover:text-bat-600 transition-colors text-balance">
                    {featured.title}
                  </h2>
                  <p className="mt-5 text-slate-600 text-[15px] leading-[1.8]">
                    {featured.excerpt}
                  </p>
                  <span className="mt-7 inline-flex items-center gap-2 text-[12px] tracking-[0.14em] uppercase text-bat-600 group-hover:text-bat-700">
                    Read full release <ArrowUpRight size={13} weight="bold" />
                  </span>
                </div>
              </div>
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* REST OF ARTICLES */}
      <section className="bg-paper-100">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-20">
          <SectionReveal>
            <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-bat-500 mb-4">
              Archive
            </p>
            <h2 className="font-display text-3xl sm:text-4xl leading-[1.05] text-corp-700 mb-12">
              Earlier releases.
            </h2>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-x-10 gap-y-12">
            {rest.map((p, i) => (
              <SectionReveal key={p.slug} delay={i * 60}>
                <Link to="#" className="block group">
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-200 mb-6">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      onError={(e) => (e.currentTarget.style.display = 'none')}
                      className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex items-center gap-3 font-mono text-[10.5px] tracking-[0.2em] uppercase mb-3">
                    <span className="text-bat-500">{p.category}</span>
                    <span className="text-slate-300">·</span>
                    <span className="text-slate-500">{p.date}</span>
                  </div>
                  <h3 className="font-display text-2xl lg:text-[26px] leading-[1.2] text-corp-700 group-hover:text-bat-600 transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-slate-600 text-[14px] leading-relaxed">
                    {p.excerpt}
                  </p>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* MEDIA CTA */}
      <section className="bg-slate-900 text-paper-100">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-20 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-bat-300 mb-4">
              Media desk
            </p>
            <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] text-balance">
              Working on a story? Our media team responds within 24 hours.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <a
              href={`mailto:${business.emailMedia}`}
              className="block bg-bat-500 text-white px-7 py-4 text-[13px] tracking-[0.14em] uppercase hover:bg-bat-600 transition-colors text-center"
            >
              {business.emailMedia}
            </a>
            <p className="mt-3 text-paper-200/70 text-[12.5px] text-center">
              Monday to Friday, 08:00 – 17:00 CAT
            </p>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

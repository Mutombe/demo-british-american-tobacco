import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import {
  MapPin,
  Phone,
  EnvelopeSimple,
  Clock,
  ArrowRight,
  Newspaper,
  Briefcase,
  Handshake,
  ShieldCheck,
} from '@phosphor-icons/react';
import { business, stakeholders } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';

const ICONS = { Newspaper, Briefcase, Handshake, EnvelopeSimple, ShieldCheck };

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    audience: 'General Enquiries',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error('Please complete the required fields.');
      return;
    }
    const match = stakeholders.find((s) => s.audience === form.audience);
    const target = match?.email || business.email;
    const body = `From: ${form.name} <${form.email}>\nAudience: ${form.audience}\n\n${form.message}`;
    window.location.href = `mailto:${target}?subject=${encodeURIComponent(
      form.subject || `Enquiry — ${form.audience}`
    )}&body=${encodeURIComponent(body)}`;
    toast.success('Opening your email client…');
  };

  return (
    <PageTransition>
      <SEO
        title="Contact BAT Zimbabwe — Harare Corporate Office"
        description="Contact BAT Zimbabwe — our corporate office on Simon Mazorodze Road, Harare. Dedicated channels for media, careers, trade partners and general enquiries."
      />

      {/* HERO */}
      <section className="relative bg-paper-50">
        <div className="paper-grain" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 pt-14 lg:pt-20 pb-14">
          <nav className="flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] uppercase text-slate-400 mb-10">
            <Link to="/" className="hover:text-corp-600">Home</Link>
            <span>/</span>
            <span className="text-slate-700">Contact</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-10 items-end pb-10 border-b border-slate-200">
            <div className="lg:col-span-8">
              <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-bat-500 mb-5">
                Contact
              </p>
              <h1 className="font-display text-[44px] sm:text-6xl lg:text-[80px] leading-[1] text-corp-700 text-balance">
                Simon Mazorodze Road,{' '}
                <span className="italic text-bat-500">Harare.</span>
              </h1>
            </div>
            <p className="lg:col-span-4 text-slate-600 text-[15px] leading-[1.75]">
              Our corporate office has welcomed stakeholders, media and trade
              partners since 1964. Choose the channel that matches your
              enquiry — we route internally within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* STAKEHOLDER BLOCKS */}
      <section className="bg-paper-50">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-14 lg:py-20">
          <SectionReveal>
            <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-bat-500 mb-4">
              Stakeholder channels
            </p>
            <h2 className="font-display text-3xl sm:text-4xl leading-[1.05] text-corp-700 mb-10 max-w-2xl">
              Four dedicated teams.
            </h2>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200">
            {stakeholders.map((s, i) => {
              const Icon = ICONS[s.icon] || EnvelopeSimple;
              return (
                <SectionReveal key={s.audience} delay={i * 50}>
                  <a
                    href={`mailto:${s.email}`}
                    className="block h-full bg-paper-50 p-7 lg:p-8 card-rest hover:bg-paper-100 transition-colors group"
                  >
                    <div className="h-10 w-10 bg-corp-700 text-white flex items-center justify-center mb-5 group-hover:bg-bat-500 transition-colors">
                      <Icon size={18} />
                    </div>
                    <p className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-bat-500 mb-2">
                      {s.audience}
                    </p>
                    <p className="font-display text-[18px] text-corp-700 break-all leading-snug">
                      {s.email}
                    </p>
                    <p className="mt-3 text-slate-500 text-[12.5px] leading-relaxed">
                      {s.note}
                    </p>
                    <p className="mt-4 font-mono text-[11px] tracking-[0.14em] uppercase text-slate-400">
                      {s.phone}
                    </p>
                  </a>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FORM + MAP */}
      <section className="bg-paper-100">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-20">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Form */}
            <div className="lg:col-span-7">
              <SectionReveal>
                <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-bat-500 mb-4">
                  Send an enquiry
                </p>
                <h2 className="font-display text-3xl sm:text-4xl leading-[1.05] text-corp-700 mb-8">
                  Tell us how we can help.
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-mono text-[10.5px] tracking-[0.2em] uppercase text-slate-500 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-paper-50 border border-slate-200 px-4 py-3 text-[14px] focus:border-corp-600 outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10.5px] tracking-[0.2em] uppercase text-slate-500 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-paper-50 border border-slate-200 px-4 py-3 text-[14px] focus:border-corp-600 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[10.5px] tracking-[0.2em] uppercase text-slate-500 mb-2">
                      Route to
                    </label>
                    <select
                      value={form.audience}
                      onChange={(e) => setForm({ ...form, audience: e.target.value })}
                      className="w-full bg-paper-50 border border-slate-200 px-4 py-3 text-[14px] focus:border-corp-600 outline-none transition-colors"
                    >
                      {stakeholders.map((s) => (
                        <option key={s.audience}>{s.audience}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono text-[10.5px] tracking-[0.2em] uppercase text-slate-500 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full bg-paper-50 border border-slate-200 px-4 py-3 text-[14px] focus:border-corp-600 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[10.5px] tracking-[0.2em] uppercase text-slate-500 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-paper-50 border border-slate-200 px-4 py-3 text-[14px] focus:border-corp-600 outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-corp-600 text-white px-7 py-3.5 text-[12px] tracking-[0.14em] uppercase hover:bg-corp-700 transition-colors"
                  >
                    Send enquiry <ArrowRight size={14} weight="bold" />
                  </button>
                </form>
              </SectionReveal>
            </div>

            {/* Visit panel */}
            <div className="lg:col-span-5">
              <SectionReveal delay={100}>
                <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-bat-500 mb-4">
                  Visit
                </p>
                <h2 className="font-display text-3xl sm:text-4xl leading-[1.05] text-corp-700 mb-8">
                  Come to Harare.
                </h2>
                <ul className="space-y-6 mb-8">
                  <li className="flex items-start gap-4">
                    <MapPin size={20} className="text-bat-500 mt-1 shrink-0" />
                    <div>
                      <p className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-slate-500 mb-1">
                        Registered office
                      </p>
                      <p className="text-slate-800 text-[15px] leading-relaxed">
                        {business.addressLine1}
                        <br />
                        {business.addressLine2}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Phone size={20} className="text-bat-500 mt-1 shrink-0" />
                    <div>
                      <p className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-slate-500 mb-1">
                        Switchboard
                      </p>
                      <a href={`tel:${business.phoneRaw}`} className="text-slate-800 text-[15px] hover:text-bat-600">
                        {business.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Clock size={20} className="text-bat-500 mt-1 shrink-0" />
                    <div>
                      <p className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-slate-500 mb-1">
                        Office hours
                      </p>
                      <p className="text-slate-800 text-[15px] leading-relaxed">
                        Mon–Fri · {business.hours.weekdays}
                        <br />
                        Weekends · Closed
                      </p>
                    </div>
                  </li>
                </ul>

                <a
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block aspect-[5/4] bg-slate-200 relative overflow-hidden group"
                >
                  <img
                    src="https://images.unsplash.com/photo-1543357480-c60d40007a3f?auto=format&fit=crop&w=1200&q=80"
                    alt="Map reference for Simon Mazorodze Road, Harare"
                    loading="lazy"
                    onError={(e) => (e.currentTarget.style.display = 'none')}
                    className="absolute inset-0 h-full w-full object-cover object-center grayscale"
                  />
                  <div className="absolute inset-0 bg-corp-700/40 group-hover:bg-corp-700/20 transition-colors" />
                  <div className="absolute inset-0 flex items-end p-5">
                    <span className="inline-flex items-center gap-2 bg-paper-50 text-corp-700 px-4 py-2.5 text-[11px] tracking-[0.14em] uppercase">
                      Open in Google Maps <ArrowRight size={12} weight="bold" />
                    </span>
                  </div>
                </a>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

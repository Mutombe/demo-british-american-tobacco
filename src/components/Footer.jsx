import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  EnvelopeSimple,
  ArrowUpRight,
  Scales,
} from '@phosphor-icons/react';
import { business, nav } from '../data/siteData';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="relative bg-corp-700 text-paper-100 mt-20 sm:mt-28">
      <div className="report-bar" />
      <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-16 sm:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand block */}
          <div className="col-span-2 lg:col-span-4 space-y-6">
            <Logo invert className="text-3xl" />
            <p className="text-paper-200/80 text-sm leading-relaxed max-w-sm">
              Operating in Zimbabwe since 1936. A subsidiary of British American
              Tobacco plc, committed to A Better Tomorrow through responsible
              operations and sustainable value creation.
            </p>
            <div className="pt-4 text-[11px] tracking-[0.18em] uppercase text-paper-300">
              <a
                href={business.parentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-bat-300 transition-colors"
              >
                bat.com <ArrowUpRight size={12} weight="bold" />
              </a>
              <span className="mx-3 text-paper-300/40">|</span>
              <span>LSE: BATS</span>
            </div>
          </div>

          {/* Navigate */}
          <div className="lg:col-span-2">
            <h4 className="font-mono text-[11px] tracking-[0.22em] uppercase text-paper-300/70 mb-5">
              Navigate
            </h4>
            <ul className="space-y-2.5 text-[13.5px]">
              {nav.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-paper-100 hover:text-bat-300 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stakeholders */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-[11px] tracking-[0.22em] uppercase text-paper-300/70 mb-5">
              Stakeholders
            </h4>
            <ul className="space-y-2.5 text-[13.5px]">
              <li>
                <a href={`mailto:${business.emailMedia}`} className="hover:text-bat-300 transition-colors">
                  Media — {business.emailMedia}
                </a>
              </li>
              <li>
                <a href={`mailto:${business.emailCareers}`} className="hover:text-bat-300 transition-colors">
                  Careers — {business.emailCareers}
                </a>
              </li>
              <li>
                <a href={`mailto:${business.emailTrade}`} className="hover:text-bat-300 transition-colors">
                  Trade — {business.emailTrade}
                </a>
              </li>
              <li>
                <a href={`mailto:${business.email}`} className="hover:text-bat-300 transition-colors">
                  General — {business.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Registered office */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-[11px] tracking-[0.22em] uppercase text-paper-300/70 mb-5">
              Registered office
            </h4>
            <ul className="space-y-3 text-[13.5px] text-paper-100">
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 text-bat-400 shrink-0" />
                <span className="text-paper-200/90">
                  {business.addressLine1}
                  <br />
                  {business.addressLine2}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={15} className="mt-0.5 text-bat-400 shrink-0" />
                <a href={`tel:${business.phoneRaw}`} className="hover:text-bat-300">
                  {business.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <EnvelopeSimple size={15} className="mt-0.5 text-bat-400 shrink-0" />
                <a href={`mailto:${business.email}`} className="hover:text-bat-300 break-all">
                  {business.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal strip */}
        <div className="mt-14 pt-8 border-t border-paper-100/15">
          <div className="flex items-start gap-3 text-[11.5px] text-paper-200/70 leading-relaxed max-w-4xl">
            <Scales size={16} className="mt-0.5 text-bat-400 shrink-0" />
            <p>
              <strong className="text-paper-100 font-medium">Important notice.</strong>{' '}
              BAT Zimbabwe — a subsidiary of British American Tobacco plc. This
              corporate website does not promote tobacco products, does not
              direct advertising to consumers, and contains no smoking imagery.
              All content is intended for investors, employees, trade partners,
              media and regulatory stakeholders. Tobacco products are sold only
              through licensed channels to adults, in accordance with the Public
              Health (Tobacco Control) Regulations of Zimbabwe.
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center sm:items-center justify-between gap-3 text-[11px] text-paper-300/70">
            <p>
              © {new Date().getFullYear()} {business.legalName}. All rights reserved.
            </p>
            <p className="text-center">
              BAT plc · LSE: BATS · Head office: Globe House, London
            </p>
          </div>

          <p className="mt-6 text-center text-[11px] text-paper-300/70 tracking-wide">
            Website by{' '}
            <a
              href="https://bitstudio.co.zw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bat-300 hover:underline"
            >
              Bit Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

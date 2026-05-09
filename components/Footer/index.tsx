'use client';

import React from 'react';
import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Copyright } from 'lucide-react';
import Image from 'next/image';
import footerData from './footer.json';

const iconMap: Record<string, React.ElementType> = {
  Facebook: FaFacebook,
  Instagram: FaInstagram,
  Linkedin: FaLinkedin,
  Whatsapp: FaWhatsapp,
  Send: FiSend,
};

export default function Footer() {
  // Defensive check for footerData
  if (!footerData) return null;

  return (
    <footer className="bg-kodai-dark text-white pt-20 pb-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link
              href="/"
              className="group flex items-center gap-3.5 transition-opacity duration-300 hover:opacity-90"
            >
              <div className="relative flex h-11 w-11 flex-none items-center justify-center  bg-white/80 p-3 rounded-full  shadow-lg transition-all duration-500 group-hover:bg-white/15 group-hover:ring-white/30 sm:h-18 sm:w-18">
                <Image
                  src="/images/logo.png"
                  alt="Kodai Global logo"
                  width={54}
                  height={54}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-playfair text-[20px] font-bold tracking-tight text-white sm:text-[24px]">
                  KODAI
                </span>
                <span
                  className="mt-1 font-sans text-[9px] font-bold tracking-[0.35em] text-white/90 uppercase sm:text-[10px]"
                  style={{ textShadow: '0 1px 8px rgba(45,122,79,0.6)' }}
                >
                  GLOBAL EXPORTS
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              {footerData.branding.description}
            </p>
          </div>

          {/* Dynamic Sections */}
          {footerData.sections.map((section, idx) => (
            <div key={idx} className="space-y-6">
              <h4 className="text-lg font-bold font-playfair">{section.title}</h4>
              <ul className="space-y-4">
                {section.links &&
                  section.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-kodai-green transition-colors text-sm font-medium flex items-center gap-2 group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-kodai-green opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                {section.info && (
                  <li className="space-y-4">
                    <div className="flex items-start gap-3 text-gray-400 text-sm">
                      <FiMapPin size={18} className="text-kodai-green shrink-0 mt-0.5" />
                      <span className="whitespace-pre-line">{section.info.address}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-400 text-sm">
                      <FiMail size={18} className="text-kodai-green shrink-0" />
                      <a
                        href={`mailto:${section.info.email}`}
                        className="hover:text-kodai-green transition-colors"
                      >
                        {section.info.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-gray-400 text-sm">
                      <FiPhone size={18} className="text-kodai-green shrink-0" />
                      <a
                        href={`tel:${section.info.phone.replace(/\s+/g, '')}`}
                        className="hover:text-kodai-green transition-colors"
                      >
                        {section.info.phone}
                      </a>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-1.5 text-gray-500 text-xs">
            <span>Copyright</span>
            <Copyright size={14} className="text-kodai-green" />
            <span>
              {new Date().getFullYear()} {footerData.branding.name}
            </span>
          </div>
          <div className="flex items-center gap-4">
            {footerData.socials.map((social, idx) => {
              const Icon = iconMap[social.icon] || iconMap['Send'];
              return (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-kodai-green hover:text-white transition-all duration-300"
                  aria-label={social.platform}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

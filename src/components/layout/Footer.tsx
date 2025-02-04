"use client";

import React, { JSX } from "react";
import {
  EnvelopeIcon as Mail,
  CodeBracketIcon as Code,
  UserCircleIcon as LinkedIn,
  PhotoIcon as Instagram,
} from "@heroicons/react/24/outline";

type BaseLink = {
  href: string;
  label: string;
};

type SocialLink = BaseLink & {
  icon: JSX.Element;
};

interface FooterProps {
  name?: string;
  description?: string;
}

const ICON_CLASSES = "h-5 w-5" as const;
const H3_HEADER_CLASSES = "text-xl font-bold text-white" as const;

const Footer: React.FC<FooterProps> = ({
  name = "Vernon E. Neilly, II",
  description = "Full Stack Developer building modern web experiences with cutting edge technology.",
}) => {
  const currentYear = new Date().getFullYear();

  const socialLinks: readonly SocialLink[] = [
    {
      icon: <Code className={ICON_CLASSES} />,
      href: "https://github.com/vneilly",
      label: "Github",
    },
    {
      icon: <LinkedIn className={ICON_CLASSES} />,
      href: "https://www.linkedin.com/in/ventwo/",
      label: "Vernon's LinkedIn",
    },
    {
      icon: <Instagram className={ICON_CLASSES} />,
      href: "https://www.instagram.com/v.neezy/",
      label: "Vernon's Instagram",
    },
    {
      icon: <Mail className={ICON_CLASSES} />,
      href: "mailto:ventwo@gmail.com",
      label: "Email me",
    },
  ] as const;

  const quickLinks: readonly BaseLink[] = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ] as const;

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* BRAND SECTION */}
          <div className="space-y-4">
            <h3 className={H3_HEADER_CLASSES}>{name}</h3>
            <p className="text-sm">{description}</p>
          </div>

          {/* QUICK LINKS SECTION */}
          <div className="space-y-4">
            <h3 className={H3_HEADER_CLASSES}>Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((quickLink) => (
                <li key={quickLink.href}>
                  <a
                    href={quickLink.href}
                    className="hover:text-white transition-colors"
                  >
                    {quickLink.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL LINKS SECTION */}
          <div className="space-y-4">
            <h3 className={H3_HEADER_CLASSES}>Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((socialLink) => (
                <a
                  key={socialLink.label}
                  href={socialLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label={socialLink.label}
                >
                  {socialLink.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* COPYRIGHT SECTION */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm">
            &copy; {currentYear} VN2DEV All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon as Menu, XMarkIcon as X } from "@heroicons/react/16/solid";

type NavLink = {
  href: string;
  label: string;
};

type NavLinksProps = {
  links: readonly NavLink[];
  isMobile?: boolean;
  onClick?: () => void;
};

const NavLinks: React.FC<NavLinksProps> = ({
  links,
  isMobile = false,
  onClick,
}) => {
  const baseStyles = "text-gray-300 hover:text-white transition-colors";
  const mobileStyles = "block px-3 py-2";
  const desktopStyles = "";

  return links.map((link) => (
    <Link
      key={link.href}
      href={link.href}
      className={`${baseStyles} ${isMobile ? mobileStyles : desktopStyles}`}
      onClick={onClick}
    >
      {link.label}
    </Link>
  ));
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 20);
    });
  }, [scrollY]);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ] as const;

  const handleMobileClick = () => setIsOpen(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="w-full bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="relative w-10 h-10 rounded-full overflow-hidden"
            >
              <Image
                src="/vn2Avatar.png"
                alt="VN2DEV"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 40px, 40px"
              />
            </Link>

            {/* Navigation */}
            <div className="hidden md:flex space-x-8">
              <NavLinks links={navLinks} />
            </div>
          </div>

          {/* Mobile Menu Btn */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="md:hidden bg-gray-900/95 backdrop-blur-sm"
              >
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ delay: 0.1 }}
                  className="px-2 pt-2 pb-3 space-y-1"
                >
                  <NavLinks
                    links={navLinks}
                    isMobile
                    onClick={handleMobileClick}
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;

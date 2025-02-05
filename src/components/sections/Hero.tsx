"use client";

import React from "react";
// import { motion } from "framer-motion";
import ParticleBackground from "../ui/ParticleBackground";

interface HeroProps {
  firstName?: string;
  greetingText?: string;
  introText?: string;
  tagLineText?: string;
  ctaWork?: string;
  ctaContact?: string;
}

const Hero: React.FC<HeroProps> = ({
  ctaContact = "Let's Talk",
  ctaWork = "See My Work",
  firstName = "Vernon",
  greetingText = `Hey there! I'm`,
  introText = "California-based developer with a passion for creating dynamic, elegant and scalable solutions to complex problems. Let's build something extraordinary together.",
  tagLineText = "Building the future, one pixel at a time",
}) => {
  const handleShowProjects = () => {
    console.log("See My Work -- clicked");
  };

  const handleContactMe = () => {
    console.log("Contact me -- clicked");
  };

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Animated BG */}
      <ParticleBackground />

      {/* Content Container */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-[#00ABC9] text-3xl font-bold">
                  {greetingText}
                </p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                  {firstName}
                </h1>
              </div>
              <p className="text-xl text-[#FAB917]">{tagLineText}</p>
            </div>

            <p className="text-gray-300 text-lg max-w-lg">{introText}</p>

            {/* CTA Button Container */}
            <div className="flex flex-wrap gap-4">
              <button
                className="px-6 py-3 bg-[#00ABC9] text-white rounded-lg 
                  transition duration-300 hover:bg-[#009BB7] hover:scale-105"
                type="button"
                onClick={handleShowProjects}
              >
                {ctaWork}
              </button>
              <button
                className="px-6 py-3 border border-[#FAB917] text-[#FAB917] rounded-lg 
                  transition duration-300 hover:bg-[#FAB917] hover:text-black hover:scale-105"
                type="button"
                onClick={handleContactMe}
              >
                {ctaContact}
              </button>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="hidden lg:block relative"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

"use client";

import React from "react";
import AboutIntro from "./AboutIntro";
import AboutTimeline from "./AboutTimeline";

const About: React.FC = () => {
  return (
    <section className="w-full min-h-screen bg-[#0A192F]">
      {/* <div className="w-full h-1 bg-gradient-to-r from-[#00ABC9] via-[#FAB917] to-[#00ABC9] opacity-30" /> */}
      {/* ABOUT INTRO SECTION */}
      <AboutIntro />
      <AboutTimeline />
    </section>
  );
};

export default About;

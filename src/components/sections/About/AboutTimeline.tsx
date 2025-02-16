"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import TimelineCard, { TimelineCardData } from "./TimeLineCard";

const TECHNOLOGIES = {
  react: "REACT",
  web: "WEBPACK",
  next: "NEXT.JS",
  zust: "ZUSTAND",
  rdx: "REDUX",
  tw: "TAILWIND CSS",
  vue: "VUE.JS",
  vx: "VUEX",
  node: "NODE.JS",
  ts: "TYPESCRIPT",
  sb: "STORYBOOK",
  py: "PYTHON",
  amz: "AWS",
  sql: "MySQL",
};

const VERNON_EMPLOYMENT_DATA: TimelineCardData[] = [
  {
    id: 1,
    year: "2023",
    company: "Somos, Inc",
    role: "Software Developer II",
    side: "left",
    technologies: [],
    highlights: "",
    achievements: [""],
  },
  {
    id: 2,
    year: "2021",
    company: "Achieve / Freedom Financial Network",
    role: "Frontend Software Engineer",
    side: "right",
    technologies: [""],
    highlights: "",
    achievements: [""],
  },
  {
    id: 3,
    year: "2020",
    company: "Channel Bakers",
    role: "Frontend Engineer",
    side: "left",
    technologies: [""],
    highlights: "",
    achievements: [""],
  },
  {
    id: 4,
    year: "2018",
    company: "Aquent / Jet Propulsion Laboratories",
    role: "Frontend Developer",
    side: "right",
    technologies: [""],
    highlights: "",
    achievements: [""],
  },
  {
    id: 5,
    year: "2013",
    company: "Yamaha Music USA",
    role: "Web Developer",
    side: "left",
    technologies: [""],
    highlights: "",
    achievements: [""],
  },
];

const AboutTimeline: React.FC = ({}) => {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  const handleEmploymentCardClick = (id: number) => {
    setActiveCardId(activeCardId === id ? null : id);
  };

  return (
    <div className="w-full py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TIMELINE HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Professional Developer Journey
          </h2>
          <p className="text-gray-300 text-lg">
            A timeline of my development experience and professional growth.
          </p>
        </motion.div>

        {/* TIMELINE CONTAINER */}
        <div className="relative min-h-[400px]">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#00ABC9]/50 via-[#00ABC9]/30 to-[#FAB917]/50" />

          {/* TIMELINE MARKERS */}
          <div className="relative z-10">
            {VERNON_EMPLOYMENT_DATA.map((item) => (
              <div
                className="flex flex-col md:flex-row items-center mb-32"
                key={item.id}
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-[#00ABC9] ring-4 ring-[#0A192F] border border-[#00ABC9]/50 shadow-md" />
                <TimelineCard
                  {...item}
                  isExpanded={activeCardId === item.id}
                  onToggle={() => handleEmploymentCardClick(item.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTimeline;

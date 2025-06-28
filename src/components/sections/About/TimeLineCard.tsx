import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { FiChevronRight } from "react-icons/fi";

export interface TimelineCardData {
  id: number;
  year: string;
  company: string;
  role: string;
  side: "left" | "right";
  achievements: string[];
  technologies: string[];
  highlights?: string;
}

export interface TimelineCardProps extends TimelineCardData {
  isExpanded: boolean;
  onToggle: () => void;
}

const TimelineCard: React.FC<TimelineCardProps> = ({
  company,
  role,
  year,
  side,
  achievements,
  technologies,
  highlights,
  isExpanded,
  onToggle,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`w-full md:w-[45%] ${
        side === "left" ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
      }`}
    >
      <motion.div
        className="bg-[#0A192F]/30 backdrop-blur-sm p-6 rounded-lg border border-[#00ABC9]/20 hover:border-[#00ABC9]/40 transition-all hover:bg-[#0A192F]/50 shadow-lg cursor-pointer"
        onClick={onToggle}
        whileHover={{ scale: 1.02 }}
        layout
      >
        {/* BASIC INFO */}
        <motion.div layout="position">
          <div className="text-[#FAB917] text-sm font-medium mb-2">{year}</div>
          <h3 className="text-xl text-white font-semibold mb-2">{company}</h3>
          <p className="text-gray-300 text-base">{role}</p>
        </motion.div>

        {/* Expandable Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 pt-4 border-t border-[#00ABC9]/20"
            >
              {/* ACHIEVEMENTS */}
              <div className="mb-4">
                <h4 className="text-[#FAB917] font-medium mb-2">
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {achievements.map((item, index) => (
                    <li
                      className="text-gray-300 text-sm flex items-start"
                      key={index}
                    >
                      <FiChevronRight className="w-3 h-3 text-[#00ABC9] mr-2, mt-1" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* TECHNOLOGIES */}
              <div className="mb-4">
                <h4 className="text-[#FAB917] font-medium mb-2">Highlights</h4>
                <div className="">
                  {technologies.map((techItem, index) => (
                    <span
                      className="px-2 py-1 text-xs rounded-full bg-[#00ABC9]/20 text-[#00ABC9] border border-[#00ABC9]/30"
                      key={index}
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>

              {/* HIGHLIGHTS -- OPTIONAL */}
              {highlights && (
                <div className="mt-4">
                  <h4 className="text-[#FAB917] font-medium mb-2">
                    Career Highlights
                  </h4>
                  <p className="text-gray-300 text-sm">{highlights}</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expand/Collapse Indicator */}
        <motion.div
          className="mt-4 text-[#00ABC9] text-sm flex items-center justify-end"
          layout="position"
        >
          {isExpanded ? "Click to collapse" : "Click to expand"}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default TimelineCard;

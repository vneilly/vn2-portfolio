import { motion } from "framer-motion";
import React from "react";

export interface TimelineCardProps {
  id: number;
  year: string;
  company: string;
  role: string;
  side: "left" | "right";
}

const TimelineCard: React.FC<TimelineCardProps> = ({
  company,
  role,
  year,
  side,
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
      <div className="bg-[#0A192F]/30 backdrop-blur-sm p-6 rounded-lg border border-[#00ABC9]/20 hover:border-[#00ABC9]/40 transition-all hover:bg-[#0A192F]/50 shadow-lg">
        <div className="text-[#FAB917] text-sm font-medium mb-2">{year}</div>
        <h3 className="text-xl text-white font-semibold mb-2">{company}</h3>
        <p className="text-gray-300 text-base">{role}</p>
      </div>
    </motion.div>
  );
};

export default TimelineCard;

"use client";

import { motion } from "framer-motion";

import React from "react";
import Image from "next/image";

interface FocusNodeProps {
  title: string;
  description: string;
  logo: string;
  altText: string;
  logoWidth?: number;
  logoHeight?: number;
}

const FocusNode: React.FC<FocusNodeProps> = ({
  title,
  description,
  logo,
  altText,
  logoWidth = 120,
  logoHeight = 40,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      className="relative bg-gradient-to-br from-[#00ABC9]/10 to-transparent
       backdrop-blur-sm border border-[#00ABC9]/20 rounded-xl p-4 w-48 transition-all duration-300 hover:border-[#00ABC9]/40"
    >
      <div className="flex flex-col items-center gap-4 mb-3">
        <div className="relative w-full flex justify-center items-center h-12">
          <Image
            src={logo}
            alt={altText}
            width={logoWidth}
            height={logoHeight}
            className="object-contain"
            style={{
              width: "auto",
              height: "auto",
            }}
          />
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-sm text-gray-300">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const FrontEndFocus: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* NODE CONTAINER */}
      <div className="relative w-[584px] h-[500px]">
        {/* SVG CONNECTIONS */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <motion.path
            d="M292,125 L146,325"
            fill="none"
            stroke="#FAB917"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
          <motion.path
            d="M292,125 L438,325"
            fill="none"
            stroke="#FAB917"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
          />
          <motion.path
            d="M146,325 L438,325"
            fill="none"
            stroke="#FAB917"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
          />
        </svg>

        <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
          <FocusNode
            title="Modern Frontend"
            description="Building scalable applications with Next.js and React"
            logo="/nextjs-logotype-darkBg.svg"
            altText="Next.js logo"
          />
        </div>

        <div className="absolute bottom-0 left-8">
          <FocusNode
            title="Type-Safe Development"
            description="Writing robust bug free code with TypeScript"
            logo="/ts-lettermark-white.svg"
            altText="TypeScript logo"
            logoWidth={100}
            logoHeight={40}
          />
        </div>

        <div className="absolute bottom-0 right-8">
          <FocusNode
            title="Latest UI Styling"
            description="Creating responsive designs with Tailwind CSS"
            logo="/tailwindcss-logotype-white.svg"
            altText="Tailwind CSS logo"
            logoWidth={140}
            logoHeight={40}
          />
        </div>
      </div>
    </div>
  );
};

export default FrontEndFocus;

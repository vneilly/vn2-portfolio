"use client";

import React, { useState } from "react";
import TechStackCard from "@/components/ui/TechStackCard";

import { TechItem, TECH_CATEGORIES, ALL_TECH_ITEMS } from "./data";

const TechStackGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredTechItems =
    selectedCategory === "All"
      ? ALL_TECH_ITEMS
      : ALL_TECH_ITEMS.filter((item) => item.category === selectedCategory);

  console.log("Visible TechItems", filteredTechItems);

  return (
    <section className="w-full py-16">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex gap-2 mb-4">
          {/* Filter Buttons */}

          <button
            onClick={() => handleSelectCategory("All")}
            className={`px-4 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
              selectedCategory === "All"
                ? "bg-[#00ABC9] text-[#0A192F]"
                : "border border-[#00ABC9] text-[#00ABC9] hover:bg-[#00ABC9]/20 hover:text-white"
            }`}
          >
            All
          </button>
          {Object.keys(TECH_CATEGORIES).map((category) => (
            <button
              key={category}
              className={`btn px-3 py-1 rounded-full text-sm font-medium ${
                selectedCategory === category
                  ? "bg-[#00ABC9] text-[#0A192F]"
                  : "border border-[#00ABC9] text-[#00ABC9]"
              }`}
              onClick={() => handleSelectCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        {/* Card grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {filteredTechItems.map((item: TechItem) => (
            <TechStackCard key={item.name} name={item.name} Icon={item.Icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackGrid;

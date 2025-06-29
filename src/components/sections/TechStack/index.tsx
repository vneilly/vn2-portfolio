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
    <div>
      <div className="flex gap-2 mb-4">
        <button
          className="btn btn-primary"
          onClick={() => handleSelectCategory("All")}
        >
          All
        </button>
        {Object.keys(TECH_CATEGORIES).map((category) => (
          <button
            key={category}
            className={`btn ${
              selectedCategory === category ? "btn-active" : "btn-secondary"
            }`}
            onClick={() => handleSelectCategory(category)}
          >
            {TECH_CATEGORIES[category as keyof typeof TECH_CATEGORIES]}
          </button>
        ))}
      </div>

      {/* Card grid */}
      <div className="flex flex-wrap gap-4">
        {filteredTechItems.map((item: TechItem) => (
          <TechStackCard key={item.name} name={item.name} Icon={item.Icon} />
        ))}
      </div>
    </div>
  );
};

export default TechStackGrid;

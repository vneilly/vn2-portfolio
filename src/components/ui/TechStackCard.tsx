import Image from "next/image";
import React from "react";

interface TechStackCardProps {
  technologies: {
    name: string;
    src: string;
  }[];
}

const TechStackCard: React.FC<TechStackCardProps> = ({ technologies }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg w-64 border border-white/20">
      <h3 className="text-white text-xl font-semibold text-center">
        Tech Stack
      </h3>
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {technologies.map((tech, i) => (
          <Image
            src={tech.src}
            key={i}
            alt={tech.name}
            width={40}
            height={40}
            className="w-10 h-10"
          />
        ))}
      </div>
    </div>
  );
};

export default TechStackCard;

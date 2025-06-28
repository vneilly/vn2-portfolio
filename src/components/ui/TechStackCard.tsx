import React from "react";
import { IconType } from "react-icons";

interface TechStackCardProps {
  name: string;
  Icon: IconType;
}

const TechStackCard: React.FC<TechStackCardProps> = ({ name, Icon }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg w-48 flex flex-col items-center border border-white/20">
      <Icon size={40} className="text-white mb-4" />
      <span className="text-white text-sm font-medium">{name}</span>
    </div>
  );
};

export default TechStackCard;

import React from "react";

import BackButton from "@assets/backButton.svg";

interface BackNavProps {
  title: string;
}

const BackNav: React.FC<BackNavProps> = ({ title }) => {
  const handleBack = () => {
    history.back();
  };

  return (
    <div className="flex flex-row items-center justify-between mb-6">
      <img src={BackButton} onClick={handleBack} />
      <div className="font-semibold text-base text-[#6C6C77]">{title}</div>
      <div className="w-10" />
    </div>
  );
};

export default BackNav;

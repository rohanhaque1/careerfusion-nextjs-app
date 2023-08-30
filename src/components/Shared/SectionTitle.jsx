import React from "react";

const SectionTitle = ({ title, title2 }) => {
  return (
    <h3 className="text-2xl text-cyan-500 font-bold text-center py-6">
      {title}
      <span className="text-pink-700">{title2}</span>
    </h3>
  );
};

export default SectionTitle;

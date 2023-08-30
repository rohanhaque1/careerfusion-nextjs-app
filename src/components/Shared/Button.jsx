import React from "react";

const Button = ({ btnTitle }) => {
  return (
    <div className="flex justify-center items-center my-4">
      <button
        style={{ fontSize: "10px" }}
        className="bg-[#213d54] text-white font-light px-3 py-1.5 rounded-sm shadow shadow-slate-300"
      >
        {btnTitle}
      </button>
    </div>
  );
};

export default Button;

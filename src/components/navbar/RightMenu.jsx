import React from "react";
import { BiSolidUserCircle, BiSun } from "react-icons/bi";
import { CiBellOn } from "react-icons/ci";

const RightMenu = () => {
  return (
    <>
      <div className="flex items-center gap-3">
        <CiBellOn size={18} />
        {/* <BiSun size={18} className="text-yellow-600" /> */}
        <BiSolidUserCircle size={28} className="text-slate-500" />
      </div>
    </>
  );
};

export default RightMenu;

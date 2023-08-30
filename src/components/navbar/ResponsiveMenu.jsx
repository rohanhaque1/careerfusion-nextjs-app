"use client";
import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import Navmenu from "./Navmenu";

const ResponsiveMenu = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleOpenSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="lg:hidden z-50">
      <button onClick={handleOpenSidebar}>
        <BiMenuAltRight size={22} />
      </button>
      {isSidebarOpen && (
        <div className="fixed right-0 top-0 h-screen w-3/5 md:w-1/3 bg-gray-800 text-white transition transform duration-500">
          <div className="p-4">
            <div className="flex items-center justify-end mb-4">
              <button onClick={handleOpenSidebar}>
                <IoMdClose size={22} />
              </button>
            </div>
            <div className="flex flex-col space-y-4 p-4 rounded-sm border-slate-500 border-2">
              <Navmenu />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResponsiveMenu;

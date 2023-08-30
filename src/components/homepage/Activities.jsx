"use client";
import React from "react";
import { BiUser } from "react-icons/bi";
import { BsLaptop } from "react-icons/bs";
import { GiEarthAmerica } from "react-icons/gi";

const Activities = () => {
  return (
    <div className="py-6 grid grid-cols-3 gap-6 md:place-items-center">
      <div className="flex items-center gap-2 text-slate-500 hover:text-purple-600 transition duration-300">
        <BiUser size={48} />
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-xl font-semibold">42500+</h3>
          <span style={{ fontSize: "10px" }} className="font-medium">
            Active Workers
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2 text-slate-500 hover:text-cyan-600 transition duration-300">
        <BsLaptop size={48} />
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-xl font-semibold">120+</h3>
          <span style={{ fontSize: "10px" }} className="font-medium">
            Companies
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2 text-slate-500 hover:text-teal-500 transition duration-300">
        <GiEarthAmerica size={48} />
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-xl font-semibold">48</h3>
          <span style={{ fontSize: "10px" }} className="font-medium">
            Countries
          </span>
        </div>
      </div>

      {/* Background SVG */}
      <span className="relative inline-block">
        <svg
          viewBox="0 0 52 24"
          fill="currentColor"
          className="absolute top-0 left-0 hidden w-32 -mt-8 -ml-20 text-teal-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block -z-10"
        >
          <defs>
            <pattern
              id="6bfa0e57-faa2-4bb2-ac0e-310782e5eb2d"
              x="0"
              y="0"
              width=".135"
              height=".30"
            >
              <circle cx="1" cy="1" r=".7" />
            </pattern>
          </defs>
          <rect
            fill="url(#6bfa0e57-faa2-4bb2-ac0e-310782e5eb2d)"
            width="52"
            height="24"
          />
        </svg>
      </span>
    </div>
  );
};

export default Activities;

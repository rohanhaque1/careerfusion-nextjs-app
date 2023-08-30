"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Container from "../container/Container";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { HiPencil, HiOutlineSearch } from "react-icons/hi";
import { ImLocation } from "react-icons/im";
import Activities from "./Activities";

const Banner = () => {
  const message = ["Jobs", "Internship"];
  return (
    <>
      <div className="">
        <Container>
          <div className="sm:w-4/5 mx-auto space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-center">
              Navigate Your Career Path and Find Your Dream{" "}
              <span className="text-pink-600">
                <Typewriter
                  words={message}
                  loop={true}
                  cursor={false}
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>{" "}
              With Career
              <span className="text-pink-600 italic text-4xl sm:text-5xl md:text-7xl font-medium">
                f
              </span>
              usion...
            </h1>
            <div className="bg-[#142026] p-2.5 rounded">
              <form className="grid sm:grid-cols-12 gap-3 sm:gap-1">
                <div className="sm:col-span-10 grid grid-cols-3 gap-1">
                  <div className="relative">
                    <HiPencil
                      size={12}
                      className="text-black absolute top-2.5 left-2"
                    />
                    <input
                      type="text"
                      placeholder="Job Title or Keywords"
                      style={{ fontSize: "10px" }}
                      className="text-[#000] font-light ps-6 pr-3 py-2 outline-none rounded-sm w-full placeholder:text-gray-600"
                    />
                  </div>
                  <div className="relative">
                    <ImLocation
                      size={12}
                      className="text-black absolute top-2.5 left-2"
                    />
                    <input
                      type="text"
                      placeholder="Location"
                      style={{ fontSize: "10px" }}
                      className="text-[#000] font-light ps-6 pr-3 py-2 outline-none rounded-sm w-full placeholder:text-gray-600"
                    />
                  </div>
                  <div className="relative">
                    <BiSolidCategoryAlt
                      size={12}
                      className="text-black absolute top-2.5 left-2"
                    />
                    <input
                      type="text"
                      placeholder="All Categories"
                      style={{ fontSize: "10px" }}
                      className="text-[#000] font-light ps-6 pr-3 py-2 outline-none rounded-sm w-full placeholder:text-gray-600"
                    />
                  </div>
                </div>
                <button
                  style={{ fontSize: "11px" }}
                  className="sm:col-span-2 w-full bg-[#213d54] text-[#FFF] font-medium px-3 py-2 rounded-sm flex justify-center items-center gap-2"
                >
                  <HiOutlineSearch size={14} />
                  Find Jobs
                </button>
              </form>
            </div>
            <Activities />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Banner;

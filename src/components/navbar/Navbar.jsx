"use client";
import React from "react";
import Logo from "./Logo";
import Navmenu from "./Navmenu";
import { MdOutlineWork } from "react-icons/md";
import { WiStars } from "react-icons/wi";
import Link from "next/link";
import RightMenu from "./RightMenu";
import ResponsiveMenu from "./ResponsiveMenu";
import Container from "../container/Container";

const Navbar = () => {
  return (
    <div className="bg-white bg-opacity-90 border-b border-blue-500 w-full fixed top-0 z-50">
      <Container>
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-8">
            <Logo />
            <div className="hidden lg:flex lg:justify-between items-center gap-4">
              <div className="lg:flex items-center">
                <Navmenu />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-2 divide-x-2 divide-pink-800">
              <Link
                href="/postjob"
                style={{ fontSize: "11px" }}
                className="font-medium hover:bg-slate-700 hover:bg-opacity-80 hover:text-gray-300 px-3 py-1 text-gray-500 transition duration-500 flex items-center gap-1"
              >
                <MdOutlineWork size={14} className="text-slate-500" />
                Post Job
              </Link>
              <Link
                href="/premium"
                style={{ fontSize: "11px" }}
                className="font-medium hover:bg-slate-700 hover:bg-opacity-80 hover:text-gray-300 px-3 py-1 text-gray-500 transition duration-500 flex items-center gap-1"
              >
                <WiStars size={22} className="text-pink-600" />
                Try Premium
              </Link>
            </div>
            <RightMenu />
            <ResponsiveMenu />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;

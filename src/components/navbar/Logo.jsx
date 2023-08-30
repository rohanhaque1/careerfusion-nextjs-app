import Image from "next/image";
import React from "react";
import logo from "../../../public/logo.png";
import arrowLine from "../../../public/arrowline.png";
import { IoIosPaperPlane } from "react-icons/io";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-1">
        <Image src={logo} className="w-8" alt="Logo Image" />
        <div className="flex relative">
          <h3 className="text-sm font-semibold tracking-wider z-10">
            Career<span className="text-2xl text-pink-600 italic">f</span>
            usion
          </h3>
          <Image
            src={arrowLine}
            className="w-10 absolute top-0 -right-1.5 z-0"
            alt="Arrow line"
          />
          <IoIosPaperPlane className="text-pink-600 absolute" />
        </div>
      </div>
    </Link>
  );
};

export default Logo;

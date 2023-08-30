import Link from "next/link";
import React from "react";

const FooterNav = () => {
  return (
    <>
      <div>
        <h5 className="text-xs text-gray-300 font-semibold tracking-wider">
          General
        </h5>
        <div className="flex items-center flex-wrap gap-3">
          <Link
            href="/"
            style={{ fontSize: "10px" }}
            className="font-medium text-gray-400 hover:text-gray-300"
          >
            Privacy Policy
          </Link>
          <Link
            href="/"
            style={{ fontSize: "10px" }}
            className="font-medium text-gray-400 hover:text-gray-300"
          >
            Terms & Conditions
          </Link>
          <Link
            href="/"
            style={{ fontSize: "10px" }}
            className="font-medium text-gray-400 hover:text-gray-300"
          >
            Community Guidelines
          </Link>
        </div>
      </div>
      {/* 2 */}
      <div>
        <h5 className="text-xs text-gray-300 font-semibold tracking-wider">
          Browse Careerfusion
        </h5>
        <div className="flex items-center flex-wrap gap-3">
          <Link
            href="/"
            style={{ fontSize: "10px" }}
            className="font-medium text-gray-400 hover:text-gray-300"
          >
            Services
          </Link>
          <Link
            href="/"
            style={{ fontSize: "10px" }}
            className="font-medium text-gray-400 hover:text-gray-300"
          >
            Help Center
          </Link>
          <Link
            href="/"
            style={{ fontSize: "10px" }}
            className="font-medium text-gray-400 hover:text-gray-300"
          >
            Developers
          </Link>
          <Link
            href="/"
            style={{ fontSize: "10px" }}
            className="font-medium text-gray-400 hover:text-gray-300"
          >
            Learning
          </Link>
        </div>
      </div>
      {/* 3 */}
      <div>
        <h5 className="text-xs text-gray-300 font-semibold tracking-wider">
          Business Solutions
        </h5>
        <div className="flex items-center flex-wrap gap-3">
          <Link
            href="/"
            style={{ fontSize: "10px" }}
            className="font-medium text-gray-400 hover:text-gray-300"
          >
            Marketing
          </Link>
          <Link
            href="/"
            style={{ fontSize: "10px" }}
            className="font-medium text-gray-400 hover:text-gray-300"
          >
            Sales
          </Link>
          <Link
            href="/"
            style={{ fontSize: "10px" }}
            className="font-medium text-gray-400 hover:text-gray-300"
          >
            Careers
          </Link>
        </div>
      </div>
    </>
  );
};

export default FooterNav;

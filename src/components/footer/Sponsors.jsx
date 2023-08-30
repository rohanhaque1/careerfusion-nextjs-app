import React from "react";
import Image from "next/image";
import paypal from "../../../public/sponsors/paypal.png";
import visa from "../../../public/sponsors/visa.png";
import netflix from "../../../public/sponsors/netflix.png";

const Sponsors = () => {
  return (
    <>
      <h3 className="text-xs text-gray-300 font-semibold text-center">
        Our Sponsors
      </h3>
      <div className="grid grid-cols-3 gap-5">
        <Image src={paypal} className="w-20" alt="" />
        <Image src={visa} className="w-20" alt="" />
        <Image src={netflix} className="w-20" alt="" />
      </div>
    </>
  );
};

export default Sponsors;

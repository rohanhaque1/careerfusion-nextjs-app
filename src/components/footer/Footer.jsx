import React from "react";
import Container from "../container/Container";
import Logo from "../navbar/Logo";
import ContactDetails from "./ContactDetails";
import FooterNav from "./FooterNav";
import Sponsors from "./Sponsors";

const Footer = () => {
  return (
    <div className="bg-slate-900 bg-opacity-80 py-6">
      <Container>
        <div className="flex justify-center text-white">
          <Logo />
        </div>
        <ContactDetails />
        <hr className="border border-slate-500" />
        <div className="grid md:grid-cols-5 gap-6 py-3">
          <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-4">
            <FooterNav />
          </div>
          <div className="md:col-span-2">
            <Sponsors />
          </div>
        </div>
        <hr className="border border-slate-500" />
        <div className="py-3 text-center">
          <p style={{ fontSize: "10px" }} className="text-gray-400 font-medium">
            Copyright &copy; careerfusion, made by{" "}
            <strong>
              Rohan Haque.<span className="text-pink-700">&hearts;</span>
            </strong>{" "}
            All rights reserved.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;

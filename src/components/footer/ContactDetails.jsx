import Link from "next/link";
import React from "react";
import {
  BsFacebook,
  BsYoutube,
  BsGithub,
  BsDiscord,
  BsSlack,
} from "react-icons/bs";

const ContactDetails = () => {
  return (
    <div className="sm:flex justify-between items-center gap-4 py-3 space-y-2">
      <div className="flex justify-center items-center flex-wrap gap-5">
        <Link
          href="/"
          style={{ fontSize: "11px" }}
          className="font-medium text-gray-400 hover:text-gray-300"
        >
          Varified Email
        </Link>
        <Link
          href="/"
          style={{ fontSize: "11px" }}
          className="font-medium text-gray-400 hover:text-gray-300"
        >
          Facebook Group
        </Link>
        <Link
          href="/"
          style={{ fontSize: "11px" }}
          className="font-medium text-gray-400 hover:text-gray-300"
        >
          About Us
        </Link>
        <Link
          href="/"
          style={{ fontSize: "11px" }}
          className="font-medium text-gray-400 hover:text-gray-300"
        >
          Contact
        </Link>
      </div>
      <div className="flex justify-center items-center gap-3">
        <BsFacebook size={18} className="text-slate-400" title="Facebook" />
        <BsYoutube size={18} className="text-slate-400" title="Youtube" />
        <BsGithub size={18} className="text-slate-400" title="GitHub" />
        <BsDiscord size={18} className="text-slate-400" title="Discord" />
        <BsSlack size={18} className="text-slate-400" title="Slack" />
      </div>
    </div>
  );
};

export default ContactDetails;

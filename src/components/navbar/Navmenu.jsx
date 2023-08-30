import Link from "next/link";
import React from "react";

const Navmenu = () => {
  const navlist = [
    {
      id: 1,
      label: "Home",
      url: "/",
    },
    {
      id: 2,
      label: "Job",
      url: "/job",
    },
    {
      id: 3,
      label: "Internship",
      url: "/internship",
    },
    {
      id: 4,
      label: "Event",
      url: "/event",
    },
    {
      id: 5,
      label: "Blog",
      url: "/blog",
    },
  ];
  return (
    <>
      {navlist.map((list) => (
        <Link
          key={list.id}
          href={list.url}
          style={{ fontSize: "11px" }}
          className="font-medium hover:bg-slate-700 hover:bg-opacity-80 hover:text-gray-300 px-3 py-1 text-gray-500 transition duration-500"
        >
          {list.label}
        </Link>
      ))}
    </>
  );
};

export default Navmenu;

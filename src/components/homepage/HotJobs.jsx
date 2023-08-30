"use client";

import React, { useEffect, useState } from "react";
import Container from "../container/Container";
import { BsHeartFill } from "react-icons/bs";
import Image from "next/image";
import SectionTitle from "../Shared/SectionTitle";
import Button from "../Shared/Button";

const HotJobs = () => {
  const [hotJobs, setHotJobs] = useState([]);
  useEffect(() => {
    fetch("/jobs.json")
      .then((res) => res.json())
      .then((data) => setHotJobs(data));
  }, []);

  return (
    <div className="py-10 min-h-screen">
      <Container>
        <SectionTitle title="Hot " title2="Jobs" />
        <div className="md:w-4/5 mx-auto grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4">
          {hotJobs.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md shadow-slate-200 p-3 rounded-md space-y-3"
            >
              <div className="flex justify-between items-center">
                <span
                  style={{ fontSize: "8px" }}
                  className="font-light border border-blue-700 rounded-full px-1"
                >
                  {item.jobType}
                </span>
                <BsHeartFill size={12} className="text-slate-300" />
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <h3 className="text-xs font-semibold text-slate-600">
                  {item.jobCategory}
                </h3>
                {/* <Image
                  src={item.logo}
                  className=""
                  width={100}
                  height={100}
                  alt="Images"
                /> */}
                <p style={{ fontSize: "8px" }} className="font-light">
                  {item.location}
                </p>
                <button
                  style={{ fontSize: "8px" }}
                  className="font-light border border-blue-700 px-2 py-0.5 rounded-full "
                >
                  Browse Job
                </button>
              </div>
            </div>
          ))}
        </div>
        <Button btnTitle="Browse More" />
      </Container>
    </div>
  );
};

export default HotJobs;

"use client";
import React from "react";
import Container from "../container/Container";
import Image from "next/image";
import jobImg from "../../../public/job.jpg";
import { MdOutlineArrowRight } from "react-icons/md";
import SectionTitle from "../Shared/SectionTitle";

const FrequentlyQues = () => {
  return (
    <div className="py-6">
      <Container>
        <SectionTitle title="What People " title2="Want to Know?" />
        <div className="flex flex-col max-w-screen-lg overflow-hidden bg-transparent border border-blue-600 lg:flex-row sm:mx-auto">
          <div className="relative lg:w-1/2">
            <Image
              src={jobImg}
              alt="Frequently Asked Question Banner"
              className="w-full lg:absolute  lg:h-full"
            />
            <svg
              className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
              viewBox="0 0 20 104"
              fill="currentColor"
            >
              <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
            </svg>
          </div>
          <div className="p-8 bg-transparent lg:p-8 lg:px-8 lg:w-1/2">
            <div className="overflow-auto h-72">
              <div className="max-w-2xl mx-auto space-y-3">
                {/* 1 */}
                <div className="shadow shadow-blue-600 rounded-xl">
                  <details className="group">
                    <summary className="flex items-center gap-3 px-4 py-3 text-xs font-medium marker:content-none hover:cursor-pointer">
                      <MdOutlineArrowRight
                        size={16}
                        className="transition group-open:rotate-90"
                      />
                      <span>How do I search for jobs on your portal?</span>
                    </summary>

                    <article className="px-6 py-2">
                      <p style={{ fontSize: "10px" }} className="text-gray-700">
                        To search for jobs, simply use the search bar on our
                        homepage. Enter keywords, job titles, locations, or
                        other filters to find relevant job listings.
                      </p>
                    </article>
                  </details>
                </div>
                {/* 2 */}
                <div className="shadow shadow-blue-600 rounded-xl">
                  <details className="group">
                    <summary className="flex items-center gap-3 px-4 py-3 text-xs font-medium marker:content-none hover:cursor-pointer">
                      <MdOutlineArrowRight
                        size={16}
                        className="transition group-open:rotate-90"
                      />
                      <span>What are the benefits of creating an account?</span>
                    </summary>

                    <article className="px-6 py-2">
                      <p style={{ fontSize: "10px" }} className="text-gray-700">
                        Creating an account allows you to save your favorite job
                        listings, track your application history, and receive
                        personalized job recommendations based on your profile.
                      </p>
                    </article>
                  </details>
                </div>
                {/* 3 */}
                <div className="shadow shadow-blue-600 rounded-xl">
                  <details className="group">
                    <summary className="flex items-center gap-3 px-4 py-3 text-xs font-medium marker:content-none hover:cursor-pointer">
                      <MdOutlineArrowRight
                        size={16}
                        className="transition group-open:rotate-90"
                      />
                      <span>
                        Can I contact employers directly through the platform?
                      </span>
                    </summary>

                    <article className="px-6 py-2">
                      <p style={{ fontSize: "10px" }} className="text-gray-700">
                        Yes, you can apply to jobs directly through the
                        platform. Some listings might include contact
                        information for inquiries, but we recommend using our
                        messaging system for initial communication.
                      </p>
                    </article>
                  </details>
                </div>
                {/* 4 */}
                <div className="shadow shadow-blue-600 rounded-xl">
                  <details className="group">
                    <summary className="flex items-center gap-3 px-4 py-3 text-xs font-medium marker:content-none hover:cursor-pointer">
                      <MdOutlineArrowRight
                        size={16}
                        className="transition group-open:rotate-90"
                      />
                      <span>
                        How can I improve my chances of getting hired?
                      </span>
                    </summary>

                    <article className="px-6 py-2">
                      <p style={{ fontSize: "10px" }} className="text-gray-700">
                        Our blog features articles with tips on resume writing,
                        interview preparation, and career advice. These
                        resources can help you enhance your job search strategy.
                      </p>
                    </article>
                  </details>
                </div>
                {/* 5 */}
                <div className="shadow shadow-blue-600 rounded-xl">
                  <details className="group">
                    <summary className="flex items-center gap-3 px-4 py-3 text-xs font-medium marker:content-none hover:cursor-pointer">
                      <MdOutlineArrowRight
                        size={16}
                        className="transition group-open:rotate-90"
                      />
                      <span>
                        Can I receive job alerts for specific categories?
                      </span>
                    </summary>

                    <article className="px-6 py-2">
                      <p style={{ fontSize: "10px" }} className="text-gray-700">
                        Yes, you can set up job alerts based on your preferred
                        job categories, locations, and other criteria. We will
                        notify you via email when new listings match your
                        preferences.
                      </p>
                    </article>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FrequentlyQues;

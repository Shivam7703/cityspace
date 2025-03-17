"use client";
import React from "react";
import Image from "next/image";
import { aboutdata } from "@/data/homeData";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { FaCircleChevronRight } from "react-icons/fa6";
import Link from "next/link";

function AboutSection() {
  return (
    <section className="lg:px-28 md:p-20 sm:p-12 p-7 max-w-[1580px] mx-auto flex items-stretch flex-wrap justify-between gap-y-7 ">
      <div className="sm:w-[42%] md:py-6 w-full  space-y-4 md:space-y-7">
        {aboutdata?.title1 && (
          <h4 className=" border text-brown2  pl-2 pr-5 font-bold text-sm rounded-full py-2 w-max">
            ● &nbsp; {aboutdata?.title1}
          </h4>
        )}
        {aboutdata?.title2 && (
          <h2 className="text-black font-medium  text-4xl md:text-6xl ">
            {aboutdata?.title2}
          </h2>
        )}
        {aboutdata?.para && (
          <p className="text-zinc-500 text-sm !leading-relaxed font-medium md:text-base">
            {aboutdata?.para}
          </p>
        )}

        <ul className="space-y-4 md:space-y-7 md:!mb-8 !mb-4">
          {aboutdata?.vision?.map((data) => (
            <li key={data.id} className="flex items-center gap-x-4">
              <div className="text-4xl text-brown2">{data?.icon}</div>
              <div>
                <h5 className="font2 font-medium mb-2 md:text-2xl text-xl  text-black">
                  {data.heading}
                </h5>
                <p className="text-zinc-500 !leading-snug sm:text-base">{data.text}</p>
              </div>
            </li>
          ))}
        </ul>
        <Link href={"/"} >
          <div className="flex  gap-2 p-2 text-black hover:text-white font-bold rounded-[29px] group relative bg-white overflow-hidden items-center flex-row w-max border">
            <p className="ml-5 mr-3 z-20">About Our Company</p>
            <FaCircleChevronRight className="text-brown2 text-4xl bg-white group-hover:text-black duration-200  rounded-full z-20" />

            <div className="group-hover:w-full duration-300 h-full bg-brown2 absolute z-10 w-0 top-0 right-0"></div>
          </div>
        </Link>
      </div>
      <div
       
        className="sm:w-[52%] w-full min-h-96 relative"
      >
        {aboutdata?.img2 && (
          <Image
            src={aboutdata?.img2}
            alt="About"
            className=" rounded-2xl duration-300 absolute z-10 top-0 shadow-lg right-0 w-[80%] h-full rounded-t-full   object-cover"
          />
        )}
        {aboutdata?.img && (
          <Image
            src={aboutdata?.img}
            alt="About"
            className="animate-bounce3 rounded-2xl duration-300 absolute z-20 bottom-[15%] shadow-lg left-0 w-[40%] h-[60%] border-8 border-white object-cover "
          />
        )}
      </div>
    </section>
  );
}

export default AboutSection;

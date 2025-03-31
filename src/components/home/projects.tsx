"use client";
import React from "react";
import Image from "next/image";
import { FaCircleChevronRight } from "react-icons/fa6";
import Link from "next/link";
import { projectData } from "@/data/homeData";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

export default function Project() {
  return (
    <div className="lg:px-28 md:p-20 sm:p-12 p-7 bg-blue1  flex max-md:flex-wrap justify-between gap-y-10 relative">
      <div className="md:sticky h-full top-28  md:w-[38%] w-full max-sm:text-center flex flex-col max-sm:items-center gap-y-4">
        {projectData?.icon && (
          <div className="text-brown2 text-2xl sm:text-5xl p-3 rounded-full border-2 border-brown2 w-max">
            {projectData.icon}
          </div>
        )}
        {projectData?.title1 && (
          <h4 className="text-brown2 text-sm  font-bold">
            {projectData.title1}
          </h4>
        )}
        {projectData?.title2 && (
          <h2 className="text-white text-3xl md:mb-28 font-medium md:text-6xl max-w-xl">
            {projectData.title2}
          </h2>
        )}
        {projectData?.para && (
          <p className="text-zinc-200 border-t md:mb-14 mb-5 border-[#ffffff81] pt-4 font-medium text-base max-w-xl">
            {projectData.para}
          </p>
        )}
        <Link href={"/"} className="w-max">
          <div className="flex  gap-2 p-2 text-black hover:text-white font-bold rounded-[29px] group relative bg-white overflow-hidden items-center flex-row h-full">
            <p className="ml-5 mr-3 z-20">View All Projects</p>
            <FaCircleChevronRight className="text-brown2 text-4xl bg-white group-hover:text-black duration-200  rounded-full z-20" />

            <div className="group-hover:w-full duration-300 h-full bg-brown2 absolute z-10 w-0 top-0 right-0"></div>
          </div>
        </Link>
      </div>
      <div className="sm:w-[54%] w-full space-y-8">
        {projectData?.projects &&
          projectData?.projects.map((pro: any) => (
            <div
              key={pro.id}
              className="lg:h-[500px] relative md:h-96 h-72 w-full group rounded-3xl overflow-hidden"
            >
              <Image
                src={pro?.img}
                alt=""
                className="w-full h-full absolute z-10 top-0 left-0 group-hover:scale-110 duration-300"
              />
              <div className="absolute z-20 w-full sm:p-14 p-6 flex justify-between text-white items-end h-full bg-gradient-to-t from-[#000000ce] to-transparent top-0 left-0 ">
                <div>
                  <h2 className="sm:text-3xl text-2xl">{pro.title}</h2>
                  <h4 className="sm:mt-4 mt-2 font-bold text-sm">{pro.text}</h4>
                </div>
                <div>
                  <Link
                    href="#"
                    className="flex items-center gap-x-2 group/link"
                  >
                    <BsArrowUpRightCircleFill className="text-brown2 rounded-full text-3xl sm:text-6xl bg-white group-hover/link:rotate-45 duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

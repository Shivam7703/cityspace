import { projectData } from "@/data/homeData";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

function Servicecards() {
  return (
    <section className="lg:px-28 md:p-20 sm:p-12 p-7">
      <div className="w-full text-center flex flex-col items-center gap-y-4 mb-7 md:mb-14">
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
          <h2 className="text-black text-3xl  font-medium md:text-6xl max-w-3xl">
            {projectData.title2}
          </h2>
        )}
        {projectData?.para && (
          <p className="text-zinc-600 border-t md:mb-14 mb-5 border-[#0505058c] pt-4 font-medium text-base max-w-3xl">
            {projectData.para}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {projectData?.projects &&
    projectData?.projects.map((pro: any) => (
      <div
        key={pro.id}
        className="relative h-full w-full group rounded-3xl overflow-hidden"
      >
        <Image
          src={pro?.img}
          alt=""
          className="w-full h-full object-cover min-h-64 group-hover:scale-110 duration-300"
        />
        <h4 className="font2 lg:text-7xl text-5xl text-white absolute top-4 right-4 z-40 duration-200 opacity-65 group-hover:opacity-100 font-extrabold">0{pro?.id}</h4>
        <div className="absolute z-20 w-full sm:p-14 p-6 flex justify-between text-white items-end h-full bg-gradient-to-t from-[#000000ce] to-transparent top-0 left-0">
          <div>
            <h2 className="sm:text-3xl text-2xl">{pro.title}</h2>
            <h4 className="sm:mt-4 mt-2 font-bold text-sm">{pro.text}</h4>
          </div>
          <div>
            <Link
              href="#"
              className="flex items-center gap-x-2 group/link"
            >
              <BsArrowUpRightCircleFill className="text-brown2 rounded-full text-3xl lg:text-6xl bg-white group-hover/link:rotate-45 duration-300" />
            </Link>
          </div>
        </div>
      </div>
    ))}
</div>

    </section>
  );
}

export default Servicecards;

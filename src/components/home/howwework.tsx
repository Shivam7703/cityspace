"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';


export default function HowweWork({aboutdata}:any) {
  return (
    
    <section className=" md:p-20  sm:p-12 p-7 ">
       <div className="w-full text-center flex flex-col items-center gap-y-4 mb-11 md:mb-16">
              {aboutdata?.icon && (
                <div className="text-brown2 text-2xl sm:text-5xl p-3 rounded-full border-2 border-brown2 w-max">
                  {aboutdata.icon}
                </div>
              )}
              {aboutdata?.title1 && (
                <h4 className="text-brown2 text-sm font-bold">
                  {aboutdata.title1}
                </h4>
              )}
              {aboutdata?.title2 && (
                <h2 className="text-black text-3xl font-medium  md:text-6xl max-w-3xl">
                  {aboutdata.title2}
                </h2>
              )}
            </div>

            <div className=" gap-y-8 p-3 py-7 md:!py-12 flex flex-wrap items-stretch w-full">
        {aboutdata?.cards?.map((card: any) => (
          <div
            key={card.id}
            className="lg:w-1/4 sm:w-1/2 w-full max-sm:border-b max-sm:pb-4 lg:border-r border-zinc-300 sm:px-8 px-3 group text-black last:border-none"
          >
            <div className="text-5xl md:text-6xl duration-200 group-hover:-translate-y-4">
              {card?.icon}
            </div>
            <h2 className="mt-4 md:mt-6 text-2xl duration-200 font-medium  group-hover:text-brown2 ">
              {card?.heading}
            </h2>
            <p className="text-sm md:text-base font-medium my-4 md:my-6 text-zinc-500">{card?.text}</p>

            <Link href="#" className="flex items-center gap-x-2 group/link">
              <p className="text-sm md:font-extrabold">LEARN MORE</p> 
              <BsArrowUpRightCircleFill className="text-brown2 rounded-full text-xl bg-white group-hover/link:rotate-45 duration-300" />
            </Link>
          </div>
        ))}
      </div>
  
  </section>
  )
}
 

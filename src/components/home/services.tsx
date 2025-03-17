"use client";
import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import { banner3, bgImg } from '@/assets';


export default function ServiceSlider({aboutdata}:any) {
  return (
    
    <section className=" md:p-20  sm:p-12 p-6  static-bg">
     
       <div className="w-full text-center flex flex-col items-center gap-y-4 mb-7 md:mb-14">
              {aboutdata?.icon && (
                <div className="text-brown2 text-3xl sm:text-5xl p-3 rounded-full border-2 border-brown2 w-max">
                  {aboutdata.icon}
                </div>
              )}
              {aboutdata?.title1 && (
                <h4 className="text-brown2 text-sm font-bold">
                  {aboutdata.title1}
                </h4>
              )}
              {aboutdata?.title2 && (
                <h2 className="text-white text-3xl font-medium  md:text-6xl max-w-3xl">
                  {aboutdata.title2}
                </h2>
              )}
            </div>

            <div className=" gap-y-8 py-5  flex flex-wrap justify-between items-stretch w-full">
        {aboutdata?.cards?.map((card: any) => (
          <div
            key={card.id}
            className="lg:w-[31.5%] w-[48%] bg-white duration-200 hover:rounded-none rounded-3xl hover:shadow-xl sm:p-8 p-3 group text-black"
          >
            <div className="text-4xl md:text-6xl text-brown2">
              {card?.icon}
            </div>
            <h2 className="mt-3 md:mt-6 sm:text-2xl duration-200 font-medium  text-xl ">
              {card?.heading}
            </h2>
            <p className="text-sm md:text-base font-medium md:mb-9 mb-6 mt-3 md:mt-6 text-zinc-500">{card?.text}</p>

            <Link href="#" className="flex items-center gap-x-2 group/link">
              <p className="text-sm sm:font-extrabold">LEARN MORE</p> 
              <BsArrowUpRightCircleFill className="text-brown2 rounded-full text-xl bg-white group-hover/link:rotate-45 duration-300" />
            </Link>
          </div>
        ))}
      </div>
  
  </section>
  )
}
 

"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { fadeIn,  staggerContainer} from '@/utils/motion';
import { WhychooseData } from '@/data/homeData';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import CountUp from 'react-countup';

export default function WhyChoose() {
 
  return (
    
    <motion.div  variants={staggerContainer(0.1, 0)} // Adjusted stagger settings
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }} className='lg:p-28 sm:p-12 px-7 py-11 max-w-[1650px] mx-auto flex flex-wrap items-stretch justify-between gap-y-7  overflow-hidden' >
      

      <motion.div
       variants={fadeIn("left", "tween", 0.3, 1)} className='sm:w-[43%] w-full space-y-7'>
 {WhychooseData?.title1 && (
          <h4 className=" border text-brown2  pl-2 pr-5 font-bold text-sm rounded-full py-2 w-max">
            ● &nbsp; {WhychooseData?.title1}
          </h4>
        )}
        {WhychooseData?.title2 && (
          <h2 className="text-black font-medium  text-4xl md:text-6xl ">
            {WhychooseData?.title2}
          </h2>
        )}
        {WhychooseData?.para && (
          <p className="text-zinc-500 text-sm !leading-relaxed font-medium md:text-base">
            {WhychooseData?.para}
          </p>
        )}
      <div className='flex flex-wrap justify-between items-stretch'>{WhychooseData?.counts?.map((count)=>(
        <div key={count?.id} className='w-[45%] py-2'> 
        <div className=" text-brown2 font2 md:text-4xl text-2xl md:mb-3 xl:text-6xl">
        <CountUp start={0} end={count.amount} delay={0.2} duration={2.75} separator="," /><span>+</span>
        </div>
        <h3 className='font2 md:text-2xl text-black text-lg'>{count?.title}</h3>
        <div className='border-b mt-3 max-w-56 mb-4'></div>
        <p className='text-zinc-600'>{count?.text}</p>
        </div>
      ))
}</div>
      
      </motion.div>

      <motion.div     variants={fadeIn("right", "tween", 0.3, 1)}
 className="sm:w-[50%] max-h-[720px] w-full min-h-96 relative group"
    >{WhychooseData?.img2 && <Image src={WhychooseData?.img2} alt='About' className='group-hover:top-[20%] rounded-2xl duration-300 absolute z-10 top-0 shadow-lg right-0 w-[70%] h-[80%] border-8 border-white  object-cover'/>}
                 {WhychooseData?.img && <Image src={WhychooseData?.img} alt='About' className='group-hover:bottom-[20%] rounded-2xl duration-300 absolute z-20 bottom-0 shadow-lg left-0 w-[70%] h-[80%] border-8 border-white object-cover'/>}
                 </motion.div>
    </motion.div>
  )
}


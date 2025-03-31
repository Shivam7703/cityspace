"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { fadeIn,  staggerContainer} from '@/utils/motion';
import { WhychooseData2 } from '@/data/homeData';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import Faq from '../global/faq';

export default function WhyChoose2() {

  return (
    
    <motion.div  variants={staggerContainer(0.1, 0)} // Adjusted stagger settings
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }} className='lg:p-28 sm:p-12 px-7 py-11 max-w-[1650px] mx-auto flex flex-wrap items-stretch justify-between gap-y-7  overflow-hidden' >
      

      <motion.div
       variants={fadeIn("left", "tween", 0.3, 1)} className='sm:w-[43%] w-full space-y-7'>
 {WhychooseData2?.title1 && (
          <h4 className=" border text-brown2  pl-2 pr-5 font-bold text-sm rounded-full py-2 w-max">
            ● &nbsp; {WhychooseData2?.title1}
          </h4>
        )}
        {WhychooseData2?.title2 && (
          <h2 className="text-black font-medium  text-4xl md:text-6xl ">
            {WhychooseData2?.title2}
          </h2>
        )}
        {WhychooseData2?.para && (
          <p className="text-zinc-500 text-sm !leading-relaxed font-medium md:text-base">
            {WhychooseData2?.para}
          </p>
        )}
      <div className='border-b my-4'></div>
<Faq data={WhychooseData2?.faqs}/>
      
      </motion.div>

      <motion.div     variants={fadeIn("right", "tween", 0.3, 1)}
 className="sm:w-[50%] max-h-[720px] w-full min-h-96 relative group"
    >{WhychooseData2?.img2 && <Image src={WhychooseData2?.img2} alt='About' className='group-hover:top-[20%] rounded-2xl duration-300 absolute z-10 top-0 shadow-lg right-0 w-[70%] h-[80%] border-8 border-white  object-cover'/>}
                 {WhychooseData2?.img && <Image src={WhychooseData2?.img} alt='About' className='group-hover:bottom-[20%] rounded-2xl duration-300 absolute z-20 bottom-0 shadow-lg left-0 w-[70%] h-[80%] border-8 border-white object-cover'/>}
                 </motion.div>
    </motion.div>
  )
}


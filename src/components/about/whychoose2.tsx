"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { fadeIn,  staggerContainer} from '@/utils/motion';
import { WhychooseData2 } from '@/data/homeData';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';

export default function WhyChoose2() {
  const [expandedCity, setExpandedCity] = useState<number>(1);

  function toggleCity(cityId: number) {
    setExpandedCity(cityId); // Toggles FAQ visibility for cities
  }
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
       {/* Cities as FAQ */}
       {WhychooseData2?.faqs.map((city) => (
                <div key={city.id} className="mt-4 border-b pb-4">
                  {/* FAQ Question */}
                  <div
                    onClick={() => toggleCity(city.id)}
                    className="flex justify-between items-center cursor-pointer text-xl md:text-2xl text-zinc-800 font2 "
                  >
                    {city.que}

 
                    <BsArrowUpRightCircleFill className={` duration-300 ${expandedCity === city.id ? "rotate-180 " :"text-brown2"}`} />
                   
                  </div>

                  {/* FAQ Answer with Transition */}
                  <div
                    className={`overflow-hidden transition-all duration-1000 ${
                      expandedCity === city.id
                        ? "max-h-20 mt-5 "
                        : "max-h-0"
                    }`}
                  >
                    <p className="md:!text-base h-20 overflow-auto !leading-relaxed text-sm font-medium text-zinc-500">
                      {city.ans}
                    </p>
                   
                  </div>
                </div>
              ))}
      </motion.div>

      <motion.div     variants={fadeIn("right", "tween", 0.3, 1)}
 className="sm:w-[50%] max-h-[720px] w-full min-h-96 relative group"
    >{WhychooseData2?.img2 && <Image src={WhychooseData2?.img2} alt='About' className='group-hover:top-[20%] rounded-2xl duration-300 absolute z-10 top-0 shadow-lg right-0 w-[70%] h-[80%] border-8 border-white  object-cover'/>}
                 {WhychooseData2?.img && <Image src={WhychooseData2?.img} alt='About' className='group-hover:bottom-[20%] rounded-2xl duration-300 absolute z-20 bottom-0 shadow-lg left-0 w-[70%] h-[80%] border-8 border-white object-cover'/>}
                 </motion.div>
    </motion.div>
  )
}


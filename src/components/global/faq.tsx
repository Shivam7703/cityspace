"use client";
import React, { useState } from 'react'
import { BsArrowUpRightCircleFill } from 'react-icons/bs';

function Faq({data}:any) {
    const [expandedCity, setExpandedCity] = useState<number>(1);

    function toggleCity(cityId: number) {
      setExpandedCity(cityId); // Toggles FAQ visibility for cities
    }
  return (
    <>
       {data.map((city :any) => (
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
                          <p className="md:!text-base max-h-20 overflow-auto !leading-relaxed text-sm font-medium text-zinc-500">
                            {city.ans}
                          </p>
                         
                        </div>
                      </div>
                    ))}
    </>
  )
}

export default Faq

import React from 'react';
import { howwork } from '@/data/homeData';

export default function Servicesec2() {
  return (
    
    <>
              {howwork?.title2 && (
                <h2 className="text-black text-3xl font-medium my-8 md:text-5xl">
                  {howwork.title2}
                </h2>
              )}

            <div className=" gap-y-5 justify-between flex flex-wrap items-stretch w-full">
        {howwork?.cards?.map((card: any) => (
          <div
            key={card.id}
            className="w-[48.5%] border border-zinc-300 sm:p-8 p-4 rounded-xl group text-black "
          >
            <div className="text-5xl md:text-6xl duration-200 group-hover:-translate-y-4">
              {card?.icon}
            </div>
            <h2 className="mt-3 md:mt-5 text-lg md:text-2xl duration-200 font-medium  group-hover:text-brown2 ">
              {card?.heading}
            </h2>
            <p className="text-sm md:text-base font-medium mt-3 md:mt-5 text-zinc-500">{card?.text}</p>
          </div>
        ))}
      </div>
  
  </>
  )
}
 

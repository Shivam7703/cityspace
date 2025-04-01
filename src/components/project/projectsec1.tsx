import { projectData } from '@/data/homeData'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Projectsec1() {
  return (
    <section className=" md:p-20  sm:p-12 p-7 ">
       <div className="w-full text-center flex flex-col items-center gap-y-4 mb-11 md:mb-16">
              {projectData?.icon && (
                <div className="text-brown2 text-2xl sm:text-5xl p-3 rounded-full border-2 border-brown2 w-max">
                  {projectData.icon}
                </div>
              )}
              {projectData?.title1 && (
                <h4 className="text-brown2 text-sm font-bold">
                  {projectData.title1}
                </h4>
              )}
              {projectData?.title2 && (
                <h2 className="text-black text-3xl font-medium  md:text-6xl max-w-3xl">
                  {projectData.title2}
                </h2>
              )}
            </div>
<div className=' gap-y-8 p-3 py-7 md:!py-12 flex flex-wrap justify-between items-stretch w-full'>
{projectData?.projects &&
          projectData?.projects.slice(0,4).map((pro: any) => (
<div key={pro?.id} className='lg:w-[23.4%] group sm:w-[48%] w-full'>
  <div className='relative md:h-96 h-64 mb-4 rounded-xl overflow-hidden'>
    <Image src={pro?.img} alt={"image"} className='absolute duration-300 top-0 left-0 w-full h-full object-cover group-hover:scale-110'/>
    <h4 className="font2 lg:text-7xl text-5xl text-white absolute top-4 right-4 z-40 duration-200 opacity-65 group-hover:opacity-100 font-extrabold ">0{pro?.id}</h4> 
  </div>
  <Link href={"projects/xyz"} className='sm:text-3xl hover:text-brown2 text-2xl font2  text-black'>{pro?.title}</Link>
  <p className='mt-3 text-zinc-800'>Once the design fee has been agreed, we will then visit the property to carry out a full site survey.</p>
</div>
          ))}
</div>
    </section>
  )
}


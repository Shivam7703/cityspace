import React from 'react'
import Servicesec2 from './section2'
import Servicemain from './main'
import { WhychooseData2 } from '@/data/homeData'
import Faq from '../global/faq'
import Aside from './aside'



export default function Servicedetails() {
  return (
    <div className='flex flex-wrap justify-between md:flex-row-reverse gap-y-7 lg:px-28 md:p-20 sm:p-16 p-7 relative min-h-screen w-full'>

    <div className='md:w-[64%] w-full '>
      <Servicemain/>
      <Servicesec2/>
      
      <h2 className="text-black text-3xl font-medium my-8 md:text-5xl">
        Everything you need to know about
      </h2>
      
      <Faq data={WhychooseData2?.faqs}/>
    </div>

    <div className='md:w-[27%] w-full md:sticky top-10 space-y-5 sm:space-y-12 h-full'>
      <Aside/>
    </div>
  </div>
  )
}


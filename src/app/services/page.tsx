import Banner from '@/components/global/banner'
import Craft from '@/components/home/crafting'
import HowweWork from '@/components/home/howwework'
import Servicecards from '@/components/service/cards'
import { howwork, serviceBanner } from '@/data/homeData'
import React from 'react'

function page() {
  return (
    <>
         <Banner img ={serviceBanner?.img}
      title={serviceBanner.title}
      para={serviceBanner.para}
      slug={serviceBanner.slug}/>
      <Servicecards/>
<Craft/>
      <HowweWork aboutdata={howwork}/>
      
    </>
  )
}

export default page

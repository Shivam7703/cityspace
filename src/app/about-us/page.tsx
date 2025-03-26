import Bestchoice from '@/components/about/bestchoice'
import Mission from '@/components/about/mission'
import WhyChoose2 from '@/components/about/whychoose2'
import Banner from '@/components/global/banner'
import CountDown from '@/components/global/Contdown'
import AboutSection from '@/components/home/AboutSection'
import { aboutBanner, countDown } from '@/data/homeData'
import React from 'react'

function page() {
  return (
    <>
      <Banner img ={aboutBanner?.img}
title={aboutBanner.title}
para={aboutBanner.para}
slug={aboutBanner.slug}/>
<AboutSection isBtn={false}/>
<CountDown data={countDown}/>
<Mission/>
<Bestchoice/>
<WhyChoose2/>
    </>
  )
}

export default page

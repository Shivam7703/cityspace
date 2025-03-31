import Banner from '@/components/global/banner'
import CountDown from '@/components/global/Contdown'
import Projectsec1 from '@/components/project/projectsec1'
import Projectsec2 from '@/components/project/projectsec2'
import { countDown } from '@/data/homeData'
import React from 'react'

function page() {
  return (
    <>
   <Banner img ={""}
    title="All Project"
    para="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit id adipisci laboriosam amet praesentium illum?"
    slug="projets"/>
    <Projectsec1/>
    <Projectsec2/>
    <CountDown data={countDown}/>

    </>
  )
}

export default page

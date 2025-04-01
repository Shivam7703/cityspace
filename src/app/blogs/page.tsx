import Banner from '@/components/global/banner'
import Blogs from '@/components/home/blog';
import React from 'react'

function page() {
  return (
    <>
      <Banner img ={""}
                  title="Our Blogs"
                  para="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit id adipisci laboriosam amet praesentium illum?"
                  slug="slug here"/>
                  <Blogs/>
                  
    </>
   
  )
}

export default page;

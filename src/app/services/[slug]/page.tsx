import Banner from '@/components/global/banner'
import Servicedetails from '@/components/service/service-details';
import React from 'react'

function page() {
  return (
    <>
      <Banner img ={""}
                  title="Service Detail"
                  para="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit id adipisci laboriosam amet praesentium illum?"
                  slug="slug here"/>
                  <Servicedetails/>
    </>
   
  )
}

export default page;

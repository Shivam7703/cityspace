import Banner from '@/components/global/banner'
import Servicedetails from '@/components/service/service-details';
import { serviceData } from '@/data/homeData';
import React from 'react';

type Props = {
  params: {
    slug: string;
  };
};

function page({ params }: Props) {
const singleService = serviceData?.services.find((service :any) => {const ServiceName = service.title.replace(/\s/g, "");
  const slugName = params?.slug.replace(/%20/g, ""); 
  return ServiceName.toLowerCase() === slugName.toLowerCase();})


  return (
    <>
      <Banner img ={singleService?.img}
                  title={singleService?.title}
                  para={singleService?.banner}
                  slug={`services / ${singleService?.title?.toLowerCase()}`} />


                  <Servicedetails service={singleService}/>
    </>
   
  )
}

export default page;

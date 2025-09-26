import Banner from '@/components/global/banner';
import Servicedetails from '@/components/service/service-details';
import { serviceData } from '@/data/homeData';
import { notFound } from 'next/navigation';
import React from 'react';

type Props = {
  params: {
    slug: string;
  };
};

// Generate static paths for all services
export async function generateStaticParams() {
  return serviceData.services.map((service: any) => {
    const slug = service.title.replace(/\s+/g, '-').toLowerCase();
    return { slug };
  });
}

export default function Page({ params }: Props) {
  const decodedSlug = decodeURIComponent(params.slug).toLowerCase();

  const singleService = serviceData.services.find((service: any) => {
    const serviceSlug = service.title.replace(/\s+/g, '-').toLowerCase();
    return serviceSlug === decodedSlug;
  });

  if (!singleService) {
    notFound();
  }

  return (
    <>
      <Banner
        img={singleService.img}
        title={singleService.title}
        para={singleService.banner}
        slug={`services / ${singleService.title.toLowerCase()}`}
      />
      <Servicedetails service={singleService} />
    </>
  );
}

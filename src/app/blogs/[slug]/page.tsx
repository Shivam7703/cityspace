import React from 'react';
import Banner from '@/components/global/banner';
import { blogData } from '@/data/homeData';
import Aside from '@/components/service/aside';
import Image from 'next/image';

type Props = {
  params: {
    slug: string;
  };
};

const Page = ({ params }: Props) => {
  // Normalize the slug and blog titles to compare them
  const slugName = decodeURIComponent(params.slug).replace(/\s/g, '').toLowerCase();

  const singleBlog = blogData.blogs.find((blog: any) => {
    const blogName = blog.title.replace(/\s/g, '').toLowerCase();
    return blogName === slugName;
  });

  if (!singleBlog) {
    return <div>Blog not found</div>;
  }

  return (
    <>
      <Banner
        img=""
        title={`${singleBlog.title.slice(0, 20)}...`}
        para=""
        slug={`services / ${singleBlog.title.toLowerCase()}`}
      />

     
       <div className='flex flex-wrap justify-between  gap-y-7 lg:px-28 md:p-20 sm:p-16 p-7 relative min-h-screen w-full'>

<div className='md:w-[64%] w-full '>
<Image src={singleBlog.img} className='w-full object-cover max-h-[550px]' alt={"img"} />
<div
        className="content"
        dangerouslySetInnerHTML={{ __html: singleBlog.text2 }}
      />
</div>

<div className='md:w-[27%] w-full md:sticky top-10 space-y-5 sm:space-y-12 h-full'>
  <Aside title={`${singleBlog.title.slice(0, 28)}...`}/>
</div>
</div>
    </>
  );
};

export default Page;

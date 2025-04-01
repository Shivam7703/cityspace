"use client";
import { projectData } from '@/data/homeData';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import { IoMdArrowDropdownCircle } from 'react-icons/io';

export default function Projectsec2() {
  const lineRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateLineHeight = () => {
      if (!sectionRef.current || !lineRef.current) return;
      
      const { top, height } = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollProgress = Math.min(1, Math.max(0, (-top) / (height - viewportHeight)));
      
      lineRef.current.style.height = `${scrollProgress * (height - 100)}px`;
    };

    const handleScroll = () => {
      requestAnimationFrame(updateLineHeight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section  className="p-6 sm:p-16 bg-blue1">
      <div className="w-full text-center flex flex-col items-center gap-y-4 mb-11 md:mb-16">
        {projectData?.icon && (
          <div className="text-brown2 text-2xl sm:text-5xl p-3 rounded-full border-2 border-brown2 w-max">
            {projectData.icon}
          </div>
        )}
        <h4 className="text-brown2 text-sm font-bold">{projectData?.title1}</h4>
        <h2 className="text-white text-3xl font-medium md:text-6xl max-w-3xl">
          {projectData?.title2}
        </h2>
      </div>

      <div className="relative gap-y-8 py-7 md:py-12 flex flex-wrap max-sm:justify-end justify-between overflow-y-hidden" ref={sectionRef}>
      <div
  ref={lineRef}
  className="absolute sm:left-1/2 left-2 z-20 -translate-x-1/2 w-1 top-3 transition-all duration-300"
>
  <div
    className="w-full h-full bg-white/80"
  />
  <IoMdArrowDropdownCircle className="text-brown2 text-xs sm:text-2xl bg-white rounded-full -ml-1 sm:-ml-[10px]" />
</div>


<div
          className="absolute sm:left-1/2 left-2 z-10 -translate-x-1/2 bg-brown2 h-[94%] w-1 top-3 transition-all duration-300"
        />

        {projectData?.projects?.map((pro) => (
          <div
            key={pro.id}
            className="lg:h-[500px] sm:w-[47%] w-[90%] relative md:h-96 h-64 group rounded-3xl overflow-hidden"
          >
            <Image
              src={pro.img}
              alt=""
              fill
              className="object-cover group-hover:scale-110 duration-300"
            />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-y-7 p-6 text-center text-white bg-gradient-to-t from-black/80 to-black/10">
              <h2 className="text-2xl sm:text-3xl">{pro.title}</h2>
              <h4 className="text-sm font-bold">{pro.text}</h4>
              <Link href={"projects/xyz"} className="flex items-center gap-x-2 group/link">
                <BsArrowUpRightCircleFill className="text-brown2 rounded-full text-3xl sm:text-6xl bg-white group-hover/link:rotate-45 duration-300" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
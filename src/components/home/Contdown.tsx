"use client";
import CountUp from "react-countup";

function CountDown({ data }: any) {
  
  return (
    <section  className="relative  border-zinc-300 border-y">
      <div className="w-full px-4 py-6 lg:px-20 md:py-14  sm:px-14 mx-auto flex flex-wrap gap-y-8 sm:gap-y-12  justify-between">
        {data?.map((counts: any) => (
          <div
            key={counts?.id}
            className="text-center max-md:pb-3 border-zinc-300 group last:border-none lg:border-r lg:w-1/4 w-1/2 md:px-12"
          >
            <div className="text-2xl sm:text-4xl lg:text-5xl mx-auto w-max md:mb-3 text-brown2 mt-3 duration-300 group-hover:!-mt-3 group-hover:!mb-3 sticky">
              {counts?.icon}
            </div>
            
             
                  <div className=" text-brown2 font2 md:text-4xl text-3xl md:mb-3 xl:text-7xl font-bold">
                  <CountUp start={0} end={counts.Value} delay={0.2} duration={2.75} separator="," /><span>+</span>
                  </div>
              
         
            <h3
              className={`font-medium text-base sm:text-2xl text-black font2 ${counts.textColor}`}
            >
              {counts?.title}
            </h3>
          </div>
        ))}
      </div>
      <div className="lg:hidden absolute h-[90%] w-[1px] bg-[#00000059] top-[5%] left-1/2 z-10"></div>
      <div className="lg:hidden absolute w-[90%] h-[1px] bg-[#00000059] left-[5%] top-1/2 z-10  "></div>
    </section>
  );
}

export default CountDown;

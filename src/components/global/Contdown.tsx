"use client";
import CountUp from "react-countup";

function CountDown({ data }: any) {
  
  return (
    <section  className="relative  border-zinc-300 border-y">
      <div className="w-full px-4   sm:px-12 mx-auto flex flex-wrap sm:gap-y-12  justify-between">
        {data?.map((counts: any) => (
          <div
            key={counts?.id}
            className=" max-md:px-3 py-6 md:py-14 max-sm:text-center border-zinc-300 group last:border-none lg:border-r lg:w-1/4 w-1/2 md:px-8"
          >
            <h3
              className={`font-medium text-lg sm:text-[29px] sm:mb-3  text-black font2 ${counts.textColor}`}
            >
              {counts?.title}
            </h3>
            <p className="text-zinc-600  sm:text-base text-xs md:mb-8 mb-4">{counts?.para}</p>
            
             
                  <div className=" text-brown2 font2 md:text-4xl text-3xl  xl:text-7xl font-medium">
                  <CountUp start={0} end={counts.Value} delay={0.2} duration={2.75} separator="," /><span>+</span>
                  </div>
              
         
            
          </div>
        ))}
      </div>
      <div className="lg:hidden absolute h-[90%] w-[1px] bg-[#00000059] top-[5%] left-1/2 z-10"></div>
      <div className="lg:hidden absolute w-[90%] h-[1px] bg-[#00000059] left-[5%] top-1/2 z-10  "></div>
    </section>
  );
}

export default CountDown;

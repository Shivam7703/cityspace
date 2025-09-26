import React from 'react'
import { AiFillOpenAI, AiFillRightCircle } from 'react-icons/ai'

function Proform() {

  return (
    <div className="lg:px-28 md:p-20 sm:p-12 p-7 static-bg  flex max-md:flex-wrap justify-between gap-y-10 relative">
      <div className="md:sticky h-full top-28  md:w-[38%] w-full max-sm:text-center flex flex-col max-sm:items-center gap-y-4">
          <div className="text-brown2 text-2xl sm:text-5xl p-3 rounded-full border-2 border-brown2 w-max">
<AiFillOpenAI />
          </div>
          <h4 className="text-brown2 text-sm  font-bold">
                 ● &nbsp; GET IN TOUCH</h4>
          <h2 className="text-white text-3xl md:mb-12 font-medium md:text-6xl max-w-xl">
Ready to transform your space?
          </h2>
          <p className="text-zinc-200 border-t border-[#ffffff81] pt-4 font-medium text-base max-w-xl">
It is a long established fact that reader will be distracted by the readable content of page when looking at its layout. The point of using Lorem is it has a more or less normal distribution of letters, using Content here not.
          </p>
      </div>
      <div className="sm:w-[54%] p-3">
        <form className="flex flex-wrap gap-y-6 sm:gap-y-9 py-3 text-white justify-between" method='POST' action={"/contact.php"}>
                    <input
                      type="text"
                      placeholder="Your Name" name='name'
                      className="w-full placeholder:text-zinc-300 rounded-3xl border border-white p-4 bg-[#00000008] backdrop-blur-md sm:w-[48%] "
                      required
                    />
                    <input
                      type="email"
                      placeholder="Your Email" name='email'
                      className="w-full placeholder:text-zinc-300 rounded-3xl border border-white p-4 bg-[#00000008] backdrop-blur-md sm:w-[48%] "
                      required
                    />
                    <input
                      type="phone"
                      placeholder="Your Contact No." name='phone'
                      className="w-full placeholder:text-zinc-300 rounded-3xl border border-white p-4 bg-[#00000008] backdrop-blur-md sm:w-[48%] "
                      required
                    />
                    <input
                      type="text"
                      placeholder="Subject" name='subject'
                      className="w-full  placeholder:text-zinc-300 rounded-3xl border border-white p-4 bg-[#00000008] backdrop-blur-md sm:w-[48%] "
                      required
                    />
                    <textarea
                      placeholder="Your Message" name='message'
                      className="w-full placeholder:text-zinc-300 rounded-3xl border border-white p-4 bg-[#00000008] backdrop-blur-md  h-28 md:h-44"
                      required
                    ></textarea>
                    <button
                      type="submit"
                      className="flex shadow gap-2 p-2 sm:mt-4 text-white bg-black font-bold  group relative border  overflow-hidden items-center rounded-full flex-row h-full"
                    >
                      <p className="ml-6 mr-4 z-20">Submit Now</p>
                      <AiFillRightCircle className="text-brown2 text-4xl bg-white group-hover:text-black duration-200 rounded-full z-20" />
                      <div className="group-hover:w-full duration-300 h-full bg-brown2 absolute z-10 w-0 top-0 right-0"></div>
                    </button>
                  </form>
        
      </div>
    </div>
  )
}

export default Proform


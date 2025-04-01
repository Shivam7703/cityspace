import React from 'react'
import Image from 'next/image';
import { banner } from '@/assets';


function Servicemain({title ,para, name, img}:any) {
  return (
    <div className='space-y-4 text-zinc-700'>
       <h2 className="text-black text-3xl font-medium  md:text-6xl max-w-3xl">
{title}</h2>
<p>{name}</p>
<Image
            src={img}
            alt="Background Image"
            className="w-full h-full object-cover rounded-xl md:rounded-3xl"
           
          />
          <p>{para}</p>
    </div>
  )
}

export default Servicemain

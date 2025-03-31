import React from 'react'
import Image from 'next/image';
import { banner } from '@/assets';


function Servicemain() {
  return (
    <div className='space-y-4 text-zinc-700'>
       <h2 className="text-black text-3xl font-medium  md:text-6xl max-w-3xl">
Services Name</h2>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim?</p>
<Image
            src={banner}
            alt="Background Image"
            className="w-full h-full object-cover rounded-xl md:rounded-3xl"
           
          />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati inventore doloremque alias, debitis reiciendis nisi unde maiores asperiores quae! Voluptatem maxime obcaecati saepe similique officia ipsa omnis deleniti praesentium quidem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea eius ullam eveniet, odio culpa sed cum natus porro. Deleniti culpa architecto iusto nobis molestias, nulla fugit dignissimos aut. Illum sed obcaecati exercitationem saepe hic doloremque, praesentium, est veritatis atque modi quo. Atque officiis consectetur impedit numquam laborum consequatur enim, sequi quibusdam. Cupiditate laboriosam error voluptas eaque tempore quas, earum libero.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea eius ullam eveniet, odio culpa sed cum natus porro. Deleniti culpa architecto iusto nobis molestias, nulla fugit dignissimos aut. Illum sed obcaecati exercitationem saepe hic doloremque, praesentium, est veritatis atque modi quo. Atque officiis consectetur impedit numquam laborum consequatur enim, sequi quibusdam. Cupiditate laboriosam error voluptas eaque tempore quas, earum libero.</p>
    </div>
  )
}

export default Servicemain

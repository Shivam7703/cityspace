"use client";
import {
  banner, pro11, pro110, pro111, pro113, pro114, pro115, pro116,
  pro12, pro13, pro14, pro15, pro16, pro17, pro18, pro19
} from '@/assets';
import React, { useState } from 'react';
import Image from 'next/image';

function Gallery() {
  const imgs = [
    { id: 1, img: banner },
    { id: 2, img: pro12 },
    { id: 3, img: pro14 },
    { id: 4, img: pro15 },
    { id: 5, img: pro16 },
    { id: 6, img: pro17 },
    { id: 7, img: pro18 },
    { id: 8, img: pro13 },
    { id: 9, img: pro19 },
    { id: 10, img: pro110 },
    { id: 11, img: pro111 },
    { id: 14, img: pro113 },
    { id: 15, img: pro114 },
    { id: 16, img: pro115 },
    { id: 17, img: pro11 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const Imgsrc = imgs[currentIndex].img;

  function ChangeImg(img: any, index: number) {
    setCurrentIndex(index);
  }

  function handlePrev() {
    setCurrentIndex((prev) => (prev === 0 ? imgs.length - 1 : prev - 1));
  }

  function handleNext() {
    setCurrentIndex((prev) => (prev === imgs.length - 1 ? 0 : prev + 1));
  }

  return (
    <div className="sm:py-9 py-6 flex max-md:flex-wrap justify-between gap-y-4 relative">
      <div className="md:sticky md:w-[66%] top-6 left-0 w-full md:h-[700px] h-full relative">
        <Image
          src={Imgsrc}
          alt="Selected"
          className="mx-auto w-full md:rounded-2xl rounded-xl h-full object-contain"
        />
        {/* Prev and Next buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 hover:bg-white text-black pb-3 p-2 rounded-full shadow-md z-10"
        >
          &#8592;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 pb-3 rounded-full shadow-md z-10"
        >
          &#8594;
        </button>
      </div>
      <div className="md:space-y-4 md:w-[32%] w-full max-md:flex max-md:mt-6 px-4 gap-x-5 overflow-x-auto">
        {imgs.map((image, index) => (
          <Image
            key={image.id}
            src={image.img}
            alt={`Gallery image ${image.id}`}
            onClick={() => ChangeImg(image.img, index)}
            className={`cursor-pointer md:rounded-xl rounded-lg max-md:min-w-44 w-full md:h-64 h-28 object-cover ${
              Imgsrc === image.img ? "border-4 border-brown2" : ""
            }`}
            role="button"
            tabIndex={0}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;

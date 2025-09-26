import React from "react";
import Gallery from "./gallery";
import Projectslider from "./Projectslider";
import Proform from "./Proform";

function Projectdetail() {
  const data = [
    {
      id: 1,
      title: "category",
      text: "Residential",
    },
    {
      id: 2,
      title: "Year of inauguration",
      text: "01/07/2025",
    },
    {
      id: 3,
      title: "Created by",
      text: "Tech Innovations Inc.",
    },
  ];

  return (
    <>
      <div className="lg:px-28 md:p-20 sm:p-16 p-7">
        <h1 className=" font-medium text-3xl sm:text-6xl">R86, GK2</h1>
        <div className="flex flex-wrap gap-4 justify-between max-w-3xl my-6">
          {data?.map((card: any) => (
            <div className="" key={card?.id}>
              <h4 className="text-zinc-600 text-xs sm:text-sm">
                {card?.title}
              </h4>
              <h5 className="text-zinc-950 text-base sm:text-lg ">
                {card?.text}
              </h5>
            </div>
          ))}
        </div>
        <Gallery />
        <div className="max-w-7xl space-y-4">
          <h2 className=" font-medium text-3xl sm:text-4xl">Description</h2>
          <p className="text-zinc-600">
                      
This luxury 4BHK flat is located in Greater Kailash 2 (GK2) – R86, one of the most popular and high-end residential areas in South Delhi. The flat is ready to move in, offering spacious rooms, modern design, and a peaceful living environment. It is ideal for families who want both comfort and a premium lifestyle.
          </p>
          <p className="text-zinc-600">

It offers a great location advantage—just minutes away from Nehru Place IT Hub, GK Market, Lajpat Nagar, and South Ex. Whether for daily needs or city connectivity, everything is close by. 
This beautiful residential property is designed and presented by Tech Innovations Inc. It’s a perfect choice for those who want to live in a well-connected and luxurious space in South Delhi.
          </p>
        </div>
      </div>
      <Projectslider />
      <Proform />
    </>
  );
}

export default Projectdetail;

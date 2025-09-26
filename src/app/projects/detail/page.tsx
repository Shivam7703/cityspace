import { probanner } from "@/assets";
import Banner from "@/components/global/banner";
import Projectdetail from "@/components/project/pro-detail";
import React from "react";

function page() {
  return (
    <>
      <Banner
        img={probanner}
        title={"R86, GK2"}
        para={""}
        slug={`Projects / R86, GK2`}
      />
      <Projectdetail />
    </>
  );
}

export default page;

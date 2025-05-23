import AboutSection from "@/components/home/AboutSection";
import { aboutdata, howwork, ourService } from "@/data/homeData";

import Blogs from "@/components/home/blog";
import CountDown from "@/components/global/Contdown";
import BannerSlider from "@/components/home/HomeBanner";
import ServiceSlider from "@/components/home/services";
import Testimonials from "@/components/global/testimonial";
import { countDown } from "@/data/homeData";
import Craft from "@/components/home/crafting";
import HowweWork from "@/components/home/howwework";
import WhyChoose from "@/components/home/whychoose";
import Project from "@/components/home/projects";


export default function Home() {
  return (
    < >
<BannerSlider/>
{/* <Greenbox/> */}
<AboutSection isBtn={true} data={aboutdata}
/>
<CountDown data={countDown}/>
<Craft/>
<HowweWork aboutdata={howwork}/>
<ServiceSlider  data={ourService}/>
<WhyChoose/>
<Testimonials/>
<Project/>

<Blogs/>
  </>
  );
}

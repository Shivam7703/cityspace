import { about, about2, about3, about5, about4, banner, banner2, banner3, banner4, cl1, logo2, about8, about7 } from "@/assets";
import { FcHome, FcServices } from "react-icons/fc";
import { GiAbstract052, GiAqueduct, GiChestnutLeaf, GiDiceTwentyFacesTwenty, GiOilPump } from "react-icons/gi";

import { RiSofaFill } from "react-icons/ri";
import { SiInfluxdb} from "react-icons/si";


// homepage
export const navItemsArray = [
  { "id": 1, "label": "Home", "href": "/home" },
  { "id": 2, "label": "About Us", "href": "/about-us" },
  { 
    "id": 3, 
    "label": "Services", 
    "href": "/services",
    "subNav": [
      { "id": 1, "label": "Interior Design", "href": "/services/interior-design" },
      { "id": 2, "label": "Architecture", "href": "/services/architecture" },
      { "id": 3, "label": "Property Sale Purchase", "href": "/services/property-sale-purchase" },
      { "id": 4, "label": "Building Renovation", "href": "/services/building-renovation" },
      { "id": 5, "label": "Exterior Design", "href": "/services/exterior-design" }
    ]
  },
  { "id": 4, "label": "Projects", "href": "/projects" },
  { "id": 5, "label": "Privacy Policy", "href": "/privacy-policy" },
  { "id": 6, "label": "Blogs", "href": "/blogs" },
  { "id": 7, "label": "Contact Us", "href": "/contact-us" }
]
;
// section1
export const sliderContent = [
  {
    id: 1,
    img: banner,
    title: "Experience the art ofinterior design",
   para:"We design intentional and functional spaces that prioritize comfort and aesthetics, ",
    btntext: "Explore More",
    href: "/",
  },
  {
    id: 2, // Fix duplicate id issue by using unique ids
    img: banner2,
    title: "Curating the perfect pieces to complete ",
 para:"We design intentional and functional spaces that prioritize comfort and aesthetics,",
    btntext: "Contact Us",
    href: "/",
  },
];

// section2
export const aboutdata = {
  img2: banner,
  img: about,

  title1: " WHO WE ARE",
  title2: "We design thoughtful, livable spaces.",
  para:
    "We design intentional and functional spaces that prioritize comfort and aesthetics, blending style with practicality to enhance your everyday living experience.",
  vision: [
    {
      id: 1,
      icon:<RiSofaFill />,

      heading: "Empowering Rural Communities",
      text: "Generating jobs and boosting local economies.",
    },
    {
      id: 2,      icon:<RiSofaFill />,

      heading: "Sustainable Energy Solutions",
      text: "Leading the way in eco-friendly biofuel production.",
    },
    {
      id: 3,      icon:<RiSofaFill />,

      heading: "Trusted Partnerships",
      text:
        "Valuing our distributors, clients, customers, associates, employees, and well-wishers.",
    },
  ],
  title4: "Join us at AI Ecofuels and be part of the change!",
};

// section3
export const crafting = {
  icon:<SiInfluxdb />,

  title1: "CRAFTING THE FUTURE",
  title2: "Trusted expert in architectural design and innovation.",

  slides: [
    {
      id: 1,
      heading: "Interior Design",
      img:banner,
      text: "Interior design is the art and science of enhancing the interior of a building to achieve a healthier.",
    },
    {
      id: 2,      
      heading: "Construction",
      img:banner2,
      text: "Construction classes and subjects are about buildings stand up, how they keep us dry and comfortable.",
    },
    {
      id: 3,  
      heading: "Residential",
      img:banner4,
      text:"The latest residential architecture and interiors projects, including houses, home extensions, apartments.",
    },
    {
      id: 4,     
      heading: "City Planning",
      img:banner3,
      text:"We support sustainable and inclusive planning and design of cities by developing normative work.",
    }
  ],
};


export const countDown=[
  {id:1,
    icon:<GiChestnutLeaf />,
    title:"destinations worldwide",
    Value:"50"
  },{id:2,
    icon:<GiChestnutLeaf />,
    title:"booking completed",
    Value:"750"
  },{id:3,    icon:<GiChestnutLeaf />,
    title:"destinations worldwide",
    Value:"6000"
  },{id:4,     icon:<GiChestnutLeaf />,
    title:"destinations worldwide",
    Value:"50"
  }
]

export const howwork ={
  icon:<SiInfluxdb />,
  title1:"how we work",
  title2:"Interanio helps you realize the potential you see",
  cards:[{
    id:1,
    icon:<FcServices />,
    heading:"Renovation and Remodeling",
    text:"On the other hand, interior design focuses on creating a visually pleasing environment.",
  },
  {
    id:2,
    icon:<FcHome />,
    heading:"Custom Design Consultation",
    text:"We will check all design details with you, assist you with taking measurements, summarise your",
  },
  {
    id:3,
    icon:<FcServices />,
    heading:"Renovation and Remodeling",
    text:"On the other hand, interior design focuses on creating a visually pleasing environment.",
  },
  {
    id:4,
    icon:<FcHome />,
    heading:"Custom Design Consultation",
    text:"We will check all design details with you, assist you with taking measurements, summarise your",
  }],
}

export const ourService ={
  icon:<SiInfluxdb />,
  title1:"professional services",
  title2:"Transforming to reflect your unique style",
  cards:[{
    id:1,
    icon:<GiAbstract052 />    ,
    heading:"Renovation and Remodeling",
    text:"On the other hand, interior design focuses on creating a visually pleasing environment.",
  },
  {
    id:2,
    icon:<GiAqueduct />
    ,
    heading:"Custom Design Consultation",
    text:"We will check all design details with you, assist you with taking measurements, summarise your",
  },
  {
    id:3,
    icon:<GiDiceTwentyFacesTwenty />
    ,
    heading:"Renovation and Remodeling",
    text:"On the other hand, interior design focuses on creating a visually pleasing environment.",
  },
  {
    id:4,
    icon:<GiOilPump />
    ,
    heading:"Custom Design Consultation",
    text:"We will check all design details with you, assist you with taking measurements, summarise your",
  },
  {
    id:5,
    icon:<GiAqueduct />
    ,
    heading:"Custom Design Consultation",
    text:"We will check all design details with you, assist you with taking measurements, summarise your",
  },
  {
    id:6,
    icon:<GiDiceTwentyFacesTwenty />
    ,
    heading:"Renovation and Remodeling",
    text:"On the other hand, interior design focuses on creating a visually pleasing environment.",
  },],
}

export const WhychooseData = {
  img2: about2,
  img: about3,

  title1: " WHY CHOOSE US",
  title2: "We design thoughtful, livable spaces.",
  para:
    "We design intentional and functional spaces that prioritize comfort and aesthetics, blending style with practicality to enhance your everyday living experience.",
  faqs:[
    {
      id:1,
      que:"Building the future cities",
      ans:"Smart buildings are components of smart cities. They encompass shopping malls, universities, airports, and council housing, tower blocks, homes, and offices."
    }, {
      id:2,
      que:"Unique and influential design",
      ans:" We offer a wide range of tours, including cultural, adventure, luxury, and customized itineraries. opular destinations include Europe, Africa (e.g., Morocco),"
    }, {
      id:3,
      que:"Interior and exterior design",
      ans:" We offer a wide range of tours, including cultural, adventure, luxury, and customized itineraries. opular destinations include Europe, Africa (e.g., Morocco),"
    }
  ]
}

export const testimonialData = {
  title1: "TESTIMONIALS",
  title2: "Here's what our satisfied clients are saying",
  
  testimonials: [
    {
      id: 1,
      title: "R.M. Mathur",
      text:
        "In this post, we take a look at the best electric cars currently on the market today and how long it would take to charge each to its full capacity In this post, we take a look at the best electric cars currently on the market today and how long it would take to charge each to its full capacity.",
      img: cl1,
    },
    {
      id: 2,
      title: "Shivam Goyal",
      text:
        "In this post, we take a look at the best electric cars currently on the market today and how long it would take to charge each to its full capacity In this post, we take a look at the best electric cars currently on the market today and how long it would take to charge each to its full capacity.",
      img: cl1,
    },
    {
      id: 3,
      title: "Sageer Ansari",
      text:
        "In this post, we take a look at the best electric cars currently on the market today and how long it would take to charge each to its full capacity In this post, we take a look at the best electric cars currently on the market today and how long it would take to charge each to its full capacity.",
      img: cl1,
    },
  ],
};

export const projectData = {
  icon:<SiInfluxdb />,
  title1: "OUR LATEST PROJECT",
  title2: "A combination of engineering and unique design.",
  para:"The obvious way to combine art and engineering is through architectural or civil engineering. Both of those disciplines design buildings and structures.",
  projects: [
    {
      id: 1,
      title: "Haven & Harmony",
      text:
        "Tech Innovations Inc.",
      img: banner,
    },

    {
      id: 2,
      title: "Haven & Harmony",
      text:
        "Tech Innovations Inc.",
      img: banner2,
    },

    {
      id: 3,
      title: "Haven & Harmony",
      text:
        "Tech Innovations Inc.",
      img: about4,
    },

    {
      id: 4,
      title: "Haven & Harmony",
      text:
        "Tech Innovations Inc.",
      img: about5,
    },
    
  ],
};

export const blogData = {
  icon:<SiInfluxdb />,
  title1: "Blogs & News",
  title2: "Stay Updated With our Latest News And Blogs",
  blogs: [
    {
      id: 1,
      title: "Learn more about the Best Electric Cars and Charging Time",
      text:
        "In this post, we take a look at the best electric cars currently on the market today and how long it would take to charge each to its full capacity.",
      date: "05/09/23",
      img: about7,
    },
    {
      id: 2,
      title: "Learn more about the Best Electric Cars and Charging Time",
      text:
        "In this post, we take a look at the best electric cars currently on the market today and how long it would take to charge each to its full capacity.",
      date: "15/12/23",
      img: about8,
    },
    {
      id: 3,
      title: "Learn more about the Best Electric Cars and Charging Time",
      text:
        "In this post, we take a look at the best electric cars currently on the market today and how long it would take to charge each to its full capacity.",
      date: "05/09/24",
      img: banner4,
    },
    
  ],
};

export const footer = {
  logo: logo2,
  text:
    "lorem At AI Ecofuels, we are revolutionizing the biofuel industry and transforming the lives",

  socials: {
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
    instagram: "https://www.instagram.com//",
    linkedin: "https://www.linkedin.com/school//",
    youtube: "https://www.youtube.com/c/",
  },
  copyrightText: "Copyrights © 2024 . Designed and Manage by ",
  list1: {
    title: "Products",
    links: [
      { id: 1, label: "About", href: "about" },
      { id: 2, label: "Services & Techs", href: "services" },
      { id: 3, label: "Sustainability", href: "sustainability" },
      { id: 4, label: "Blogs", href: "blogs" },
      { id: 5, label: "Contact Us", href: "contact-us" },
    ],
  },

  list2: {
    title: "Main Menus",
    links: [
      { id: 1, label: "About", href: "about" },
      { id: 2, label: "Services & Techs", href: "services" },
      { id: 3, label: "Sustainability", href: "sustainability" },
      { id: 4, label: "Blogs", href: "blogs" },
      { id: 5, label: "Contact Us", href: "contact-us" },
    ],
  },

  newLetter: {
    title: "Contact Us",
    description: "Subscribe to our newsletter to get latest news and updates.",
  },
};




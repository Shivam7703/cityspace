import {
  about,
  about2,
  about3,
  about5,
  about4,
  banner,
  banner2,
  banner3,
  banner4,
  cl1,
  logo2,
  about8,
  about7,
} from "@/assets";
import { AiFillOpenAI } from "react-icons/ai";
import { FcHome, FcServices } from "react-icons/fc";
import {
  GiAbstract052,
  GiAqueduct,
  GiDiceTwentyFacesTwenty,
  GiOilPump,
} from "react-icons/gi";
import { GrLocation } from "react-icons/gr";
import { LuPhone } from "react-icons/lu";

import { RiMailSendLine, RiSofaFill } from "react-icons/ri";

// homepage
export const navItemsArray = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "About Us", href: "/about-us" },
  {
    id: 3,
    label: "Services",
    href: "/services",
    subNav: [
      { id: 1, label: "Interior Design", href: "/services/interior design" },
      { id: 2, label: "Architecture", href: "/services/architecture" },
      {
        id: 3,
        label: "Property Sale",
        href: "/services/property sale",
      },
      {
        id: 4,
        label: "Building Renovation",
        href: "/services/building renovation",
      },
      { id: 5, label: "Exterior Design", href: "/services/exterior design" },
      {
        id: 6,
        label: "Property Purchase",
        href: "/services/property purchase",
      },
    ],
  },
  { id: 4, label: "Projects", href: "/projects" },
  { id: 5, label: "Privacy Policy", href: "/privacy-policy" },
  { id: 6, label: "Blogs", href: "/blogs" },
  { id: 7, label: "Contact Us", href: "/contact-us" },
];

// section1
export const sliderContent = [
  {
    id: 1,
    img: banner,
    welcome: "BEST BUILDERS IN DELHI",
    title: "Designing Spaces That Combine Beauty & Purpose",
    para:
      "We create beautiful and purposeful spaces that feel as good as they look.",
    btntext: "Explore More",
    href: "/services",
  },
  {
    id: 2,
    img: banner2,
    welcome: "INTERIOR DESIGNERS IN DELHI",
    title: "Creating Interiors That Feel Like Home",
    para: "Handpicked elements that make your interior shine with charm.",
    btntext: "Contact Us",
    href: "/contact-us",
  },
];

// section2
export const aboutdata = {
  img2: banner,
  img: about,

  title1: "WHO ARE WE",
  title2: "We Are The Best Builder in Delhi",
  para:
    "Our company takes great pride in delivering strong, reliable, and beautiful construction. We only design buildings we know will be around soon and look nice along the way. The quality and attention to detail we look into make us the best builders in Delhi, and many people come to us to turn their dreams into a reality. ",
  vision: [
    {
      id: 1,
      icon: <RiSofaFill />,

      heading: "Best Quality",
      text:
        "We build structures to exceptional standards for enduring structural integrity.",
    },
    {
      id: 2,
      icon: <RiSofaFill />,

      heading: "Timely Delivery",
      text:
        "Our projects meet their deadlines with complete observation of the set timeline.",
    },
    {
      id: 3,
      icon: <RiSofaFill />,

      heading: "Exceeding the Expectations",
      text: "Our customers' satisfaction remains our highest priority.",
    },
  ],
};

// section3
export const crafting = {
  icon: <AiFillOpenAI />,

  title1: "BUILDING THE FUTURE",
  title2: "Experts in Innovative & Modern Design",

  slides: [
    {
      id: 1,
      heading: "Interior Design",
      img: banner,
      text:
        "Interior design is the art and science of enhancing the interior of a building to achieve a healthier.",
    },
    {
      id: 2,
      heading: "Construction",
      img: banner2,
      text:
        "Construction classes and subjects are about buildings stand up, how they keep us dry and comfortable.",
    },
    {
      id: 3,
      heading: "Residential",
      img: banner4,
      text:
        "The latest residential architecture and interiors projects, including houses, home extensions, apartments.",
    },
    {
      id: 4,
      heading: "City Planning",
      img: banner3,
      text:
        "We support sustainable and inclusive planning and design of cities by developing normative work.",
    },
  ],
};

export const countDown = [
  {
    id: 1,
    para: "Projects Completed Successfully",
    title: "Projects Completed",
    Value: "100",
  },
  {
    id: 2,
    para: "Trusted and Satisfied Clients",
    title: "Happy Customers",
    Value: "1200",
  },
  {
    id: 3,
    para: "Won Excellence Awards in Industry",
    title: "Awards Received",
    Value: "600",
  },
  {
    id: 4,
    para: "Expertise Built for Years",
    title: "Years of Experience",
    Value: "27",
  },
];

export const howwork = {
  icon: <AiFillOpenAI />,
  title1: "HOW DO WE WORK",
  title2: "City Space Converts Your Thoughts to Living Spaces",
  cards: [
    {
      id: 1,
      icon: <FcServices />,
      heading: "Understanding Concept",
      text:
        "We confirm your design approach by discussing your goals and desired outcomes to create the perfect final result.",
    },
    {
      id: 2,
      icon: <FcHome />,
      heading: "Site and survey visit",
      text:
        "We conduct thorough site evaluations and surveys to ensure precise planning and material selection.",
    },
    {
      id: 3,
      icon: <FcServices />,
      heading: "Planning & Designing",
      text:
        "Our team designs precise layouts that merge functionality with style and comfort based on your preferences.",
    },
    {
      id: 4,
      icon: <FcHome />,
      heading: "Execution & Construction",
      text:
        "Through our expertise, we execute plans by implementing perfect workmanship and maintaining continuous focus on every part.",
    },
  ],
};

export const ourService = {
  icon: <AiFillOpenAI />,
  title1: "OUR SERVICES",
  title2: "Services Offered That Match Your Style",
  cards: [
    {
      id: 1,
      icon: <GiAbstract052 />,
      heading: "Interior Design",
      text:
        "We transform your spaces into stylish, functional designs that represent your style and requirements.",
    },
    {
      id: 2,
      icon: <GiAqueduct />,
      heading: "Architecture",
      text:
        "Our team designs buildings that unite creative elements with operational needs, along with the best materials to materialize your project plans.",
    },
    {
      id: 3,
      icon: <GiDiceTwentyFacesTwenty />,
      heading:"Exterior Design",
      text:
        "Our work includes outdoor building improvements that transform your structure into an attractive structure.",
    },
    {
      id: 4,
      icon: <GiOilPump />,
      heading:"Building Renovation",
      text:
        "Our company performs space construction repairs to create rejuvenating looks that maintain comfortable use features.",
    },
    {
      id: 5,
      icon: <GiAqueduct />,
      heading:"Property Sale",
      text:
        "Our organization provides expert assistance to help you find quick property sales at competitive market prices along with dependable service.",
    },
    {
      id: 6,
      icon: <GiDiceTwentyFacesTwenty />,
      heading:"Property Purchase",
      text:
        "We assist in finding and buying the perfect property that fits your needs, budget, and preferences.",
    },
  ],
};

export const WhychooseData = {
  img2: about2,
  img: about3,

  title1: " WHY CHOOSE US",
  title2: "The Best Interior Designer in Delhi",
  para:
    "We design spaces that are comfortable, stylish, and practical for your everyday life.",
  counts: [
    {
      id: 1,
      amount: 1200,
      title: "Happy Client",
      text: "Happy clients bring you positive reviews.",
    },
    {
      id: 2,
      amount: 1000,
      title: "Successful Projects",
      text: "Successful projects provide expert project guidance.",
    },
  ],
};

export const testimonialData = {
  title1: "TESTIMONIALS",
  title2: "Here's what our satisfied clients are saying",

  testimonials: [
    {
      id: 1,
      title: "R.M. Mathur",
      text:
        "City Space perfected the design of our home that we truly love. The group implemented our vision to build the perfect outcome. The complete process moved without trouble, leading to a result that satisfied us highly. ",
      img: cl1,
    },
    {
      id: 2,
      title: "Shivam Goyal",
      text:
        "The project finished on time without causing any problems for us. The interior design elements present a beautiful appearance. The finished design of Cityspace transformed our house into a perfect residence. They are the best interior designers in Delhi. Highly recommended for quality work! ",
      img: cl1,
    },
    {
      id: 3,
      title: "Sageer Ansari",
      text:
        "Through their work, Cityspace created elegant, functional interior designs for our house. The team members demonstrated professionalism throughout while giving full attention to all specified details. We have achieved a comfortable area that welcomes everyone. They truly are the best builders in Delhi.",
      img: cl1,
    },
    {
      id: 3,
      title: "Prashant",
      text:
        "The construction process, along with design delivery, was executed with excellence by Cityspace. Our house now combines spaciousness and modern design characteristics, which perfectly meet our family needs. Great experience with a highly skilled team! Truly the best builders in Delhi.",
      img: cl1,
    },
  ],
};

export const projectData = {
  icon: <AiFillOpenAI />,
  title1: "OUR PROJECTS",
  title2: "Mixing Smart Ideas with Creative Designs",
  para:
    "Our approach stands on individual and distinct designs to develop functional spaces that meet both aesthetic and operational needs. Our careful planning determines everything to achieve functional and attractive spaces.",
  projects: [
    {
      id: 1,
      title: "Haven & Harmony",
      text: "Tech Innovations Inc.",
      img: banner,
    },

    {
      id: 2,
      title: "Haven & Harmony",
      text: "Tech Innovations Inc.",
      img: about8,
    },

    {
      id: 3,
      title: "Haven & Harmony",
      text: "Tech Innovations Inc.",
      img: about4,
    },

    {
      id: 4,
      title: "Haven & Harmony",
      text: "Tech Innovations Inc.",
      img: banner2,
    },
    {
      id: 5,
      title: "Haven & Harmony",
      text: "Tech Innovations Inc.",
      img: banner,
    },

    {
      id: 6,
      title: "Haven & Harmony",
      text: "Tech Innovations Inc.",
      img: about5,
    },
  ],
};

export const blogData = {
  icon: <AiFillOpenAI />,
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
      { id: 1, label: "About", href: "/about" },
      { id: 2, label: "Services & Techs", href: "/services" },
      { id: 3, label: "Sustainability", href: "sustainability" },
      { id: 4, label: "Blogs", href: "/blogs" },
      { id: 5, label: "Contact Us", href: "/contact-us" },
    ],
  },

  list2: {
    title: "Main Menus",
    links: [
      { id: 1, label: "About", href: "/about" },
      { id: 2, label: "Services & Techs", href: "/services" },
      { id: 3, label: "Sustainability", href: "/sustainability" },
      { id: 4, label: "Blogs", href: "/blogs" },
      { id: 5, label: "Contact Us", href: "/contact-us" },
    ],
  },
};

// about Page
export const aboutBanner = {
  title: "About Us",
  para:
    "Cityspace Contracts has been the best builder in Delhi for over 27 years. Surpassing the first design outline to finalize the end product. ",
  slug: "about-us",
  img: banner2,
};

export const aboutdata2 = {
  img2: banner,
  img: about,

  title1: "WHO ARE WE",
  title2: "We Create Comfortable & Liable Spaces",
  para:
    "The real estate and construction industry recognizes Cityspace Contracts as its premier excellence-based corporate name. For 27 years the respected company has maintained its dedication to quality as it continues to establish new benchmarks in turning properties into luxurious family residences. If you're looking to turn your vision of a perfect home into reality, Cityspace Contracts is the builder that will exceed your expectations and deliver a space that is as luxurious as it is functional.",
  vision: [
    {
      id: 1,
      icon: <RiSofaFill />,

      heading: "Superior Quality",
      text:
        "We build structures that provide long-lasting dependability",
    },
    {
      id: 2,
      icon: <RiSofaFill />,

      heading: "On-Time Completion",
      text:
        "We meet every project deadline, which we have communicated to clients at the start",
    },
    {
      id: 3,
      icon: <RiSofaFill />,

      heading: "Exceeding Expectations",
      text: "Your satisfaction is our commitment and highest priority.",
    },
  ],
};

export const WhychooseData2 = {
  img2: about2,
  img: about3,

  title1: " WHY CHOOSE US",
  title2: "Smart Design That Matters ",
  para:
    "We design comfortable environments that look beautiful and serve their purpose to enhance the functional aspects of daily living.",
  faqs: [
    {
      id: 1,
      que: "Unmatched Experience",
      ans:
        "With 27 years of industry expertise, Cityspace Contracts brings a wealth of knowledge to every project, ensuring seamless construction and exceptional results.",
    },
    {
      id: 2,
      que: "Tailored Solutions",
      ans:
        "The company specializes in customizing homes to suit individual tastes, creating spaces that feel uniquely yours.",
    },
    {
      id: 3,
      que: "Customer-Centric Approach",
      ans:
        "Cityspace Contracts prides itself on delivering not just a service but a partnership, ensuring that every client is heard and their needs are met.",
    },
  ],
};

// service page
export const serviceBanner = {
  title: "Our Services",
  para:
    "Expert Building and Interior Design Solutions. From Concept to Completion, We Build Comfort For Your Life! ",
  slug: "services",
  img: banner,
};

export const serviceData = {
  icon: <AiFillOpenAI />,
  title1: "Services We Offer",
  title2: "Creating Spaces That Give You Peace & Comfort",
  para:
    "Cityspace Contracts has built a reputation for delivering homes that are not just structures but masterpieces.",
  services: [
    {
      id: 1,
      title: "Interior Design",
      banner:
        "Creating beautiful and practical spaces that reflect your style perfectly.",
      description:
        "Our team implements your home design aspirations through expert interior design services. Our team converts interior spaces into personal designs that represent your style through furniture selection and color choices and decorating with exquisite elements. Every interior design we create strikes the right balance between usable design features and attractive appeal, which makes your living areas functional yet visually delightful.",
      img: banner,
      how_we_work: [
        {
          id: 1,
          icon: <FcServices />,
          heading: "Consultation",
          para:
            "We need to know how your space type matches with your functional requirements and aesthetic aspirations for the space.",
        },
        {
          id: 2,
          icon: <FcServices />,
          heading: "Concept Creation",
          para:
            "Professionals create visual schemes and design boards with color-mix selections.",
        },
        {
          id: 3,
          icon: <FcServices />,
          heading: "Execution",
          para:
            "The design comes to existence because of expert craftsmen who dedicate their skills.",
        },
        {
          id: 4,
          icon: <FcServices />,
          heading: "Final Walkthrough",
          para:
            "Each element in the design process directly follows your predetermined expectations.",
        },
      ],
      faqs: [
        {
          id: 1,
          que: "Can you design spaces for small homes?",
          ans:
            "Our team excels in design approaches that give you both excellent functionality and exquisite style across narrow room dimensions.",
        },
        {
          id: 2,
          que: "Do you provide furniture selection services?",
          ans:
            "Absolutely! Our team helps find furniture items that are appropriate for your design requirements.",
        },
        {
          id: 3,
          que: "How much does interior design cost?",
          ans:
            "Project costs depend both on the project area and its particular details. We provide estimates upfront.",
        },
        {
          id: 4,
          que: "Can I be involved in the design process?",
          ans:
            "Of course! Participation from you is always welcomed throughout every phase to guarantee customer satisfaction.",
        },
        {
          id: 5,
          que: "Do you work with eco-friendly materials?",
          ans:
            "Sustainable interior solutions come as a service package at our company.",
        },
      ],
    },
    {
      id: 2,
      title: "Architecture",
      banner:
        "We design innovative, functional, and timeless structures for every unique need.",
      description:
        "We focus on efficient, innovative designs with durability as our primary goal in architectural services. Our company, the best architecture in Delhi, supervises the entire development process, beginning with blueprint design and ending with construction monitoring for residential homes and commercial buildings. Every design by our team requires us to balance style with usability against environmental conservation objectives. We prioritize mechanical safety compliance standards during our work to deliver functional spaces that also present visual appeal.",
      img: banner,
      how_we_work: [
        {
          id: 1,
          icon: <FcServices />,
          heading: "Planning",
          para:
            "The site undergoes analysis while our team develops the first draft layouts.",
        },
        {
          id: 2,
          icon: <FcServices />,
          heading: "Design Development",
          para: "Creating blueprints and 3D models.",
        },
        {
          id: 3,
          icon: <FcServices />,
          heading: "Approvals",
          para:
            "Our team verifies that every design upholds legal conduct and meets safety standards.",
        },
        {
          id: 4,
          icon: <FcServices />,
          heading: "Supervision",
          para:
            "We monitor the implementation steps to maintain both exactness and superior quality of work.",
        },
      ],
      faqs: [
        {
          id: 1,
          que: "Do you design both residential and commercial spaces?",
          ans:
            "The company constructs residential properties in addition to creating both commercial structures and office facilities.",
        },
        {
          id: 2,
          que: "Can you help with government approvals?",
          ans:
            "The team manages every permitting process along with the required documentation until completion.",
        },
        {
          id: 3,
          que: "What software do you use for designs?",
          ans:
            "The company implements AutoCAD and 3D modeling software tools to achieve precise design outcomes.",
        },
        {
          id: 4,
          que: "Do you offer services for remodeling?",
          ans:
            "Yes, our firm provides architectural designs that cover renovation projects.",
        },
        {
          id: 5,
          que: "Are your designs energy-efficient?",
          ans:
            "Our company dedicates efforts toward creating sustainable and energy-efficient architectural designs.",
        },
      ],
    },
    {
      id: 3,
      title: "Exterior Design",
      banner:
        "Increase your property's charm with stunning, durable, and unique exteriors.",
      description:
        "We, the best exterior designers in Delhi, build exterior designs that combine spectacular looks with exceptional durability to enhance property aesthetics. Your preferences guide our team, allowing them to design solutions that perfectly blend with environmental elements. Each detail, including landscape design and materials, stands at the center of our attention for durability combined with style. Our professional mission is to improve the exterior beauty of your property through an external design that matches your personality and creates a welcoming environment.",
      img: banner,
      how_we_work: [
        {
          id: 1,
          icon: <FcServices />,
          heading: "Consultation",
          para: "We discuss your desired exterior appearance.",
        },
        {
          id: 2,
          icon: <FcServices />,
          heading: "Design Concepts",
          para: "We provide 3D renders and material suggestions.",
        },
        {
          id: 3,
          icon: <FcServices />,
          heading: "Implementation",
          para: "The implementation includes durable and appealing materials.",
        },
        {
          id: 4,
          icon: <FcServices />,
          heading: "Final Inspection",
          para: "Ensuring the exterior meets expectations.",
        },
      ],
      faqs: [
        {
          id: 1,
          que: "Can you design landscaping as part of the exterior design?",
          ans:
            "Despite being considered essential, our exterior design solutions include landscaping establishment as a fundamental component.",
        },
        {
          id: 2,
          que: "Do you work with weather-resistant materials?",
          ans:
            "Our company commits to selecting exterior materials that perform best in regional weather conditions.",
        },
        {
          id: 3,
          que: "How long does exterior design take?",
          ans:
            "Project duration depends on project complexity and size but we supply estimates after discussing with the client.",
        },
        {
          id: 4,
          que: "Can you renovate old exteriors?",
          ans:
            "The company excels at redesigning traditional exteriors into contemporary structures.",
        },
        {
          id: 5,
          que: "Do you design exteriors for commercial buildings?",
          ans:
            "Our company provides exterior design solutions that serve residential buildings along with business-owned properties.",
        },
      ],
    },
    {
      id: 4,
      title: "Building Renovation",
      banner:
        "We convert old spaces into modern, functional, and stylish ones effortlessly.",
      description:
        "Our renovation projects transform whatever space you have by providing it with fresh vitality through both partial and full-scale remodels. Our evaluation of the building locates all necessary improvement zones, whether they focus on structural elements or visual aspects. Our team develops complete renovation programming that satisfies your requirements regarding design preferences, together with schedule length and cost needs. The company applies quality materials and expert craftsmanship to produce spaces that harmonize modern functionality with lasting durability and original architecture.",
      img: banner,
      how_we_work: [
        {
          id: 1,
          icon: <FcServices />,
          heading: "Inspection",
          para:
            "The first step involves evaluating present conditions together with identifying regions that require development.",
        },
        {
          id: 2,
          icon: <FcServices />,
          heading: "Planning",
          para:
            "We develop renovation roadmaps that include both time details and spending limits for the project.",
        },
        {
          id: 3,
          icon: <FcServices />,
          heading: "Execution",
          para:
            "Moving things forward with both expert personnel and quality materials.",
        },
        {
          id: 4,
          icon: <FcServices />,
          heading: "Finishing",
          para:
            "The team takes responsibility to present a fully finished, renovated space.",
        },
      ],
      faqs: [
        {
          id: 1,
          que: "Do you renovate both homes and offices?",
          ans:
            "The remodeling of residential buildings as well as commercial operations is a core service at our company.",
        },
        {
          id: 2,
          que: "Can renovations be done while the building is occupied?",
          ans:
            "Our work planning activities help reduce disturbances caused to building occupants.",
        },
        {
          id: 3,
          que: "Do you handle structural changes in renovations?",
          ans:
            "Our team can execute both structural enhancement tasks and structural improvement tasks.",
        },
        {
          id: 4,
          que: "How long does a renovation take?",
          ans:
            "Our project timeline is determined based on the final scope assessment we perform after completing inspections.",
        },
        {
          id: 5,
          que: "Can I include eco-friendly upgrades?",
          ans:
            "Yes, we offer green renovation options for a sustainable living space.",
        },
      ],
    },
    {
      id: 5,
      title: "Property Sale",
      banner: "Sell properties easily with trusted support and guidance.",
      description:
        "Our professional guidance makes the property-selling process flow easily for you. Our initial step involves inspecting the property value by examining both market changes and its distinctive characteristics. Our team uses online advertising and qualifies audience contact to discover suitable purchasers. Our team helps you secure optimal prices through price negotiation services. Our team takes care of every requirement and formal procedure to deliver you a convenient and clear, plus stress-free, sales process.",
      img: banner,
      how_we_work: [
        {
          id: 1,
          icon: <FcServices />,
          heading: "Valuation",
          para: "The market trend analysis determines the property's worth.",
        },
        {
          id: 2,
          icon: <FcServices />,
          heading: "Marketing",
          para:
            "Different promotional channels are used to market this property.",
        },
        {
          id: 3,
          icon: <FcServices />,
          heading: "Negotiation",
          para:
            "Our service provides you with the most advantageous terms for your property sale.",
        },
        {
          id: 4,
          icon: <FcServices />,
          heading: "Closure",
          para:
            "The transaction benefits from our organization and management of essential paperwork.",
        },
      ],
      faqs: [
        {
          id: 1,
          que: "Do you handle both residential and commercial properties?",
          ans:
            "The company helps clients with selling residential homes and apartments together with commercial business properties.",
        },
        {
          id: 2,
          que: "How do you determine the property’s value?",
          ans:
            "Our company analyzes local market patterns together with location variables along with property condition to determine estimated values.",
        },
        {
          id: 3,
          que: "Can you help with the paperwork for the sale?",
          ans:
            "Our company guarantees the complete lawful handling of every document.",
        },
        {
          id: 4,
          que: "Do you offer marketing services for property sales?",
          ans:
            "Our company employs both internet-based platforms and alternative promotional tools to market your real estate property.",
        },
        {
          id: 5,
          que: "How long does it take to sell a property?",
          ans:
            "Our process duration differs based on factors yet we work on securing both speed and convenience throughout the transaction.",
        },
      ],
    },
    {
      id: 6,
      title: "Property Purchase",
      banner: "Find your dream property with ease and expert guidance today.",
      description:
        "Our team helps property buyers through a seamless and pleasant journey by delivering personalized market information that matches your unique needs. Our team supports clients from start to finish, whether they purchase their dream residence or want to achieve an intelligent property investment. The team provides continuous support, from helping you understand your choices to budgeting, and takes part in every stage of your purchasing journey.",
      img: banner,
      how_we_work: [
        {
          id: 1,
          icon: <FcServices />,
          heading: "Requirement Analysis",
          para:
            "You need to explain your property needs while sharing your spending plan and specific requirements.",
        },
        {
          id: 2,
          icon: <FcServices />,
          heading: "Property Search",
          para:
            "You need to select possibilities that comply with your specification requirements.",
        },
        {
          id: 3,
          icon: <FcServices />,
          heading: "Site Visits",
          para: "You will schedule tours for properties that you select.",
        },
        {
          id: 4,
          icon: <FcServices />,
          heading: "Deal Finalization",
          para: "Helping with negotiations and paperwork.",
        },
      ],
      faqs: [
        {
          id: 1,
          que: "Can you help with budget-friendly options?",
          ans:
            "The service matches properties that match your budget along with your specific requirements.",
        },
        {
          id: 2,
          que: "Do you assist with home loans?",
          ans: "The process of securing a loan receives our complete guidance.",
        },
        {
          id: 3,
          que: "How do I know if the property is legally clear?",
          ans:
            "We verify documentation so you can verify complete accuracy from the property.",
        },
        {
          id: 4,
          que: "Do you handle commercial property purchases?",
          ans:
            "Our company assists buyers in purchasing homes along with business facilities.",
        },
        {
          id: 5,
          que: "Can you help with investment properties?",
          ans:
            "The company delivers market data to assist clients in their investment decisions.",
        },
      ],
    },
  ],
};

// contact page
export const contactBanner = {
  title: "Contact Us",
  para:
    "lorem Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus",
  slug: "contact-us",
  img: banner,
};

export const contactData = {
  title: "Reasons to choose City Space for Architecture",
  points: [
    {
      id: 1,
      text:
        "We always work to give the best to our clients. Our seasoned professionals have years of experience in immigration consultancy.",
    },
    {
      id: 2,
      text:
        "We always work to give the best to our clients. Our seasoned professionals have years of experience in immigration consultancy.",
    },
    {
      id: 3,
      text:
        "We always work to give the best to our clients. Our seasoned professionals have years of experience in immigration consultancy.",
    },
    {
      id: 4,
      text:
        "We always work to give the best to our clients. Our seasoned professionals have years of experience in immigration consultancy.",
    },
    {
      id: 5,
      text:
        "We always work to give the best to our clients. Our seasoned professionals have years of experience in immigration consultancy.",
    },
    {
      id: 6,
      text:
        "We always work to give the best to our clients. Our seasoned professionals have years of experience in immigration consultancy.",
    },
  ],
  details: [
    {
      id: 1,
      icon: <LuPhone />,
      para: "Contact No.",
      text: "+91 9876543210",
      text2: "+91 9123456780",
      slug1: "#",
      slug2: "#",
    },
    {
      id: 2,
      icon: <RiMailSendLine />,
      para: "E-mail Address",
      text: "hello@cityspace.com",
      text2: "info@cityspace.com",
      slug1: "#",
      slug2: "#",
    },
    {
      id: 3,
      icon: <GrLocation />,
      para: "Office Address",
      text: "5609 E Sprague Ave, Spokane ",
      text2: "Valley, WA 99212, USA",
      slug1: "#",
      slug2: "#",
    },
  ],
};

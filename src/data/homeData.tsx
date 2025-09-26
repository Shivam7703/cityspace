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
  pro116,
  man,
  cl2,
  cl3,
  cl4,
} from "@/assets";
import { AiFillOpenAI } from "react-icons/ai";
import { BsFillPatchCheckFill } from "react-icons/bs";
import {
  FcAcceptDatabase,
  FcFinePrint,
  FcHome,
  FcServices,
} from "react-icons/fc";
import {
  GiAbstract052,
  GiAqueduct,
  GiDiceTwentyFacesTwenty,
  GiOilPump,
  GiTakeMyMoney,
} from "react-icons/gi";
import { GrLocation } from "react-icons/gr";
import { IoDiamondSharp } from "react-icons/io5";
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
      { id: 1, label: "Interior Design", href: "/services/interior-design" },
      { id: 2, label: "Architecture", href: "/services/architecture" },
      { id: 3, label: "Property Sale", href: "/services/property-sale" },
      {
        id: 4,
        label: "Building Renovation",
        href: "/services/building-renovation",
      },
      { id: 5, label: "Exterior Design", href: "/services/exterior-design" },
      {
        id: 6,
        label: "Property Purchase",
        href: "/services/property-purchase",
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
    img: banner4,
    welcome: "BEST BUILDERS IN DELHI",
    title: "Designing Spaces That Combine Beauty & Purpose",
    para:
      "We create beautiful and purposeful spaces that feel as good as they look.",
    btntext: "Explore More",
    href: "/services",
  },
  {
    id: 2,
    img: banner,
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
  img:man,

  title1: "WHO ARE WE",
  title2: "We Are The Best Builder in Delhi",
  para:
    "Our company takes great pride in delivering strong, reliable, and beautiful construction. We only design buildings we know will be around soon and look nice along the way. The quality and attention to detail we look into make us the best builders in Delhi, and many people come to us to turn their dreams into a reality. ",
  vision: [
    {
      id: 1,
      icon: <BsFillPatchCheckFill />,

      heading: "Best Quality",
      text:
        "We build structures to exceptional standards for enduring structural integrity.",
    },
    {
      id: 2,
      icon: <BsFillPatchCheckFill />,

      heading: "Timely Delivery",
      text:
        "Our projects meet their deadlines with complete observation of the set timeline.",
    },
    {
      id: 3,
      icon: <BsFillPatchCheckFill />,

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
    Value: "50",
    value2:"+"
  },
  {
    id: 2,
    para: "Trusted and Satisfied Clients",
    title: "Happy Customers",
    Value: "150",
    value2:"+"

  },
  {
    id: 3,
    para: "High Success Rate with Clients",
    title: "Success Rate",
    Value: "100",
    value2:"%"

  },
  {
    id: 4,
    para: "Expertise Built for Years",
    title: "Years of Experience",
    Value: "27",
    value2:"+"

  },
];

export const howwork = {
  icon: <AiFillOpenAI />,
  title1: "HOW DO WE WORK",
  title2: "City Space Converts Your Thoughts to Living Spaces",
  cards: [
    {
      id: 1,
      icon: <FcAcceptDatabase />,
      heading: "Understanding Concept",
      text:
        "We confirm your design approach by discussing your goals and desired outcomes to create the perfect final result.",
    },
    {
      id: 2,
      icon: <FcFinePrint />,
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
      heading: "Exterior Design",
      text:
        "Our work includes outdoor building improvements that transform your structure into an attractive structure.",
    },
    {
      id: 4,
      icon: <GiOilPump />,
      heading: "Building Renovation",
      text:
        "Our company performs space construction repairs to create rejuvenating looks that maintain comfortable use features.",
    },
    {
      id: 5,
      icon: <IoDiamondSharp />,
      heading: "Property Sale",
      text:
        "Our organization provides expert assistance to help you find quick property sales at competitive market prices along with dependable service.",
    },
    {
      id: 6,
      icon: <GiTakeMyMoney />,
      heading: "Property Purchase",
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
      img: cl2,
    },
    {
      id: 3,
      title: "Sageer Ansari",
      text:
        "Through their work, Cityspace created elegant, functional interior designs for our house. The team members demonstrated professionalism throughout while giving full attention to all specified details. We have achieved a comfortable area that welcomes everyone. They truly are the best builders in Delhi.",
      img: cl3,
    },
    {
      id: 3,
      title: "Prashant",
      text:
        "The construction process, along with design delivery, was executed with excellence by Cityspace. Our house now combines spaciousness and modern design characteristics, which perfectly meet our family needs. Great experience with a highly skilled team! Truly the best builders in Delhi.",
      img: cl4,
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
      title: "R86, GK2",
      text: "City Space Construction",
      img: banner,
    },

    {
      id: 2,
      title: "Haven & Harmony",
      text: "City Space Construction",
      img: about8,
    },

    {
      id: 3,
      title: "Haven & Harmony",
      text: "City Space Construction",
      img: about4,
    },

    {
      id: 4,
      title: "Haven & Harmony",
      text: "City Space Construction",
      img: banner2,
    },
    {
      id: 5,
      title: "Haven & Harmony",
      text: "City Space Construction",
      img: banner,
    },

    {
      id: 6,
      title: "Haven & Harmony",
      text: "City Space Construction",
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
      title: "The Best Builders in Delhi-Building Comfort For Your Living",
      text:
        "People strive for their dreams through the selection of top builders who operate well. Cityspace, the best builders in Delhi, successfully developing any quality property or space requires selecting an appropriate builder who does matters. People face difficulties when choosing a builder from the many available choices. Certain builders gain distinction because they combine their superior workmanship with revolutionary designs and their ability to finish projects on schedule.",
      text2: `<div style="max-width: 900px; margin: 40px auto; padding: 30px; background-color: #fff;">

    <h1 style=" color: #2c3e50;">The Best Builders in Delhi - Building Comfort For Your Living</h1>

    <p>People strive for their dreams through the selection of top builders who operate well. Cityspace, the best builders in Delhi, successfully developing any quality property or space requires selecting an appropriate builder who does matters. People face difficulties when choosing a builder from the many available choices. Certain builders gain distinction because they combine their superior workmanship with revolutionary designs and their ability to finish projects on schedule.</p>

    <p>Selecting the best builders in Delhi means investing in long-term quality and value. A reliable builder ensures that every project is well-planned, structurally sound, and aesthetically pleasing. They work with expert interior designers in Delhi NCR to create functional and elegant spaces tailored to your needs. With their experience and expertise, they turn construction into an art form, making your dream home or office a reality.</p>

    <h2 style="color: #34495e;">Why Choosing the Best Builders in Delhi Matters</h2>
    <p>The building market in Delhi currently experiences strong growth while various developers offer to produce high-end construction projects. A majority of builders fail to produce the results they advertise to customers. The best builders in Delhi promise the following commitments—</p>
    <ul>
      <li>High-quality construction with premium materials</li>
      <li>Modern and aesthetic architectural designs</li>
      <li>Compliance with legal and safety regulations</li>
      <li>Timely project delivery without unnecessary delays</li>
      <li>Affordable pricing with flexible payment plans</li>
    </ul>

    <h2 style="color: #34495e;">CitySpace—Redefining Construction and Interior Design in Delhi</h2>
    <p>The reliable builders that stand out in the industry are found within CitySpace. The company established itself through its work and is the best interior designer in Delhi. Their construction sector expertise extends to interior design, where they operate as a leading Delhi-based company that delivers homes along with professional office structures featuring elegance and style.</p>

    <h2 style="color: #34495e;">Why Choose CitySpace?</h2>
    <ul>
      <li><strong>Quality Construction</strong>—Cityspace Contracts builds durable structures using premium materials along with expert craftsmanship for permanent use.</li>
      <li><strong>Innovative Designs</strong>—Cityspace is the best interior designer in Delhi NCR who specializes in modern contemporary approaches for living spaces and business premises.</li>
      <li><strong>On-Time Delivery</strong>—The organization completes projects at the right time to let customers obtain their desired homes without any delays.</li>
      <li><strong>Affordable Pricing</strong>—At CitySpace, customers find excellent affordability combined with superior quality standards for which they choose to conduct business.</li>
      <li><strong>Customization Options</strong>—Each project developed at their company benefits from specific design customization according to personal client needs.</li>
    </ul>

    <h2 style="color: #34495e;">Interior Designers in Delhi NCR—Creating Stylish Spaces</h2>
    <p>Quality structures need extraordinary interior finishes to be truly done. Seeking a professional interior design company in Delhi is as important as selecting a suitable builder for a home project. Superior builders operating in Delhi cooperate with competent interior designers throughout Delhi NCR to deliver comprehensive residential and office solutions.</p>

    <p>Each space receives innovative and elegant treatment through the creative work of the best interior designers in Delhi NCR, regardless of the chosen modern minimalist or traditional royal aesthetic. We specialize in—</p>
    <ul>
      <li>Home interior design</li>
      <li>Office and commercial space decor</li>
      <li>Luxury and theme-based designs</li>
      <li>Modular kitchen and bathroom designs</li>
      <li>Space optimization and smart storage solutions</li>
    </ul>

    <h2 style="color: #34495e;">Best Builders in Delhi—Enhancing Aesthetics with Elegance</h2>
    <p>The interior design goes beyond the proper framework because it includes aesthetic components. Interior decorators in Delhi hold a crucial position because they finish all residential and commercial spaces in the city. Interior designers carefully choose the furniture items and match colors to guarantee that each element works well with the designated space.</p>

    <p>The best interior designers in Delhi furnish their clients with the following professional services—</p>
    <ul>
      <li>Furniture selection and its placement</li>
      <li>Color theme and wallpaper designs</li>
      <li>Lighting and décor arrangement</li>
      <li>Curtain and upholstery selection</li>
      <li>Art and accessory styling</li>
    </ul>

    <h2 style="color: #34495e;">Why the Best Builders in Delhi Are a Game Changer</h2>
    <p>The infrastructure, together with the real estate sector of Delhi, has experienced substantial advancement through the years. The best builders in Delhi infrastructure incorporate contemporary architectural elements into their new building projects. Some key points are—</p>
    <ul>
      <li><strong>Structural Strength</strong>—Building materials of superior quality make these structures durable.</li>
      <li><strong>Energy Efficiency</strong>—The orientation of several builders includes environmentally sensitive, sustainable construction approaches.</li>
      <li><strong>Smart Homes</strong>—Top builders now implement automated lighting systems as well as security systems, which integrate technological features into their work.</li>
      <li><strong>Space Optimization</strong>—Builders maximize space usage to build contemporary and practical house designs.</li>
      <li><strong>Investment Value</strong>—Homes constructed by sanctioned builders gain premium resale value and yield rewards of superior value.</li>
    </ul>

    <h2 style="color: #34495e;">Choosing the Best Builders in Delhi</h2>
    <p>The builders establish solid structures, yet interior design applications breathe new life into space. Selecting a trusted interior design company in Delhi ensures your home reflects your personality. Here’s what to look for—</p>
    <ul>
      <li>Portfolio of previous projects</li>
      <li>Customer reviews and testimonials</li>
      <li>Builders use top-end construction materials together with current design trends.</li>
      <li>Customization and personalized approach</li>
      <li>Budget-friendly solutions with quality assurance</li>
    </ul>

    <h2 style="color: #34495e;">Conclusion</h2>
    <p>The search for the best builders in Delhi leads to crucial success in developing high-quality permanent spaces that possess both durability and stylish aesthetics. CitySpace builds superior homes while providing top-quality interior design support to its clients. CitySpace represents a complete solution that supplies interior designers in Delhi NCR alongside interior decorators in Delhi and a trusted interior design company in Delhi.</p>

  </div>
`,
      date: "05/09/23",
      img: about7,
    },
    {
      id: 2,
      title: "Best Interior Designers in Delhi-Designing Beautiful Spaces",
      text:
        "Delhi's Top Interior Designer What you need is the service that the best interior designers in Delhi provide to create a magical and useful space. The right design is the one that makes your home, office, or commercial space feel better to live in, look at, and work in. Healthy and diverse options for designers can be overwhelming as well. Minimalism aside, experienced professionals do make quality work, new designs, and on-time delivery.",
      text2: ` <div style="max-width: 900px; margin: 40px auto; background-color: white; padding: 30px;">

    <h1 style=" color: #2c3e50;">Best Interior Designers in Delhi—Designing Beautiful Spaces</h1>

    <p>Delhi's Top Interior Designer What you need is the service that the best interior designers in Delhi provide to create a magical and useful space. The right design is the one that makes your home, office, or commercial space feel better to live in, look at, and work in. Healthy and diverse options for designers can be overwhelming as well. Minimalism aside, experienced professionals do make quality work, new designs, and on-time delivery.</p>

    <p>The best designers blend creativity with functionality, ensuring that designs are not just visually appealing but also enhance the overall experience of the space. Whether it's optimizing small areas for maximum utility or adding luxurious elements to large spaces, professional designers bring a balance of aesthetics and practicality, making every project truly exceptional.</p>

    <h2 style="color: #34495e;">Why Choose the Best Interior Designers in Delhi?</h2>
    <p>Finding the best interior designers in Delhi is a must for getting the right mix of aesthetics and functionality. Here are some key advantages of hiring the best interior designers—</p>
    <ul>
      <li>Designs that reflect your lifestyle and are one of a kind</li>
      <li>Versatility for Big, Green, and Smart Space Small Space Solutions</li>
      <li>Best quality material to last and look good</li>
      <li>Familiarity with design, both traditional and modern</li>
      <li>Security to execute with project management by professionals</li>
    </ul>

    <h2 style="color: #34495e;">Best Interior Designers in Delhi for Home Interiors</h2>
    <p>Home is no less a manifestation of your identity, and the best interior designers in Delhi take care that nothing goes unnoticed. They specialize in—</p>
    <ul>
      <li>Stylish living room decor, extravagant furniture & lighting</li>
      <li>Space-saving interior of luxury bedroom</li>
      <li>High-End Kitchen Modular Designs</li>
      <li>Beautiful dining spaces that are cool and cozy</li>
      <li>Custom accent ideas to cozy your home</li>
    </ul>

    <h2 style="color: #34495e;">Best Interior Designers in Delhi for Office Spaces</h2>
    <p>A well-designed office maximizes productivity and provides you with a healthy place to work. The best interior designers in Delhi offer—</p>
    <ul>
      <li>Modern office layouts and workspaces that deliver high performance</li>
      <li>Ideas For Creative Work Spaces to Stimulate Creativity</li>
      <li>The reception and lobby make a good first impression</li>
      <li>Conference room to smart technology configuration setup</li>
      <li>Storage and organization solutions for a clutter-free environment</li>
    </ul>

    <h2 style="color: #34495e;">Best Interior Designers in Delhi for Commercial Spaces</h2>
    <p>The best interior designers in Delhi focus on commercial interior design solutions, which drive customers toward businesses and build brand image recognition. Their services include—</p>
    <ul>
      <li>The best interior designers in Delhi create retail spaces through designs emphasizing product presentation and attracting customer interest</li>
      <li>The best interior designers in Delhi transform restaurant spaces with lighting along themed decorative elements.</li>
      <li>Hotel and hospitality interiors with luxury and comfort</li>
      <li>Product showcases at showrooms become more effective when properly displayed</li>
      <li>The modern features incorporated in contemporary co-working spaces</li>
    </ul>

    <h2 style="color: #34495e;">Best Interior Designers in Delhi and Their Collaboration with Builders</h2>
    <p>Achieving superb internal spaces begins with developing a dependable structural basis. Stunning spaces are achieved through regular partnerships between the best builders and interior designers in Delhi. Such partnerships establish multiple essential aspects between architects and builders—</p>
    <ul>
      <li>Seamless coordination between construction and interior design</li>
      <li>Information-based space optimization starts at planning time</li>
      <li>High-quality finishes that enhance aesthetics</li>
      <li>Cost-effective solutions for long-term durability</li>
      <li>Faster project completion with expert management</li>
    </ul>

    <h2 style="color: #34495e;">Choosing the Best Interior Designers in Delhi</h2>
    <p>Seeking top-quality interior designers in Delhi requires evaluation based on these selection criteria—</p>
    <ul>
      <li>A designer's career background, along with their achieved projects, showcase their competence</li>
      <li>Client reviews and testimonials</li>
      <li>Understanding of the latest design trends</li>
      <li>The ability to modify designs according to individual choices remains amongst their capabilities.</li>
      <li>Budget-friendly solutions with high-quality execution</li>
    </ul>

    <h2 style="color: #34495e;">Why Choose Cityspace?</h2>
    <p>CitySpace Contracts maintains a position among the best interior designers in Delhi while attracting praise through its trailblazing designs and remarkable workmanship standards. The interior experts at their firm merge aesthetic appeal with comfort and user experience for residential, office, and commercial space development. CitySpace achieves customized modern solutions through its team of professional designers who transform preferences into reflective designs. Each feature of space transformation receives careful handling by experts who select materials and plan spaces to create flawless spaces.</p>

    <p>Time-bound project delivery together with top-quality service distinguishes CitySpace. The company uses premium materials to extend product durability along with creating designs that keep their appearance stylish yet functional. The expert team at CitySpace checks off multiple projects with their deadline experience while upholding creativity and detailed work. Additionally, they offer cost-effective solutions, making high-end interior design accessible to a wide range of clients. Choosing CitySpace means getting a space that is not only visually appealing but also designed for comfort and long-term functionality.</p>

    <h2 style="color: #34495e;">Conclusion</h2>
    <p>Finding the best interior designers in Delhi is essential for creating beautiful, functional, and comfortable spaces. Whether you need home interiors, office designs, or commercial space transformations, choosing the right professionals makes all the difference. With expertise in various styles and modern innovations, they bring creativity and elegance to every project. Invest in top-quality interior design and transform your space with the best experts in Delhi!</p>

  </div>
`,
      date: "15/12/23",
      img: about8,
    },
    {
      id: 3,
      title:
        "Best Exterior Designers in Delhi-Designing Outdoor Spaces with Ease",
      text:
        "Strategic exterior planning creates a memorable initial response about properties that remain both distinctive and practical. The best exterior designer in Delhi, who develops durable outdoor environments through sophisticated materials, creative designs, and advanced construction methods. Master designers and architects deliver spaces that unite building design with exterior elements, which satisfy both architectural styles and individual client needs for residential properties, commercial complexes, and landscaped gardens.",
      text2: `<div style="max-width: 900px; margin: 40px auto; background-color: white; padding: 30px;">

    <h1 style=" color: #2c3e50;">Best Exterior Designers in Delhi—Designing Outdoor Spaces with Ease</h1>

    <p>Strategic exterior planning creates a memorable initial response about properties that remain both distinctive and practical. The best exterior designer in Delhi, who develops durable outdoor environments through sophisticated materials, creative designs, and advanced construction methods. Master designers and architects deliver spaces that unite building design with exterior elements, which satisfy both architectural styles and individual client needs for residential properties, commercial complexes, and landscaped gardens.</p>

    <p>Exterior planning ensures benefits for energy conservation along with safety measures and environmental sustainability. Outdoor design professionals work with green solutions and weather-resistant components as well as smart outdoor elements to offer high-functioning, comfortable outdoor areas. The best designers in Delhi pay attention to every component, from modern building surfaces to green landscape elements, to establish a welcoming, refined outdoor environment.</p>

    <h2 style="color: #34495e;">Why Choose the Best Exterior Designers in Delhi?</h2>
    <p>The correct planning of building exteriors leads to attractive looks and valuation improvements with better practical designs for properties. The best exterior designers in Delhi guarantee the creation every time of visually attractive results</p>
    <ul>
      <li>The designers create purposeful designs that complement building style</li>
      <li>High-quality materials for durability and weather resistance</li>
      <li>Sustainable and eco-friendly design solutions</li>
      <li>Personal preferences and individual style guide exterior customization options.</li>
      <li>External lighting elements connect harmoniously with landscaping installations</li>
    </ul>

    <h2 style="color: #34495e;">Services Offered by the Best Exterior Designers in Delhi</h2>

    <h3 style="color: #2c3e50;">Facade Design for Residential and Commercial Buildings</h3>
    <p>The best exterior designers in Delhi create innovative facade designs that blend elegance with modern trends. They construct eye-catching exteriors through their selection of premium glass, stone, and wood materials.</p>

    <h3 style="color: #2c3e50;">Landscape and Garden Designing</h3>
    <p>External spaces must contain practical design with an appealing appearance. The best exterior designers in Delhi offer landscaping services that include—</p>
    <ul>
      <li>Habitats containing properly arranged vegetation and horticulture elements</li>
      <li>The walkways, together with driveways, should help complete the design scheme.</li>
      <li>The exterior design incorporates fountains together with ponds.</li>
      <li>Outdoor seating areas for relaxation and gatherings</li>
    </ul>

    <h3 style="color: #2c3e50;">Exterior Lighting Solutions</h3>
    <p>The combination of lighting and safety levels improves space appearance. The best exterior designers in Delhi integrate</p>
    <ul>
      <li>LED lighting for energy efficiency</li>
      <li>Accent lighting acts as a technique to display architectural elements better.</li>
      <li>Exciting pathway lights serve security functions and enable easy access.</li>
    </ul>

    <h3 style="color: #2c3e50;">Custom Outdoor Structures</h3>
    <p>The best exterior designers in Delhi create outdoor areas that seamlessly mix convenience and attractiveness through their design of pergolas, patios, gazebos, and terrace gardens.</p>

    <h2 style="color: #34495e;">How Do the Best Exterior Designers in Delhi Work?</h2>
    <p>Professional designers provide a smooth design process to their clients. The process includes—</p>
    <ul>
      <li>Consultation and Requirement Analysis—The designer needs to understand what the client envisions as well as their specific preferences.</li>
      <li>Site Inspection and Planning—Design feasibility assessments are conducted on the available space.</li>
      <li>Design Concept and Approval—The designer provides design mock-ups to clients so they can inspect and authorize them.</li>
      <li>Material Selection and Execution—The implementation of precise design requires selecting top-quality materials.</li>
      <li>Final Touches and Quality Check—Aligning every facet exactly as the client desires.</li>
    </ul>

    <h2 style="color: #34495e;">Incorporating Modern Trends with the Best Exterior Designers in Delhi</h2>
    <p>The best exterior designers in Delhi keep their practice relevant and blended—</p>
    <ul>
      <li>Minimalist and sleek designs for modern aesthetics</li>
      <li>Sustainable materials to promote eco-friendliness</li>
      <li>The implementation of smart technology enables automated control of lighting systems with irrigation functions.</li>
      <li>Fusion designs unite architectural elements from both the past and present.</li>
    </ul>

    <h2 style="color: #34495e;">Why Does Exterior Design Matter for Residential and Commercial Properties?</h2>
    <p>The exterior design of a property needs proper planning for overall success.</p>
    <ul>
      <li>The first encounter with a property receives a powerful transformation</li>
      <li>Increasing property value in real estate markets</li>
      <li>Exterior regions need enhancement to work better for leisure activities and professional pursuits.</li>
      <li>The space should welcome visitors and clients at the entrance.</li>
    </ul>

    <h2 style="color: #34495e;">Choosing the Right Exterior Designers in Delhi</h2>
    <p>Selecting the best exterior designers in Delhi demands evaluation of the following factors—</p>
    <ul>
      <li>Previous projects, together with experience along portfolio demonstration</li>
      <li>Client reviews and testimonials</li>
      <li>The use of advanced sustainable design principles constitutes one of their core strategies</li>
      <li>The designer team has the skill to adapt their designs according to individual project specifications.</li>
      <li>Transparent pricing and project timeline commitment</li>
    </ul>

    <h2 style="color: #34495e;">Why Choose CitySpace for Exterior Designing?</h2>
    <p>CitySpace operates as the best exterior designer in Delhi, delivering premium solutions for residential and commercial buildings. Their staff delivers expertise in facade work and landscape design to create functional spaces that also maintain visual appeal. The skilled professionals at their organization use their creative skills to convert ordinary exteriors into breathtaking architectural works. They design buildings with a modern style through creations that combine both beautiful looks and solid construction. Every project requires detailed attention, which enables the combination of durability with beauty in a perfect, seamless manner.</p>

    <p>What sets CitySpace apart is its focus on quality, durability, and timely execution.</p>
    <ul>
      <li>Design team members keep track of fresh design developments to build contemporary and trendy exterior designs.</li>
      <li>Modern techniques, together with sophisticated technology, work to combine attractive design with operational effectiveness.</li>
      <li>The cost-efficient solutions these providers deliver preserve quality standards at all times.</li>
      <li>Through cohesive project management, all operational aspects flow without interruption from initial planning stages until final execution.</li>
      <li>A strong portfolio of completed projects reflects expertise and reliability in the industry.</li>
    </ul>

    <h2 style="color: #34495e;">Conclusion</h2>
    <p>The best exterior designer in Delhi makes a big task of changing outdoor spaces to visually appealing & functional areas. From homes, offices, or commercial establishments, professional exterior designers create creativity with the right amount of innovation and expertise for each project. By going for the professionally trained designers such as CitySpace, you will have a property that not only differentiates but also creates long-term value. Grab the decision and beautify exteriors today!</p>
  </div>
`,
      date: "05/09/24",
      img: banner4,
    },
  ],
};

export const footer = {
  logo: logo2,
  text:
    "Cityspace Contracts delivers quality excellence, transforming properties into luxurious family homes.",

  socials: {
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
    instagram: "https://www.instagram.com//",
    linkedin: "https://www.linkedin.com/school//",
    youtube: "https://www.youtube.com/c/",
  },
  copyrightText: "Copyrights © 2024 . Designed and Manage by ",
  list1: {
    title: "Quick Links",
    links: [
      { id: 1, label: "About", href: "/about-us" },
      { id: 2, label: "Services & Techs", href: "/services" },
      { id: 3, label: "Projects", href: "/projects" },
      { id: 4, label: "Blogs", href: "/blogs" },
      { id: 5, label: "Contact Us", href: "/contact-us" },
    ],
  },

  list2: {
    title: "Services",
    links: [
      { id: 1, label: "Interior Design", href: "/services/interior-design" },
      { id: 2, label: "Architecture", href: "/services/architecture" },
      { id: 3, label: "Property Sale", href: "/services/property-sale" },
      {
        id: 4,
        label: "Building Renovation",
        href: "/services/building-renovation",
      },
      { id: 5, label: "Exterior Design", href: "/services/exterior-design" },
      {
        id: 6,
        label: "Property Purchase",
        href: "/services/property-purchase",
      },
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
      text: "We build structures that provide long-lasting dependability",
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
          heading: "Consultation",
          para:
            "We need to know how your space type matches with your functional requirements and aesthetic aspirations for the space.",
        },
        {
          id: 2,
          heading: "Concept Creation",
          para:
            "Professionals create visual schemes and design boards with color-mix selections.",
        },
        {
          id: 3,
          heading: "Execution",
          para:
            "The design comes to existence because of expert craftsmen who dedicate their skills.",
        },
        {
          id: 4,
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
      img: banner2,
      how_we_work: [
        {
          id: 1,
          heading: "Planning",
          para:
            "The site undergoes analysis while our team develops the first draft layouts.",
        },
        {
          id: 2,
          heading: "Design Development",
          para: "Creating blueprints and 3D models.",
        },
        {
          id: 3,
          heading: "Approvals",
          para:
            "Our team verifies that every design upholds legal conduct and meets safety standards.",
        },
        {
          id: 4,
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
      img: banner3,
      how_we_work: [
        {
          id: 1,
          heading: "Consultation",
          para: "We discuss your desired exterior appearance.",
        },
        {
          id: 2,
          heading: "Design Concepts",
          para: "We provide 3D renders and material suggestions.",
        },
        {
          id: 3,
          heading: "Implementation",
          para: "The implementation includes durable and appealing materials.",
        },
        {
          id: 4,
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
      img: banner4,
      how_we_work: [
        {
          id: 1,
          heading: "Inspection",
          para:
            "The first step involves evaluating present conditions together with identifying regions that require development.",
        },
        {
          id: 2,
          heading: "Planning",
          para:
            "We develop renovation roadmaps that include both time details and spending limits for the project.",
        },
        {
          id: 3,
          heading: "Execution",
          para:
            "Moving things forward with both expert personnel and quality materials.",
        },
        {
          id: 4,
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
      img: about4,
      how_we_work: [
        {
          id: 1,
          heading: "Valuation",
          para: "The market trend analysis determines the property's worth.",
        },
        {
          id: 2,
          heading: "Marketing",
          para:
            "Different promotional channels are used to market this property.",
        },
        {
          id: 3,
          heading: "Negotiation",
          para:
            "Our service provides you with the most advantageous terms for your property sale.",
        },
        {
          id: 4,
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
      img: about5,
      how_we_work: [
        {
          id: 1,
          heading: "Requirement Analysis",
          para:
            "You need to explain your property needs while sharing your spending plan and specific requirements.",
        },
        {
          id: 2,
          heading: "Property Search",
          para:
            "You need to select possibilities that comply with your specification requirements.",
        },
        {
          id: 3,
          heading: "Site Visits",
          para: "You will schedule tours for properties that you select.",
        },
        {
          id: 4,
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
    "Designing Spaces With Expert Building and Interior Designs. Experience The Best Builders in Delhi!",
  slug: "contact-us",
  img: banner,
};

export const contactData = {
  title: "Reasons to choose City Space for Architecture",
  points: [
    {
      id: 1,
      text:
        "Each project receives unique designs made of premium materials at our company to create modern spaces with lasting elegance.",
    },
    {
      id: 2,
      text:
        "Our experienced team has multiple years of expertise in both home designs and construction operations to deliver projects that fulfill all high criteria.",
    },
    {
      id: 3,
      text:
        "We conduct detailed client interaction, which allows us to transform vision into personalized designs compatible with their lifestyle demands.",
    },
    {
      id: 4,
      text:
        "We employ innovative technology along with strategic planning to create living environments that function perfectly while being beautiful and creating comfort.",
    },
    {
      id: 5,
      text:
        "We take full responsibility for planning along with execution to deliver an entirely smooth design and building process that requires no stress and has perfect management.",
    },
    {
      id: 6,
      text:
        "We deliver impressive project outcomes through creative designs with professionalism and strong dedication to building stunning projects that stand out from others in quality and detailed craftsmanship.",
    },
  ],
  details: [
    {
      id: 1,
      icon: <LuPhone />,
      para: "Contact No.",
      text: "+91 9667622285",
      text2: "+91 9810110499",
      slug1: "tel:+919667622285",
      slug2: "tel:+919810110499",
    },
    {
      id: 2,
      icon: <RiMailSendLine />,
      para: "E-mail Address",
      text: "info@cityspace.construction",
      text2: "",
      slug1: "mailto:info@cityspace.construction",
      slug2: "#",
    },
    {
      id: 3,
      icon: <GrLocation />,
      para: "Office Address",
      text: "2nd Floor, M Block Market, Greater Kailash 2, M 32,",
      text2: " W Block Rd, New Delhi, Delhi 110048",
      slug1:
        "https://www.google.com/maps/place/Cityspace/@28.5330789,77.2413416,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce1905d089649:0x1b43338513750efe!8m2!3d28.5330789!4d77.2413416!16s%2Fg%2F11wxqn0h78?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D",
      slug2:
        "https://www.google.com/maps/place/Cityspace/@28.5330789,77.2413416,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce1905d089649:0x1b43338513750efe!8m2!3d28.5330789!4d77.2413416!16s%2Fg%2F11wxqn0h78?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D",
    },
  ],
};

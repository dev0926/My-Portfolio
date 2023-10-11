import {
  mobile,
  android,
  firebase,
  mysql,
  java,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  inspiringApps,
  savasLab,
  episodeSix,
  kunai,
  css,
  scss,
  reactjs,
  redux,
  tailwind,
  nextjs,
  vue,
  nuxt,
  express,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  shopify,
  threejs,
  php,
  fourLaps,
  wyndhamhotels,
  marblesofmumbles,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "FrontEnd Developer",
    icon: mobile,
  },
  {
    title: "Software Engineer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "JavaScript Libraries",
    icon: creator,
  },
];

const technologies = [
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "SCSS",
    icon: scss,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Next",
    icon: nextjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Vue",
    icon: vue,
  },
  {
    name: "Nuxt",
    icon: nuxt,
  },
  {
    name: "Node",
    icon: nodejs,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Senior Full Stack Engineer",
    company_name: "Digible",
    icon: inspiringApps,
    iconBg: "#FFFFFF",
    date: "Feb 2021 - Present",
    points: [
      "Developed dynamic and interactive website that ensured high traffic, page views, and user experience, resulting in 40% increase in sales revenue.",
      "Collaborated with product management and UI/UX designers to deliver a revamped user interface, leading to a 15% increase in user engagement and a 10% reduction in user errors.",
      "Utilize powerful UI frameworks such as Vue.js, Nuxt.js, React, Tailwind UI, and others to optimize development speed.",
      "Skills: AWS, React.js, Next.js, Express.js, Contentful, Google Analytics, ...",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Iterative Health",
    icon: episodeSix,
    iconBg: "#FFFFFF",
    date: "June 2018 - Feb 2021 ",
    points: [
      "Built a healthcare platform that improved patient care and data management through the use of innovative technology solutions.",
      "Designed and implemented a CI/CD pipeline, streamlining the development and release process and reducing downtime.",
      "Skills: TypeScript, Tailwind CSS, React.js, Vue.js, ...",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Aceable",
    icon: kunai,
    iconBg: "#FFFFFF",
    date: "Apr 2016 - June 2018",
    points: [
      "Converted wireframes and designs into responsive and user-friendly websites, ensuring pixel-perfect implementation.",
      "Worked as a collaborative member of the Agile team.",
      "Skills: Agile Methodologies, JavaScript, React.js, ...",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Guillermo proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Guillermo does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    testimonial:
      "After Guillermo optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
  },
];

const projects = [
  {
    name: "FourLaps",
    description:
      "Fourlaps is a New York-based brand that creates functional athletic apparel. <br></br> We are in and of the city of New York City.<br></br>",
    tags: [
      {
        name: "kotlin",
        color: "white-text-gradient",
      },
      {
        name: "typescript",
        color: "white-text-gradient",
      },
      {
        name: "mvvm",
        color: "white-text-gradient",
      },
    ],
    image: fourLaps,
    // source_code_link: "https://github.com/raflisalam/PLN_IntPlan",
  },
  {
    name: "WyndhamHotels",
    description:
      "Wyndham Hotels & Resorts offers the best available rates, breakfast and wifi. Book a hotel room today with Wyndham Rewards, the award-winning hotel loyalty program.<br></br>",
    tags: [
      {
        name: "kotlin",
        color: "white-text-gradient",
      },
      {
        name: "YOLOv5",
        color: "white-text-gradient",
      },
      {
        name: "object-detection",
        color: "white-text-gradient",
      },
    ],
    image: wyndhamhotels,
    source_code_link: "https://github.com/raflisalam/Isyaratku",
  },
  {
    name: "Marbles of Mumbles",
    description:
      "Marbles of Mumbles is a toy seller specializing in a wide variety of marbles, offering a diverse range of colors, sizes, and designs to bring joy and entertainment to marble enthusiasts of all ages.",
    tags: [
      {
        name: "kotlin",
        color: "white-text-gradient",
      },
      {
        name: "hilt",
        color: "white-text-gradient",
      },
      {
        name: "mvvm",
        color: "white-text-gradient",
      },
      {
        name: "clean-architecture",
        color: "white-text-gradient",
      },
    ],
    image: marblesofmumbles,
    source_code_link: "https://github.com/GuillermoTays/My-Portfolio",
  },
];

export { services, technologies, experiences, testimonials, projects };

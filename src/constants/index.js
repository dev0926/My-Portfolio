import {
  mobile,
  android,
  kotlin,
  firebase,
  mysql,
  java,
  backend,
  creator,
  web,
  isyaratku,
  javascript,
  typescript,
  intplan,
  html,
  bangkit,
  goto,
  pln,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  php,
  disaster,
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
    title: "BackEnd Developer",
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
    name: "Android",
    icon: android,
  },
  {
    name: "Kotlin",
    icon: kotlin,
  },
  {
    name: "Java",
    icon: java,
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
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "IT Engineering (Internship)",
    company_name: "PT PLN (Persero) UP 3 Makassar Utara",
    icon: pln,
    iconBg: "#FFFFFF",
    date: "Jun 2021 - Dec 2021",
    points: [
      "Build an application project 'IntPlan (Inspection to Platinum)' tool to facilitate the implementation and monitoring of customer sampling according to DLPD, TO and LBKB. The data is integrated with data spreadsheet PLN-UP3 Makassar",
      "Creating a chatbot that is integrated with the Whatsapp application to help employees get detailed customer information that they want to check the electric meter in location.",
    ],
  },
  {
    title: "Mobile Development Android",
    company_name: "Bangkit Academy led by Google, GoTo, & Traveloka",
    icon: bangkit,
    iconBg: "#FFFFFF",
    date: "Feb 2022 - Aug 2022",
    points: [
      "Build several Android application with applied MVVM Architecture pattern and using Kotlin as a programming language.",
      "Collaborating with Machine Learning path and Cloud Computing path to create product-base capstone project.",
      "Build an AUDI (Autism Detection for Children) application for Product-based Capstone project.",
    ],
  },
  {
    title: "Mobile Engineering Android (Apprenticeship)",
    company_name: "GoTo Impact Foundation",
    icon: goto,
    iconBg: "#FFFFFF",
    date: "Jun 2023 - Present",
    points: [
      "Build a Disaster Tracker designed to track natural disasters, such as floods, earthquakes, fires, and volcanic eruptions, in Indonesia. The concept used in this application uses the MVVM Design Pattern, S.O.L.I.D Principle and using Dagger Hilt.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Intplan",
    description:
      "Intplan (Inspection to Platinum) is a tools to facilitate implementation and monitoring customer sampling according to DLPD, TO, and LBKB on PLN UP 3 Makassar Utara.",
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
    image: intplan,
    source_code_link: "https://github.com/raflisalam/PLN_IntPlan",
  },
  {
    name: "Isyaratku",
    description:
      "Isyaratku is a real-time Indonesian Sign Language translator application using the YOLOv5 method, designed to assist who struggle to understand sign language's.",
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
    image: isyaratku,
    source_code_link: "https://github.com/raflisalam/Isyaratku",
  },
  {
    name: "Disaster Tracker",
    description:
      "The Disaster tracker is an application designed to track natural disasters, such as floods, earthquakes, fires, and volcanic eruptions, in Indonesia.",
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
    image: disaster,
    source_code_link:
      "https://github.com/GG-3-0-Mobile-Engineering/ME15-DisasterApps-GG3MEGP0582-MuhammadRafliSalam",
  },
];

export { services, technologies, experiences, testimonials, projects };

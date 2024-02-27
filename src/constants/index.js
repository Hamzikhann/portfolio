import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
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
    title: "Website Development",
    icon: web,
  },
  {
    title: "Native App Development",
    icon: mobile,
  },
  {
    title: "Software Development",
    icon: creator,
  },
  {
    title: "Mobile App Development",
    icon: mobile,
  },

  {
    title: "E-Commerace Development",
    icon: web,
  },
  {
    title: "WordPress/Shopify Development",
    icon: web,
  },
  {
    title: "UI/UX Design",
    icon: backend,
  },
  {
    title: "IT-Solutions",
    icon: creator,
  },
];

const technologies = [
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Development",

    icon: starbucks,
    iconBg: "#383E56",
    points: [
      "Expertly architecting and developing end-to-end solutions leveraging a wide array of technologies, including front-end frameworks like React.js and back-end technologies such as Node.js.",
      "Implementing scalable, robust, and secure applications while ensuring optimal performance and reliability.",
      "Leveraging a deep understanding of both front-end and back-end development to streamline processes and drive innovation.",
    ],
  },
  {
    title: "Native App Development",
    icon: tesla,
    iconBg: "#E6DEDD",
    points: [
      "Crafting immersive mobile experiences through native app development on platforms like iOS and Android.",
      "Collaborating closely with designers, product managers, and fellow developers to translate client requirements into intuitive and elegant user interfaces.",
      "Ensuring seamless integration with device functionalities and APIs while prioritizing security and data privacy.",
    ],
  },
  {
    title: "Shopify Development",
    icon: shopify,
    iconBg: "#383E56",
    points: [
      "Specializing in Shopify development to create tailored e-commerce solutions that drive sales and enhance customer experiences.",
      "Collaborating closely with merchants to understand their unique needs and translate them into robust Shopify stores.",
      "Ensuring seamless integration with third-party services, payment gateways, and shipping providers to streamline operations.",
    ],
  },
  {
    title: "E-Commerce Development",
    icon: meta,
    iconBg: "#E6DEDD",
    points: [
      "Empowering businesses with bespoke e-commerce solutions tailored to their unique needs and goals.",
      "Collaborating closely with clients to design and develop user-friendly online stores that drive sales and foster customer loyalty.",
      "Integrating advanced features such as product customization, dynamic pricing, and multi-channel selling to enhance the shopping experience.",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

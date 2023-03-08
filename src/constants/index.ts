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
  threejs,
  qwings,
  skillvertex,
  duckcart,
  ShopBuddyVideo,
  KryptVideo,
  VoyageVideo,
  avada,
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
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Blockchain Creator",
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
    title: "NodeJs Developer",
    company_name: "Duckcart",
    icon: duckcart,
    iconBg: "#E6DEDD",
    date: "November 2022 - Present",
    points: [
      "Managing the backend of a new Startup application, creating new apis, adding new features etc.",
      "Managing a team of Interns.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Keeping a track of changes and new features added by other interns",
    ],
  },

  {
    title: "Frontend Developer",
    company_name: "Qwings",
    icon: qwings,
    iconBg: "#E6DEDD",
    date: "March 2022 - July 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Avada",
    icon: avada,
    iconBg: "#E6DEDD",
    date: "March 2021 - August 2021",
    points: [
      "Worked as a senior web developer, lead a team of 8 people, maintained the main website of the company",
      "Taught colleagues good code practices and optimization techniques.",
    ],
  },
  {
    title: "MERN Stack Developer",
    company_name: "Skill Vertex",
    icon: skillvertex,
    iconBg: "#32FFD4",
    date: "October 2020 - December 2020",
    points: [
      "Developing and maintaining web applications using MERN stack.",
      "Implemented previous learning, created and maintained several apps i.e E - commerce and Food delivery.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rajat proved me wrong.",
    name: "Ankit",
    designation: "Team Leader",
    company: "Qwings",
    image:
      "https://res.cloudinary.com/rajat0512/image/upload/v1642447946/E-commerce/avatar_gehm7u.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rajat does.",
    name: "Abhijit",
    designation: "HR",
    company: "Skill Vertex",
    image:
      "https://res.cloudinary.com/rajat0512/image/upload/v1642447946/E-commerce/avatar_gehm7u.jpg",
  },
  {
    testimonial:
      "After Rajat optimized our website, our traffic increased by 30%. We can't thank you enough!",
    name: "Anubhav",
    designation: "Project Manager",
    company: "Avada",
    image:
      "https://res.cloudinary.com/rajat0512/image/upload/v1642447946/E-commerce/avatar_gehm7u.jpg",
  },
];

const projects = [
  {
    name: "Shop Buddy",
    description:
      "Shop Buddy is an attempt to serve the people of India with unique designs on apparels. E-commerce is revolutionising the way we all shop in India.",
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
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: ShopBuddyVideo,
    source_code_link:
      "https://github.com/Rajat-Raghuvanshi-0512/MERN-Ecommerce",
    live_url: "https://shop-buddy.onrender.com",
  },
  {
    name: "Krypt",
    description:
      "Web 3.0 has the potential to change the internet as we know it, forever. This is my first blockchain cryptocurrency app.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "web 3.0",
        color: "pink-text-gradient",
      },
    ],
    image: KryptVideo,
    source_code_link:
      "https://github.com/Rajat-Raghuvanshi-0512/web3.0-blockchain-app",
    live_url: "https://krypt-georli.netlify.app/",
  },
  {
    name: "Voyage Tours and Travels",
    description:
      "With Voyage, businesses may save money and offer convenience to their clients. Also, 'community chat' has been added for the user to find a travel companion.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "heroku",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: VoyageVideo,
    source_code_link:
      "https://github.com/Rajat-Raghuvanshi-0512/voyage-tours-and-travels",
    live_url: "https://voyage-tours.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };

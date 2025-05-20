import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/work-1.png';
import Work2 from './assets/work-2.png';
import Work3 from './assets/work-3.png';
import Work4 from './assets/work-4.png';
import Work5 from './assets/work-5.png';
import Work6 from './assets/work-6.png';
import Work7 from './assets/work-7.png';
import Work8 from './assets/work-8.png';
import Work9 from './assets/work9.png';
import Work10 from './assets/work10.png';
import Work11 from './assets/work11.png';
import Work12 from './assets/work12.png';
import Work13 from './assets/work13.png';
import Work15 from './assets/work15.png';
import Work16 from './assets/work16.png';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Mustafa',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'El-hadad',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '25 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Egyption',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Saudi - Riyadh ',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '0553132969',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'mustafaelhadad241@mail.com',
  },

  {
    id: 9,
    title: 'Skype : ',
    description: 'mustafaelhadad',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'Arabic, English',
  },
];

export const stats = [
  {
    id: 1,
    no: '2+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '10+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '9+',
    title: 'Happy <br /> Customers',
  },

  {
    id: 4,
    no: '4+',
    title: ' Awards <br /> Won',
  },
];

export const resume = [
  {
    id:1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'Mar 2025 - present',
    title: 'Al-musanid Tech',
    desc: 'FrontEnd(Next JS) - On site',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2024 - PRESENT',
    title: 'Front-End Developer <span> Freelance </span>',
    desc:"As a Freelance Front-End Developer, I specialize in crafting responsive, interactive, and user-friendly websites. With expertise in HTML, CSS, JavaScript, and React, I focus on delivering high-quality digital solutions tailored to client needs. Whether it's a personal project or a business website, I work closely with clients to ensure seamless user experiences and modern design. My goal is to transform ideas into functional, beautiful web applications that engage users and drive results."
  },


  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2024 - 2024',
    title: 'UI Developer  <span> Delta Capital </span>',
    desc: "I worked as a UI Developer at Delta Capital, where I contributed to creating intuitive and visually appealing user interfaces for various web applications. My role involved collaborating closely with UX designers and back-end developers to deliver seamless and responsive designs. I utilized HTML, CSS, JavaScript, and React to ensure that the UI was not only aesthetically pleasing but also functional across different devices and browsers. Working at Delta Capital helped me enhance my skills in UI development and deepened my understanding of creating user-centric digital experiences."
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: ' Sept 2018 - Jun 2022',
    title: 'Bachelors Degree in Information Technologies',
    desc: 'Kafr-Elsheikh University / Faculty of Computers and Information',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: 'Jul 2023 - Sept 2023',
    title: 'I took a Front-End course at Route Academy for Courses.',
    desc: 'I successfully completed the Front-End Development Diploma at Route Academy. This course provided me with practical skills and hands-on experience in building user-friendly, responsive websites using HTML, CSS, JavaScript, and React. It helped me strengthen my knowledge of modern web development techniques and best practices, including component-based architecture and state management in React.',
  },


];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '90',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '85',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '90',
  },

  {
    id: 4,
    title: 'Tailwind CSS',
    percentage: '90',
  },

  {
    id: 5,
    title: 'Wordpress',
    percentage: '70',
  },

  {
    id: 6,
    title: 'Jquery',
    percentage: '85',
  },

  {
    id: 7,
    title: 'Next JS',
    percentage: '80',
  },

  {
    id: 8,
    title: 'React JS',
    percentage: '85 ',
  },
];

 export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'E-commerce',
    link: 'https://mustafaamen.github.io/Cart/',
    details: [
      {
        icon: <FiFileText />,
        title: 'P roject : ',
        desc: 'E-commerce',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'freelance',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: ' React JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: ' https://mustafaamen.github.io/Cart/',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Yummy',
    link: 'https://mustafaamen.github.io/Yammyy/',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Yummy',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'freelance',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: ' Api, jQuery',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://mustafaamen.github.io/Yammyy/',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Weather',
    link: 'https://mustafaamen.github.io/weather/',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Weather',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'freelance',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: ' JS, Api',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: ' https://mustafaamen.github.io/weather/',
      },
    ],
  },
  {
    id: 14,
    img: Work16,
    title: 'Tic Tac Toe',
    link: 'https://mustafaamen.github.io/Game/',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Tic Tac Toe:',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'freelance',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React Js',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://mustafaamen.github.io/Game/',
      },
    ],
  },

  {
    id: 4,
    img: Work13,
    title: 'Egypt',
    link: 'https://mustafaamen.github.io/Egypt/',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Egypt',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'freelance',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Bootstrap , Html, Css',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://mustafaamen.github.io/Egypt/',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'LOGIN SYSTEM:',
    link: 'https://mustafaamen.github.io/login-system/',
    details: [
      {
        title: 'Project : ',
        desc: 'LOGIN SYSTEM:',
      },
      {
        title: 'Client : ',
        desc: 'freelance',
      },
      {
        title: 'Language : ',
        desc: 'Bootstrap, Responsive, JS',
      },
      {
        title: 'Preview : ',
        desc: 'https://mustafaamen.github.io/login-system/',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Egyption Party',
    link: 'https://mustafaamen.github.io/Party/',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Egyption Party',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'freelance',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: ' jQuery',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://mustafaamen.github.io/Party/',
      },
    ],
  },

  {
    id: 7,
    img: Work7,
    title: 'CRUD',
    link: 'https://mustafaamen.github.io/Crud-Operations/',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'CRUD',
      },
      {
        icon: <FiUser />,
      
        title: 'Client : ',
        desc: 'freelance',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'JavaScript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://mustafaamen.github.io/Crud-Operations/',
      },
    ],
  },
  {
    id: 8,
    img: Work8,
    title: 'Exam && JQ',
    link: 'https://mustafaamen.github.io/exam-JQ/',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Jquery',
      },
      {
        icon: <FiUser />,
      
        title: 'Client : ',
        desc: 'freelance',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Bootstrab ,Jquery ',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://mustafaamen.github.io/exam-JQ/',
      },
    ],
  },
  {
    id: 9,
    img: Work9,
    title: 'Simon',
    link: 'https://mustafaamen.github.io/simon/',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Simon',
      },
      {
        icon: <FiUser />,
      
        title: 'Client : ',
        desc: 'freelance',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Bootstrab&Html&Css ',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://mustafaamen.github.io/simon/',
      },
    ],
  },

  {
    id: 10,
    img: Work10,
    title: 'Kerri',
    link: 'https://mustafaamen.github.io/Kerri/',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Kerri',
      },
      {
        icon: <FiUser />,
      
        title: 'Client : ',
        desc: 'freelance',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html &Css &Bootstrab ',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://mustafaamen.github.io/Kerri/',
      },
    ],
  },

  {
    id: 11,
    img: Work11,
    title: 'Rudra',
    link: 'https://mustafaamen.github.io/Rudra/',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Rudra',
      },
      {
        icon: <FiUser />,
      
        title: 'Client : ',
        desc: 'freelance',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html &Css &Bootstrab ',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: ' https://mustafaamen.github.io/Rudra/',
      },
    ],
  },

  {
    id: 12,
    img: Work12,
    title: 'Mealify',
    link: 'https://mustafaamen.github.io/Mealify/',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Mealify',
      },
      {
        icon: <FiUser />,
      
        title: 'Client : ',
        desc: 'freelance',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: ' Html & Css & Bootstrab ',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://mustafaamen.github.io/Mealify/',
      },
    ],
  },
  {
    id: 13,
    img: Work4,
    title: 'DANIELS',
    link: 'https://mustafaamen.github.io/DANIELS/',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'DANIELS:',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'freelance',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Bootstrap, Responsive',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://mustafaamen.github.io/DANIELS/',
      },
    ],
  },




  
];









export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];

import type { IconType } from "react-icons";
import { FaLinkedin, FaWhatsapp, FaGolang } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaGithub, FaGitAlt } from "react-icons/fa";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiRedux,
  SiVite,
  SiTailwindcss,
  SiExpress,
  SiAstro,
} from 'react-icons/si';
import {
  IoLogoReact,
  IoLogoNodejs,
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoFigma,
} from 'react-icons/io5';

export type Navtypes = {
  url: string;
  logo: IconType;
};

export type TechandToolsTypes = {
  logo: IconType;
  name: string;
};


const message = "Hello, I'd like to talk to you!";
const phoneNumber = '+542215909321';
const encodedMessage = encodeURIComponent(message);
const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

export const navlogos: Navtypes[] = [
  { url: 'mailto:justobecerra@gmail.com', logo: IoMdMail },
  {
    url: 'https://www.linkedin.com/in/justo-becerra-14868a1b4/',
    logo: FaLinkedin,
  },
  { url: 'https://github.com/JustBecerra', logo: FaGithub },
  { url: whatsappURL, logo: FaWhatsapp },
];

export const scrollRoutes = [
  {
    name: 'About',
  },
  {
    name: 'Projects',
  },
];

export const ProfessionalInfo = [
  {
    imageURL: '/sinergiavaloresSH.png',
    projectIcon: '/sinergiavaloresIcon.ico',
    name: 'Sinergia Valores',
    type: 'projects.sinergiavaloresType',
    description: 'projects.sinergiavaloresDescription',
    listOfIcons: [
      {
        name: 'Typescript',
        logo: BiLogoTypescript,
      },
      {
        name: 'CSS',
        logo: IoLogoCss3,
      },
      {
        name: 'HTML',
        logo: IoLogoHtml5,
      },
      {
        name: 'CSS',
        logo: SiTailwindcss,
      },
      {
        name: 'Astro',
        logo: SiAstro,
      },
    ],
    appLink: 'https://www.sinergiavalores.com/',
    repoLink: '',
  },
];

export const ChallengeInfo = [
  {
    imageURL: '/rick&mortySH.png',
    projectIcon: '/rick&mortyicon.ico',
    name: 'Rick & Morty App',
    type: 'projects.rick&mortyType',
    description: 'projects.rick&mortyDescription',
    listOfIcons: [
      {
        name: 'Typescript',
        logo: BiLogoTypescript,
      },
      {
        name: 'CSS',
        logo: IoLogoCss3,
      },
      {
        name: 'HTML',
        logo: IoLogoHtml5,
      },
      {
        name: 'Next',
        logo: RiNextjsFill,
      },
      {
        name: 'Tailwind',
        logo: SiTailwindcss,
      },
    ],
    appLink:
      'https://rick-and-morty-challenge-justbecerras-projects.vercel.app/',
    repoLink: 'https://github.com/JustBecerra/rick-morty-challenge',
  },
  {
    imageURL: '/marvelseekerSH.png',
    projectIcon: '/marvelseekerIcon.svg',
    name: 'Marvel Seeker',
    type: 'projects.marvelseekerType',
    description: 'projects.marvelseekerDescription',
    listOfIcons: [
      {
        name: 'Typescript',
        logo: BiLogoTypescript,
      },
      {
        name: 'CSS',
        logo: IoLogoCss3,
      },
      {
        name: 'HTML',
        logo: IoLogoHtml5,
      },
      {
        name: 'Next',
        logo: RiNextjsFill,
      },
      {
        name: 'Redux',
        logo: SiRedux,
      },
    ],
    appLink: 'https://marvel-seeker.vercel.app/',
    repoLink: 'https://github.com/JustBecerra/MarvelSeeker',
  },
  {
    imageURL: '/quiztimeSH.png',
    projectIcon: '/quiztimeicon.ico',
    name: 'Fun Quiz Time!',
    type: 'projects.quiztimeType',
    description: 'projects.quiztimeDescription',
    listOfIcons: [
      {
        name: 'Typescript',
        logo: BiLogoTypescript,
      },
      {
        name: 'Tailwind',
        logo: SiTailwindcss,
      },
      {
        name: 'CSS',
        logo: IoLogoCss3,
      },
      {
        name: 'HTML',
        logo: IoLogoHtml5,
      },
      {
        name: 'Next',
        logo: RiNextjsFill,
      },
      {
        name: 'Go',
        logo: FaGolang,
      },
      {
        name: 'PostgreSQL',
        logo: BiLogoPostgresql,
      },
    ],
    appLink: 'https://fun-quiz-time.vercel.app/',
    repoLink: 'https://github.com/JustBecerra/QuizTime',
  },
];

export const TechandToolsList: TechandToolsTypes[] = [
  {
    name: 'Astro',
    logo: SiAstro,
  },
  {
    name: 'React',
    logo: IoLogoReact,
  },
  {
    name: 'Node',
    logo: IoLogoNodejs,
  },
  {
    name: 'Javascript',
    logo: IoLogoJavascript,
  },
  {
    name: 'Typescript',
    logo: BiLogoTypescript,
  },
  {
    name: 'HTML',
    logo: IoLogoHtml5,
  },
  {
    name: 'CSS',
    logo: IoLogoCss3,
  },
  {
    name: 'Figma',
    logo: IoLogoFigma,
  },
  {
    name: 'Next',
    logo: RiNextjsFill,
  },
  {
    name: 'Git',
    logo: FaGitAlt,
  },
  {
    name: 'Github',
    logo: FaGithub,
  },
  {
    name: 'Redux',
    logo: SiRedux,
  },
  {
    name: 'Go',
    logo: FaGolang,
  },
  {
    name: 'PostgreSQL',
    logo: BiLogoPostgresql,
  },
  {
    name: 'Vite',
    logo: SiVite,
  },
  {
    name: 'Tailwind',
    logo: SiTailwindcss,
  },
  {
    name: 'Express',
    logo: SiExpress,
  },
];

import type { IconType } from "react-icons";
import { FaLinkedin, FaWhatsapp, FaGolang } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaGithub, FaGitAlt } from "react-icons/fa";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { SiRedux, SiVite, SiTailwindcss, SiExpress } from "react-icons/si";
import { IoLogoReact, IoLogoNodejs, IoLogoJavascript, IoLogoHtml5, IoLogoCss3, IoLogoFigma } from "react-icons/io5";

export type Navtypes = {
  url: string;
  logo: IconType;
};

export type TechandToolsTypes = {
  name: string;
  logo: IconType;
};

const message = "Hello, I'd like to talk to you!";
const phoneNumber = "+542215909321";
const encodedMessage = encodeURIComponent(message);
const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

export const navlogos: Navtypes[] = [
  { url: "mail", logo: IoMdMail },
  { url: "https://www.linkedin.com/in/justo-becerra-14868a1b4/", logo: FaLinkedin },
  { url: "https://github.com/JustBecerra", logo: FaGithub },
  { url: whatsappURL, logo: FaWhatsapp },
];

export const scrollRoutes = [
  {
    name: "About",
  },
  {
    name: "Projects",
  },
];

export const TechandToolsList: TechandToolsTypes[] = [
  {
    name: "React",
    logo: IoLogoReact,
  },
  {
    name: "Node",
    logo: IoLogoNodejs,
  },
  {
    name: "Javascript",
    logo: IoLogoJavascript,
  },
  {
    name: "Typescript",
    logo: BiLogoTypescript,
  },
  {
    name: "HTML",
    logo: IoLogoHtml5,
  },
  {
    name: "CSS",
    logo: IoLogoCss3,
  },
  {
    name: "Figma",
    logo: IoLogoFigma,
  },
  {
    name: "NextJs",
    logo: RiNextjsFill,
  },
  {
    name: "Git",
    logo: FaGitAlt,
  },
  {
    name: "Github",
    logo: FaGithub,
  },
  {
    name: "Redux",
    logo: SiRedux,
  },
  {
    name: "Golang",
    logo: FaGolang,
  },
  {
    name: "PostgreSQL",
    logo: BiLogoPostgresql,
  },
  {
    name: "Vite",
    logo: SiVite,
  },
  {
    name: "Tailwind",
    logo: SiTailwindcss,
  },
  {
    name: "Express",
    logo: SiExpress,
  },
];

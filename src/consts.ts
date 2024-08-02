import type { IconType } from "react-icons";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

export type Navtypes = {
  url: string;
  logo: IconType;
};

export const navlogos: Navtypes[] = [
  { url: "mail", logo: IoMdMail },
  { url: "linkedin", logo: FaLinkedin },
  { url: "github", logo: FaGithub },
  { url: "whatsapp", logo: FaWhatsapp },
];

export const scrollRoutes = [
  {
    name: "About",
  },
  {
    name: "Projects",
  },
];

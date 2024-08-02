import type { IconType } from "react-icons";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

export type Navtypes = {
  url: string;
  logo: IconType | string;
};

export const navlogos: Navtypes[] = [
  { url: "mail", logo: IoMdMail },
  { url: "linkedin", logo: FaLinkedin },
  { url: "github", logo: FaGithub },
  { url: "whatsapp", logo: FaWhatsapp },
  {
    url: "about",
    logo: "About",
  },
  { url: "blog", logo: "Blog" },
];

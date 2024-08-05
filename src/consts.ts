import type { IconType } from "react-icons";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

export type Navtypes = {
  url: string;
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

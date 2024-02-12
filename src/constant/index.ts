import { FaBook, FaLaptop } from "react-icons/fa";
import { PiMicrosoftWordLogoFill } from "react-icons/pi";
import {
  Project1,
  Project2,
  Project3,
  Project4,
  Project5,
  Project6,
} from "../assets/Project";
import { persona1, persona2, persona3 } from "@/assets/Img";

export const navbar = [
  { label: "Sobre", href: "#sobre" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Testimonio", href: "#testimonio" },
  { label: "Contacto", href: "#contacto" },
];

export const info = [
  {
    Icon: FaLaptop,
    title: "Desarrollo Web",
    label: ["HTML", "CSS", "REACT", "TAILWIND"],
  },
  {
    Icon: PiMicrosoftWordLogoFill,
    title: "Articulos",
    label: ["ESCRIBIR", "EDITAR", "BLOGS"],
  },
  {
    Icon: FaBook,
    title: "Estudiante",
    label: ["FREECODECAMP", "DESARROLLO WEB", "C++"],
  },
];

export const projectos = [
  {
    img: Project1,
    href: "https://github.com/sasamile/Portafolio-Disenio",
  },
  {
    img: Project2,
    href: "https://github.com/sasamile/Travel",
  },
  {
    img: Project3,
    href: "https://github.com/sasamile/Mi-Primera-web-React",
  },
  {
    img: Project4,
    href: "https://github.com/sasamile/Naruto-Uzumaky",
  },
  {
    img: Project5,
    href: "https://github.com/sasamile/Nike-Colecci-n-de-Invierno",
  },
  {
    img: Project6,
    href: "https://github.com/sasamile/GPT-3",
  },
];

export const carousel = [
  { img: persona1 },
  { img: persona2 },
  { img: persona3 },
];

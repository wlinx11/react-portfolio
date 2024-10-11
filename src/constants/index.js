import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import VIVEL from "../assets/projects/VIVEL.jpg";
import SISOGEM from "../assets/projects/SISOGEM.jpg";
import sandar2 from "../assets/projects/sandar2.jpg";
import * as DevIcons from "devicons-react";

export const HERO_CONTENTS = {
  en: `I'm Roboam Ismael Rangel Ceja, a computer systems engineering student specializing in software engineering with experience in frontend development.`,

  es: `Soy Roboam Ismael Rangel Ceja, estudiante de ingeniería en sistemas computacionales con especialidad en ingeniería de software con experiencia en desarrollo frontend.`
};

export const ABOUT_TEXT = {
  en: `My name is Roboam Ismael Rangel Ceja, I am 25 years old, and I am currently in my last semester of Computer Systems Engineering in Morelia, Michoacán. Throughout my studies, I have gained experience in software development, especially in frontend with technologies like React and Next.js.

In addition to my passion for programming, I am interested in continuing to learn about areas such as artificial intelligence, video game development, and data science. I have a good level of English and stand out for my adaptability in teams and in facing complex challenges. I am seeking an opportunity to carry out my professional internship, where I can contribute my skills and continue growing in my career. I am willing to relocate to meet the company's requirements.`,

  es: `Mi nombre es Roboam Ismael Rangel Ceja, tengo 25 años y actualmente estoy cursando mi último semestre de la carrera de ingeniería en sistemas en Morelia, Michoacán. A lo largo de mi formación, he adquirido experiencia en el desarrollo de software, especialmente en el frontend con tecnologías como React y Next.js.

Además de mi pasión por la programación, me interesa seguir aprendiendo sobre áreas como inteligencia artificial, desarrollo de videojuegos y ciencias de datos. Tengo un buen nivel de inglés y me destaco por mi capacidad de adaptación en equipos y ante retos complejos. Estoy en búsqueda de una oportunidad para realizar mis prácticas profesionales, donde pueda aportar mis habilidades y continuar creciendo en mi carrera. Estoy dispuesto a movilizarme para cumplir con los requerimientos de la empresa.`,
};

export const PROJECTS = [
  {
    title: {
      en: "VIVEL Entrepreneurship Academy",
      es: "VIVEL Academia de emprendimiento",
    },
    image: project1,
    secondImage: VIVEL,
    description: {
      en: "I participated in the development of a comprehensive online course platform with features such as admin panel, payment gateway, and live virtual sessions.",
      es: "Participe en el desarrollo de una plataforma completa de cursos en linea con características como administrador, pasarela de pagos y sesiones virtuales en vivo.",
    },
    technologies: ["CodeIgniter", "PHP", "JavaScript", "Bootstrap 5", "MySQL"],
  },
  {
    title: {
      en: "SISOGEM - Government Organs System of the State of Michoacán",
      es: "SISOGEM - Sistema de Órganos de Gobierno del Estado de Michoacán",
    },
    image: project2,
    secondImage: SISOGEM,
    description: {
      en: "I participated in the development of a governmental platform with features like digital signatures, real-time document editor, and file management, improving efficiency in the state’s administrative processes.",
      es: "Participé en el desarrollo de una plataforma gubernamental con características como firmas digitales, editor de documentos en tiempo real y gestión de archivos, mejorando la eficiencia en los procesos administrativos del estado.",
    },
    technologies: [
      "REACT",
      "Node.JS",
      "AWS",
      "Express.JS",
      "MongoDB",
      "ANT Design",
    ],
  },
  {
    title: {
      en: "Sandar Inmuebles - Real Estate Platform",
      es: "Sandar Inmuebles - Página Inmobiliaria",
    },
    image: project3,
    secondImage: sandar2,
    description: {
      en: "I developed a real estate platform with property management services, analytics generation, messaging box, and comprehensive property management, facilitating interaction between users and agents.",
      es: "Desarrollé una plataforma inmobiliaria con servicios de administración de propiedades, generación de analíticas, buzón de mensajería y gestión integral de inmuebles, facilitando la interacción entre usuarios y agentes.",
    },
    technologies: ["REACT", "Tailwind CSS", "FireBase", "AntDesign"],
  },
];

export const CONTACT = {
  address:{ 
    en: "Morelia, Michoacán (availability for relocation)",
    es: "Morelia, Michoacán (disponibilidad para reubicación)"
  },
  phoneNo: "443-238-1825 (WhatsApp)",
  email: "wlinx11@gmail.com",
};

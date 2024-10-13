import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { DiJavascript1, DiJava, DiPython } from "react-icons/di";
import { SiArduino } from "react-icons/si";
import { motion } from "framer-motion";
import { SiCanva } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJira } from "react-icons/si";
import { BsTrello } from "react-icons/bs";
import { DiHtml5, DiCss3 } from "react-icons/di";
import { DiScrum } from "react-icons/di";
import { SiAzuredevops } from "react-icons/si";
import { BsCamera } from "react-icons/bs";
import { RiBikeLine } from "react-icons/ri";
import { SiAdobelightroom } from "react-icons/si";
import { RiNodejsFill } from "react-icons/ri";
import { RiFirebaseFill } from "react-icons/ri";
import { FaGamepad } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { BsGitlab } from "react-icons/bs";

// Función para animación discreta de los íconos
const iconVariants = (duration) => ({
  initial: { y: -1 },
  animate: {
    y: [1, -1],
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function Technologies({ language }) {
  return (
    <div className="grid grid-cols-2 grid-rows-2 border-b border-neutral-800 pb-24">
      {/* Tecnologías Principales (arriba izquierda) */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="border-r border-b border-neutral-700 p-4"
      >
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-10 text-center text-2xl font-extrabold tracking-wide text-gray-300 shadow-lg"
        >
          {language === "es"
            ? "Tecnologías Principales"
            : "Principal Technologies"}
        </motion.h1>
        <motion.div className="flex flex-wrap items-center justify-center gap-4">
          <motion.div
            variants={iconVariants(1.2)}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
          >
            <RiReactjsLine className="text-5xl text-cyan-400" />
            <h1 className="text-center text-lg font-bold tracking-wide">
              REACT
            </h1>
          </motion.div>
          <motion.div
            variants={iconVariants(1.3)}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
          >
            <TbBrandNextjs className="text-5xl" />
            <h1 className="text-center text-lg font-bold tracking-wide">
              Next.js
            </h1>
          </motion.div>
          <motion.div
            variants={iconVariants(1.1)}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
          >
            <DiJavascript1 className="text-5xl text-yellow-500" />
            <h1 className="text-center text-lg font-bold tracking-wide">
              Javascript
            </h1>
          </motion.div>
          <motion.div
            variants={iconVariants(1.3)}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
          >
            <RiNodejsFill className="text-5xl text-[#339933]" />{" "}
            {/* Color oficial de Node.js */}
            <h1 className="text-center text-lg font-bold tracking-wide">
              Node.js
            </h1>
          </motion.div>
          <motion.div
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
          >
            <DiJava className="text-5xl text-[#EC2125]" />
            <h1 className="text-center text-lg font-bold tracking-wide">
              Java
            </h1>
          </motion.div>
          <motion.div
            variants={iconVariants(1.6)}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
          >
            <DiPython className="text-5xl text-[#3F7CAD]" />

            <h1 className="text-center text-lg font-bold tracking-wide">
              Python
            </h1>
          </motion.div>
          <motion.div
            variants={iconVariants(1.7)}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
          >
            <DiHtml5 className="text-5xl text-[#E34F26]" />{" "}
            {/* Color oficial de HTML */}
            <h1 className="text-center text-lg font-bold tracking-wide">
              HTML
            </h1>
          </motion.div>
          <motion.div
            variants={iconVariants(1.4)}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
          >
            <DiCss3 className="text-5xl text-[#1572B6]" />{" "}
            {/* Color oficial de CSS */}
            <h1 className="text-center text-lg font-bold tracking-wide">CSS</h1>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Herramientas y Frameworks (arriba derecha) */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="border-b border-neutral-700 p-4"
      >
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-10 text-center text-2xl font-extrabold tracking-wide text-gray-300 shadow-lg"
        >
          {language === "es"
            ? "Herramientas y Frameworks"
            : "Tools and Frameworks"}
        </motion.h1>
        <motion.div className="flex flex-wrap items-center justify-center gap-4">
          <motion.div
            variants={iconVariants(1.2)}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center justify-center rounded-2xl
          border-4 border-neutral-800 p-4"
          >
            <RiFirebaseFill className="text-5xl text-[#FF9100]" />
            <h1 className="text-center text-lg font-bold tracking-wide">
              Firebase
            </h1>
          </motion.div>
          <motion.div
            variants={iconVariants(1.9)}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center justify-center rounded-2xl
          border-4 border-neutral-800 p-4"
          >
            <BsGithub className="text-5xl text-[#F0F6FC]" />
            <h1 className="text-center text-lg font-bold tracking-wide">
              GitHub
            </h1>
          </motion.div>
          <motion.div
            variants={iconVariants(1.9)}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center justify-center rounded-2xl
          border-4 border-neutral-800 p-4"
          >
            <BsGitlab className="text-5xl text-[#e2432a]" />
            <h1 className="text-center text-lg font-bold tracking-wide">
              GitLab
            </h1>
          </motion.div>
          <motion.div
            variants={iconVariants(1.4)}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
          >
            <RiTailwindCssFill className="text-5xl text-[#06B6D4]" />
            <h1 className="text-center text-lg font-bold tracking-wide">
              Tailwind
            </h1>
          </motion.div>
          <motion.div
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiCanva className="text-5xl text-[#00C4CC]" />
            <h1 className="text-center text-lg font-bold tracking-wide">
              Canva
            </h1>
          </motion.div>
          <motion.div
            variants={iconVariants(1.3)}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaFigma className="text-5xl text-[#F24E1E]" />
            <h1 className="text-center text-lg font-bold tracking-wide">
              Figma
            </h1>
          </motion.div>
          <motion.div
            variants={iconVariants(1.7)}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiJira className="text-5xl text-[#0052CC]" />
            <h1 className="text-center text-lg font-bold tracking-wide">
              Jira
            </h1>
          </motion.div>
          <motion.div
            variants={iconVariants(1.6)}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
          >
            <BsTrello className="text-5xl text-[#0079BF]" />
            <h1 className="text-center text-lg font-bold tracking-wide">
              Trello
            </h1>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Metodologías de Trabajo (abajo izquierda) */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="border-r border-neutral-700 p-4"
      >
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-10 text-center text-2xl font-extrabold tracking-wide text-gray-300 shadow-lg"
        >
          {language === "es" ? "Metodologías de Trabajo" : "Work Methodologies"}
        </motion.h1>
        <motion.div className="flex flex-wrap items-center justify-center gap-4">
          {/* Aquí puedes agregar los íconos de metodologías */}
          <motion.div
            variants={iconVariants(1.3)}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
          >
            <DiScrum className="text-5xl text-[#0052CC]" />
            <h1 className="text-center text-lg font-bold tracking-wide">
              Scrum
            </h1>
          </motion.div>
          <motion.div
            variants={iconVariants(1.7)}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiAzuredevops className="text-5xl text-[#0079BF]" />
            <h1 className="text-center text-lg font-bold tracking-wide">
              DevOps
            </h1>
          </motion.div>

          {/* Más metodologías pueden ser agregadas aquí */}
        </motion.div>
      </motion.div>

      {/* Habilidades Varias (abajo derecha) */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="p-4"
      >
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-10 text-center text-2xl font-extrabold tracking-wide text-gray-300 shadow-lg"
        >
          {language === "es"
            ? "Habilidades y Hobbies Personales"
            : "Skills and Personal Hobbies"}
        </motion.h1>
        <motion.div className="flex flex-wrap items-center justify-center gap-4">
          {/* Aquí puedes agregar íconos de habilidades varias */}
          {/* Por ejemplo, Arduino, u otras habilidades que consideres */}
          <motion.div
            variants={iconVariants(1.3)}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiArduino className="text-5xl text-[#00979D]" />{" "}
            {/* Color oficial de Arduino */}
            <h1 className="text-center text-lg font-bold tracking-wide">
              Arduino
            </h1>
          </motion.div>
          <motion.div
            variants={iconVariants(1.6)}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
          >
            <BsCamera className="text-5xl text-[#0052CC]" />
            <h1 className="text-center text-lg font-bold tracking-wide">
              Fotografia
            </h1>
          </motion.div>
          <motion.div
            variants={iconVariants(1.2)}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
          >
            <RiBikeLine className="text-5xl text-[#0079BF]" />
            <h1 className="text-center text-lg font-bold tracking-wide">
              Ciclismo
            </h1>
          </motion.div>
          <motion.div
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiAdobelightroom className="text-5xl text-[#31A8FF]" />

            <h1 className="text-center text-lg font-bold tracking-wide">
              Lightroom
            </h1>
          </motion.div>
          <motion.div
            variants={iconVariants(1.1)}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaGamepad className="text-5xl text-[#0079BF]" />
            <h1 className="text-center text-lg font-bold tracking-wide">
              Videojuegos
            </h1>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies;

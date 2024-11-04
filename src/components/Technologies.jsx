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

function Technologies({ language, darkMode }) {
  const sectionClass = "p-4 border-neutral-700";
  const titleClass =
    "my-6 md:my-10 text-xl md:text-2xl font-extrabold tracking-wide text-center";
  const gridClass = "flex flex-wrap items-center justify-center gap-3 md:gap-4";
  const iconBoxClass =
    "flex flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 p-2 md:p-4";
  const iconClass = "text-3xl md:text-5xl";
  const labelClass =
    "text-sm md:text-lg font-bold tracking-wide text-center mt-1";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 border-b border-neutral-800 pt-8 md:pt-16">
      {/* Principal Technologies */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className={`${sectionClass} border-b md:border-r`}
      >
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className={titleClass}
        >
          {language === "es"
            ? "Tecnologías Principales"
            : "Principal Technologies"}
        </motion.h1>
        <motion.div className={gridClass}>
          {[
            { Icon: RiReactjsLine, name: "REACT", color: "text-cyan-400" },
            { Icon: TbBrandNextjs, name: "Next.js", color: "" },
            {
              Icon: DiJavascript1,
              name: "Javascript",
              color: "text-yellow-500",
            },
            { Icon: RiNodejsFill, name: "Node.js", color: "text-[#339933]" },
            { Icon: DiJava, name: "Java", color: "text-[#EC2125]" },
            { Icon: DiPython, name: "Python", color: "text-[#3F7CAD]" },
            { Icon: DiHtml5, name: "HTML", color: "text-[#E34F26]" },
            { Icon: DiCss3, name: "CSS", color: "text-[#1572B6]" },
          ].map(({ Icon, name, color }, index) => (
            <motion.div
              key={name}
              variants={iconVariants(1 + index * 0.1)}
              initial="initial"
              animate="animate"
              className={iconBoxClass}
            >
              <Icon className={`${iconClass} ${color}`} />
              <h1 className={labelClass}>{name}</h1>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Tools and Frameworks */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className={`${sectionClass} border-b`}
      >
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className={titleClass}
        >
          {language === "es"
            ? "Herramientas y Frameworks"
            : "Tools and Frameworks"}
        </motion.h1>
        <motion.div className={gridClass}>
          {[
            { Icon: RiFirebaseFill, name: "Firebase", color: "text-[#FF9100]" },
            { Icon: BsGithub, name: "GitHub", color: "" },
            { Icon: BsGitlab, name: "GitLab", color: "text-[#e2432a]" },
            {
              Icon: RiTailwindCssFill,
              name: "Tailwind",
              color: "text-[#06B6D4]",
            },
            { Icon: SiCanva, name: "Canva", color: "text-[#00C4CC]" },
            { Icon: FaFigma, name: "Figma", color: "text-[#F24E1E]" },
            { Icon: SiJira, name: "Jira", color: "text-[#0052CC]" },
            { Icon: BsTrello, name: "Trello", color: "text-[#0079BF]" },
          ].map(({ Icon, name, color }, index) => (
            <motion.div
              key={name}
              variants={iconVariants(1 + index * 0.1)}
              initial="initial"
              animate="animate"
              className={iconBoxClass}
            >
              <Icon className={`${iconClass} ${color}`} />
              <h1 className={labelClass}>{name}</h1>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Work Methodologies */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className={`${sectionClass} border-b md:border-r`}
      >
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className={titleClass}
        >
          {language === "es" ? "Metodologías de Trabajo" : "Work Methodologies"}
        </motion.h1>
        <motion.div className={gridClass}>
          {[
            { Icon: DiScrum, name: "Scrum", color: "text-[#0052CC]" },
            { Icon: SiAzuredevops, name: "DevOps", color: "text-[#0079BF]" },
          ].map(({ Icon, name, color }, index) => (
            <motion.div
              key={name}
              variants={iconVariants(1.3 + index * 0.1)}
              initial="initial"
              animate="animate"
              className={iconBoxClass}
            >
              <Icon className={`${iconClass} ${color}`} />
              <h1 className={labelClass}>{name}</h1>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Skills and Personal Hobbies */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className={sectionClass}
      >
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className={titleClass}
        >
          {language === "es"
            ? "Habilidades y Hobbies Personales"
            : "Skills and Personal Hobbies"}
        </motion.h1>
        <motion.div className={gridClass}>
          {[
            { Icon: SiArduino, name: "Arduino", color: "text-[#00979D]" },
            {
              Icon: BsCamera,
              name: language === "es" ? "Fotografia" : "Photography",
              color: "text-[#0052CC]",
            },
            {
              Icon: SiAdobelightroom,
              name: "Lightroom",
              color: "text-[#31A8FF]",
            },
            {
              Icon: RiBikeLine,
              name: language === "es" ? "Ciclismo" : "Cycling",
              color: "text-[#0079BF]",
            },
            {
              Icon: FaGamepad,
              name: language === "es" ? "Videojuegos" : "Videogames",
              color: "text-[#0079BF]",
            },
          ].map(({ Icon, name, color }, index) => (
            <motion.div
              key={name}
              variants={iconVariants(1.1 + index * 0.1)}
              initial="initial"
              animate="animate"
              className={iconBoxClass}
            >
              <Icon className={`${iconClass} ${color}`} />
              <h1 className={labelClass}>{name}</h1>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies;

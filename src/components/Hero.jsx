import { HERO_CONTENTS } from "../constants";
import profilePic from "../assets/yoinvertido.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

function Hero({ language }) {
  return (
    <section className="pt-24">
    <div className="border-b border-neutral-900 pb-20 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-7 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl"
            >
              {language === "es" ? "Hola, yo soy" : "Hello, I am"}
            </motion.h1>
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:text-8xl"
            >
              Roboam Ismael
            </motion.h1>
            <motion.span
              variants={container(0.3)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              {language === "es"
                ? "Desarrollador FrontEnd"
                : "Frontend Developer"}
            </motion.span>
            <motion.p
              variants={container(0.6)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-xl"
            >
              {HERO_CONTENTS[language]}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              src={profilePic}
              alt="Roboam Ismael"
            />
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Hero;

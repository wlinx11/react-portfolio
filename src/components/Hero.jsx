"use client";

import { HERO_CONTENTS } from "../constants";
import profilePic from "../assets/yoinvertido.jpg";
import { motion } from "framer-motion";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

function Hero({ language, darkMode }) {
  const availableText =
    language === "es" ? "Disponible para contratación" : "Available for work";

  return (
    <section className="relative pt-14 lg:pt-32">
      <div className="border-b border-neutral-900 pb-20 lg:mb-4">
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
                className="pb-11 text-6xl font-thin tracking-tight lg:text-8xl"
              >
                Roboam Ismael
              </motion.h1>
              <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-4 space-y-4 sm:space-y-0 mb-4">
                <motion.span
                  variants={container(0.3)}
                  initial="hidden"
                  animate="visible"
                  className="bg-gradient-to-r from-pink-300 via-purple-500 to-indigo-400 bg-clip-text text-3xl tracking-tight text-transparent"
                >
                  {language === "es"
                    ? "Desarrollador FrontEnd"
                    : "Frontend Developer"}
                </motion.span>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 3px #ff00b2, 0 0 7px #ff00b2, 0 0 10px #ff00b2",
                        "0 0 5px #7928ca, 0 0 10px #7928ca, 0 0 15px #7928ca",
                        "0 0 3px #ff00b2, 0 0 7px #ff00b2, 0 0 10px #ff00b2",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className={`bg-gradient-to-r from-pink-500 to-violet-500 rounded-full p-[1px] ${
                      darkMode === "dark" ? "opacity-100" : "opacity-75"
                    }`}
                  >
                    <div
                      className={`${
                        darkMode === "dark" ? "bg-neutral-900" : "bg-white"
                      } rounded-full px-4 py-2`}
                    >
                      <a
                        href="https://www.linkedin.com/in/roboam-ismael-rangel-ceja-87a2b72b6/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-sm font-medium ${
                          darkMode === "dark"
                            ? "bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 bg-clip-text text-transparent"
                            : "bg-gradient-to-r from-violet-800 via-purple-800 to-indigo-700 bg-clip-text text-transparent"
                        }`}
                      >
                        {availableText}
                      </a>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
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
                src={hero1}
                alt="Roboam Ismael"
                className={`lg:m-8 ${
                  darkMode === "dark"
                    ? "border-2 border-violet-900"
                    : "border-4 border-violet-900"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

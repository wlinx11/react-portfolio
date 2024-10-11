import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Projects({ language }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Habilita el cambio automático de imágenes
    autoplaySpeed: 7000, // Tiempo entre cada cambio (en milisegundos, 5000ms = 5 segundos)
  };

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-5xl"
      >
        {language === "es" ? "Proyectos" : "Projects"}
      </motion.h1>

      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-12 flex flex-wrap justify-center gap-16"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/3"
            >
              <Slider {...settings}>
                <div>
                  <ProjectImage
                    project={project}
                    language={language}
                    imageType="image"
                  />
                </div>
                <div>
                  <ProjectImage
                    project={project}
                    language={language}
                    imageType="secondImage"
                  />
                </div>
              </Slider>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-2/3"
            >
              <h6 className="mb-4 font-semibold text-2xl text-center lg:text-left">
                {project.title[language] ===
                "Sandar Inmuebles - Página Inmobiliaria" ? (
                  <a
                    href="https://sandarinmuebles.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title[language]}
                  </a>
                ) : (
                  project.title[language]
                )}
              </h6>
              <p className="mb-6 text-lg text-neutral-400 text-center lg:text-left">
                {project.description[language]}
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded bg-neutral-900 px-4 py-2 text-lg text-purple-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectImage({ project, language, imageType }) {
  const imageUrl = project[imageType];
  const altText = `${project.title[language]}${
    imageType === "secondImage" ? " - Second Image" : ""
  }`;

  if (project.title[language] === "Sandar Inmuebles - Página Inmobiliaria") {
    return (
      <a
        href="https://sandarinmuebles.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={imageUrl}
          width={600}
          height={600}
          alt={altText}
          className="mb-6 rounded"
        />
      </a>
    );
  }

  return (
    <img
      src={imageUrl}
      width={600}
      height={600}
      alt={altText}
      className="mb-6 rounded"
    />
  );
}

export default Projects;

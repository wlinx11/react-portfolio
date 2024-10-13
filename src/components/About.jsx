import yo2 from "../assets/yo2.webp";
import premiacion from "../assets/premiacion.jpg";
import lego from "../assets/lego.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = ({ language }) => {
  // Configuración del carrusel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Cambia cada 5 segundos
  };

  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        {language === "es" ? "Sobre" : "About"}{" "}
        <span className="text-neutral-500">
          {language === "es" ? "mi" : "Me"}
        </span>
      </h2>
      <div className="flex flex-wrap">
        {/* Sección del carrusel */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            {/* Implementación del carrusel */}
            <Slider {...settings} className="w-full">
              <div>
                <img className="rounded-2xl" src={premiacion} alt="Premiación"
                />
              </div>
              <div>
                <img className="rounded-2xl" src={lego} alt="Premiacion lego" />
              </div>
              <div>
                <img className="rounded-2xl" src={yo2} alt="Foto personal" />
              </div>
            </Slider>
          </div>
        </motion.div>

        {/* Texto de "Sobre mí" */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            {/* Texto según el idioma */}
            <p className="my-2 max-w-xl py-8 font-light tracking-tighter text-xl">
              {ABOUT_TEXT[language]}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

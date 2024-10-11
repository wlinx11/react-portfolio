import { CONTACT } from "../constants";
import { motion } from "framer-motion";

function Contact({language}) {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        {language === "es" ? "Contáctame" : "Contact me"}
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address[language]}
        </motion.p>

        {/* Número de teléfono redirigido a WhatsApp */}
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          <a href="https://wa.me/+524432381825?text=Hola,%20quisiera%20contactarte"
            target="_blank" rel="noopener noreferrer" className="border-b" >
            {CONTACT.phoneNo}
          </a>
        </motion.p>

        {/* Enlace para abrir cliente de correo */}
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          <a href={`mailto:${CONTACT.email}`} className="border-b">
            {CONTACT.email}
          </a>
        </motion.p>
      </div>
    </div>
  );
};

export default Contact;

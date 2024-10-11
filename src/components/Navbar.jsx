import { FaLinkedin, FaWhatsapp, FaFilePdf } from "react-icons/fa";
import styled from "styled-components";

// Estilos animados
const IconWrapper = styled.a`
  position: relative;
  display: inline-block;
  width: 3rem;
  height: 3rem;
  color: #fff;
  background: #333;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.4s ease-in-out;

  &:hover {
    transform: rotate(360deg);
    background-color: #0077b5; /* Color cuando se hace hover */
  }
`;

const WhatsappIconWrapper = styled(IconWrapper)`
  &:hover {
    background-color: #25d366; /* Color para WhatsApp */
  }
`;

const PdfIconWrapper = styled(IconWrapper)`
  &:hover {
    background-color: #ff0000; /* Color para PDF */
  }
`;

const Navbar = ({ language, toggleLanguage }) => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="m-4 flex items-center justify-center gap-2 text-2xl"></div>
      <div className="m-4 flex items-center justify-center gap-4 text-2xl fixed right-4">
        {/* Iconos de LinkedIn, WhatsApp y PDF con animación */}
        <IconWrapper
          href="https://www.linkedin.com/in/roboam-ismael-rangel-ceja-87a2b72b6/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </IconWrapper>

        <WhatsappIconWrapper
          href="https://wa.me/+524432381825?text=Hola,%20quisiera%20contactarte"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </WhatsappIconWrapper>

        <PdfIconWrapper
          href="/Roboam_Ismael_Rangel_Ceja.pdf"
          download
          target="_blank"
        >
          <FaFilePdf />
        </PdfIconWrapper>

        <button
          onClick={toggleLanguage}
          className="p-2 border border-neutral-500 rounded-lg text-sm hover:bg-slate-800"
        >
          {language === "es" ? "Switch to English" : "Cambiar a Español"}
        </button>
        <button className="p-2 border border-neutral-500 rounded-lg text-sm hover:bg-slate-800">
          {language === "es" ? "Luz" : "Light"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

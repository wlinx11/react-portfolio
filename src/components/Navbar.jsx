import React, { useState } from "react";
import {
  FaLinkedin,
  FaWhatsapp,
  FaFilePdf,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import styled from "styled-components";

const IconWrapper = styled.a`
  position: relative;
  display: inline-flex;
  width: 3rem;
  height: 3rem;
  color: #fff;
  background: #333;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  transition: transform 0.4s ease-in-out, background-color 0.3s ease;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  &:hover {
    transform: scale(0.9);
    background-color: #0077b5;
  }
`;

const WhatsappIconWrapper = styled(IconWrapper)`
  &:hover {
    background-color: #25d366;
  }
`;

const PdfIconWrapper = styled(IconWrapper)`
  position: relative;
  flex-direction: column; /* Apilamos el icono y el texto en columnas */

  /* Tooltip visible solo en pantallas grandes */
  @media (min-width: 768px) {
    &:hover span {
      opacity: 1;
      transform: translateY(0);
    }

    span {
      position: absolute;
      bottom: -1.5rem;
      background-color: #333;
      color: #fff;
      padding: 0.2rem 0.4rem;
      border-radius: 0.3rem;
      font-size: 0.75rem;
      opacity: 0;
      transform: translateY(0.5rem);
      transition: opacity 0.3s ease, transform 0.3s ease;
      white-space: nowrap;
    }
  }

  /* Texto siempre visible en dispositivos móviles y ajuste de tamaño */
  @media (max-width: 767px) {
    display: flex;
    align-items: center;
    width: 2.5rem; /* Reducimos el ancho */
    height: 2.5rem; /* Reducimos el alto */
    span {
      font-size: 0.6rem;
      margin-top: 0.2rem;
      color: #fff;
      opacity: 1;
      transform: none;
      white-space: nowrap; /* Mantiene el texto en una sola línea */
    }
  }
`;


const StyledNavbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  padding: 0.5rem;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(1.9px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
`;

const NavbarContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    height: 100vh;
    width: 250px;
    background-color: rgba(0, 0, 0, 0.9);
    padding: 2rem;
    transition: right 0.3s ease-in-out;
  }
`;

const LanguageButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid #neutral-500;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  background-color: ${({ darkMode }) =>
    darkMode === "dark" ? "transparent" : "#f1f5f9"};
  color: ${({ darkMode }) => (darkMode === "dark" ? "#fff" : "#1f2937")};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ darkMode }) =>
      darkMode === "dark" ? "#1e293b" : "#e2e8f0"};
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const CloseButton = styled(MenuButton)`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const Switch = ({ darkMode, toggleDarkMode }) => {
  return (
    <StyledWrapper>
      <div className="toggle-switch">
        <label className="switch-label">
          <input
            type="checkbox"
            className="checkbox"
            checked={darkMode === "dark"}
            onChange={toggleDarkMode}
          />
          <span className="slider" />
        </label>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .toggle-switch {
    position: relative;
    width: 60px;
    height: 30px;
    --light: #d8dbe0;
    --dark: #28292c;
  }

  .switch-label {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--dark);
    border-radius: 15px;
    cursor: pointer;
    border: 3px solid var(--dark);
  }

  .checkbox {
    position: absolute;
    display: none;
  }

  .slider {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    transition: 0.3s;
  }

  .checkbox:checked ~ .slider {
    background-color: var(--light);
  }

  .slider::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 5px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    box-shadow: inset 8px -4px 0px 0px var(--light);
    background-color: var(--dark);
    transform: translateY(-50%);
    transition: 0.3s;
  }

  .checkbox:checked ~ .slider::before {
    transform: translate(28px, -50%);
    background-color: var(--dark);
    box-shadow: none;
  }
`;

const Navbar = ({ language, toggleLanguage, darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <StyledNavbar>
      <div className="m-4 flex items-center justify-center gap-2 text-2xl"></div>
      <MenuButton onClick={toggleMenu}>
        <FaBars />
      </MenuButton>
      <NavbarContent isOpen={isMenuOpen}>
        <CloseButton onClick={toggleMenu}>
          <FaTimes />
        </CloseButton>
        <LanguageButton onClick={toggleLanguage} darkMode={darkMode}>
          {language === "es" ? "Switch to English" : "Cambiar a Español"}
        </LanguageButton>
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
          <span>CV Español</span>
        </PdfIconWrapper>
        <PdfIconWrapper
          href="/Roboam_Ismael_Rangel_Ceja_English.pdf"
          download
          target="_blank"
        >
          <FaFilePdf />
          <span>CV English</span>
        </PdfIconWrapper>
        <Switch darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </NavbarContent>
    </StyledNavbar>
  );
};

export default Navbar;

// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Traducciones
const resources = {
  en: {
    translation: {
      HERO_CONTENT:
        "Software engineering student with a focus on software development, experienced in frontend technologies such as React, Next.js, and Tailwind CSS.",
      ABOUT_TEXT:
        "My name is Roboam Ismael Rangel Ceja, I am 25 years old and currently studying my last semester of Computer Systems Engineering...",
      // ... Otros textos en inglés
    },
  },
  es: {
    translation: {
      HERO_CONTENT:
        "Estudiante de ingeniería en sistemas computacionales con especialidad en ingeniería de software, con experiencia en el desarrollo frontend usando tecnologías como React, Next.js y Tailwind CSS.",
      ABOUT_TEXT:
        "Me llamo Roboam Ismael Rangel Ceja, tengo 25 años y actualmente me encuentro estudiando mi último semestre de ingeniería en sistemas...",
      // ... Otros textos en español
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es", // Idioma predeterminado
  interpolation: {
    escapeValue: false, // React ya maneja el escape
  },
});

export default i18n;

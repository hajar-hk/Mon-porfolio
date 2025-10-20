// src/components/HeroSection.jsx
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const HeroSection = () => {
  // Fonction pour faire défiler vers une section spécifique
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="accueil"
      className="container mx-auto px-4 py-16 text-center flex flex-col items-center"
    >
      {/* Photo de profil */}
      <div className="relative mb-8">
        <img
          src="./images/imageProfil.jpg"
          alt="hajar kassmi"
          className="rounded-full w-32 h-32 md:w-40 md:h-40 object-cover border-4 border-purple-600"
        />
        {/* Étiquette de disponibilité - position améliorée */}
        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap">
          Disponible pour un stage (PFE)/ Alternance
        </span>
      </div>
      {/* Titre */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
        Kassmi <span className="text-purple-500">Hajar</span>
      </h1>
      {/* Description */}
      <p className="text-base md:text-lg text-gray-300 max-w-2xl mb-8 px-4">
        Étudiante en 5ème année, passionnée par le développement web moderne et
        les nouvelles technologies
      </p>
      {/* Technologies */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 md:mb-12">
        {[
          "React",
          "javaScript",
          "Node.js",
          "Laravel",
          "Express.js",
          "MySql",
        ].map((tech) => (
          <span
            key={tech}
            className="bg-gray-800 text-purple-400 px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      {/* Boutons d'action - MODIFIÉS ICI */}
      <div className="flex flex-col md:flex-row gap-4 mb-12 justify-center w-full">
        <button
          onClick={() => scrollToSection("projets")}
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 w-full md:w-auto"
        >
          Voir mes projets
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 w-full md:w-auto"
        >
          Me contacter
        </button>
      </div>
      {/* Flèche de défilement */}

      <div
        className="flex flex-col items-center animate-bounce cursor-pointer"
        onClick={() => scrollToSection("about")}
        style={{ cursor: "pointer" }}
      >
        <p className="text-gray-400 mb-2 text-sm md:text-base">Découvrir</p>
        <svg
          className="w-5 h-5 md:w-6 md:h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </div>
      {/* Icônes sociales */}
      <div className="flex space-x-6 mt-12">
        <a
          href="https://github.com/hajar-hk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-purple-500 transition duration-300"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/hajar-kassmi-62ab741b3/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-purple-500 transition duration-300"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="mailto:Kassmihajar4@gmail.com"
          className="text-gray-400 hover:text-purple-500 transition duration-300"
        >
          <FaEnvelope size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

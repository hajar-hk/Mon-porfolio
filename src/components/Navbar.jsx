// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  const handleSmoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
      {/* Logo / Nom du Portfolio */}
      <div className="text-xl font-bold text-white">Portfolio</div>

      {/* Liens de navigation */}
      <ul className="hidden md:flex space-x-8">
        <li>
          <button
            onClick={() => handleSmoothScroll("accueil")}
            className="hover:text-purple-400 transition duration-300"
          >
            Accueil
          </button>
        </li>
        <li>
          <button
            onClick={() => handleSmoothScroll("about")}
            className="hover:text-purple-400 transition duration-300"
          >
            À propos
          </button>
        </li>
        <li>
          <button
            onClick={() => handleSmoothScroll("competences")}
            className="hover:text-purple-400 transition duration-300"
          >
            Compétences
          </button>
        </li>
        <li>
          <button
            onClick={() => handleSmoothScroll("projets")}
            className="hover:text-purple-400 transition duration-300"
          >
            Projets
          </button>
        </li>
        <li>
          <button
            onClick={() => handleSmoothScroll("contact")}
            className="hover:text-purple-400 transition duration-300"
          >
            Contact
          </button>
        </li>
      </ul>

      {/* Bouton "Me contacter" */}
      <div>
        <button
          onClick={() => handleSmoothScroll("contact")}
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300"
        >
          Me contacter
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

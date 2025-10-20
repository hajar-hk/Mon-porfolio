// src/components/ProjectsSection.jsx
import { FaGithub, FaStar } from "react-icons/fa";

const ProjectsSection = () => {
  return (
    <section id="projets" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes projets</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Découvrez quelques-uns de mes projets les plus significatifs
          </p>
        </div>

        {/* Grille de projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Projet 1 - E-commerce React App */}
          <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
            {/* Image du projet (à remplacer par votre image réelle) */}
            <img
              src="./images/capture1.png"
              alt="Projet E-commerce React"
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              {/* Badge mis en avant */}
              <div className="flex items-center mb-3">
                <FaStar className="text-yellow-400 mr-2" size={14} />
                <span className="text-xs font-medium text-yellow-400">
                  Mis en avant
                </span>
              </div>

              {/* Titre du projet */}
              <h3 className="text-xl font-bold mb-3">
                {" "}
                Application pour la Gestion et la Répartition des Budgets de
                recherche au sein de l'Université Moahammed 1er
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-4 text-sm">
                Application complète , authentification et gestion des Budgets
                au sein de l'Université Mohammed 1er.
              </p>

              {/* Technologies utilisées */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-xs">
                  Spring Boot{" "}
                </span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs">
                  React.js
                </span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs">
                  MySql
                </span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs">
                  Redux
                </span>
              </div>

              {/* Boutons d'action */}
              <div className="flex space-x-3">
                <a
                  href="https://github.com/Yahn-ht/e-budget_backend"
                  className="flex items-center px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors text-sm"
                >
                  <FaGithub className="mr-2" size={14} />
                  Code
                </a>
              </div>
            </div>
          </div>

          {/* Projet 2 -  */}
          <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
            {/* Image du projet (à remplacer par votre image réelle) */}
            <div className="h-48 bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center">
              <img
                src="./images/capture2.png"
                alt="Projet E-commerce React"
                className="w-full h-48 object-cover"
              />
            </div>

            <div className="p-6">
              {/* Badge mis en avant */}
              <div className="flex items-center mb-3">
                <FaStar className="text-yellow-400 mr-2" size={14} />
                <span className="text-xs font-medium text-yellow-400">
                  Mis en avant
                </span>
              </div>

              {/* Titre du projet */}
              <h3 className="text-xl font-bold mb-3">
                Conception et développement d'une Application Web de
                Recouvrement d'Eau d'Irrigation au sein de l’ORMVAM
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-4 text-sm">
                Tableau de bord interactif avec graphiques en temps réel,
                filtres avancés et export de données.
              </p>

              {/* Technologies utilisées */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-xs">
                  Laravel{" "}
                </span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs">
                  JavaScript Vanilla{" "}
                </span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs">
                  MySql{" "}
                </span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs">
                  TailwindCSS{" "}
                </span>
              </div>

              {/* Boutons d'action */}
              <div className="flex space-x-3">
                <a
                  href="https://github.com/hajar-hk/GestionEau"
                  className="flex items-center px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors text-sm"
                >
                  <FaGithub className="mr-2" size={14} />
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Section "Autres projets" */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 text-purple-400">
            Vous voulez voir plus ?
          </h3>
          <p className="text-gray-300 mb-6">
            Consultez mon GitHub pour découvrir tous mes projets.
          </p>

          <a
            href="https://github.com/hajar-hk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            <FaGithub className="mr-2" />
            Voir sur GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

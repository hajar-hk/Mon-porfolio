// src/components/AboutSection.jsx
import React from "react";
import {
  FaUser,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaBirthdayCake,
  FaRobot,
  FaPalette,
  FaCodeBranch,
  FaDocker,
  FaShieldAlt,
  FaServer,
  FaMobile,
} from "react-icons/fa";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            À propos de moi
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Découvrez mon parcours et ma passion pour le développement
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Colonne de gauche */}
          <div className="space-y-12">
            {/* Qui suis-je */}
            <div className="flex">
              <div className="mr-4 mt-1 text-purple-500">
                <FaUser size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Qui suis-je ?</h3>
                <p className="text-gray-300">
                  Passionnée par l'informatique depuis mon plus jeune âge, j'ai
                  découvert le monde du développement web durant mes études.
                  J'aime créer des solutions innovantes et apprendre de
                  nouvelles technologies. Mon objectif est de devenir une
                  développeuse full-stack expérimentée.
                </p>
              </div>
            </div>

            {/* Formation */}
            <div className="flex">
              <div className="mr-4 mt-1 text-purple-500">
                <FaGraduationCap size={24} />
              </div>
              <div className="w-full">
                <h3 className="text-xl font-semibold mb-4">Formation</h3>

                <div className="mb-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div className="mb-2 md:mb-0">
                      <h4 className="font-medium">DIPLÔME D'INGÉNIEUR</h4>
                      <p className="text-gray-400">
                        Spécialité : Génie Informatique
                      </p>
                      <p className="text-gray-400">
                        École Nationale des Sciences Appliquées d'Oujda
                      </p>
                    </div>
                    <span className="bg-purple-900 text-purple-300 text-sm px-2 py-1 rounded self-start">
                      2023 - Présent
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div className="mb-2 md:mb-0">
                      <h4 className="font-medium">CYCLE PRÉPARATOIRE</h4>
                      <p className="text-gray-400">
                        Spécialité : mathématiques, physique et informatique
                      </p>
                      <p className="text-gray-400">
                        École Nationale des Sciences Appliquées d'Oujda
                      </p>
                    </div>
                    <span className="bg-purple-900 text-purple-300 text-sm px-2 py-1 rounded self-start">
                      2021 - 2023
                    </span>
                  </div>
                </div>

                <div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div className="mb-2 md:mb-0">
                      <h4 className="font-medium">
                        BACCALAURÉAT SCIENTIFIQUE INTERNATIONALE
                      </h4>
                      <p className="text-gray-400">
                        Spécialité : Physique - option Français
                      </p>
                      <p className="text-gray-400">
                        Mention Très Bien, Lycée Melouya
                      </p>
                    </div>
                    <span className="bg-purple-900 text-purple-300 text-sm px-2 py-1 rounded self-start">
                      2020 - 2021
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne de droite */}
          <div className="space-y-12">
            {/* Localisation et âge */}
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <FaMapMarkerAlt className="mr-2 text-purple-500" /> Localisation
              </h3>
              <div className="bg-gray-800 p-6 rounded-lg">
                <p className="text-gray-300 mb-2">
                  <strong>Maroc, Oujda</strong>
                </p>
                <p className="text-gray-300 flex items-center">
                  <FaBirthdayCake className="mr-2 text-purple-500" /> 22 ans
                </p>
              </div>
            </div>

            {/* Centres d'intérêt */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Centres d'intérêt</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    icon: <FaRobot size={20} />,
                    text: "Intelligence Artificielle",
                  },
                  { icon: <FaPalette size={20} />, text: "UX/UI Design" },
                  { icon: <FaCodeBranch size={20} />, text: "Open Source" },
                  { icon: <FaMobile size={20} />, text: "Mobile Development" },
                  {
                    icon: <FaDocker size={20} />,
                    text: "DevOps",
                  },
                ].map((interest, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-gray-800 p-4 rounded-lg"
                  >
                    <span className="text-purple-500 mr-3">
                      {interest.icon}
                    </span>
                    <span className="text-gray-300">{interest.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Objectifs */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Objectifs</h3>
              <div className="bg-gray-800 p-6 rounded-lg">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span className="text-gray-300">
                      Décrocher un stage de fin d’études (PFE) ou une alternance
                      afin de mettre en pratique mes compétences.{" "}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span className="text-gray-300">
                      Contribuer à des projets innovants et collaboratifs (open
                      source ou en entreprise).{" "}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span className="text-gray-300">
                      Renforcer mon expertise en développement full stack et
                      acquérir de nouvelles compétences techniques.{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

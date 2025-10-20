// src/components/SkillsSection.jsx
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaTools,
  FaServer,
  FaWindows,
  FaLinux,
  FaApple,
} from "react-icons/fa";
import {
  SiFigma,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiOracle,
  SiPython,
  SiDocker,
  SiSpring,
  SiPostman,
  SiIntellijidea,
  SiCanva,
  SiEclipseide,
  SiGooglecolab,
} from "react-icons/si";
import { DiGit, DiVisualstudio, DiAndroid } from "react-icons/di";

const SkillsSection = () => {
  return (
    <section id="competences" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mes compétences
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Un aperçu de mes compétences techniques et des outils que je
            maîtrise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Colonne de gauche */}
          <div className="space-y-12">
            {/* Frontend */}
            <div>
              <div className="flex items-center mb-6">
                <FaReact className="text-purple-500 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Frontend</h3>
              </div>
              <div className="space-y-4">
                {[
                  {
                    name: "React.js",
                    percentage: 85,
                    icon: <FaReact className="mr-2" />,
                  },
                  {
                    name: "TypeScript",
                    percentage: 60,
                    icon: <SiTypescript className="mr-2" />,
                  },
                  {
                    name: "JavaScript",
                    percentage: 90,
                    icon: <SiJavascript className="mr-2" />,
                  },
                  {
                    name: "HTML/CSS",
                    percentage: 90,
                    icon: (
                      <>
                        <SiHtml5 className="mr-2" />
                        <SiCss3 className="mr-2" />
                      </>
                    ),
                  },
                  {
                    name: "Tailwind CSS",
                    percentage: 85,
                    icon: <SiTailwindcss className="mr-2" />,
                  },
                ].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="flex items-center text-gray-300">
                        {skill.icon} {skill.name}
                      </span>
                      <span className="text-gray-400">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-purple-600 h-2.5 rounded-full"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Base de données */}
            <div>
              <div className="flex items-center mb-6">
                <FaDatabase className="text-purple-500 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Base de données</h3>
              </div>
              <div className="space-y-4">
                {[
                  {
                    name: "MySql",
                    percentage: 85,
                    icon: <FaDatabase className="mr-2" />,
                  },
                  {
                    name: "Oracle",
                    percentage: 55,
                    icon: <SiOracle className="mr-2" />,
                  },
                ].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="flex items-center text-gray-300">
                        {skill.icon} {skill.name}
                      </span>
                      <span className="text-gray-400">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-purple-600 h-2.5 rounded-full"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Colonne de droite */}
          <div className="space-y-12">
            {/* Backend */}
            <div>
              <div className="flex items-center mb-6">
                <FaNodeJs className="text-purple-500 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Backend</h3>
              </div>
              <div className="space-y-4">
                {[
                  {
                    name: "Node.js",
                    percentage: 75,
                    icon: <FaNodeJs className="mr-2" />,
                  },
                  {
                    name: "Python",
                    percentage: 45,
                    icon: <SiPython className="mr-2" />,
                  },
                  {
                    name: "Spring Boot",
                    percentage: 65,
                    icon: <SiSpring className="mr-2" />,
                  },
                  {
                    name: "Laravel",
                    percentage: 75,
                    icon: <span className="mr-2">🐘</span>,
                  },
                  {
                    name: "API REST",
                    percentage: 70,
                    icon: <span className="mr-2">🌐</span>,
                  },
                ].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="flex items-center text-gray-300">
                        {skill.icon} {skill.name}
                      </span>
                      <span className="text-gray-400">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-purple-600 h-2.5 rounded-full"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Outils & DevOps */}
            <div>
              <div className="flex items-center mb-6">
                <FaTools className="text-purple-500 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Outils & Technologies</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Git/GitHub", icon: <DiGit className="mr-2" /> },
                  { name: "Docker", icon: <SiDocker className="mr-2" /> },
                  { name: "Postman", icon: <SiPostman className="mr-2" /> },
                  {
                    name: "VS Code",
                    icon: <DiVisualstudio className="mr-2" />,
                  },
                  {
                    name: "IntelliJ IDEA",
                    icon: <SiIntellijidea className="mr-2" />,
                  },
                  { name: "Canva", icon: <SiCanva className="mr-2" /> },
                  { name: "Figma", icon: <SiFigma className="mr-2" /> },
                  { name: "Eclipse", icon: <SiEclipseide className="mr-2" /> },
                  {
                    name: "Android Studio",
                    icon: <DiAndroid className="mr-2" />,
                  },
                  {
                    name: "Google Colab",
                    icon: <SiGooglecolab className="mr-2" />,
                  },
                ].map((tool, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-gray-800 p-3 rounded-lg"
                  >
                    <span className="text-purple-500">{tool.icon}</span>
                    <span className="text-gray-300 text-sm">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Systèmes d'exploitation */}
            <div>
              <div className="flex items-center mb-6">
                <FaServer className="text-purple-500 mr-3" size={24} />
                <h3 className="text-xl font-semibold">
                  Systèmes d'exploitation
                </h3>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-gray-800 px-4 py-2 rounded-lg">
                  <FaWindows className="text-purple-500 mr-2" />
                  <span className="text-gray-300">Windows</span>
                </div>
                <div className="flex items-center bg-gray-800 px-4 py-2 rounded-lg">
                  <FaLinux className="text-purple-500 mr-2" />
                  <span className="text-gray-300">Linux</span>
                </div>
                <div className="flex items-center bg-gray-800 px-4 py-2 rounded-lg">
                  <FaApple className="text-purple-500 mr-2" />
                  <span className="text-gray-300">macOS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

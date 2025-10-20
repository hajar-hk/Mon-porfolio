// src/components/ContactSection.jsx
import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaDownload,
  FaPaperPlane,
  FaGlobe,
  FaSpinner,
} from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Remplacez ces valeurs par vos propres identifiants EmailJS
      const serviceID = "service_9dbjb1c";
      const templateID = "template_g0pu0ca";
      const userID = "i2-LIuWC6w51R_Mzi";

      await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "Kassmihajar4@gmail.com", // Votre email de réception
        },
        userID
      );

      alert("Message envoyé avec succès ! Je vous répondrai rapidement.");

      // Réinitialiser le formulaire
      setFormData({
        name: "",
        subject: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Erreur lors de l'envoi du message:", error);
      alert(
        "Une erreur s'est produite. Veuillez réessayer ou me contacter directement à Kassmihajar4@gmail.com"
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Fonction pour télécharger le CV
  const downloadCV = (language, type) => {
    let cvPath, cvName;

    if (language === "french" && type === "stage") {
      cvPath = "/cv/MON-CV.pdf";
      cvName = "CV-Francais.pdf";
    } else if (language === "english" && type === "stage") {
      cvPath = "/cv/MY-CV.pdf";
      cvName = "CV-English.pdf";
    } else if (language === "french" && type === "job") {
      cvPath = "/cv/CV-Françai.pdf";
      cvName = "CV-Kassmi-Hajar-Francais-Job.pdf";
    } else if (language === "english" && type === "job") {
      cvPath = "/cv/CV-Anglais.pdf";
      cvName = "CV-Kassmi-Hajar-English-Job.pdf";
    }

    const link = document.createElement("a");
    link.href = cvPath;
    link.download = cvName;
    link.click();
  };

  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Colonne gauche - Informations de contact */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Contactez-moi
            </h2>
            <p className="text-gray-300 mb-8">
              Vous avez un projet en tête ? N'hésitez pas à me contacter pour en
              discuter !
            </p>

            {/* Informations de contact */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">
                Informations de contact
              </h3>

              <div className="space-y-4">
                <div className="flex items-center">
                  <FaEnvelope className="text-purple-500 mr-3" />
                  <div>
                    <p className="text-gray-400">Email</p>
                    <p className="text-gray-300">Kassmihajar4@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-purple-500 mr-3" />
                  <div>
                    <p className="text-gray-400">Localisation</p>
                    <p className="text-gray-300">Maroc, Oujda</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">
                Réseaux sociaux
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/hajar-hk"
                  className="text-gray-400 hover:text-purple-500 transition-colors"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/hajar-kassmi-62ab741b3/"
                  className="text-gray-400 hover:text-purple-500 transition-colors"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="mailto:Kassmihajar4@gmail.com"
                  className="text-gray-400 hover:text-purple-500 transition-colors"
                >
                  <FaEnvelope size={24} />
                </a>
              </div>
            </div>

            {/* Disponibilité */}
            <div className="bg-purple-900 p-4 rounded-lg mb-6">
              <p className="text-purple-200 font-medium">
                <span className="text-green-400 mr-2">•</span>
                Disponible pour de nouvelles opportunités
              </p>
              <p className="text-purple-300 text-sm mt-1">
                Je suis à la recherche d’un stage de fin d’études (PFE) ou d’une
                alternance, afin de mettre en pratique mes compétences, relever
                de nouveaux défis techniques et contribuer activement à des
                projets innovants.
              </p>
            </div>

            {/* Télécharger CV - Menu déroulant */}
            <div className="relative">
              <button
                onClick={() => setShowLanguageOptions(!showLanguageOptions)}
                className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                <FaDownload className="mr-2" />
                Télécharger mon CV
                <FaGlobe className="ml-2" />
              </button>

              {showLanguageOptions && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-10">
                  <button
                    onClick={() => downloadCV("french", "stage")}
                    className="w-full text-left px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors flex items-center"
                  >
                    <span className="mr-2">🇫🇷</span>
                    CV Français
                  </button>
                  <button
                    onClick={() => downloadCV("english", "stage")}
                    className="w-full text-left px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors flex items-center border-t border-gray-700"
                  >
                    <span className="mr-2">🇬🇧</span>
                    CV English
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Colonne droite - Formulaire de contact */}
          <div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">
                Envoyez-moi un message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                    required
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2">
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Sujet de votre message"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                    required
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                    required
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Votre message..."
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                    required
                    disabled={isLoading}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <FaSpinner className="animate-spin mr-2" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" />
                      Envoyer le message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Footer */}
            <div className="text-center mt-8">
              <p className="text-gray-500 text-sm mt-2">
                Toujours en apprentissage, toujours en évolution
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

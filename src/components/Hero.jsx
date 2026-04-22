import { motion } from "framer-motion";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import profile from "../assets/Abhay.jpeg";
import CV from "../assets/Abhay_Sagar_Modern_Resume.pdf";
import { DownloadIcon, Mail } from "lucide-react";

const Hero = ({ darkMode }) => {
  const CV_URL = CV;

  const socialIcons = [
    { icon: instagram, alt: "Instagram", link: "https://www.instagram.com/abhay_sagar_" },
    { icon: facebook, alt: "Facebook", link: "https://www.facebook.com/abhaysagar.abhaysagar.9" },
    { icon: github, alt: "GitHub", link: "https://github.com/Abhay860" },
    { icon: linkedin, alt: "LinkedIn", link: "https://www.linkedin.com/in/abhay-sagar-41578918b" },
  ];

  const theme = darkMode
    ? {
        textPrimary: "text-white",
        textSecondary: "text-gray-300",
        decorativeCircle: "bg-orange-500 opacity-10",
      }
    : {
        textPrimary: "text-gray-900",
        textSecondary: "text-gray-700",
        decorativeCircle: "bg-orange-300 opacity-20",
      };

  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col">
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center pt-25 lg:pt-24"
    >
      <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* LEFT CONTENT */}
        <div className="lg:w-1/2 text-center lg:text-left">

          {/* SOCIAL ICONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center lg:justify-start gap-4 sm:gap-6 mb-6 relative z-20"
          >
            {socialIcons.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="transition"
              >
                <img
                  src={social.icon}
                  alt={social.alt}
                  className={`w-8 h-8 sm:w-10 sm:h-10 ${
                    darkMode ? "" : "brightness-75"
                  }`}
                />
              </motion.a>
            ))}
          </motion.div>

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${theme.textPrimary}`}
          >
            Hi, I'm <span className="text-orange-500">Abhay Sagar</span>
          </motion.h1>

          {/* SUBTITLE */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className={`mt-5 mb-6 leading-relaxed max-w-md sm:max-w-lg ${theme.textSecondary}`}
          >
            I craft scalable and high-performance web applications using{" "}
            <span className="text-orange-500 font-medium">
              PHP & Laravel
            </span>
            , specializing in RESTful APIs, database optimization, and modern full-stack development.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            {/* DOWNLOAD CV */}
            <a
              href={CV_URL}
              download
              className="inline-flex items-center justify-center 
              bg-gradient-to-r from-orange-500 to-amber-500 text-white 
              py-3 px-6 sm:px-8 rounded-full font-semibold 
              transition-all duration-300 transform 
              md:hover:scale-105 md:hover:shadow-lg
              active:scale-95"
            >
              <DownloadIcon className="w-5 h-5 mr-2" />
              Download CV
            </a>

            {/* CONTACT */}
            <a
              href="#contact"
              className="inline-flex items-center ${theme.buttonSecondary} justify-center 
              border-2 border-orange-500 text-orange-500 
              py-3 px-6 sm:px-8 rounded-full font-semibold 
              transition-all duration-300 
              md:hover:bg-orange-500 md:hover:text-white md:hover:scale-105 
              active:scale-95"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="lg:w-1/2 flex justify-center relative z-10"
        >
          {/* BACKGROUND CIRCLE */}
          <div
            className={`absolute w-72 h-72 rounded-full ${theme.decorativeCircle}`}
          />

          {/* PROFILE IMAGE */}
          <img
            src={profile}
            alt="profile"
            className="w-64 h-64 sm:w-72 sm:h-72 object-cover rounded-full shadow-lg relative z-10"
          />
        </motion.div>
      </div>
    </section>
    </div>
  );
};

export default Hero;
import { motion } from "framer-motion";
import { useMemo } from "react";

import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import profile from "../assets/Abhay.jpeg";
import CV from "../assets/Abhay_Sagar_Modern_Resume.pdf";

import { DownloadIcon, Mail } from "lucide-react";

const socialIcons = [
  {
    icon: instagram,
    alt: "Instagram",
    link: "https://www.instagram.com/abhay_sagar_",
  },
  {
    icon: facebook,
    alt: "Facebook",
    link: "https://www.facebook.com/abhaysagar.abhaysagar.9",
  },
  {
    icon: github,
    alt: "GitHub",
    link: "https://github.com/Abhay860",
  },
  {
    icon: linkedin,
    alt: "LinkedIn",
    link: "https://www.linkedin.com/in/abhay-sagar-41578918b",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const primaryButton =
  "inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-amber-500 text-white py-3 px-8 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95";

const secondaryButton =
  "inline-flex items-center justify-center border-2 border-orange-500 text-orange-500 py-3 px-8 rounded-full font-semibold transition-all duration-300 hover:bg-orange-500 hover:text-white hover:scale-105 active:scale-95";

const Hero = ({ darkMode }) => {
  const theme = useMemo(
    () =>
      darkMode
        ? {
            textPrimary: "text-white",
            textSecondary: "text-gray-300",
            decorativeCircle: "bg-orange-500/10",
          }
        : {
            textPrimary: "text-gray-900",
            textSecondary: "text-gray-700",
            decorativeCircle: "bg-orange-300/20",
          },
    [darkMode]
  );

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center pt-24"
    >
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          
          {/* LEFT CONTENT */}
          <div className="lg:w-1/2 text-center lg:text-left">
            
            {/* SOCIAL ICONS */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="flex justify-center lg:justify-start gap-5 mb-6"
            >
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.alt}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src={social.icon}
                    alt={social.alt}
                    className={`w-8 h-8 sm:w-10 sm:h-10 transition ${
                      darkMode ? "" : "brightness-75"
                    }`}
                  />
                </motion.a>
              ))}
            </motion.div>

            {/* HEADING */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${theme.textPrimary}`}
            >
              Hi, I'm{" "}
              <span className="text-orange-500">
                Abhay Sagar
              </span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
              className={`mt-5 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 ${theme.textSecondary}`}
            >
              I craft scalable and high-performance web applications using{" "}
              <span className="text-orange-500 font-semibold">
                PHP & Laravel
              </span>
              , specializing in RESTful APIs, database optimization, and
              modern full-stack development.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href={CV}
                download
                className={primaryButton}
              >
                <DownloadIcon className="w-5 h-5 mr-2" />
                Download CV
              </a>

              <a
                href="#contact"
                className={secondaryButton}
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </a>
            </motion.div>
          </div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            className="lg:w-1/2 flex justify-center relative"
          >
            {/* Decorative Circle */}
            <div
              className={`absolute w-80 h-80 rounded-full ${theme.decorativeCircle}`}
            />

            {/* Glow Effect */}
            <div className="absolute w-72 h-72 rounded-full bg-orange-500/20 blur-3xl" />

            {/* Profile Image */}
            <motion.img
              src={profile}
              alt="Abhay Sagar"
              loading="lazy"
              className="
                w-64 h-64
                sm:w-72 sm:h-72
                object-cover
                rounded-full
                border-4 border-orange-500/20
                shadow-2xl
                relative z-10
              "
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                y: {
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                },
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
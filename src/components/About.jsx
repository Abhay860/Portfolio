import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import about1 from "../assets/About.png";
import about2 from "../assets/About1.png";
import about3 from "../assets/animation.jpg";

const stats = [
  {
    value: "5+",
    label: "Education",
  },
  {
    value: "1.5+",
    label: "Years Experience",
  },
  {
    value: "6+",
    label: "Projects Completed",
  },
];

const images = [about1, about2, about3];

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

const About = ({ darkMode }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 lg:px-16 py-20 overflow-hidden"
    >
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-14 items-center">
        {/* IMAGE SECTION */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center relative"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px]">
            {/* Glow Effect */}
            <div className="absolute -inset-8 rounded-3xl bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 opacity-30 blur-3xl animate-pulse"></div>

            {/* Image Slider */}
            {/* <AnimatePresence mode="wait">
  <motion.img
    key={currentImage}
    src={images[currentImage]}
    alt={`About ${currentImage + 1}`}
    loading="lazy"
    initial={{
      opacity: 0,
      x: 100,
      scale: 0.9,
      rotate: 2,
    }}
    animate={{
      opacity: 1,
      x: 0,
      scale: 1,
      rotate: 0,
    }}
    exit={{
      opacity: 0,
      x: -100,
      scale: 1.1,
      rotate: -2,
    }}
    transition={{
      duration: 1,
      ease: "easeInOut",
    }}
    whileHover={{
      scale: 1.05,
    }}
    className="absolute inset-0 z-10 w-full h-full object-cover rounded-3xl shadow-2xl border border-orange-500/20"
  />
</AnimatePresence> */}
<AnimatePresence mode="wait">
  <motion.img
    key={currentImage}
    src={images[currentImage]}
    alt={`About ${currentImage + 1}`}
    loading="lazy"
    initial={{
      opacity: 0,
      scale: 1.15,
    }}
    animate={{
      opacity: 1,
      scale: 1,
    }}
    exit={{
      opacity: 0,
      scale: 0.9,
    }}
    transition={{
      duration: 1.2,
      ease: "easeInOut",
    }}
    className="absolute inset-0 z-10 w-full h-full object-cover rounded-3xl shadow-2xl border border-orange-500/20"
  />
</AnimatePresence>
          </div>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          {/* TITLE */}
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          {/* DESCRIPTION */}
          <div
            className={`p-6 rounded-3xl backdrop-blur-lg shadow-xl mb-8 ${
              darkMode
                ? "bg-white/5 border border-white/10"
                : "bg-orange-50 border border-orange-100"
            }`}
          >
            <p
              className={`leading-relaxed text-base lg:text-lg ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              I'm a passionate Full Stack Developer specializing in
              <span className="text-orange-500 font-semibold">
                {" "}PHP & Laravel
              </span>
              . I enjoy building scalable web applications, RESTful APIs,
              and performance-driven solutions that deliver exceptional user
              experiences.

              <br />
              <br />

              My focus is on writing clean, maintainable code while creating
              secure, efficient, and modern applications that solve real-world
              business problems.
            </p>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-4 mb-10">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className={`p-5 rounded-2xl shadow-lg backdrop-blur-lg transition-all ${
                  darkMode
                    ? "bg-white/5 border border-white/10"
                    : "bg-white border border-orange-100"
                }`}
              >
                <h3 className="text-2xl lg:text-3xl font-bold text-orange-500">
                  {item.value}
                </h3>

                <p
                  className={`mt-2 text-sm ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* BUTTON */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              inline-flex items-center justify-center
              px-8 py-3
              rounded-full
              font-semibold
              bg-gradient-to-r
              from-orange-500
              to-amber-500
              text-white
              shadow-lg
              hover:shadow-orange-500/30
              transition-all
              duration-300
            "
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
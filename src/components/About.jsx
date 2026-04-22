import React from "react";
import about from "../assets/animation.jpg";

const About = ({ darkMode }) => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-16 py-16 lg:py-24 overflow-hidden"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* IMAGE */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex justify-center relative order-2 lg:order-1"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            
            {/* Gradient Glow */}
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 blur-2xl opacity-40 animate-pulse"></div>

            {/* Image */}
            <img
              src={about}
              alt="About"
              className="relative w-full h-full object-cover rounded-3xl shadow-xl z-10 transition-transform duration-500 hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay="400"
            />
          </div>
        </div>

        {/* TEXT */}
        <div
          data-aos="fade-left"
          data-aos-delay="300"
          className="text-center lg:text-left order-1 lg:order-2"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            About Me
          </h1>

          <p
            className={`text-sm sm:text-base lg:text-lg mb-6 leading-relaxed p-5 rounded-2xl backdrop-blur-md shadow-md
            ${darkMode ? "text-gray-300 bg-white/5" : "text-gray-700 bg-orange-50"}`}
          >
          I’m a passionate developer specializing in PHP & Laravel, with experience building scalable web applications and RESTful APIs. I focus on writing clean, maintainable code while delivering fast, user-friendly, and performance-driven solutions.          </p>

          {/* STATS */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
            
            {[
              { value: "5+", label: "Education" },
              { value: "1.5+", label: "Years Experience" },
              { value: "6+", label: "Projects Completed" },
            ].map((item, i) => (
              <div
                key={i}
                data-aos="zoom-in"
                data-aos-delay="600"
                className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <div className="text-2xl lg:text-3xl font-bold text-orange-400">
                  {item.value}
                </div>
                <div
                  className={`text-sm ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <a
            href="#contact"
            data-aos="fade-up"
            data-aos-delay="800"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold border-2 border-orange-500 text-orange-500 transition-all duration-300 transform hover:bg-orange-500 hover:text-white hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
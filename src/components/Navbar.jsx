import { motion } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useState } from "react";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItem = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Project", link: "#project" },
    { name: "Contact", link: "#contact" },
  ];

  const color = darkMode
    ? {
        navBg: "bg-gradient-to-br from-gray-700 to-black",
        textPrimary: "text-white",
        textSecondary: "text-gray-300",
        textActive: "text-orange-400",
        indicator: "from-orange-500 to-amber-500",
        button: "from-orange-500 to-amber-500",
      }
    : {
        navBg: "bg-gradient-to-br from-orange-200 to-white",
        textPrimary: "text-gray-900",
        textSecondary: "text-gray-800",
        textActive: "text-orange-600",
        indicator: "from-orange-500 to-amber-500",
        button: "from-orange-500 to-amber-500",
      };

  const handleNavClick = (name) => {
    setActiveSection(name.toLowerCase());
    setIsMenuOpen(false);
  };

  return (
    <div className="flex justify-center w-full fixed z-50 mt-4">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`relative flex items-center justify-between w-full max-w-5xl px-4 py-3 rounded-2xl shadow-lg backdrop-blur-lg ${color.navBg}`}
      >
        {/* Logo */}
        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-2"
        >
          <span className={`text-xl font-bold ${color.textPrimary}`}>
          My <span
            style={{
              background: 'linear-gradient(to right, #f93716, #f59e0b)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }} className="text-blue-500 font-bold">Portfolio</span> <span className="text-orange-500">.</span>
          </span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          {navItem.map((item) => {
            const isActive =
              activeSection === item.name.toLowerCase();

            return (
              <a
                key={item.name}
                href={item.link}
                onClick={() => handleNavClick(item.name)}
                className="relative"
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className={`font-medium ${
                    isActive
                      ? color.textActive
                      : `${color.textSecondary} hover:text-orange-500`
                  }`}
                >
                  {item.name}
                </motion.span>

                {isActive && (
                  <motion.div
                    layoutId="indicator"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r ${color.indicator}`}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-3">
          {/* Dark Mode */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${
              darkMode ? "bg-gray-700" : "bg-gray-200"
            }`}
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-300" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700" />
            )}
          </motion.button>

          {/* Hire Me */}
          <a
            href="#contact"
            className={`hidden lg:block px-5 py-2 rounded-full bg-gradient-to-r ${color.button} text-white`}
          >
            Hire Me
          </a>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg ${
              darkMode ? "bg-gray-700" : "bg-gray-200"
            }`}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-gray-700 dark:text-white" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className={`absolute top-full left-0 right-0 mt-2 rounded-xl shadow-lg backdrop-blur-lg ${
              darkMode
                ? "bg-gray-900/95 border border-gray-700"
                : "bg-white/95 border border-gray-200"
            }`}
          >
            <div className="p-4 space-y-2">
              {navItem.map((item) => {
                const isActive =
                  activeSection === item.name.toLowerCase();

                return (
                  <a
                    key={item.name}
                    href={item.link}
                    onClick={() => handleNavClick(item.name)}
                  >
                    <motion.div
                      whileHover={{ x: 5 }}
                      className={`py-3 px-4 rounded-lg text-center ${
                        isActive
                          ? darkMode
                            ? "bg-gray-800"
                            : "bg-orange-50"
                          : ""
                      }`}
                    >
                      <span
                        className={`font-medium ${
                          isActive
                            ? color.textActive
                            : color.textSecondary
                        }`}
                      >
                        {item.name}
                      </span>
                    </motion.div>
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </motion.nav>
    </div>
  );
};

export default Navbar;
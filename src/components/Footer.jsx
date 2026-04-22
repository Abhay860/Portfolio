import { FaFacebook, FaGithub, FaHeart, FaLinkedin } from "react-icons/fa";

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: darkMode
          ? 'linear-gradient(to bottom, #000000, #111827)'
          : 'linear-gradient(to bottom, #f3f4f6, #e5e7eb)',
        borderColor: darkMode ? '#374151' : '#d1d5db'
      }}
      className="border-t"
    >
      <div className="container mx-auto px-4 py-10">

        {/* 3 COLUMN LAYOUT */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* LEFT */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-orange-500">
              Portfolio
            </h3>
            <p
              className="text-sm"
              style={{
                color: darkMode ? '#9ca3af' : '#6b7280'
              }}
            >
              Full stack Developer using by{" "}
              <span
                style={{
                  background: 'linear-gradient(to right, #f97316, #f59e0b)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent'
                }}
              >
               Laravel & React
              </span>
            </p>
          </div>

          {/* CENTER ICONS */}
          <div className="flex gap-4 justify-center items-center">

            <a
              href="https://github.com/Abhay860"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 
              bg-[#374151] text-white hover:scale-110 hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500"
            >
              <FaGithub />
            </a>

            <a
              href="www.linkedin.com/in/abhay-sagar-41578918b"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 
              bg-[#374151] text-white hover:scale-110 hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.facebook.com/abhaysagar.abhaysagar.9"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 
              bg-[#374151] text-white hover:scale-110 hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500"
            >
              <FaFacebook />
            </a>

          </div>

          {/* RIGHT */}
          <div className="text-center md:text-right">
            <p
              className="text-sm flex items-center justify-center md:justify-end gap-1"
              style={{
                color: darkMode ? '#9ca3af' : '#6b7280'
              }}
            >
              © {currentYear} Made with{" "}
              <FaHeart className="text-red-500" />{" "}
              by{" "}
              <span className="text-orange-500 font-semibold">
                Abhay Sagar
              </span>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
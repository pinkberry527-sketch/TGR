import { useState } from "react";
import { FaRegMoon, FaRegSun, FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const navstyling = `p-2 font-bold text-sm font-[var(--headingfont)] transition-colors duration-200 ${
    darkMode
      ? "text-[var(--text_color_dark)] hover:text-[var(--hover)]"
      : "text-[var(--text_color_light)] hover:text-[var(--hover)]"
  }`;

  return (
    <div className="w-full">
      <header
        className={`w-11/12 fixed top-3 left-1/2 -translate-x-1/2 z-50   px-4 py-3 rounded-2xl bg-gradient-to-r transition-all duration-300 ${
          darkMode
            ? "from-[var(--gray)] to-[var(--bg_dark)] border-white/20 border"
            : "from-[var(--secondary)] to-[var(--primary)]"
        }`}
      >
        <nav className="flex justify-between items-center gap-3">
          {/* Logo */}
          <div>
            <h1
              className={`text-3xl font-bold font-[var(--titlefont)] ${
                darkMode
                  ? "text-[var(--text_color_dark)]"
                  : "text-[var(--text_color_light)]"
              }`}
            >
              TGR
            </h1>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex gap-3">
            <li>
              <a href="#home" className={navstyling}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className={navstyling}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" className={navstyling}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className={navstyling}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className={navstyling}>
                Contact
              </a>
            </li>
          </ul>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleDarkMode}
              className="p-2 bg-[var(--secondary)] rounded-lg hover:scale-105 active:scale-95 transition-all text-[var(--text_color_light)]"
            >
              {darkMode ? <FaRegSun /> : <FaRegMoon />}
            </button>

            {/* Hire Me Desktop Button */}
            <button className="hidden md:block font-[var(--font-zilla)] bg-[var(--accent)] text-white font-medium py-2 px-4 rounded-full hover:bg-[var(--hover)] hover:scale-105 transition-all">
              Hire Me
            </button>

            {/* Hamburger Toggle Button (Mobile) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-xl rounded-lg bg-[var(--secondary)] hover:scale-105 transition-all text-[var(--text_color_light)]"
              aria-label="Toggle Menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-80 mt-4 opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col gap-2 pb-4 border-t border-white/10 pt-4">
            <li>
              <a
                href="#home"
                className={`${navstyling} block w-full py-2`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={`${navstyling} block w-full py-2`}
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`${navstyling} block w-full py-2`}
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className={`${navstyling} block w-full py-2`}
                onClick={() => setIsOpen(false)}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`${navstyling} block w-full py-2`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>
            <li className="pt-2">
              <button className="w-full font-[var(--font-zilla)] bg-[var(--accent)] text-white font-medium py-2 px-4 rounded-full hover:bg-[var(--hover)] transition-all">
                Hire Me
              </button>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

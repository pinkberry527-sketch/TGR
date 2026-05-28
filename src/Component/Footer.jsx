import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTiktok } from "react-icons/fa";
const Footer = ({ darkMode }) => {
  const navstyling = `p-2 font-bold text-sm font-[var(--headingfont)] transition-colors duration-200 ${
    darkMode
      ? "text-[var(--text_color_dark)] hover:text-[var(--hover)]"
      : "text-[var(--text_color_light)] hover:text-[var(--hover)]"
  }`;
  return (
    <footer
      className={`w-full  pt-20 pb-10 overflow-hidden  bg-gradient-to-r transition-all duration-300 ${
        darkMode
          ? "from-[var(--gray)] to-[var(--bg_dark)] border-white/20 border"
          : "from-[var(--secondary)] to-[var(--primary)]"
      }`}
    >
      <div className=" w-11/12 mx-auto flex justify-between items-start gap-10 flex-col md:flex-row">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="flex flex-col items-center md:items-start gap-4"
        >
          <h1
            className={`text-3xl font-bold font-[var(--titlefont)] ${
              darkMode
                ? "text-[var(--text_color_dark)]"
                : "text-[var(--text_color_light)]"
            }`}
          >
            TGR
          </h1>
          <p
            className={`${darkMode ? "text-[var(--text_color_dark)]" : "text-[var(--text_color_light)]"} mt-4 text-sm font-[var(--headingfont)] leading-6 max-w-sm`}
          >
            Designing and developing bold, modern digital experiences that are
            responsive, engaging, and user-focused.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false }}
          className="flex  flex-col items-center gap-4 mt-6"
        >
          <h3
            className={` font-bold text-md font-[var(--headingfont)]${darkMode ? "text-[var(--text_color_dark)]" : "text-[var(--text_color_light)]"}`}
          >
            Navigation
          </h3>
          <ul className="flex flex-col gap-4">
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: false }}
          className=" flex flex-col  gap-4 mt-6"
        >
          <h3
            className={` font-bold text-md font-[var(--headingfont)]${darkMode ? "text-[var(--text_color_dark)]" : "text-[var(--text_color_light)]"}`}
          >
            socials
          </h3>
          <div className="flex gap-4 text-2xl">
            <a
              href="https://github.com/pinkberry527-sketch"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/20 border border-white/30 text-[var(--text_color_light)] hover:text-[var(--hover)] transition-colors duration-200"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ruth-idehen/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/20 border border-white/30 text-[var(--text_color_light)] hover:text-[var(--hover)] transition-colors duration-200"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.tiktok.com/@ruth.idehen5?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/20 border border-white/30 text-[var(--text_color_light)] hover:text-[var(--hover)] transition-colors duration-200"
            >
              <FaTiktok />
            </a>
          </div>
        </motion.div>
      </div>
      <div className="w-full h-[1px] bg-white/20 my-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: false }}
          className="flex  flex-col md:flex-row text-sm text-[var(--accent)] items-center gap-2 justify-center"
        >
          <p className={`${darkMode ? "text-white/60" : "text-gray-600"}`}>
            © 2026 TGR. All rights reserved.
          </p>
          <p className={`${darkMode ? "text-white/60" : "text-gray-600"}`}>
            Built with React & Tailwind css
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

import { FaGithub, FaTiktok, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import portfolioImage from "../assets/images/portfolioaverter1.png";

const Hero = ({ darkMode }) => {
  return (
    <section
      id="home"
      className="w-11/12 mx-auto min-h-screen flex flex-col md:flex-row items-center gap-4 overflow-hidden"
    >
      {/* LEFT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hero_text w-full md:w-1/2 flex flex-col gap-5 justify-center"
      >
        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="social_icons flex gap-4 text-2xl py-2 mt-2"
        >
          <a href="https://github.com/pinkberry527-sketch">
            <FaGithub />
          </a>

          <a href="https://www.tiktok.com/@ruth.idehen5?lang=en">
            <FaTiktok className="text-pink-500" />
          </a>

          <a href="https://www.linkedin.com/in/ruth-idehen/">
            <FaLinkedinIn className="text-blue-500" />
          </a>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold font-[var(--titlefont)]"
        >
          Hi, I'm Ruth
        </motion.h1>

        {/* Role */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg text-[var(--primary)] font-bold font-[var(--bodyfont)]"
        >
          Frontend Developer & UI/UX Designer
        </motion.span>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className={`p-4 rounded-2xl text-sm leading-7 backdrop-blur-md border
          ${
            darkMode
              ? "text-white bg-white/5 border-white/10"
              : "text-gray-800 bg-white/40 border-white/20"
          }`}
        >
          I create responsive, visually engaging, and user-focused websites
          using modern frontend technologies and thoughtful UI/UX design
          principles.
          <strong>
            {" "}
            I don’t just build websites — I design and develop bold, modern
            digital experiences that feel as good as they look.
          </strong>
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button className="bg-[var(--accent)] hover:bg-[var(--hover)] py-3 px-7 rounded-3xl transition-all duration-300 hover:scale-105">
            <a
              href="#projects"
              className="text-white text-sm font-bold font-[var(--font_zilla)] capitalize"
            >
              View My Work
            </a>
          </button>

          <button>
            <a
              href="#contact"
              className={`py-3 px-7 rounded-3xl border border-[var(--accent)]
              hover:text-white hover:bg-[var(--hover)]
              transition-all duration-300 hover:scale-105
              font-bold font-[var(--font_zilla)]
              ${darkMode ? "text-white" : "text-[var(--accent)]"}`}
            >
              Contact Me
            </a>
          </button>
        </motion.div>
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="hero_image w-full md:w-1/2 relative flex justify-center"
      >
        {/* Glow Background */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-[var(--primary)] blur-3xl rounded-full"></div>

        {/* Hero Image */}
        <motion.img
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-4/5 md:w-3/5 mx-auto relative z-10"
          src={portfolioImage}
          alt=""
        />

        {/* Floating Text 1 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          className="absolute bottom-30 -right-8 animate-float-delay"
        >
          <p className="px-4 py-2 rounded-full bg-white/30 backdrop-blur-md border border-white/10 text-xs text-gray-800">
            UI/UX Designer
          </p>
        </motion.div>

        {/* Floating Text 2 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-32 left-20 animate-float-slow"
        >
          <p className="px-4 py-2 rounded-full bg-white/30 backdrop-blur-md border border-white/10 text-xs text-gray-800">
            React Developer
          </p>
        </motion.div>

        {/* Floating Text 3 */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="absolute top-20 left-10 animate-float"
        >
          <p className="px-4 py-2 rounded-full bg-white/30 backdrop-blur-md border border-white/10 text-xs text-gray-800">
            Building Modern Interfaces
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

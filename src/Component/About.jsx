import { motion } from "framer-motion";
import aboutImage from "../assets/images/averter2.png";

const About = ({ darkMode }) => {
  return (
    <section id="about" className="relative overflow-hidden py-20">
      {/* Glow Background */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--secondary)] blur-3xl rounded-full"></div>

      <div className="w-11/12 mx-auto flex flex-col md:flex-row gap-12 items-center relative z-10">
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <motion.img
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-4/5 md:w-3/5 relative z-10"
            src={aboutImage}
            alt=""
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex flex-col gap-5"
        >
          {/* Small Heading */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg font-bold text-[var(--accent)] uppercase tracking-[4px]"
          >
            About Me
          </motion.h3>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold leading-tight text-[var(--primary)]"
          >
            Designing interfaces that connect, inspire, and perform.
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className={`text-sm leading-7 p-6 rounded-3xl backdrop-blur-xl border
            ${
              darkMode
                ? "text-white bg-white/5 border-white/10"
                : "text-gray-800 bg-white/40 border-white/20"
            }`}
          >
            I’m Ruth Idehen, a Frontend Developer and UI/UX Designer passionate
            about creating modern, responsive, and visually engaging digital
            experiences. I enjoy transforming ideas into clean and interactive
            interfaces that not only look good but also feel intuitive to use.
            My journey into tech started with curiosity and evolved into a deep
            passion for frontend development, design systems, and user-centered
            experiences. I’m constantly learning, experimenting, and improving
            my skills to build products that combine creativity with
            functionality.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {/* Card 1 */}
            <div
              className="
              p-4 rounded-2xl
              bg-white/5
              backdrop-blur-lg
              border border-white/10
              hover:scale-105
              transition-all duration-300
              "
            >
              <span className="text-[var(--accent)] text-2xl font-bold">
                8+
              </span>

              <p className="text-sm">Months of Learning</p>
            </div>

            {/* Card 2 */}
            <div
              className="
              p-4 rounded-2xl
              bg-white/5
              backdrop-blur-lg
              border border-white/10
              hover:scale-105
              transition-all duration-300
              "
            >
              <span className="text-[var(--accent)] text-2xl font-bold">4</span>

              <p className="text-sm">Projects Completed</p>
            </div>
          </motion.div>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            viewport={{ once: true }}
          >
            <button>
              <a
                href="#contact"
                className={`py-3 px-7 rounded-3xl border border-[var(--accent)]
                hover:text-white hover:bg-[var(--hover)]
                transition-all duration-300 hover:scale-105
                font-bold font-[var(--font_zilla)]
                ${darkMode ? "text-white" : "text-[var(--accent)]"}`}
              >
                Let's Connect
              </a>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

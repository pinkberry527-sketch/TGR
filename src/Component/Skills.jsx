import { motion } from "framer-motion";

import { FaReact, FaFigma, FaGitAlt, FaGithub } from "react-icons/fa";

import { SiTailwindcss } from "react-icons/si";

import { MdDevices } from "react-icons/md";

const Skills = ({ darkMode }) => {
  const skills = [
    {
      name: "React",
      level: "85%",
      icon: <FaReact className="text-cyan-400 text-2xl" />,
    },

    {
      name: "Tailwind CSS",
      level: "90%",
      icon: <SiTailwindcss className="text-sky-400 text-2xl" />,
    },

    {
      name: "Figma",
      level: "80%",
      icon: <FaFigma className="text-pink-400 text-2xl" />,
    },

    {
      name: "Git",
      level: "75%",
      icon: <FaGitAlt className="text-orange-500 text-2xl" />,
    },

    {
      name: "GitHub",
      level: "85%",
      icon: <FaGithub className="text-black text-2xl" />,
    },

    {
      name: "Responsive Design",
      level: "95%",
      icon: <MdDevices className="text-green-400 text-2xl" />,
    },
  ];

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[var(--primary)] blur-3xl rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[var(--primary)] blur-3xl rounded-full"></div>

      <div className="w-5/6 mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-lg font-bold font-[var(--font-poppins)] uppercase tracking-[4px]  text-[var(--accent)] mb-4">
            My Skills
          </p>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[var(--primary)]">
            The tools and technologies I use to bring ideas to life.
          </h2>

          <p
            className={`text-sm leading-6 max-w-2xl mx-auto ${darkMode ? "text-white/80" : "text-gray-600"}`}
          >
            I combine frontend development and UI/UX design to create
            responsive, visually engaging, and user-focused digital experiences.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="
              p-6 rounded-3xl
              bg-white/5
              backdrop-blur-xl
              border border-white/10
              shadow-lg
              hover:scale-[1.02]
              transition-all
              duration-300
              "
            >
              {/* Top */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  {skill.icon}

                  <h3
                    className={`text-lg font-semibold ${darkMode ? "text-white" : "text-gray-800"}`}
                  >
                    {skill.name}
                  </h3>
                </div>

                <span
                  className={`text-sm font-medium ${darkMode ? "text-white" : "text-gray-800"}`}
                >
                  {skill.level}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  transition={{
                    duration: 1.2,
                    delay: index * 0.2,
                  }}
                  viewport={{ once: true }}
                  className="
                  h-full
                  rounded-full
                  bg-gradient-to-r
                  from-[var(--hover)]
                  to-[var(--accent)]
                  transition-all
                  duration-1000
                  "
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

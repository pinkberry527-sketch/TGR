import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

const Projects = ({ darkMode }) => {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio built with React and Tailwind CSS showcasing my skills and projects.",
      image:
        "/src/assets/images/screencapture-portfolio-website-gamma-orcin-19-vercel-app-2026-05-21-19_50_35.png",
      tech: ["HTML", "CSS", "JS"],
      live: "https://portfolio-website-gamma-orcin-19.vercel.app/",
      code: "https://github.com/pinkberry527-sketch/portfolio-website.git",
    },

    {
      title: "E-Commerce UI",
      description:
        "A modern e-commerce interface with clean product layout and responsive design.",
      image:
        "/src/assets/images/screencapture-my-daily-choice-vercel-app-2026-05-21-19_47_25.png",
      tech: ["React", "UI Design", "Tailwind CSS"],
      live: "https://my-daily-choice.vercel.app/",
      code: "https://github.com/pinkberry527-sketch/My-daily-choice-.git",
    },

    {
      title: "Landing Page Design",
      description:
        "A high-converting landing page designed for a fictional tech product.",
      image:
        "/src/assets/images/screencapture-ziba-real-estate-website-vercel-app-HTML-index-html-2026-05-21-19_46_07.png",
      tech: ["HTML", "CSS", "JS"],
      live: "https://ziba-real-estate-website.vercel.app/",
      code: "https://github.com/pinkberry527-sketch/ziba-real-estate-website.git",
    },

    {
      title: "Movie Search engine UI",
      description:
        "A modern movie search interface with sleek design, cards, and responsive layout.",
      image:
        "/src/assets/images/screencapture-movies-net-zeta-vercel-app-2026-05-21-19_51_30.png",
      tech: ["HTML", "CSS", "JS"],
      live: "https://movies-net-zeta.vercel.app/",
      code: "https://github.com/pinkberry527-sketch/Movies-net.git",
    },

    {
      title: "Weather App UI",
      description:
        "A mobile-first weather application interface designed for smooth UX.",
      image:
        "/src/assets/images/screencapture-weather-app-zeta-swart-63-vercel-app-2026-05-21-19_53_32.png",
      tech: ["HTML", "CSS", "JS", "API"],
      live: "https://weather-app-zeta-swart-63.vercel.app/",
      code: "https://github.com/pinkberry527-sketch/Weather-App.git",
    },

    {
      title: "To-Do List App UI",
      description:
        "A clean and minimal to-do list interface designed for simplicity and usability.",
      image:
        "/src/assets/images/screencapture-to-do-app-tau-brown-vercel-app-2026-05-21-19_52_37.png",
      tech: ["HTML", "CSS", "JS"],
      live: "https://to-do-app-tau-brown.vercel.app/",
      code: "https://github.com/pinkberry527-sketch/To-do-app.git",
    },
  ];

  const [index, setIndex] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, 5000); // change every 5 seconds

    return () => clearInterval(interval);
  }, [setIndex, projects.length]);

  const nextProject = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[index];

  //project details modal

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="w-5/6 mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-[var(--accent)] font-bold tracking-[4px] uppercase mb-3">
            My Work
          </p>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[var(--primary)]">
            Selected Projects
          </h2>
        </div>

        {/* Slider */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {/* Left */}
          <button
            onClick={prevProject}
            className="p-3 rounded-full bg-white/10 border border-white/10 hover:scale-110 transition"
          >
            <FaArrowLeft />
          </button>

          {/* Card */}
          <div className="w-full md:w-[600px]">
            <AnimatePresence mode="wait">
              <motion.div
                onClick={() => setSelectedProject(project)}
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="
                rounded-3xl
                overflow-hidden
                bg-white/5
                backdrop-blur-xl
                border border-white/10
                shadow-lg
                "
              >
                {/* IMAGE */}
                <div className="h-64 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3
                    className={`text-2xl font-bold mb-2 ${
                      darkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {project.title}
                  </h3>

                  <p
                    className={`text-sm mb-4 ${
                      darkMode ? "text-white/80" : "text-gray-600"
                    }`}
                  >
                    {project.description}
                  </p>

                  {/* TECH */}
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* BUTTONS */}
                  <div className="flex gap-5">
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[var(--accent)] text-sm hover:underline"
                    >
                      <FaGithub /> Code
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[var(--accent)] text-sm hover:underline"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right */}
          <button
            onClick={nextProject}
            className="p-3 rounded-full bg-white/10 border border-white/10 hover:scale-110 transition"
          >
            <FaArrowRight />
          </button>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-[var(--accent)]" : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-20 p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`max-w-2xl w-full rounded-3xl overflow-hidden ${darkMode ? "bg-[var(--bg_dark)]" : "bg-white/90"} p-6 relative`}
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 rounded-lg mb-4 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mt-4">
                  {selectedProject.title}
                </h2>
                <p className="mt-2">{selectedProject.description}</p>
                <div className="flex gap-4 mt-4">
                  <a
                    href={selectedProject.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[var(--accent)] text-sm hover:underline"
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[var(--accent)] text-sm hover:underline"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="mt-4 px-4 py-2 bg-[var(--accent)] text-white rounded-lg hover:bg-[var(--hover)]"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;

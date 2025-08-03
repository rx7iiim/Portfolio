"use client";
import React, { useState } from "react";
import {
  FiCode,
  FiGithub,
  FiExternalLink,
  FiChevronLeft,
  FiChevronRight,
  FiX,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Work() {
  const projects = [
    {
      id: 1,
      tags: ["#Next.js", "#Portfolio"],
      name: "Portfolio Website",
      description:
        "A modern portfolio built with Next.js, Tailwind CSS, and Framer Motion with smooth animations and responsive design.",
      tech: ["Next.js", "Tailwind", "Framer Motion", "TypeScript"],
      github: "https://github.com/rx7iiim/Portfolio",
      demo: "https://portfolio-rx7iiim-suits-project.vercel.app/",
      image: "/Screenshot 2025-08-03 011858.png",
      isDriveLink: false,
    },
    {
      id: 2,
      tags: ["#Next.js", "#NestJS", "#Project 2cp"],
      name: "Advocat",
      description:
        "Advocat is a modern full-stack app helping law firms manage clients, files, schedules, and subscriptions efficiently.",
      tech: [
        "Next.js",
        "Nest.js",
        "Postgresql",
        "Passport",
        "Google drive api",
        "others",
      ],
      github: "https://github.com/rx7iiim/Advokat",
      demo: "https://drive.google.com/file/d/1qftSte8MIs8hNTV4EnmdFxUHUbRMxizL/view?usp=drive_link",
      image: "/Screenshot 2025-07-03 185722.png",
      isDriveLink: true,
    },
    {
      id: 3,
      tags: ["#Electron", "#Desktop app"],
      name: "Noudejoum El Moustakbel",
      description:
        "NEMGym is a gym Management Desktop App is a powerful Electron-based application designed for gym owners to manage members, subscriptions, payments, attendance, and notifications.",
      tech: ["Electron", "React", "Node.js", "Docker", "Postgresql"],
      github: "https://github.com/rx7iiim/NEM-GYM",
      demo: "https://drive.google.com/file/d/1D5197DMWXwveeGfbqSLzGLTtA0Csol4V/view?usp=drive_link",
      image: "/Screenshot 2025-07-27 005508.png",
      isDriveLink: true,
    },
    {
      id: 4,
      tags: ["#Next.js", "#Rating website"],
      name: "Fixiha",
      description:
        "Fixiha is an ai  tool to help developers build better websites. They can share their website, and Fixiha will point out errors that need to be fixed.",
      tech: [
        "Next",
        "Nest.js",
        "Postgresql",
        "Numpy",
        "scikit learn",
        "Pandas",
        "linear/random forest",
      ],
      github: "https://github.com/rx7iiim/advocat",
      demo: "https://drive.google.com/file/d/18rri6NUnPS6p2_4lS78SAMgm8fpM9ds4/view?usp=drive_link",
      image: "/Screenshot 2025-08-03 021536.png",
      isDriveLink: true,
    },
    {
      id: 5,
      tags: ["#Scikit learn", "#prediction bot"],
      name: "price-prediction-ML-bot",
      description:
        "i preprocessed a dataset from kagle a bit ( removing NaN values, adding features and splitting the catogerical value column to binary columns ) and then scaled,splitted and trained & tested on linear , random forest ..finding best estimator at last",
      tech: ["Numpy", "sklearn", "Pandas", "linear/random forest"],
      github: "https://github.com/rx7iiim/price-prediction-ML-bot",
      demo: "https://github.com/rx7iiim/price-prediction-ML-bot",
      image: "/Screenshot 2025-08-03 022710.png",
      isDriveLink: false,
    },
    {
      id: 5,
      tags: ["#Electron", "#Desktop App"],
      name: "Aligno",
      description:
        "Aligno is my first freelance project . A desktop application designed for managers to streamline and organize their work. It provides an intuitive dashboard to oversee all activities, manage meetings efficiently, gather actionable insights, and organize clusters and PRDs (Product Requirement Documents).",
      tech: ["Numpy", "sklearn", "Pandas", "linear/random forest"],
      github: "https://github.com/rx7iiim/price-prediction-ML-bot",
      demo: "https://drive.google.com/file/d/1UQpH3XI7Js9ORoTsIkKwtDgVPPYpAb1x/view?usp=drive_link",
      image: "/Screenshot 2025-08-03 022710.png",
      isDriveLink: true,
    },
  ];

  const [currentProject, setCurrentProject] = useState(0);
  const [showDriveModal, setShowDriveModal] = useState(false);
  const project = projects[currentProject];

  const nextProject = () => {
    setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleDemoClick = (e: React.MouseEvent, isDriveLink: boolean) => {
    if (isDriveLink) {
      e.preventDefault();
      setShowDriveModal(true);
    }
    // Regular links will behave normally
  };

  return (
    <section
      className="relative min-h-[400px] max-h-[600px] w-full px-2 py-8 md:px-0 md:py-12 bg-gray-950/90 flex items-center justify-center rounded-2xl shadow-xl mx-auto my-8 "
      id="projects"
    >
      {/* Terminal-style decoration */}
      <div className="absolute top-8 left-4 flex items-center gap-2 text-green-400 font-mono">
        <FiCode className="text-lg" />
        <span>~/projects</span>
      </div>

      <div className="max-w-xl w-full mx-auto">
        {/* Project counter */}
        <div className="flex justify-between items-center mb-4 px-2">
          <span className="text-gray-500 font-mono text-xs">
            project[{currentProject + 1}] of {projects.length}
          </span>
          <div className="flex gap-2"></div>
        </div>

        {/* Project card */}
        <motion.div
          key={project.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="group bg-gradient-to-br from-gray-800/50 to-gray-900/70 rounded-lg border border-gray-700/50 hover:border-green-400/30 transition-all overflow-hidden shadow-2xl min-h-[260px]"
        >
          <div className="relative h-40 w-full bg-gray-800 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
              <Image
                width={600}
                height={600}
                src={project.image}
                alt="project image"
                className="object-cover"
              />
            </div>
            {/* Tags */}
            <div className="absolute top-2 left-2 flex gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-green-400/20 text-green-400 text-xs px-2 py-1 rounded font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-bold text-white">
                <span className="text-green-400">$</span> {project.name}
              </h3>
              <div className="flex gap-2">
                <a
                  href={project.github}
                  className="text-gray-400 hover:text-green-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub size={18} />
                </a>
                <a
                  href={project.demo}
                  className="text-gray-400 hover:text-green-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => handleDemoClick(e, project.isDriveLink)}
                >
                  <FiExternalLink size={18} />
                </a>
              </div>
            </div>

            <p className="text-gray-400 mb-4 text-sm">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-700/60 text-gray-300 text-xs px-2 py-1 rounded-full font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <div className="text-xs text-gray-500 font-mono">
                <span className="text-green-400">//</span> Project{" "}
                {currentProject + 1} of {projects.length}
              </div>
              <div className="flex gap-2">
                <motion.button
                  onClick={prevProject}
                  whileHover={{ x: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-2 py-1 rounded bg-gray-800 text-gray-400 hover:text-green-400 transition-colors text-xs font-mono"
                >
                  prev_project()
                </motion.button>
                <motion.button
                  onClick={nextProject}
                  whileHover={{ x: 2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-2 py-1 rounded bg-gray-800 text-gray-400 hover:text-green-400 transition-colors text-xs font-mono"
                >
                  next_project()
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Terminal-style footer */}
        <div className="mt-4 px-2 py-1 bg-gray-900/50 rounded border border-gray-700/30 text-gray-500 font-mono text-xs text-center">
          <span className="text-green-400">$</span> Press ← → to navigate
          projects
        </div>
      </div>

      {/* Google Drive Modal */}
      <AnimatePresence>
        {showDriveModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setShowDriveModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative bg-gray-900 rounded-xl w-full max-w-4xl h-[80vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-4 border-b border-gray-700">
                <h3 className="text-lg font-mono text-green-400">
                  {project.name} Demo
                </h3>
                <button
                  onClick={() => setShowDriveModal(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <FiX size={24} />
                </button>
              </div>
              <div className="flex-grow">
                <iframe
                  src={`https://drive.google.com/file/d/${
                    project.demo.split("/d/")[1].split("/")[0]
                  }/preview`}
                  className="w-full h-full"
                  allow="autoplay"
                ></iframe>
              </div>
              <div className="p-4 border-t border-gray-700 text-center text-sm text-gray-400 font-mono">
                <span className="text-green-400">$</span> Press ESC or click X
                to close
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

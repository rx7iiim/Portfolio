"use client";
import { motion } from "framer-motion";
import {
  FiTerminal,
  FiCode,
  FiCpu,
  FiDatabase,
  FiLayers,
} from "react-icons/fi";
import Image from "next/image";

export default function AboutMe() {
  const techStacks = [
    {
      category: "Frontend",
      icon: <FiCode className="text-blue-400" />,
      tech: ["Next.js", "React", "Electron", "Tailwind CSS"],
    },
    {
      category: "Backend",
      icon: <FiDatabase className="text-green-400" />,
      tech: ["Node.js", "Express.js", "NestJS"],
    },
    {
      category: "Data Science",
      icon: <FiCpu className="text-purple-400" />,
      tech: ["Python", "NumPy", "Pandas", "Scikit-learn"],
    },
    {
      category: "Languages",
      icon: <FiTerminal className="text-yellow-400" />,
      tech: ["JavaScript", "TypeScript", "Python"],
    },
  ];

  return (
    <section
      className="min-h-screen w-full px-4 py-12 bg-gray-950/90 flex items-center justify-center rounded-2xl shadow-xl mx-auto "
      id="whoami"
    >
      <div className=" h-3/4 py-2 flex items-center justify-center mt-20">
        <div className="max-w-4xl w-full mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-green-400/50 overflow-hidden"
            >
              <Image
                src="/IMG_2704c.JPG" // Replace with your image
                alt="Profile Picture"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-1"
            >
              {/* Terminal-style decoration */}
              <div className=" flex items-center gap-2 text-green-400 font-mono">
                <FiCode className="text-lg" />
                <span>~/whoami</span>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm a full-stack developer with expertise in building modern web
                applications and data-driven solutions. Passionate about
                creating efficient, scalable systems with clean code and
                intuitive interfaces.
              </p>

              <div className="mb-8">
                <p className="text-gray-400 mb-2">
                  <span className="text-green-400">$</span> cat skills.txt
                </p>

                {/* Tech Stack */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {techStacks.map((stack) => (
                    <motion.div
                      key={stack.category}
                      whileHover={{ y: -2 }}
                      className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 hover:border-green-400/30 transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        {stack.icon}
                        <h3 className="font-mono text-green-400">
                          {stack.category}
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {stack.tech.map((tech) => (
                          <span
                            key={tech}
                            className="bg-gray-700/60 text-gray-300 text-xs px-3 py-1 rounded-full font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-400/10 border border-green-400/30 text-green-400 rounded-lg hover:bg-green-400/20 transition-colors"
                whileHover={{ x: 3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiLayers />
                <span>connect_with_me()</span>
              </motion.a>
            </motion.div>
          </div>

          {/* Terminal-style footer */}
          <div className="mt-12 px-4 py-3 bg-gray-900/50 rounded-lg border border-gray-700/30 text-gray-500 font-mono text-sm flex items-center justify-center gap-4">
            <span className="text-green-400">$</span>
            <span>
              Currently working with: Next.js, React, NestJS, and Python data
              tools
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import {
  FiTerminal,
  FiCode,
  FiMail,
  FiDownload,
  FiArrowRight,
} from "react-icons/fi";
import { useRef, useState } from "react";

export default function HeroContent() {
  const [activeTab, setActiveTab] = useState<"about" | "work" | "contact">(
    "about"
  );
  const containerRef = useRef<HTMLDivElement>(null);

  const executeCommand = (command: string) => {
    // Add your command logic here
    console.log(`Executing: ${command}`);
  };

  return (
    <>
      {/* Terminal-like header */}
      <div className="absolute top-0 left-0 right-0 h-10 bg-gray-900 flex items-center px-4 z-10 border-b border-gray-800">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="ml-4 text-sm text-gray-400">
          portfolio-terminal — bash
        </div>
      </div>

      {/* Section 1: About (Terminal) */}
      <section
        className="h-full w-screen flex-shrink-0 snap-start p-8 pt-16 md:p-12 md:pt-20"
        onClick={() => setActiveTab("about")}
      >
        <div className="max-w-4xl mx-auto h-full flex flex-col">
          <div className="mb-6 flex items-center">
            <FiTerminal className="mr-2 text-green-400" />
            <span className="text-green-400">~/about-me</span>
          </div>

          <div className="flex-grow flex flex-col justify-center">
            <div className="mb-8">
              <p className="text-gray-400 mb-2">
                <span className="text-green-400">$</span> whoami
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
                <span className="text-green-400">&gt;</span> Your Name
              </h1>
              <p className="text-lg text-gray-400">
                <span className="text-green-400">//</span> Digital Craftsman &
                Code Artisan
              </p>
            </div>

            <div className="mb-8">
              <p className="text-gray-400 mb-2">
                <span className="text-green-400">$</span> cat bio.txt
              </p>
              <p className="text-gray-300 leading-relaxed">
                I architect digital experiences with clean code and thoughtful
                design. Currently crafting solutions at{" "}
                <span className="text-green-400">Company</span>. Passionate
                about open-source and developer tools.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <motion.button
                className="px-4 py-2 bg-gray-800 border border-green-400/30 rounded flex items-center gap-2 text-green-400 hover:bg-green-400/10 transition-colors"
                whileHover={{ x: 2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => executeCommand("open projects")}
              >
                <FiCode />
                <span>view_work()</span>
              </motion.button>

              <motion.button
                className="px-4 py-2 bg-gray-800 border border-green-400/30 rounded flex items-center gap-2 text-green-400 hover:bg-green-400/10 transition-colors"
                whileHover={{ x: 2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => executeCommand("contact")}
              >
                <FiMail />
                <span>contact_me()</span>
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Work (Code Editor) */}
      <section
        className="h-full w-screen flex-shrink-0 snap-start p-8 pt-16 md:p-12 md:pt-20 bg-gray-900/50"
        onClick={() => setActiveTab("work")}
      >
        <div className="max-w-4xl mx-auto h-full flex flex-col">
          <div className="mb-6 flex items-center">
            <FiCode className="mr-2 text-blue-400" />
            <span className="text-blue-400">~/projects</span>
          </div>

          <div className="flex-grow">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-blue-400">const</span>{" "}
                <span className="text-yellow-300">projects</span> = [
              </h2>

              {/* Project items would go here */}
              <div className="ml-8 mb-4 p-4 bg-gray-800/50 rounded border-l-2 border-blue-400">
                <h3 className="text-xl text-white mb-2">
                  <span className="text-purple-400">name:</span> "Portfolio
                  Website",
                </h3>
                <p className="text-gray-400 mb-2">
                  <span className="text-purple-400">tech:</span> ["Next.js",
                  "Tailwind", "Framer Motion"],
                </p>
                <button className="text-blue-400 hover:underline">
                  view_repo()
                </button>
              </div>

              <div className="ml-8 mb-4 p-4 bg-gray-800/50 rounded border-l-2 border-blue-400">
                <h3 className="text-xl text-white mb-2">
                  <span className="text-purple-400">name:</span> "E-commerce
                  Platform",
                </h3>
                <p className="text-gray-400 mb-2">
                  <span className="text-purple-400">tech:</span> ["React",
                  "Node.js", "MongoDB"],
                </p>
                <button className="text-blue-400 hover:underline">
                  view_demo()
                </button>
              </div>

              <p className="text-3xl text-blue-400">];</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Contact (Email Client) */}
      <section
        className="h-full w-screen flex-shrink-0 snap-start p-8 pt-16 md:p-12 md:pt-20 bg-gray-900/70"
        onClick={() => setActiveTab("contact")}
      >
        <div className="max-w-4xl mx-auto h-full flex flex-col">
          <div className="mb-6 flex items-center">
            <FiMail className="mr-2 text-pink-400" />
            <span className="text-pink-400">~/contact</span>
          </div>

          <div className="flex-grow flex flex-col justify-center">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-pink-400">function</span>{" "}
                <span className="text-yellow-300">sendMessage</span>() {"{"}
              </h2>

              <div className="ml-8 space-y-4">
                <div>
                  <p className="text-gray-400 mb-1">
                    <span className="text-green-400">//</span> Let's connect!
                  </p>
                  <input
                    type="text"
                    placeholder="your@email.com"
                    className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-pink-400"
                  />
                </div>

                <div>
                  <textarea
                    placeholder="message"
                    rows={4}
                    className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-pink-400"
                  />
                </div>

                <motion.button
                  className="px-6 py-3 bg-pink-400/10 border border-pink-400/30 rounded flex items-center gap-2 text-pink-400 hover:bg-pink-400/20 transition-colors"
                  whileHover={{ x: 2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiMail />
                  <span>send_message()</span>
                </motion.button>
              </div>

              <p className="text-3xl text-pink-400 mt-4">{"}"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Terminal prompt footer */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gray-900 flex items-center px-4 z-10 border-t border-gray-800">
        <span className="text-green-400">$</span>
        <span className="ml-2 text-gray-400">
          {activeTab === "about"
            ? "Type 'help' for commands"
            : activeTab === "work"
            ? "Viewing project files..."
            : "Composing message..."}
        </span>
      </div>
    </>
  );
}

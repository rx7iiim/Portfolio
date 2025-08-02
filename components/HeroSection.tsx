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
import Image from "next/image";

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
      {/* Section 1: About (Terminal) */}
      <section
        className="bg-transparent min-h-screen w-full px-4 py-24 md:px-0 md:py-32 flex flex-col items-center justify-center relative"
        onClick={() => setActiveTab("about")}
      >
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 w-full max-w-4xl mx-auto">
          <div className="w-32 h-32 md:w-48 md:h-48 relative rounded-full border-2 border-green-400/50 overflow-hidden shadow-lg">
            <Image
              src="/26+32y.jpg"
              alt="Profile Picture"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center w-full">
            <div className="mb-6 flex items-center">
              <FiTerminal className="mr-2 text-green-400" />
              <span className="text-green-400 font-mono">~/about-me</span>
            </div>
            <div className="mb-8">
              <p className="text-gray-400 mb-2 font-mono">
                <span className="text-green-400">$</span> whoami
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
                <span className="text-green-400">&gt;</span> Abderrahim zine
              </h1>
              <p className="text-lg text-gray-400">
                <span className="text-green-400">//</span> Digital Craftsman &
                Code Artisan
              </p>
            </div>
            <div className="mb-8">
              <p className="text-gray-400 mb-2 font-mono">
                <span className="text-green-400">$</span> cat bio.txt
              </p>
              <p className="text-gray-300 leading-relaxed">
                I architect digital experiences with clean code and thoughtful
                design. Currently open to work at{" "}
                <span className="text-green-400">Company</span>. Passionate
                about open-source and developer tools.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-2">
              <motion.button
                className="px-5 py-2 bg-gray-800 border border-green-400/30 rounded flex items-center gap-2 text-green-400 hover:bg-green-400/10 transition-colors shadow-sm"
                whileHover={{ x: 2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => executeCommand("open projects")}
              >
                <FiCode />
                <span>view_work()</span>
              </motion.button>
              <motion.button
                className="px-5 py-2 bg-gray-800 border border-green-400/30 rounded flex items-center gap-2 text-green-400 hover:bg-green-400/10 transition-colors shadow-sm"
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
        className="min-h-screen w-full px-4 py-24 md:px-0 md:py-32 bg-transparent flex items-center justify-center"
        onClick={() => setActiveTab("work")}
      >
        <div className="max-w-4xl w-full mx-auto h-full flex flex-col gap-8">
          <div className="mb-6 flex items-center">
            <FiCode className="mr-2 text-blue-400" />
            <span className="text-blue-400 font-mono">~/projects</span>
          </div>
          <div className="flex-grow">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-blue-400">const</span>{" "}
                <span className="text-yellow-300">projects</span> = [
              </h2>
              {/* Project items would go here */}
              <div className="ml-8 mb-6 p-5 bg-gray-800/60 rounded-lg border-l-4 border-blue-400 shadow">
                <h3 className="text-xl text-white mb-2">
                  <span className="text-purple-400">name:</span> "Portfolio
                  Website",
                </h3>
                <p className="text-gray-400 mb-2">
                  <span className="text-purple-400">tech:</span> ["Next.js",
                  "Tailwind", "Framer Motion"],
                </p>
                <button className="text-blue-400 hover:underline font-mono">
                  view_repo()
                </button>
              </div>
              <div className="ml-8 mb-6 p-5 bg-gray-800/60 rounded-lg border-l-4 border-blue-400 shadow">
                <h3 className="text-xl text-white mb-2">
                  <span className="text-purple-400">name:</span> "E-commerce
                  Platform",
                </h3>
                <p className="text-gray-400 mb-2">
                  <span className="text-purple-400">tech:</span> ["React",
                  "Node.js", "MongoDB"],
                </p>
                <button className="text-blue-400 hover:underline font-mono">
                  view_demo()
                </button>
              </div>
              <p className="text-3xl text-blue-400 font-mono">];</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Contact (Email Client) */}
      <section
        className="min-h-screen w-full px-4 py-24 md:px-0 md:py-32 bg-gray-900/70 flex items-center justify-center"
        onClick={() => setActiveTab("contact")}
      >
        <div className="max-w-4xl w-full mx-auto h-full flex flex-col gap-8">
          <div className="mb-6 flex items-center">
            <FiMail className="mr-2 text-pink-400" />
            <span className="text-pink-400 font-mono">~/contact</span>
          </div>
          <div className="flex-grow flex flex-col justify-center">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-pink-400">function</span>{" "}
                <span className="text-yellow-300">sendMessage</span>() {"{"}
              </h2>
              <div className="ml-8 space-y-6">
                <div>
                  <p className="text-gray-400 mb-1 font-mono">
                    <span className="text-green-400">//</span> Let's connect!
                  </p>
                  <input
                    type="text"
                    placeholder="your@email.com"
                    className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-400 shadow"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="message"
                    rows={4}
                    className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-400 shadow"
                  />
                </div>
                <motion.button
                  className="px-6 py-3 bg-pink-400/10 border border-pink-400/30 rounded flex items-center gap-2 text-pink-400 hover:bg-pink-400/20 transition-colors shadow"
                  whileHover={{ x: 2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiMail />
                  <span>send_message()</span>
                </motion.button>
              </div>
              <p className="text-3xl text-pink-400 mt-4 font-mono">{"}"}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

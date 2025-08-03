import Image from "next/image";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiTerminal, FiCode, FiMail } from "react-icons/fi";

export default function About() {
  const [activeTab, setActiveTab] = useState<"about" | "work" | "contact">(
    "about"
  );
  const containerRef = useRef<HTMLDivElement>(null);

  const executeCommand = (command: string) => {
    // Add your command logic here
    console.log(`Executing: ${command}`);
  };
  return (
    <section
      className="relative min-h-[400px] max-h-[600px] w-full px-2 py-8 md:px-0 md:py-12 bg-gray-950/90 flex items-center justify-center rounded-2xl shadow-xl mx-auto my-8 "
      id="about"
    >
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 w-full max-w-4xl mx-auto">
        <div className="w-32 h-32 md:w-48 md:h-48 relative rounded-full border-2 border-green-400/50 overflow-hidden shadow-lg">
          <Image
            src="/IMG_2105d.jpg"
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
              <span className="text-green-400">Company</span>. Passionate about
              open-source and developer tools.
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
  );
}

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
import About from "./About";
import Work from "./Work";
import AboutMe from "./Whoami";
import MLJourney from "./Mljourney";

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
      <About />
      <Work />
      <AboutMe />
      <MLJourney />
      {/* Section 3: Contact (Email Client) */}
      <section
        className="relative min-h-[400px] max-h-[600px] w-full px-2 py-8 md:px-0 md:py-12 bg-gray-900/70 flex items-center justify-center rounded-2xl shadow-xl mx-auto my-8"
        onClick={() => setActiveTab("contact")}
      >
        <div className="max-w-xl w-full mx-auto h-full flex flex-col gap-6">
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

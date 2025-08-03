import Image from "next/image";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiTerminal, FiCode, FiMail, FiDownload } from "react-icons/fi";

export default function About() {
  const [activeTab, setActiveTab] = useState<"about" | "work" | "contact">(
    "about"
  );
  const containerRef = useRef<HTMLDivElement>(null);

  const executeCommand = (command: string) => {
    switch (command) {
      case "open projects":
        // Scroll to projects section
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case "contact":
        // Scroll to contact section
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case "download cv":
        // Trigger CV download
        const link = document.createElement("a");
        link.href = "/CV Resume.pdf"; // Update this path
        link.download = "Abderrahim_Zine_CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        break;
      default:
        console.log(`Executing: ${command}`);
    }
  };

  return (
    <section
      className="
    relative 
    min-h-[450px] sm:min-h-[500px] md:min-h-[550px]
    w-full
    md:overflow-y-hidden
    px-4 sm:px-6 md:px-8
    py-8 sm:py-10 md:py-12 
    bg-transparent
    flex items-center justify-center 
    rounded-2xl shadow-xl 
    mx-auto my-6 md:my-8
  "
      id="about"
    >
      <div
        className="
      flex flex-col md:flex-row 
      justify-center
      items-center md:items-center
      gap-8 sm:gap-10 md:gap-20 
      w-full max-w-6xl mx-auto
    "
      >
        {/* Profile Image */}
        <div
          className="
        w-28 h-28 sm:w-32 sm:h-32 md:w-48 md:h-48 
        relative rounded-full border-2 border-green-400/50 
        overflow-hidden shadow-lg flex-shrink-0
      "
        >
          <Image
            src="/IMG_2105d.jpg"
            alt="Profile Picture"
            fill
            className="object-cover"
          />
        </div>

        {/* Text Content */}
        <div
          className="
        flex-1 flex flex-col justify-center 
        text-center md:text-left px-1 sm:px-3 md:px-0
      "
        >
          {/* Terminal Header */}
          <div
            className="
          mb-4 md:mb-6 
          flex items-center justify-center md:justify-start
        "
          >
            <FiTerminal className="mr-2 text-green-400 text-sm sm:text-base" />
            <span className="text-green-400 font-mono text-xs sm:text-sm md:text-base">
              ~/about-me
            </span>
          </div>

          {/* Name & Title */}
          <div className="mb-6 md:mb-8">
            <p className="text-gray-400 mb-2 font-mono text-xs sm:text-sm md:text-base">
              <span className="text-green-400">$</span> whoami
            </p>
            <h1
              className="
            text-2xl sm:text-3xl md:text-5xl 
            font-bold text-white mb-2 leading-tight
          "
            >
              <span className="text-green-400">&gt;</span> Abderrahim Zine
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-400">
              <span className="text-green-400">//</span> Digital Craftsman &
              Code Artisan
            </p>
          </div>

          {/* Bio */}
          <div className="mb-6 md:mb-8">
            <p className="text-gray-400 mb-2 font-mono text-xs sm:text-sm md:text-base">
              <span className="text-green-400">$</span> cat bio.txt
            </p>
            <p
              className="
            text-gray-300 leading-relaxed 
            text-sm sm:text-base px-2 md:px-0
          "
            >
              I architect digital experiences with clean code and thoughtful
              design. Currently open to work
              <span className="text-green-400">.</span> Passionate about
              open-source and developer tools.
            </p>
          </div>

          {/* Buttons */}
          <div
            className="
          flex flex-wrap gap-3 mt-2 
          justify-center md:justify-start
        "
          >
            <motion.button
              className="
            px-3 py-2 sm:px-5 sm:py-2 
            bg-gray-800 border border-green-400/30 
            rounded flex items-center gap-2 
            text-green-400 hover:bg-green-400/10 
            transition-colors shadow-sm text-xs sm:text-sm md:text-base
          "
              whileHover={{ x: 2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => executeCommand("open projects")}
            >
              <FiCode />
              <span>view_work()</span>
            </motion.button>

            <motion.button
              className="
            px-3 py-2 sm:px-5 sm:py-2 
            bg-gray-800 border border-green-400/30 
            rounded flex items-center gap-2 
            text-green-400 hover:bg-green-400/10 
            transition-colors shadow-sm text-xs sm:text-sm md:text-base
          "
              whileHover={{ x: 2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => executeCommand("contact")}
            >
              <FiMail />
              <span>contact_me()</span>
            </motion.button>

            <motion.button
              className="
            px-3 py-2 sm:px-5 sm:py-2 
            bg-gray-800 border border-green-400/30 
            rounded flex items-center gap-2 
            text-green-400 hover:bg-green-400/10 
            transition-colors shadow-sm text-xs sm:text-sm md:text-base
          "
              whileHover={{ x: 2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => executeCommand("download cv")}
            >
              <FiDownload />
              <span>download_cv()</span>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

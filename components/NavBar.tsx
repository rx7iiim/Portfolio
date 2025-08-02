"use client";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiTerminal,
  FiCode,
  FiFolder,
  FiCpu,
  FiMessageSquare,
} from "react-icons/fi";
import { useState, useEffect } from "react";

type SectionId = "home" | "work" | "skills" | "projects" | "contact";

interface NavItem {
  id: SectionId;
  label: string;
  icon: React.ReactNode;
  command?: string;
}

export default function Sidebar() {
  const [hoveredItem, setHoveredItem] = useState<SectionId | null>(null);
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  // Listen for scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      // Find the section closest to the left edge
      const sectionIds: SectionId[] = [
        "home",
        "work",
        "skills",
        "projects",
        "contact",
      ];
      let minDiff = Infinity;
      let current: SectionId = "home";
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const diff = Math.abs(rect.left);
          if (diff < minDiff) {
            minDiff = diff;
            current = id;
          }
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: NavItem[] = [
    {
      id: "home",
      label: "Terminal",
      icon: <FiTerminal size={18} />,
      command: "cd ~/about",
    },
    {
      id: "work",
      label: "Experience",
      icon: <FiCpu size={18} />,
      command: "cat experience.txt",
    },
    {
      id: "skills",
      label: "Skills",
      icon: <FiCode size={18} />,
      command: "ls skills/",
    },
    {
      id: "projects",
      label: "Projects",
      icon: <FiFolder size={18} />,
      command: "open projects/",
    },
    {
      id: "contact",
      label: "Contact",
      icon: <FiMessageSquare size={18} />,
      command: "send_message()",
    },
  ];

  const socialLinks = [
    { icon: <FiGithub size={18} />, url: "#", label: "GitHub" },
    { icon: <FiLinkedin size={18} />, url: "#", label: "LinkedIn" },
    { icon: <FiTwitter size={18} />, url: "#", label: "Twitter" },
    { icon: <FiMail size={18} />, url: "#", label: "Email" },
  ];

  const handleNavClick = (sectionId: SectionId) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  return (
    <motion.div
      className="fixed left-0 top-0 z-50 flex flex-col items-center"
      style={{
        height: "calc(100vh - 4rem)",
        marginTop: "2rem",
        marginBottom: "2rem",
      }}
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", damping: 25, stiffness: 120 }}
    >
      <div className="h-full flex flex-col items-center justify-between bg-gradient-to-b from-gray-900/95 to-gray-800/90 backdrop-blur-2xl rounded-r-3xl p-4 border-r border-green-400/10 shadow-2xl w-20">
        {/* Navigation - Terminal-style commands */}
        <div className="flex flex-col items-center space-y-4">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              className={`relative w-10 h-10 flex items-center justify-center rounded-lg font-mono border transition-all duration-200 shadow-md group
                ${
                  activeSection === item.id
                    ? "bg-gradient-to-br from-green-900/40 to-gray-700 text-green-400 border-green-400/60 ring-2 ring-green-400/30"
                    : "bg-gray-800/60 text-gray-400 border-gray-700 hover:bg-gray-700 hover:text-green-300 hover:border-green-400/30"
                }
              `}
              onClick={() => handleNavClick(item.id)}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.97 }}
            >
              <AnimatePresence>
                {hoveredItem === item.id && (
                  <motion.div
                    className="absolute left-full ml-4 bg-gray-900/95 text-green-400 text-xs px-3 py-2 rounded-md whitespace-nowrap shadow-lg border border-green-400/20 font-mono z-50"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                  >
                    <div className="text-gray-400">$ {item.command}</div>
                    <div className="text-white">{item.label}</div>
                  </motion.div>
                )}
              </AnimatePresence>
              {item.icon}
            </motion.button>
          ))}
        </div>

        {/* Social links - Now with command prompts */}
        <div className="flex flex-col items-center space-y-3 mt-6">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              className="text-gray-500 hover:text-green-400 transition-colors relative group"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
              <span className="absolute left-full ml-3 bg-gray-900/95 text-green-400 text-xs px-2 py-1 rounded border border-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                $ open {link.label.toLowerCase()}.com
              </span>
            </motion.a>
          ))}
        </div>

        {/* Terminal status indicator */}
        <div className="mt-4 text-xs text-green-400/60 font-mono tracking-wide">
          {isTerminalOpen ? "[active]" : "[sleep]"}
        </div>
      </div>
    </motion.div>
  );
}

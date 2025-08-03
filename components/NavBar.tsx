"use client";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiTerminal,
  FiCode,
  FiFolder,
  FiCpu,
  FiMessageSquare,
} from "react-icons/fi";
import { useState } from "react";

type SectionId = "home" | "work" | "skills" | "projects" | "contact";

interface NavItem {
  id: SectionId;
  label: string;
  icon: React.ReactNode;
  command: string;
}

export default function SidebarWidget() {
  const [hoveredItem, setHoveredItem] = useState<SectionId | null>(null);
  const [activeSection, setActiveSection] = useState<SectionId>("home");

  const navItems: NavItem[] = [
    { id: "home", label: "Terminal", icon: <FiTerminal />, command: "cd ~" },
    {
      id: "work",
      label: "Work",
      icon: <FiCpu />,
      command: "cat experience.md",
    },
    { id: "skills", label: "Skills", icon: <FiCode />, command: "ls skills/" },
    {
      id: "projects",
      label: "Projects",
      icon: <FiFolder />,
      command: "open projects/",
    },
    {
      id: "contact",
      label: "Contact",
      icon: <FiMessageSquare />,
      command: "send_message()",
    },
  ];

  const handleNavClick = (sectionId: SectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <motion.div
      className="fixed left-6 top-1/2 -translate-y-1/2 z-50"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-gray-900/80 backdrop-blur-md rounded-xl p-3 border border-gray-700/50 shadow-lg">
        <div className="flex flex-col gap-3">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              className={`relative p-3 rounded-lg flex items-center justify-center transition-all
                ${
                  activeSection === item.id
                    ? "bg-green-400/10 text-green-400 border border-green-400/30"
                    : "text-gray-400 hover:bg-gray-800/60 hover:text-green-300"
                }`}
              onClick={() => handleNavClick(item.id)}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-lg">{item.icon}</span>

              <AnimatePresence>
                {hoveredItem === item.id && (
                  <motion.div
                    className="absolute left-full ml-3 bg-gray-900 text-green-400 text-sm px-3 py-2 rounded-md whitespace-nowrap shadow-lg border border-gray-700 font-mono"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                  >
                    <span className="text-gray-400">$ </span>
                    {item.command}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Connection indicator */}
      <div className="mt-3 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-green-400/80 animate-pulse"></div>
        <span className="ml-2 text-xs text-gray-500 font-mono">connected</span>
      </div>
    </motion.div>
  );
}

"use client";
import React, { useRef, useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    {
      icon: <FiGithub size={18} />,
      url: "https://github.com/rx7iiim",
      label: "GitHub",
    },
    {
      icon: <FiLinkedin size={18} />,
      url: "https://www.linkedin.com/in/abderrahim-zine-b2b511329/",
      label: "LinkedIn",
    },
    {
      icon: <FiTwitter size={18} />,
      url: "https://x.com/Abderrahim14431",
      label: "Twitter",
    },
    { icon: <FiMail size={18} />, url: "#", label: "Email" },
  ];
  const [activeTab, setActiveTab] = useState<"about" | "work" | "contact">(
    "about"
  );
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <div>
      {/* Terminal prompt footer */}
      <div className="absolute bottom-0 left-0 right-0 h-14 bg-gray-900 flex justify-between items-center px-6 z-10 border-t border-gray-800 shadow-md overflow-x-hidden overflow-y-hidden w-full">
        <span className="text-green-400 font-mono">$</span>
        <span className="ml-3 text-gray-400 font-mono">
          {activeTab === "about"
            ? "Type 'help' for commands"
            : activeTab === "work"
            ? "Viewing project files..."
            : "Composing message..."}
        </span>
        <div className="flex  items-center justify-between space-x-3">
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
      </div>
    </div>
  );
}

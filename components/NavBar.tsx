"use client";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiUser,
  FiFolder,
  FiTerminal,
  FiCpu,
  FiMail,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { useState, useEffect } from "react";

type SectionId = "about" | "projects" | "whoami" | "ml-journey" | "contact";

interface NavItem {
  id: SectionId;
  label: string;
  icon: React.ReactNode;
  command: string;
}

export default function SidebarWidget() {
  const [hoveredItem, setHoveredItem] = useState<SectionId | null>(null);
  const [activeSection, setActiveSection] = useState<SectionId>("about");
  const [isHovering, setIsHovering] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const navItems: NavItem[] = [
    {
      id: "about",
      label: "About",
      icon: <FiUser />,
      command: "cat about.txt",
    },
    {
      id: "projects",
      label: "Projects",
      icon: <FiFolder />,
      command: "ls projects/",
    },
    {
      id: "whoami",
      label: "Whoami",
      icon: <FiTerminal />,
      command: "whoami",
    },
    {
      id: "ml-journey",
      label: "ML Journey",
      icon: <FiCpu />,
      command: "tail -f ml_logs.log",
    },
    {
      id: "contact",
      label: "Contact",
      icon: <FiMail />,
      command: "send_message()",
    },
  ];

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const handleNavClick = (sectionId: SectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
          }
        });
      },
      { threshold: 0.5 }
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const renderDesktopSidebar = () => (
    <div
      className="fixed left-0 top-1/2 -translate-y-1/2 z-50 h-screen flex"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="w-16 h-full" />

      <AnimatePresence>
        {isHovering && (
          <motion.div
            className="absolute left-6 top-1/2 -translate-y-1/2 z-50"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
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

            <div className="mt-3 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-green-400/80 animate-pulse"></div>
              <span className="ml-2 text-xs text-gray-500 font-mono">
                connected
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  const renderMobileMenuButton = () => (
    <motion.button
      className="fixed left-4 top-10 z-50 p-3 bg-gray-900/80 backdrop-blur-md rounded-lg border border-gray-700/50 text-gray-400 hover:text-green-400"
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {isMobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
    </motion.button>
  );

  const renderMobileSidebar = () => (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-gray-900/90 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <motion.div
            className="absolute left-0 top-0 h-full w-64 bg-gray-900/80 border-r border-gray-700/50 p-4"
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-4 mt-16">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  className={`flex items-center gap-4 p-4 rounded-lg transition-all
                    ${
                      activeSection === item.id
                        ? "bg-green-400/10 text-green-400 border border-green-400/30"
                        : "text-gray-400 hover:bg-gray-800/60 hover:text-green-300"
                    }`}
                  onClick={() => handleNavClick(item.id)}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-lg">{item.icon}</span>
                  <div className="flex flex-col items-start">
                    <span className="font-medium">{item.label}</span>
                    <span className="text-xs font-mono text-gray-500">
                      $ {item.command}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>

            <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400/80 animate-pulse"></div>
              <span className="text-xs text-gray-500 font-mono">connected</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      {!isMobile && renderDesktopSidebar()}
      {isMobile && renderMobileMenuButton()}
      {isMobile && renderMobileSidebar()}
    </>
  );
}

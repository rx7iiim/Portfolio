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
import Contact from "./Contact";
import { TypingQuote } from "./quote";

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
      <Contact />
      <TypingQuote />
    </>
  );
}

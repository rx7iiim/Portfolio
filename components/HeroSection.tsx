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
  return (
    <div className="flex flex-col lg:flex-row w-full lg:w-[450vw] md:overflow-y-hidden sm:overflow-x-hidden">
      <About />
      <Work />
      <AboutMe />
      <MLJourney />
      <Contact />
    </div>
  );
}

"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroSection from "@/components/HeroSection";

import Image from "next/image";
import { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const xBg = useTransform(scrollXProgress, [0, 1], ["0%", "50%"]);
  return (
    <div
      ref={containerRef}
      className="h-screen w-[300vw] flex"
      style={{ scrollSnapType: "x mandatory" }}
    >
      <HeroSection />
      <div>hhhhhhhhhhhhhhhhhhhhhhh</div>
      {/* Horizontal scroll indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ x: [-5, 5, -5] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex items-center gap-2"
        >
          <span className="text-gray-400 text-sm">Scroll horizontally</span>
          <FiArrowRight className="text-gray-400" />
        </motion.div>
      </div>

      {/* Background elements that move with scroll */}
      <motion.div
        className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none"
        style={{ x: xBg }}
      />
    </div>
  );
}

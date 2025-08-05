"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroSection from "@/components/HeroSection";

import Image from "next/image";
import { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import Hedaer from "@/components/Hedaer";
import Footer from "@/components/Footer";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const xBg = useTransform(scrollXProgress, [0, 1], ["0%", "50%"]);
  return (
    <div className="min-h-screen lg:h-screen w-full max-w-full overflow-x-auto overflow-y-auto lg:overflow-x-auto lg:overflow-y-hidden">
      {/* Background image */}

      <div className="fixed inset-0 -z-10 w-full h-full">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/Vintage terminal for Ubuntu.png')",
          }}
        />
      </div>

      <div
        ref={containerRef}
        className="bg-gray-950/90 flex flex-col items-center justify-between min-h-screen w-full lg:w-[450vw] lg:overflow-y-hidden sm:overflow-x-hidden"
      >
        <HeroSection />

        {/* Background grid */}
        <motion.div
          className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none"
          style={{ x: xBg }}
        />
      </div>
    </div>
  );
}

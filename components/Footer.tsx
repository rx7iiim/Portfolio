"use client";
import React, { useRef, useState } from "react";

export default function Footer() {
  const [activeTab, setActiveTab] = useState<"about" | "work" | "contact">(
    "about"
  );
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <div>
      {/* Terminal prompt footer */}
      <div className="absolute bottom-0 left-0 right-0 h-14 bg-gray-900 flex items-center px-6 z-10 border-t border-gray-800 shadow-md">
        <span className="text-green-400 font-mono">$</span>
        <span className="ml-3 text-gray-400 font-mono">
          {activeTab === "about"
            ? "Type 'help' for commands"
            : activeTab === "work"
            ? "Viewing project files..."
            : "Composing message..."}
        </span>
      </div>
    </div>
  );
}

import React from "react";

export default function Hedaer() {
  return (
    <div className=" fixed  top-0 left-0 right-0 h-12 bg-gray-900 flex items-center px-6 z-10 border-b border-gray-800 shadow-md">
      <div className="flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="ml-4 text-base text-gray-400 font-mono">
        portfolio-terminal — bash
      </div>
    </div>
  );
}

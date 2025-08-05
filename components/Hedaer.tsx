import React from "react";

export default function Hedaer() {
  return (
    <div className="absolute top-0 left-0 overflow-hidden bg-gray-900 flex items-center justify-between space-x-2 px-4 py-4 border-b border-gray-800 rounded-t-md shadow-md">
      {/* Traffic lights */}
      <div className="flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>

      {/* Terminal title */}
      <div className=" text-xs text-gray-400 font-mono select-none mr-2">
        portfolio — bash
      </div>
    </div>
  );
}

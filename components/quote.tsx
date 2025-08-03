"use client";
import { useEffect, useState } from "react";

export function TypingQuote() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const quote =
    "Programs must be written for people to read, and only incidentally for machines to execute.";

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const typingSpeed = isDeleting ? 30 : 100;
    const pauseDuration = 2000;

    if (!isDeleting) {
      // Typing forward
      if (displayText.length < quote.length) {
        timeout = setTimeout(() => {
          setDisplayText(quote.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        // Finished typing, pause then start deleting
        timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
      }
    } else {
      // Deleting
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, typingSpeed);
      } else {
        // Finished deleting, restart cycle
        setIsDeleting(false);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, quote]);

  return (
    <div className="ml-5 font-mono text-5xl text-gray-300 flex items-center justify-center h-screen w-full">
      {displayText}
      <span className="ml-1 animate-pulse">|</span>
    </div>
  );
}

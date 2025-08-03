"use client";
import { useEffect, useState } from "react";

export function TypingQuote() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const quote =
    "Programs must be written for people to read, and only incidentally for machines to execute.";

  useEffect(() => {
    const typingSpeed = isDeleting ? 40 : 100;
    const pauseDuration = 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < quote.length) {
          setDisplayText((prev) => quote.slice(0, prev.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText((prev) => prev.slice(0, -1));
        } else {
          setIsDeleting(false);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, quote]);

  return (
    <div
      className="
      md:pverflow-x-hidden
        font-mono 
        text-gray-300 
        flex items-center justify-center 
        h-[60vh] sm:h-screen 
        px-4 text-center
        w-full
      "
    >
      <p
        className="
          text-xl sm:text-3xl md:text-4xl lg:text-5xl 
          leading-snug max-w-5xl 
          break-words
        "
      >
        {displayText}
        <span className="ml-1 animate-pulse text-green-400">|</span>
      </p>
    </div>
  );
}

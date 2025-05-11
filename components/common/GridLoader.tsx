"use client";

import { useState, useEffect } from "react";

export default function GridLoader() {
  const [showBranding, setShowBranding] = useState(false);

  // Show branding after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBranding(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    // Change from flex to fixed positioning to cover the whole viewport
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gray-900">
      <div className="relative w-20 h-20">
        {/* Grid of 9 squares with precise spacing */}
        {[...Array(9)].map((_, index) => {
          // Calculate position based on index
          const row = Math.floor(index / 3);
          const col = index % 3;

          // Create evenly spaced grid
          const marginTop = `${(row - 1) * 20}px`; // -20px, 0px, 20px
          const marginLeft = `${(col - 1) * 20}px`; // -20px, 0px, 20px

          // Calculate animation delay - exactly as original
          const delay = `${index * 75}ms`;

          return (
            <div
              key={index}
              className="bg-gray-300 w-2.5 h-2.5 absolute top-1/2 left-1/2 -mt-1 -ml-1"
              style={{
                marginTop,
                marginLeft,
                animation: "fadeInOut 675ms ease-in-out infinite alternate",
                animationDelay: delay,
              }}
            />
          );
        })}
      </div>

      {/* KMPS and Powered by F.A8S */}
      <div
        className={`mt-4 text-center transition-opacity duration-1000 ${
          showBranding ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-white text-base font-normal mb-1">KMPS</p>
        <p className="text-gray-400 text-xs font-medium mb-1">Powered by</p>
        <div className="flex justify-center">
          {["F", "A", "8", "S"].map((letter, index) => {
            // Colors for each letter
            const colors = [
              "bg-blue-600",
              "bg-green-500",
              "bg-yellow-500",
              "bg-red-500",
            ];

            // Shadow/glow effects
            const shadows = [
              "shadow-blue-600/50",
              "shadow-green-500/50",
              "shadow-yellow-500/50",
              "shadow-red-500/50",
            ];

            return (
              <div
                key={letter}
                className={`${colors[index]} ${shadows[index]} w-4 h-4 mx-px flex items-center justify-center 
                          text-white font-bold text-xs rounded-sm shadow-md`}
              >
                {letter}
              </div>
            );
          })}
        </div>
      </div>

      {/* CSS for the animation - we need to use a style tag since Tailwind doesn't have built-in keyframes */}
      <style jsx>{`
        @keyframes fadeInOut {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

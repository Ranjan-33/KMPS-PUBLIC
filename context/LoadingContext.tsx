"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import GridLoader from "@/components/common/GridLoader";

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  // Auto-hide loader after 3 seconds (fallback)
  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  // Hide loader after content loaded
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Use DOM content loaded instead of window.load
      if (
        document.readyState === "complete" ||
        document.readyState === "interactive"
      ) {
        setTimeout(() => setIsLoading(false), 2000);
      } else {
        // Listen for DOM content loaded
        document.addEventListener("DOMContentLoaded", () => {
          setTimeout(() => setIsLoading(false), 2000);
        });

        // Also keep window.load as a fallback
        window.addEventListener("load", () => {
          setTimeout(() => setIsLoading(false), 2000);
        });
      }
    }
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {isLoading && <GridLoader />}
      <div
        className={`transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        style={{ visibility: isLoading ? "hidden" : "visible" }}
      >
        {children}
      </div>
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
}

"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import assets from "@/assets/assets";
import Link from "next/link";

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // School banner images and corresponding content
  const bannerContent = [
    {
      image: assets.KMPS2,
      heading: "Shaping Future Leaders Through Quality Education",
      description:
        "Welcome to KMPS School, where we nurture excellence, character, and lifelong learning in every student through our innovative curriculum.",
    },
    {
      image: assets.KMPS6,
      heading: "Academic Excellence with Character Building",
      description:
        "Our balanced approach focuses on academics, sports, arts, and values to develop well-rounded individuals prepared for future challenges.",
    },
    {
      image: assets.KMPS_2,
      heading: "State-of-the-Art Campus Facilities",
      description:
        "Explore our technology-enabled classrooms, science labs, sports complex, and library that create the perfect environment for learning and growth.",
    },
    {
      image: assets.KMPS1,
      heading: "Join Our Community of Learners",
      description:
        "Limited seats available for the upcoming academic year. Schedule a campus visit or apply online to secure your child's future with us.",
    },
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerContent.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [bannerContent.length]);

  return (
    <section className="relative h-[650px] w-full overflow-hidden">
      {/* Image carousel with animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={bannerContent[currentSlide].image}
            alt={`KMPS School - ${bannerContent[currentSlide].heading}`}
            fill
            priority
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/60 to-slate-900/40 z-10" />

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {bannerContent.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === index ? "w-10 bg-primary" : "w-2.5 bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content with Improved Typography and adjusted positioning for small screens */}
      <div className="container relative z-30 h-full flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl pl-4 sm:pl-6 md:pl-10 lg:ml-10"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              <span className="block mb-1">
                {bannerContent[currentSlide].heading
                  .split(" ")
                  .slice(0, 3)
                  .join(" ")}
              </span>
              <span className="block">
                {bannerContent[currentSlide].heading
                  .split(" ")
                  .slice(3)
                  .join(" ")}
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-lg md:text-xl text-white/90 mb-10 max-w-xl leading-relaxed font-light"
            >
              {bannerContent[currentSlide].description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-wrap gap-5"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white group transition-all duration-300 transform hover:translate-y-[-3px] hover:shadow-lg shadow-primary/20 rounded-md px-6 py-6 text-base font-medium tracking-wide"
                asChild
              >
                <Link href="/campus">
                  Campus Tour
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 text-white transition-all duration-300 transform hover:translate-y-[-3px] hover:shadow-lg rounded-md px-6 py-6 text-base font-medium tracking-wide"
                asChild
              >
                <Link href="/admission">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Apply for Admission
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

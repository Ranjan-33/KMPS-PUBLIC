"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, CheckCircle } from "lucide-react";
import assets from "@/assets/assets";

export default function InfrastructureSection() {
  const [activeTab, setActiveTab] = useState("classrooms");
  const [direction, setDirection] = useState(0);

  // Function to determine the direction of animation based on tab order
  const handleTabChange = (newValue: string) => {
    const currentIndex = facilities.findIndex((f) => f.id === activeTab);
    const newIndex = facilities.findIndex((f) => f.id === newValue);
    setDirection(newIndex > currentIndex ? 1 : -1);
    setActiveTab(newValue);
  };

  const facilities = [
    {
      id: "classrooms",
      title: "Modern Classrooms",
      description:
        "Technology-enabled smart classrooms with interactive boards, comfortable seating, and excellent acoustics to create an optimal learning environment.",
      image: assets.classRoom,
      features: [
        "Smart boards in every classroom",
        "Ergonomic furniture",
        "Climate controlled",
        "Natural lighting",
      ],
    },
    {
      id: "library",
      title: "Library & Resource Center",
      description:
        "Our extensive library houses over 20,000 books, digital resources, and dedicated reading spaces to encourage research and a love for reading.",
      image: assets.Library,
      features: [
        "20,000+ books collection",
        "Digital resources access",
        "Quiet study areas",
        "Regular book clubs",
      ],
    },
    {
      id: "labs",
      title: "Science & Computer Labs",
      description:
        "State-of-the-art science and computer laboratories equipped with the latest technology and equipment for hands-on experimental learning.",
      image: assets.computerLab,
      features: [
        "Physics, Chemistry & Biology labs",
        "Computer labs with latest software",
        "Robotics lab",
        "Language lab",
      ],
    },
    {
      id: "sports",
      title: "Sports Facilities",
      description:
        "Comprehensive sports infrastructure including indoor and outdoor facilities to encourage physical development and team spirit.",
      image: assets.sports,
      features: [
        "Indoor sports complex",
        "Olympic-size swimming pool",
        "Tennis and basketball courts",
        "Athletic track",
      ],
    },
  ];

  // Animation variants adjusted for mobile
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  // Style for active tab with gradient
  const getActiveTabStyle = (tabId: string) => {
    return activeTab === tabId
      ? "bg-gradient-to-r from-primary/80 to-primary text-white"
      : "";
  };

  return (
    <section className="py-12 md:py-24 bg-background">
      <div className="container px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
            World-Class Infrastructure
          </h2>
          <div className="w-16 md:w-20 h-1 bg-primary mx-auto mb-4 md:mb-6"></div>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Our campus features state-of-the-art facilities designed to provide
            the optimal environment for academic excellence and all-round
            development.
          </p>
        </motion.div>

        <Tabs
          defaultValue="classrooms"
          value={activeTab}
          onValueChange={handleTabChange}
          className="max-w-4xl mx-auto"
        >
          {/* Improved mobile tabs - 2 rows grid layout */}
          <div className="md:hidden w-full mb-6">
            <div className="grid grid-cols-2 gap-2">
              {facilities.map((facility) => (
                <button
                  key={facility.id}
                  onClick={() => handleTabChange(facility.id)}
                  className={`py-2 px-3 text-sm rounded-md transition-all duration-300 border text-center ${
                    activeTab === facility.id
                      ? "bg-primary text-white border-primary"
                      : "bg-background border-gray-200 text-gray-700"
                  }`}
                >
                  {facility.title}
                </button>
              ))}
            </div>
          </div>

          {/* Regular TabsList for medium and larger screens */}
          <TabsList className="hidden md:grid w-full grid-cols-4 mb-6">
            {facilities.map((facility) => (
              <TabsTrigger
                key={facility.id}
                value={facility.id}
                className={`transition-all duration-300 ${getActiveTabStyle(
                  facility.id
                )}`}
              >
                {facility.title}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="relative overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              {facilities.map((facility) =>
                activeTab === facility.id ? (
                  <motion.div
                    key={facility.id}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                    className="flex flex-col w-full"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                      <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-md group">
                        <Image
                          src={facility.image}
                          alt={facility.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      <div className="flex flex-col">
                        <motion.h3
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="text-xl md:text-2xl font-bold mb-3 md:mb-4"
                        >
                          {facility.title}
                        </motion.h3>
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6"
                        >
                          {facility.description}
                        </motion.p>

                        <motion.h4
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4 }}
                          className="font-semibold mb-2 md:mb-3 text-sm md:text-base"
                        >
                          Key Features:
                        </motion.h4>
                        <ul className="space-y-1 md:space-y-2 mb-4 md:mb-6">
                          {facility.features.map((feature, index) => (
                            <motion.li
                              key={index}
                              className="flex items-center text-sm md:text-base"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.5 + index * 0.1 }}
                            >
                              <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-primary mr-2 flex-shrink-0" />
                              <span>{feature}</span>
                            </motion.li>
                          ))}
                        </ul>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8 }}
                          className="mt-auto"
                        >
                          <Button className="group relative overflow-hidden text-sm md:text-base py-1 md:py-2 px-3 md:px-4">
                            <span className="relative z-10">Virtual Tour</span>
                            <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4 relative z-10 transition group-hover:translate-x-1" />
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-0"></div>
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ) : null
              )}
            </AnimatePresence>
          </div>
        </Tabs>
      </div>
    </section>
  );
}

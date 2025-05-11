

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Award,
  Users,
  Telescope,
  Bell,
  ChevronRight,
  Calendar,
  AlertCircle,
  X,
  ArrowRight,
  GraduationCap,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";

// Define TypeScript interfaces for your data structures
interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Notice {
  id: number;
  title: string;
  content: string;
  date: string;
  type: string;
  urgent: boolean;
  link: string;
}

interface NoticeTypeInfo {
  icon: LucideIcon;
  bg: string;
  border: string;
  accent: string;
}

const features = [
  {
    icon: BookOpen,
    title: "Comprehensive Curriculum",
    description:
      "Our curriculum is designed to develop critical thinking and prepare students for future challenges.",
  },
  {
    icon: Award,
    title: "Academic Excellence",
    description:
      "We maintain high academic standards with consistently outstanding results in national examinations.",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description:
      "Our teachers are highly qualified professionals dedicated to nurturing student potential.",
  },
  {
    icon: Telescope,
    title: "Modern Facilities",
    description:
      "State-of-the-art laboratories, sports facilities, and digital classrooms enhance learning experiences.",
  },
];

// Notice data
const notices = [
  {
    id: 1,
    title: "Admissions Open 2024-25",
    content:
      "Limited seats available for classes 9th and 10th. Early bird discount until May 15th.",
    date: "April 10, 2024",
    type: "admission",
    urgent: true,
  },
  {
    id: 2,
    title: "Annual Science Fair",
    content:
      "Join us for the annual science exhibition on May 20th showcasing innovative student projects.",
    date: "May 20, 2024",
    type: "event",
    urgent: false,
  },
  {
    id: 3,
    title: "Special Coaching Batch",
    content:
      "New coaching batch for 10th standard board preparation starting next week.",
    date: "April 25, 2024",
    type: "academic",
    urgent: true,
  },
  {
    id: 4,
    title: "Parent-Teacher Meeting",
    content:
      "PTM scheduled for all classes on the first Saturday of May. Online booking opens next week.",
    date: "May 6, 2024",
    type: "announcement",
    urgent: false,
  },
];

export default function FeaturesSection() {
  const [activeNotice, setActiveNotice] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate notices
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveNotice((prev) => (prev + 1) % notices.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  // Get notice type styles and icon
  const getNoticeTypeInfo = (type: string): NoticeTypeInfo => {
    switch (type) {
      case "admission":
        return {
          icon: GraduationCap,
          bg: "bg-blue-50 dark:bg-blue-950/30",
          border: "border-blue-200 dark:border-blue-900",
          accent: "text-blue-600 dark:text-blue-400",
        };
      case "event":
        return {
          icon: Calendar,
          bg: "bg-amber-50 dark:bg-amber-950/30",
          border: "border-amber-200 dark:border-amber-900",
          accent: "text-amber-600 dark:text-amber-400",
        };
      case "academic":
        return {
          icon: BookOpen,
          bg: "bg-green-50 dark:bg-green-950/30",
          border: "border-green-200 dark:border-green-900",
          accent: "text-green-600 dark:text-green-400",
        };
      default:
        return {
          icon: AlertCircle,
          bg: "bg-gray-50 dark:bg-gray-900/30",
          border: "border-gray-200 dark:border-gray-800",
          accent: "text-gray-600 dark:text-gray-400",
        };
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-black text-gray-900 dark:text-white px-4 lg:px-6">
      <div className="container">
        {/* Heading Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose KMPS?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            We provide an enriching educational environment where students
            thrive academically and personally.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
        </motion.div>

        {/* Main content area with flex layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Features Grid (smaller and only takes up part of the space on large screens) */}
          <div className="lg:w-3/4">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 },
                },
              }}
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.8,
                        ease: "easeOut",
                        type: "spring",
                        stiffness: 120,
                      },
                    },
                  }}
                  className="bg-white dark:bg-gray-800/90 p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
                >
                  <div className="mb-3 p-2.5 bg-primary/10 rounded-full w-fit dark:bg-primary/20">
                    <feature.icon
                      className="h-8 w-8 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Notice Board */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:w-1/4"
          >
            <div className="bg-white dark:bg-gray-800/90 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden h-full">
              {/* Notice Board Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Announcements</h3>
                </div>
                <div className="bg-primary/10 dark:bg-primary/20 text-primary text-xs font-medium px-2 py-0.5 rounded-full">
                  {notices.length}
                </div>
              </div>

              {/* Notice Board Content */}
              <div
                className="p-4 h-[280px]"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <AnimatePresence mode="wait">
                  {notices.map(
                    (notice, index) =>
                      index === activeNotice && (
                        <motion.div
                          key={notice.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className={`h-full flex flex-col ${
                            getNoticeTypeInfo(notice.type).bg
                          } ${
                            getNoticeTypeInfo(notice.type).border
                          } border rounded-md p-3 relative`}
                        >
                          {/* Notice Type Icon */}
                          <div className="flex items-start gap-3 mb-3">
                            <div
                              className={`p-2 rounded-full bg-white dark:bg-gray-800 ${
                                getNoticeTypeInfo(notice.type).accent
                              }`}
                            >
                              {React.createElement(
                                getNoticeTypeInfo(notice.type).icon,
                                { size: 16 }
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between items-start">
                                <h4 className="font-semibold text-base">
                                  {notice.title}
                                </h4>
                              </div>
                              <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                {notice.date}
                              </div>
                            </div>
                          </div>

                          {/* Notice Content */}
                          <p className="text-sm text-gray-700 dark:text-gray-300 flex-1">
                            {notice.content}
                          </p>

                          {/* Notice Footer */}
                          <div className="mt-4 flex justify-end"></div>
                        </motion.div>
                      )
                  )}
                </AnimatePresence>
              </div>

              {/* Notice Board Navigation */}
              <div className="p-3 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
                <div className="flex space-x-1">
                  {notices.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveNotice(idx)}
                      className={`h-1.5 rounded-full transition-all ${
                        idx === activeNotice
                          ? "w-4 bg-primary"
                          : "w-1.5 bg-gray-300 dark:bg-gray-600"
                      }`}
                      aria-label={`View announcement ${idx + 1}`}
                    />
                  ))}
                </div>
                <div className="flex gap-1">
                  <button
                    onClick={() =>
                      setActiveNotice(
                        (prev) => (prev - 1 + notices.length) % notices.length
                      )
                    }
                    className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400"
                  >
                    <ChevronRight className="h-4 w-4 rotate-180" />
                  </button>
                  <button
                    onClick={() =>
                      setActiveNotice((prev) => (prev + 1) % notices.length)
                    }
                    className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

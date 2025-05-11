"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bell,
  Calendar,
  Award,
  Users,
  X,
  ChevronRight,
  Calendar as CalendarIcon,
  GraduationCap,
  Info,
} from "lucide-react";
import Link from "next/link";

// Notice data in JSON format
const notices = [
  {
    id: 1,
    type: "admission",
    title: "Admissions Open for 2024-25",
    content:
      "Limited seats available for classes 9th and 10th. Apply before May 30th for early bird discount.",
    date: "2024-04-10",
    urgent: true,
    link: "/admission",
    icon: GraduationCap,
  },
  {
    id: 2,
    type: "event",
    title: "Annual Science Exhibition",
    content:
      "Join us for the annual science exhibition showcasing innovative projects by our students on May 15th.",
    date: "2024-05-15",
    urgent: false,
    link: "/events",
    icon: Calendar,
  },
  {
    id: 3,
    type: "achievement",
    title: "Outstanding Board Results",
    content:
      "KMPS students achieve exceptional results in board exams with 95% scoring above 90%.",
    date: "2024-03-25",
    urgent: false,
    link: "/achievements",
    icon: Award,
  },
  {
    id: 4,
    type: "info",
    title: "Parent-Teacher Meeting",
    content:
      "PTM scheduled for all classes on April 25th. Online booking for slots opens on April 20th.",
    date: "2024-04-25",
    urgent: true,
    link: "/events",
    icon: Users,
  },
  {
    id: 5,
    type: "admission",
    title: "Special Coaching Batch",
    content:
      "New coaching batch for competitive exams starting May 10th. Limited seats available.",
    date: "2024-05-10",
    urgent: true,
    link: "/coaching",
    icon: Info,
  },
];

export default function NoticeBoard() {
  const [currentNoticeIndex, setCurrentNoticeIndex] = useState(0);
  const [dismissed, setDismissed] = useState<number[]>([]);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-rotate notices
  useEffect(() => {
    if (isHovered) return; // Don't rotate when user is hovering

    const filteredNotices = notices.filter(
      (notice) => !dismissed.includes(notice.id)
    );
    if (filteredNotices.length === 0) return;

    const timer = setTimeout(() => {
      setCurrentNoticeIndex(
        (prevIndex) => (prevIndex + 1) % filteredNotices.length
      );
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentNoticeIndex, dismissed, isHovered]);

  // Get non-dismissed notices
  const activeNotices = notices.filter(
    (notice) => !dismissed.includes(notice.id)
  );

  // If all notices are dismissed, show a message
  if (activeNotices.length === 0) {
    return null;
  }

  const currentNotice =
    activeNotices[currentNoticeIndex % activeNotices.length];

  // Function to format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  // Get notice type styles
  const getNoticeStyles = (type: string) => {
    switch (type) {
      case "admission":
        return {
          bg: "bg-blue-50 dark:bg-blue-900/30",
          border: "border-blue-200 dark:border-blue-800",
          iconBg: "bg-blue-100 dark:bg-blue-800/50",
          iconColor: "text-blue-600 dark:text-blue-400",
          badgeBg: "bg-blue-100 dark:bg-blue-800",
          badgeText: "text-blue-700 dark:text-blue-300",
        };
      case "event":
        return {
          bg: "bg-purple-50 dark:bg-purple-900/30",
          border: "border-purple-200 dark:border-purple-800",
          iconBg: "bg-purple-100 dark:bg-purple-800/50",
          iconColor: "text-purple-600 dark:text-purple-400",
          badgeBg: "bg-purple-100 dark:bg-purple-800",
          badgeText: "text-purple-700 dark:text-purple-300",
        };
      case "achievement":
        return {
          bg: "bg-green-50 dark:bg-green-900/30",
          border: "border-green-200 dark:border-green-800",
          iconBg: "bg-green-100 dark:bg-green-800/50",
          iconColor: "text-green-600 dark:text-green-400",
          badgeBg: "bg-green-100 dark:bg-green-800",
          badgeText: "text-green-700 dark:text-green-300",
        };
      default:
        return {
          bg: "bg-gray-50 dark:bg-gray-800/50",
          border: "border-gray-200 dark:border-gray-700",
          iconBg: "bg-gray-100 dark:bg-gray-700",
          iconColor: "text-gray-600 dark:text-gray-400",
          badgeBg: "bg-gray-100 dark:bg-gray-700",
          badgeText: "text-gray-700 dark:text-gray-300",
        };
    }
  };

  const styles = getNoticeStyles(currentNotice.type);
  const IconComponent = currentNotice.icon;

  return (
    <div
      className="sticky top-28 self-start max-w-sm w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-2 mb-2">
        <Bell className="h-5 w-5 text-primary" />
        <h3 className="font-semibold">Latest Announcements</h3>
        <div className="text-xs bg-gray-200 dark:bg-gray-700 rounded-full px-2 py-0.5">
          {activeNotices.length}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentNotice.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className={`relative p-4 rounded-lg border ${styles.border} ${styles.bg} shadow-sm`}
        >
          {/* Close Button */}
          <button
            onClick={() => setDismissed([...dismissed, currentNotice.id])}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            aria-label="Dismiss notice"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="flex gap-4">
            <div className={`${styles.iconBg} p-2 h-fit rounded-full`}>
              <IconComponent className={`h-5 w-5 ${styles.iconColor}`} />
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h4 className="font-bold text-gray-900 dark:text-white">
                  {currentNotice.title}
                </h4>
                {currentNotice.urgent && (
                  <span className="px-2 py-0.5 bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 text-xs rounded-full font-medium">
                    Urgent
                  </span>
                )}
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                {currentNotice.content}
              </p>

              <div className="flex justify-between items-center">
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                  <CalendarIcon className="h-3 w-3 mr-1" />
                  {formatDate(currentNotice.date)}
                </div>

                <Link
                  href={currentNotice.link}
                  className="inline-flex items-center text-xs font-medium text-primary hover:underline"
                >
                  Read more <ChevronRight className="h-3 w-3 ml-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Indicators */}
          {activeNotices.length > 1 && (
            <div className="flex justify-center gap-1 mt-3">
              {activeNotices.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentNoticeIndex(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    index === currentNoticeIndex % activeNotices.length
                      ? "w-6 bg-primary"
                      : "w-2 bg-gray-300 dark:bg-gray-600"
                  }`}
                  aria-label={`Go to announcement ${index + 1}`}
                />
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons (only show if more than one notice) */}
      {activeNotices.length > 1 && (
        <div className="flex justify-end gap-2 mt-2">
          <button
            onClick={() =>
              setCurrentNoticeIndex(
                (prevIndex) =>
                  (prevIndex - 1 + activeNotices.length) % activeNotices.length
              )
            }
            className="p-1 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
            aria-label="Previous announcement"
          >
            <ChevronRight className="h-4 w-4 rotate-180" />
          </button>
          <button
            onClick={() =>
              setCurrentNoticeIndex(
                (prevIndex) => (prevIndex + 1) % activeNotices.length
              )
            }
            className="p-1 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
            aria-label="Next announcement"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}

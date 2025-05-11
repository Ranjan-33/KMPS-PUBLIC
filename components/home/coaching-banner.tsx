"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Star, Clock } from "lucide-react";

export default function CoachingBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-primary/70 to-primary">
      <div className="container mx-auto px-6 md:px-10 lg:px-6 max-w-7xl">
        {/* Added horizontal padding and max-width */}
        <div className="grid md:grid-cols-5 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-3 text-white pl-0 md:pl-4 lg:pl-6" // Added progressive left padding
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-4">
              <Star className="h-4 w-4" />
              <span className="text-sm font-medium tracking-wide uppercase">
                Excellence in Education
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 leading-tight">
              Special Coaching for 9th & 10th Standard Students
            </h2>
            <p className="text-white/90 text-lg mb-6 max-w-2xl font-light leading-relaxed">
              Unlock your child's full potential with our specialized coaching
              program. Expert teachers, personalized attention, and proven
              methodologies to ensure academic excellence in board examinations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="font-semibold tracking-wide"
              >
                <Link href="/contact">Enquire Now</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white/10 font-medium tracking-wide"
              >
                <Link href="/coaching" className="group">
                  Learn More About Coaching
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 p-4 rounded-lg text-center">
                  <h3 className="text-3xl font-serif font-bold text-white mb-1">
                    95%
                  </h3>
                  <p className="text-white/90 text-sm font-medium tracking-wide">
                    Students Scored 80%+
                  </p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg text-center">
                  <h3 className="text-3xl font-serif font-bold text-white mb-1">
                    15+
                  </h3>
                  <p className="text-white/90 text-sm font-medium tracking-wide">
                    Expert Teachers
                  </p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg text-center">
                  <h3 className="text-3xl font-serif font-bold text-white mb-1">
                    100%
                  </h3>
                  <p className="text-white/90 text-sm font-medium tracking-wide">
                    Pass Rate
                  </p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg text-center">
                  <h3 className="text-3xl font-serif font-bold text-white mb-1">
                    10+
                  </h3>
                  <p className="text-white/90 text-sm font-medium tracking-wide">
                    Practice Tests Monthly
                  </p>
                </div>
              </div>
              <div className="mt-4 bg-white/10 p-4 rounded-lg">
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-white mr-3" />
                  <p className="text-white  font-semibold tracking-wide ">
                    Limited Seats Available - Enroll Now!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

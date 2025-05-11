"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import assets from "@/assets/assets";

export default function AboutSection() {
  const features = [
    "Expert faculty with years of teaching experience",
    "Comprehensive curriculum focused on holistic development",
    "Modern facilities and technology-enabled classrooms",
    "Strong emphasis on values and character building",
  ];

  // Animation variants for text reveal
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  // Animation variants for feature items
  const featureVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3 + 0.1 * i,
        duration: 0.5,
      },
    }),
  };

  return (
    <section className="py-16 md:py-24 bg-muted/40 text-gray-900 dark:text-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:w-1/2 w-full"
          >
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <Image
                src={assets.SchoolCampus}
                alt="Students in classroom"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:w-1/2 w-full px-2 md:px-0"
          >
            <div className="flex flex-col items-center">
              <motion.h2
                custom={0}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={textVariants}
                className="text-2xl md:text-3xl font-bold tracking-tight mb-3 text-center"
              >
                About K.M Public School
              </motion.h2>

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "5rem" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-1 bg-primary mb-6"
              ></motion.div>
            </div>

            <motion.p
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants}
              className="text-base md:text-lg mb-6 text-gray-700 dark:text-gray-300"
            >
              Since our foundation in 1995, KMPS School has been committed to
              providing <strong>quality education</strong> that fosters academic
              excellence, character development, and responsible global
              citizenship.
            </motion.p>

            <motion.p
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants}
              className="text-base md:text-lg mb-8 text-gray-700 dark:text-gray-300"
            >
              Our holistic approach ensures that students not only excel in
              academics but also develop{" "}
              <strong>
                essential life skills, cultural awareness, and ethical values
              </strong>{" "}
              necessary for success in the modern world.
            </motion.p>

            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={featureVariants}
                  className="flex items-start"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <p>{feature}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex justify-center md:justify-start"
            >
              <Button
                asChild
                className="px-6 py-3 text-lg bg-primary hover:bg-primary/90 transition-all"
              >
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

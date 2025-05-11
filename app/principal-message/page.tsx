"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import assets from "@/assets/assets";

export default function PrincipalsMessagePage() {
  return (
    <main className="bg-background">
      {/* Hero Section */}
      <section className="relative h-[350px] md:h-[400px] overflow-hidden">
        <Image
          src={assets.KMPS1}
          alt="KMPS School Campus"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center flex-col text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Principal's Message
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center text-white/80 text-sm md:text-base"
          >
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href="/about" className="hover:text-white">
              About
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span>Principal's Message</span>
          </motion.div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-1"
            >
              <div className="relative mb-8">
                <div className="absolute top-0 right-0 w-full h-full bg-primary/20 rounded-lg translate-x-4 translate-y-4 -z-10" />
                <Image
                  src={assets.Teacher1}
                  alt="Principal"
                  width={400}
                  height={500}
                  className="rounded-lg shadow-lg object-cover w-full h-auto aspect-[3/4]"
                />
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Dr. Sarah Johnson</h3>
                <p className="text-primary font-medium mb-4">
                  Principal, KMPS School
                </p>

                <div className="border-t border-slate-200 dark:border-slate-700 pt-4 mt-4">
                  <div className="flex items-start gap-3 mb-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-muted-foreground text-sm">
                        principal@kmpsschool.org
                      </p>
                    </div>
                  </div>
                </div>

                <Button variant="default" className="w-full mt-4">
                  Contact Principal
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-2"
            >
              <h2 className="text-3xl font-serif font-bold mb-2 text-center">
                Welcome to K.M Public School
              </h2>
              <div className="flex justify-center w-full">
                <div className="w-20 h-1 bg-primary mb-8" />
              </div>

              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p>Dear Parents, Students, and Community Members,</p>

                <p>
                  It is with great pleasure and pride that I welcome you to K.M.
                  Public School's website. As the Principal, I am honored to
                  lead an institution that has been a beacon of educational
                  excellence since 1995.
                </p>

                <p>
                  At KMPS, we believe that education extends beyond textbooks
                  and classrooms. Our approach focuses on nurturing young minds
                  to become critical thinkers, compassionate leaders, and
                  responsible global citizens. Every day, our dedicated faculty
                  works tirelessly to create an environment where curiosity is
                  encouraged, talents are discovered, and potential is realized.
                </p>

                <p className="font-medium text-foreground">
                  Our philosophy centers on three fundamental principles:
                </p>

                <ol>
                  <li>
                    <strong>Academic Excellence</strong> - We maintain rigorous
                    academic standards while providing personalized support to
                    ensure every student achieves their highest potential.
                  </li>
                  <li>
                    <strong>Character Development</strong> - We emphasize values
                    such as integrity, respect, and responsibility, preparing
                    students for the moral challenges they will face in life.
                  </li>
                  <li>
                    <strong>Holistic Growth</strong> - We encourage
                    participation in arts, sports, community service, and
                    leadership activities to develop well-rounded individuals.
                  </li>
                </ol>

                <p>
                  As we navigate the challenges and opportunities of modern
                  education, we remain committed to blending traditional
                  educational values with innovative teaching methodologies. Our
                  state-of-the-art facilities, combined with a nurturing
                  atmosphere, create the perfect setting for learning and
                  growth.
                </p>

                <p>
                  I invite parents to become active partners in our educational
                  journey. Your involvement and support are crucial to our
                  students' success. Together, we can make a significant
                  difference in shaping the future of our children.
                </p>

                <p>
                  To prospective parents and students, I encourage you to visit
                  our campus, meet our faculty, and experience firsthand the
                  KMPS difference. We look forward to welcoming you to our
                  school family.
                </p>

                <p>With warm regards,</p>

                <div className="flex gap-1 flex-col">
                  <span className="italic">Dr. Sarah Johnson</span>
                  <span className="text-slate-600 dark:text-slate-400 text-sm">
                    Principal, K.M. Public School
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

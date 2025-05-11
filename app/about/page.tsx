"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, Award, Users, History, BookOpen } from "lucide-react";
import assets from "@/assets/assets";

export default function AboutPage() {
  return (
    <main className="bg-background">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src={assets.KMPS8}
          alt="KMPS School Campus"
          fill
          className="object-cover"
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
            About Our School
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
            <span>About Us</span>
          </motion.div>
        </div>
      </section>

      {/* School History  */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-lg -z-10" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-lg -z-10" />
              <Image
                src={assets.SchoolFrontView}
                alt="KMPS School Building"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full object-cover object-center"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold mb-2 text-foreground">
                Our Journey Since 1995
              </h2>
              <div className="w-20 h-1 bg-primary mb-6" />
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Founded in 1995, K.M Public School has established itself as a
                center for educational excellence in the region. Our journey
                began with a vision to provide quality education that balances
                academic rigor with character development.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Over the decades, we have grown from a small school to a
                full-fledged educational institution serving over 1,200 students
                annually. Our core values of integrity, excellence, and
                innovation have remained constant throughout our evolution.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link href="/principal-message">
                  <Button variant="default" className="group">
                    Principal's Message
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/achievements">
                  <Button variant="outline" className="group">
                    Our Achievements
                    <Award className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif font-bold mb-2 text-foreground">
              Vision & Mission
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our vision and mission statements guide every aspect of our
              educational approach.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="text-primary h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be a premier educational institution that nurtures global
                citizens who are innovative thinkers, compassionate leaders, and
                lifelong learners prepared to meet the challenges of tomorrow.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <History className="text-primary h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide a stimulating learning environment that encourages
                high expectations for success through developmentally
                appropriate instruction that allows for individual differences
                and learning styles. We promote a safe, caring, and supportive
                environment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-serif font-bold mb-2">
              Our Core Values
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: <Award className="h-10 w-10 text-primary" />,
                title: "Excellence",
                description:
                  "Striving for the highest standards in education and character",
              },
              {
                icon: <Users className="h-10 w-10 text-primary" />,
                title: "Integrity",
                description:
                  "Fostering honesty, ethics, and responsibility in all actions",
              },
              {
                icon: <BookOpen className="h-10 w-10 text-primary" />,
                title: "Innovation",
                description: "Embracing new ideas and approaches to education",
              },
              {
                icon: <History className="h-10 w-10 text-primary" />,
                title: "Respect",
                description:
                  "Honoring the dignity and potential of every individual",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-all border border-slate-100 dark:border-slate-700 text-center"
              >
                <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/10">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Want to know more about our school?
              </h2>
              <p className="text-muted-foreground">
                Schedule a campus visit or contact our admissions office.
              </p>
            </div>
            <div className="flex gap-4">
              <Link href="/contact">
                <Button variant="default" size="lg">
                  Contact Us
                </Button>
              </Link>
              <Link href="/admission">
                <Button variant="outline" size="lg">
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

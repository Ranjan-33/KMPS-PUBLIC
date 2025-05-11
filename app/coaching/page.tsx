"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChevronRight,
  BookOpen,
  Users,
  Star,
  Calendar,
  Clock,
  Layers,
  ArrowRight,
  CheckCircle2,
  GraduationCap,
} from "lucide-react";
import assets from "@/assets/assets";

// Sample data for toppers
const toppersList = [
  {
    name: "Aarav Sharma",
    percentage: "98.8%",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
  },
  {
    name: "Riya Patel",
    percentage: "98.2%",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
  },
  {
    name: "Arjun Reddy",
    percentage: "97.6%",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
  },
  {
    name: "Neha Verma",
    percentage: "97.4%",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    name: "Vikram Singh",
    percentage: "97.0%",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
  },
];

export default function CoachingPage() {
  return (
    <main className="bg-background pl-[2px]">
      {/* Hero Section */}
      <section className="relative h-[350px] md:h-[400px] overflow-hidden">
        <Image
          src={assets.KMPS12}
          alt="KMPS Special Coaching Program"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center flex-col text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Special Coaching Program
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
            <span>Coaching Program</span>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container pl-[2px]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="pl-[2px]"
            >
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Excellence in Education
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Specialized Coaching for 9th & 10th Standard
              </h2>
              <div className="prose prose-lg dark:prose-invert">
                <p>
                  At KMPS, we understand the critical importance of 9th and 10th
                  standard education in shaping a student's academic future. Our
                  specialized coaching program is designed to help students
                  excel in their board examinations and build a strong
                  foundation for higher education.
                </p>
                <p>
                  Our coaching program combines expert teaching, personalized
                  attention, and proven study methodologies to ensure that every
                  student reaches their full potential. We focus not just on
                  completing the syllabus, but on developing deep understanding
                  and problem-solving abilities.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Small Batch Sizes</h3>
                    <p className="text-muted-foreground text-sm">
                      Maximum 20 students per batch
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Expert Faculty</h3>
                    <p className="text-muted-foreground text-sm">
                      Experienced teachers with proven results
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <Layers className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">
                      Comprehensive Study Material
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Curated content and practice papers
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <Star className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Proven Results</h3>
                    <p className="text-muted-foreground text-sm">
                      Consistent top performers in board exams
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-primary" /> Program
                  Schedule
                </h3>
                <div className="space-y-4">
                  <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold">Class 9th Coaching</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>4:00 PM - 6:00 PM</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>Daily Classes</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold">Class 10th Coaching</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>4:00 PM - 6:30 PM</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>Daily Classes</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Button asChild className="w-full" size="lg">
                    <Link href="/contact">Enquire Now</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="container pl-[2px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif font-bold mb-2">
              Our Coaching Curriculum
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive curriculum is designed to cover the entire
              syllabus while providing additional focus on challenging topics
              and competitive exam preparation.
            </p>
          </motion.div>

          <Tabs defaultValue="9th" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-2 mb-8">
              <TabsTrigger value="9th">Class 9th Curriculum</TabsTrigger>
              <TabsTrigger value="10th">Class 10th Curriculum</TabsTrigger>
            </TabsList>
            <TabsContent value="9th">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-primary" />{" "}
                    Mathematics
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Number Systems and Quadratic Equations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Coordinate Geometry and Linear Equations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Triangles, Circles and Constructions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Surface Areas, Volumes and Statistics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Probability and Mathematical Reasoning</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-primary" /> Science
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        Matter in Our Surroundings and Structure of Atom
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Tissues, Diversity in Living Organisms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Motion, Force and Laws of Motion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Gravitation, Work and Energy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        Sound, Natural Resources and Improvement in Food
                        Resources
                      </span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </TabsContent>
            <TabsContent value="10th">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-primary" />{" "}
                    Mathematics
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Real Numbers and Polynomials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        Pair of Linear Equations and Quadratic Equations
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Coordinate Geometry and Triangles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        Circles, Constructions and Areas Related to Circles
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        Surface Areas, Volumes, Statistics and Probability
                      </span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-primary" /> Science
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Chemical Reactions, Acids, Bases and Salts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Metals, Non-metals and Carbon Compounds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Life Processes, Control and Coordination</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        Heredity, Evolution and Light - Reflection & Refraction
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        Electricity, Magnetic Effects of Current and Natural
                        Resources
                      </span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Toppers Section */}
      <section className="py-16">
        <div className="container pl-[2px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif font-bold mb-2">
              Our Star Performers
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet our top-performing students from the last academic year who
              achieved exceptional results in their examinations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {toppersList.map((topper, index) => (
              <motion.div
                key={topper.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center pt-4">
                  <div className="relative w-32 h-48 rounded-md overflow-hidden border-2 border-slate-200 dark:border-slate-700">
                    <Image
                      src={topper.image}
                      alt={topper.name}
                      fill
                      className="object-cover object-center"
                      style={{ objectPosition: "50% 30%" }}
                    />
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg">{topper.name}</h3>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <div className="bg-primary/10 px-2 py-1 rounded-full">
                      <span className="text-sm font-medium text-primary">
                        {topper.percentage}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      <GraduationCap className="h-4 w-4 inline-block mr-1" />
                      {topper.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 py-10">
            {toppersList.map((topper, index) => (
              <motion.div
                key={topper.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center pt-4">
                  <div className="relative w-32 h-48 rounded-md overflow-hidden border-2 border-slate-200 dark:border-slate-700">
                    <Image
                      src={topper.image}
                      alt={topper.name}
                      fill
                      className="object-cover object-center"
                      style={{ objectPosition: "50% 30%" }}
                    />
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg">{topper.name}</h3>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <div className="bg-primary/10 px-2 py-1 rounded-full">
                      <span className="text-sm font-medium text-primary">
                        {topper.percentage}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      <GraduationCap className="h-4 w-4 inline-block mr-1" />
                      {topper.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="container pl-[2px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif font-bold mb-2">
              Our Achievements
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our coaching program has consistently delivered outstanding
              results across the years, with students achieving exceptional
              grades in their board examinations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden group"
            >
              <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
                <div className="absolute -right-12 -top-12 w-36 h-36 bg-primary/5 rounded-full" />
                <div className="absolute -left-12 -bottom-12 w-36 h-36 bg-primary/5 rounded-full" />
                <div className="relative z-10">
                  <div className="text-primary text-5xl font-bold mb-1">
                    100%
                  </div>
                  <div className="uppercase text-sm font-medium tracking-wider text-muted-foreground mb-3">
                    Pass Rate
                  </div>
                  <div className="w-12 h-1 bg-primary mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground">
                    All our students consistently pass their board exams with
                    flying colors
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative overflow-hidden group"
            >
              <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
                <div className="absolute -right-12 -top-12 w-36 h-36 bg-primary/5 rounded-full" />
                <div className="absolute -left-12 -bottom-12 w-36 h-36 bg-primary/5 rounded-full" />
                <div className="relative z-10">
                  <div className="text-primary text-5xl font-bold mb-1">
                    92%
                  </div>
                  <div className="uppercase text-sm font-medium tracking-wider text-muted-foreground mb-3">
                    Above 90% Marks
                  </div>
                  <div className="w-12 h-1 bg-primary mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground">
                    9 out of 10 students score above 90% in their board
                    examinations
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative overflow-hidden group"
            >
              <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
                <div className="absolute -right-12 -top-12 w-36 h-36 bg-primary/5 rounded-full" />
                <div className="absolute -left-12 -bottom-12 w-36 h-36 bg-primary/5 rounded-full" />
                <div className="relative z-10">
                  <div className="text-primary text-5xl font-bold mb-1">
                    85%
                  </div>
                  <div className="uppercase text-sm font-medium tracking-wider text-muted-foreground mb-3">
                    Improvement Rate
                  </div>
                  <div className="w-12 h-1 bg-primary mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground">
                    Average improvement of 15-20% in student performance after
                    joining
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative overflow-hidden group"
            >
              <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
                <div className="absolute -right-12 -top-12 w-36 h-36 bg-primary/5 rounded-full" />
                <div className="absolute -left-12 -bottom-12 w-36 h-36 bg-primary/5 rounded-full" />
                <div className="relative z-10">
                  <div className="text-primary text-5xl font-bold mb-1">
                    20+
                  </div>
                  <div className="uppercase text-sm font-medium tracking-wider text-muted-foreground mb-3">
                    Board Toppers
                  </div>
                  <div className="w-12 h-1 bg-primary mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground">
                    Our students consistently rank among district and state
                    toppers
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Additional Stats Row */}
          <div className="mt-8 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center"
              >
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mr-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-lg font-bold">12-15</div>
                  <div className="text-sm text-muted-foreground">
                    Students per batch
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-center"
              >
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mr-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-lg font-bold">300+</div>
                  <div className="text-sm text-muted-foreground">
                    Practice questions
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center"
              >
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mr-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-lg font-bold">10+</div>
                  <div className="text-sm text-muted-foreground">
                    Years of excellence
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center"
              >
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mr-4">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-lg font-bold">98%</div>
                  <div className="text-sm text-muted-foreground">
                    Student satisfaction
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-16 bg-primary">
        <div className="container pl-[2px]">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Secure Your Child's Academic Future Today
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Join our specialized coaching program for 9th and 10th standard
              students and give your child the advantage they need to excel in
              board examinations and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="font-medium"
              >
                <Link href="/contact">Enroll Now</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10 font-medium"
              >
                <Link href="/contact">Schedule a Visit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

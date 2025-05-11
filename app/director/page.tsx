"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Mail,
  Phone,
  ExternalLink,
  Quote,
  Clock,
  Award,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import assets from "@/assets/assets";

// Director data
const directorData = {
  name: "Dr. Rajesh Kumar",
  image:
    "https://img.freepik.com/free-photo/portrait-businessman-smiling-wearing-eyeglasses_23-2148816027.jpg",
  position: "Director & Chairman",
  qualification: "Ph.D. in Educational Leadership, M.Ed.",
  experience: "25+ years in educational administration",
  email: "director@kmpsschool.org",
  phone: "+91 9876543210",
  socialLinks: {
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
};

// Career timeline

// Awards and recognitions

// Publications

export default function DirectorPage() {
  return (
    <main className="bg-background">
      {/* Hero Section */}
      <section className="relative h-[350px] md:h-[400px] overflow-hidden">
        <Image
          src={assets.KMPS2}
          alt="KMPS School Director"
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
            Our Director
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
            <span>Director</span>
          </motion.div>
        </div>
      </section>

      {/* Director's Profile */}
      <section className="py-16 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900/50 dark:to-slate-900">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/10 rounded-full -z-10" />
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-primary/10 rounded-full -z-10" />
              <div className="relative z-10">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl">
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <Image
                      src={directorData.image}
                      alt={directorData.name}
                      width={400}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <div className="flex items-center justify-center space-x-3 mb-2">
                      {Object.entries(directorData.socialLinks).map(
                        ([platform, url]) => (
                          <Link
                            key={platform}
                            href={url}
                            className="bg-primary/10 hover:bg-primary/20 p-2 rounded-full transition-colors"
                          >
                            {platform === "linkedin" ? (
                              <svg
                                className="h-5 w-5 text-primary"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                              </svg>
                            ) : (
                              <svg
                                className="h-5 w-5 text-primary"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                              </svg>
                            )}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-4 -right-6 bg-primary text-white px-5 py-3 rounded-full shadow-lg">
                  <p className="font-medium text-sm">Since 2010</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Leadership
              </div>
              <h3 className="text-4xl font-bold mb-2">{directorData.name}</h3>
              <p className="text-xl text-primary font-medium mb-6">
                {directorData.position}
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-full mt-1">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">
                      Qualification
                    </p>
                    <p>{directorData.qualification}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-full mt-1">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">
                      Experience
                    </p>
                    <p>{directorData.experience}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-full mt-1">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">
                      Email
                    </p>
                    <p>{directorData.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-full mt-1">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">
                      Contact
                    </p>
                    <p>{directorData.phone}</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 mt-8">
                <Button asChild>
                  <Link href="/contact">Contact Director</Link>
                </Button>
                <Button variant="outline" asChild className="group">
                  <Link href="#vision">
                    Read Vision{" "}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Director's Message */}
      <section id="vision" className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif font-bold mb-2">
              Director's Vision
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:col-span-3 bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md relative"
            >
              <Quote className="absolute h-20 w-20 top-4 left-4 text-primary/5" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">
                  Building Future Leaders
                </h3>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p>Dear Parents, Students, and Community Members,</p>
                  <p>
                    As the Director of K.M Public School, I am honored to lead
                    an institution dedicated to nurturing young minds and
                    shaping future leaders. Our educational philosophy centers
                    on providing a holistic learning environment that fosters
                    academic excellence, character development, and a global
                    perspective.
                  </p>
                  <p>
                    In today's rapidly changing world, education must go beyond
                    textbooks and embrace innovation, critical thinking, and
                    adaptability. At KMPS, we are committed to equipping our
                    students with the knowledge, skills, and values they need to
                    navigate an increasingly complex world.
                  </p>
                  <p>
                    Our vision for KMPS is to be a center of educational
                    excellence where:
                  </p>
                  <ul>
                    <li>
                      Every student discovers their unique potential and talents
                    </li>
                    <li>
                      Modern teaching methodologies blend with timeless values
                    </li>
                    <li>
                      Technology enhances learning while maintaining human
                      connections
                    </li>
                    <li>
                      Global awareness coexists with strong cultural roots
                    </li>
                    <li>
                      Success is measured not just by academic achievements but
                      by the development of well-rounded individuals
                    </li>
                  </ul>
                  <p>
                    I believe that education is a collaborative journey
                    involving students, teachers, parents, and the community.
                    Together, we can create an environment where learning is
                    engaging, meaningful, and transformative.
                  </p>
                  <p>
                    I invite you to join us in this educational journey as we
                    strive to build not just successful students, but
                    compassionate, ethical, and visionary individuals who will
                    make positive contributions to society.
                  </p>
                  <div className="mt-6">
                    <p className="font-semibold">Warm regards,</p>
                    <p className="font-bold text-lg">{directorData.name}</p>
                    <p className="text-muted-foreground">
                      {directorData.position}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:col-span-2 space-y-6"
            >
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-primary" /> Educational
                  Philosophy
                </h3>
                <p className="text-muted-foreground">
                  My educational philosophy is built on the belief that every
                  child has unique talents and abilities that need to be
                  nurtured in a supportive environment. I advocate for a
                  balanced approach that emphasizes academic rigor while also
                  developing social-emotional skills, creativity, and critical
                  thinking.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Core Values</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>
                      <strong>Excellence:</strong> Striving for the highest
                      standards in everything we do
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>
                      <strong>Integrity:</strong> Fostering honesty, ethics, and
                      responsibility
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>
                      <strong>Innovation:</strong> Embracing new ideas and
                      approaches to education
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>
                      <strong>Inclusion:</strong> Creating a diverse and
                      welcoming community
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>
                      <strong>Service:</strong> Contributing positively to
                      society
                    </span>
                  </li>
                </ul>
              </div>

              <div className="relative h-56 overflow-hidden rounded-xl shadow-md">
                <Image
                  src={assets.KMPS8}
                  alt="Campus View"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-white text-xl font-bold mb-1">
                      Our Campus
                    </h3>
                    <p className="text-white/80 text-sm">
                      Visit our state-of-the-art campus facilities
                    </p>
                    <Link
                      href="/campus"
                      className="text-white text-sm flex items-center mt-2 hover:text-primary transition-colors"
                    >
                      Explore Campus <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Vision for the Future of Education */}
      <section className="py-16 bg-slate-100 dark:bg-slate-900/30">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          {" "}
          {/* Added more horizontal padding */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            {" "}
            {/* Added max-width and auto margin */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="pl-0 md:pl-4 lg:pl-8" // Added progressive left padding
            >
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Director's Insights
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Vision for the Future of Education
              </h2>
              <div className="prose prose-lg dark:prose-invert">
                <p>
                  As we look ahead to the future of education, it's crucial that
                  we prepare our students not just for the careers of tomorrow,
                  but for the challenges of an increasingly complex world. At
                  KMPS, we're implementing a forward-thinking approach that
                  balances technological advancement with human values.
                </p>
                <p>Our focus areas include:</p>
                <ul>
                  <li>
                    Integration of AI and digital literacy across all subjects
                  </li>
                  <li>
                    Environmental sustainability education and green campus
                    initiatives
                  </li>
                  <li>
                    Global citizenship programs with international partnerships
                  </li>
                  <li>
                    Mental health and wellbeing support for holistic development
                  </li>
                </ul>
                <p>
                  Through these initiatives, we aim to create a learning
                  environment that prepares students to be adaptable, creative
                  problem-solvers who can thrive in any circumstance.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild className="group">
                  <Link href="/about">
                    Learn About Our School{" "}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="aspect-video relative rounded-xl overflow-hidden shadow-xl"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors cursor-pointer group">
                <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-16 border-l-primary ml-2"></div>
                </div>
              </div>
              <Image
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Director's Video Message"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team Teaser */}
      <section className="py-16">
        <div className="container">
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-10 rounded-2xl">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-4">Leadership Team</h3>
                <p className="text-muted-foreground mb-6">
                  Our school is guided by a team of experienced educators and
                  administrators who work together to maintain the highest
                  standards of education and student development.
                </p>
                <Button
                  variant="outline"
                  className="group hover:bg-primary hover:text-white"
                >
                  Contact Administration{" "}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="flex justify-center md:justify-end">
                <div className="relative w-64 h-64">
                  <div className="absolute top-0 left-0 w-40 h-40 overflow-hidden rounded-lg shadow-md z-10">
                    <Image
                      src="https://img.freepik.com/free-photo/confident-business-woman-portrait-smiling-face_53876-137693.jpg"
                      alt="Principal"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-primary/80 text-white text-xs font-medium py-1 px-2">
                      Principal
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 w-40 h-40 overflow-hidden rounded-lg shadow-md">
                    <Image
                      src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg"
                      alt="Vice Principal"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-primary/80 text-white text-xs font-medium py-1 px-2">
                      Vice Principal
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-primary/5">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Connect with Our Director
              </h3>
              <p className="text-muted-foreground">
                Have questions or want to learn more about our leadership
                vision? Get in touch with our administration.
              </p>
            </div>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/principal-message">Principal's Message</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

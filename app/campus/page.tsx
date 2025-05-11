"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  MapPin,
  Landmark,
  BookOpen,
  TrendingUp,
  Leaf,
  Palette,
  Database,
  Award,
  BarChart2,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import assets from "@/assets/assets";

export default function CampusPage() {
  return (
    <main className="bg-background">
      {/* Hero Section */}
      <section className="relative h-[350px] md:h-[400px] overflow-hidden">
        <Image
          src={assets.KMPS_2}
          alt="KMPS School Campus"
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
            Our Campus
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
            <span>Campus</span>
          </motion.div>
        </div>
      </section>

      {/* Campus Overview */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif font-bold mb-2">
              World-Class Campus Facilities
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Explore our state-of-the-art campus designed to promote learning,
              growth, and holistic development. Our facilities provide the
              perfect environment for academic excellence and extracurricular
              activities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={assets.KMPS1}
                  alt="KMPS School Campus"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-3 mt-3">
                <div className="aspect-[4/3] relative rounded-md overflow-hidden shadow-md">
                  <Image
                    src={assets.sports}
                    alt="School Grounds"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-[4/3] relative rounded-md overflow-hidden shadow-md">
                  <Image
                    src={assets.classRoom}
                    alt="Classroom"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-[4/3] relative rounded-md overflow-hidden shadow-md">
                  <Image
                    src={assets.KMPS10}
                    alt="Library"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4 font-serif">
                A Campus That Inspires
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our campus spans over 5 acres of lush greenery, providing a
                serene and inspiring environment for students. From
                technology-enabled classrooms to specialized labs and expansive
                sports facilities, we offer everything students need to excel
                academically and personally.
              </p>

              <div className="space-y-4 mt-6">
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">
                      Strategic Location
                    </h4>
                    <p className="text-muted-foreground">
                      Easily accessible from all parts of the city with secure
                      surroundings.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Landmark className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">
                      Modern Infrastructure
                    </h4>
                    <p className="text-muted-foreground">
                      Purpose-built facilities that meet international standards
                      for education.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Leaf className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">
                      Eco-Friendly Campus
                    </h4>
                    <p className="text-muted-foreground">
                      Sustainable design with green spaces and energy-efficient
                      systems.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Campus Facilities Tabs */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif font-bold mb-2">
              Explore Our Facilities
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our campus features a range of specialized facilities designed to
              enhance the learning experience.
            </p>
          </motion.div>

          <Tabs defaultValue="academics" className="max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger
                value="academics"
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                <BookOpen className="h-4 w-4 mr-2" />
                Academics
              </TabsTrigger>
              <TabsTrigger
                value="sports"
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                <TrendingUp className="h-4 w-4 mr-2" />
                Sports
              </TabsTrigger>
              <TabsTrigger
                value="arts"
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                <Palette className="h-4 w-4 mr-2" />
                Arts
              </TabsTrigger>
              <TabsTrigger
                value="technology"
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                <Database className="h-4 w-4 mr-2" />
                Technology
              </TabsTrigger>
            </TabsList>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden"
            >
              <TabsContent value="academics" className="m-0">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-80 md:h-auto">
                    <Image
                      src={assets.classRoom}
                      alt="Academic Facilities"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4">
                      Academic Facilities
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <Award className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>
                          Modern classrooms with smart boards and digital
                          learning tools
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Award className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>
                          Well-stocked library with over 20,000 books and
                          digital resources
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Award className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>
                          Science laboratories equipped with the latest
                          experimental apparatus
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Award className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>
                          Language lab for enhancing communication skills
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Award className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>
                          Specialized subject rooms for focused learning
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="sports" className="m-0">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-80 md:h-auto">
                    <Image
                      src={assets.sports}
                      alt="Sports Facilities"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4">
                      Sports Facilities
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <Award className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>
                          Regulation-size sports field for football and cricket
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Award className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Indoor gymnasium with fitness equipment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Award className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Basketball and volleyball courts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Award className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Table tennis and badminton facilities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Award className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Athletics track for track and field events</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="arts" className="m-0">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-80 md:h-auto">
                    <Image
                      src={assets.KMPS1}
                      alt="Arts Facilities"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4">
                      Arts & Cultural Facilities
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <Award className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>
                          Multipurpose auditorium for performances and events
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Award className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Music room with various instruments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Award className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>
                          Art studio with materials for various artistic
                          expressions
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Award className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Dance room with mirrors and sound system</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Award className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Theater workshop space for drama activities</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="technology" className="m-0">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-80 md:h-auto">
                    <Image
                      src={assets.computerLab}
                      alt="Technology Facilities"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4">
                      Technology Facilities
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <Award className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>State-of-the-art computer laboratories</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Award className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>
                          High-speed internet connectivity throughout the campus
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Award className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>
                          Robotics and coding lab with specialized equipment
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Award className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Digital library access systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Award className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>A/V equipment for multimedia projects</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </motion.div>
          </Tabs>
        </div>
      </section>

      {/* Campus Map Section */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif font-bold mb-2">
              Campus Location
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our campus is conveniently located and easily accessible. Visit us
              to experience our facilities firsthand.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md max-w-4xl mx-auto"
          >
            <div className="aspect-[16/9] md:aspect-[16/7] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1458.638107349067!2d86.26415566394121!3d24.380759847138712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f158a587547189%3A0x2760eadacae6d67e!2sK.M%20Public%20School%20Nawdiha!5e0!3m2!1sen!2sin!4v1744285399306!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="School Location Map"
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-6 md:flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold mb-2">Visit Our Campus</h3>
                <p className="text-muted-foreground">
                  123 Education Street, Knowledge City, State - 123456
                </p>
                <p className="text-primary mt-2 font-medium">
                  Contact: +91 9876543210 | info@kmps.edu
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <Link
                  href="https://goo.gl/maps/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Get Directions
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Campus Tour */}
      <section className="py-12 bg-primary/5">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Want to See Our Campus in Person?
              </h3>
              <p className="text-muted-foreground max-w-2xl">
                We offer guided tours of our facilities for prospective parents
                and students. Experience the KMPS difference firsthand.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors font-medium"
            >
              Schedule a Campus Tour
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

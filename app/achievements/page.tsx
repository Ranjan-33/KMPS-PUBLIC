"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Award,
  Users,
  Star,
  BookOpen,
  Calendar,
  ArrowRight,
  Heart,
  School,
  GraduationCap,
  Smile,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import assets from "@/assets/assets";

// Define different categories for our growth and achievements
const milestoneCategories = [
  { id: "academic", label: "Academic Progress" },
  { id: "community", label: "Community Impact" },
  { id: "improvements", label: "School Improvements" },
  { id: "activities", label: "Student Activities" },
];

const milestones = {
  academic: [
    {
      title: "Improved Board Examination Results",
      year: "2022-2023",
      description:
        "Our students achieved a 92% pass rate in board examinations, a 15% improvement from the previous year, with several students scoring distinction marks.",
      icon: <Star className="h-6 w-6" />,
      image:
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
    },
    {
      title: "Introduction of STEM Learning Program",
      year: "2023",
      description:
        "We introduced a comprehensive STEM learning program to enhance students' understanding of science and mathematics through practical experiments and projects.",
      icon: <BookOpen className="h-6 w-6" />,
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "English Language Proficiency Program",
      year: "2022",
      description:
        "Our dedicated English language program has significantly improved students' communication skills, with 75% of students showing marked improvement in reading and speaking.",
      icon: <BookOpen className="h-6 w-6" />,
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2022&q=80",
    },
    {
      title: "First Computer Lab Establishment",
      year: "2021",
      description:
        "We established our first computer lab with 15 computers, introducing all students to basic computer skills and digital literacy programs.",
      icon: <School className="h-6 w-6" />,
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
  ],
  community: [
    {
      title: "Village Cleanliness Drive",
      year: "2023",
      description:
        "Our students and staff organized a village-wide cleanliness campaign, cleaning public spaces and promoting waste management practices among village residents.",
      icon: <Heart className="h-6 w-6" />,
      image:
        "https://images.unsplash.com/photo-1524135329990-07c9c9ebb610?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Adult Literacy Program",
      year: "2022",
      description:
        "Our teachers volunteered for an evening adult literacy program, helping 45 village adults learn basic reading and writing skills over a six-month period.",
      icon: <Users className="h-6 w-6" />,
      image:
        "https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1547&q=80",
    },
    {
      title: "Health Awareness Camp",
      year: "2022",
      description:
        "In collaboration with local doctors, our school organized a health camp providing free check-ups and health education to over 200 village residents.",
      icon: <Heart className="h-6 w-6" />,
      image:
        "https://images.unsplash.com/photo-1584634731339-252c581abfc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1460&q=80",
    },
    {
      title: "Tree Plantation Initiative",
      year: "2021",
      description:
        "Students planted over 100 saplings around the village and committed to their care, promoting environmental awareness and sustainability.",
      icon: <Award className="h-6 w-6" />,
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80",
    },
  ],
  improvements: [
    {
      title: "New School Library Construction",
      year: "2023",
      description:
        "We completed the construction of our new library with over 2,000 books, providing students with a dedicated space for reading and research.",
      icon: <BookOpen className="h-6 w-6" />,
      image:
        "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Solar Panel Installation",
      year: "2022",
      description:
        "We installed solar panels to provide sustainable electricity to our school, reducing costs and teaching students about renewable energy.",
      icon: <School className="h-6 w-6" />,
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    },
    {
      title: "Drinking Water Facility Upgrade",
      year: "2022",
      description:
        "We installed a water purification system ensuring clean drinking water for all students and staff, improving health and hygiene standards.",
      icon: <Award className="h-6 w-6" />,
      image:
        "https://images.unsplash.com/photo-1563299796-17596ed6b017?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Playground Development",
      year: "2021",
      description:
        "We developed a proper playground with sports equipment for cricket, kabaddi, and other local games, encouraging physical activity among students.",
      icon: <Smile className="h-6 w-6" />,
      image:
        "https://images.unsplash.com/photo-1525914813433-886dc018469d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
  ],
  activities: [
    {
      title: "Annual Cultural Festival",
      year: "2023",
      description:
        "Our students showcased their talents in dance, music, and drama during our annual cultural festival, celebrating local traditions and cultural heritage.",
      icon: <Smile className="h-6 w-6" />,
      image:
        "https://images.unsplash.com/photo-1545128485-c400ce7b23d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "District-Level Sports Participation",
      year: "2022",
      description:
        "For the first time, our school participated in district-level sports competitions, with our kabaddi team reaching the quarter-finals.",
      icon: <Award className="h-6 w-6" />,
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Science Exhibition",
      year: "2022",
      description:
        "Students created and presented science projects addressing local challenges, showcasing creativity and practical problem-solving skills.",
      icon: <Star className="h-6 w-6" />,
      image:
        "https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Village History Documentation Project",
      year: "2021",
      description:
        "Senior students interviewed village elders and created a comprehensive documentation of local history, traditions, and cultural practices.",
      icon: <BookOpen className="h-6 w-6" />,
      image:
        "https://images.unsplash.com/photo-1510017803434-a899398421b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
  ],
};

// School growth indicators
const growthIndicators = [
  {
    figure: "30%",
    label: "Increase in Enrollment",
    icon: <Users className="h-8 w-8" />,
  },
  {
    figure: "92%",
    label: "Board Exam Pass Rate",
    icon: <GraduationCap className="h-8 w-8" />,
  },
  {
    figure: "15+",
    label: "Community Programs",
    icon: <Heart className="h-8 w-8" />,
  },
  {
    figure: "8",
    label: "Infrastructure Projects",
    icon: <School className="h-8 w-8" />,
  },
];

export default function AchievementsPage() {
  const [activeCategory, setActiveCategory] = useState("academic");

  return (
    <main className="bg-background">
      {/* Hero Section */}
      <section className="relative h-[350px] md:h-[400px] overflow-hidden">
        <Image
          src={assets.KMPS5}
          alt="KMPS School Growth and Progress"
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
            Our Growth & Progress
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
            <span>Growth & Progress</span>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900/50 dark:to-slate-900">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-serif font-bold mb-2">
              Our Journey in Numbers
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              KMPS has been steadily growing and improving across various areas
              to provide quality education for our village students.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {growthIndicators.map((stat, index) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                key={stat.label}
                className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all flex flex-col items-center"
              >
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <div className="text-primary">{stat.icon}</div>
                </div>
                <h3 className="text-3xl font-bold mb-2 text-primary">
                  {stat.figure}
                </h3>
                <p className="text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestone Categories */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-serif font-bold mb-2">
              Our Progress & Milestones
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our journey of growth and the milestones we've achieved in
              various areas of school development.
            </p>
          </motion.div>

          <Tabs
            defaultValue="academic"
            value={activeCategory}
            onValueChange={setActiveCategory}
            className="max-w-5xl mx-auto"
          >
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-10 w-full">
              {milestoneCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {milestoneCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid gap-8">
                  {milestones[category.id as keyof typeof milestones].map(
                    (milestone, index) => (
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        key={milestone.title}
                        className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all border border-slate-100 dark:border-slate-700"
                      >
                        <div className="grid md:grid-cols-5">
                          <div className="md:col-span-2 relative min-h-[240px]">
                            <Image
                              src={milestone.image}
                              alt={milestone.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="md:col-span-3 p-6 flex flex-col justify-between">
                            <div>
                              <div className="flex items-center justify-between mb-3">
                                <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full">
                                  <Calendar className="h-4 w-4 mr-1" />
                                  {milestone.year}
                                </div>
                                <div className="text-primary">
                                  {milestone.icon}
                                </div>
                              </div>
                              <h3 className="text-2xl font-bold mb-3">
                                {milestone.title}
                              </h3>
                              <p className="text-muted-foreground mb-6">
                                {milestone.description}
                              </p>
                            </div>
                            <Button variant="outline" className="w-fit group">
                              Read More
                              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    )
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-primary/5 px-4 lg:px-6">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4 font-serif">
                Community Voices
              </h2>
              <div className="w-20 h-1 bg-primary mb-6" />
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our school has become an important pillar of the village
                community. Parents, village elders, and local authorities have
                witnessed our growth and the positive impact we've made on
                children's lives.
              </p>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md mb-6">
                <p className="italic text-muted-foreground mb-4">
                  "Since my children started attending KMPS, I've noticed
                  significant improvement in their confidence and knowledge. The
                  school has transformed our village education system
                  completely."
                </p>
                <p className="font-medium">— Ramesh Kumar, Parent</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
                <p className="italic text-muted-foreground mb-4">
                  "KMPS has become the center of educational and cultural
                  development in our village. Their community programs benefit
                  not just students but all village residents."
                </p>
                <p className="font-medium">— Sanjay Yadav, Village Head</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-40 md:h-52 bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden relative">
                    <Image
                      src="https://images.unsplash.com/photo-1571210862729-78a52d3779a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                      alt="Village school students"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="h-32 md:h-40 bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden relative">
                    <Image
                      src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                      alt="Rural education"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-6">
                  <div className="h-32 md:h-40 bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden relative">
                    <Image
                      src="https://images.unsplash.com/photo-1594608661623-aa0bd3a69799?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
                      alt="Village community"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="h-40 md:h-52 bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden relative">
                    <Image
                      src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
                      alt="Rural development"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Future Plans */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-serif font-bold mb-2">
              Our Future Plans
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We are committed to continuous improvement and have ambitious
              plans to further enhance our facilities and educational offerings.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border border-slate-100 dark:border-slate-700"
            >
              <div className="p-3 bg-primary/10 rounded-full w-fit mb-5">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Digital Classroom Project
              </h3>
              <p className="text-muted-foreground mb-4">
                We plan to equip all classrooms with digital learning tools
                including projectors, interactive boards, and tablets to enhance
                the learning experience.
              </p>
              <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <div className="h-2 bg-primary rounded-full w-[30%]"></div>
              </div>
              <p className="text-sm text-right text-muted-foreground mt-1">
                30% Completed
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border border-slate-100 dark:border-slate-700"
            >
              <div className="p-3 bg-primary/10 rounded-full w-fit mb-5">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Science Laboratory Expansion
              </h3>
              <p className="text-muted-foreground mb-4">
                We are expanding our science laboratory facilities to include
                more equipment for practical experiments and hands-on learning
                experiences.
              </p>
              <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <div className="h-2 bg-primary rounded-full w-[45%]"></div>
              </div>
              <p className="text-sm text-right text-muted-foreground mt-1">
                45% Completed
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border border-slate-100 dark:border-slate-700"
            >
              <div className="p-3 bg-primary/10 rounded-full w-fit mb-5">
                <School className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Community Learning Center
              </h3>
              <p className="text-muted-foreground mb-4">
                We are developing a community learning center that will provide
                educational resources, vocational training, and adult literacy
                programs for the entire village.
              </p>
              <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <div className="h-2 bg-primary rounded-full w-[60%]"></div>
              </div>
              <p className="text-sm text-right text-muted-foreground mt-1">
                60% Completed
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-12 bg-primary/5 px-4 lg:px-6">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-bold mb-2">Support Our Journey</h3>
              <p className="text-muted-foreground max-w-xl">
                Join us in our mission to provide quality education to rural
                students by supporting our ongoing development projects.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import {
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import assets from "@/assets/assets";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <main className="bg-background">
      {/* Hero Section */}
      <section className="relative h-[350px] md:h-[400px] overflow-hidden">
        <Image
          src={assets.KMPS6}
          alt="Contact KMPS School"
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
            Contact Us
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
            <span>Contact Us</span>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif font-bold mb-2">Get In Touch</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We'd love to hear from you. Feel free to reach out with any
              questions about admissions, curriculum, or to schedule a visit to
              our campus.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Phone className="h-8 w-8 text-primary" />,
                title: "Phone",
                details: [
                  "Main Office: +91 9973504336",
                  "Admissions: +91 8757749630",
                ],
              },
              {
                icon: <Mail className="h-8 w-8 text-primary" />,
                title: "Email",
                details: ["kmpublicschool2016@gmail.com"],
              },
              {
                icon: <Clock className="h-8 w-8 text-primary" />,
                title: "Office Hours",
                details: [
                  "Monday - Friday: 8:00 AM to 2:00 PM",
                  "Saturday: 7:00 AM to 12:00 PM",
                ],
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all text-center"
              >
                <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                {item.details.map((detail, i) => (
                  <p key={i} className="text-muted-foreground mb-1">
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50 px-4 lg:px-6">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold mb-2">
                Send Us a Message
              </h2>
              <div className="w-20 h-1 bg-primary mb-6" />
              <p className="text-muted-foreground mb-8">
                Have questions about our school? Fill out the form below and
                we'll get back to you as soon as possible.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800 text-center"
                >
                  <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-green-700 dark:text-green-300">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-green-600 dark:text-green-400">
                    Thank you for contacting us. We'll respond to your inquiry
                    shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-1"
                      >
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="bg-white dark:bg-slate-800"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-1"
                      >
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="Your email"
                        required
                        className="bg-white dark:bg-slate-800"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-1"
                    >
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className="bg-white dark:bg-slate-800"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-1"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      placeholder="Subject of your message"
                      required
                      className="bg-white dark:bg-slate-800"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-1"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      rows={5}
                      required
                      className="bg-white dark:bg-slate-800"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full md:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center ">
                        <Send className="mr-2 h-4 w-4" /> Send Message
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative aspect-square md:aspect-[4/3] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1458.638107349067!2d86.26415566394121!3d24.380759847138712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f158a587547189%3A0x2760eadacae6d67e!2sK.M%20Public%20School%20Nawdiha!5e0!3m2!1sen!2sin!4v1744285399306!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="School Location Map"
                  className="absolute inset-0"
                ></iframe>
              </div>
              <div className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Our Address</h3>
                    <p className="text-muted-foreground">
                      K.M Public School
                      <br />
                      Nawadih , Jamua , Giridih ,
                      <br />
                      Jharkhand - 815312, India
                    </p>
                  </div>
                </div>
                <div className="border-t border-slate-200 dark:border-slate-700 pt-4 mt-4">
                  <h4 className="font-medium mb-2">Getting Here:</h4>
                  <p className="text-sm text-muted-foreground">
                    Located 13 km from the city center. Public transportation
                    available nearby. Ample parking space available for
                    visitors.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
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
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about admissions, curriculum, and
              school policies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  What are the school timings?
                </AccordionTrigger>
                <AccordionContent>
                  School hours are from 8:00 AM to 2:00 PM for all grades.
                  Students are expected to arrive at least 10 minutes before the
                  start of classes. The school gates open at 7:30 AM.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  How can I apply for admission?
                </AccordionTrigger>
                <AccordionContent>
                  The admission process begins in January each year. You can
                  apply online through our admissions portal or visit the school
                  office in person. Required documents include birth
                  certificate, previous academic records, and transfer
                  certificate from the previous school if applicable.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  What curriculum does the school follow?
                </AccordionTrigger>
                <AccordionContent>
                  KMPS School follows the CBSE curriculum with additional
                  emphasis on holistic development. We incorporate modern
                  teaching methodologies, project-based learning, and technology
                  integration across all subjects.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Are there transportation facilities available?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, the school provides transportation services covering
                  major areas of the Locality . Our buses has the best
                  experienced dirivers . Transportation fees are charged
                  separately from the tuition fees.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  What extracurricular activities are offered?
                </AccordionTrigger>
                <AccordionContent>
                  We offer a wide range of extracurricular activities including
                  sports (cricket, football, basketball, etc.), arts (music,
                  dance, drama, painting), clubs (robotics, debating, eco club),
                  and more. Students are encouraged to participate in at least
                  one activity each Year.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-primary/5 px-4 lg:px-6">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-bold mb-2">Visit Our Campus</h3>
              <p className="text-muted-foreground max-w-xl">
                The best way to experience KMPS School is to visit our campus.
                Schedule a tour today!
              </p>
            </div>
            <Button size="lg" className="px-8">
              Schedule a Visit
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

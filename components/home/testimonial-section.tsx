"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import assets from "@/assets/assets";

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Parent",
      image: assets.Testimonial1,
      text: "KMPS School has been a transformative experience for my children. The teachers are dedicated, and the holistic approach to education has helped my children develop not just academically but also as confident individuals with strong values.",
    },
    {
      id: 2,
      name: "Rahul Mehra",
      role: "Alumni, Batch of 2018",
      image: assets.Student1,
      text: "The years I spent at KMPS School shaped who I am today. The focus on both academic excellence and character development prepared me well for university life and beyond. The teachers here go above and beyond for their students.",
    },
    {
      id: 3,
      name: "Dr. Anjali Kapoor",
      role: "Education Professional",
      image: assets.Teacher2,
      text: "As an education professional, I've seen many schools, but KMPS stands out for its innovative curriculum, excellent faculty, and commitment to quality education. They truly prepare students for the challenges of the modern world.",
    },
  ];

  // Autoplay functionality
  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const nextSlide = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-3">
            What Our Community Says
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Testimonials from our parents, students, and alumni about their KMPS
            experience
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation buttons */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-gray-200 dark:border-gray-800 bg-background shadow-sm"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-gray-200 dark:border-gray-800 bg-background shadow-sm"
              onClick={nextSlide}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>

          {/* Testimonials */}
          <div className="overflow-hidden px-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                      <div className="relative w-20 h-20 md:w-28 md:h-28 flex-shrink-0">
                        <Image
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="mb-4 text-primary">
                          <Quote className="h-8 w-8 opacity-50" />
                        </div>
                        <p className="text-lg mb-6 italic">
                          "{testimonials[currentIndex].text}"
                        </p>
                        <div>
                          <h4 className="text-xl font-semibold">
                            {testimonials[currentIndex].name}
                          </h4>
                          <p className="text-muted-foreground">
                            {testimonials[currentIndex].role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setAutoplay(false);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary w-6"
                    : "bg-muted-foreground/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

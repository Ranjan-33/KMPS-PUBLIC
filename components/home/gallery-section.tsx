"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, ChevronLeft, Maximize2 } from "lucide-react";
import Link from "next/link";
import assets from "@/assets/assets";
import { useState } from "react";

export default function GallerySection() {
  const galleryImages = [
    { id: 1, src: assets.sports, alt: "School annual day celebration" },
    { id: 2, src: assets.computerLab, alt: "Science exhibition" },
    { id: 3, src: assets.Library, alt: "Sports day" },
    { id: 4, src: assets.KMPSLOGO2, alt: "Art workshop" },
    { id: 5, src: assets.Banner2, alt: "Educational trip" },
    { id: 6, src: assets.SchoolCampus, alt: "Cultural performance" },
  ];

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-muted/40">
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-3">
            School Gallery
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Glimpses of life at KMPS School - academics, sports, cultural events
            and more
          </p>
        </motion.div>

        {/* Modified grid: 2 columns on small screens, 3 columns on medium and up */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {galleryImages.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group overflow-hidden rounded-lg shadow-md aspect-[4/3] cursor-pointer"
              onClick={() => setSelectedImage(i)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <Maximize2 className="h-8 w-8 mx-auto mb-2" />
                  <p className="text-xs sm:text-sm md:text-base">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-8 md:mt-10">
          <Button asChild>
            <Link href="/gallery">
              View Full Gallery
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Image Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-white/80 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-8 w-8" />
              <span className="sr-only">Close</span>
            </button>

            <div
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between text-white absolute top-1/2 w-full px-4 transform -translate-y-1/2 z-10">
                <button
                  className="bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(
                      (selectedImage - 1 + galleryImages.length) %
                        galleryImages.length
                    );
                  }}
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <button
                  className="bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(
                      (selectedImage + 1) % galleryImages.length
                    );
                  }}
                >
                  <ChevronLeft className="h-6 w-6 transform rotate-180" />
                </button>
              </div>

              {selectedImage !== null && (
                <motion.div
                  key={selectedImage}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-video bg-black/50 rounded-lg overflow-hidden"
                >
                  <Image
                    src={galleryImages[selectedImage].src}
                    alt={galleryImages[selectedImage].alt}
                    fill
                    className="object-contain"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-3 text-white">
                    <h3 className="text-xl">
                      {galleryImages[selectedImage].alt}
                    </h3>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

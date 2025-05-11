"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  X,
  Maximize2,
  ChevronLeft,
  Play,
  Video,
  TvMinimalPlay,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import assets from "@/assets/assets";

// Gallery categories
const categories = [
  { id: "all", name: "All" },
  { id: "campus", name: "Campus" },
  { id: "events", name: "Events" },
  { id: "classes", name: "Classroom Activities" },
  { id: "sports", name: "Sports" },
  { id: "videos", name: "Videos" },
];

// Gallery items
const galleryItems = [
  {
    id: 1,
    image: assets.KMPS1,
    title: "School Main Building",
    category: "campus",
  },
  {
    id: 2,
    image: assets.KMPS2,
    title: "Modern Classrooms",
    category: "classes",
  },
  {
    id: 3,
    image: assets.Library,
    title: "Library Resources",
    category: "campus",
  },
  {
    id: 4,
    image: assets.KMPS3,
    title: "Computer Lab",
    category: "classes",
  },
  {
    id: 5,
    image: assets.KMPS_2,
    title: "Annual Sports Day",
    category: "sports",
  },
  {
    id: 6,
    image: assets.KMPS4,
    title: "Cultural Festival",
    category: "events",
  },
  {
    id: 7,
    image: assets.KMPS5,
    title: "Science Exhibition",
    category: "events",
  },
  {
    id: 8,
    image: assets.KMPS8,
    title: "Outdoor Activities",
    category: "sports",
  },
];

// YouTube videos
const videoItems = [
  {
    id: 101,
    youtubeId: "dQw4w9WgXcQ", // Replace with your actual YouTube video IDs
    title: "School Annual Day Celebration",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    category: "videos",
  },
  {
    id: 102,
    youtubeId: "jclk1_50Cds",
    title: "Science Fair Projects", // Update with your actual video title
    thumbnail: "https://img.youtube.com/vi/jclk1_50Cds/maxresdefault.jpg",
    category: "videos",
  },
  {
    id: 103,
    youtubeId: "Z9NQatne0xg",
    title: "School Campus Tour",
    thumbnail: "https://img.youtube.com/vi/Z9NQatne0xg/maxresdefault.jpg",
    category: "videos",
  },
  {
    id: 104,
    youtubeId: "i5Pd3O_R_-c",
    title: "Educational Tour",
    thumbnail: "https://img.youtube.com/vi/i5Pd3O_R_-c/maxresdefault.jpg",
    category: "videos",
  },
  {
    id: 105,
    youtubeId: "e5avtOHnoxw",
    title: "School Event Highlights", // Update with a more specific title if needed
    thumbnail: "https://img.youtube.com/vi/e5avtOHnoxw/maxresdefault.jpg",
    category: "videos",
  },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  // Filter gallery items based on selected category
  const filteredGallery =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  // Show videos section when "all" or "videos" category is selected
  const showVideos =
    selectedCategory === "all" || selectedCategory === "videos";

  return (
    <main className="bg-background">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[350px] overflow-hidden">
        <Image
          src={assets.KMPS2}
          alt="KMPS School Gallery"
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
            Photo & Video Gallery
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
            <span>Gallery</span>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 lg:px-6">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif font-bold mb-2">
              Explore Our School
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse through our collection of photos and videos showcasing our
              campus facilities, events, and student activities.
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                onClick={() => setSelectedCategory(category.id)}
                className="transition-all duration-300"
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Gallery Grid (if not videos only) */}
          {selectedCategory !== "videos" && (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              <AnimatePresence>
                {filteredGallery.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer group relative"
                    onClick={() => setSelectedImage(item.id)}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="text-white text-center p-4">
                        <Maximize2 className="h-8 w-8 mx-auto mb-2" />
                        <p className="font-medium">{item.title}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

          {/* Videos Section */}
          {showVideos && (
            <>
              <div className="mt-16 mb-8 text-center">
                <h2 className="text-2xl font-serif font-bold mb-2 flex items-center justify-center">
                  <TvMinimalPlay className="mr-2 h-6 w-6 text-primary" />
                  Our YouTube Videos
                </h2>
                <div className="w-20 h-1 bg-primary mx-auto mb-6" />
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Watch our latest videos showcasing school events, student
                  activities, and educational content.
                </p>
              </div>

              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                <AnimatePresence>
                  {videoItems.map((video) => (
                    <motion.div
                      key={video.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer group relative"
                      onClick={() => setSelectedVideo(video.id)}
                    >
                      <div className="relative aspect-video">
                        <Image
                          src={video.thumbnail}
                          alt={video.title}
                          fill
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                          <div className="h-16 w-16 bg-primary/90 rounded-full flex items-center justify-center">
                            <Play className="h-8 w-8 text-white ml-1" />
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium text-lg">{video.title}</h3>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </>
          )}
        </div>
      </section>

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
                  onClick={() => {
                    const currentIndex = filteredGallery.findIndex(
                      (item) => item.id === selectedImage
                    );
                    const prevIndex =
                      (currentIndex - 1 + filteredGallery.length) %
                      filteredGallery.length;
                    setSelectedImage(filteredGallery[prevIndex].id);
                  }}
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <button
                  className="bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors"
                  onClick={() => {
                    const currentIndex = filteredGallery.findIndex(
                      (item) => item.id === selectedImage
                    );
                    const nextIndex =
                      (currentIndex + 1) % filteredGallery.length;
                    setSelectedImage(filteredGallery[nextIndex].id);
                  }}
                >
                  <ChevronLeft className="h-6 w-6 transform rotate-180" />
                </button>
              </div>

              {selectedImage && (
                <motion.div
                  key={selectedImage}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-video bg-black/50 rounded-lg overflow-hidden"
                >
                  <Image
                    src={
                      galleryItems.find((item) => item.id === selectedImage)
                        ?.image || ""
                    }
                    alt={
                      galleryItems.find((item) => item.id === selectedImage)
                        ?.title || ""
                    }
                    fill
                    className="object-contain"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-3 text-white">
                    <h3 className="text-xl">
                      {
                        galleryItems.find((item) => item.id === selectedImage)
                          ?.title
                      }
                    </h3>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Lightbox */}
      <AnimatePresence>
        {selectedVideo !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-white/80 transition-colors"
              onClick={() => setSelectedVideo(null)}
            >
              <X className="h-8 w-8" />
              <span className="sr-only">Close</span>
            </button>

            <div
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedVideo && (
                <motion.div
                  key={selectedVideo}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-lg overflow-hidden"
                >
                  <div className="aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${
                        videoItems.find((item) => item.id === selectedVideo)
                          ?.youtubeId
                      }?autoplay=1`}
                      title={
                        videoItems.find((item) => item.id === selectedVideo)
                          ?.title
                      }
                      className="absolute top-0 left-0 w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-3 text-white">
                    <h3 className="text-xl">
                      {
                        videoItems.find((item) => item.id === selectedVideo)
                          ?.title
                      }
                    </h3>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call To Action */}
      <section className="py-12 bg-primary/5">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="max-w-lg">
              <h3 className="text-2xl font-bold mb-2">Want to see more?</h3>
              <p className="text-muted-foreground">
                Schedule a campus visit to experience our facilities in person
                or check out our YouTube channel.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="px-8">
                <Link href="/contact">Schedule a Visit</Link>
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                <Link
                  href="https://youtube.com/@YourSchoolChannel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube Channel
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

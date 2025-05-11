// "use client";

import Banner from "@/components/home/banner";
import AboutSection from "@/components/home/about-section";
import InfrastructureSection from "@/components/home/infrastructure-section";
import StatsSection from "@/components/home/sats-section";
import GallerySection from "@/components/home/gallery-section";
import TestimonialSection from "@/components/home/testimonial-section";
import Heighlight from "@/components/home/Features";
import CoachingBanner from "@/components/home/coaching-banner";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main>
        <Banner />
        <Heighlight />
        <AboutSection />
        <StatsSection />
        <CoachingBanner /> {/* Added coaching banner here */}
        <InfrastructureSection />
        <GallerySection />
        <TestimonialSection />
      </main>
    </div>
  );
}

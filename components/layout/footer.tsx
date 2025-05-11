"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import assets from "@/assets/assets";
import { MapPin, Phone, Mail, ArrowRight, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-200">
      {/* Main Footer */}
      <div className="container px-4 sm:px-6 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* School Info */}
          <div className="sm:col-span-2 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 overflow-hidden rounded-lg">
                <Image
                  src={assets.KMPSLOGO2}
                  alt="KMPS Logo"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                K.M Pulic School
              </h3>
            </div>
            <p className="text-sm sm:text-base text-gray-400 mb-4">
              KMPS School has been a center of educational excellence since
              1995. We are committed to nurturing young minds and developing
              them into responsible global citizens.
            </p>
            <div className="flex gap-4 mb-6">
              {/* Facebook - using SVG for realistic brand icon */}
              <a
                href="#"
                className="hover:text-blue-500 transition-colors"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 sm:h-6 sm:w-6 fill-current"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* Twitter/X - using SVG for realistic brand icon */}
              <a
                href="#"
                className="hover:text-gray-300 transition-colors"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 sm:h-6 sm:w-6 fill-current"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* Instagram - using SVG for realistic brand icon */}
              <a
                href="#"
                className="hover:text-pink-500 transition-colors"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 sm:h-6 sm:w-6 fill-current"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              {/* YouTube - using SVG for realistic brand icon */}
              <a
                href="#"
                className="hover:text-red-600 transition-colors"
                aria-label="Youtube"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 sm:h-6 sm:w-6 fill-current"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links - Displayed as 2 columns on small screens */}
          <div className="mt-2 sm:mt-0 ">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors flex items-center gap-1 sm:gap-2 text-sm sm:text-base"
                >
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" /> About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/admission"
                  className="hover:text-primary transition-colors flex items-center gap-1 sm:gap-2 text-sm sm:text-base"
                >
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" /> Admissions
                </Link>
              </li>
              <li>
                <Link
                  href="/campus"
                  className="hover:text-primary transition-colors flex items-center gap-1 sm:gap-2 text-sm sm:text-base"
                >
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" /> Campus
                </Link>
              </li>
              <li>
                <Link
                  href="/principal-message"
                  className="hover:text-primary transition-colors flex items-center gap-1 sm:gap-2 text-sm sm:text-base"
                >
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" /> Principal
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-primary transition-colors flex items-center gap-1 sm:gap-2 text-sm sm:text-base"
                >
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" /> Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/coaching"
                  className="hover:text-primary transition-colors flex items-center gap-1 sm:gap-2 text-sm sm:text-base"
                >
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" /> Coaching
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary transition-colors flex items-center gap-1 sm:gap-2 text-sm sm:text-base"
                >
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" /> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mt-2 sm:mt-0">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white">
              Contact Us
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex gap-2 sm:gap-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-sm sm:text-base">
                  123 Education Road, Knowledgepur, Delhi - 110001
                </span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                <span className="text-sm sm:text-base">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                <span className="text-sm sm:text-base">
                  info@kmpsschool.edu.in
                </span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                <span className="text-sm sm:text-base">
                  Mon-Fri: 8:00 AM - 4:00 PM
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="mt-2 sm:mt-0">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white">
              Newsletter
            </h3>
            <p className="text-sm sm:text-base text-gray-400 mb-4">
              Subscribe to our newsletter to receive updates about school events
              and activities.
            </p>
            <div className="flex flex-col gap-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 h-10 sm:h-auto"
              />
              <Button
                type="submit"
                className="w-full h-10 sm:h-auto text-sm sm:text-base"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-4 sm:py-6">
        <div className="container px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
              © {currentYear} KMPS School. All rights reserved.
            </p>
            <div className="flex gap-3 sm:gap-4 mt-3 sm:mt-0">
              <Link
                href="/privacy-policy"
                className="text-gray-500 text-xs sm:text-sm hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-500 text-xs sm:text-sm hover:text-primary transition-colors"
              >
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

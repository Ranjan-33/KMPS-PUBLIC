"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import assets from "@/assets/assets";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);

    // Add scroll effect
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        scrolled ? "shadow-md border-transparent" : "border-border/40"
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group pl-4 md:pl-5">
          <div className="relative overflow-hidden rounded-md ">
            <Image
              src={assets.KMPSLOGO3}
              alt="KMPS Logo"
              width={60}
              height={80}
              className=""
            />
          </div>
          <div className="transition-all duration-300">
            <h1 className="text-xl font-bold relative group-hover:text-primary">
              K.M Public School
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </h1>
            <p className="text-xs text-muted-foreground">
              Excellence in Education
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="hover:bg-primary/10 data-[state=open]:bg-primary/10">
                  About Us
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:grid-cols-2">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary to-primary/70 p-6 no-underline outline-none focus:shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                          href="/about"
                        >
                          <div className="mt-4 mb-2 text-lg font-medium text-white">
                            About KMPS
                          </div>
                          <p className="text-sm leading-tight text-white/90">
                            Learn about our history, vision, and mission
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem
                      href="/principal-message"
                      title="Principal's Message"
                    >
                      Words from our school leader
                    </ListItem>
                    <ListItem href="/director" title=" Director">
                      Word From Director
                    </ListItem>
                    <ListItem href="/achievements" title="Achievements">
                      Our awards and recognition
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/gallery" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "hover:bg-primary/10"
                    )}
                  >
                    Gallery
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/campus" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "hover:bg-primary/10"
                    )}
                  >
                    Campus
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/admission" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "hover:bg-primary/10"
                    )}
                  >
                    Admission
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "hover:bg-primary/10"
                    )}
                  >
                    Contact Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button
            asChild
            variant="default"
            className="ml-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary transition-all duration-300 shadow-sm hover:shadow"
          >
            <Link href="/coaching">Coaching</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="hover:bg-primary/10"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden py-4 px-6 bg-background border-t animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-4">
            {/* About Us Dropdown */}
            <div className="space-y-2">
              <button
                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                className="flex justify-between items-center w-full text-left text-foreground hover:text-primary transition-colors py-2 px-3 rounded-md hover:bg-primary/5"
              >
                <span>About Us</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    aboutDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {aboutDropdownOpen && (
                <div className="pl-4 space-y-2 border-l-2 border-primary/20 ml-3 animate-in slide-in-from-top duration-200">
                  <Link
                    href="/about"
                    className="block text-foreground hover:text-primary transition-colors py-2 px-3 rounded-md hover:bg-primary/5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About KMPS
                  </Link>
                  <Link
                    href="/principal-message"
                    className="block text-foreground hover:text-primary transition-colors py-2 px-3 rounded-md hover:bg-primary/5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Principal's Message
                  </Link>
                  <Link
                    href="/director"
                    className="block text-foreground hover:text-primary transition-colors py-2 px-3 rounded-md hover:bg-primary/5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Director
                  </Link>
                  <Link
                    href="/achievements"
                    className="block text-foreground hover:text-primary transition-colors py-2 px-3 rounded-md hover:bg-primary/5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Achievements
                  </Link>
                </div>
              )}
            </div>

            {/* Regular Links */}
            <Link
              href="/gallery"
              className="text-foreground hover:text-primary transition-colors py-2 px-3 rounded-md hover:bg-primary/5"
              onClick={() => setMobileMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/campus"
              className="text-foreground hover:text-primary transition-colors py-2 px-3 rounded-md hover:bg-primary/5"
              onClick={() => setMobileMenuOpen(false)}
            >
              Campus
            </Link>
            <Link
              href="/admission"
              className="text-foreground hover:text-primary transition-colors py-2 px-3 rounded-md hover:bg-primary/5"
              onClick={() => setMobileMenuOpen(false)}
            >
              Admission
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-primary transition-colors py-2 px-3 rounded-md hover:bg-primary/5"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Button
              asChild
              className="w-full bg-gradient-to-r from-primary to-primary/80 hover:opacity-90 transition-opacity"
            >
              <Link href="/coaching" onClick={() => setMobileMenuOpen(false)}>
                Coaching
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

import { ReactNode } from "react";

interface ListItemProps {
  className?: string;
  title: string;
  children: ReactNode;
  href: string;
  [key: string]: any;
}

const ListItem = ({
  className = "",
  title,
  children,
  href,
  ...props
}: ListItemProps) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-primary/10 hover:text-primary focus:bg-accent focus:text-accent-foreground hover:scale-[1.02]",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};

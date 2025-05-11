"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronRight, Send, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import assets from "@/assets/assets";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// Form validation schema
const formSchema = z.object({
  studentName: z.string().min(3, { message: "Name is required" }),
  parentName: z.string().min(3, { message: "Parent name is required" }),
  classForAdmission: z.string().min(1, { message: "Please select a class" }),
  phone: z.string().min(10, { message: "Valid phone number is required" }),
  email: z.string().email({ message: "Valid email is required" }),
  address: z.string().min(5, { message: "Address is required" }),
  // Removed enquiryType field
  message: z.string().optional(),
});

export default function AdmissionPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form hook
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      studentName: "",
      parentName: "",
      classForAdmission: "",
      phone: "",
      email: "",
      address: "",
      // Removed enquiryType
      message: "",
    },
  });

  // Submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Here you would normally send the data to your backend
    // For now, we'll just simulate a successful submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  }

  return (
    <main className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[350px] overflow-hidden">
        <Image
          src={assets.KMPS1}
          alt="KMPS School Admission"
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
            Admission Enquiry
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
            <span>Admission</span>
          </motion.div>
        </div>
      </section>

      {/* Admission Form Section */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left column - Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Join K.M Public School
              </h2>
              <div className="w-20 h-1 bg-primary mb-8"></div>

              <div className="space-y-6 text-muted-foreground">
                <p>
                  Thank you for your interest in K.M Public School. Please fill
                  out the admission enquiry form with the required details, and
                  our admission team will contact you shortly.
                </p>

                <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Admission Process
                  </h3>
                  <ol className="list-decimal ml-5 space-y-2">
                    <li>Submit the admission enquiry form</li>
                    <li>
                      Admission team will contact you for document verification
                    </li>
                    <li>Entrance assessment (if applicable)</li>
                    <li>Interview with the principal</li>
                    <li>Fee payment and confirmation of admission</li>
                  </ol>
                </div>

                <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Contact Information
                  </h3>
                  <p className="mb-2">
                    For any admission-related queries, please contact:
                  </p>
                  <p className="font-medium text-foreground">+91 1234567890</p>
                  <p className="font-medium text-foreground">
                    admission@kmps.edu.in
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-xl shadow-sm border p-6 md:p-8"
            >
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    Enquiry Submitted!
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-md">
                    Thank you for your interest in K.M Public School. Our
                    admission team will contact you shortly to guide you through
                    the next steps.
                  </p>
                  <Button asChild>
                    <Link href="/">Return to Homepage</Link>
                  </Button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold mb-6">
                    Admission Enquiry Form
                  </h3>

                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="studentName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Student's Name*</FormLabel>
                              <FormControl>
                                <Input placeholder="Full name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="parentName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Parent's Name*</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Parent/Guardian name"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="classForAdmission"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Class for Admission*</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select class" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="Nursery">
                                    Nursery
                                  </SelectItem>
                                  <SelectItem value="LKG">LKG</SelectItem>
                                  <SelectItem value="UKG">UKG</SelectItem>
                                  <SelectItem value="Class 1">
                                    Class 1
                                  </SelectItem>
                                  <SelectItem value="Class 2">
                                    Class 2
                                  </SelectItem>
                                  <SelectItem value="Class 3">
                                    Class 3
                                  </SelectItem>
                                  <SelectItem value="Class 4">
                                    Class 4
                                  </SelectItem>
                                  <SelectItem value="Class 5">
                                    Class 5
                                  </SelectItem>
                                  <SelectItem value="Class 6">
                                    Class 6
                                  </SelectItem>
                                  <SelectItem value="Class 7">
                                    Class 7
                                  </SelectItem>
                                  <SelectItem value="Class 8">
                                    Class 8
                                  </SelectItem>
                                  <SelectItem value="Class 9">
                                    Class 9
                                  </SelectItem>
                                  <SelectItem value="Class 10">
                                    Class 10
                                  </SelectItem>
                                  <SelectItem value="Class 11">
                                    Class 11
                                  </SelectItem>
                                  <SelectItem value="Class 12">
                                    Class 12
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number*</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Contact number"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address*</FormLabel>
                            <FormControl>
                              <Input placeholder="Your email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Address*</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Your complete address"
                                rows={3}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Additional Information (Optional)
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Any specific requirements or questions?"
                                rows={3}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" className="w-full">
                        <Send className="h-4 w-4 mr-2" />
                        Submit Enquiry
                      </Button>
                    </form>
                  </Form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary/5 py-16">
        <div className="container max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="max-w-xl">
              <h2 className="text-2xl font-bold mb-4">
                Want to visit our campus?
              </h2>
              <p className="text-muted-foreground">
                Experience our state-of-the-art facilities and meet our faculty
                members. Schedule a campus tour today.
              </p>
            </div>
            <Button size="lg" asChild>
              <Link href="/contact">Schedule a Visit</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

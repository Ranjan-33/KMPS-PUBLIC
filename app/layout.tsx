import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { LoadingProvider } from "@/context/LoadingContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "K.M Public School - Excellence in Education",
  description:
    "KM Public School School provides quality education focusing on academic excellence and character development since 2016.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className)} suppressHydrationWarning>
        <LoadingProvider>
          <div className="flex flex-col min-h-screen max-w-full overflow-x-hidden">
            <Header />
            <main className="w-full">{children}</main>
            <Footer />
          </div>
        </LoadingProvider>
      </body>
    </html>
  );
}

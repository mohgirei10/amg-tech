import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Use the @ alias to safely import the Sidebar
import Sidebar from "@/app/components/Sidebar";

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AMG-TECH | Portfolio",
  description: "Personal portfolio and web development projects by Mohammed Girei",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className={`${montserrat.className} min-h-full flex flex-col bg-white dark:bg-[#0a0a0a]`}>
        
        <Sidebar />

        {/* 
          pb-24: Adds space at bottom for mobile tab bar
          md:pb-0: Removes bottom space on desktop
          md:pl-32: Pushes content 128px right on desktop to clear your w-32 sidebar 
        */}
        <main className="pb-12 md:pb-0 md:pl-32 min-h-screen">
          {children}
        </main>
        
      </body>
    </html>
  );
}
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Hero from "../component/hero";
import SuccessSection from "@/component/Success";
import FeaturesSection from "@/component/features";
import WhatIsTotc from "@/component/totc-feature";
import ClassroomFeatures from "@/component/classroom";
import ClassroomInterfaceFeature from "@/component/classroom-interface";
import ToolsSection from "@/component/tools";
import QuizShowcase from "@/component/quix";
import ManagementShowcase from "@/component/class-management";
import DiscussionShowcase from "@/component/discussion";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen items-center justify-center bg-zinc-50 font-sans`}
    >
      <main className="flex min-h-screen w-full  flex-col items-center justify-between sm:items-start">
        <Hero />
        <SuccessSection />
        <FeaturesSection />
        <WhatIsTotc />
        <ClassroomFeatures />
        <ClassroomInterfaceFeature />
        <ToolsSection />
        <QuizShowcase />
        <ManagementShowcase />
        <DiscussionShowcase />
      </main>
      
    </div>
  );
}
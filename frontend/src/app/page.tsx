import Header from "@/components/sections/Header";
import HeroCarousel from "@/components/sections/HeroCarousel";
import ExamCarousel from "@/components/sections/ExamCarousel";
import CourseCarousel from "@/components/sections/CourseCarousel";
import FacultyCarousel from "@/components/sections/FacultyCarousel";
import StatsSection from "@/components/sections/StatsSection";
import SuccessCarousel from "@/components/sections/SuccessCarousel";
import ResourcesSection from "@/components/sections/ResourcesSection";
import EnquirySection from "@/components/sections/EnquirySection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroCarousel />
        <ExamCarousel />
        <CourseCarousel />
        <StatsSection />
        <FacultyCarousel />
        <SuccessCarousel />
        <ResourcesSection />
        <EnquirySection />
      </main>
      <Footer />
    </>
  );
}
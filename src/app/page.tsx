import HeroSection from "@/components/home/HeroSection";
import MaliTouchSection from "@/components/home/MaliTouchSection";
import VideoSection from "@/components/home/VideoSection";
import LessonsPreview from "@/components/home/LessonsPreview";
import WhyHiriketiya from "@/components/home/WhyHiriketiya";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <MaliTouchSection />
      <VideoSection />
      <LessonsPreview />
      <WhyHiriketiya />
      <TestimonialsSection />
      <CTASection />
    </>
  );
};

export default Home;

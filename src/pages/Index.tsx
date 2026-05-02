import HeroSection from "@/components/HeroSection";
import AppDownloadCard from "@/components/AppDownloadCard";
import PopularGames from "@/components/PopularGames";
import ComingSoon from "@/components/ComingSoon";
import GameCategories from "@/components/GameCategories";
import WorldClassService from "@/components/WorldClassService";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1a0a2e] text-white overflow-x-hidden">
      <HeroSection />
      <AppDownloadCard />
      <PopularGames />
      <ComingSoon />
      <GameCategories />
      <WorldClassService />
      <Footer />
    </div>
  );
};

export default Index;

import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative w-full">
      {/* Hero Image */}
      <div className="relative w-full">
        <img
          src="/images/hero-woman.jpg"
          alt="Lucky Strike"
          className="w-full h-auto object-cover"
        />
        {/* Lucky Strike Logo overlay at top */}
        <div className="absolute top-4 left-0 right-0 flex justify-center">
          <img
            src="/images/lucky-strike-logo.jpg"
            alt="Lucky Strike"
            className="w-[70%] max-w-[300px] h-auto"
            style={{ imageRendering: "auto", filter: "contrast(1.1) sharpen(1)" }}
          />
        </div>
      </div>

      {/* Download Now Button */}
      <div className="relative -mt-8 flex justify-center z-10">
        <button className="relative px-12 py-5 bg-gradient-to-b from-[#2a1a4e] to-[#1a0a2e] border-2 border-purple-500/60 rounded-full text-white font-bold text-2xl tracking-wider shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_50px_rgba(168,85,247,0.6)] transition-all">
          <ChevronLeft className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-300" />
          <span className="block leading-tight">DOWNLOAD</span>
          <span className="block leading-tight">NOW</span>
          <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-300" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

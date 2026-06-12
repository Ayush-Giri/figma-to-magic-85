// import { ChevronLeft, ChevronRight } from "lucide-react";

// const HeroSection = () => {
//   return (
//     <section className="relative w-full">
//       {/* Hero Image */}
//       <div className="relative w-full">
//         <img
//           src="/images/hero-woman.jpg"
//           alt="Lucky Strike"
//           className="w-full h-auto object-cover"
//         />
//         {/* Lucky Strike Logo overlay at top */}
//         <div className="absolute top-4 left-0 right-0 flex justify-center">
//           <img
//             src="/images/lucky-strike-logo.png"
//             alt="Lucky Strike"
//             className="w-[70%] max-w-[300px] h-auto drop-shadow-[0_0_20px_rgba(234,179,8,0.5)]"
//           />
//         </div>
//       </div>

//       {/* Download Now Button */}
//       <div className="relative -mt-8 flex justify-center z-10">
//         <a href="https://play.luckystrike.games/game/luckystrike777_pc/index.html" target="_blank" rel="noopener noreferrer" className="relative inline-flex flex-col items-center justify-center text-center px-12 py-5 bg-gradient-to-b from-[#2a1a4e] to-[#1a0a2e] border-2 border-purple-500/60 rounded-full text-white font-bold text-2xl tracking-wider shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_50px_rgba(168,85,247,0.6)] transition-all no-underline">
//           <ChevronLeft className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-300" />
//           <span className="leading-tight">PLAY</span>
//           <span className="leading-tight">NOW</span>
//           <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-300" />
//         </a>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;




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
            src="/images/lucky-strike-logo.png"
            alt="Lucky Strike"
            className="w-[70%] max-w-[300px] h-auto drop-shadow-[0_0_20px_rgba(234,179,8,0.5)]"
          />
        </div>
      </div>

      {/* Play Now Button */}
      <div className="relative -mt-8 flex justify-center z-10">
        <a
          href="https://play.luckystrike.games/game/luckystrike777_pc/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex flex-col items-center justify-center text-center px-14 py-5 rounded-full font-black text-2xl tracking-widest no-underline transition-all duration-300
            bg-gradient-to-b from-[#ffe066] via-[#f5a800] to-[#b8600a]
            text-[#3a1a00]
            border-4 border-[#ffe066]
            shadow-[0_0_20px_rgba(255,180,0,0.7),0_0_50px_rgba(255,140,0,0.4),inset_0_2px_4px_rgba(255,255,255,0.3)]
            hover:shadow-[0_0_35px_rgba(255,200,0,0.9),0_0_80px_rgba(255,140,0,0.6),inset_0_2px_4px_rgba(255,255,255,0.3)]
            hover:from-[#ffec80] hover:via-[#ffb700] hover:to-[#c97000]
            hover:scale-105"
        >
          <ChevronLeft className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#7a3a00]" />
          <span className="leading-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">PLAY</span>
          <span className="leading-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">NOW</span>
          <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#7a3a00]" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
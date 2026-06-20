import React from "react";
import { Download, ArrowLeft, Image as ImageIcon, Video as VideoIcon } from "lucide-react";
import { Link } from "react-router-dom";

const mediaFiles = [
  "WhatsApp Image 2026-06-20 at 8.51.10 AM (1).jpeg",
  "WhatsApp Image 2026-06-20 at 8.51.10 AM (10).jpeg",
  "WhatsApp Image 2026-06-20 at 8.51.10 AM (2).jpeg",
  "WhatsApp Image 2026-06-20 at 8.51.10 AM (3).jpeg",
  "WhatsApp Image 2026-06-20 at 8.51.10 AM (4).jpeg",
  "WhatsApp Image 2026-06-20 at 8.51.10 AM (5).jpeg",
  "WhatsApp Image 2026-06-20 at 8.51.10 AM (6).jpeg",
  "WhatsApp Image 2026-06-20 at 8.51.10 AM (7).jpeg",
  "WhatsApp Image 2026-06-20 at 8.51.10 AM (8).jpeg",
  "WhatsApp Image 2026-06-20 at 8.51.10 AM (9).jpeg",
  "WhatsApp Image 2026-06-20 at 8.51.10 AM.jpeg",
  "WhatsApp Image 2026-06-20 at 8.51.11 AM (1).jpeg",
  "WhatsApp Image 2026-06-20 at 8.51.11 AM (10).jpeg",
  "WhatsApp Image 2026-06-20 at 8.51.11 AM (11).jpeg",
  "WhatsApp Image 2026-06-20 at 8.51.11 AM (12).jpeg",
  "WhatsApp Image 2026-06-20 at 8.51.11 AM (13).jpeg",
  "WhatsApp Image 2026-06-20 at 8.51.11 AM (14).jpeg",
  "WhatsApp Image 2026-06-20 at 8.51.11 AM (15).jpeg",
  "WhatsApp Image 2026-06-20 at 8.51.11 AM (16).jpeg",
  "WhatsApp Image 2026-06-20 at 8.51.11 AM (17).jpeg",
  "WhatsApp Image 2026-06-20 at 8.51.11 AM (18).jpeg",
  "WhatsApp Image 2026-06-20 at 8.51.11 AM (19).jpeg",
  "WhatsApp Image 2026-06-20 at 8.51.11 AM (2).jpeg",
  "WhatsApp Image 2026-06-20 at 8.51.11 AM (3).jpeg",
  "WhatsApp Image 2026-06-20 at 8.51.11 AM (4).jpeg",
  "WhatsApp Image 2026-06-20 at 8.51.11 AM (5).jpeg",
  "WhatsApp Image 2026-06-20 at 8.51.11 AM (6).jpeg",
  "WhatsApp Image 2026-06-20 at 8.51.11 AM (7).jpeg",
  "WhatsApp Image 2026-06-20 at 8.51.11 AM (8).jpeg",
  "WhatsApp Image 2026-06-20 at 8.51.11 AM (9).jpeg",
  "WhatsApp Image 2026-06-20 at 8.51.11 AM.jpeg",
  "WhatsApp Image 2026-06-20 at 8.51.12 AM (1).jpeg",
  "WhatsApp Image 2026-06-20 at 8.51.12 AM (2).jpeg",
  "WhatsApp Image 2026-06-20 at 8.51.12 AM (3).jpeg",
  "WhatsApp Image 2026-06-20 at 8.51.12 AM (4).jpeg",
  "WhatsApp Image 2026-06-20 at 8.51.12 AM.jpeg",
  "WhatsApp Video 2026-06-20 at 8.51.09 AM (1).mp4",
  "WhatsApp Video 2026-06-20 at 8.51.09 AM.mp4"
];

const MarketingMaterials = () => {
  return (
    <div className="min-h-screen bg-[#0a0510] text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full bg-[#110a20]/90 backdrop-blur-md border-b border-[#d4a017]/30">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-400 hover:text-[#ffd700] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold tracking-wide">Back to Home</span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-b from-[#d4a017]/30 to-[#d4a017]/10 border border-[#ffd700]/40 flex items-center justify-center">
              <span className="text-[#ffd700] font-bold text-lg">M</span>
            </div>
            <h1 className="text-lg font-extrabold tracking-widest uppercase bg-gradient-to-r from-[#ffd700] via-[#fff4c8] to-[#d4a017] bg-clip-text text-transparent">
              Marketing
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold tracking-wide mb-2">Promotional Assets</h2>
          <p className="text-gray-400">Download official Lucky Strike images and videos for marketing purposes.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-6">
          {mediaFiles.map((file, idx) => {
            const isVideo = file.endsWith(".mp4");
            const filePath = `/images/lucky_strike_marketing/${file}`;
            
            return (
              <div 
                key={idx} 
                className="group relative flex flex-col bg-gradient-to-b from-[#221638] via-[#1a1030] to-[#110a20] rounded-2xl overflow-hidden border border-[#d4a017]/30 hover:border-[#ffd700]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,160,23,0.15)]"
              >
                {/* Media Preview Container */}
                <div className="relative aspect-square w-full bg-black/50 overflow-hidden">
                  {isVideo ? (
                    <video 
                      src={filePath} 
                      className="w-full h-full object-cover" 
                      controls 
                      controlsList="nodownload"
                    />
                  ) : (
                    <img 
                      src={filePath} 
                      alt={`Marketing material ${idx + 1}`} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      loading="lazy"
                    />
                  )}
                  
                  {/* Badge */}
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10 flex items-center gap-1 sm:gap-1.5">
                    {isVideo ? <VideoIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-400" /> : <ImageIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" />}
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-gray-200">
                      {isVideo ? "Video" : "Image"}
                    </span>
                  </div>
                </div>

                {/* Footer & Download Button */}
                <div className="p-2 sm:p-4 mt-auto">
                  <a
                    href={filePath}
                    download={file}
                    className="group/btn relative w-full flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 sm:py-2.5 rounded-xl no-underline
                      overflow-hidden
                      bg-gradient-to-b from-[#d4a017]/20 to-[#d4a017]/5
                      border border-[#ffd700]/40
                      hover:bg-[#d4a017]/30
                      active:scale-[0.98]
                      transition-all duration-300"
                  >
                    <Download className="w-3 h-3 sm:w-4 sm:h-4 text-[#ffd700] group-hover/btn:-translate-y-0.5 transition-transform duration-300 drop-shadow-[0_0_4px_rgba(255,215,0,0.4)]" />
                    <span className="text-[10px] sm:text-sm font-bold tracking-wider uppercase bg-gradient-to-r from-[#ffd700] via-[#fff4c8] to-[#d4a017] bg-clip-text text-transparent">
                      Download
                    </span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default MarketingMaterials;

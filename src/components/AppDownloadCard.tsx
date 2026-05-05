import { Star, Monitor } from "lucide-react";

const AppDownloadCard = () => {
  return (
    <section className="px-4 py-8">
      {/* App Info Card */}
      <div className="bg-gradient-to-br from-[#2d1b69] to-[#1a0a3e] rounded-2xl p-5 border border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
        <div className="flex gap-4 mb-4">
          {/* Phone mockup */}
          <div className="flex-shrink-0 w-[120px]">
            <img
              src="/images/lucky-strike-logo.png"
              alt="Lucky Strike App"
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold italic text-white mb-1">LUCKY STRIKE</h2>
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-yellow-400 text-xs ml-1">1,615,450+ Download</span>
            </div>
            <p className="text-gray-300 text-xs leading-relaxed">
              The best online entertainment platform on the whole network.
            </p>
            <p className="text-gray-300 text-xs leading-relaxed mt-1">
              Lucky Strike! APP gets billions of gifts every day
            </p>
          </div>
        </div>

        {/* Platform Icons */}
        <div className="flex justify-center gap-10 mt-4 mb-2">
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24a11.463 11.463 0 00-8.94 0L5.65 5.67c-.19-.29-.58-.38-.87-.2-.28.18-.37.56-.22.83L6.4 9.48A10.78 10.78 0 002 18h20a10.78 10.78 0 00-4.4-8.52zM7 15.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm10 0a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z"/>
              </svg>
            </div>
            <span className="text-[10px] text-gray-400 uppercase tracking-wider">Android</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
            </div>
            <span className="text-[10px] text-gray-400 uppercase tracking-wider">iOS</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 flex items-center justify-center">
              <Monitor className="w-6 h-6 text-white" />
            </div>
            <span className="text-[10px] text-gray-400 uppercase tracking-wider">H5</span>
          </div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex gap-3 mt-6 justify-center">
        <a href="https://play.luckystrike.games/game/luckystrike777_pc/index.html" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 border border-cyan-400/50 rounded-full text-cyan-300 text-sm font-semibold hover:bg-cyan-400/10 transition-colors">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 20V4M12 4l6 6M12 4L6 10" />
          </svg>
          PLAY NOW
        </a>
        <a href="https://luckystrike.games:777/luckystrike.html" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full text-white text-sm font-semibold hover:from-teal-500 hover:to-cyan-500 transition-colors">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
          </svg>
          DOWNLOAD iOS
        </a>
      </div>
    </section>
  );
};

export default AppDownloadCard;

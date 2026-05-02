import { Star, Smartphone, Monitor } from "lucide-react";
import { SiApple, SiAndroid } from "react-icons/si";

const AppDownloadCard = () => {
  return (
    <section className="px-4 py-8">
      {/* App Info Card */}
      <div className="bg-gradient-to-br from-[#2d1b69] to-[#1a0a3e] rounded-2xl p-5 border border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
        <div className="flex gap-4 mb-4">
          {/* Phone mockup */}
          <div className="flex-shrink-0 w-[120px]">
            <img
              src="/images/phone-mockup.jpg"
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
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-current">
                <path d="M17.523 2c.095.009.19.022.285.038.577.102 1.09.362 1.526.721.42.347.766.778 1.028 1.263a5.92 5.92 0 0 1 .56 1.552c.13.56.195 1.138.195 1.72 0 .582-.065 1.16-.195 1.72a5.92 5.92 0 0 1-.56 1.552c-.262.485-.608.916-1.028 1.263-.437.36-.95.62-1.526.721a3.578 3.578 0 0 1-.285.038H6.477a3.578 3.578 0 0 1-.285-.038c-.577-.102-1.09-.362-1.526-.721a4.147 4.147 0 0 1-1.028-1.263 5.92 5.92 0 0 1-.56-1.552A6.832 6.832 0 0 1 2.883 7.294c0-.582.065-1.16.195-1.72a5.92 5.92 0 0 1 .56-1.552c.262-.485.608-.916 1.028-1.263.437-.36.95-.62 1.526-.721A3.578 3.578 0 0 1 6.477 2h11.046z"/>
              </svg>
            </div>
            <span className="text-[10px] text-gray-400 uppercase tracking-wider">Android</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-current">
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
        <button className="flex items-center gap-2 px-6 py-3 border border-cyan-400/50 rounded-full text-cyan-300 text-sm font-semibold hover:bg-cyan-400/10 transition-colors">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 20V4M12 4l6 6M12 4L6 10" />
          </svg>
          ON-LINE
        </button>
        <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full text-white text-sm font-semibold hover:from-teal-500 hover:to-cyan-500 transition-colors">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
          </svg>
          DOWNLOAD GAME
        </button>
      </div>
    </section>
  );
};

export default AppDownloadCard;

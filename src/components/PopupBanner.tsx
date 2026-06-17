import { useState, useEffect } from "react";

const PopupBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      <div className="relative max-w-sm w-full">
        {/* X Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute -top-4 -right-4 z-10 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-lg hover:bg-gray-200 transition-all"
        >
          ✕
        </button>

        {/* Popup Image */}
        <img
          src="/images/popu.jpeg"
          alt="Popup Banner"
          className="w-full h-auto rounded-xl shadow-2xl"
        />
      </div>
    </div>
  );
};

export default PopupBanner;
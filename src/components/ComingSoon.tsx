const comingGames = [
  "/images/coming-wolf.jpg",
  "/images/coming-slots.jpg",
  "/images/wolf-gold.jpg",
  "/images/coming-zeus.jpg",
  "/images/ganesha-fortune.jpg",
  "/images/coming-fire.jpg",
  "/images/gates-of-olympus.jpg",
];

const ComingSoon = () => {
  return (
    <section className="py-8 bg-gradient-to-b from-[#0f0620] to-[#1a0a2e]">
      {/* Heading */}
      <div className="text-center mb-4 px-4">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-yellow-400 text-xs">✦</span>
          <h3 className="text-lg font-bold text-white tracking-wider">COMING SOON</h3>
          <span className="text-yellow-400 text-xs">✦</span>
        </div>
        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent mx-auto mb-3" />
        <p className="text-gray-400 text-xs leading-relaxed max-w-[300px] mx-auto">
          Experience the most thrilling slot adventure. High RTP, instant payouts, and premium VIP treatment.
        </p>
      </div>

      {/* Scrollable game images */}
      <div className="px-4">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3 py-2">
          {comingGames.map((img, i) => (
            <div key={i} className="aspect-[3/4] overflow-hidden rounded-xl">
              <img
                src={img}
                alt="Coming soon game"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Gold coins decoration */}
      <div className="flex justify-center gap-2 mt-4 px-4">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="w-6 h-6 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700 shadow-[0_0_8px_rgba(234,179,8,0.5)]"
          />
        ))}
      </div>
    </section>
  );
};

export default ComingSoon;

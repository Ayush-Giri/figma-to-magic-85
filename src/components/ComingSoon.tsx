const comingGames = [
  { name: "Life of Luxury", image: "/images/life_of_luxury.png" },
  { name: "Super Ball Keno", image: "/images/super_ball_keno.png" },
  { name: "Hexa Keno", image: "/images/hexa_keno.png" },
  { name: "Cash Wheel", image: "/images/cash_wheel.png" },
  { name: "Simple Dollar", image: "/images/simple_dollar.png" },
  { name: "Michael Jackson", image: "/images/michael_jackson.png" },
  { name: "Zeus II", image: "/images/zeus_II.png" },
  { name: "Zeus III", image: "/images/zeus_III.png" },
  { name: "Bull's Bounty", image: "/images/bulls_bounty.png" },
  { name: "President 45", image: "/images/president_45.png" },
  { name: "4th of July", image: "/images/4th_of_july.png" },
  { name: "Crazy Monkey", image: "/images/crazy_monkey.png" },
  { name: "Farm of Fortune", image: "/images/farm_of_fortune.png" },
  { name: "Monopoly", image: "/images/monopoly.png" },
  { name: "Sevens Bonanza", image: "/images/sevens_bonzona.png" },
  { name: "Warrior's Bounty", image: "/images/warriors_bounty.png" },
  { name: "Wild Tavern", image: "/images/wild_tavren.png" },
  { name: "Spooky Riches", image: "/images/spooky_riches.png" },
  { name: "Panda Vs Alien", image: "/images/panda_vs_alien.png" },
  { name: "Ocean Monsters", image: "/images/ocean_monsters.png" },
  { name: "King of Leopard", image: "/images/king_of_leopard.png" },
];

const ComingSoon = () => {
  return (
    <section className="py-8 bg-gradient-to-b from-[#0f0620] to-[#1a0a2e]">
      {/* Heading */}
      <div className="text-center mb-4 px-4">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-yellow-400 text-xs">✦</span>
          <h3 className="text-lg font-bold text-white tracking-wider">LUCKY STRIKE PLATFORMS</h3>
          <span className="text-yellow-400 text-xs">✦</span>
        </div>
        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent mx-auto mb-3" />
        <p className="text-gray-400 text-xs leading-relaxed max-w-[300px] mx-auto">
          Experience the most thrilling slot adventure. High RTP, instant payouts, and premium VIP treatment.
        </p>
      </div>

      {/* Game images grid */}
      <div className="px-4">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2 sm:gap-3 py-2">
          {comingGames.map((game, i) => (
            <div key={i} className="group flex flex-col items-center">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-xl">
                <img
                  src={game.image}
                  alt={game.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <p className="text-[8px] sm:text-[9px] text-gray-400 text-center mt-1 uppercase tracking-wider leading-tight truncate w-full">{game.name}</p>
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

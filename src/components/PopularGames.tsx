import { useState } from "react";

const games = [
  { name: "GATES OF OLYMPUS", image: "/images/gates-of-olympus.jpg", badge: "HOT" },
  { name: "GANESHA FORTUNE", image: "/images/ganesha-fortune.jpg" },
  { name: "RISE OF RA", image: "/images/rise-of-ra.jpg", badge: "NEW" },
  { name: "DRAGON HATCH", image: "/images/dragon-hatch.jpg" },
  { name: "WOLF GOLD", image: "/images/wolf-gold.jpg", badge: "LIVE" },
];

type RoleType = "PLAYER" | "AGENT";

const PopularGames = () => {
  const [role, setRole] = useState<RoleType>("PLAYER");

  return (
    <section className="px-4 py-6 bg-[#0f0620]">
      {/* Player / Agent Toggle */}
      <div className="flex items-center justify-center mb-4">
        <div className="flex bg-[#1a0a2e] rounded-full p-1 border border-purple-500/30">
          {(["PLAYER", "AGENT"] as RoleType[]).map((r) => (
            <button
              key={r}
              onClick={() => setRole(r)}
              className={`px-6 py-1.5 text-xs font-bold rounded-full transition-all ${
                role === r
                  ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-300">Popular Games</h3>
        <span className="text-xs text-yellow-400 cursor-pointer hover:underline">VIEW ALL &gt;</span>
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-5 gap-2">
        {games.map((game) => (
          <div key={game.name} className="relative group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={game.image}
                alt={game.name}
                className="w-full aspect-square object-cover rounded-lg group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
              {game.badge && (
                <span className={`absolute top-1 right-1 text-[8px] font-bold px-1.5 py-0.5 rounded-full ${
                  game.badge === "HOT" ? "bg-red-500" :
                  game.badge === "NEW" ? "bg-green-500" :
                  "bg-red-600"
                } text-white`}>
                  {game.badge}
                </span>
              )}
            </div>
            <p className="text-[8px] text-gray-400 text-center mt-1 uppercase tracking-wider leading-tight">
              {game.name}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom casino images row */}
      <div className="grid grid-cols-5 gap-2 mt-3">
        {[
          "/images/roulette.jpg",
          "/images/casino-red.jpg",
          "/images/casino-floor.jpg",
          "/images/poker-chips.jpg",
          "/images/board-game.jpg",
        ].map((img, i) => (
          <div key={i} className="overflow-hidden rounded-lg cursor-pointer">
            <img
              src={img}
              alt="Casino game"
              className="w-full aspect-square object-cover rounded-lg hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularGames;

import { Gamepad2, CreditCard, Fish, CircleDot, Hash } from "lucide-react";

const categories = [
  { name: "Video Game", icon: Gamepad2 },
  { name: "Cards", icon: CreditCard },
  { name: "Fishing", icon: Fish },
  { name: "Slots", icon: CircleDot },
  { name: "Keno", icon: Hash },
];

const GameCategories = () => {
  return (
    <section className="px-4 py-8 bg-[#1a0a2e]">
      <h4 className="text-center text-xs font-semibold text-gray-400 uppercase tracking-[0.2em] mb-6">
        Game Categories
      </h4>
      <div className="flex justify-between max-w-[320px] mx-auto">
        {categories.map((cat) => (
          <div key={cat.name} className="flex flex-col items-center gap-2 cursor-pointer group">
            <div className="w-12 h-12 rounded-2xl bg-[#2a1a4e] border border-purple-500/20 flex items-center justify-center group-hover:border-purple-400/50 transition-colors">
              <cat.icon className="w-5 h-5 text-purple-300" />
            </div>
            <span className="text-[9px] text-gray-500 text-center">{cat.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GameCategories;

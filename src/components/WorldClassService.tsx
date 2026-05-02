import { Zap, Shield, Gift } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Ultra-Fast",
    desc: "Deposits and withdrawals processed in under 60 seconds.",
  },
  {
    icon: Shield,
    title: "Safety and Worry",
    desc: "Advanced encryption ensuring your data is never compromised.",
  },
  {
    icon: Gift,
    title: "Waive Commission",
    desc: "Zero fees on your first 10 withdrawals every single month.",
  },
];

const WorldClassService = () => {
  return (
    <section className="px-4 py-8 bg-[#1a0a2e]">
      <h4 className="text-center text-sm font-bold text-white mb-1">World-Class Service</h4>
      <p className="text-center text-[10px] text-gray-500 mb-6 max-w-[280px] mx-auto leading-relaxed">
        We prioritize your experience with top-tier security and lightning-fast transactions.
      </p>
      <div className="flex justify-between gap-3">
        {services.map((svc) => (
          <div key={svc.title} className="flex-1 flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-[#2a1a4e] border border-purple-500/20 flex items-center justify-center mb-2">
              <svc.icon className="w-4 h-4 text-purple-300" />
            </div>
            <h5 className="text-[10px] font-bold text-white mb-1">{svc.title}</h5>
            <p className="text-[8px] text-gray-500 leading-relaxed">{svc.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorldClassService;

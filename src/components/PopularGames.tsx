import { useState, useEffect, useRef } from "react";

const games = [
  { 
    name: "LUCKY STRIKE",
    image: "/images/lc.jpeg",
    playerLink: "https://play.luckystrike.games/game/luckystrike777_pc/index.html",
    agentLink: "https://luckystrike.games:8781/"
  },
  { 
    name: "JUWA",
    image: "/images/juwa-logo.jpg",
    playerLink: "https://dl.juwa777.com/",
    agentLink: "https://ht.juwa777.com/login"
  },
  {
    name: "FIRE KIRIN",
    image: "/images/firekirin-logo.jpg",
    playerLink: "http://start.firekirin.xyz:8580/index.html",
    agentLink: "https://firekirin.xyz:8888/default.aspx?638442096968948430"
  },
  {
    name: "ORION STARS",
    image: "/images/orionstars-logo.jpg",
    playerLink: "http://start.orionstars.vip:8580/index.html",
    agentLink: "https://orionstars.vip:8781/Agent.aspx"
  },
  {
    name: "ULTRA PANDA",
    image: "/images/ultra-panda-logo.jpg",
    playerLink: "https://www.ultrapanda.club/",
    agentLink: "https://ht.ultrapanda.club/"
  },
  {
    name: "VBLINK",
    image: "/images/vblink-logo.jpg",
    playerLink: "https://www.vblink777.club/",
    agentLink: "https://gm.vblink777.club/#/login?redirect=%2Findex"
  },
  {
    name: "GAME VAULT 999",
    image: "/images/game-vault-logo.jpg",
    playerLink: "https://download.gamevault999.com/",
    agentLink: "https://agent.gamevault999.com/login"
  },
  {
    name: "YOLO",
    image: "/images/yolo-logo.jpg",
    playerLink: "https://yolo777.game/",
    agentLink: "https://agent.yolo777.game/admin/auth/login"
  },
  {
    name: "PANDA MASTER",
    image: "/images/pandamaster-logo.jpg",
    playerLink: "https://pandamaster.vip:8888/index.html",
    agentLink: "https://pandamaster.vip/Agent.aspx"
  },
  {
    name: "RIVER SWEEPS",
    image: "/images/river-sweeps-logo.jpg",
    playerLink: "https://river777.com/?v=new",
    agentLink: "https://river-pay.com/office/login"
  },
  {
    name: "VEGAS-X",
    image: "/images/vegas-x-logo.jpg",
    playerLink: "https://vegas-x.pro/",
    agentLink: "https://admin.vegas-x.pro/login"
  },
  {
    name: "MILKY WAY",
    image: "/images/milkyways-logo.jpg",
    playerLink: "https://milkywayapp.xyz/",
    agentLink: "https://milkywayapp.xyz:8781/default.aspx?639141400103391306"
  },
  {
    name: "VEGAS SWEEPS",
    image: "/images/vegas-sweeps-logo.jpg",
    playerLink: "https://m.lasvegassweeps.com/",
    agentLink: "https://agent.lasvegassweeps.com/adminList"
  },
  {
    name: "GAMEROOM ONLINE",
    image: "/images/gameroom-logo.jpg",
    playerLink: "https://www.gameroom777.com/",
    agentLink: "https://agentserver.gameroom777.com/admin/login"
  },
  {
    name: "JUWA 2.0",
    image: "/images/juwa2.webp",
    playerLink: "https://m.juwa2.com/",
    agentLink: "https://agent.juwa2.com/"
  },
  {
    name: "GOLDEN TREASURE",
    image: "/images/goldent.webp",
    playerLink: "https://www.goldentreasure.mobi/",
    agentLink: "https://agent.goldentreasure.mobi/"
  },
  {
    name: "ACEBOOK",
    image: "/images/acebook.webp",
    playerLink: "https://www.playacebook.mobi/",
    agentLink: "https://djwae.playacebook.mobi/"
  },
  {
    name: "HIGHROLLER",
    image: "/images/highroller-logo.jpg",
    playerLink: "https://highrollerdownload.com/",
    agentLink: "https://highroller.cc/default.aspx?638369587703264834"
  },
  {
    name: "EGAME",
    image: "/images/Egame.webp",
    playerLink: "https://www.egame99.club/",
    agentLink: "https://pko.egame99.club/#/login?redirect=%2Freport%2Fagent-total-profit"
  },
  {
    name: "MOOLAH",
    image: "/images/moolah.webp",
    playerLink: "https://moolah.vip:8888/",
    agentLink: "https://moolah.vip:8781/"
  },
  {
    name: "JOKER",
    image: "/images/joker.webp",
    playerLink: "https://www.joker777.win/",
    agentLink: "https://agent.joker777.win/admin/login"
  },
  {
    name: "LOOT",
    image: "/images/lootg.webp",
    playerLink: "https://m.lootgame777.com/",
    agentLink: "https://client.lootgame777.com/login"
  },
  {
    name: "KRAKEN",
    image: "/images/thekraken.webp",
    playerLink: "https://getthekraken.com/",
    agentLink: "https://krakenbackend.com:8781/default.aspx"
  },
  {
    name: "CASH FRENZY",
    image: "/images/cashfrenzy.webp",
    playerLink: "https://www.cashfrenzy777.com/m",
    agentLink: "https://agentserver.cashfrenzy777.com/admin/login"
  },
  {
    name: "CASH MACHINE",
    image: "/images/cashmachine.webp",
    playerLink: "https://www.cashmachine777.com/",
    agentLink: "https://agentserver.cashmachine777.com/"
  },
  {
    name: "BLUE DRAGON",
    image: "/images/bluedragon.webp",
    playerLink: "http://app.bluedragon777.com/",
    agentLink: "https://agent.bluedragon777.com/Login.aspx"
  },
  {
    name: "HIGH STAKES",
    image: "/images/High-Stakes-Slots.webp",
    playerLink: "https://dl.highstakesweeps.com/",
    agentLink: "https://ht.highstakesweeps.com/login"
  },
  {
    name: "MEGA SPIN",
    image: "/images/megaspin.webp",
    playerLink: "https://www.megaspinsweeps.com/index.html",
    agentLink: "https://megaspinpay.com/"
  },
  {
    name: "RIVER MONSTER",
    image: "/images/rivermonster.webp",
    playerLink: "https://rm777.net/",
    agentLink: "https://rm-pay.com/"
  },
  {
    name: "CASINO IGNITE",
    image: "/images/ignite.webp",
    playerLink: "https://h5.casinoignitee.vip/",
    agentLink: "https://agent.casinoignitee.vip/"
  },
  {
    name: "MAFIA",
    image: "/images/mafia.webp",
    playerLink: "https://www.mafia77777.com/",
    agentLink: "https://agentserver.mafia77777.com/admin/login"
  },
  {
    name: "NOBLE",
    image: "/images/noble.webp",
    playerLink: "https://www.noble777.com/",
    agentLink: "https://agentserver.noble777.com/admin"
  },
  {
    name: "WINSTAR",
    image: "/images/winstar.webp",
    playerLink: "http://server.winstar99999.com:8009/",
    agentLink: "https://agent.winstar99999.com/"
  },
  {
    name: "LUCKY STARS",
    image: "/images/luckystar.webp",
    playerLink: "https://www.luckystars.games/",
    agentLink: "https://agent.luckystars.games/admin/login"
  },
  {
    name: "SIRUS",
    image: "/images/sirus.webp",
    playerLink: "https://m.gamesirius999.com/",
    agentLink: "https://agent.gamesirius999.com/"
  },
  {
    name: "MR. ALL IN ONE",
    image: "/images/mrallinone.webp",
    playerLink: "https://www.mrallinone777.com/",
    agentLink: "https://agentserver.mrallinone777.com/admin/login"
  },
  {
    name: "GOLDEN DRAGON",
    image: "/images/goldendrag.webp",
    playerLink: "https://playgd.mobi/SSLobby/1.5.1/web-mobile/index.html?",
    agentLink: "https://pos.goldendragoncity.com/pos/"
  },
  {
    name: "KING OF POP",
    image: "/images/king.webp",
    playerLink: "https://www.slots88888.com/",
    agentLink: "http://agentserver.slots88888.com:8003/admin/login"
  },
  {
    name: "VEGAS ROLL",
    image: "/images/vegasrollslogo.webp",
    playerLink: "https://www.vegas-roll.com/m",
    agentLink: "https://backend.vegas-roll.com/"
  },
  {
    name: "CASINO ROYALE",
    image: "/images/casinoroyale.webp",
    playerLink: "https://m.casinoroyale07.com/",
    agentLink: "http://agent.casinoroyale07.com/"
  },
  {
    name: "PARACASINO",
    image: "/images/paracasino.webp",
    playerLink: "https://download.paracasino.net/",
    agentLink: "https://agent.paracasino.net/#/pages/login/login"
  },
  {
    name: "WINNERS CLUB/GEM",
    image: "/images/winners.webp",
    playerLink: "https://www.gem77777.com/",
    agentLink: "https://agent.gem77777.com/admin/login"
  },
  {
    name: "VEGAS LUCK",
    image: "/images/vegasluck.webp",
    playerLink: "https://start.vegasluck777.com/",
    agentLink: "https://www.vegasluck777.com/admin/login"
  },
  {
    name: "BILLION BALLS",
    image: "/images/billion.webp",
    playerLink: "https://billionballs.win/",
    agentLink: "https://billionballs.win/my/login"
  },
  {
    name: "VEGAS EMPIRE",
    image: "/images/vegasempirelog.webp",
    playerLink: "https://vegasempire.co/download",
    agentLink: "https://app.vegasempire.co/"
  },
  {
    name: "MEGA WINNER",
    image: "/images/megawinner.webp",
    playerLink: "https://megawinner.win:8888/index.html",
    agentLink: "https://megawinner.win:8781/"
  },
  {
    name: "SPIN CITY",
    image: "/images/spincity.webp",
    playerLink: "https://play.spincity777.vip/",
    agentLink: "https://store.spincity777.vip/?ReturnUrl=%2FUser"
  },
  {
    name: "FUN STATION",
    image: "/images/funstation.webp",
    playerLink: "https://www.funstation.site/download/",
    agentLink: "https://admin.funstation.site/index/login"
  },
  {
    name: "GLAMOUR SPIN",
    image: "/images/glamourspin.webp",
    playerLink: "https://www.glamourspin.mobi/",
    agentLink: "https://acwwf.glamourspin.mobi/"
  },
  {
    name: "GAME VAULT 777",
    image: "/images/game_vault.webp",
    playerLink: "https://www.gamevault77777.com/",
    agentLink: "https://agent.gamevault77777.com/admin"
  },
  {
    name: "LEGEND FIRE",
    image: "/images/legendfirelogo.webp",
    playerLink: "https://www.legendfire.xyz/",
    agentLink: "https://yadsz.legendfire.xyz/"
  },
];

type RoleType = "PLAYER" | "AGENT";

const PopularGames = () => {
  const [role, setRole] = useState<RoleType>("PLAYER");
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  const handleGameClick = (playerLink: string, agentLink: string) => {
    const link = role === "PLAYER" ? playerLink : agentLink;
    window.open(link, "_blank");
  };

  const setupScroll = (el: HTMLDivElement) => {
    let animFrame: number;
    let pos = el.scrollLeft;
    let paused = false;
    let resumeTimeout: ReturnType<typeof setTimeout>;

    const step = () => {
      if (!paused) {
        pos += 0.8;
        // Snap back to 0 seamlessly once we scroll past the halfway point
        if (pos >= el.scrollWidth / 2) {
          pos = 0;
        }
        el.scrollLeft = pos;
      }
      animFrame = requestAnimationFrame(step);
    };

    const pause = () => {
      paused = true;
      clearTimeout(resumeTimeout);
    };

    const resume = () => {
      clearTimeout(resumeTimeout);
      resumeTimeout = setTimeout(() => {
        // Recalibrate tracking variable with user's manual scroll position
        pos = el.scrollLeft % (el.scrollWidth / 2);
        paused = false;
      }, 1000); // 1-second pause before auto-scrolling resumes
    };

    const handleScroll = () => {
      if (paused) {
        pos = el.scrollLeft;
      }
    };

    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);
    el.addEventListener("touchstart", pause, { passive: true });
    el.addEventListener("touchend", resume, { passive: true });
    el.addEventListener("scroll", handleScroll, { passive: true });

    animFrame = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animFrame);
      clearTimeout(resumeTimeout);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("touchend", resume);
      el.removeEventListener("scroll", handleScroll);
    };
  };

  useEffect(() => {
    const el1 = row1Ref.current;
    const el2 = row2Ref.current;
    let cancel1: (() => void) | undefined;
    let cancel2: (() => void) | undefined;
    
    if (el1) cancel1 = setupScroll(el1);
    if (el2) cancel2 = setupScroll(el2);
    
    return () => {
      cancel1?.();
      cancel2?.();
    };
  }, []);

  const half = Math.ceil(games.length / 2);
  const row1Games = games.slice(0, half);
  const row2Games = games.slice(half);
  
  // Duplicating the arrays to create the infinite loop effect
  const row1Doubled = [...row1Games, ...row1Games];
  const row2Doubled = [...row2Games, ...row2Games];

  const GameCard = ({ game, uniqueKey }: { game: typeof games[0]; uniqueKey: string }) => (
    <div
      className="relative group cursor-pointer flex-shrink-0 w-24 sm:w-28 md:w-32"
      onClick={() => handleGameClick(game.playerLink, game.agentLink)}
    >
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={game.image}
          alt={game.name}
          className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-xl group-hover:scale-110 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <p className="text-[9px] sm:text-[10px] text-gray-400 text-center mt-1 uppercase tracking-wider leading-tight">
        {game.name}
      </p>
    </div>
  );

  return (
    <section className="px-4 py-6 bg-[#0f0620]">
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
        <h3 className="text-sm font-semibold text-gray-300">Popular Platforms</h3>
      </div>

      {/* Row 1 */}
      <div
        ref={row1Ref}
        className="flex gap-3 overflow-x-auto mb-3 select-none cursor-grab active:cursor-grabbing [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {row1Doubled.map((game, i) => (
          <GameCard key={`row1-${game.name}-${i}`} uniqueKey={`row1-${game.name}-${i}`} game={game} />
        ))}
      </div>

      {/* Row 2 */}
      <div
        ref={row2Ref}
        className="flex gap-3 overflow-x-auto select-none cursor-grab active:cursor-grabbing [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {row2Doubled.map((game, i) => (
          <GameCard key={`row2-${game.name}-${i}`} uniqueKey={`row2-${game.name}-${i}`} game={game} />
        ))}
      </div>
    </section>
  );
};

export default PopularGames;

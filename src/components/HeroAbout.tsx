import { motion } from "motion/react";
import { DATA } from "../data";
import gymHeroBg from "../assets/images/man_dumbbell_row_1781284388046.jpg";

interface HeroAboutProps {
  onJoinClick?: () => void;
}

export default function HeroAbout({ onJoinClick }: HeroAboutProps) {
  return (
    <section className="relative pt-32 pb-16 flex flex-col group overflow-hidden">
      
      {/* Background blend image */}
      <div className="absolute top-0 right-0 w-2/3 h-full pointer-events-none z-0">
         <img 
           src={gymHeroBg} 
           alt="Gym athlete background" 
           referrerPolicy="no-referrer"
           className="w-full h-full object-cover object-right-top mix-blend-screen opacity-80 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
         />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full flex-1 flex flex-col relative z-10 pointer-events-none">
        <div className="mt-8 mb-4 pointer-events-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-6xl sm:text-8xl md:text-[110px] font-display font-black uppercase leading-[0.85] tracking-tighter italic drop-shadow-2xl"
          >
            TRANSFORM<br/>
            <span className="text-brand-500">YOUR JOURNEY</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-neutral-400 mt-8 mb-10 max-w-2xl font-medium"
          >
            Join <strong className="text-white">FitZone Elite Gym</strong>, Bengaluru's premier fitness destination with world-class equipment, certified trainers, and personalized workout programs.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <button 
              onClick={onJoinClick}
              className="h-12 px-8 bg-brand-500 text-black font-black uppercase tracking-widest hover:text-white stylish-button transition-colors w-full sm:w-auto relative group overflow-hidden"
            >
              <span className="relative z-10 transition-colors group-hover:text-black">START FREE TRIAL</span>
            </button>
            <button 
              onClick={onJoinClick}
              className="h-12 px-8 bg-transparent border-2 border-neutral-800 text-white font-black uppercase tracking-widest hover:border-white transition-colors w-full sm:w-auto text-sm lg:text-base"
            >
              VIEW MEMBERSHIPS
            </button>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 border-y-2 border-neutral-800/50 mt-16 py-8 glass-panel rounded-xl px-6 lg:px-10 -mx-6 lg:-mx-10 items-center justify-between pointer-events-auto">
          {DATA.stats.slice(0, 5).map((stat, i) => (
            <div key={i} className="flex flex-col items-center lg:items-start">
              <span className="text-3xl md:text-4xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">{stat.value}</span>
              <span className="text-[10px] uppercase tracking-wider text-brand-500 font-bold mt-1.5">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* About Section inline to save component files */}
        <div className="mt-16 grid md:grid-cols-2 gap-12 lg:gap-24 items-start py-8 pointer-events-auto">
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-black mb-4 text-white bg-neutral-950/80 w-fit px-2 py-1 rounded">About Us</h3>
            <h2 className="text-4xl font-display font-black uppercase tracking-tight mb-6">Established in 2016</h2>
            <p className="text-neutral-400 font-medium leading-relaxed mb-6">
              FitZone Elite Gym has helped thousands of members achieve their fitness goals through expert coaching, modern facilities, and a supportive community.
            </p>
            <p className="text-neutral-400 font-medium leading-relaxed">
              Our mission is to make fitness accessible, enjoyable, and results-driven for everyone.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-y-10 gap-x-6">
            {DATA.stats.slice(5).map((stat, i) => (
              <div key={i} className="flex flex-col border-b border-neutral-800/50 pb-4">
                <span className="text-3xl font-display font-black text-white">{stat.value}</span>
                <span className="text-[10px] uppercase tracking-wider text-brand-500 font-bold mt-1.5">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

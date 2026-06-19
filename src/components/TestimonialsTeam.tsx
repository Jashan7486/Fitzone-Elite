import { useState } from "react";
import { motion } from "motion/react";
import { DATA } from "../data";
import InfoModal from "./InfoModal";
import womanSquattingBg from "../assets/images/woman_squatting_1781284371861.jpg";

export default function TestimonialsTeam() {
  const [selectedTrainer, setSelectedTrainer] = useState<typeof DATA.trainers[0] | null>(null);

  return (
    <section className="py-16 relative overflow-hidden bg-neutral-950 group">
      {/* Background blend image */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none z-0">
         <img 
           src={womanSquattingBg} 
           alt="Woman squatting background" 
           referrerPolicy="no-referrer"
           className="w-full h-full object-cover object-center mix-blend-screen opacity-60 group-hover:opacity-90 transition-all duration-1000 scale-105 group-hover:scale-100"
         />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 pointer-events-none">
        
        {/* Testimonials */}
        <div className="mb-24 pointer-events-auto">
          <h3 className="text-xs uppercase tracking-[0.2em] font-black mb-8 text-white bg-neutral-900/60 backdrop-blur w-fit px-3 py-1.5 rounded-md shadow-sm border border-neutral-800">Success Stories</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {DATA.testimonials.map((test, idx) => (
              <div key={idx} className="glass-panel p-8 flex flex-col justify-between rounded-md relative overflow-hidden group/card hover:border-brand-500/50 transition-colors">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-500/5 blur-3xl rounded-full group-hover/card:bg-brand-500/10 transition-colors pointer-events-none"></div>
                <p className="text-lg text-white font-display italic font-bold mb-8 leading-tight tracking-tight relative z-10">
                  "{test.quote}"
                </p>
                <div className="text-[10px] uppercase font-black mt-2 text-brand-500 tracking-widest relative z-10">
                  — {test.author}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="pointer-events-auto">
          <h3 className="text-xs uppercase tracking-[0.2em] font-black mb-8 text-white bg-neutral-900/60 backdrop-blur w-fit px-3 py-1.5 rounded-md shadow-sm border border-neutral-800">Expert Trainers</h3>

          <div className="grid md:grid-cols-3 gap-4">
            {DATA.trainers.map((trainer, idx) => (
              <motion.div 
                key={idx}
                onClick={() => setSelectedTrainer(trainer)}
                whileHover={{ y: -5 }}
                className="bg-neutral-950/40 backdrop-blur-sm border border-neutral-800 p-6 flex flex-col items-start hover:border-brand-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] cursor-pointer transition-all rounded-md"
              >
                <h3 className="text-2xl font-display font-black uppercase mb-1">{trainer.name}</h3>
                <div className="text-brand-500 text-xs font-black uppercase tracking-widest mb-4">{trainer.role}</div>
                <div className="text-neutral-400 text-sm font-medium mb-4">Specialties: {trainer.specialties}</div>
                <div className="text-neutral-500 text-[10px] font-bold uppercase tracking-widest mt-auto pt-4 border-t border-neutral-800 w-full">{trainer.experience}</div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {selectedTrainer && (
        <InfoModal 
          title={selectedTrainer.name} 
          subtitle={selectedTrainer.role} 
          content={selectedTrainer.details} 
          onClose={() => setSelectedTrainer(null)} 
        />
      )}
    </section>
  );
}

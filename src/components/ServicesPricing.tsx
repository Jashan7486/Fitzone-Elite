import { useState } from "react";
import { motion } from "motion/react";
import { DATA } from "../data";
import { Check } from "lucide-react";
import InfoModal from "./InfoModal";
import gymEquipmentBg from "../assets/images/gym_interior_modern_1781284358854.jpg";

interface ServicesPricingProps {
  onJoinClick?: () => void;
}

export default function ServicesPricing({ onJoinClick }: ServicesPricingProps) {
  const [selectedService, setSelectedService] = useState<typeof DATA.services[0] | null>(null);

  return (
    <section className="pb-16 bg-neutral-950 relative group overflow-hidden">
      
      {/* Background blend image */}
      <div className="absolute top-0 left-0 w-1/2 h-full pointer-events-none z-0">
         <img 
           src={gymEquipmentBg} 
           alt="Gym equipment background" 
           referrerPolicy="no-referrer"
           className="w-full h-full object-cover object-left mix-blend-screen opacity-60 group-hover:opacity-90 transition-all duration-1000 -translate-x-4 group-hover:translate-x-0"
         />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 pointer-events-none">
        
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 border-y-2 border-neutral-800 py-16 pointer-events-auto">
          {/* Services Column */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-black mb-8 text-white bg-neutral-900/60 backdrop-blur w-fit px-3 py-1.5 rounded-md shadow-sm border border-neutral-800">Core Services</h3>
            <ul className="space-y-4">
              {DATA.services.map((service, idx) => (
                <li 
                  key={idx} 
                  onClick={() => setSelectedService(service)}
                  className="flex flex-col border-b border-neutral-800/50 pb-4 hover:border-brand-500 cursor-pointer group transition-colors"
                >
                  <div className="flex justify-between items-end mb-1">
                    <span className="text-lg md:text-xl font-display font-bold uppercase group-hover:text-brand-500 transition-colors">{service.title}</span>
                    <span className="text-[9px] uppercase opacity-40 mb-1 font-bold tracking-widest hidden sm:block group-hover:text-brand-500 group-hover:opacity-100 transition-all">Explore</span>
                  </div>
                  <span className="text-xs text-neutral-400 font-medium">{service.description}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing Column */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-black mb-8 text-white bg-neutral-900/60 backdrop-blur w-fit px-3 py-1.5 rounded-md shadow-sm border border-neutral-800">Pricing Plans</h3>
            <div className="space-y-6">
              {DATA.plans.map((plan, idx) => (
                <div key={idx} className={`p-6 ${plan.popular ? 'bg-neutral-900 border-l-4 border-brand-500 shadow-2xl relative overflow-hidden' : 'bg-white text-black shadow-lg'} flex flex-col rounded-sm transition-transform hover:-translate-y-1 duration-300`}>
                  {plan.popular && (
                    <div className="absolute top-0 right-0 w-24 h-24 bg-brand-500/10 blur-2xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                  )}
                  <div className="flex justify-between items-start mb-2 relative z-10">
                    <span className={`text-[10px] uppercase font-black tracking-widest ${plan.popular ? 'opacity-60 text-white' : 'opacity-60 text-black'}`}>
                      {plan.title} {plan.popular && '(Most Popular)'}
                    </span>
                    <span className={`text-2xl lg:text-3xl font-display font-black tracking-tight ${plan.popular ? 'text-white' : 'text-black'}`}>
                      {plan.price}<span className="text-sm opacity-50 font-sans">{plan.period}</span>
                    </span>
                  </div>
                  <ul className="mt-4 mb-6 space-y-2 relative z-10">
                     {plan.features.slice(0, 3).map((feature, fIdx) => (
                       <li key={fIdx} className={`text-xs font-semibold ${plan.popular ? 'text-neutral-400' : 'text-neutral-600'} flex items-center gap-2`}>
                          <Check size={14} className={plan.popular ? 'text-brand-500' : 'text-black'} strokeWidth={3} /> {feature}
                       </li>
                     ))}
                  </ul>
                  <button 
                    onClick={onJoinClick}
                    className={`mt-auto py-3 font-black uppercase tracking-widest text-xs transition-all relative z-10 ${plan.popular ? 'bg-brand-500 text-black hover:bg-white stylish-button' : 'bg-black text-white hover:bg-neutral-800'}`}
                  >
                    <span className="relative z-10 group-hover:text-black">Choose Plan</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {selectedService && (
        <InfoModal 
          title={selectedService.title} 
          subtitle="Core Service" 
          content={selectedService.details} 
          onClose={() => setSelectedService(null)} 
        />
      )}
    </section>
  );
}

import { X } from "lucide-react";
import { DATA } from "../data";
import { useState } from "react";

interface AuthModalProps {
  onClose: () => void;
}

export default function AuthModal({ onClose }: AuthModalProps) {
  const [step, setStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState("");

  const handlePlanSelect = (plan: string) => {
    setSelectedPlan(plan);
    setStep(2);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-neutral-950/80 backdrop-blur-sm">
      <div className="w-full max-w-2xl bg-neutral-900 border-2 border-neutral-800 flex flex-col max-h-[95vh] overflow-hidden relative shadow-2xl">
        
        {/* Header */}
        <div className="flex justify-between items-center p-4 sm:p-6 border-b-2 border-neutral-800 bg-neutral-950 shrink-0">
          <div>
            <h2 className="text-lg sm:text-2xl font-black uppercase tracking-tight">Join FitZone Elite</h2>
            <p className="text-[10px] uppercase tracking-widest text-brand-500 font-black mt-1">
              {step === 1 ? 'Step 1: Choose a Plan' : 'Step 2: Create Account'}
            </p>
          </div>
          <button 
            onClick={onClose}
            className="text-neutral-500 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 overflow-y-auto">
          {step === 1 && (
            <div className="space-y-3 sm:space-y-4">
              <div className="flex justify-end mb-1 sm:mb-2">
                <button 
                   type="button" 
                   onClick={() => setStep(2)}
                   className="text-[10px] font-black uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
                >
                  Skip Plan Selection
                </button>
              </div>
              {DATA.plans.map((plan, idx) => (
                <div 
                  key={idx} 
                  onClick={() => handlePlanSelect(plan.title)}
                  className={`border-2 p-4 cursor-pointer transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${plan.popular ? 'border-brand-500 bg-brand-500/5' : 'border-neutral-800 hover:border-neutral-600'}`}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-black uppercase tracking-wider text-lg">{plan.title}</span>
                      {plan.popular && <span className="text-[10px] bg-brand-500 text-black px-2 py-0.5 font-black uppercase tracking-widest">Popular</span>}
                    </div>
                    <div className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest">
                      {plan.features[0]} & More
                    </div>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6 mt-2 sm:mt-0 sm:w-1/3">
                    <div className="text-lg md:text-xl font-black">{plan.price}<span className="text-[10px] sm:text-xs text-neutral-500 ml-1">{plan.period}</span></div>
                    <div className="text-brand-500 shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {step === 2 && (
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onClose(); alert('Account Created Successfully!'); }}>
              <div className="bg-neutral-950 border-2 border-neutral-800 p-4 flex justify-between items-center mb-6">
                <div>
                  <div className="text-[10px] text-neutral-500 font-black uppercase tracking-widest mb-1">Selected Plan</div>
                  <div className={`font-black uppercase tracking-widest ${selectedPlan ? 'text-brand-500' : 'text-neutral-600'}`}>{selectedPlan || 'None Selected'}</div>
                </div>
                <button 
                  type="button" 
                  onClick={() => setStep(1)}
                  className="text-[10px] font-black uppercase tracking-widest border-b border-neutral-600 hover:text-brand-500 hover:border-brand-500 transition-colors pb-0.5"
                >
                  {selectedPlan ? 'Change' : 'Select Plan'}
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-brand-500 mb-2">First Name</label>
                  <input type="text" required className="w-full bg-transparent border-b-2 border-neutral-700 py-2 text-sm text-white placeholder-neutral-600 font-bold uppercase tracking-widest focus:outline-none focus:border-brand-500 transition-colors" placeholder="JOHN" />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-brand-500 mb-2">Last Name</label>
                  <input type="text" required className="w-full bg-transparent border-b-2 border-neutral-700 py-2 text-sm text-white placeholder-neutral-600 font-bold uppercase tracking-widest focus:outline-none focus:border-brand-500 transition-colors" placeholder="DOE" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-brand-500 mb-2">Email Address</label>
                <input type="email" required className="w-full bg-transparent border-b-2 border-neutral-700 py-2 text-sm text-white placeholder-neutral-600 font-bold uppercase tracking-widest focus:outline-none focus:border-brand-500 transition-colors" placeholder="YOU@EXAMPLE.COM" />
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-brand-500 mb-2">Password</label>
                <input type="password" required className="w-full bg-transparent border-b-2 border-neutral-700 py-2 text-sm text-white placeholder-neutral-600 font-bold tracking-widest focus:outline-none focus:border-brand-500 transition-colors" placeholder="••••••••" />
              </div>

              <button type="submit" className="w-full stylish-button text-black font-black uppercase tracking-widest text-xs py-4 transition-colors !mt-6">
                 CREATE ACCOUNT
               </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

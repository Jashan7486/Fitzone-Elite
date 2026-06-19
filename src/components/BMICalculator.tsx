import { useState, FormEvent } from 'react';
import { Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import bmiBg from '../assets/images/bmi_illustration_1781285846071.jpg';

export default function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = (e: FormEvent) => {
    e.preventDefault();
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    if (h > 0 && w > 0) {
      setBmi(Number((w / (h * h)).toFixed(1)));
    }
  };

  let category = '';
  let color = 'text-neutral-500';
  let message = '';
  let remedies: string[] = [];
  let gaugeWidth = '0%';

  if (bmi !== null) {
    if (bmi < 18.5) {
      category = 'Underweight';
      color = 'text-brand-400';
      message = 'You may need to put on some weight. Consider speaking with our certified nutritionists.';
      remedies = [
        'Eat more frequently (5-6 smaller meals).',
        'Choose nutrient-rich foods (whole grains, nuts, dairy).',
        'Incorporate protein smoothies and healthy fats.',
        'Focus on strength training to build muscle mass.'
      ];
      gaugeWidth = '20%';
    } else if (bmi < 25) {
      category = 'Normal Weight';
      color = 'text-green-500';
      message = 'Great job! You are in a healthy weight range. Keep maintaining your active lifestyle.';
      remedies = [
        'Maintain your current balanced diet.',
        'Keep up with regular physical activity (both cardio and strength).',
        'Ensure adequate sleep and hydration.',
        'Focus on flexibility and mobility work.'
      ];
      gaugeWidth = '50%';
    } else if (bmi < 30) {
      category = 'Overweight';
      color = 'text-orange-500';
      message = 'You might want to lose some weight. Our HIIT and Cardio classes are perfect for fat loss.';
      remedies = [
        'Increase cardiovascular exercises (HIIT, cycling, swimming).',
        'Incorporate strength training to boost metabolism.',
        'Monitor portion sizes and maintain a slight caloric deficit.',
        'Reduce intake of processed foods and added sugars.'
      ];
      gaugeWidth = '80%';
    } else {
      category = 'Obese';
      color = 'text-red-500';
      message = 'Your health is a priority. Let our personal trainers guide you towards a healthier lifestyle.';
      remedies = [
        'Consult with a healthcare provider and a certified nutritionist.',
        'Start with low-impact exercises (walking, swimming) to protect joints.',
        'Focus on a sustainable, long-term caloric deficit.',
        'Prioritize protein and fiber to stay full longer.'
      ];
      gaugeWidth = '100%';
    }
  }

  return (
    <div className="relative flex-1 flex flex-col group overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <img 
          src={bmiBg} 
          alt="BMI background" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-70 group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-neutral-950/40 backdrop-blur-sm"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-10 py-12 flex-1 w-full flex flex-col justify-center relative z-10 pointer-events-none">
        <div className="flex flex-col mb-12 py-6 border-b-2 border-neutral-800/50 pointer-events-auto">
          <h1 className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-black text-brand-500 mb-2">Health Tools</h1>
          <h2 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter drop-shadow-lg">BMI Calculator</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 relative z-10 pointer-events-auto">
        
        {/* Form */}
        <div className="glass-panel p-8 border-l-4 border-brand-500 shadow-2xl h-fit rounded-r-md">
          <h3 className="text-xs uppercase tracking-[0.2em] font-black mb-8 text-white bg-neutral-900/60 backdrop-blur w-fit px-3 py-1.5 rounded-md shadow-sm border border-neutral-800">Your Details</h3>
          <form onSubmit={calculateBMI} className="space-y-6">
             <div>
               <label className="block text-[10px] font-black uppercase tracking-widest text-brand-500 mb-2">Height (CM)</label>
               <input 
                 type="number" 
                 value={height}
                 onChange={(e) => setHeight(e.target.value)}
                 placeholder="E.G. 175.5" 
                 min="1"
                 step="any"
                 className="w-full bg-neutral-950/50 border border-neutral-700/50 rounded p-3 text-sm text-white placeholder-neutral-600 font-bold uppercase tracking-widest focus:outline-none focus:border-brand-500 transition-colors shadow-inner" 
                 required
               />
             </div>
             
             <div>
               <label className="block text-[10px] font-black uppercase tracking-widest text-brand-500 mb-2">Weight (KG)</label>
               <input 
                 type="number" 
                 value={weight}
                 onChange={(e) => setWeight(e.target.value)}
                 placeholder="E.G. 70.5" 
                 min="1"
                 step="any"
                 className="w-full bg-neutral-950/50 border border-neutral-700/50 rounded p-3 text-sm text-white placeholder-neutral-600 font-bold uppercase tracking-widest focus:outline-none focus:border-brand-500 transition-colors shadow-inner" 
                 required
               />
             </div>

             <button type="submit" className="w-full flex items-center justify-center gap-2 stylish-button text-black font-black uppercase tracking-widest text-xs py-4 transition-colors rounded-sm group">
               <Activity size={16} strokeWidth={3} className="relative z-10 group-hover:text-black transition-colors" />
               <span className="relative z-10 group-hover:text-black transition-colors">CALCULATE BMI</span>
             </button>
          </form>
        </div>

        {/* Results */}
        <div className="flex flex-col justify-center">
          <h3 className="text-xs uppercase tracking-[0.2em] font-black mb-8 text-white bg-neutral-900/60 backdrop-blur w-fit px-3 py-1.5 rounded-md shadow-sm border border-neutral-800">Your Insights</h3>
          
          <AnimatePresence mode="wait">
            {bmi === null ? (
               <motion.div 
                 key="empty"
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 0.95 }}
                 transition={{ duration: 0.4 }}
                 className="border-2 border-neutral-800/50 bg-neutral-900/20 border-dashed p-12 flex flex-col items-center justify-center text-center h-full rounded-md"
               >
                 <Activity size={48} className="text-neutral-700 mb-4" />
                 <p className="text-sm font-bold uppercase tracking-widest text-neutral-500">Enter your details to generate your BMI score.</p>
               </motion.div>
            ) : (
              <motion.div 
                key="result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, type: 'spring' }}
                className="glass-panel border-t-4 border-t-neutral-800 p-8 flex flex-col justify-between h-full rounded-b-md shadow-2xl relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 blur-3xl opacity-20 pointer-events-none rounded-full ${color.replace('text-', 'bg-')}`}></div>
                <div className="relative z-10">
                  <div className="text-[10px] uppercase font-black tracking-widest text-neutral-500 mb-2">Your Score</div>
                  <div className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-4 drop-shadow-md">{bmi}</div>
                  <div className={`text-xl font-black uppercase tracking-widest mb-6 ${color}`}>
                    {category}
                  </div>

                  {/* Gauge */}
                  <div className="w-full h-2 bg-neutral-800 flex mb-8">
                    <motion.div 
                      className={`h-full ${color.replace('text-', 'bg-')}`} 
                      initial={{ width: '0%' }}
                      animate={{ width: gaugeWidth }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                    />
                  </div>

                  <p className="text-sm text-neutral-400 font-medium leading-relaxed uppercase tracking-wider mb-6">
                    {message}
                  </p>

                  <div className="border-t border-neutral-800 pt-6">
                    <div className="text-[10px] uppercase font-black tracking-widest text-brand-500 mb-4">Recommended Action Plan</div>
                    <ul className="space-y-3">
                      {remedies.map((remedy, idx) => (
                        <li key={idx} className="flex gap-3 text-xs text-neutral-300 font-medium leading-relaxed">
                          <span className={`${color}`}>•</span>
                          {remedy}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
    </div>
  );
}

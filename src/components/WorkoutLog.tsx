import { useState, useEffect, FormEvent, useMemo } from 'react';
import { Plus, Trash2, Calendar, TrendingUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import workoutBg from '../assets/images/workout_illustration_1781285864042.jpg';

interface WorkoutEntry {
  id: string;
  date: string;
  exercise: string;
  sets: number;
  reps: number;
  weight: number;
}

export default function WorkoutLog() {
  const [entries, setEntries] = useState<WorkoutEntry[]>([]);
  const [exercise, setExercise] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('fitzone-workouts');
    if (saved) {
      setEntries(JSON.parse(saved));
    } else {
       setEntries([
        { id: '1', date: new Date().toISOString().split('T')[0], exercise: 'BARBELL BENCH PRESS', sets: 4, reps: 8, weight: 80 },
        { id: '2', date: new Date().toISOString().split('T')[0], exercise: 'DEADLIFT', sets: 3, reps: 5, weight: 120 }
       ]);
    }
  }, []);

  const saveEntries = (newEntries: WorkoutEntry[]) => {
    setEntries(newEntries);
    localStorage.setItem('fitzone-workouts', JSON.stringify(newEntries));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!exercise || !sets || !reps || !weight) return;
    
    const newEntry: WorkoutEntry = {
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0],
      exercise: exercise.toUpperCase(),
      sets: Number(sets),
      reps: Number(reps),
      weight: Number(weight),
    };

    saveEntries([newEntry, ...entries]);
    setExercise('');
    setSets('');
    setReps('');
    setWeight('');
  };

  const deleteEntry = (id: string) => {
    saveEntries(entries.filter(e => e.id !== id));
  };

  const chartData = useMemo(() => {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    
    const grouped = entries.reduce((acc, entry) => {
        const date = entry.date;
        const entryDate = new Date(date);
        if (entryDate >= thirtyDaysAgo) {
            if (!acc[date]) {
                acc[date] = 0;
            }
            acc[date] += (entry.sets * entry.reps * entry.weight);
        }
        return acc;
    }, {} as Record<string, number>);

    return Object.entries(grouped)
        .map(([date, volume]) => ({ date: date.slice(5), volume })) // e.g. "MM-DD"
        .sort((a, b) => a.date.localeCompare(b.date));
  }, [entries]);

  return (
    <div className="relative flex-1 flex flex-col group overflow-hidden">
      <div className="absolute top-0 right-0 w-full lg:w-2/3 h-full pointer-events-none z-0">
        <img 
          src={workoutBg} 
          alt="Workout background" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-left-top opacity-70 group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-neutral-950/40 backdrop-blur-sm lg:hidden"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/60 to-transparent hidden lg:block"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 flex-1 w-full relative z-10 pointer-events-none">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 py-6 border-b-2 border-neutral-800/50 pointer-events-auto">
          <div>
            <h1 className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-black text-brand-500 mb-2">Member Portal</h1>
            <h2 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter drop-shadow-lg">Workout Log</h2>
          </div>
          
          <div className="mt-6 sm:mt-0 flex items-center gap-5 sm:gap-6 bg-neutral-900/60 backdrop-blur border border-neutral-800 px-5 py-3 rounded-md shadow-lg">
            <div className="text-right">
               <div className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">Test User</div>
               <div className="text-[9px] sm:text-[10px] text-neutral-400 uppercase font-black tracking-widest mt-0.5">Tenure: 1.5 Years</div>
            </div>
            <div className="h-10 w-px bg-neutral-800"></div>
            <div className="flex flex-col items-center justify-center">
               <span className="text-[9px] uppercase font-black tracking-widest text-neutral-500 mb-1">Status</span>
               <div className="bg-brand-500/10 border border-brand-500/30 px-3 py-1 flex items-center gap-2 rounded-sm shadow-[0_0_10px_rgba(6,182,212,0.1)]">
                 <div className="w-1.5 h-1.5 bg-brand-500 rounded-full animate-pulse"></div>
                 <span className="text-[10px] sm:text-xs font-black uppercase text-brand-500 tracking-widest">Elite</span>
               </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-16 pointer-events-auto">
        
        {/* Form Column */}
        <div className="lg:col-span-1">
          <div className="glass-panel p-8 border-l-4 border-brand-500 shadow-2xl sticky top-32 rounded-r-md">
            <h3 className="text-xs uppercase tracking-[0.2em] font-black mb-8 text-white bg-neutral-900/60 backdrop-blur w-fit px-3 py-1.5 rounded-md shadow-sm border border-neutral-800">Log Exercise</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
               <div>
                 <label className="block text-[10px] font-black uppercase tracking-widest text-brand-500 mb-2">Exercise Name</label>
                 <input 
                   type="text" 
                   value={exercise}
                   onChange={(e) => setExercise(e.target.value)}
                   placeholder="E.G. SQUAT" 
                   className="w-full bg-transparent border-b-2 border-neutral-700 py-2 text-sm text-white placeholder-neutral-600 font-bold uppercase tracking-widest focus:outline-none focus:border-brand-500 transition-colors" 
                   required
                 />
               </div>
               
               <div className="grid grid-cols-2 gap-4">
                 <div>
                   <label className="block text-[10px] font-black uppercase tracking-widest text-brand-500 mb-2">Sets</label>
                   <input 
                     type="number" 
                     value={sets}
                     onChange={(e) => setSets(e.target.value)}
                     placeholder="0" 
                     min="1"
                     className="w-full bg-transparent border-b-2 border-neutral-700 py-2 text-sm text-white placeholder-neutral-600 font-bold uppercase tracking-widest focus:outline-none focus:border-brand-500 transition-colors" 
                     required
                   />
                 </div>
                 <div>
                   <label className="block text-[10px] font-black uppercase tracking-widest text-brand-500 mb-2">Reps</label>
                   <input 
                     type="number" 
                     value={reps}
                     onChange={(e) => setReps(e.target.value)}
                     placeholder="0" 
                     min="1"
                     className="w-full bg-transparent border-b-2 border-neutral-700 py-2 text-sm text-white placeholder-neutral-600 font-bold uppercase tracking-widest focus:outline-none focus:border-brand-500 transition-colors" 
                     required
                   />
                 </div>
               </div>

               <div>
                 <label className="block text-[10px] font-black uppercase tracking-widest text-brand-500 mb-2">Weight (KG)</label>
                 <input 
                   type="number" 
                   value={weight}
                   onChange={(e) => setWeight(e.target.value)}
                   placeholder="0" 
                   min="0"
                   step="0.5"
                   className="w-full bg-transparent border-b-2 border-neutral-700 py-2 text-sm text-white placeholder-neutral-600 font-bold uppercase tracking-widest focus:outline-none focus:border-brand-500 transition-colors" 
                   required
                 />
               </div>

               <button type="submit" className="w-full flex items-center justify-center gap-2 stylish-button text-black font-black uppercase tracking-widest text-xs py-4 transition-colors rounded-sm group">
                 <Plus size={16} strokeWidth={3} className="relative z-10 group-hover:text-black transition-colors" />
                 <span className="relative z-10 group-hover:text-black transition-colors">ADD TO LOG</span>
               </button>
            </form>
          </div>
        </div>

        {/* History Column */}
        <div className="lg:col-span-2">
          <h3 className="text-xs uppercase tracking-[0.2em] font-black mb-8 text-white bg-neutral-900/60 backdrop-blur w-fit px-3 py-1.5 rounded-md shadow-sm border border-neutral-800">Recent History</h3>
          
          {entries.length === 0 ? (
            <div className="glass-panel border border-neutral-800/50 border-dashed p-12 flex flex-col items-center justify-center text-center rounded-md">
              <Calendar size={48} className="text-neutral-700 mb-4" />
              <p className="text-sm font-bold uppercase tracking-widest text-neutral-500">No workouts logged yet.</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-brand-500 mt-2">Start your journey today.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {entries.map(entry => (
                <div key={entry.id} className="glass-panel border-l-2 border-transparent hover:border-l-brand-500 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all group rounded-r-md">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-black uppercase tracking-widest text-brand-500">{entry.date}</span>
                    </div>
                    <div className="text-xl sm:text-2xl font-display font-black uppercase tracking-tight">{entry.exercise}</div>
                  </div>
                  
                  <div className="flex items-center gap-6 sm:gap-10">
                    <div className="flex flex-col items-center">
                      <span className="text-[10px] font-black uppercase tracking-widest text-neutral-500 mb-1">Vol</span>
                      <span className="text-xl font-bold uppercase">{entry.sets} <span className="text-xs text-neutral-500">X</span> {entry.reps}</span>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <span className="text-[10px] font-black uppercase tracking-widest text-neutral-500 mb-1">Load</span>
                      <span className="text-xl font-bold uppercase">{entry.weight}<span className="text-xs text-neutral-500 ml-1">KG</span></span>
                    </div>

                    <button 
                      onClick={() => deleteEntry(entry.id)}
                      className="p-2 text-neutral-600 hover:text-red-500 transition-colors ml-2"
                      aria-label="Delete entry"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Analytics & Calendar */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Progress Chart */}
            {chartData.length > 0 ? (
              <div className="glass-panel p-6 border-t-4 border-brand-500 rounded-md flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp size={24} className="text-brand-500" strokeWidth={2.5} />
                  <h3 className="text-xs uppercase tracking-[0.2em] font-black text-white">30-Day Volume</h3>
                </div>
                <div className="flex-1 w-full min-h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#262626" vertical={false} />
                      <XAxis 
                        dataKey="date" 
                        stroke="#737373" 
                        fontSize={10} 
                        tickLine={false} 
                        axisLine={false}
                        tickMargin={10}
                      />
                      <YAxis 
                        stroke="#737373" 
                        fontSize={10} 
                        tickLine={false} 
                        axisLine={false}
                        tickFormatter={(value) => `${value}kg`}
                        width={60}
                      />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#0a0a0a', border: '1px solid #262626', borderRadius: '4px' }}
                        itemStyle={{ color: '#06b6d4' }}
                        labelStyle={{ color: '#a3a3a3', marginBottom: '4px', fontWeight: 'bold' }}
                        formatter={(value: number) => [`${value} kg`, 'Total Volume']}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="volume" 
                        stroke="#06b6d4" 
                        strokeWidth={3}
                        dot={{ r: 4, fill: '#06b6d4', strokeWidth: 0 }}
                        activeDot={{ r: 6, fill: '#ffffff' }}
                        animationDuration={1500}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            ) : (
                <div className="glass-panel p-6 border-t-4 border-neutral-700 rounded-md flex flex-col items-center justify-center min-h-[300px]">
                  <TrendingUp size={32} className="text-neutral-600 mb-4" strokeWidth={2} />
                  <p className="text-sm font-bold uppercase tracking-widest text-neutral-500 text-center">Log workouts to see<br/>your progress chart</p>
                </div>
            )}

            {/* Calendar View */}
            <div className="glass-panel p-6 border-t-4 border-brand-500 rounded-md flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Calendar size={24} className="text-brand-500" strokeWidth={2.5} />
                  <h3 className="text-xs uppercase tracking-[0.2em] font-black text-white">Activity Calendar</h3>
                </div>
                <div className="text-[10px] uppercase font-black tracking-widest text-neutral-400">
                  {new Date().toLocaleString('default', { month: 'long', year: 'numeric' })}
                </div>
              </div>
              
              <div className="grid grid-cols-7 gap-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="text-center text-[10px] font-black uppercase tracking-widest text-neutral-500 mb-2">
                    {day}
                  </div>
                ))}
                
                {(() => {
                  const today = new Date();
                  const currentMonth = today.getMonth();
                  const currentYear = today.getFullYear();
                  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
                  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
                  const workoutDays = new Set(entries.map(e => e.date));
                  
                  return (
                    <>
                      {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                        <div key={`blank-${i}`} className="aspect-square"></div>
                      ))}
                      {Array.from({ length: daysInMonth }).map((_, i) => {
                        const day = i + 1;
                        const dateString = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                        const hasWorkout = workoutDays.has(dateString);
                        const isToday = day === today.getDate();
                        
                        return (
                          <div 
                            key={day}
                            className={`aspect-square flex items-center justify-center rounded text-sm font-bold transition-all relative group/day ${
                              hasWorkout ? 'bg-brand-500 text-black shadow-[0_0_10px_rgba(6,182,212,0.3)]' : 
                              isToday ? 'border border-brand-500 text-brand-500' : 'bg-neutral-900/50 text-neutral-400 hover:bg-neutral-800'
                            }`}
                          >
                            {day}
                            {hasWorkout && (
                              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-black rounded-full"></div>
                            )}
                          </div>
                        );
                      })}
                    </>
                  );
                })()}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    </div>
  );
}

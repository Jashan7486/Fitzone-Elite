import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Header from './components/Header';
import HeroAbout from './components/HeroAbout';
import ServicesPricing from './components/ServicesPricing';
import TestimonialsTeam from './components/TestimonialsTeam';
import { Contact, Footer } from './components/ContactFooter';
import AdminDashboard from './components/AdminDashboard';
import WorkoutLog from './components/WorkoutLog';
import BMICalculator from './components/BMICalculator';
import AuthModal from './components/AuthModal';

export default function App() {
  const [view, setView] = useState<'home' | 'admin' | 'workout' | 'bmi'>(
    () => (new URLSearchParams(window.location.search).get('view') as any) || 'home'
  );
  const [showAuthModal, setShowAuthModal] = useState(false);

  useEffect(() => {
    // Ensuring the root window adopts a recognizable target name if it doesn't have one
    if (!window.name || !window.name.startsWith('fitzone_')) {
      window.name = `fitzone_${view}`;
    }
  }, [view]);

  useEffect(() => {
    const hasVisited = localStorage.getItem('has_visited');
    if (!hasVisited) {
      setShowAuthModal(true);
      localStorage.setItem('has_visited', 'true');
    }
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-brand-500 selection:text-black font-medium border-x-8 border-neutral-900 max-w-[1440px] mx-auto shadow-2xl overflow-x-hidden flex flex-col">
      <Header view={view} setView={setView} onJoinClick={() => setShowAuthModal(true)} />
      
      <div className="pt-24 lg:pt-32 flex-1 flex flex-col">
        <AnimatePresence mode="wait">
          {view === 'home' && (
            <motion.main 
              key="home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col flex-1"
            >
              <HeroAbout onJoinClick={() => setShowAuthModal(true)} />
              <ServicesPricing onJoinClick={() => setShowAuthModal(true)} />
              <TestimonialsTeam />
              <Contact />
            </motion.main>
          )}
          {view === 'workout' && (
            <motion.main 
              key="workout"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col flex-1 bg-neutral-950"
            >
              <WorkoutLog />
            </motion.main>
          )}
          {view === 'bmi' && (
            <motion.main 
              key="bmi"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col flex-1 bg-neutral-950"
            >
              <BMICalculator />
            </motion.main>
          )}
          {view === 'admin' && (
            <motion.main 
              key="admin"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="min-h-screen flex flex-col bg-neutral-950"
            >
              <AdminDashboard />
            </motion.main>
          )}
        </AnimatePresence>
      </div>
      
      <Footer />

      {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}
    </div>
  );
}

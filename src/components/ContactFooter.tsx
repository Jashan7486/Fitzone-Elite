import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  return (
    <section className="py-16 bg-neutral-950 border-t-2 border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          <div className="flex flex-col">
            <h3 className="text-xs uppercase tracking-[0.2em] font-black mb-8 text-neutral-500">Location & Hours</h3>
            
            <div className="text-xl sm:text-2xl font-black uppercase mb-6 leading-tight">
              123 Fitness Avenue, Whitefield, Bengaluru
            </div>

            <div className="text-brand-500 font-black text-3xl sm:text-4xl tracking-tight mb-8">
              +91 98765 43210
            </div>
            
            <div className="grid grid-cols-2 gap-6 text-[10px] sm:text-xs uppercase font-bold text-neutral-400 tracking-widest border-t-2 border-neutral-800 pt-6">
              <div className="flex flex-col gap-1">
                <span className="text-white">Mon–Sat</span>
                <span>05:00 - 23:00</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-white">Sun</span>
                <span>07:00 - 20:00</span>
              </div>
            </div>

            <div className="text-brand-500 font-black text-xl tracking-tight mt-8">
              INFO@FITZONEELITE.COM
            </div>
          </div>

          <div className="bg-neutral-900 p-8 lg:p-10 border-l-4 border-brand-500 shadow-2xl">
             <h3 className="text-xs uppercase tracking-[0.2em] font-black mb-8 text-neutral-500">Send a Message</h3>
             <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
               <div>
                 <input type="text" placeholder="YOUR NAME" className="w-full bg-transparent border-b-2 border-neutral-700 py-3 text-sm text-white placeholder-neutral-500 font-bold uppercase tracking-widest focus:outline-none focus:border-brand-500 transition-colors" />
               </div>
               <div>
                 <input type="email" placeholder="YOUR EMAIL" className="w-full bg-transparent border-b-2 border-neutral-700 py-3 text-sm text-white placeholder-neutral-500 font-bold uppercase tracking-widest focus:outline-none focus:border-brand-500 transition-colors" />
               </div>
               <div>
                 <textarea placeholder="HOW CAN WE HELP YOU?" rows={3} className="w-full bg-transparent border-b-2 border-neutral-700 py-3 text-sm text-white placeholder-neutral-500 font-bold uppercase tracking-widest focus:outline-none focus:border-brand-500 transition-colors resize-none"></textarea>
               </div>
               <button type="submit" className="w-full bg-brand-500 hover:bg-white text-black font-black uppercase tracking-widest text-xs py-4 transition-colors">
                 SEND MESSAGE
               </button>
             </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-500 text-black py-4 px-6 lg:px-10 flex flex-col md:flex-row justify-between items-center gap-4 border-t-8 border-neutral-900 mt-auto">
      <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-center md:text-left">
        © {new Date().getFullYear()} FitZone Elite Gym | Certified Trainers Amit Verma, Neha Kapoor, Rohit Singh
      </span>
      <span className="text-[10px] font-black uppercase tracking-widest animate-pulse">
        Join the Elite 3,500+ Now
      </span>
    </footer>
  );
}

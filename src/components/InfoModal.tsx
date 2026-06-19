import { X } from "lucide-react";

interface InfoModalProps {
  title: string;
  subtitle: string;
  content: string;
  onClose: () => void;
}

export default function InfoModal({ title, subtitle, content, onClose }: InfoModalProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-sm sm:p-6" onClick={onClose}>
      <div className="w-full max-w-lg bg-neutral-900 border-2 border-neutral-800 flex flex-col relative shadow-2xl" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center p-6 border-b-2 border-neutral-800 bg-neutral-950">
          <div>
            <h2 className="text-2xl font-black uppercase tracking-tight text-white">{title}</h2>
            <p className="text-[10px] uppercase tracking-widest text-brand-500 font-black mt-1">
              {subtitle}
            </p>
          </div>
          <button 
            onClick={onClose}
            className="text-neutral-500 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-8">
          <p className="text-neutral-300 font-medium leading-relaxed text-base">
            {content}
          </p>
          <button 
            onClick={onClose}
            className="w-full bg-brand-500 hover:bg-white text-black font-black uppercase tracking-widest text-xs py-4 transition-colors mt-8"
          >
            CLOSE DETAILS
          </button>
        </div>
      </div>
    </div>
  );
}

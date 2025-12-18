
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center bg-black pt-8 px-4 overflow-hidden">
      
      {/* Pill-Shaped Navigation Bar */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="z-50 bg-[#0c0c0c]/80 backdrop-blur-xl border border-white/10 rounded-full px-8 py-4 flex items-center justify-between w-full max-w-2xl mb-24"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-4 h-4 border-2 border-white border-t-transparent rounded-full" 
            />
          </div>
          <span className="font-bold text-xl tracking-tight text-white">ClickPilot</span>
        </div>
        <div className="flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Login</a>
          <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Pricing</a>
          <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Contact</a>
        </div>
      </motion.nav>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col items-center text-center z-10"
      >
        {/* New Badge */}
        <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-1 rounded-full text-xs font-bold mb-8 uppercase tracking-widest">
          New
        </div>

        {/* Headlines */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 max-w-4xl leading-[1.1]">
          AI insights into <br />
          strengths and flaws
        </h1>
        <p className="text-lg md:text-xl text-gray-500 font-medium mb-16 max-w-2xl">
          Discover potential problems with your thumbnails before they go live
        </p>

        {/* Main Visualization Container */}
        <div className="relative w-full max-w-4xl aspect-[16/9] group">
          {/* Main Image Mockup */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full h-full rounded-[40px] overflow-hidden border border-white/10 shadow-2xl relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&q=80&w=1200" 
              className="w-full h-full object-cover grayscale-[0.2]"
              alt="Subject"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>

          {/* Floating Insight Card: Positive */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute -left-12 top-1/4 w-80 bg-[#0c0c0c]/90 backdrop-blur-2xl border border-emerald-500/30 p-6 rounded-3xl shadow-3xl z-20 hidden md:flex gap-4 items-start"
          >
            <div className="p-2 bg-emerald-500/10 rounded-xl">
              <CheckCircle2 className="w-6 h-6 text-emerald-500" />
            </div>
            <p className="text-sm leading-relaxed text-gray-300 font-medium text-left">
              High contrast between the bright hamster and stormy background creates a dramatic, attention-grabbing effect.
            </p>
          </motion.div>

          {/* Floating Insight Card: Negative */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute -right-12 bottom-1/4 w-80 bg-[#0c0c0c]/90 backdrop-blur-2xl border border-red-500/30 p-6 rounded-3xl shadow-3xl z-20 hidden md:flex gap-4 items-start"
          >
            <div className="p-2 bg-red-500/10 rounded-xl">
              <AlertCircle className="w-6 h-6 text-red-500" />
            </div>
            <p className="text-sm leading-relaxed text-gray-300 font-medium text-left">
              The image compositing appears artificial, which could detract from its impact for some viewers.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* REPLICATED HORIZON: Still keeping the subtle Teal-to-Purple bloom at base */}
      <div className="absolute bottom-0 left-0 right-0 h-[30vh] pointer-events-none select-none z-0">
        <motion.div 
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[160%] h-[400px] bg-gradient-to-r from-teal-500/10 via-blue-600/10 to-purple-800/10 blur-[150px] rounded-[100%]" 
        />
      </div>
    </section>
  );
};

export default Hero;

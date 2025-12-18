
import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Search, Zap } from 'lucide-react';

const ValueProp = ({ number, title, subtitle, icon: Icon }: any) => {
  return (
    <section className="relative w-full max-w-5xl mx-auto py-32 px-4 flex flex-col items-center text-center">
      {/* The requested pulsing thing on the left side of the block */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-white/5 overflow-hidden hidden lg:block">
        <div className="animated-line-segment" style={{ '--line-color': '#4f46e5' } as any} />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center"
      >
        <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-8 border border-white/5">
          <Icon className="w-6 h-6 text-indigo-500" />
        </div>
        <span className="text-xs font-bold text-indigo-500 uppercase tracking-[0.3em] mb-4">Value Prop {number}</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">{title}</h2>
        <p className="text-lg text-gray-500 max-w-xl mb-16 leading-relaxed">
          {subtitle}
        </p>

        {/* Template Design Image Block */}
        <div className="w-full aspect-[16/10] bg-[#080808] rounded-[40px] border border-white/5 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3/4 h-2/3 border border-white/10 rounded-2xl flex flex-col p-6 gap-4 bg-black/40 backdrop-blur-md">
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5" />
                  <div className="space-y-2 flex-1">
                    <div className="w-1/3 h-2 bg-white/10 rounded-full" />
                    <div className="w-1/4 h-2 bg-white/5 rounded-full" />
                  </div>
               </div>
               <div className="flex-1 rounded-xl bg-white/5 border border-white/5" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const ValueSections: React.FC = () => {
  return (
    <div className="bg-black py-20">
      <ValueProp 
        number="One" 
        title="Visual Archetype Analysis" 
        subtitle="Our AI breaks down your image into core visual components to understand what exactly captures the human eye." 
        icon={Layout}
      />
      <ValueProp 
        number="Two" 
        title="Predictive Heatmapping" 
        subtitle="See where users will look first before you ever hit publish. Save hours of A/B testing with instant visual maps." 
        icon={Search}
      />
      <ValueProp 
        number="Three" 
        title="Click-Through Optimization" 
        subtitle="Get actionable suggestions on color correction, text placement, and subject framing for maximum impact." 
        icon={Zap}
      />
    </div>
  );
};

export default ValueSections;

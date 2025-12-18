
import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "John Davis",
      title: "Design Director",
      quote: "Alcove has completely transformed my design workflow. It's the first thing I open every morning.",
      company: "ATLASSIAN",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
      color: "from-blue-500/30 to-indigo-500/30"
    },
    {
      name: "Sarah Chen",
      title: "Product Lead",
      quote: "The intentional silence of this app is its greatest feature. Finally, an RSS reader that respects my focus.",
      company: "SLACK",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800",
      color: "from-orange-500/30 to-red-500/30"
    },
    {
      name: "Michael Ross",
      title: "Staff Engineer",
      quote: "Technical performance is flawless. Instant updates across all my devices without any friction.",
      company: "GITHUB",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800",
      color: "from-purple-500/30 to-pink-500/30"
    }
  ];

  return (
    <section className="relative py-40 px-4 bg-black text-white z-30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Trusted by 15k+ seekers.
          </h2>
          <p className="text-xl text-gray-500">The world's best creators rely on our insights.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group relative aspect-[4/5] rounded-[40px] overflow-hidden bg-black border border-white/5 cursor-pointer shadow-2xl"
            >
              {/* Darkened Image Layer */}
              <img 
                src={item.image} 
                alt={item.name} 
                className="absolute inset-0 w-full h-full object-cover grayscale-[0.3] brightness-[0.3] group-hover:brightness-[0.4] transition-all duration-1000 ease-out"
              />
              
              {/* Gradient Overlays for extra depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-20 group-hover:opacity-40 transition-opacity duration-700`} />
              
              <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                <div className="mb-6 p-3 bg-white/5 rounded-2xl w-fit">
                  <Quote className="w-8 h-8 text-white/40" />
                </div>
                <blockquote className="text-2xl font-bold mb-10 leading-tight tracking-tight text-white">
                  "{item.quote}"
                </blockquote>
                <div className="flex items-center justify-between border-t border-white/10 pt-8">
                  <div className="flex flex-col">
                    <span className="font-extrabold tracking-widest text-sm text-white">{item.company}</span>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg text-white">{item.name}</p>
                    <p className="text-white/40 text-xs uppercase tracking-widest">{item.title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

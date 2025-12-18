
import React from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative py-40 px-4 bg-black overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/[0.02] blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Let's talk.</h2>
          <p className="text-xl text-white/40 font-light">Have a specific question or want to request early access for your team?</p>
        </div>

        <div className="bg-[#080808] p-8 md:p-16 rounded-[48px] border border-white/5 shadow-2xl">
          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              className="text-center py-20"
            >
              <CheckCircle2 className="w-20 h-20 text-blue-500 mx-auto mb-8" />
              <h3 className="text-3xl font-bold mb-4 text-white">Message Sent!</h3>
              <p className="text-white/40">We'll get back to you within 24 hours.</p>
              <button onClick={() => setSubmitted(false)} className="mt-8 text-blue-400 font-semibold hover:text-blue-300 transition-colors">Send another</button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/30 uppercase tracking-[0.2em] ml-4">Full Name</label>
                  <input required type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-blue-500/40 transition-all text-white placeholder:text-white/10" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/30 uppercase tracking-[0.2em] ml-4">Work Email</label>
                  <input required type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-blue-500/40 transition-all text-white placeholder:text-white/10" />
                </div>
              </div>
              
              <div className="space-y-4">
                <label className="text-xs font-bold text-white/30 uppercase tracking-[0.2em] ml-4">Subject</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {['Early Access Request', 'Partnership Inquiry'].map((opt) => (
                    <label key={opt} className="relative group cursor-pointer">
                      <input type="radio" name="subject" className="peer hidden" />
                      <div className="p-5 bg-white/5 border border-white/10 rounded-2xl group-hover:bg-white/10 transition-all peer-checked:bg-blue-500/10 peer-checked:border-blue-500/40 text-center font-medium text-sm text-white/60 peer-checked:text-white">
                        {opt}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-white/30 uppercase tracking-[0.2em] ml-4">Message</label>
                <textarea rows={5} placeholder="Type your message here..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-blue-500/40 transition-all text-white placeholder:text-white/10 resize-none"></textarea>
              </div>

              <button type="submit" className="w-full bg-white text-black py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 hover:bg-gray-200 transition-all active:scale-[0.98]">
                Send Message <Send className="w-5 h-5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

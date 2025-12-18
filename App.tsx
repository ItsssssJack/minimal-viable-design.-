
import React from 'react';
import Hero from './components/Hero';
import ValueSections from './components/ValueSections';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import StarField from './components/StarField';

const App: React.FC = () => {
  return (
    <main className="relative min-h-screen bg-black">
      {/* Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <StarField />
      </div>

      {/* Content Layers */}
      <div className="relative z-10">
        <Hero />
        <ValueSections />
        <Testimonials />
        <ContactForm />
        <Footer />
      </div>
    </main>
  );
};

export default App;

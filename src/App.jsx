
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AiAgent from '@/components/AiAgent';
import { Button } from '@/components/ui/button';
import { MessageSquare, X } from 'lucide-react';

function App() {
  const { toast } = useToast();
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const [isAiAgentOpen, setIsAiAgentOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;
        
        const rect = element.getBoundingClientRect();
        const offset = 200;
        
        if (rect.top <= offset && rect.bottom > offset) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar activeSection={activeSection} />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <motion.section 
          id="about"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <About />
        </motion.section>
        
        <motion.section 
          id="skills"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Skills />
        </motion.section>
        
        <motion.section 
          id="projects"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Projects />
        </motion.section>
        
        <motion.section 
          id="contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Contact />
        </motion.section>
      </main>
      
      <Footer />
      <Toaster />

      <AnimatePresence>
        {isAiAgentOpen && <AiAgent onClose={() => setIsAiAgentOpen(false)} />}
      </AnimatePresence>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          size="lg"
          className="rounded-full shadow-lg w-16 h-16 p-0"
          onClick={() => setIsAiAgentOpen(!isAiAgentOpen)}
          aria-label={isAiAgentOpen ? "Fechar Agente IA" : "Abrir Agente IA"}
        >
          {isAiAgentOpen ? <X size={28} /> : <MessageSquare size={28} />}
        </Button>
      </motion.div>
    </div>
  );
}

export default App;

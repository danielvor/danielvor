
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="gradient-text">Daniel Victor de Oliveira Rodrigues</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-8">
              Desenvolvedor de Software focado em criar soluções digitais robustas e escaláveis.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <a href="#projects">
                <Button size="lg" className="w-full sm:w-auto">
                  Ver Projetos
                </Button>
              </a>
              <a href="docs/Daniel Victor de Oliveira Rodrigues.pdf" download="CV-Daniel-Victor.pdf">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Baixar CV
                </Button>
              </a>
            </div>
            
            <div className="flex items-center gap-4 mt-8 justify-center md:justify-start">
              <a href="https://github.com/danielvor" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/danielvor" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:this.daniel@outlook.com" className="text-foreground/70 hover:text-primary transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full"></div>
              <img  
                alt="Daniel Victor de Oliveira Rodrigues" 
                className="w-full h-full object-cover rounded-full border-4 border-primary/20"
               src="https://avatars.githubusercontent.com/u/69437610?v=4" />
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <a href="#about" className="flex flex-col items-center text-foreground/50 hover:text-primary transition-colors">
            <span className="text-sm mb-2">Rolar para baixo</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

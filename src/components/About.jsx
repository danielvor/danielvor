
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MapPin, Briefcase, GraduationCap, Languages as LanguagesIcon } from 'lucide-react';

const About = () => {
  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre Mim</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl"></div>
            <div className="relative gradient-border p-1">
              <img  
                alt="Daniel Victor de Oliveira Rodrigues" 
                className="w-full h-auto rounded-lg object-cover aspect-[4/3]"
               src="imgs/danielvor-microsoft.jpg" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Desenvolvedor de Software Apaixonado</h3>
            
            <p className="text-foreground/70 mb-6">
              Analista de Fraude e Risco em transição para a área de desenvolvimento de software.
            </p>
            <p className="text-foreground/70 mb-6">
              Tenho experiência acadêmica e profissional no desenvolvimento de Web Apps, APIs e sistemas escaláveis, com proficiência em Python, Java e Node.js. 
            </p>
            <p className="text-foreground/70 mb-6">
              Conhecimento em padrões de arquitetura como MVC, SOA, Pipes and Filters, microsserviços e monolíticos. Apaixonado por tecnologia e por criar soluções robustas e escaláveis.
            </p>
            
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-primary" />
                <span>São Paulo, SP, Brasil</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase size={18} className="text-primary" />
                <span>Analista de Fraude e Risco</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap size={18} className="text-primary" />
                <span>Desenvolvimento de Software - FATEC Itaquera (2023-2027)</span>
              </div>
               <div className="flex items-center gap-2">
                <GraduationCap size={18} className="text-primary" />
                <span>Mecatrônica - ETEC Martin Luther King (2016-2018)</span>
              </div>
              <div className="flex items-center gap-2">
                <LanguagesIcon size={18} className="text-primary" />
                <span>Português (Nativo), Inglês (Profissional)</span>
              </div>
            </div>
            
            <a href="#" download="CV-Daniel-Victor.pdf">
              <Button size="lg">
                Baixar CV
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;

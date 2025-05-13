
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
               src="https://avatars.githubusercontent.com/u/69437610?v=4" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Desenvolvedor Back-End Apaixonado</h3>
            
            <p className="text-foreground/70 mb-6">
              Desenvolvedor Backend com experiência em projetos acadêmicos e pessoais, focado no desenvolvimento de Web Apps, APIs, microsserviços e sistemas escaláveis. Proficiente em Java (Spring Boot), Python (FastAPI/Django) e Node.js (NestJS/Express), com forte entendimento das melhores práticas de arquitetura de software. Atualmente atuando como Analista de Fraude e Risco, com experiência em análise de dados e tomada de decisão estratégica. Apaixonado por explorar novas tecnologias.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-primary" />
                <span>São Paulo, SP, Brasil</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase size={18} className="text-primary" />
                <span>Desenvolvedor Back-End</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap size={18} className="text-primary" />
                <span>Desenvolvimento de Software Multiplataforma - FATEC Itaquera (2023-2027)</span>
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

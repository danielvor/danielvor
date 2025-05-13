
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import SocialLinks from '@/components/SocialLinks';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialMediaLinks = [
    { name: 'github', href: 'https://github.com/danielvor', icon: <Github size={20}/> },
    { name: 'linkedin', href: 'https://linkedin.com/in/danielvor', icon: <Linkedin size={20}/> },
    { name: 'email', href: 'mailto:this.daniel@outlook.com', icon: <Mail size={20}/> },
  ];

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <a href="#home" className="text-2xl font-bold gradient-text mb-4 inline-block">Daniel Victor</a>
            <p className="text-foreground/70 mb-6 max-w-md text-sm">
              Desenvolvedor Back-End focado em criar soluções digitais robustas e escaláveis.
            </p>
            <SocialLinks links={socialMediaLinks} />
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {[
                { name: 'Início', href: '#home' },
                { name: 'Sobre', href: '#about' },
                { name: 'Habilidades', href: '#skills' },
                { name: 'Projetos', href: '#projects' },
                { name: 'Contato', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <Mail size={16} className="text-primary mr-2 mt-1 shrink-0" />
                <a href="mailto:this.daniel@outlook.com" className="text-foreground/70 hover:text-primary transition-colors break-all">
                  this.daniel@outlook.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone size={16} className="text-primary mr-2 mt-1 shrink-0" />
                <a href="tel:+5511948222885" className="text-foreground/70 hover:text-primary transition-colors">
                  +55 11 94822 2885
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="text-primary mr-2 mt-1 shrink-0" />
                <span className="text-foreground/70">São Paulo, SP, Brasil</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/50 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Daniel Victor de Oliveira Rodrigues. Todos os direitos reservados.
          </p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={20} className="text-primary" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

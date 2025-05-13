
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import SocialLinks from '@/components/SocialLinks';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: 'Email',
      value: 'this.daniel@outlook.com',
      link: 'mailto:this.daniel@outlook.com'
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: 'Telefone',
      value: '+55 11 94822 2885',
      link: 'tel:+5511948222885'
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: 'Localização',
      value: 'São Paulo, SP, Brasil',
      link: 'https://www.google.com/maps/place/São+Paulo,+State+of+São+Paulo,+Brazil' 
    }
  ];

  const socialMediaLinks = [
    { name: 'github', href: 'https://github.com/danielvor', icon: <Github size={20}/> },
    { name: 'linkedin', href: 'https://linkedin.com/in/danielvor', icon: <Linkedin size={20}/> },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="lg:col-span-1"
    >
      <div className="bg-background rounded-lg p-6 shadow-lg border border-border/50 h-full">
        <h3 className="text-xl font-bold mb-6">Informações de Contato</h3>
        
        <div className="space-y-6">
          {contactDetails.map((info, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start"
            >
              <div className="bg-primary/10 p-3 rounded-full mr-4 shrink-0">
                {info.icon}
              </div>
              <div>
                <h4 className="font-medium">{info.title}</h4>
                <a 
                  href={info.link} 
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors break-all"
                >
                  {info.value}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8">
          <h4 className="font-medium mb-4">Me siga nas redes sociais</h4>
          <SocialLinks links={socialMediaLinks} />
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;

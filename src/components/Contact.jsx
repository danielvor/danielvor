
import React from 'react';
import { motion } from 'framer-motion';
import ContactInfo from '@/components/ContactInfo';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <div className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Tem um projeto em mente ou quer conversar sobre oportunidades? Entre em contato comigo!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;

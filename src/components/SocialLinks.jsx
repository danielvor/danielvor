
import React from 'react';
import { motion } from 'framer-motion';

const SocialLinks = ({ links, className }) => {
  return (
    <div className={`flex space-x-4 ${className}`}>
      {links.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 * index }}
          viewport={{ once: true }}
          className="bg-secondary/50 hover:bg-primary/20 text-foreground hover:text-primary transition-colors w-10 h-10 rounded-full flex items-center justify-center"
          aria-label={social.name}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;

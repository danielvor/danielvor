
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const userProjects = [
    {
      id: 1,
      title: 'E-commerce API',
      description: 'Desenvolvi uma API RESTful para uma plataforma de e-commerce, incluindo autenticação de usuário, gerenciamento de produtos e processamento de pedidos.',
      image_description: 'API de e-commerce com endpoints e código',
      category: 'api',
      technologies: ['Python', 'FastAPI'],
      demoLink: '#',
      codeLink: 'https://github.com/danielvor' 
    },
    {
      id: 2,
      title: 'Site Portfólio Pessoal',
      description: 'Projetei e implementei um site de portfólio responsivo usando C# e .NET Core, mostrando meus projetos e habilidades.',
      image_description: 'Website de portfólio pessoal responsivo',
      category: 'web',
      technologies: ['C#', '.NET Core'],
      demoLink: '#',
      codeLink: 'https://github.com/danielvor'
    },
    {
      id: 3,
      title: 'Chatbot com NLP',
      description: 'Construí um chatbot usando Python e técnicas de Processamento de Linguagem Natural (NLP) para automação de atendimento ao cliente.',
      image_description: 'Interface de chatbot com balões de fala',
      category: 'ai',
      technologies: ['Python', 'NLP'],
      demoLink: '#',
      codeLink: 'https://github.com/danielvor'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? userProjects 
    : userProjects.filter(project => project.category === filter);

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'api', name: 'API' },
    { id: 'web', name: 'Web' },
    { id: 'ai', name: 'IA/NLP' }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meus Projetos</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Confira alguns dos projetos que desenvolvi, demonstrando minhas habilidades e experiência.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? 'default' : 'outline'}
                onClick={() => setFilter(category.id)}
                className="capitalize"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id}
                variants={item}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="project-card bg-secondary/5 rounded-lg overflow-hidden border border-border/50 hover:border-primary/50 shadow-lg flex flex-col"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img  
                    alt={project.title} 
                    class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                   src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />
                  <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium capitalize">
                    {categories.find(c => c.id === project.category)?.name || project.category}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-foreground/70 mb-4 text-sm flex-grow">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between mt-auto">
                    <a 
                      href={project.demoLink} 
                      target="_blank" rel="noopener noreferrer"
                      className={`flex items-center text-sm font-medium text-primary hover:underline ${project.demoLink === '#' ? 'opacity-50 cursor-not-allowed' : ''}`}
                      onClick={(e) => project.demoLink === '#' && e.preventDefault()}
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Demo
                    </a>
                    <a 
                      href={project.codeLink} 
                      target="_blank" rel="noopener noreferrer"
                      className={`flex items-center text-sm font-medium text-primary hover:underline ${project.codeLink === '#' ? 'opacity-50 cursor-not-allowed' : ''}`}
                      onClick={(e) => project.codeLink === '#' && e.preventDefault()}
                    >
                      <Github size={16} className="mr-1" />
                      Código
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-foreground/70 mb-6">
            Visite meu GitHub para ver mais projetos e contribuições.
          </p>
          <a href="https://github.com/danielvor" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="gap-2">
              <Github size={18} />
              Ver mais no GitHub
            </Button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;


import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Layers, Server, ShieldCheck, Brain, Award, Briefcase } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    {
      category: 'Back-End',
      icon: <Server className="w-10 h-10 text-blue-500" />,
      items: ['Java (Spring Boot)', 'Python (FastAPI/Django)', 'Node.js (NestJS/Express)', 'C# (.NET Core)']
    },
    {
      category: 'Arquitetura',
      icon: <Layers className="w-10 h-10 text-green-500" />,
      items: ['SOLID', 'DDD', 'Microserviços']
    },
    {
      category: 'Banco de Dados',
      icon: <Database className="w-10 h-10 text-yellow-500" />,
      items: ['PostgreSQL', 'MySQL', 'MongoDB']
    },
    {
      category: 'DevOps & Cloud',
      icon: <Code className="w-10 h-10 text-purple-500" />,
      items: ['Docker', 'Kubernetes', 'AWS', 'Google Cloud Platform']
    },
    {
      category: 'Segurança',
      icon: <ShieldCheck className="w-10 h-10 text-red-500" />,
      items: ['JWT', 'OAuth 2.0', 'Information Security']
    },
    {
      category: 'Áreas de Foco',
      icon: <Brain className="w-10 h-10 text-teal-500" />,
      items: ['Inteligência Artificial (AI)', 'Machine Learning (ML)', '.NET', 'Python', 'IoT']
    }
  ];

  const workExperience = [
    {
      period: 'Jan 2024 - Presente',
      role: 'Analista de Risco e Fraude',
      company: 'Teleperformance',
      description: 'Utilizei habilidades de análise de dados para identificar e mitigar riscos financeiros/operacionais, demonstrando uma abordagem proativa para a resolução de problemas. Contribuí para a prevenção de atividades fraudulentas através de análises meticulosas e atenção aos detalhes.'
    },
    {
      period: 'Jan 2020 - Jun 2023',
      role: 'Experiência do Cliente',
      company: 'TIM Brasil',
      description: 'Forneci suporte técnico e resolvi problemas de clientes, excedendo consistentemente as metas de satisfação do cliente. Gerenciei eficientemente os pedidos de serviço, garantindo a resolução oportuna e minimizando o tempo de inatividade do cliente.'
    },
    {
      period: 'Jan 2016 - Dez 2020',
      role: 'Técnico de Elevadores',
      company: 'Otis Elevadores',
      description: 'Realizei manutenção preventiva e corretiva em elevadores, garantindo uma operação segura e eficiente. Diagnostiquei e resolvi problemas técnicos, demonstrando fortes habilidades de solução de problemas.'
    }
  ];

  const certifications = [
    'Information Security - FreeCodeCamp',
    'Data Analysis with Python - FreeCodeCamp',
    'College Algebra with Python - FreeCodeCamp',
    'Machine Learning with Python - FreeCodeCamp',
    'Back End Development and APIs - FreeCodeCamp',
    'Microsoft Certified: Foundational C# - FreeCodeCamp',
    'Google Workspace Administrator - Google Cloud',
    'Google Cloud Machine Learning Engineer - Google Cloud'
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
    <div className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Habilidades & Experiência</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Minhas competências técnicas, trajetória profissional e certificações.
          </p>
        </motion.div>

        <h3 className="text-2xl font-bold mb-8 text-center md:text-left">Habilidades Técnicas</h3>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {technicalSkills.map((skill, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="skill-card bg-background rounded-lg p-6 shadow-lg border border-border/50 hover:border-primary/50"
            >
              <div className="flex items-center mb-4">
                {skill.icon}
                <h3 className="text-xl font-bold ml-3">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* <h3 className="text-2xl font-bold mb-12 text-center md:text-left">Experiência Profissional</h3>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/30"></div>
            {workExperience.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative mb-8 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}
              >
                <div className={`absolute top-0 ${index % 2 === 0 ? 'md:right-0' : 'md:left-0'} left-1/2 md:left-auto transform md:transform-none -translate-x-1/2 md:translate-x-0 w-10 h-10 rounded-full bg-primary/20 border-4 border-primary flex items-center justify-center`}>
                  <Briefcase size={18} className="text-primary" />
                </div>
                <div className="bg-background p-4 rounded-lg shadow-md border border-border/50 ml-8 md:ml-0 md:mr-0">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-2">
                    {exp.period}
                  </span>
                  <h4 className="text-lg font-bold">{exp.role}</h4>
                  <p className="text-primary">{exp.company}</p>
                  <p className="text-foreground/70 mt-2 text-sm">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        <h3 className="text-2xl font-bold mb-8 text-center md:text-left">Certificações</h3>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="bg-background rounded-lg p-4 shadow-md border border-border/50 flex items-center space-x-3 hover:border-primary/50 skill-card"
            >
              <Award className="w-6 h-6 text-primary" />
              <span className="text-foreground/80 text-sm">{cert}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;

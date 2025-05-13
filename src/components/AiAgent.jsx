
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, X, User, Bot } from 'lucide-react';

const AiAgent = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Olá! Sou o assistente virtual do Daniel. Como posso te ajudar a conhecer mais sobre ele?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const danielData = {
    name: "Daniel Victor de Oliveira Rodrigues",
    role: "Desenvolvedor Back-End",
    skills: ["Java (Spring Boot)", "Python (FastAPI/Django)", "Node.js (NestJS/Express)", "C# (.NET Core)", "Microserviços", "Cloud (AWS, GCP)", "SOLID", "DDD", "PostgreSQL", "MongoDB", "Docker", "Kubernetes"],
    experienceSummary: "Desenvolvedor Backend com experiência em projetos acadêmicos e pessoais, focado no desenvolvimento de Web Apps, APIs, microsserviços e sistemas escaláveis. Atualmente atuando como Analista de Fraude e Risco.",
    projects: [
      { name: "E-commerce API", tech: "Python/FastAPI", desc: "API RESTful para e-commerce." },
      { name: "Portfólio Pessoal", tech: ".NET Core", desc: "Site portfólio responsivo." },
      { name: "Chatbot com NLP", tech: "Python", desc: "Chatbot para automação de atendimento." }
    ],
    contact: "Você pode entrar em contato com o Daniel através do email this.daniel@outlook.com ou pelo LinkedIn: linkedin.com/in/danielvor.",
    greeting: "E aí! Firmeza? Sou o assistente do Daniel. Manda a braba aí, o que você quer saber sobre o trampo dele?",
    defaultResponse: "Então... Sobre isso aí, o Daniel manja mais. Que tal perguntar pra ele diretamente ou dar uma olhada no currículo dele? Se precisar de algo mais, tô na área!",
    style: "informal" 
  };

  const generateBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('olá') || lowerMessage.includes('oi') || lowerMessage.includes('e aí')) {
      return danielData.greeting;
    }
    if (lowerMessage.includes('habilidades') || lowerMessage.includes('skills') || lowerMessage.includes('tecnologias')) {
      return `O Daniel manja de várias paradas, tipo: ${danielData.skills.slice(0, 5).join(', ')} e muito mais. Ele é fera em construir coisas robustas e escaláveis.`;
    }
    if (lowerMessage.includes('experiência') || lowerMessage.includes('trabalhou')) {
      return `O Daniel tem uma caminhada legal, saca? ${danielData.experienceSummary} Ele também já ralou como Analista de Risco e Fraude, então tem uma visão estratégica boa.`;
    }
    if (lowerMessage.includes('projetos')) {
      const projectNames = danielData.projects.map(p => `${p.name} (${p.tech})`).join('; ');
      return `Ele já fez uns projetos bacanas, como: ${projectNames}. Cada um com seus desafios e aprendizados, tá ligado?`;
    }
    if (lowerMessage.includes('contato') || lowerMessage.includes('falar com') || lowerMessage.includes('email')) {
      return danielData.contact;
    }
    if (lowerMessage.includes('quem é você') || lowerMessage.includes('seu nome')) {
      return `Eu sou o assistente virtual do Daniel, programado pra te dar uma ideia do perfil profissional dele. Tipo um "eu" digital, saca?`;
    }
    if (lowerMessage.includes('obrigado') || lowerMessage.includes('valeu')) {
      return `De nada! Se precisar de mais alguma coisa, é só chamar. Tamo junto!`;
    }
    
    return danielData.defaultResponse;
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const newUserMessage = { sender: 'user', text: inputValue };
    setMessages(prevMessages => [...prevMessages, newUserMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = generateBotResponse(newUserMessage.text);
      setMessages(prevMessages => [...prevMessages, { sender: 'bot', text: botResponse }]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); 
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-24 right-6 w-80 h-[28rem] bg-background border border-border/50 rounded-lg shadow-xl flex flex-col overflow-hidden z-40"
    >
      <header className="p-4 border-b border-border/50 flex justify-between items-center bg-secondary/10">
        <div className="flex items-center">
          <img src="https://avatars.githubusercontent.com/u/69437610?v=4" alt="Daniel's Avatar" className="w-8 h-8 rounded-full mr-2"/>
          <h3 className="font-semibold text-sm">Assistente IA do Daniel</h3>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
          <X size={18} />
        </Button>
      </header>

      <div className="flex-1 p-4 space-y-3 overflow-y-auto">
        <AnimatePresence>
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={`flex items-end space-x-2 ${msg.sender === 'user' ? 'justify-end' : ''}`}
            >
              {msg.sender === 'bot' && (
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground shrink-0">
                  <Bot size={14} />
                </div>
              )}
              <div
                className={`max-w-[75%] p-2.5 rounded-lg text-sm ${
                  msg.sender === 'user'
                    ? 'bg-primary text-primary-foreground rounded-br-none'
                    : 'bg-secondary text-secondary-foreground rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
              {msg.sender === 'user' && (
                <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-muted-foreground shrink-0">
                  <User size={14} />
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
        {isTyping && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center space-x-1 py-2"
          >
            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground shrink-0">
              <Bot size={14} />
            </div>
            <div className="flex space-x-1">
              <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 0.8, repeat: Infinity, delay: 0 }} className="w-1.5 h-1.5 bg-muted-foreground rounded-full"></motion.div>
              <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }} className="w-1.5 h-1.5 bg-muted-foreground rounded-full"></motion.div>
              <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }} className="w-1.5 h-1.5 bg-muted-foreground rounded-full"></motion.div>
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <footer className="p-3 border-t border-border/50">
        <div className="flex items-center space-x-2">
          <Input
            type="text"
            placeholder="Pergunte algo..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-1 h-9 text-sm"
          />
          <Button type="submit" size="icon" onClick={handleSendMessage} className="h-9 w-9 shrink-0">
            <Send size={16} />
          </Button>
        </div>
      </footer>
    </motion.div>
  );
};

export default AiAgent;

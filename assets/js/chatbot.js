
// Estado do chatbot
let isChatbotOpen = false;

// Funções de UI
function toggleChatbot() {
    const container = document.getElementById('chatbot-container');
    isChatbotOpen = !isChatbotOpen;
    
    if (isChatbotOpen) {
        container.classList.add('active');
        document.getElementById('chatbot-input').focus();
    } else {
        container.classList.remove('active');
    }
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function addMessage(text, sender) {
    const messagesContainer = document.getElementById('chatbot-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const now = new Date();
    const timeString = now.toLocaleTimeString('pt-BR', { 
        hour: '2-digit', 
        minute: '2-digit' 
    });
    
    messageDiv.innerHTML = `
        <div class="message-content">${text}</div>
        <div class="message-time">${timeString}</div>
    `;
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function showTypingIndicator() {
    const messagesContainer = document.getElementById('chatbot-messages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-message';
    typingDiv.id = 'typing-indicator';
    typingDiv.innerHTML = `
        <div class="message-content">
            <div class="typing-dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    `;
    messagesContainer.appendChild(typingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function hideTypingIndicator() {
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

// Base de Conhecimento do Daniel
function getDanielResponse(message) {
    const lower = message.toLowerCase();
    
    // Base de conhecimento personalizada
    const knowledgeBase = {
        // Saudação
        'oi|olá|ola|hey|hello|start': `Olá! Sou o assistente do Daniel. 😊

Posso falar sobre:
• **Experiência profissional** e projetos
• **Tecnologias** e stack técnica
• **Formação** acadêmica
• **Contatos** e redes sociais
• **Processo de transição** para tecnologia

No que posso ajudar?`,

        // Experiência profissional
        'experiência|experiencia|carreira|profissional|trabalho|emprego': `**💼 Experiência Profissional:**

🚀 **Desenvolvedor Full Stack** (Autônomo)
_Jun 2023 - Out 2025 (2 anos 5 meses)_
• Desenvolvimento de aplicações web completas
• Frontend: React, JavaScript, HTML5, CSS3
• Backend: Node.js, Python, APIs REST
• Databases: MongoDB, SQL

📞 **Atendimento ao Cliente** 
_Necxt, Concentrix, TIM Brasil (4+ anos)_
• Suporte técnico especializado
• Resolução de problemas complexos
• Experiência do cliente

🔧 **Técnico de Elevadores** (Otis)
_5 anos de experiência técnica_`,

        // Tecnologias
        'tecnologias|tech|stack|ferramentas|tecnologia|skills|habilidades técnicas': `**🛠 Stack Técnica:**

_frontend:_
• JavaScript (ES6+), React, HTML5, CSS3
• Responsive Design, Web Performance

_backend:_
• Node.js, Express, Python
• REST APIs, Microservices

_databases:_
• MongoDB, MySQL, PostgreSQL

_ferramentas:_
• Git, GitHub, Docker
• AWS, Vercel, Netlify
• VS Code, Postman

_em aprendizado:_
• TypeScript, Next.js, GraphQL`,

        // Contato
        'contato|email|telefone|linkedin|github|contatar|falar|contato': `**📞 Contatos do Daniel:**

📧 **Email:** this.daniel@outlook.com
📱 **Telefone:** +55 (11) 94822-2885

**🌐 Redes Sociais:**
💼 **LinkedIn:** linkedin.com/in/danielvor
💻 **GitHub:** github.com/danielvor
🌍 **Portfolio:** danielvor.vercel.app

**💬 Disponível para:**
• Oportunidades de trabalho
• Projetos freelance
• Networking
• Troca de conhecimentos`,

        // Formação
        'formação|formacao|faculdade|ensino|estudos|curso|acadêmico|academico': `**🎓 Formação Acadêmica:**

**Faculdade IMES** (2025-2027)
• CST em Análise e Desenvolvimento de Sistemas

**Alchemy University**
• Programação Avançada e Web Development

**ETEC Martin Luther King** (2016-2018)
• Técnico em Mecatrônica

**E.E. Barão de Ramalho**
• Ensino Médio Completo

**📚 Estudando constantemente** novas tecnologias!`,

        // Projetos
        'projetos|portfolio|github|repositórios|código|repositorios|codigo': `**💻 Projetos e GitHub:**

Confira meus projetos em: **github.com/danielvor**

**🎯 Tipos de projetos:**
• Aplicações Full Stack (React + Node.js)
• APIs REST e microservices
• Interfaces responsivas e modernas
• Automações e scripts em Python
• Projetos de estudo e experimentação

**🔗 Portfolio completo:** danielvor.vercel.app

_Todos os projetos com código aberto e documentação!_`,

        // Transição de carreira
        'transição|transicao|mudança|mudanca|carreira|mudou|como começou|como comecou': `**🔄 Transição de Carreira:**

Daniel fez uma jornada interessante:

1. 🛠 **Técnico de Elevadores** (5 anos)
   - Desenvolvimento de habilidades técnicas
   - Resolução de problemas complexos

2. 📞 **Atendimento ao Cliente** (4+ anos)
   - Desenvolvimento de soft skills
   - Comunicação e empatia

3. 💻 **Desenvolvedor Full Stack** (Atual)
   - União das habilidades técnicas e interpessoais
   - Foco em desenvolvimento web

**🎯 Mostra adaptabilidade e capacidade de aprendizado contínuo!**`,

        // Default - resposta inteligente
        'default': `Interessante pergunta! 🤔

Baseado no perfil do Daniel, posso te dizer que ele é um **Desenvolvedor Full Stack** com:

• 🚀 Experiência em JavaScript, React, Node.js, Python
• 📚 Cursando Análise e Desenvolvimento de Sistemas
• 💼 Background em atendimento ao cliente + habilidades técnicas
• 🌟 Foco em código limpo e boas práticas

**Sugestões:** posso falar sobre experiência específica, tecnologias, projetos ou como entrar em contato!`
    };

    // Busca a resposta mais relevante
    for (const [keywords, response] of Object.entries(knowledgeBase)) {
        const keyArray = keywords.split('|');
        if (keyArray.some(key => lower.includes(key))) {
            return formatResponse(response);
        }
    }
    
    return formatResponse(knowledgeBase.default);
}

function formatResponse(text) {
    // Formata markdown simples e quebras de linha
    return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n/g, '<br>')
        .replace(/_([^_]+)_/g, '<em>$1</em>')
        .replace(/\•/g, '•');
}

// Função principal para enviar mensagem
function sendMessage() {
    const input = document.getElementById('chatbot-input');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Adiciona mensagem do usuário
    addMessage(message, 'user');
    input.value = '';
    
    // Mostra indicador de digitação
    showTypingIndicator();
    
    // Simula processamento (pode ser removido se quiser resposta instantânea)
    setTimeout(() => {
        hideTypingIndicator();
        const response = getDanielResponse(message);
        addMessage(response, 'bot');
    }, 1000 + Math.random() * 1000); // Delay natural
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    // Foca no input quando o chatbot abre
    const chatInput = document.getElementById('chatbot-input');
    const chatContainer = document.getElementById('chatbot-container');
    
    chatContainer.addEventListener('click', function() {
        chatInput.focus();
    });
});
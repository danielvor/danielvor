document.addEventListener('DOMContentLoaded', () => {
        console.log('Portfólio carregado com sucesso!');

        // Exemplo simples de interação: um alerta ao clicar em um link de projeto
        const projectLinks = document.querySelectorAll('.projects a');
        projectLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault(); // Previne o comportamento padrão do link
                alert(`Você clicou em: ${link.textContent}`);
            });
        });
    });
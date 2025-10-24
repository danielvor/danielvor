// API GitHub
const apiUrl = `https://api.github.com/users/danielvor/repos`;

// Função para buscar e listar os repositórios
async function fetchGitHub() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const projectsContent = document.querySelector(".projects__content");
        projectsContent.innerHTML = ''; // Limpar conteúdo existente

        // Filtrar repositórios excluídos
        const excludedRepos = ['danielvor', 'danielvor.github.io'];
        const filteredRepos = data.filter(repo => !excludedRepos.includes(repo.name));

        // Se não houver repositórios, mostrar mensagem
        if (filteredRepos.length === 0) {
            projectsContent.innerHTML = `
                <div class="no-projects">
                    <i class="ri-github-line"></i>
                    <p>Nenhum projeto encontrado no GitHub.</p>
                </div>
            `;
            return;
        }

        // Criar cards para cada repositório
        filteredRepos.forEach((repo) => {
            // Determinar categoria baseada na descrição ou linguagem
            let category = 'fullstack';
            if (repo.description) {
                const desc = repo.description.toLowerCase();
                if (desc.includes('frontend') || desc.includes('css') || desc.includes('html') || desc.includes('react')) {
                    category = 'frontend';
                } else if (desc.includes('backend') || desc.includes('api') || desc.includes('server') || desc.includes('node')) {
                    category = 'backend';
                }
            }

            const projectCard = document.createElement("article");
            projectCard.className = `projects__card ${category}`;
            projectCard.setAttribute('data-category', category);

            const projectImage = document.createElement("div");
            projectImage.className = "projects__img";
            
            // Definir cor baseada na linguagem principal
            const langColor = getLanguageColor(repo.language);
            projectImage.style.backgroundColor = langColor;

            const langInitial = repo.language ? repo.language.charAt(0).toUpperCase() : 'C';
            projectImage.innerHTML = `<span>${langInitial}</span>`;

            const projectModal = document.createElement("div");
            projectModal.className = "projects__modal";

            const contentWrapper = document.createElement("div");
            contentWrapper.className = "projects__content-wrapper";

            const textContent = document.createElement("div");
            textContent.className = "projects__text-content";

            const projectTitle = document.createElement("h3");
            projectTitle.className = "projects__title";
            projectTitle.textContent = formatRepoName(repo.name);

            const projectSubtitle = document.createElement("span");
            projectSubtitle.className = "projects__subtitle";
            projectSubtitle.textContent = repo.description || 'Sem descrição disponível';

            const buttonsContainer = document.createElement("div");
            buttonsContainer.className = "projects__buttons-container";

            if (repo.homepage && repo.homepage !== '') {
                const siteLink = document.createElement("a");
                siteLink.className = "projects__button button";
                siteLink.href = repo.homepage;
                siteLink.target = "_blank";
                siteLink.rel = "noopener noreferrer";
                siteLink.innerHTML = '<i class="ri-external-link-line"></i> Demo';

                buttonsContainer.appendChild(siteLink);
            }

            const githubLink = document.createElement("a");
            githubLink.className = "projects__button button button__gray";
            githubLink.href = repo.html_url;
            githubLink.target = "_blank";
            githubLink.rel = "noopener noreferrer";
            githubLink.innerHTML = '<i class="ri-github-line"></i> Source';

            buttonsContainer.appendChild(githubLink);

            // Montar estrutura do card
            projectCard.appendChild(projectImage);
            projectCard.appendChild(projectModal);
            projectModal.appendChild(contentWrapper);
            contentWrapper.appendChild(textContent);
            textContent.appendChild(projectTitle);
            textContent.appendChild(projectSubtitle);
            contentWrapper.appendChild(buttonsContainer);

            projectsContent.appendChild(projectCard);
        });

        // Inicializar filtros
        initFilters();
    } catch (error) {
        console.error("Erro ao buscar repositórios do GitHub:", error);
        const projectsContent = document.querySelector(".projects__content");
        projectsContent.innerHTML = `
            <div class="error-message">
                <i class="ri-error-warning-line"></i>
                <p>Erro ao carregar projetos. Tente novamente mais tarde.</p>
            </div>
        `;
    }
}

// Função para obter cor baseada na linguagem
function getLanguageColor(language) {
    const colors = {
        'JavaScript': '#f7df1e',
        'TypeScript': '#3178c6',
        'Python': '#3776ab',
        'Java': '#ed8b00',
        'C++': '#00599c',
        'HTML': '#e34f26',
        'CSS': '#1572b6',
        'PHP': '#777bb4',
        'Ruby': '#cc342d',
        'Go': '#00add8'
    };
    
    return colors[language] || '#6c757d';
}

// Função para formatar nome do repositório
function formatRepoName(name) {
    return name
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Função para inicializar filtros
function initFilters() {
    const filterButtons = document.querySelectorAll('.filters__button');
    const projectCards = document.querySelectorAll('.projects__card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover classe ativa de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('filter-tab-active'));
            // Adicionar classe ativa ao botão clicado
            button.classList.add('filter-tab-active');
            
            const filterValue = button.getAttribute('data-filter');
            
            // Filtrar projetos
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', fetchGitHub);
    
/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.getAttribute('src');

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.setAttribute('src', selectedIcon); // Define o ícone de acordo com a seleção anterior
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    
        // Alterna o ícone ao clicar
        if (themeButton.getAttribute('src') === 'assets/img/sol.ico') {
            themeButton.setAttribute('src', 'assets/img/lua.ico');
        } else {
            themeButton.setAttribute('src', 'assets/img/sol.ico');
        }
    
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});

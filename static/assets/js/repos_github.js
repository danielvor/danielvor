document.addEventListener('DOMContentLoaded', function () {
    // URL da API do GitHub para obter os repositórios públicos
    const apiURL = 'https://api.github.com/users/danielvor/repos';
    
    fetch(apiURL)
        .then(response => response.json())
        .then(repos => {
            const reposList = document.getElementById('repos');
            repos.forEach(repo => {
                if (repo.name !== 'danielvor' && repo.name !== 'danielvor.github.io') {
                    const repoItem = document.createElement('li');
                    repoItem.classList.add('repo-item');

                    // Cria o link para o repositório
                    const repoLink = document.createElement('a');
                    repoLink.href = repo.html_url;
                    repoLink.target = '_blank';
                    repoLink.innerText = repo.name;

                    // Adiciona o nome do repositório e descrição (se disponível)
                    repoItem.appendChild(repoLink);
                    if (repo.description) {
                        const description = document.createElement('p');
                        description.innerText = repo.description;
                        repoItem.appendChild(description);
                    }

                    // Adiciona o item à lista
                    reposList.appendChild(repoItem);
                }
            });
        })
        .catch(error => {
            console.error('Erro ao buscar repositórios do GitHub:', error);
        });
});

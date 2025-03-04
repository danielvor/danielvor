// API GitHub
const apiUrl = `https://api.github.com/users/dunodaniel/repos`;

// Função para buscar e listar os repositórios
async function fetchGitHub() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const projectsContent = document.querySelector(".projects__content");

        data.forEach((repo) => {
            if (repo.name != 'dunodaniel' && repo.name != 'dunodaniel.github.io') {
                const projectCard = document.createElement("article");
                projectCard.className = "projects__card";

                const projectImage = document.createElement("img");
                projectImage.src = "assets/img/project1.jpg";
                projectImage.alt = "Project Image";
                projectImage.className = "projects__img";

                const projectModal = document.createElement("div");
                projectModal.className = "projects__modal";

                const projectSubtitle = document.createElement("span");
                projectSubtitle.className = "projects__subtitle";
                projectSubtitle.textContent = repo.description;

                const projectTitle = document.createElement("h3");
                projectTitle.className = "projects__title";
                projectTitle.textContent = repo.name;

                const siteLink = document.createElement("a");
                if (repo.homepage) {
                    siteLink.className = "projects__button button button__small";
                    siteLink.href = repo.homepage;
                    siteLink.target = "_blank";
                    siteLink.textContent = "Site";
                }

                const githubLink = document.createElement("a");
                githubLink.className = "projects__button button button__small";
                githubLink.href = repo.html_url;
                githubLink.target = "_blank";
                githubLink.textContent = "Source";

                projectsContent.appendChild(projectCard);
                projectCard.appendChild(projectModal);
                projectCard.appendChild(projectImage);
                projectModal.appendChild(projectTitle);
                projectModal.appendChild(projectSubtitle);
                if (repo.homepage) {
                    projectModal.appendChild(siteLink);
                }
                projectModal.appendChild(githubLink);
            }
        });
    } catch (error) {
        console.error("Erro ao buscar repositórios do GitHub:", error);
    }
}

fetchGitHub();
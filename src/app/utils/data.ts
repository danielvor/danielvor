export const navigationLinks = [
  { label: 'Início', path: '#home' },
  { label: 'Sobre mim', path: '#about' },
  { label: 'Projetos', path: '#projects' },
  { label: 'Habilidades', path: '#skills' },
  { label: 'Contato', path: '#contact' }
]

export type projectType = {
  name: string
  repo?: string
  url: string | false
  image?: string
  description?: string
  tags?: string[]
  slug?: string  // ← agora é opcional
  language?: string
}

export const projectsData: projectType[] = [
  {
    name: "Go API",
    slug: "go",
    url: "https://go-api-t7tu.onrender.com/tasks",
    language: "Go",
    repo: "https://github.com/danielvor/Go-API",
    image: "/go.png",
    description: "Esta é uma API RESTful simples construída com Go, que permite a criação, leitura, atualização e exclusão de tarefas.",
    tags: ['go', 'gin', 'mongodb', 'api', 'backend']
  },
  {
    name: "Python API",
    slug: "python",
    url: "https://python-api-sdfq.onrender.com/tasks",
    language: "Python",
    repo: "https://github.com/danielvor/Python-API",
    image: "/python.png",
    description: "Esta é uma API RESTful simples construída com Python, que permite a criação, leitura, atualização e exclusão de tarefas.",
    tags: ['python', 'fastapi', 'mongodb', 'api', 'backend']
  },
  {
    name: "Java API",
    slug: "java",
    url: "https://java-api-nmd8.onrender.com/api/tasks",
    language: "Java",
    repo: "https://github.com/danielvor/Java-API",
    image: "/java.png",
    description: "Esta é uma API RESTful simples construída com Java, que permite a criação, leitura, atualização e exclusão de tarefas.",
    tags: ['java', 'spring', 'mongodb', 'api', 'backend']
  },
  {
    name: ".NET API",
    slug: "dotnet",
    url: "https://net-api-579v.onrender.com/api/Tasks",
    language: ".NET",
    repo: "https://github.com/danielvor/.NET-API",
    image: "/dotnet.png",
    description: "Esta é uma API RESTful simples construída com .NET, que permite a criação, leitura, atualização e exclusão de tarefas.",
    tags: ['.net', 'c#', 'api', 'backend', 'dotnet']
  },
  {
    name: "Node.js API",
    slug: "nodejs",
    url: "/api/tasks", // Esta será uma API interna do seu Next.js
    language: "Node.js (Next.js/Express)",
    repo: 'https://github.com/danielvor/danielvor/blob/main/danielvor/src/pages/api/tasks.js',
    image: '/node.png',
    description: 'Esta é uma API RESTful simples construída com Node.js e Express, que permite a criação, leitura, atualização e exclusão de tarefas.',
    tags: ['express.js', 'mongodb', 'mongoose', 'api', 'backend', 'nodejs', 'javascript']
  },
  // {
    //   repo: 'https://github.com/grazziotti/rest-countries-api',
    //   image:
    //     'https://i.ibb.co/b69XhBD/Screenshot-2023-07-11-at-22-26-22-REST-Countries-API.png',
    //   description:
    //     'O Countries App é um aplicativo web que fornece informações sobre diferentes países ao redor do mundo.',
    //   tags: ['react', 'typescript', 'styled-components', 'axios', 'api']
    //   name: 'Countries App',
  //   url: 'https://rest-countries-api-grazziotti.vercel.app/',
  // },
  // {
  //   name: 'Space Tourism Website',
  //   repo: 'https://github.com//grazziotti/space-tourism-website',
  //   url: 'https://space-tourism-website-grazziotti.vercel.app/',
  //   image:
  //     'https://i.ibb.co/c17p422/Screenshot-2023-07-16-at-00-54-48-Space-Tourism-Website.png',
  //   description: 'Multi-page Website com tema espacial.',
  //   tags: ['react', 'typescript', 'styled-components']
  // },
  // {
  //   name: 'Interactive comments section',
  //   repo: 'https://github.com/grazziotti/interactive-comments-section',
  //   url: 'https://interactive-comments-section-eta.vercel.app/',
  //   image:
  //     'https://i.ibb.co/4WNm2qY/Screenshot-2023-07-14-at-23-31-53-Frontend-Mentor-Interactive-comments-section.png',
  //   description: 'Seção de comentários interativos. CRUD. client-side.',
  //   tags: ['react', 'typescript', 'styled-components']
  // },
  // {
  //   name: 'Comment API',
  //   repo: 'https://github.com/grazziotti/comment-api',
  //   url: false,
  //   image:
  //     'https://i.ibb.co/BKRLTZx/Screenshot-2024-03-05-at-23-44-09-Swagger-UI.png',
  //   description: 'API REST de comentários.',
  //   tags: ['express', 'api', 'backend', 'nodejs', 'typescript']
  // },
  // {
  //   name: 'Job listings with filtering',
  //   repo: 'https://github.com/grazziotti/job-listings-with-filtering',
  //   url: 'https://job-listings-with-filtering-khaki.vercel.app/',
  //   image:
  //     'https://i.ibb.co/47J3Fjt/Screenshot-2023-09-09-at-20-29-20-Frontend-Mentor-Job-Listings.png',
  //   description: 'Listagem de dados locais com filtragem.',
  //   tags: ['react', 'typescript', 'bem']
  // },
  // {
  //   name: 'ToDo App',
  //   repo: 'https://github.com/grazziotti/todo-app',
  //   url: 'https://grazziotti.github.io/todo-app/',
  //   image:
  //     'https://i.ibb.co/Wg5GvD2/Screenshot-2023-07-15-at-23-25-42-Frontend-Mentor-Todo-app.png',
  //   description: 'Um aplicativo de lista de tarefas.',
  //   tags: ['html', 'css', 'javascript', 'bem']
  // },
  // {
  //   name: 'Weather App',
  //   repo: 'https://github.com/grazziotti/weather-app',
  //   url: 'https://grazziotti.github.io/weather-app',
  //   image:
  //     'https://i.ibb.co/zhPsH8D/Screenshot-2023-09-09-at-21-02-56-Weather-App.png',
  //   description:
  //     'Aplicação que fornece informações atualizadas sobre o clima em qualquer lugar do mundo.',
  //   tags: ['html', 'css', 'javascript', 'api']
  // },
  // {
  //   name: 'Rock-paper-scissors Game',
  //   repo: 'https://github.com/grazziotti/rock-paper-scissors-game',
  //   url: 'https://grazziotti.github.io/rock-paper-scissors-game/',
  //   image:
  //     'https://i.ibb.co/d7FczYy/Screenshot-2023-09-09-at-21-06-42-Frontend-Mentor-Rock-Paper-Scissors.png',
  //   description: 'Um jogo clássico de pedra-papel-tesoura disponível online.',
  //   tags: ['html', 'css', 'javascript', 'bem']
  // }
]

export const skillsData = [
  {
    img: 'nodejs/nodejs-original.svg',
    name: 'Node.js'
  },
  {
    img: 'express/express-original.svg',
    name: 'Express'
  },
  {
    img: 'python/python-original.svg',
    name: 'Python'
  },
  {
    img: 'java/java-original.svg',
    name: 'Java'
  },
  {
    img: 'csharp/csharp-original.svg',
    name: 'C#'
  },
  {
    img: 'postgresql/postgresql-original.svg',
    name: 'PostgreSQL'
  },
  {
    img: 'mongodb/mongodb-original.svg',
    name: 'MongoDB'
  },
  {
    img: 'docker/docker-original.svg',
    name: 'Docker'
  },
  {
    img: 'kubernetes/kubernetes-original.svg',
    name: 'Kubernetes'
  },
  {
    img: 'git/git-original.svg',
    name: 'Git'
  }
];

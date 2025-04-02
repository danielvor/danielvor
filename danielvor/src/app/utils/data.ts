export const navigationLinks = [
  { label: 'Início', path: '#home' },
  { label: 'Sobre mim', path: '#about' },
  { label: 'Projetos', path: '#projects' },
  { label: 'Habilidades', path: '#skills' },
  { label: 'Contato', path: '#contact' }
]

export type projectType = {
  name: string
  repo: string
  url: string | false
  image: string
  description: string
  tags: string[]
}

export const projectsData: projectType[] = [
  {
    name: 'FARM Stack',
    repo: 'https://github.com/danielvor/farm-stack',
    url: false,
    image: '/images/project.png',
    description: 'Full Stack FastAPI, React MongoDB App.',
    tags: ['fastapi', 'react', 'mongodb', 'nginx']
  },
  {
    name: 'ASP.NET CRUD',
    repo: 'https://github.com/danielvor/AspNET-CRUD',
    url: false,
    image: '/images/project.png',
    description: 'ASP.NET Core MVC App.',
    tags: ['aspnet', 'mvc', 'sqlserver']
  },
  {
    name: 'React and Go',
    repo: 'https://github.com/danielvor/react-go',
    url: false,
    image: '/images/project.png',
    description: 'Go and React Full Stack App.',
    tags: ['go', 'react', 'postgresql']
  },
  {
    name: 'Sprint Boot Shopping Cart API',
    repo: 'https://github.com/danielvor/dream-shops',
    url: false,
    image: '/images/project.png',
    description:
      'Spring Boot, Spring Security, JWT Course – Shopping Cart Backend Java Project.',
    tags: ['spring', 'java', 'postgresql']
  },
  {
    name: 'Laravel App',
    repo: 'https://github.com/danielvor/Laravel',
    url: false,
    image: '/images/project.png',
    description: 'Laravel web application.',
    tags: ['laravel', 'php', 'mysql']
  },
  {
    name: 'Nest.js and MongoDB',
    repo: 'https://github.com/danielvor/nestjs-microservice',
    url: false,
    image: '/images/project.png',
    description: 'Nest.js microservice with MongoDB.',
    tags: ['nestjs', 'mongodb', 'docker']
  },
  {
    name: 'Spring Boot CRUD',
    repo: 'https://github.com/danielvor/SpringBoot-CRUD',
    url: false,
    image: '/images/project.png',
    description: 'Spring Boot CRUD App.',
    tags: ['spring', 'java', 'postgresql']
  },
  {
    name: 'Blockchain App',
    repo: '',
    url: false,
    image: '/images/project.png',
    description: 'Blockchain App with Solidity and React.',
    tags: ['solidity', 'react', 'ethereum']
  },
  {
    name: 'Django Eccommerce',
    repo: '',
    url: false,
    image: '/images/project.png',
    description: 'Django Eccommerce App.',
    tags: ['django', 'python', 'postgresql']
  },
  {
    name: 'LLM Semantic Book Recommender',
    repo: 'https://github.com/danielvor/llm-semantic-book-recommender',
    url: false,
    image: '/images/project.png',
    description: 'LLM Semantic Book Recommender with LangChain and Pinecone.',
    tags: ['Langchain', 'OpenAI', 'Python']
  }
]

export const skillsData = [
  // Stacks de um dev backend
  {
    img: 'java/java-original.svg',
    name: 'Java'
  },
  {
    img: 'python/python-original.svg',
    name: 'Python'
  },
  {
    img: 'nodejs/nodejs-original.svg',
    name: 'Node.js'
  },
  {
    img: 'express/express-original.svg',
    name: 'Express'
  },
  {
    img: 'fastapi/fastapi-original.svg',
    name: 'FastAPI'
  },
  {
    img: 'spring/spring-original.svg',
    name: 'Spring Boot'
  },
  {
    img: 'mysql/mysql-original.svg',
    name: 'MySQL'
  },
  {
    img: 'mongodb/mongodb-original.svg',
    name: 'MongoDB'
  },
  {
    img: 'postgresql/postgresql-original.svg',
    name: 'PostgreSQL'
  },
  {
    img: 'redis/redis-original.svg',
    name: 'Redis'
  },
  {
    img: 'docker/docker-original.svg',
    name: 'Docker'
  },
  {
    img: 'kubernetes/kubernetes-plain.svg',
    name: 'Kubernetes'
  },
  {
    img: 'rabbitmq/rabbitmq-original.svg',
    name: 'RabbitMQ'
  },
  {
    img: 'typescript/typescript-original.svg',
    name: 'Typescript'
  },
  {
    img: 'javascript/javascript-original.svg',
    name: 'Javascript'
  },
  {
    img: 'bootstrap/bootstrap-original.svg',
    name: 'Bootstrap'
  },
  {
    img: 'git/git-original.svg',
    name: 'Git'
  },
  {
    img: 'github/github-original.svg',
    name: 'GitHub'
  },
  {
    img: 'jira/jira-original.svg',
    name: 'Jira'
  },
  {
    img: 'vscode/vscode-original.svg',
    name: 'VSCode'
  }
]

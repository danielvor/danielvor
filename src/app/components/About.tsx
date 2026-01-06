import Link from 'next/link'

import { MotionDiv } from '../lib/motion'
import { SectionContainer } from './SectionContainer'

import { MoveRight } from 'lucide-react'

export const About = () => {
  return (
    <SectionContainer id="about" title="Sobre mim">
      <div className="flex h-screen flex-col items-center justify-center gap-6 md:flex-row md:items-center md:justify-between">
        <MotionDiv
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="flex max-w-2xl flex-col gap-6 text-xl md:text-center sm:text-lg"
        >
          <p>
            Atualmente graduando em Análise e Desenvolvimento de Sistemas, aplico conhecimentos em linguagens como
            Java, Python e Go para construir APIs escaláveis, robustas e de alta performance.
          </p>

          <p>
            Tenho forte interesse em otimização de bancos de dados, infraestrutura em nuvem (AWS/GCP/AZURE)
            e metodologias ágeis, visando impactar grandes bases de usuários como visto em empresas
            de tecnologia de ponta.
          </p>

          <MotionDiv
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.3 }}
            className="mt-2"
          >
            <h4 className="text-2xl font-semibold">Formação Acadêmica</h4>
            <ul className="mt-2 text-left list-inside list-disc pl-4">
              <li>Graduação em Análise e Desenvolvimento de Sistemas (ADS) – Faculdade IMES (Em andamento)</li>
              <li>Certificações em Desenvolvimento de Software – freeCodeCamp (Em andamento/Concluído)</li>
            </ul>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.95, duration: 0.3 }}
            className="mt-4"
          >
            <h4 className="text-2xl font-semibold">Competências Técnicas</h4>
            <ul className="mt-2 grid gap-2 text-left sm:grid-cols-1 md:grid-cols-2">
              <li>
                <strong>Linguagens:</strong> Java, Python, Go (estudos focados em Backend)
              </li>
              <li>
                <strong>Arquitetura & APIs:</strong> Design de APIs RESTful, Microserviços, SOA
              </li>
              <li>
                <strong>Bancos de Dados:</strong> SQL (PostgreSQL/MySQL), NoSQL (MongoDB/Redis)
              </li>
              <li>
                <strong>Cloud & Infra:</strong> Fundamentos AWS/GCP, Docker, Kubernetes
              </li>
              <li>
                <strong>Ferramentas:</strong> Git/GitHub, CI/CD, Testes Unitários, Caching, Load Balancing
              </li>
              <li>
                <strong>Metodologias:</strong> Scrum, Kanban, Clean Code
              </li>
            </ul>
          </MotionDiv>

          <MotionDiv className="flex justify-start md:justify-center">
            <Link
              href="#contact"
              className="flex items-center gap-x-2 text-target transition-all hover:gap-x-3 hover:text-[#3385ff]"
            >
              Contate-me <MoveRight />
            </Link>
          </MotionDiv>
        </MotionDiv>
        
      </div>
    </SectionContainer>
  )
}

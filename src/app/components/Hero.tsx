import { MotionDiv, MotionH1, MotionP } from '../lib/motion'
import { EmailBtn } from './EmailBtn'
import Image from 'next/image'
import Link from 'next/link'
import { SectionContainer } from './SectionContainer'


import { MoveRight } from 'lucide-react'

export const Hero = () => {
  return (
    <><section id="home">
      <MotionDiv className="mx-auto max-w-5xl">
        <div className="flex h-screen flex-col items-center justify-center gap-3">
          <MotionDiv
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.5,
              duration: 0.3
            }}
            className="mb-6"
          >
            <Image
              src="/foto-perfil.jpg"
              alt="Foto de perfil de Daniel"
              className="rounded-full object-cover border-4 border-target shadow-lg"
              width={240}
              height={240} />
          </MotionDiv>
          <MotionH1
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.7,
              duration: 0.3
            }}
            className="text-center text-8xl font-bold md:text-7xl sm:text-5xl"
          >
            Daniel Victor de Oliveira Rodrigues
          </MotionH1>
          <MotionP
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 1,
              duration: 0.3
            }}
            className="text-center text-4xl sm:text-3xl"
          >
            Desenvolvedor{' '}
            <span className="font-bold text-target">Full-stack</span>
          </MotionP>
          <MotionDiv
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1.3, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 1.2,
              duration: 0.3
            }}
            className="mt-4"
          >
            <EmailBtn />
          </MotionDiv>
        </div>
      </MotionDiv>
    </section><SectionContainer id="about" title="Sobre mim">
        <div className="flex items-center justify-between md:justify-center">
          <MotionDiv
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="flex flex-col gap-6 text-xl md:text-center sm:text-lg"
          >
            <p>Sou <b>Analista de Atendimento Jr na Necxt</b> e estudante de <b>Desenvolvimento de Software</b>. </p>
            <p>Estou em <b>transição de carreira</b>, buscando oportunidades como <b>dev júnior</b> para aplicar o que venho aprendendo e <b>crescer na área tech</b>.</p>
            <p>Abaixo, você encontra alguns dos <b>projetos</b> que desenvolvi para praticar e evoluir minhas habilidades. Obrigado por visitar meu perfil — até mais! 👋</p><br />
            <MotionDiv className="flex justify-start md:justify-center">
              <Link
                href="#contact"
                className="flex items-center gap-x-2 text-target transition-all hover:gap-x-3 hover:text-[#3385ff]"
              >
                Contate-me <MoveRight />
              </Link>
            </MotionDiv>
          </MotionDiv>
          {/* <MotionDiv
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="flex flex-1 justify-end pl-8 md:hidden"
          >
            <div className="w-80 pb-10">
              <div className="flex flex-wrap justify-center gap-4 opacity-70">
                <span className="h-3 w-48 rounded-full bg-target"></span>
                <span className="h-3 w-32 rounded-full bg-secondaryHover"></span>
                <span className="h-3 w-20 rounded-full bg-target"></span>
                <span className="h-3 w-28 rounded-full bg-target"></span>
                <span className="h-3 w-14 rounded-full bg-secondaryHover"></span>
                <span className="h-3 w-20 rounded-full bg-target"></span>
                <span className="h-3 w-32 rounded-full bg-target"></span>
                <span className="h-3 w-32 rounded-full bg-secondaryHover"></span>
                <span className="h-3 w-32 rounded-full bg-secondaryHover"></span>
                <span className="h-3 w-20 rounded-full bg-target"></span>
                <span className="h-3 w-28 rounded-full bg-target"></span>
                <span className="h-3 w-14 rounded-full bg-secondaryHover"></span>
              </div>
            </div>
          </MotionDiv> */}
        </div>
      </SectionContainer></>
  )
}

import { MotionDiv, MotionH1, MotionP } from '../lib/motion'
import { EmailBtn } from './EmailBtn'

export const Hero = () => {
  return (
    <section id="home">
      <MotionDiv className="mx-auto max-w-5xl">
        <div className="flex h-screen flex-col items-center justify-center gap-6 md:flex-row md:items-center md:justify-between">
          {/* Avatar */}
          <MotionDiv
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="flex-shrink-0"
          >
            {/** SVG avatar as data URL so no external asset is required */}
            {/* <img
              src="perfil.png"
              alt="Daniel V.O. Rodrigues"
              className="w-40 h-40 rounded-full"
            /> */}
          </MotionDiv>

          {/* Conteúdo do Hero */}
          <div className="max-w-2xl text-center md:text-left">
            <MotionH1
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.3 }}
              className="text-center text-6xl font-bold md:text-5xl sm:text-4xl"
            >
              Daniel Rodrigues<span className="text-target">.</span>
            </MotionH1>

            <MotionP
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.3 }}
              className="text-center text-2xl mt-2 md:text-left"
            >
              <span className="font-semibold">Backend Software Engineering</span> • São Paulo - SP - Brasil
            </MotionP>

            <MotionP
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 0.3 }}
              className="mt-4 text-base leading-relaxed"
            >
              Desenvolvedor Backend focado em sistemas distribuídos, microserviços e arquitetura de software.
            </MotionP>
          </div>
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.4, duration: 0.3 }}
            className="mt-6 md:mt-0"
          >
            <EmailBtn />
          </MotionDiv>
        </div>
      </MotionDiv>
    </section>
  )
}

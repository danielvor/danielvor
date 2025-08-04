import { MotionDiv } from '../lib/motion'
import { EmailBtn } from './EmailBtn'
import { SectionContainer } from './SectionContainer'

export const Contact = () => {
  return (
    <SectionContainer id="contact" title="Contato">
      <MotionDiv
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-6"
      >
        <p className="max-w-2xl text-center text-lg">
          Quer saber mais sobre o que tenho feito? Sinta-se à vontade para explorar meus repositórios e se conectar comigo!
        </p>
        <MotionDiv
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <EmailBtn />
        </MotionDiv>
      </MotionDiv>
    </SectionContainer>
  )
}

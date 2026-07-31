
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import FadeIn from '../components/ui/FadeIn';
import Button from '../components/ui/Button';
import SectionWrapper from '../components/ui/SectionWrapper';

const highlights = [
  {
    word: 'Individualizada',
    desc: 'Cada processo é único, construído especialmente para você, sua história e suas necessidades.',
  },
  {
    word: 'Espaço seguro',
    desc: 'Um ambiente de total confidencialidade, acolhimento e respeito, sem julgamentos.',
  },
  {
    word: 'Autoconhecimento',
    desc: 'Desenvolva clareza emocional, autonomia e qualidade de vida através do processo terapêutico.',
  },
];

const paragraphs = [
  'Cada pessoa possui sua própria história, forma de perceber o mundo, desafios e recursos emocionais. Por isso, o processo terapêutico é construído de maneira individualizada, respeitando as necessidades e particularidades de cada pessoa.',
  'A primeira sessão tem como objetivo realizar uma triagem inicial e a coleta de informações importantes sobre sua história de vida, contexto atual e principais demandas. Esse momento permite compreender melhor suas necessidades e construir um plano de acompanhamento adequado para você.',
  'A partir das sessões seguintes, o trabalho terapêutico será desenvolvido com base nas demandas identificadas, utilizando recursos clínicos, reflexões, intervenções terapêuticas e, quando necessário, instrumentos psicológicos que auxiliem no processo de autoconhecimento e desenvolvimento emocional.',
  'As sessões possuem duração média de 50 minutos e, geralmente, acontecem semanalmente.',
  'O tempo de acompanhamento varia de acordo com os objetivos, necessidades e evolução de cada pessoa, podendo durar entre 3 e 12 meses ou mais, conforme cada caso.',
];

const ProcessoTerapeutico = () => {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 400], [0, -40]);

  return (
    <>
      <Helmet>
        <title>Processo Terapêutico - Ada Firmino</title>
        <meta name="description" content="Entenda como funciona o processo terapêutico com Ada Firmino. Atendimento individualizado, sessões semanais e acompanhamento de qualidade." />
        <meta property="og:title" content="Processo Terapêutico - Ada Firmino" />
        <meta property="og:description" content="Cada processo é construído de forma individualizada, respeitando sua história e necessidades." />
      </Helmet>

      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-secundaria overflow-hidden pt-28">
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src="/FOTOS/processoterapeutico.jpg"
            alt="Processo Terapêutico"
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-neutro/20 to-neutro pointer-events-none" />
        </motion.div>
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <motion.p
            className="font-corpo text-xs tracking-[0.35em] uppercase font-semibold mb-6 text-[#99b7c0]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ada Firmino · Psicologia Clínica
          </motion.p>
          <motion.h1
            className="font-titulo text-5xl md:text-7xl text-neutro leading-tight"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
          >
            Como Funciona o <br /> Processo Terapêutico
          </motion.h1>
          <motion.p
            className="font-corpo text-lg md:text-xl text-neutro/85 mt-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
          >
            Um espaço para você se conhecer melhor, desenvolver recursos emocionais e construir uma vida com mais equilíbrio e significado.
          </motion.p>
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65 }}
          >
            <Button href="https://wa.me/5585984852741">
              <MessageCircle size={16} className="mr-2" />
              Agendar sessão
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL */}
      <SectionWrapper className="bg-neutro">
        <div className="max-w-2xl mx-auto space-y-8">
          {paragraphs.map((p, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <p className="font-corpo text-lg md:text-xl leading-[1.9] text-texto">
                {p}
              </p>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* HIGHLIGHT BLOCK */}
      <SectionWrapper className="bg-neutro">
        <FadeIn className="text-center mb-12">
          <h2 className="font-titulo text-3xl md:text-4xl text-heading">Pilares do processo</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <motion.div
                className="bg-neutro p-8 shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 280, damping: 20 }}
              >
                <div className="w-8 h-0.5 bg-acento mx-auto mb-6" />
                <h3 className="font-titulo text-2xl text-heading mb-4">{item.word}</h3>
                <p className="font-corpo text-texto leading-relaxed">{item.desc}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* COMPROMISSO */}
      <SectionWrapper className="bg-neutro">
        <FadeIn>
          <blockquote className="border-l-2 border-acento pl-8 max-w-2xl mx-auto">
            <p className="font-corpo text-xl md:text-2xl text-texto italic leading-[1.9]">
              "Meu compromisso é oferecer um espaço seguro, acolhedor e profissional para que você desenvolva maior
              clareza emocional, autonomia, autoconhecimento e qualidade de vida."
            </p>
            <footer className="mt-6 font-corpo text-xs tracking-widest uppercase text-[#99b7c0]">
              — Ada Firmino, Psicóloga Clínica
            </footer>
          </blockquote>
        </FadeIn>
      </SectionWrapper>

      {/* CTA FINAL */}
      <SectionWrapper className="bg-primaria/10 text-texto text-center">
        <FadeIn>
          <p className="font-corpo text-xs tracking-[0.3em] uppercase text-[#99b7c0] mb-4">Dê o primeiro passo</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-titulo text-4xl md:text-5xl mb-8">Agende sua sessão</h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <Button href="https://wa.me/5585984852741" variant="whatsapp">
            <MessageCircle size={18} className="mr-2" />
            Falar pelo WhatsApp
          </Button>
        </FadeIn>
      </SectionWrapper>
    </>
  );
};

export default ProcessoTerapeutico;

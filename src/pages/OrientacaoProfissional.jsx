
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageCircle, Compass, TrendingUp, BookOpen, Brain, Users, Heart, Briefcase } from 'lucide-react';
import FadeIn from '../components/ui/FadeIn';
import Button from '../components/ui/Button';
import SectionWrapper from '../components/ui/SectionWrapper';
import Accordion from '../components/ui/Accordion';

const goals = [
  { icon: Compass, label: 'Construção da identidade profissional' },
  { icon: TrendingUp, label: 'Compreensão da realidade do mercado de trabalho' },
  { icon: BookOpen, label: 'Informações sobre profissões e áreas de atuação' },
];

const temas = [
  { icon: Brain, title: 'Autoconhecimento', desc: 'Interesses, habilidades e aptidões' },
  { icon: Users, title: 'Influências na escolha', desc: 'Fatores que interferem na decisão profissional' },
  { icon: Heart, title: 'Significado do trabalho', desc: 'Sentimentos envolvidos na decisão de carreira' },
  { icon: Briefcase, title: 'Mercado de trabalho', desc: 'Informações e perspectivas sobre profissões' },
];

const faqItems = [
  {
    question: 'Para quem é indicado o processo de Orientação Profissional e de Carreira?',
    answer: 'O processo é indicado para adolescentes, jovens e adultos que estejam enfrentando dúvidas relacionadas à escolha profissional, mudança de carreira, ingresso na faculdade ou redefinição de objetivos profissionais.',
  },
  {
    question: 'Quem ainda está no ensino médio pode fazer Orientação Profissional?',
    answer: 'Sim! A orientação profissional é especialmente indicada para jovens que ainda estão no ensino médio, pois permite que o processo de escolha seja feito com mais calma, consistência e autoconhecimento, evitando decisões precipitadas.',
  },
  {
    question: 'A Orientação Profissional serve apenas para quem não sabe que profissão escolher?',
    answer: 'Não. O processo também auxilia quem deseja mudar de carreira, quem está insatisfeito com a profissão atual, quem quer reingressar no mercado de trabalho, ou quem deseja alinhar seus objetivos de vida com sua trajetória profissional.',
  },
  {
    question: 'São realizados testes psicológicos durante o processo?',
    answer: 'Sim. A depender de cada caso, podem ser utilizados instrumentos psicológicos que auxiliam no processo de autoconhecimento, como inventários de interesses, testes de aptidões e outros recursos avaliados como pertinentes pela psicóloga.',
  },
  {
    question: 'Quantas sessões são necessárias?',
    answer: 'O número de sessões varia de acordo com as necessidades de cada pessoa. Em geral, o processo de orientação profissional tem duração média de 6 a 12 encontros, com frequência semanal.',
  },
  {
    question: 'A psicóloga vai escolher a profissão por mim?',
    answer: 'Não. O papel da psicóloga é facilitar o processo de autoconhecimento e fornecer informações que ampliem o repertório de escolha. A decisão profissional é sempre do próprio orientando, que ao final do processo terá mais clareza e segurança para escolher.',
  },
  {
    question: 'A Orientação Profissional é só para jovens?',
    answer: 'Não. Adultos que desejam mudar de carreira, retornar ao mercado de trabalho ou ressignificar seus objetivos profissionais também se beneficiam muito do processo de orientação de carreira.',
  },
  {
    question: 'O atendimento pode ser realizado online?',
    answer: 'Sim. Os atendimentos podem ser realizados de forma presencial ou online, com a mesma qualidade, ética e cuidado oferecidos no atendimento presencial.',
  },
  {
    question: 'Quais são os principais benefícios da Orientação Profissional e de Carreira?',
    answer: 'Maior autoconhecimento; clareza sobre interesses, habilidades e valores; redução da ansiedade diante da escolha profissional; desenvolvimento da capacidade de tomada de decisão; conhecimento sobre profissões e mercado de trabalho; e construção de um projeto de vida mais alinhado aos objetivos pessoais e profissionais.',
  },
];

const benefits = [
  'Maior autoconhecimento',
  'Clareza sobre interesses, habilidades e valores',
  'Redução da ansiedade diante da escolha profissional',
  'Desenvolvimento da capacidade de tomada de decisão',
  'Conhecimento sobre profissões e mercado de trabalho',
  'Construção de um projeto de vida mais alinhado aos seus objetivos',
];

const OrientacaoProfissional = () => {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 400], [0, -40]);

  return (
    <>
      <Helmet>
        <title>Orientação Profissional e de Carreira - Ada Firmino</title>
        <meta name="description" content="Orientação Profissional de Carreira com Ada Firmino. Descubra sua vocação e planeje seu futuro profissional com consciência e segurança." />
        <meta property="og:title" content="Orientação Profissional e de Carreira - Ada Firmino" />
        <meta property="og:description" content="Auxiliar jovens e adultos no processo de escolha ou redefinição de carreira." />
      </Helmet>

      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-secundaria overflow-hidden pt-28">
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src="/FOTOS/orientacaoprofissional.jpg"
            alt="Orientação Profissional"
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
            Ada Firmino · Orientação Profissional
          </motion.p>
          <motion.h1
            className="font-titulo text-5xl md:text-7xl text-neutro leading-tight"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
          >
            Orientação Profissional <br /> e de Carreira
          </motion.h1>
          <motion.p
            className="font-corpo text-lg md:text-xl text-neutro/85 mt-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
          >
            Encontre clareza, propósito e segurança para tomar decisões profissionais mais conscientes e alinhadas com quem você é.
          </motion.p>
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65 }}
          >
            <Button href="https://wa.me/5585984852741">
              <MessageCircle size={16} className="mr-2" />
              Agendar orientação
            </Button>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <SectionWrapper className="bg-neutro">
        <FadeIn className="text-center">
          <p className="font-corpo text-xl md:text-2xl leading-[1.9] max-w-2xl mx-auto text-texto">
            Esse trabalho tem como objetivo auxiliar jovens e adultos no processo de escolha ou redefinição de carreira.
          </p>
        </FadeIn>
      </SectionWrapper>

      {/* METAS / GOALS */}
      <SectionWrapper className="bg-neutro">
        <FadeIn className="text-center mb-12">
          <h2 className="font-titulo text-3xl md:text-4xl text-heading">Principais metas</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {goals.map((goal, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <motion.div
                className="bg-neutro p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 280, damping: 20 }}
              >
                <goal.icon size={32} className="mx-auto mb-5 text-primaria" strokeWidth={1.5} />
                <p className="font-corpo text-texto leading-relaxed">{goal.label}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* COMO FUNCIONA */}
      <SectionWrapper className="bg-neutro">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <h2 className="font-titulo text-3xl md:text-4xl text-heading mb-8">Como funciona?</h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="font-corpo text-lg leading-[1.9] text-texto">
              Os encontros acontecem por meio de entrevistas, aplicação de técnicas e testes psicológicos,
              além de atividades projetivas e psicopedagógicas.
            </p>
          </FadeIn>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper className="bg-neutro">
        <FadeIn className="text-center mb-12">
          <h2 className="font-titulo text-3xl md:text-4xl text-heading">Perguntas frequentes</h2>
        </FadeIn>
        <FadeIn delay={0.15} className="max-w-2xl mx-auto">
          <Accordion items={faqItems} />
        </FadeIn>
      </SectionWrapper>

      {/* TEMAS TRABALHADOS */}
      <SectionWrapper className="bg-neutro">
        <FadeIn className="text-center mb-12">
          <h2 className="font-titulo text-3xl md:text-4xl text-heading">Temas trabalhados</h2>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {temas.map((tema, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <motion.div
                className="flex items-start gap-5 p-6 bg-neutro shadow-sm hover:shadow-md transition-shadow duration-300"
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 280, damping: 20 }}
              >
                <tema.icon size={28} className="text-primaria flex-shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h3 className="font-titulo text-xl text-heading mb-1">{tema.title}</h3>
                  <p className="font-corpo text-texto text-sm leading-relaxed">{tema.desc}</p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* OBJETIVO — HIGHLIGHT */}
      <SectionWrapper className="bg-primaria/10">
        <FadeIn>
          <div className="border-l-2 border-acento pl-8 max-w-2xl mx-auto">
            <p className="font-corpo text-xs tracking-[0.3em] uppercase text-[#99b7c0] mb-5">Nosso objetivo</p>
            <p className="font-corpo text-xl md:text-2xl text-texto italic leading-[1.9]">
              "Facilitar escolhas profissionais mais conscientes e alinhadas ao momento de vida de cada pessoa."
            </p>
          </div>
        </FadeIn>
      </SectionWrapper>

      {/* BENEFÍCIOS */}
      <SectionWrapper className="bg-neutro">
        <FadeIn className="text-center mb-12">
          <h2 className="font-titulo text-3xl md:text-4xl text-heading">Benefícios</h2>
        </FadeIn>
        <div className="max-w-2xl mx-auto space-y-4">
          {benefits.map((benefit, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <motion.div
                className="flex items-center gap-4 p-5 bg-neutro shadow-sm"
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 280, damping: 20 }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-acento flex-shrink-0" />
                <p className="font-corpo text-texto leading-relaxed">{benefit}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA FINAL */}
      <SectionWrapper className="bg-primaria/10 text-texto text-center">
        <FadeIn>
          <p className="font-corpo text-xs tracking-[0.3em] uppercase text-[#99b7c0] mb-4">Pronto para começar?</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-titulo text-4xl md:text-5xl mb-8">Agende sua orientação</h2>
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

export default OrientacaoProfissional;

import { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  MessageCircle,
  MapPin,
  Brain,
  Compass,
  Shield,
  Heart,
  Eye,
  Clock,
  Users,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import FadeIn from '../components/ui/FadeIn';
import Button from '../components/ui/Button';
import SectionWrapper from '../components/ui/SectionWrapper';
import Accordion from '../components/ui/Accordion';
import VideoSection from '../components/ui/VideoSection';
import DepoimentosCarousel from '../components/ui/DepoimentosCarousel';

const problemas = [
  {
    icon: Brain,
    title: 'Sobrecarga emocional',
    desc: 'Ansiedade, pressão constante e dificuldade de desligar, mesmo longe do trabalho ou dos estudos.',
  },
  {
    icon: Compass,
    title: 'Falta de clareza',
    desc: 'Dúvidas sobre decisões importantes, carreira, relacionamentos ou o que realmente importa para você.',
  },
  {
    icon: Heart,
    title: 'Desconexão consigo',
    desc: 'Sensação de estar no piloto automático, sem espaço para se ouvir e se compreender de verdade.',
  },
];

const comoFunciona = [
  {
    step: '01',
    title: 'Primeiro contato',
    desc: 'Você agenda pelo WhatsApp. Tiramos dúvidas e alinhamos o formato: presencial ou online.',
  },
  {
    step: '02',
    title: 'Sessão inicial',
    desc: 'Triagem acolhedora para entender sua história, contexto atual e principais demandas.',
  },
  {
    step: '03',
    title: 'Acompanhamento',
    desc: 'Encontros semanais de cerca de 50 minutos, com um plano construído junto com você.',
  },
];

const especialidades = [
  {
    icon: Users,
    title: 'Processo Terapêutico',
    desc: 'Acompanhamento clínico individualizado para adolescentes e adultos, com foco em autoconhecimento e equilíbrio emocional.',
    href: '/processo',
  },
  {
    icon: Compass,
    title: 'Orientação Profissional',
    desc: 'Apoio na escolha ou redefinição de carreira, com mais consciência, segurança e alinhamento aos seus valores.',
    href: '/carreira',
  },
  {
    icon: Sparkles,
    title: 'Atendimento Online',
    desc: 'Sessões remotas com a mesma qualidade, ética e acolhimento do atendimento presencial.',
    href: '/online',
  },
];

const diferenciais = [
  {
    icon: Shield,
    title: 'Ética e sigilo',
    desc: 'Espaço seguro, confidencial e sem julgamentos, alinhado ao Código de Ética da Psicologia.',
  },
  {
    icon: Eye,
    title: 'Escuta qualificada',
    desc: 'Atendimento humanizado, sensível às suas particularidades e ao momento que você vive.',
  },
  {
    icon: Clock,
    title: '+10 anos de experiência',
    desc: 'Formação em Gestalt-Terapia, Orientação de Carreira e Saúde Mental e Desenvolvimento Humano.',
  },
];

const processoSteps = [
  {
    title: 'Acolhimento',
    desc: 'Compreender sua história, demandas e o que você busca neste momento.',
  },
  {
    title: 'Compreensão',
    desc: 'Identificar padrões, recursos emocionais e caminhos possíveis de mudança.',
  },
  {
    title: 'Desenvolvimento',
    desc: 'Construir, na prática, mais autonomia, clareza e qualidade de vida.',
  },
];

const faqItems = [
  {
    question: 'Para quem é indicado o atendimento?',
    answer:
      'Para adolescentes e adultos que buscam apoio emocional, autoconhecimento, manejo de ansiedade, relações, decisões de carreira ou desenvolvimento pessoal — com ou sem um “problema” definido.',
  },
  {
    question: 'As sessões são presenciais ou online?',
    answer:
      'Ambas as modalidades estão disponíveis. O atendimento online mantém a mesma qualidade, ética e acolhimento do presencial.',
  },
  {
    question: 'Quanto tempo dura cada sessão?',
    answer:
      'As sessões possuem duração média de 50 minutos e, em geral, acontecem semanalmente.',
  },
  {
    question: 'Quanto tempo dura o processo terapêutico?',
    answer:
      'Varia conforme objetivos, necessidades e evolução de cada pessoa. Pode durar de alguns meses a mais de um ano, sempre construído de forma individualizada.',
  },
  {
    question: 'Como faço para agendar?',
    answer:
      'Entre em contato pelo WhatsApp. Alinhamos disponibilidade, formato (presencial ou online) e o melhor momento para começar.',
  },
];

const Home = () => {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -60]);
  const heroVideoRef = useRef(null);

  // iOS/Safari fix: force muted via JS so autoplay works on mobile
  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {});
  }, []);


  return (
    <>
      <Helmet>
        <title>Ada Firmino — Psicologia Clínica</title>
        <meta
          name="description"
          content="Ada Firmino, Psicóloga Clínica. Terapia para adolescentes e adultos, autoconhecimento e desenvolvimento emocional em Fortaleza e online."
        />
        <meta property="og:title" content="Ada Firmino — Psicologia Clínica" />
        <meta
          property="og:description"
          content="Terapia para adolescentes e adultos, autoconhecimento e desenvolvimento emocional."
        />
      </Helmet>

      {/* 1. HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 bg-secundaria">
        <motion.div style={{ y: heroY }} className="absolute inset-0 w-full h-full -z-0">
          <video
            ref={heroVideoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="/FOTOS/ABERTURA.mp4"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[#2C4A57]/50" />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1
            className="flex justify-center leading-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <img
              src="/FOTOS/logohero.png"
              alt="Ada Firmino — Psicologia"
              className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain"
            />
          </motion.h1>
          <motion.p
            className="font-corpo text-lg md:text-xl text-neutro/90 mt-6 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.65 }}
          >
            Domine seu emocional com inteligência.
          </motion.p>
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.85 }}
          >
            <Button href="https://wa.me/5585984852741">
              <MessageCircle size={16} className="mr-2" />
              Agendar sessão
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 2. PROBLEMA */}
      <SectionWrapper id="problema" className="bg-primaria/10">
        <FadeIn className="text-center mb-14">
          <p className="font-corpo text-xs tracking-[0.3em] uppercase text-[#99b7c0] mb-3">O que te trouxe até aqui</p>
          <h2 className="font-titulo text-4xl md:text-5xl text-heading title-underline">
            Quando o emocional pede atenção
          </h2>
          <p className="font-corpo text-texto mt-8 max-w-2xl mx-auto leading-relaxed">
            Se você chegou até este espaço, talvez esteja buscando mais clareza, equilíbrio emocional
            ou apoio para enfrentar desafios da vida pessoal, profissional ou acadêmica.
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {problemas.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.12}>
              <div className="text-center md:text-left">
                <item.icon size={28} className="text-primaria mx-auto md:mx-0 mb-5" strokeWidth={1.5} />
                <h3 className="font-titulo text-2xl text-heading mb-3">{item.title}</h3>
                <p className="font-corpo text-texto leading-relaxed">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* 3. QUEM É ADA */}
      <SectionWrapper id="quem-e-ada" className="bg-neutro">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn direction="right" className="w-full max-w-md mx-auto lg:mx-0 aspect-[3/4] overflow-hidden rounded-lg">
            <img
              src="/FOTOS/meconheça.jpg"
              alt="Quem é Ada"
              className="w-full h-full object-cover object-center"
            />
          </FadeIn>

          <div className="flex flex-col gap-6">
            <FadeIn delay={0.1}>
              <p className="font-corpo text-xs tracking-[0.3em] uppercase text-[#99b7c0]">Me conheça</p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="font-titulo text-5xl md:text-6xl text-heading title-underline">Ada Firmino</h2>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="font-corpo text-lg text-texto font-medium">Psicóloga Clínica · CRP 11/12151</p>
            </FadeIn>
            <FadeIn delay={0.4} className="flex flex-col gap-4 font-corpo text-texto leading-relaxed text-base md:text-lg">
              <p>
                Sou psicóloga formada pela Universidade de Fortaleza, com mais de 10 anos de experiência
                em atendimento psicológico. Minha atuação é voltada para o cuidado emocional de forma
                ética, sensível e personalizada.
              </p>
              <p>
                Tenho especialização em Psicologia Clínica com ênfase em Gestalt-Terapia, além de formação
                em Orientação Profissional e de Carreira e em Saúde Mental e Desenvolvimento Humano.
              </p>
              <p>
                Acredito em um atendimento humanizado, baseado na escuta qualificada e na construção de
                um espaço seguro para que você possa se expressar, se compreender e desenvolver seus próprios caminhos.
              </p>
            </FadeIn>
            <FadeIn delay={0.5} className="mt-4">
              <Button href="https://wa.me/5585984852741">
                Agendar sessão
              </Button>
            </FadeIn>
          </div>
        </div>
      </SectionWrapper>

      {/* 4. COMO FUNCIONA */}
      <SectionWrapper id="como-funciona" className="bg-primaria/10">
        <FadeIn className="text-center mb-14">
          <p className="font-corpo text-xs tracking-[0.3em] uppercase text-[#99b7c0] mb-3">Passo a passo</p>
          <h2 className="font-titulo text-4xl md:text-5xl text-heading title-underline">Como funciona</h2>
          <p className="font-corpo text-texto mt-8 max-w-xl mx-auto">
            Um caminho claro, acolhedor e sem burocracia para começar o seu acompanhamento.
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {comoFunciona.map((item, i) => (
            <FadeIn key={item.step} delay={i * 0.12}>
              <div className="border-t border-primaria pt-6">
                <span className="font-titulo text-4xl text-heading/50">{item.step}</span>
                <h3 className="font-titulo text-2xl text-heading mt-3 mb-3">{item.title}</h3>
                <p className="font-corpo text-texto leading-relaxed">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      <VideoSection />

      {/* 5. ESPECIALIDADES */}
      <SectionWrapper id="especialidades" className="bg-neutro">
        <FadeIn className="text-center mb-14">
          <p className="font-corpo text-xs tracking-[0.3em] uppercase text-[#99b7c0] mb-3">Áreas de atuação</p>
          <h2 className="font-titulo text-4xl md:text-5xl text-heading title-underline">Especialidades</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {especialidades.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.12}>
              <motion.div
                className="flex flex-col gap-4 h-full border-t-2 border-primaria pt-8"
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <item.icon size={28} className="text-primaria" strokeWidth={1.5} />
                <h3 className="font-titulo text-2xl text-heading">{item.title}</h3>
                <p className="font-corpo text-texto leading-relaxed flex-grow">{item.desc}</p>
                {item.href.startsWith('/') ? (
                  <Link
                    to={item.href}
                    className="font-corpo text-xs tracking-widest uppercase text-[#99b7c0] hover:text-texto/70 transition-colors mt-2"
                  >
                    Saiba mais →
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-corpo text-xs tracking-widest uppercase text-[#99b7c0] hover:text-texto/70 transition-colors mt-2"
                  >
                    Saiba mais →
                  </a>
                )}
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* 6. DIFERENCIAIS */}
      <SectionWrapper id="diferenciais" className="bg-primaria/10">
        <FadeIn className="text-center mb-14">
          <p className="font-corpo text-xs tracking-[0.3em] uppercase text-[#99b7c0] mb-3">Por que escolher</p>
          <h2 className="font-titulo text-4xl md:text-5xl text-heading title-underline">Diferenciais</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {diferenciais.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.12}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 mb-6 border border-primaria text-primaria bg-neutro">
                  <item.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="font-titulo text-2xl text-heading mb-3">{item.title}</h3>
                <p className="font-corpo text-texto leading-relaxed">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* 7. PROCESSO */}
      <SectionWrapper id="processo" className="bg-neutro">
        <FadeIn className="text-center mb-14">
          <p className="font-corpo text-xs tracking-[0.3em] uppercase text-[#99b7c0] mb-3">Na prática</p>
          <h2 className="font-titulo text-4xl md:text-5xl text-heading title-underline">Processo</h2>
          <p className="font-corpo text-texto mt-8 max-w-2xl mx-auto leading-relaxed">
            Cada pessoa possui sua própria história. Por isso, o processo terapêutico é construído de
            maneira individualizada, respeitando suas necessidades e particularidades.
          </p>
        </FadeIn>
        <div className="max-w-3xl mx-auto space-y-10">
          {processoSteps.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <div className="flex gap-6 items-start">
                <CheckCircle2 size={24} className="text-acento flex-shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h3 className="font-titulo text-2xl text-heading mb-2">{item.title}</h3>
                  <p className="font-corpo text-texto leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.35} className="text-center mt-14">
          <Button href="/processo" variant="primary">
            Conhecer o processo terapêutico
          </Button>
        </FadeIn>
      </SectionWrapper>

      {/* 8. FAQ */}
      <SectionWrapper id="faq" className="bg-primaria/10">
        <FadeIn className="text-center mb-12">
          <p className="font-corpo text-xs tracking-[0.3em] uppercase text-[#99b7c0] mb-3">Dúvidas</p>
          <h2 className="font-titulo text-4xl md:text-5xl text-heading title-underline">FAQ</h2>
        </FadeIn>
        <FadeIn delay={0.15} className="max-w-3xl mx-auto">
          <Accordion items={faqItems} />
        </FadeIn>
      </SectionWrapper>

      {/* 9. DEPOIMENTOS */}
      <SectionWrapper id="depoimentos" className="bg-neutro">
        <FadeIn className="text-center mb-12">
          <p className="font-corpo text-xs tracking-widest uppercase text-[#99b7c0] mb-4">
            Histórias de quem priorizou a saúde mental
          </p>
          <h2 className="font-titulo text-3xl md:text-4xl lg:text-5xl text-heading">
            Depoimentos
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <DepoimentosCarousel />
        </FadeIn>
      </SectionWrapper>

      {/* 10. CONTATO */}
      <SectionWrapper id="contato" className="bg-neutro border-t border-primaria/30">
        <FadeIn className="text-center mb-12">
          <p className="font-corpo text-xs tracking-[0.3em] uppercase text-[#99b7c0] mb-3">Dê o primeiro passo</p>
          <h2 className="font-titulo text-4xl md:text-5xl text-heading title-underline">Contato</h2>
          <p className="font-corpo text-texto mt-8 max-w-xl mx-auto">
            Agende sua sessão e comece um acompanhamento ético, acolhedor e alinhado aos seus objetivos.
          </p>
        </FadeIn>

        <FadeIn delay={0.15} className="flex justify-center mb-16">
          <Button href="https://wa.me/5585984852741" variant="light">
            <MessageCircle size={18} className="mr-2" />
            Falar pelo WhatsApp
          </Button>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="border-t border-primaria/30 pt-12">
            <div className="text-center mb-12">
              <h2 className="font-titulo text-3xl md:text-4xl text-heading title-underline">
                Local de Atendimento
              </h2>
            </div>

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-10 items-start">
              {/* Coluna esquerda — endereço + mapa */}
              <div className="w-full md:w-auto md:shrink-0 text-left">
                <div className="flex items-start gap-2 mb-5">
                  <MapPin size={18} className="text-primaria mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-titulo text-xl text-heading leading-tight">
                      Centro Empresarial 13 de Maio
                    </h3>
                    <p className="font-corpo text-texto text-sm leading-relaxed mt-2">
                      Rua Treze de Maio, nº 197, Centro
                      <br />
                      Maranguape · Sala 105 — 1º andar
                    </p>
                  </div>
                </div>

                <div className="w-[300px] h-[300px] overflow-hidden border border-primaria/30">
                  <iframe
                    title="Local de atendimento — Centro Empresarial 13 de Maio"
                    src="https://www.google.com/maps?q=Rua+Treze+de+Maio,+197,+Centro,+Maranguape,+Cear%C3%A1&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
                <a
                  href="https://maps.google.com/?q=Rua+treze+de+maio,+197,+Centro,+Maranguape,+Sala+105"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 font-corpo text-xs uppercase tracking-widest text-[#99b7c0] hover:text-texto/70 transition-colors"
                >
                  Ver no mapa →
                </a>
              </div>

              {/* Coluna direita — galeria */}
              <div className="w-full flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 self-stretch">
                {[
                  { src: '/FOTOS/04.JPG', alt: 'Consultório — ambiente 1' },
                  { src: '/FOTOS/05.JPG', alt: 'Consultório — ambiente 2' },
                  { src: '/FOTOS/06.png', alt: 'Consultório — ambiente 3' },
                ].map((foto) => (
                  <div key={foto.src} className="w-full h-full min-h-[200px] md:min-h-0 overflow-hidden rounded-lg">
                    <img
                      src={foto.src}
                      alt={foto.alt}
                      className="w-full h-full min-h-[220px] md:min-h-[280px] object-cover rounded-lg"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </SectionWrapper>
    </>
  );
};

export default Home;

import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageCircle, MonitorSmartphone, Clock, ShieldCheck, Map, Video } from 'lucide-react';
import FadeIn from '../components/ui/FadeIn';
import Button from '../components/ui/Button';
import SectionWrapper from '../components/ui/SectionWrapper';

const benefits = [
  { icon: Clock, text: 'Evita deslocamentos e otimiza seu tempo.' },
  { icon: Map, text: 'Possibilita atendimento mesmo em viagens ou mudanças de cidade.' },
  { icon: MonitorSmartphone, text: 'Facilita a conciliação entre terapia, trabalho, estudos e vida pessoal.' },
  { icon: ShieldCheck, text: 'Mantém a mesma ética, sigilo e qualidade do atendimento presencial.' },
  { icon: Video, text: 'Utiliza recursos tecnológicos e instrumentos psicológicos adequados para um acompanhamento eficaz.' },
];

const AtendimentoOnline = () => {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 400], [0, -40]);

  return (
    <>
      <Helmet>
        <title>Atendimento Online - Ada Firmino</title>
        <meta name="description" content="A terapia online oferece praticidade, flexibilidade e qualidade, permitindo que você cuide da sua saúde emocional de qualquer lugar." />
        <meta property="og:title" content="Atendimento Online - Ada Firmino" />
        <meta property="og:description" content="A terapia online oferece praticidade, flexibilidade e qualidade, permitindo que você cuide da sua saúde emocional de qualquer lugar." />
      </Helmet>

      {/* HERO COM IMAGEM DE FUNDO */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-secundaria overflow-hidden pt-28">
        <motion.div style={{ y: heroY }} className="absolute inset-0 w-full h-full">
          <img 
            src="/FOTOS/atendimentoonline.jpg" 
            alt="Fundo Atendimento Online" 
            className="absolute top-0 left-0 w-full h-full object-cover object-center z-0"
          />
          <div className="absolute inset-0 z-[1] bg-[#2C4A57]/50 pointer-events-none" />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-10">
          <motion.p
            className="font-menu text-xs md:text-sm tracking-[0.35em] uppercase text-[#99b7c0] font-bold mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            ADA FIRMINO - ORIENTAÇÃO PROFISSIONAL
          </motion.p>
          <motion.h1
            className="font-logo text-6xl md:text-8xl text-white leading-tight"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
          >
            Atendimento<br />Online
          </motion.h1>
          <motion.p
            className="font-corpo text-lg md:text-xl text-white/95 mt-6 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
          >
            A terapia online oferece praticidade, flexibilidade e qualidade, permitindo que você cuide da sua saúde emocional de qualquer lugar.
          </motion.p>
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65 }}
          >
            <a 
              href="https://wa.me/5585984852741"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-menu tracking-widest uppercase text-xs px-8 py-4 transition-all duration-300 cursor-pointer bg-[#D2A575] text-black font-bold hover:bg-[#C29565] no-underline"
            >
              <MessageCircle size={18} strokeWidth={1.5} />
              AGENDAR ORIENTAÇÃO
            </a>
          </motion.div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <SectionWrapper className="bg-destaque/40">
        <FadeIn className="text-center mb-12">
          <h2 className="font-logo text-3xl md:text-4xl text-heading">Vantagens da modalidade online</h2>
        </FadeIn>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {benefits.map((benefit, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <motion.div
                className="flex items-center gap-5 p-6 bg-principal shadow-sm"
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 280, damping: 20 }}
              >
                <benefit.icon size={28} className="text-coral flex-shrink-0" strokeWidth={1.5} />
                <p className="font-corpo text-lg text-texto leading-relaxed">{benefit.text}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* COMPROMISSO */}
      <SectionWrapper className="bg-marromEscuro/5">
        <FadeIn>
          <div className="border-l-2 border-olivaMedio pl-8 max-w-2xl mx-auto">
             <p className="font-menu text-xs tracking-[0.3em] uppercase text-[#99b7c0] mb-5">Segurança em primeiro lugar</p>
            <p className="font-corpo text-xl md:text-2xl text-texto italic leading-[1.9]">
              "Atendimentos realizados por plataforma segura e com total confidencialidade."
            </p>
          </div>
        </FadeIn>
      </SectionWrapper>

      {/* CTA FINAL */}
      <SectionWrapper className="bg-marromEscuro text-principal text-center">
        <FadeIn>
          <p className="font-menu text-xs tracking-[0.3em] uppercase text-[#99b7c0] mb-4">Pronto para começar?</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-logo text-4xl md:text-5xl mb-8">Agende sua sessão</h2>
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

export default AtendimentoOnline;

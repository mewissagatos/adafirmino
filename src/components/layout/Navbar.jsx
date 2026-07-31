import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';

const sectionLinks = [
  { href: '/#problema', label: 'Problema' },
  { href: '/#quem-e-ada', label: 'Quem é Ada' },
  { href: '/#como-funciona', label: 'Como funciona' },
  { href: '/#especialidades', label: 'Especialidades' },
  { href: '/#diferenciais', label: 'Diferenciais' },
  { href: '/#processo', label: 'Processo' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/#contato', label: 'Contato' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkClass = 'hover:text-acento transition-colors';

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? 'h-20 bg-neutro/95 backdrop-blur-md shadow-sm text-texto border-b border-primaria/30'
          : 'h-28 bg-transparent text-neutro'
      }`}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between gap-4">
        <div className="hidden xl:flex space-x-5 font-corpo text-[11px] uppercase tracking-widest flex-1 min-w-0">
          <Link to="/" className={linkClass}>
            Início
          </Link>
          {sectionLinks.slice(0, 3).map((link) => (
            <a key={link.label} href={link.href} className={linkClass}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex-shrink-0 flex justify-center xl:flex-1">
          <Link to="/" className="inline-flex items-center" aria-label="Ada Firmino">
            <img
              src="/FOTOS/logonavbar.png"
              alt="Ada Firmino"
              className="h-8 md:h-10 w-auto object-contain"
            />
          </Link>
        </div>

        <div className="flex-1 flex justify-end items-center gap-4">
          <div className="hidden xl:flex items-center gap-5 font-corpo text-[11px] uppercase tracking-widest">
            {sectionLinks.slice(3).map((link) => (
              <a key={link.label} href={link.href} className={linkClass}>
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="https://wa.me/5585984852741"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 font-corpo text-xs uppercase tracking-wider hover:text-acento transition-colors"
          >
            <MessageCircle size={18} className="text-primaria" />
            (85) 98485-2741
          </a>

          <button
            className="xl:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-neutro shadow-lg overflow-hidden text-texto border-t border-primaria/20"
          >
            <div className="flex flex-col py-6 px-6 space-y-4 font-corpo uppercase text-sm tracking-widest text-center">
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                Início
              </Link>
              {sectionLinks.map((link) => (
                <a key={link.label} href={link.href} onClick={() => setMobileMenuOpen(false)}>
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/5585984852741"
                className="mt-4 inline-flex items-center justify-center gap-2 bg-acento text-texto px-6 py-3 font-semibold"
              >
                <MessageCircle size={16} /> (85) 98485-2741
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;

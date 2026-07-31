import { motion } from 'framer-motion';

const Button = ({ children, href, onClick, variant = 'primary', className = '', target }) => {
  const base =
    'inline-flex items-center justify-center font-corpo font-semibold tracking-widest uppercase text-xs px-8 py-4 transition-all duration-300 cursor-pointer';

  const variants = {
    primary:
      'bg-acento text-texto hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acento',
    light:
      'bg-acento/90 text-texto hover:bg-acento focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acento',
    outline:
      'border border-primaria text-texto hover:bg-primaria/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaria',
    whatsapp: 'bg-[#25D366] text-white hover:bg-[#1fba56] gap-2',
  };

  const cls = `${base} ${variants[variant]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  };

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');
    return (
      <motion.a
        href={href}
        target={target ?? (isExternal ? '_blank' : undefined)}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className={cls}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} className={cls} {...motionProps}>
      {children}
    </motion.button>
  );
};

export default Button;

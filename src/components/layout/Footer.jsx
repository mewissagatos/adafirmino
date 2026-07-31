const Footer = () => {
  return (
    <footer className="bg-secundaria py-16 px-6 mt-0 text-neutro">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        <div>
          <img
            src="/FOTOS/logorodape.png"
            alt="Ada Firmino"
            className="h-16 md:h-20 w-auto object-contain mb-4 mx-auto md:mx-0"
          />
          <p className="font-corpo font-light text-neutro/80">
            Psicóloga Clínica
            <br />
            CRP: 11/12151
          </p>
        </div>

        <div>
          <h4 className="font-titulo text-lg mb-4 text-acento">Contatos</h4>
          <p className="font-corpo opacity-80">(85) 98485-2741</p>
          <p className="font-corpo opacity-80 mt-2">adafirmino@afservicosdepsicoliagia.com.br</p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-titulo text-lg mb-4 text-acento">Exclusivo</h4>
          <p className="font-corpo font-light opacity-80 text-sm leading-relaxed mb-4">
            Baixe o APP do cliente para agendamentos e acompanhamento.
          </p>
          <a
            href="#"
            className="font-corpo text-xs tracking-widest uppercase text-primaria hover:text-acento underline underline-offset-4 transition-colors"
          >
            Política de Privacidade (LGPD)
          </a>
        </div>
      </div>
      <div className="container mx-auto mt-12 pt-8 border-t border-neutro/20 text-center opacity-60 text-sm font-corpo">
        <p>&copy; {new Date().getFullYear()} Ada Firmino. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;



const SectionWrapper = ({ children, className = '', id = '' }) => {
  return (
    <section
      id={id}
      className={`px-6 md:px-12 lg:px-24 py-20 md:py-28 ${className}`}
    >
      <div className="container mx-auto max-w-5xl">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Identidade sofisticada — gera text-*, bg-*, border-*, etc. */
        primaria: '#9ABAC8',   // Azul suave (estruturas / profundidade)
        secundaria: '#2C4A57', // Azul profundo (fundos / estruturas)
        acento: '#D9A066',     // Bronze/areia (CTAs e detalhes)
        neutro: '#FAFAFA',     // Fundo off-white
        texto: '#464645',      // Textos e subtítulos
        heading: '#3b4a5c',    // Títulos grandes de seção

        /* Aliases */
        azul: '#9ABAC8',
        azulEscuro: '#2C4A57',
        bronze: '#D9A066',
        fundo: '#FAFAFA',
        branco: '#FAFAFA',
      },
      fontFamily: {
        titulo: ['"Bodoni Moda"', 'Didot', 'Georgia', 'serif'],
        corpo: ['Poppins', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
    },
  },
  plugins: [],
}

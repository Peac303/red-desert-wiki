/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        desert: {
          sand: '#E6C384',
          yellow: '#D4AF37',
          gold: '#B8860B',
          amber: '#FFBF00',
        },
        rust: {
          light: '#CD853F',
          medium: '#8B4513',
          dark: '#654321',
        },
        ash: {
          light: '#D3D3D3',
          medium: '#808080',
          dark: '#333333',
        },
        starry: {
          blue: '#1E3A8A',
          indigo: '#312E81',
          purple: '#4338CA',
        },
        earth: {
          brown: '#8B4513',
          tan: '#D2B48C',
          beige: '#F5DEB3',
        },
      },
      fontFamily: {
        desert: ['Montserrat', 'sans-serif'],
        adventure: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
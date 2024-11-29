/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },

      colors: {
        blueDark: '#1B262C',
        blueLigh: '#0F4C75',
        blueEnfasysAlt: '#0C7B93',
        blueEnfasys: '#3282B8',
        blueText: '#BBE1FA',
        enfasys: '#4ADFBF',
        text: '#4ADFBF',
        border: '#4ADFBF',
      },
      boxShadow: {
        profile: 'inset 0 0 0 9px rgba(255, 255, 255, 0.1)',
      },
      keyframes: {
        profileAnimate: {
          '0%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
          '100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
        },
      },
      animation: {
        profile: 'profileAnimate 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

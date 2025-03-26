import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
  
      },
      colors: {
        blue1:"#2B3C3E",
        brown2:"#D37B24",
        yellow3:"#ECCB6C"
      },
    },
  },
  plugins: [],
};

export default config;

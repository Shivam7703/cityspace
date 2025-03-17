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
        green2: '#C0D731',
        green3:"#5E9F13",
        green1: "#0C401C",
        brown2:"#D37B24",
        yellow3:"#ECCB6C"
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--clr-primary)',
        'secondary': 'var(--clr-secondary)',
        'accent-50': 'var(--clr-accent-50)',
        'accent-100': 'var(--clr-accent-100)',
        'accent-300': 'var(--clr-accent-300)',
        'accent-400': 'var(--clr-accent-400)',
        'accent-500': 'var(--clr-accent-500)',
        'accent-900': 'var(--clr-accent-900)'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

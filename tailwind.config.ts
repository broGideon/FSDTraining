import type { Config } from "tailwindcss";

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: {
          foreground: 'rgba(var(--primary-foreground), <alpha-value>)',
          background: 'rgba(var(--primary-background), <alpha-value>)',
        },
        secondary: {
          foreground: 'rgba(var(--secondary-foreground), <alpha-value>)',
          background: 'rgba(var(--secondary-background), <alpha-value>)',
        },
        ternary: 'rgba(var(--ternary), <alpha-value>)',
      },
    },
  },
  plugins: [],
} satisfies Config;

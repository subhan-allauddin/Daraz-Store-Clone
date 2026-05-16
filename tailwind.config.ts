import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        'primary-light': 'hsl(var(--primary-light))',
        'primary': 'hsl(var(--primary))',
        'primary-dark': 'hsl(var(--primary-dark))',
        'accent': 'hsl(var(--accent))',
        'muted': 'hsl(var(--muted))',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-playfair)'],
      },
    },
  },
  plugins: [],
}

export default config

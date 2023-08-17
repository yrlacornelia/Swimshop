import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        current: 'currentColor',
        blue: {
          DEFAULT: '#A0E4F1',
          light: ' #F1FAFB',
          dark:  ' #005986'
        }, 
        grey: {
          DEFAULT: '#f4f4f4',
          dark: '#7f7f7f'
      
        }, 

      }
    },
  },
  plugins: [],
}
export default config

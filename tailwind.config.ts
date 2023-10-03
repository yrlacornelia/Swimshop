import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        current: 'currentColor',
        blue: {
          DEFAULT: '#4993FA',
          light: ' #F1FAFB',
          blueHover: '#A0E4F1',
          dark:  ' #005986'
        }, 
        grey: {
          DEFAULT: '#f4f4f4',
          dark: '#7f7f7f'
      
        }, 
        pink: {
          DEFAULT: '#E19898',
          // dark: '#7f7f7f',
           light: '#E198BD',
      
        }
      }
    },
  },
  plugins: [
      require('flowbite/plugin')
  
  ],
}
export default config

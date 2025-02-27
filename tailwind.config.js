// tailwind.config.js
const {heroui} = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    // Add your own custom paths here, like this:
    // ...
    // make sure it's pointing to the ROOT node_module
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  extend: {
    colors: {
      
      
    
    },
    borderRadius: {
      
    },
    animation: {
     
    },
    keyframes: {
     
    },
    fontFamily: {
		mont: ['var(--font-montserrat)', 'sans-serif'],
		source: ['var(--font-source-sans-3)', 'sans-serif'],
		inter: ['Inter', 'sans-serif'],
    },
    fontWeight: {
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    fontSize: {
      h1: ['2rem', { lineHeight: '2.6rem', letterSpacing: '0%' }],
      h3: ['1.5rem', { lineHeight: '1.5rem', letterSpacing: '0%' }],
      h4: ['1.25rem', { lineHeight: '1.25rem', letterSpacing: '0%' }],
      h5: ['1.125rem', { lineHeight: '1.125rem', letterSpacing: '0%' }],
      h6: ['1rem', { lineHeight: '1rem', letterSpacing: '0%' }],
      h7: ['0.875rem', { lineHeight: '0.875rem', letterSpacing: '0%' }],
      body1: ['1.125rem', { lineHeight: '1.125rem', letterSpacing: '0%' }],
      body2: ['1rem', { lineHeight: '1rem', letterSpacing: '0%' }],
      body3: ['0.875rem', { lineHeight: '0.875rem', letterSpacing: '0%' }],
      body4: ['0.75rem', { lineHeight: '0.75rem', letterSpacing: '0%' }],
     
    },

    boxShadow: {
     
    },
    backgroundImage: {
      
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
			prefix: 'core', // prefix for themes variables
			defaultTheme: 'light', // default theme from the themes object
			defaultExtendTheme: 'light', // default theme to extend on custom themes
			themes: {
				light: {
					extend: 'light',
					layout: {
						boxShadow: {
							small: '0px 1px 2px 0px #15151514',
							large: '',
							medium: '',
						},
						disabledOpacity: '0.3', // opacity-[0.3]
						radius: {
							small: '2px', // rounded-small
							medium: '0.5rem', // rounded-medium
							large: '6px', // rounded-large
						},
						borderWidth: {
							small: '1px', // border-small
							medium: '1px', // border-medium
							large: '2px', // border-large
						},
					},
					colors: {
						primary: {   // green related colours are primary
							DEFAULT: '#00825F',
							foreground: '#FFEFE5',
						 
						},
						secondary: {
							DEFAULT: '#65686F',
							foreground: '#E0E1E2',
						 
						},
						success: {
							DEFAULT: '#51BC51',
							foreground: '#E3FBE3',
						 
						},
						warning: {
							DEFAULT: '#EA9A3E',
							foreground: '#FFEFE5',
					 

						},
						danger: {
							DEFAULT: '#A51818',
							foreground: '#FCE4E4',
							 
						} ,
						background: {
							DEFAULT: '#FFFFFF',
							foreground: '#000000',
						 
						},
						content1: {
							DEFAULT: '#FFFFFF',
			 
						} ,
						content2: {
							DEFAULT: '#555E68',
							foreground: '#EDF1F5',
					 
						} ,

					},
				},
				dark: {
					layout: {},
					colors: {},
				},
			},
		}),
  ],
};
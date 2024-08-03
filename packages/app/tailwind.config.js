import daisyuiPlugin from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 30s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
      boxShadow: {
        '2xl': '-4px -4px 10px 0px rgba(0, 0, 0, 0.10), 4px 4px 10px 0px rgba(0, 0, 0, 0.10)',
        'neon-pink': '0 0 .1rem 1px var(--neon-pink), 0 0 .2rem 1px var(--neon-pink),0 0 0 1px var(--neon-pink)', // Customize this with your desired color
        'neon-white': 'var(--neon-white)', // Customize this with your desired color
      },
      borderColor: {
        'neon-pink': 'var(--border-neon-pink)',
        'neon-white': 'var(--border-neon-white)',
      },
      colors: {
        /***************
         * Base colors *
         ***************/
        blue: {
          DEFAULT: 'var(--brand-color-blue)',
          darker: 'var(--brand-color-blue-darker)',
          translucent: 'var(--brand-color-blue-translucent)',
          // Gradient
          0: '#e2ebff',
          50: '#4965f0',
          100: '#425bde',
          200: '#3a51cc',
          300: '#3347ba',
          400: '#2b3da8',
          500: '#243396',
          600: '#1c297f',
          700: '#171f67',
          800: '#12164f',
          900: '#0d0e38',
          1000: '#080921',
        },
        grey: {
          ...{
            0: '#FFFFFF',
            5: '#FAFAFA',
            10: '#F3F3F3',
            50: '#E7E7E7',
            100: '#CACBCE',
            200: '#ADB1B8',
            300: '#91969F',
            400: '#767C89',
            500: '#5D636F',
            600: '#444A55',
            700: '#2B303B',
            800: '#191E28',
            900: '#0B101B',
            1000: '#050912',
          },
        },

        pink: {
          DEFAULT: 'var(--brand-color-red)',
          translucent: 'var(--brand-color-red-translucent)',
          // Gradient
          0: '#fefeff',
          50: '#e40536',
          100: '#d10330',
          200: '#bf032b',
          300: '#ac0226',
          400: '#9a0221',
          500: '#87001c',
          600: '#730017',
          700: '#600012',
          800: '#4d000e',
          900: '#3b0009',
          1000: '#280004',
        },
        red: {
          DEFAULT: 'var(--brand-dark-red)',
          // Gradient
          0: '#fffefe',
          50: '#d63c5e',
          100: '#c23a56',
          200: '#af384e',
          300: '#9c3546',
          400: '#89333e',
          500: '#753136',
          600: '#622e2e',
          700: '#4f2c26',
          800: '#3c291e',
          900: '#2a2716',
          1000: '#17140e',
        },
        dark: 'var(--brand-gray-dark-text)',
        border: 'var(--brand-gray-border)',
        background: 'var(--brand-gray-background)',
        light: 'var(--brand-gray-light-text)',
        lightTranslucent: 'var(--brand-gray-light-text-translucent)',
        hover: 'var(--brand-gray-hover)',
        green: {
          DEFAULT: 'var(--brand-color-green)',
          translucent: 'var(--brand-color-green-translucent)',
        },
        yellow: {
          DEFAULT: 'var(--brand-light-green)',
        },
        orange: {
          DEFAULT: 'var(--brand-cool-accent)',
        },
        /*******************
         * Semantic colors *
         *******************/
        cool: {
          DEFAULT: 'var(--brand-cool-background)',
          background: 'var(--brand-cool-background)',
          border: 'var(--brand-cool-border)',
          text: 'var(--brand-cool-text)',
          accent: 'var(--brand-cool-accent)',
        },
        warm: {
          DEFAULT: 'var(--brand-warm-background)',
          background: 'var(--brand-warm-background)',
          border: 'var(--brand-warm-border)',
          text: 'var(--brand-warm-text)',
          accent: 'var(--brand-warm-accent)',
        },
        primary: {
          DEFAULT: 'var(--primary-brand)',
          brand: 'var(--primary-brand)',
          content: 'var(--primary-content)',
          link: {
            DEFAULT: 'var(--primary-link)',
            hover: 'var(--primary-link-hover)',
          },
          icon: 'var(--primary-icon)',
          background: {
            DEFAULT: 'var(--primary-background)',
            highlight: 'var(--primary-background-highlight)',
            landing: 'var(--background-landing-page-base)',
          },
          interactive: {
            DEFAULT: 'var(--primary-interactive)',
            hover: 'var(--primary-interactive-accent)',
            accent: 'var(--primary-interactive-accent)',
          },
          border: {
            DEFAULT: 'var(--primary-border)',
            hover: 'var(--primary-border-hover)',
            accent: 'var(--primary-border-accent)',
            gradient: 'var(--primary-border-gradient)',
          },
          base: {
            content: 'var(--primary-base-content)',
            background: 'var(--primary-base-background)',
          },
        },
        secondary: {
          DEFAULT: 'var(--secondary-brand)',
          brand: 'var(--secondary-brand)',
          content: 'var(--secondary-content)',
          icon: 'var(--secondary-icon)',
          interactive: {
            hover: 'var(--secondary-interactive-hover)',
          },
        },
        tertiary: {
          content: 'var(--tertiary-content)',
          interactive: {
            hover: 'var(--tertiary-interactive-hover)',
            accent: 'var(--tertiary-interactive-accent)',
          },
        },
        positive: {
          sentiment: 'var(--positive-sentiment)',
          background: 'var(--positive-background)',
        },
        negative: {
          sentiment: 'var(--negative-sentiment)',
          background: 'var(--negative-background)',
        },
        success: {
          DEFAULT: 'var(--success)',
          light: 'var(--success-light)',
        },
        warning: {
          DEFAULT: 'var(--warning-sentiment)',
          light: 'var(--warning-light)',
          sentiment: 'var(--warning-sentiment)',
          background: 'var(--warning-background)',
        },
        'elevated-background': 'var(--elevated-background)',
        'neutral-background': 'var(--neutral-background)',
        'overlay-background': 'var(--overlay-background)',
        'divider-border': 'var(--divider-border)',
      },
    },
  },
  plugins: [daisyuiPlugin],
  // https://daisyui.com/docs/config/
  daisyui: {
    darkTheme: 'dark', // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
    themes: [
      {
        dark: {
          '--brand-bg-green': '#edf2f0',
          '--brand-dark-red': '#d63c5e',
          '--brand-light-green': '#6da886',
          '--brand-black': '#212529',
          /* Colors from Figma  */
          '--brand-cool-background': '#d5d7e1',
          '--brand-cool-border': 'rgb(189,192,207)',
          '--brand-cool-text': '#151c3b',
          '--brand-cool-accent': '#e9ebf3',
          '--brand-warm-background': '#e1d7d5',
          '--brand-warm-border': 'rgb(207,189,186)',
          '--brand-warm-text': '#221b1a',
          '--brand-warm-accent': '#f9f1f1',
          '--brand-gray-dark-text': '#14161b',
          '--brand-gray-border': '#e2e3eb',
          '--brand-gray-background': '#f4f4f8',
          '--brand-gray-light-text': '#8c8d92',
          '--brand-gray-light-text-translucent': 'rgb(140,141,146,0.1)',
          '--brand-gray-hover': '#fafafb',
          '--brand-color-red': '#e40536',
          '--brand-color-blue': '#4965f0',
          '--brand-color-green': '#43b369',
          '--brand-color-red-translucent': 'rgba(214,60,94,0.1)',
          '--brand-color-blue-translucent': 'rgba(73,101,240,0.1)',
          '--brand-color-green-translucent': 'rgba(67,179,105,0.1)',
          '--brand-color-blue-darker': '#3a52c7',
        },
        light: {
          '--brand-bg-green': '#edf2f0',
          '--brand-dark-red': '#d63c5e',
          '--brand-light-green': '#6da886',
          '--brand-black': '#212529',
          /* Colors from Figma  */
          '--brand-cool-background': '#d5d7e1',
          '--brand-cool-border': 'rgb(189,192,207)',
          '--brand-cool-text': '#79809c',
          '--brand-cool-accent': '#e9ebf3',
          '--brand-warm-background': '#e1d7d5',
          '--brand-warm-border': 'rgb(207,189,186)',
          '--brand-warm-text': '#8f7e7c',
          '--brand-warm-accent': '#f9f1f1',
          '--brand-gray-dark-text': '#14161b',
          '--brand-gray-border': '#e2e3eb',
          '--brand-gray-background': '#f4f4f8',
          '--brand-gray-light-text': '#8c8d92',
          '--brand-gray-light-text-translucent': 'rgb(140,141,146,0.1)',
          '--brand-gray-hover': '#fafafb',
          '--brand-color-red': '#e40536',
          '--brand-color-blue': '#4965f0',
          '--brand-color-green': '#43b369',
          '--brand-color-red-translucent': 'rgba(214,60,94,0.1)',
          '--brand-color-blue-translucent': 'rgba(73,101,240,0.1)',
          '--brand-color-green-translucent': 'rgba(67,179,105,0.1)',
          '--brand-color-blue-darker': '#3a52c7',
        },
      },
    ],
  },
};

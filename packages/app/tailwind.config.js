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
          DEFAULT: 'var(--color-base-blue-200)',
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

        primary: {
          DEFAULT: 'var--color-primary-100)',
          brand: 'var--color-primary-100)',
          content: {
            DEFAULT: 'var(--color-primary-100)',
            light: 'var(--color-primary-200)',
          },
          link: {
            DEFAULT: 'var(--color-primary-100)',
            hover: 'var(--color-primary-200)',
          },
          icon: 'var(--color-primary-100)',
          background: {
            DEFAULT: 'var(--color-surface-100)',
            elevated: 'var(--color-surface-200)',
            highlight: 'var(--color-surface-300)',
          },
          interactive: {
            DEFAULT: 'var(--color-primary-300)',
            hover: 'var(--color-primary-300)',
            accent: 'var(--color-primary-500)',
          },
          border: {
            DEFAULT: 'var(--color-primary-400)',
            hover: 'var(--color-primary-400)',
            accent: 'var(--color-primary-600)',
          },
          base: {
            DEFAULT: 'var--color-base-blue-100)',
            content: 'var(--primary-base-content)',
            background: 'var(--primary-base-background)',
          },
          button: {
            DEFAULT: 'var(--color-surface-300)',
            hover: 'var(--color-surface-300)',
            accent: 'var(--color-surface-300)',
          },
        },
        secondary: {
          DEFAULT: 'var--color-secondary-100)',
          brand: 'var--color-secondary-100)',
          content: {
            DEFAULT: 'var(--color-secondary-100)',
            light: 'var(--color-secondary-200)',
          },
          link: {
            DEFAULT: 'var(--color-secondary-100)',
            hover: 'var(--color-secondary-200)',
          },
          icon: 'var(--color-secondary-100)',
          background: {
            DEFAULT: 'var(--color-surface-100)',
            elevated: 'var(--color-surface-200)',
            highlight: 'var(--color-surface-300)',
          },
          interactive: {
            DEFAULT: 'var(--color-secondary-300)',
            hover: 'var(--color-secondary-300)',
            accent: 'var(--color-secondary-500)',
          },
          border: {
            DEFAULT: 'var(--color-secondary-400)',
            hover: 'var(--color-secondary-400)',
            accent: 'var(--color-secondary-600)',
          },
          base: {
            content: 'var(--secondary-base-content)',
            background: 'var(--secondary-base-background)',
          },
          button: {
            DEFAULT: 'var(--color-surface-300)',
            hover: 'var(--color-surface-300)',
            accent: 'var(--color-surface-300)',
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
          "--color-primary-100": "#ffffff",
          "--color-primary-200": "#ffffff",
          "--color-primary-300": "#ffffff",
          "--color-primary-400": "#ffffff",
          "--color-primary-500": "#ffffff",
          "--color-primary-600": "#ffffff",

          "--color-secondary-100": "#8b8b8b",
          "--color-secondary-200": "#8b8b8b",
          "--color-secondary-300": "#8b8b8b",
          "--color-secondary-400": "#8b8b8b",
          "--color-secondary-500": "#8b8b8b",
          "--color-secondary-600": "#8b8b8b",

          "--color-surface-100": "#121212",
          "--color-surface-200": "#282828",
          "--color-surface-300": "#3f3f3f",
          "--color-surface-400": "#575757",
          "--color-surface-500": "#717171",
          "--color-surface-600": "#8b8b8b",
          "--color-surface-mixed-100": "#252525",
          "--color-surface-mixed-200": "#393939",
          "--color-surface-mixed-300": "#4f4f4f",
          "--color-surface-mixed-400": "#666666",
          "--color-surface-mixed-500": "#7d7d7d",
          "--color-surface-mixed-600": "#969696",

          "--color-base-blue-100": "#0052FF",
          "--color-base-blue-200": "#1F66FF",

          '--brand-bg-green': '#121212',
          '--brand-dark-red': '#d63c5e',
          '--brand-light-green': '#6da886',
          '--brand-black': '#121212',
          /* Colors from Figma  */
          '--brand-cool-background': '#121212',
          '--brand-cool-border': 'rgb(189,192,207)',
          '--brand-cool-text': '#151c3b',
          '--brand-cool-accent': '#e9ebf3',
          '--brand-warm-background': '#121212',
          '--brand-warm-border': 'rgb(207,189,186)',
          '--brand-warm-text': '#221b1a',
          '--brand-warm-accent': '#f9f1f1',
          '--brand-gray-dark-text': '#14161b',
          '--brand-gray-border': '#e2e3eb',
          '--brand-gray-background': '#121212',
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

          "--color-base-blue-100": "#0052FF",
          "--color-base-blue-200": "#1F66FF",

          /* Colors from Figma  */
          '--brand-cool-background': '#121212',
          '--brand-cool-border': 'rgb(189,192,207)',
          '--brand-cool-text': '#79809c',
          '--brand-cool-accent': '#e9ebf3',
          '--brand-warm-background': '#121212',
          '--brand-warm-border': 'rgb(207,189,186)',
          '--brand-warm-text': '#8f7e7c',
          '--brand-warm-accent': '#f9f1f1',
          '--brand-gray-dark-text': '#14161b',
          '--brand-gray-border': '#e2e3eb',
          '--brand-gray-background': '#121212',
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

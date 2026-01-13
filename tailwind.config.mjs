/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '2.5rem',
        '2xl': '3rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      }
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            color: 'rgb(var(--tw-prose-body))',
            lineHeight: '1.75',
            fontSize: '1rem',
            h1: {
              fontSize: '2.25rem',
              fontWeight: '800',
              lineHeight: '1.2',
            },
            h2: {
              fontSize: '1.875rem',
              fontWeight: '700',
              lineHeight: '1.3',
            },
            h3: {
              fontSize: '1.5rem',
              fontWeight: '600',
              lineHeight: '1.4',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            code: {
              backgroundColor: 'rgb(var(--tw-prose-pre-bg))',
              padding: '0.25rem 0.375rem',
              borderRadius: '0.375rem',
              fontSize: '0.875em',
              fontWeight: '500',
            },
            pre: {
              backgroundColor: 'rgb(var(--tw-prose-pre-bg))',
              borderRadius: '0.75rem',
              fontSize: '0.875em',
              lineHeight: '1.7',
            },
          },
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'Consolas',
          'monospace',
        ],
      },
      colors: {
        // Gruvbox Dark Theme Colors
        gruvbox: {
          bg: {
            hard: '#1d2021',
            DEFAULT: '#282828',
            soft: '#32302f',
            0: '#282828',
            1: '#3c3836',
            2: '#504945',
            3: '#665c54',
            4: '#7c6f64',
          },
          fg: {
            DEFAULT: '#ebdbb2',
            0: '#fbf1c7',
            1: '#ebdbb2',
            2: '#d5c4a1',
            3: '#bdae93',
            4: '#a89984',
          },
          red: {
            DEFAULT: '#fb4934',
            dark: '#cc241d',
            light: '#fb4934',
          },
          green: {
            DEFAULT: '#b8bb26',
            dark: '#98971a',
            light: '#b8bb26',
          },
          yellow: {
            DEFAULT: '#fabd2f',
            dark: '#d79921',
            light: '#fabd2f',
          },
          blue: {
            DEFAULT: '#83a598',
            dark: '#458588',
            light: '#83a598',
          },
          purple: {
            DEFAULT: '#d3869b',
            dark: '#b16286',
            light: '#d3869b',
          },
          aqua: {
            DEFAULT: '#8ec07c',
            dark: '#689d6a',
            light: '#8ec07c',
          },
          orange: {
            DEFAULT: '#fe8019',
            dark: '#d65d0e',
            light: '#fe8019',
          },
          gray: {
            DEFAULT: '#928374',
            dark: '#928374',
            light: '#a89984',
          },
        },
        primary: {
          50: '#f7f3e9',
          100: '#ebdbb2',
          200: '#d5c4a1',
          300: '#bdae93',
          400: '#a89984',
          500: '#83a598',
          600: '#458588',
          700: '#076678',
          800: '#427b58',
          900: '#282828',
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'slide-up': 'slide-up 0.3s ease-out forwards',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
        '.text-balance': {
          'text-wrap': 'balance',
        },
      })
    }
  ],
}

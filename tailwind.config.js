/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        carbon: {
          950: '#080b0f',
          900: '#0d1117',
          850: '#111620',
          800: '#161b24',
          700: '#212836',
          600: '#303b4d',
        },
        cyber: {
          emerald: '#10b981',
          emeraldLight: '#34d399',
          emeraldDark: '#059669',
          lime: '#a3e635',
          limeLight: '#bef264',
          teal: '#14b8a6',
          mint: '#6ee7b7'
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'neon-emerald': '0 0 20px -2px rgba(16, 185, 129, 0.45), 0 0 8px 0px rgba(16, 185, 129, 0.3)',
        'neon-emerald-lg': '0 0 35px -2px rgba(16, 185, 129, 0.6), 0 0 15px 0px rgba(163, 230, 53, 0.35)',
        'neon-lime': '0 0 20px -2px rgba(163, 230, 53, 0.5)',
        'glow-subtle': '0 0 40px -10px rgba(16, 185, 129, 0.15)',
        'cyber-card': '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(16, 185, 129, 0.15)',
      },
      animation: {
        'radar-ping': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'grid-shift': 'gridShift 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        gridShift: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '40px 40px' },
        }
      }
    },
  },
  plugins: [],
}


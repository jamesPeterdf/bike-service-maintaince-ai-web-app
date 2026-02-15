/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0f', // Void Black
        foreground: '#e0e0e0', // Sci-fi White
        card: {
          DEFAULT: 'rgba(20, 20, 30, 0.6)', // Glassmorphism dark
          foreground: '#e0e0e0',
        },
        popover: {
          DEFAULT: '#1a1a24',
          foreground: '#e0e0e0',
        },
        primary: {
          DEFAULT: '#00f0ff', // Cyber Cyan
          foreground: '#000000',
        },
        secondary: {
          DEFAULT: '#7000ff', // Electric Purple
          foreground: '#ffffff',
        },
        accent: {
          DEFAULT: '#ff003c', // Neon Red/Pink
          foreground: '#ffffff',
        },
        muted: {
          DEFAULT: 'rgba(255, 255, 255, 0.1)',
          foreground: '#a0a0a0',
        },
        destructive: {
          DEFAULT: '#ff003c',
          foreground: '#ffffff',
        },
        border: 'rgba(0, 240, 255, 0.2)', // Faint Cyan Border
        input: 'rgba(255, 255, 255, 0.05)',
        ring: '#00f0ff',
      },
      borderRadius: {
        lg: `1rem`,
        md: `0.75rem`,
        sm: `0.5rem`,
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      boxShadow: {
        'neon': '0 0 10px rgba(0, 240, 255, 0.5), 0 0 20px rgba(0, 240, 255, 0.3)',
        'neon-purple': '0 0 10px rgba(112, 0, 255, 0.5), 0 0 20px rgba(112, 0, 255, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'scanline': 'scanline 8s linear infinite',
        'hologram': 'hologram 4s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' }
        },
        'scanline': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' }
        },
        'hologram': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.8 },
          '52%': { opacity: 0.9 },
          '54%': { opacity: 0.8 },
          '56%': { opacity: 1 },
        }
      }
    },
  },
  plugins: [],
}

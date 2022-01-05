const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  media: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: {
        light: '#85d7ff',
        DEFAULT: '#1fb6ff',
        dark: '#009eeb',
        middrak:'#008080'
      },
      green: {
        light: '#008000',
        DEFAULT: '	#7CFC00',
        dark: '#00FF00',
        middark: '#32CD32',
        lowdark: '#228B22',
        low:'	#3CB371'
      },
      pink: {
        light: '#ff7ce5',
        DEFAULT: '#ff49db',
        dark: '#ff16d1',
        low:'#B22222'
      },
      gray: {
        darkest: '#1f2d3d',
        dark: '#3c4858',
        darkl: '#A9A9A9',
        darklp:'#696969',
        DEFAULT: '#c0ccda',
        light: '#e0e6ed',
        lightest: '#ffffff',
        black:'#100c03',
        hitam:'#000000'
      },
      coklat: {
        dark: '#2d1a10',
        middark: '#9f603c',
        lowdark:'#483833'
      },
    },
    container: {
        center: true
    },
    extend: {
      fontFamily: {
        'sans': ['Patrick Hand', 'Arial', 'sans-serif'],
        'produk': ['Merriweather Sans',  ],
        'produkjudul': ['aroma'],
        'produk1': ['Lora'],
        'produk2': ['Poppins'],
        'produk3': ['Anaheim'],
        'produk4': ['algerian'],
        'produk5': ['Hahmlet'],
        
       
      },
      spacing: {
        '128': '32rem',
      },
      maxWidth: {
        '1/8': '98%',
      },
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/coba.jpg')",
        'halaman-texture': "url('/baru.jpg')",
        'halaman-pesanan': "url('/login-new.jpeg')",
       },
       backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
       '100%': '100%',
       '16': '4rem',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#000000',
            maxWidth:'100%',
          },
        },
      },
    },

  },
  variants: {
    extend: {
      backgroundSize: ['hover', 'focus'],
    },
    backgroundImage: ['hover', 'focus'],
  },
  plugins: [require("@tailwindcss/line-clamp"),
  require('@tailwindcss/typography'),
    plugin(({ addUtilities }) => {
      const utilities = {
        '.bg-search': {
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg opacity='0.1'%3E%3Cpath d='M6.41667 11.0833C8.994 11.0833 11.0833 8.994 11.0833 6.41667C11.0833 3.83934 8.994 1.75 6.41667 1.75C3.83934 1.75 1.75 3.83934 1.75 6.41667C1.75 8.994 3.83934 11.0833 6.41667 11.0833Z' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M12.25 12.25L9.71251 9.71246' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3C/svg%3E%0A")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '20px'
        }
      }
      addUtilities(utilities);
    })
  ],
}

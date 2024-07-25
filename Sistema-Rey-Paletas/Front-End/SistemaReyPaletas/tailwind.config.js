/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        berskshire:['Berkshire Swash', 'cursive']
      },
      screens: {
        'x':'320px',
        'xs': '400px',  // Tamaño de pantalla extra pequeño
        'sm': '640px',  // Tamaño de pantalla pequeño (ya definido por defecto)
        'md': '768px',  // Tamaño de pantalla mediano (ya definido por defecto)
        'lg': '1024px', // Tamaño de pantalla grande (ya definido por defecto)
        'xl': '1280px', // Tamaño de pantalla extra grande (ya definido por defecto)
        '2xl': '1536px', // Tamaño de pantalla extra extra grande (ya definido por defecto)
        '3xl': '1920px', // Tamaño de pantalla personalizado
        '4k': '3840px',  // Tamaño de pantalla 4K personalizado
      },
    },
  },
  plugins: [],
}


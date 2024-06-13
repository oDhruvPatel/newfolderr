/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        html: '#E34F26',
        css: '#1572B6',
        javascript: '#F7DF1E',
        typescript: '#3178C6',
        react: '#61DAFB',
        tailwindcss: '#06B6D4',
        bootstrap: '#7952B3',
        node: '#339933',
        django: '#092E20',
        express: '#000000',
        mongodb: '#47A248',
        mysql: '#4479A1',
        postgresql: '#336791',
        git: '#F05032',
        github: '#181717',
        python: '#3776AB',
        java: '#007396',
        c: '#A8B9CC',
        cplusplus: '#00599C',
        tensorflow: '#FF6F00',
        pytorch: '#EE4C2C'
      }
    },
  },
  plugins: [],
}
import tailwindcss from '@tailwindcss/vite'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  plugins: [tailwindcss()],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // 根据项目结构调整路径
  ],
  theme: {
    extend: {
      spacing: {
      },
    },
  },
  plugins: [],
}


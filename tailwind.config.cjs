/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffcd44", // Primary Color
        "primary-dark": "#000000", // Darkest Shade
        "primary-darker": "#0d0e0f", // Darker Shade
        "dark-shade": "#1a1d1f", // Dark Shade
        "medium-shade": "#272c2f", // Medium Shade
      },
    },
  },
  plugins: [],
};

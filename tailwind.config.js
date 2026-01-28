// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Include all paths where your components are located
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // --- THIS IS THE CRITICAL PART ---
        // 1. 'heading' is the name of the utility class (e.g., 'font-heading')
        // 2. 'var(--font-heading)' uses the CSS variable defined in layout.tsx
        heading: ["var(--font-heading)", "serif"], 
        body: ["var(--font-body)", "sans-serif"],
        // ----------------------------------
      },
    },
  },
  plugins: [],
};
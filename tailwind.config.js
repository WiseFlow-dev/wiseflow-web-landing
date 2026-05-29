/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FAF8F5",
        surface: "#FFFFFF",
        surfaceVariant: "#F1EEE8",
        surfaceBorder: "rgba(17, 24, 39, 0.08)",
        textMain: "#111827",
        textSub: "#5B6472",
        primary: "#21C47B",
        secondary: "#3A86FF",
        info: "#4F46E5"
      },
      fontFamily: {
        heading: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        mono: ["Space Mono", "monospace"]
      }
    }
  },
  plugins: []
};

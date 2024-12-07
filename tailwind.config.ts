import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"], // Default sans-serif stack
      },
      colors: {
        primary: {
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          DEFAULT: "var(--primary)",
          400: "var(--primary-400)",
          500: "var(--primary-500)",
        },
        neutral: {
          100: "var(--neutral-100)",
          200: "var(--neutral-200)",
          DEFAULT: "var(--neutral)",
          400: "var(--neutral-400)",
          500: "var(--neutral-500)",
        },
        success: {
          100: "var(--success-100)",
          200: "var(--success-200)",
          DEFAULT: "var(--success)",
          400: "var(--success-400)",
          500: "var(--success-500)",
        },
        warning: {
          100: "var(--warning-100)",
          200: "var(--warning-200)",
          DEFAULT: "var(--warning)",
          400: "var(--warning-400)",
          500: "var(--warning-500)",
        },
        danger: {
          100: "var(--danger-100)",
          200: "var(--danger-200)",
          DEFAULT: "var(--danger)",
          400: "var(--danger-400)",
          500: "var(--danger-500)",
        },
        info: {
          100: "var(--info-100)",
          200: "var(--info-200)",
          DEFAULT: "var(--info)",
          400: "var(--info-400)",
          500: "var(--info-500)",
        },
      },
      fontSize: {
        DEFAULT: "var(--p-size)",
        h1: "var(--h1-size)",
        h2: "var(--h2-size)",
        h3: "var(--h3-size)",
        h4: "var(--h4-size)",
        small: "var(--small-size)",
      },
      fontWeight: {
        light: "300",
        normal: "400",
        medium: "500",
        bold: "700",
      },
    },
  },
  plugins: [],
} satisfies Config;

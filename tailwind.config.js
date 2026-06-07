/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        military: {
          50:  "#f4f6f4",
          100: "#e3e8e2",
          200: "#c1d0bf",
          300: "#94ae90",
          400: "#6b8c66",
          500: "#4d6f48",
          600: "#3a5737",
          700: "#2f462e",
          800: "#283928",
          900: "#1d2a1d",
          950: "#0f180f"
        },
        sand: {
          50:  "#fbf8f3",
          100: "#f4ecdc",
          200: "#e8d6b6",
          300: "#d9b988",
          400: "#c89b5e",
          500: "#b88144"
        },
        steel: {
          700: "#37414a",
          800: "#283139",
          900: "#1b232c"
        }
      },
      fontFamily: {
        sans: ["PingFang SC", "Microsoft YaHei", "system-ui", "sans-serif"],
        display: ["Smiley Sans", "PingFang SC", "system-ui", "sans-serif"]
      },
      boxShadow: {
        hard: "6px 6px 0 0 rgba(15,24,15,1)",
        card: "0 2px 16px rgba(15,24,15,.08)"
      }
    }
  },
  plugins: []
};

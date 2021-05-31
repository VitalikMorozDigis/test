module.exports = {
  purge: {
    content: ["./src/**/*.js", "./src/**/*.html"],
  },
  important: true,
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        "2xl": "1536px",
      },
      fontFamily: {
        poppins: "Poppins",
        roboto: "Roboto",
      },
      minHeight: {
        16: "4rem",
      },
      height: {
        25: "25rem",
      },
      width: {
        30: "30%",
      },
      colors: {
        tertiary: {
          900: "#193A6F",
          700: "#2758a9",
          500: "#3C7BE2",
          300: "#6894DD",
          50: "#DAE6FA",
        },
        secondary: {
          100: "#7F9C7E",
          600: "#355A38",
          500: "#21B881",
        },
        primary: {
          600: "#C55E65",
          500: "#E26F77",
          400: "#F58B92",
          300: "#FFA9AE",
          200: "#FFC8CB",
          100: "#FFE7E7",
        },
        black: {
          low: "#969FAA",
          medium: "#4A4A4A",
          high: "#282F36",
        },
        dark: "#F7F5F5",
        light: "#FAFAFA",
        "green-medium": "#E8F2EE",
        "yellow-light": "#FFFCF1",
        silver: "#CED3D9",
      },
      fontSize: {
        xxs: "0.625rem",
        "3-5xl": "2.1rem",
        "4-5xl": "2.5rem",
        "4-7xl": "2.7rem",
        "5-5xl": "3.5rem",
        "7xl": "5rem",
        "15": "0.94rem",
      },
      spacing: {
        "14": "3.5rem",
        "69": "19.8rem",
        "70": "22rem",
        "96": "24rem",
        "104": "26rem",
        "120": "36rem",
        chat: "42rem",
        "1/2": "50%",
        "1/3": "33.333333%",
        "1/3-5": "28.571428%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.666667%",
        "1/7": "14.285714%",
        "2/6": "33.333333%",
        "3/6": "50%",
        "4/6": "66.666667%",
        "5/6": "83.333333%",
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
        full: "100%",
        x40: "-2.8rem",
      },
      inset: (theme, { negative }) => ({
        ...theme("width"),
        ...negative(theme("width")),
      }),
    },
  },
  variants: {
    display: ["responsive", "hover"],
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
  future: {
    removeDeprecatedGapUtilities: true,
  },
};
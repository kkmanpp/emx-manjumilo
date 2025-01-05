/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      // smallMobile: "0px",
      // mobile: "480px",
      // smallTablet: "576px",
      // tablet: "640px", // @media(min-width: 640px)
      // largeTablet: "768px",
      // laptop: "1024px",
      // desktop: "1280px",
      mobile: "0px",
      largeMobile: "480px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",

      //   desktop: "1280px",
      //   laptop: { raw: "(max-width:1279px)" },
      //   tablet: { raw: "(max-width:768px)" },
      //   mobile: { raw: "(max-width:480px)" },
    },
    extend: {
      colors: {
        transparent: "transparent",
        White: "#FFFFFF",
        Grey: {
          50: "#F8F8F8",
          100: "#F0F0F0",
          200: "#E5E5E5",
          300: "#D3D3D4",
          400: "#AFAFAF",
          500: "#8E8E8F",
          600: "#676767",
          700: "#535354",
          800: "#353536",
          900: "#161616",
        },
        Black: "#000000",
        Yellow: {
          10: "#FDFAF2",
          50: "#FFF7E1",
          100: "#ffebb3",
          200: "#ffde82",
          300: "#ffd250",
          400: "#ffc72c",
          500: "#ffbd13",
          600: "#feb00e",
          700: "#fe9d0e",
          800: "#fd8c0e",
          900: "#fd6c0d",
        },
        Green: {
          50: "#E0F7F1",
          100: "#B2EAD9",
          200: "#7EDDC1",
          300: "#3FCEA8",
          400: "#00C195",
          500: "#00B484",
          600: "#00A577",
          700: "#009467",
          800: "#578e55",
          900: "#2b5e29",
        },
        Red: {
          50: "#FDE7E5",
          100: "#FFC6B7",
          200: "#FFA089",
          300: "#FF785A",
          400: "#FF5536",
          500: "#FF2810",
          600: "#EF1505",
          700: "#E10000",
        },
        Blue: {
          50: "#E2F1FF",
          100: "#BADDFF",
          200: "#8DC8FF",
          300: "#5DB2FF",
          400: "#37A1FF",
          500: "#0991FF",
          600: "#1383F0",
          700: "#1670DC",
        },
      },
      fontSize: {
        p5: "0.9rem",
        p4: "1.1rem", // xs
        p3: "1.3rem", // sm
        p2: "1.4rem", // tiny
        p1: "1.6rem", // base
      },
      fontWeight: {
        medium: 500, // Medium
        bold: 700, // Bold
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        semibold: 600,
        extrabold: 800,
      },
    },
  },
  plugins: [],
};

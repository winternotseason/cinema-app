/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        cinema:
          "linear-gradient(180deg, rgba(0,0,0,0.5928965336134453) 0%, rgba(255,255,255,0) 60%, rgba(0,0,0,1) 100%)",
      },
      width: {
        1920: "1920px",
        200: "60rem",
      },
      height: {
        770: "770px",
        1100: "1100px",
      },
    },
  },
  plugins: [import("flowbite/plugin")],
};

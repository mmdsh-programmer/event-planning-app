import withMT from "@material-tailwind/react/utils/withMT.js";

const config = withMT({
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        iranYekan: ["IranYekan", "sans-serif"],
      },
    },
  },
  plugins: [],
});
export default config;

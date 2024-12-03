import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        humanist:
          "Seravek, 'Gill Sans Nova', Ubuntu, Calibri, 'DejaVu Sans', source-sans-pro, sans-serif",
        ["geometric-humanist"]:
          "Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif",
        ["classical-humanist"]:
          "Optima, Candara, 'Noto Sans', source-sans-pro, sans-serif",
        ["neo-grotesque"]:
          "Inter, Roboto, 'Helvetica Neue', 'Arial Nova', 'Nimbus Sans', Arial, sans-serif",
        ["industrial"]:
          "Bahnschrift, 'DIN Alternate', 'Franklin Gothic Medium', 'Nimbus Sans Narrow', sans-serif-condensed, sans-serif",
        ["rounded-sans"]:
          "ui-rounded, 'Hiragino Maru Gothic ProN', Quicksand, Comfortaa, Manjari, 'Arial Rounded MT', 'Arial Rounded MT Bold', Calibri, source-sans-pro, sans-serif",
      },
    },
  },
  plugins: [],
} satisfies Config;

import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};
const fonts = {
  body: `'Open Sans', sans-serif`,
  heading: `'Montserrat', sans-serif`,
};

const theme = extendTheme({ colors, fonts, config });

export default theme;

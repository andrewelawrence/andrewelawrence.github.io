import { DefaultTheme } from "styled-components";

export type Themes = {
  [key: string]: DefaultTheme;
};

const theme: Themes = {
  dark: {
    id: "T_001",
    name: "dark",
    colors: {
      body: "#0C0C0C",
      scrollHandle: "#CCCCCC",
      scrollHandleHover: "#F2F2F2",
      primary: "#B4009E",
      secondary: "#61D6D6",
      text: {
        100: "#CCCCCC",
        200: "#BFBFBF",
        300: "#B3B3B3",
      },
    },
  },
  light: {
    id: "T_002",
    name: "light",
    colors: {
      body: "#F3F3F3",
      scrollHandle: "#CCCCCC",
      scrollHandleHover: "#F2F2F2",
      primary: "#881798",
      secondary: "#3A96DD",
      text: {
        100: "#262626",
        200: "#1A1A1A",
        300: "#0C0C0C",
      },
    },
  },
};

//       black: "#0C0C0C",
// blue: "#0037DA",
// cyan: "#3A96DD",
// green: "#13A10E",
// purple: "#881798",
// red: "#C50F1F",
// white: "#CCCCCC",
// yellow: "#C19C00",
// brightBlack: "#767676",
// brightBlue: "#3B78FF",
// brightCyan: "#61D6D6",
// brightGreen: "#16C60C",
// brightPurple: "#B4009E",
// brightRed: "#E74856",
// brightWhite: "#F2F2F2",
// brightYellow: "#F9F1A5"


export default theme;

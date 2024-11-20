import { DefaultTheme } from "styled-components";

export type Themes = {
  [key: string]: DefaultTheme;
};

const theme: Themes = {
  dark: {
    id:   "T_001",
    name: "dark",
    colors: {
      background:        "#0C0C0C", // Black
      cursor:            "#CCCCCC", // White
      scrollTrack:       "#1B1B1B", // darkestGray
      scrollHandle:      "#B8B8B8", // darkerGray
      scrollHandleHover: "#BFBFBF", // Gray
      text: {
        plain:           "#D9D9D9", // White
        light:           "#E6E6E6", // lightWhite
        dark:            "#B8B8B8", // darkWhite
        bold:            "#F2F2F2", // lighterWhite
        primary:         "#B4009E", // brightPurple
        secondary:       "#3B78FF", // brightBlue
        tertiary:        "#61D6D6", // brightCyan
        commands:        "#E74856", // brightRed
        links:           "#F9F1A5"  // brightYellow
      },
    },
  },
  light: {
    id: "T_002",
    name: "light",
    colors: {
      background:        "#D9D9D9", // brightWhite
      cursor:            "#0C0C0C", // Black
      scrollTrack:       "#CCCCCC",
      scrollHandle:      "#BFBFBF", // Gray
      scrollHandleHover: "#B8B8B8", // darkerGray
      text: {
        plain:           "#0C0C0C", // Black
        light:           "#191919", // lightBlack
        dark:            "#0d0d0d", // darkBlack
        bold:            "#000000", // fullBlack 
        primary:         "#881798", // Purple
        secondary:       "#0037DA", // Blue
        tertiary:        "#3A96DD", // Cyan
        commands:        "#C50F1F", // Red
        links:           "#13A10E"  // Green
      },
    },
  },
};

export default theme;
/// <reference types="vite/client" />

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    id: string;
    name: string;
    colors: {
      body: string;
      scrollHandle: string;
      scrollHandleHover: string;
      primary: string;
      secondary: string;
      text: {
        100: string;
        200: string;
        300: string;

// background: string;
// foreground: string;
// black:
// blue:
// cyan:
// green:
// purple:
// red:
// white:
// yellow:
// brightBlack:
// brightBlue:
// brightCyan:
// brightGreen:
// brightPurple:
// brightRed:
// brightWhite:
// brightYellow:

// {
//     "cursorColor": "#FFFFFF",
//     "selectionBackground": "#FFFFFF",

//     "background" : "#0C0C0C",
//     "foreground" : "#CCCCCC",

//     "black" : "#0C0C0C",
//     "blue" : "#0037DA",
//     "cyan" : "#3A96DD",
//     "green" : "#13A10E",
//     "purple" : "#881798",
//     "red" : "#C50F1F",
//     "white" : "#CCCCCC",
//     "yellow" : "#C19C00",
//     "brightBlack" : "#767676",
//     "brightBlue" : "#3B78FF",
//     "brightCyan" : "#61D6D6",
//     "brightGreen" : "#16C60C",
//     "brightPurple" : "#B4009E",
//     "brightRed" : "#E74856",
//     "brightWhite" : "#F2F2F2",
//     "brightYellow" : "#F9F1A5"
// },
      };
    };
  }
}

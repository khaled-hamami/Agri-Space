import { createTheme } from "@mui/material/styles"

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "rgb(255,255,255)",
    },
    primary: {
      main: "#0AB68B",
      light: "#92DE8B",
      dark: "#028174",
    },
    secondary: {
      main: "#FFE3B3",
    },
    contrast: {
      main: "#F8F8F8",
      reverse: "#222",
    },
  },
})

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "hsla(0,0%,0%,1)",
    },
    primary: {
      main: "#0AB68B",
      light: "#92DE8B",
      dark: "#028174",
    },
    secondary: {
      main: "#FFE3B3",
    },
    contrast: {
      main: "#222",
      reverse: "#f8f8f8",
    },
  },
})

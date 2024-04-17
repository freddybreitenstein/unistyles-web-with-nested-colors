import {
  defaultWeekdayColors,
  neutral,
  palette,
  semanticColors,
} from "./colors";

const baseTheme = {
  margins: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    "2xl": 40,
  },
  spacings: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    "2xl": 40,
  },
  radii: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    "2xl": 40,
    full: 9999,
  },
  fontSizes: {
    xs: 10,
    sm: 12,
    md: 14,
    lg: 16,
    xl: 20,
    "2xl": 24,
    "3xl": 32,
    "4xl": 40,
  },
  fontFamily: "Noto Sans" as string,
  weekdayColors: defaultWeekdayColors,
} as const;

export const lightTheme = {
  ...baseTheme,
  colorMode: "light",
  colors: {
    barbie: "#ff9ff3",
    oak: "#1dd1a1",
    sky: "#48dbfb",
    fog: "#c8d6e5",
    aloes: "#00d2d3",
    backgroundColor: "#ffffff",
    typography: "#000000",
    palette,
    neutral,
    semantic: semanticColors.light,
  },
} as const;

export const darkTheme = {
  ...baseTheme,
  colorMode: "dark",
  colors: {
    barbie: "#ff9ff3",
    oak: "#1dd1a1",
    sky: "#48dbfb",
    fog: "#c8d6e5",
    aloes: "#00a2d3",
    backgroundColor: "#ffffff",
    typography: "#000000",
    palette,
    neutral,
    semantic: semanticColors.dark,
  },
} as const;

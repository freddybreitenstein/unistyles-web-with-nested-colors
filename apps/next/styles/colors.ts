export const palette = {
  green100: "#a3e8bf",
  green200: "#88e1b0",
  green300: "#6cdaa0",
  green400: "#51d391",
  green500: "#36cc81",
  green600: "#1bc571",
  green700: "#00be62",
  green800: "#00a752",
  green900: "#009942",

  blue100: "#addcff",
  blue200: "#8fd1ff",
  blue300: "#71c6ff",
  blue400: "#53bbff",
  blue500: "#36b0ff",
  blue600: "#18a5ff",
  blue700: "#009bff",
  blue800: "#0087e5",
  blue900: "#0074cc",

  brown100: "#e4c8a3",
  brown200: "#d5b58a",
  brown300: "#c7a171",
  brown400: "#b88d58",
  brown500: "#a97a3f",
  brown600: "#9a6726",
  brown700: "#8b540d",
  brown800: "#7c4100",
  brown900: "#6c3600",

  yellow100: "#fef6b0",
  yellow200: "#fdef8f",
  yellow300: "#fde96f",
  yellow400: "#fde24e",
  yellow500: "#fddc2e",
  yellow600: "#ffd60d",
  yellow700: "#f2c800",
  yellow800: "#d4b000",
  yellow900: "#b59a00",

  pink100: "#fdd2e5",
  pink200: "#fdc0d6",
  pink300: "#fdaecc",
  pink400: "#fd9bbd",
  pink500: "#fd89ae",
  pink600: "#fd769f",
  pink700: "#fd6490",
  pink800: "#fd5181",
  pink900: "#fd3f72",

  red100: "#fbb5b0",
  red200: "#fb9e9a",
  red300: "#fb8885",
  red400: "#fb7170",
  red500: "#fb5a5a",
  red600: "#fb4345",
  red700: "#fb2c2f",
  red800: "#fb151a",
  red900: "#fb0004",
};

export const neutral = {
  zinc100: "#f4f4f5",
  zinc200: "#e4e4e7",
  zinc300: "#d4d4d8",
  zinc400: "#a1a1aa",
  zinc500: "#71717a",
  zinc600: "#52525b",
  zinc700: "#3f3f46",
  zinc800: "#27272a",
  zinc900: "#18181b",

  white: "rgba(255, 255, 255, 1)",
  white90: "rgba(255, 255, 255, 0.9)",
  white80: "rgba(255, 255, 255, 0.8)",
  white70: "rgba(255, 255, 255, 0.7)",
  white60: "rgba(255, 255, 255, 0.6)",
  white50: "rgba(255, 255, 255, 0.5)",
  white40: "rgba(255, 255, 255, 0.4)",
  white30: "rgba(255, 255, 255, 0.3)",
  white20: "rgba(255, 255, 255, 0.2)",
  white10: "rgba(255, 255, 255, 0.1)",

  black: "rgba(0, 0, 0, 1)",
  black90: "rgba(0, 0, 0, 0.9)",
  black80: "rgba(0, 0, 0, 0.8)",
  black70: "rgba(0, 0, 0, 0.7)",
  black60: "rgba(0, 0, 0, 0.6)",
  black50: "rgba(0, 0, 0, 0.5)",
  black40: "rgba(0, 0, 0, 0.4)",
  black30: "rgba(0, 0, 0, 0.3)",
  black20: "rgba(0, 0, 0, 0.2)",
  black10: "rgba(0, 0, 0, 0.1)",
};

export const semanticColors = {
  light: {
    primaryText: neutral.black90, // For light background
    secondaryText: neutral.black60, // For less prominent text, e.g., description texts
    disabledText: neutral.black40, // For disabled text or less prominent information
    placeholderText: neutral.black30, // For placeholder text in input fields or other places where there is no actual text
    background: neutral.zinc100, // Background color for light mode
    surface: neutral.white, // Surface color, e.g., color of container backgrounds
    surfaceLight: neutral.white,
    border: neutral.zinc300, // Color for borders, separations, or delineations between different elements
    error: palette.red600, // Color for error messages or marking incorrect information
  },
  dark: {
    primaryText: neutral.white90, // For dark background
    secondaryText: neutral.white70,
    disabledText: neutral.white40,
    placeholderText: neutral.white30,
    background: neutral.zinc800, // Background color for dark mode
    surface: neutral.black, // Surface color for dark mode
    surfaceLight: neutral.zinc500,
    border: neutral.zinc700,
    error: palette.red400,
  },
};

export const defaultWeekdayColors = [
  "#2ecc71",
  "#339ee0",
  "#ffffff",
  "#b67e47",
  "#feba01",
  "#fc58ba",
  "#fb4640",
];

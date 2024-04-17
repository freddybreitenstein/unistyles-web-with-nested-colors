import { UnistylesRegistry } from "react-native-unistyles";
import { breakpoints } from "./breakpoints";
import { lightTheme, darkTheme } from "./themes";

type AppBreakpoints = typeof breakpoints;
type AppThemes = {
    light: typeof lightTheme;
    dark: typeof darkTheme;
};

declare module "react-native-unistyles" {
    export interface UnistylesThemes extends AppThemes {}
    export interface UnistylesBreakpoints extends AppBreakpoints {}
}

UnistylesRegistry.addBreakpoints({
    xs: 0,
    sm: 300,
    md: 500,
    lg: 800,
    xl: 1200,
})
    .addThemes({
        light: lightTheme,
        dark: darkTheme,
    })

    .addConfig({
        adaptiveThemes: true,
        experimentalCSSMediaQueries: true,
    });

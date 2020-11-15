import { ViewStyle, TextStyle, ImageStyle } from "react-native";
import {
  createText,
  createBox,
  useTheme as useReTheme,
} from "@shopify/restyle";

export const palette = {
  green: "#2CB9B0",
  white: "white",
  orange: "#FE5E33",
  yellow: "#FFC641",
  pink: "#FF87A2",
  violet: "#442CB9",
  lightBlue: "#BFEAF5",
};

 export const theme = {
    colors: {
        title: "#0C0D34",
        primary: "#2CB9B0",
        secondary: "#0C0D34",
        danger: "#FF0058",
        text: "rgba(12, 13, 52, 0.7)",
        white: "white",
        grey: "#F4F0EF",
        lightGrey: "#FAFAFA",
        primaryLight: "#E7F9F7",
        orange: "#FE5E33",
        yellow: "#FFC641",
        pink: "#FF87A2",
        violet: "#442CB9",
        lightBlue: "#BFEAF5",
        info: "#808080",
        darkgrey: "#4c4c4c",
        background: palette.white,
        background2: "#F4F0EF",
    },
    spacing: {
      xs: 4,
      s: 8,
      m: 16,
      l: 24,
      xl: 40,
    },
    borderRadii: {
        s: 8,
        m: 10,
        l: 25,
        xl: 85, 

    },
    textVariants: {
            hero:{ 
                fontSize: 55,
                fontFamily: "AudioWide",
                color: "white",
                lineHeight: 100, 
                textAlign: "center",
            }, 
            title1: {
                fontSize: 33,
                lineHeight: 40,
                fontFamily: "AudioWide",
                color: "title"
            }, 
            title2: {
                fontSize: 20,
                lineHeight: 24,
                fontFamily: "Alata",
                color: "text",
            },
            body: {
                fontSize: 16,
                lineHeight: 24, 
                fontFamily: "Alata", 
                color: "text",
            },
            button:{
                fontSize: 12, 
                fontFamily: "Alata", 
                color:"text",
                textAlign: "center"
            },    
             header: {
                fontSize: 12,
                lineHeight: 24,
                fontFamily: "AudioWide",
                color: "secondary",
              },    
   },
   breakpoints: {


   },
   position:{
     absolute: "absolute"
   }

  };
  

export type Theme = typeof theme;
export const Box  = createBox<Theme>();
export const Text = createText<Theme>();

export const useTheme = () => useReTheme<Theme>();

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export const makeStyles = <T extends NamedStyles<T>>(
    styles: (theme: Theme) => T
  ) => () => {
    const currentTheme = useTheme();
    return styles(currentTheme);
};


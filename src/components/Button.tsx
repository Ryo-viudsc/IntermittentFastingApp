import React, { ReactNode } from 'react';
import { StyleSheet, Dimensions } from "react-native";
import  { RectButton, TouchableOpacity } from "react-native-gesture-handler"; 
import { useTheme } from '@shopify/restyle';
import { Theme,  Text  } from './Theme';
import GradientButton from './GradientButton';

const { width } = Dimensions.get("window");
const HEIGHT = width * 1.6;

const styles = StyleSheet.create({
    container: {
        borderRadius: 25, 
        height: 50, 
        width: 240, 
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Alata", 
        shadowColor: "#000",
        shadowOffset: {
          width: 4,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 12,
    }, 
    container2: {
      borderRadius: 10, 
      height: 50, 
      width: 210, 
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Alata", 
      marginTop:35,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,
      elevation: 9,
    }, 
    container3: {
      borderRadius: 25,
      marginTop: 10,  
      marginBottom: 25,
      height: HEIGHT * 0.08, 
      width: width * 0.6, 
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Alata", 
      shadowColor: "#000",
      shadowOffset: {
        width: 4,
        height: 4,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,
      elevation: 8,
    }, 
     default: {
      borderRadius: 10, 
      height: 50, 
      width: 210, 
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Alata", 
      marginTop:35,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,
      elevation: 9,
    }, 


    buttonText: {
      fontSize:17,
      fontFamily: "Alata",
    }
});

interface ButtonProps {
    variant: "default" | "primary" | "homeButton";
    label?: string;
    onPress: () => void;
    children?: ReactNode;
  }

  const Button = ({ label, onPress, variant }: ButtonProps)  => {

    const theme = useTheme<Theme>();
    const backgroundColor =
      variant === "primary"
        ? theme.colors.primary
        :
        variant === "homeButton"
        ?  theme.colors.primary
        : theme.colors.grey;
    const color =
        variant === "primary" 
        ? theme.colors.white 
        :
        variant === "homeButton"
        ?  theme.colors.white
        : theme.colors.secondary;
    return (
      variant === "default"
      ?    
         <RectButton
            style={[styles.container, { backgroundColor }]}
            {...{ onPress }}
          >
              <Text variant="button" style={{ color }}>
                {label}
              </Text>
          </RectButton>
      :
       variant === "homeButton"
       ?  <RectButton
          style={[styles.container3, { backgroundColor }]}
          {...{ onPress }}
        >
            <Text variant="button" style={{ color }}>
              {label}
            </Text>
        </RectButton>

      :
       <RectButton
        style={[styles.container, { backgroundColor }]}
        {...{ onPress }}
      >
          <Text variant="button" style={{ color }}>
            {label}
          </Text>
      </RectButton>
    );
  };

Button.defaultProps = { vairant : "default" }; 
export default Button; 
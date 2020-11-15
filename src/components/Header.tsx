import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Box, Text } from "./Theme";
import { Entypo } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");


interface HeaderProps {

  title: string;
  right: {
    icon: string;
    onPress: () => void;
  };
  left?: {
    icon: string;
    onPress: () => void;
  };
  dark: boolean;
}

const Header = ({ title, right,  dark }: HeaderProps ) => {
  const insets = useSafeAreaInsets();
  const color = dark ? "white" : "secondary";
//  const backgroundColor = dark ? "secondary" : "lightGrey";
  return (
    <Box
      flexDirection="row"
      style={{  borderWidth:1, borderColor:"green",  paddingHorizontal:width*0.1  ,marginHorizontal: width*0.05, marginVertical: height*0.05}}
      alignItems="center"
      justifyContent="space-between"
    >
    <Entypo name="grid" size={54} color="grey" />     
      <Text style={{color: "grey",fontSize: 25, fontFamily:"Alata"}}  {...{ color }}>
        {title}
      </Text>
      <Ionicons name="ios-restaurant" size={54} color="grey" onPress={right.onPress} />     
     
    </Box>
  );
};

Header.defaultProps = {
  dark: false,
};

export default Header;
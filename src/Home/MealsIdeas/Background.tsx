import React from "react";
import { View, StyleSheet, Image } from "react-native";

import { Box, useTheme } from "../../components";



const Background = () => {
  const theme = useTheme();
  return (
    <View style={StyleSheet.absoluteFill}>
      <Box flex={1 / 3} style={{ backgroundColor: "white" }}>
        <Box
          flex={1}
          backgroundColor="white"
          borderBottomRightRadius="xl"
        />
      </Box>
      <Box flex={1 / 3}>
        <Box flex={1} backgroundColor="white" />
        <Box flex={1} backgroundColor="white" />
        {/* <Image
          source={require("../../components/assets/patterns/blue.png")}
          style={{
            ...StyleSheet.absoluteFillObject,
            width: undefined,
            height: undefined,
          
          }}
        /> */}
      </Box>
      <Box flex={1 / 3} style={{ backgroundColor: "white" }}>
        <Box flex={1} backgroundColor="white" borderTopLeftRadius="xl" />
      </Box>
    </View>
  );
};

export default Background;
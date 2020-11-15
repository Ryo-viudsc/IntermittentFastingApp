import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import { Text, Box, BorderlessTap } from "../../components";
import { TouchableOpacity } from "react-native-gesture-handler";

const INNER_RADIUS = 20;
const OUTER_RADIUS = 14;

interface CategoryProps {
  category: {
    id: string;
    title: string;
    color: string;
  };
}

const Category = ({
  category: {  title, color },
}: CategoryProps) => {
  const [selected, setSelected] = useState(false);
  return (
    //<TouchableOpacity onPress={() => setSelected((prev) => !prev)}>
  <TouchableOpacity 
         
         onPress={() => setSelected((prev) => !prev)}
         
         >
      {/* <Box borderRadius="s" marginLeft="s" marginTop="s" alignItems="center">
          {selected && (
            <View
              style={{
                ...StyleSheet.absoluteFillObject,
                borderRadius: OUTER_RADIUS,
                borderColor: "black",
                borderWidth: 1,
              }}
            />
          )}
    
        </Box> */}
        <View style={{borderWidth: 1,
                      borderRadius: 30,
                      marginHorizontal: 5,
                      marginVertical: 10,
                      borderColor: "transparent",
                      backgroundColor: color, 
                      shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 11,
                },
                shadowOpacity: 0.57,
                shadowRadius: 15.19,
                elevation: 5,
                
                }} >
        <Text   textAlign="center" 
                color="darkgrey"
                fontSize={20} 
                paddingBottom="xs"
                marginVertical="xs"
                marginHorizontal="m"
                fontFamily="Alata"
                
                >
          {title}
        </Text>
        </View>
      
    </TouchableOpacity>
  );
};

export default Category;
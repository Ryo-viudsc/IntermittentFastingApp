import { LinearGradient } from "expo";
import React, { useState } from "react";
import { Image, Text, ImageRequireSource, ImageBackground, StyleSheet, View, Dimensions } from "react-native";
import Animated from "react-native-reanimated";
import Footer from "../../../Authentication/components/components/Footer";
import { Box, Button } from "../../../components";
import Recipe from "./Recipe";

const { width, height } = Dimensions.get("window");




const Meal = ({navigation, route}) => {
   
  const {uri, title, diet} = route.params;
   
  return(
             <Box flex={1} >
             <Box flex={1.2} >
             <ImageBackground  source={require("../../../images/Meals/Meal2.jpg")} style={styles.image} >
             <Text style={{fontSize:50,
                           color: "white",
                           fontFamily: "Alata"
            
                          }}>{title}
              </Text>

             <View style={{
                          position: "absolute", 
                          top: 0, 
                          left: 0,
                          right: 0, 
                          bottom: 0, 
                          justifyContent: 'center', 
                          alignItems: 'center',
                          overflow:"hidden",
                          shadowColor: "#000",
                          backgroundColor: 'rgba(0,0,0,0.05)',
                          height: height * 0.4,
                          
                          }}>
             
              </View> 
             </ImageBackground> 
            </Box>
            <Box flex={4.1}  style={{ 
                                     borderTopLeftRadius: 80,
                                     borderTopRightRadius : 80,
                                     borderBottomLeftRadius: 80, 
                                     backgroundColor: "white"}}>
              {/*  here goes the list of ingredients and the modal components  */ }
            <View style={{borderTopLeftRadius: 80,
                          borderTopRightRadius : 80,
                          backgroundColor:"transparent",
                          }} />
             <Recipe style={{overflow:"hidden",  position: "absolute"}}/>
            
            </Box>
            <Box flex={0.7} style={{
                                    borderRadius: 30,   
                                    }}>
                <View style={{
                    alignItems:"center",
                    marginVertical: 10
                }}>
                     
                    <View style={{marginVertical:height*0.01}}>
                    <Button 
                        variant="default" 
                        onPress={()=>{navigation.goBack()}} 
                        label="Go Back"/>
                     </View>
                </View>
            </Box>
         </Box>   
   
  );
}

const styles = StyleSheet.create({
    image: {
        ...StyleSheet.absoluteFillObject,
        height: height * 0.4,
        alignItems: 'center',
    },
    title:{
        color: "white",
        fontFamily: "Alata",
        fontSize: 30
    },
    gradient: {
      justifyContent: "space-between"
    },
    text: {
      padding: width* 0.1
    }
});

export default Meal;
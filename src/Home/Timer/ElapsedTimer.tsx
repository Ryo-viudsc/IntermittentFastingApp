import React, { createRef, useState } from "react";
import { Image, StyleSheet, Text, View, Animated, ImageRequireSource, ImageBackground, Dimensions } from "react-native";
import ActionSheet from "react-native-actions-sheet";
import { Box, Button } from "../../components";

const { width } = Dimensions.get("window");
const HEIGHT = width * 1.7;

const styles = StyleSheet.create({
  title1: {
    fontSize: 48,
    fontWeight: "300",
    fontFamily:"Alata"
  },
  title2: {
    fontSize: 48,
    fontWeight: "600",
    fontFamily:"Alata"
  },
  description: {
    opacity: 0.5,
    fontSize: 16,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});

interface ElapsedTimerProps {
  backgroundPic:ImageRequireSource;
  navigation :any;

}




const ElapsedTimer = ({ backgroundPic, navigation }: ElapsedTimerProps) => {
 
  const actionSheetRef: any= createRef();

  
  return (
    
    <ImageBackground source={backgroundPic} style={styles.image} >
    <Box flex={1} >
    <View
      style={{
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >  
      <Box flex={1}  >        
               <Text style={{
                  textAlign:"left",
                  fontFamily:"Roboto",
                  fontSize:80,
                  fontWeight:"bold",
                  color: "white",
                  justifyContent:"center",
                  alignItems:"center",
                  marginVertical: HEIGHT * 0.01,
                  paddingRight:width*0.1,
                  letterSpacing:0
                  }}>{'\n'}YOU{'\n'}MADE{'\n'}IT!  
                <Text
                        style={{
                          textAlign:"left",
                          fontFamily:"Roboto",
                          fontSize:28,
                          fontWeight:"bold",
                          color: "white",
                          justifyContent:"center",
                          alignItems:"center",
                          marginVertical: HEIGHT * 0.03,
                          letterSpacing:0
                        }}
                  >
                          {'\n'}#FastYourWay  
                          <Text 
                              style={{
                                textAlign:"left",
                                fontFamily:"Roboto",
                                fontSize:18,
                                fontWeight:"bold",
                                color: "white",
                                justifyContent:"center",
                                alignItems:"center",
                                marginVertical: HEIGHT * 0.05,
                                letterSpacing:0
                              }}
                          > 
                          {'\n'} 
                          </Text>
                  </Text> 
              </Text>
             
            </Box>
      <Box flex={1.2}></Box>
     
      <Box flex={0.25} 
           justifyContent="space-evenly"
           alignItems="center"    
           marginTop="xl"
           marginBottom={0}
      >
      <Button variant="primary" onPress={() => {actionSheetRef.current?.setModalVisible();}} label="What Now?" /> 
      </Box>
      <Box flex={0.25} 
            marginTop="l"
           justifyContent="space-evenly"
           alignItems="center"    
      >
      <Button variant="default" onPress={() => {navigation.navigate("TimerSettingScreen")}} label="Reset Timer" /> 
      </Box>
      <Box flex={0.4}></Box>
            <ActionSheet 
            containerStyle={{
                            width: width*0.85,
                            borderTopLeftRadius: 90, 
                            borderBottomRightRadius: 90,
                            marginBottom: HEIGHT* 0.6,
                            borderBottomLeftRadius: 30,
                            borderTopRightRadius: 30,
                            alignItems:"center",
                            justifyContent: "center"
                          }}
            ref={actionSheetRef} 
            bounciness={70}
            footerAlwaysVisible
            headerAlwaysVisible
            bounceOnOpen
            springOffset={40}
            > 
            <Text style={{textAlign:"center", 
                  fontFamily:"Alata",
                    fontSize: 30,
                  marginVertical: 20,
                  }}>
            What Now?
            </Text>
            <View style={{alignItems:"center"}}>
        
            </View>  
            <Text style={{fontFamily:"Alata", 
                          textAlign:"center",
                          fontSize:17,
                          marginHorizontal: width*0.12}}>
             When doing short fasts of 12 to 24 hours, you don’t need to worry too much about what you eat when you break your fast.
             Now you can treat yourself with various recipes offered by spoonacular API! 
            
            
            
            
            
             </Text>
            </ActionSheet>
    </View>
    </Box>
    </ImageBackground>   
  
 
  );
};

//todo
//1, after completing the fasting,
//make the button to 
//A, go back to timersetting screen
//B, WhatNow?-button to let users know 
//that they've earned recipe  

export default ElapsedTimer;
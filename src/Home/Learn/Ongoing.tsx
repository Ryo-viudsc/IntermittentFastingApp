import React, { Component } from 'react';
import {View, Text, StyleSheet, Dimensions, ImageBackground } from "react-native";
import {Video} from 'expo-av';
import { HomeNavigationProps } from '../../components/Navigation';
import Slides from './Slides';
import { Box } from '../../components';


const { width, height } = Dimensions.get("window");


const Ongoing = ({navigation, route}) => {
    
    const { title, pic, video, slides, subtitle } = route.params;
    //when using react navigation, 
    //don't forget to use route.param
    //typescript props doesn't work as expected 

   
    return (
            <View style={styles.backgroundVideo}>
                 <Video
                        isLooping
                        isMuted
                        positionMillis={500}
                        resizeMode="cover"
                        shouldPlay
                        source={video}
                        style={{ flex: 1 }}
                        
                    />
                    
                   <View style={{
                        position:"absolute", 
                        flexDirection: "column",
                        alignSelf:"center",
                        justifyContent:"flex-end",
                        borderWidth:4,
                        borderColor:"green",
                     // marginHorizontal: width * 0.1,
                        overflow:"scroll",
                        flex:1,
                        height:height,
                        width:width,
                        shadowColor: "#000",
                        backgroundColor: 'rgba(0,0,0,0.55)'
                    }}>
                                      
                         <Slides title={title} subtitle={subtitle} slides={slides} />  
                        
                    </View>
             </View>
             );
};





const styles = StyleSheet.create({
    backgroundVideo: {
        height: height,
        position: "absolute",
        top: 0,
        left: 0,
        alignItems: "stretch",
        bottom: 0,
        right: 0,
        flexDirection: "row",
        justifyContent:"center",
        flex:1,
    },
    subtitleFont:{
        fontSize: 15,
        textAlign: "left",
        color: "white",
        fontFamily:"Alata",
    }
    });

export default Ongoing;

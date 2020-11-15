import React from "react";
import { View, StyleSheet, Dimensions, Image, ImageRequireSource } from "react-native"; 
 
import { Text } from "../../components";
 
const  { width, height } = Dimensions.get("window"); 

export const SLIDE_HEIGHT = 0.61 * height;  
export const BORDER_RADIUS = 75; 

interface SlideProps {
    title: string;
    right? : boolean; 

};

const Slide = ({title, right} : SlideProps ) => {
    
    const transform = [
           { translateY:(SLIDE_HEIGHT - 100)/2}, 
           { translateX: ((right ? 1 : -1 ) * (width/2 + 90 )) / 2 },
           { rotate: right ? "-90deg" : "90deg" }
        ];

    return (
        <View style={styles.container}>
  
            <View style={[styles.titleContainer, { transform }]}>   
          <Text style={styles.titleContainer}>  {title}  </Text>
          </View>
        </View>
    );
};


const styles = StyleSheet.create({

    container: { 
        width
    }, 

    titleContainer:{
        textAlign: "center",
        height: 100,
        justifyContent: "center",
        fontFamily: "AudioWide",
        fontSize: 45,
        color: "white"
       
      
    }
});


export default Slide; 

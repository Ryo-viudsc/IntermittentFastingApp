import React, { ReactNode, useState } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import Swiper from "react-native-swiper";
import { Box } from '../../components';


const { width, height } = Dimensions.get("window");


interface SlidesProps {
    title: string; 
    subtitle:string;
    slides: string[]; 
}

const RenderItem = ({item} ) => {
        return (
            <View style={{borderWidth:2, marginHorizontal:width*0.02, borderColor:"red", marginTop: height*0.3, marginBottom:height*0.2}} >
                <Text style={styles.slidesText}>{ item }</Text>
            </View>
        );
}


const Slides = ({title, subtitle, slides } : SlidesProps) => {
   

    return(
        <View style={{
            borderWidth:2, 
            borderColor:"yellow", 
            height:height*0.9,
            alignContent:"center",
            alignItems:"stretch",
            flexDirection: "column",
            marginVertical:height*0.05,
            overflow:"visible"
        }}>
          <Box flex={1} > 
    <Text style={styles.titleFont}>{subtitle}</Text>
          </Box>
         <Box flex={1} >   
        <Swiper
            dot={<View style={{backgroundColor:'white', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
            activeDot={<View style={{backgroundColor: '#007aff', width: 10, height: 10, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}    


            showsPagination={true}
        >
            <View style={styles.slide1}>
              <Text style={styles.slidesText}>{slides[0]}</Text>
            </View>
            <View style={styles.slide1}> 
               <Text style={styles.slidesText}>{slides[1]}</Text>
            </View>
            <View style={styles.slide1}>
               <Text style={styles.slidesText}>{slides[2]}</Text>
            </View>
            <View style={styles.slide1}>
               <Text style={styles.slidesText}>{slides[3]}</Text>
            </View>
        </Swiper>
        </Box>
        </View>
    );

    
};


const styles = StyleSheet.create({
    slidesText: {
        fontSize: 20,
        textAlign: "center",
        color: "white",
        fontFamily:"Alata",
    },
    titleFont:{
        marginHorizontal:width*0.1,
        marginTop:20,
        fontSize: 35,
        textAlign: "left",
        color: "white",
        fontFamily:"Alata",
    },
     slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
});

export default Slides;


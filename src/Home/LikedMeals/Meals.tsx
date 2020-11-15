import React, { useState } from "react";
import { Image, Text, ImageRequireSource, ImageBackground, StyleSheet, Dimensions, View, TouchableOpacity } from "react-native";

import { Box, RoundedIcon, BorderlessTap } from "../../components";
import { MealsNavigationProps } from "../../components/Navigation";
import { HeaderBackButton  } from "@react-navigation/stack";



const { width, height } = Dimensions.get("window");

/* 
To-do 
for now 
1, just put the slider icon onthe top-left to
  filer the liked meals list 

(optional maybe?)
2, using yelp API,  
   implement the scrollable flat list  
  that might go to the community page for supporting the local restaurants 
*/




 
interface MealsProps {
   title: string;
   diet : string;
   id: number; 
   uri: ImageRequireSource;
   navigation: any;
}




const Meals = ({ title,diet, uri, navigation }: MealsProps) => {
  const [selected, setSelected] = useState(false);
  return (
           <View style={{overflow:"hidden"}}>
           <TouchableOpacity style={styles.listItem} 
               onPress={() => { navigation.navigate('Meal',
                          {
                            title: title,
                            diet:diet,
                            uri:uri
                          }
                           )}} >
                 
           <ImageBackground source={uri} style={styles.image} >
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
                                    backgroundColor: 'rgba(0,0,0,0.25)'
                                    }}>
                     <Text style={{color:'white', fontFamily:"Alata", fontSize:30,textAlign: "left"}} >{title}</Text>
                     <Text style={{color:'white', fontFamily:"Alata", fontSize:14, textAlign: "left", paddingHorizontal: width* 0.1}} >{diet}</Text>
                     </View>
        </ImageBackground>
      </TouchableOpacity>
      </View>
    ) 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop:60,
    
  },
  listItem:{
    width:width*0.85,
    height: height * 0.13,
    margin:10,
    flex:1,
    alignSelf:"center",
    flexDirection:"row",
    borderRadius: 10,
    overflow:"hidden",
    shadowColor: "#000",
    backgroundColor: 'rgba(0,0,0,0.55)'
  },
  image:{
      overflow:"hidden",
      justifyContent: "center",
      width:width*0.85,
      height: height * 0.13,

  },
  title:{
  

  },
  subtitle:{


  }

});


export default Meals;


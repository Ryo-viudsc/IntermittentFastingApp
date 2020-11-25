import React, { useState } from "react";
import {Text, StyleSheet, Dimensions, TouchableHighlight, TouchableOpacity, View} from "react-native";
import { Header } from "react-native-elements";
import { useTransition } from "react-native-redash";

import { Box } from "../../components";
import { HomeNavigationProps } from "../../components/Navigation";

import { MaterialIcons } from '@expo/vector-icons';

import Cards from "./Cards";

const { width, height } = Dimensions.get("window");



const SearchFilter =  () => {
  
  //modal components 

  return (
    <TouchableOpacity>
      <MaterialIcons name="tune" size={35} color="white" />
    </TouchableOpacity>
  );
}




const MealsIdeas = ({navigation} : HomeNavigationProps<"MealsIdeas"> ) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const aIndex = useTransition(currentIndex);
  const [status, setStatus] = useState<boolean>(false); 
  

  return (
    <>
    <Header     
      centerComponent={{ text: 'MEALS IDEA', style: { fontFamily: "Catara" ,fontSize:25 ,color: "black" } }}
     
       containerStyle={{
         backgroundColor: "white",
        paddingHorizontal: width* 0.09,
        justifyContent: 'space-around',
        height: height* 0.1
       
        }}
      />
  
      <Box flex={1} 
           paddingBottom="m"
           paddingTop="m"
           style={{backgroundColor:"white"}}
           >  
        <Cards  />
      </Box>
   </>
  );
};


const styles = StyleSheet.create({

  title:{
    color: "grey",
    fontSize: 35, 
    fontFamily:"Alata",
    alignItems:"center",
    justifyContent:"center",
    textAlign: "center",
    marginVertical: height*0.05,
    borderColor: "grey",
    borderRadius: 30,
    marginHorizontal:width*0.1,
    borderWidth: 1,
  }


});

export default MealsIdeas;
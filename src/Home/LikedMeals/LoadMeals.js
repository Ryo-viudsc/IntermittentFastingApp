import React, { useState, useEffect } from 'react';
import { AsyncStorage, View } from 'react-native';
import Meals from "./Meals";
import {Box} from "../../components";
//just loading the meals list and return it as an array 

var MealKey = "likedMeals";
  
export default class LoadMeals extends React.Component {

  
      constructor(props)
      {
        super(props)
        this.load();
        this.state = {LikedMeals:[]};
      }
 
      //component did mount for syncrons 
      load = async () => {
        try{
          const value = await AsyncStorage.getItem(MealKey);
          if (value !== null) {
          var promise_temp = value.replace(/\\/g, '');
          var js_temp = JSON.parse(promise_temp);
          
          console.log("priniting");
          this.setState( {LikedMeals : js_temp});
          console.log(this.state.LikedMeals);
          console.log("printing end")
          }else{
            console.log("Faild to load")
          }

        } catch (e) {
          console.log("error for try")
        }
      }


//next to do
// 1, real time syncronos //user action should affect on the screen 
// 2, grab the transtioning view scrollview part and paste here 
// 3, put the both rows so that this fill will show all of them  

//here can be the flat list component 
//so that you can implement the pullreflesh 
//https://www.youtube.com/watch?v=pHLFJs7jlI4
    render(){
      return (
        <View style={{borderColor:"yellow", borderWidth:2}}>
        <Box flexDirection="row">
        <Box >
            {this.state.LikedMeals
            .map((cards) => (
              <Meals key={cards.id} title={cards.title} diet={cards.diet} uri={cards.uri} id={cards.id} />
            ))}  
        </Box>
      
        </Box>
        </View>
      );
    }  
}





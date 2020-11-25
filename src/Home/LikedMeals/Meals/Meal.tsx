import { LinearGradient } from "expo";
import React, { useState } from "react";
import { useEffect } from "react";
import { Image, Text, ImageRequireSource, ImageBackground, StyleSheet, View, Dimensions } from "react-native";
import Animated from "react-native-reanimated";
import Footer from "../../../Authentication/components/components/Footer";
import { Box, Button } from "../../../components";
import Recipe from "./Recipe";

const { width, height } = Dimensions.get("window");

// String is the JavaScript String type, which you could use to 
//create new strings. 
// string is the TypeScript string type, which you can use to type variables, 
//parameters and return values.


const Meal = ({navigation, route}) => {
   
  const {uri, title, recipe, ingredients} = route.params;
   
  const [ingredientsList, setIngredientsList] = useState<string[]>([]);
  const [stepsList, setStepsList] = useState<string[]>([]);

   
 
  useEffect(()=>{
    
    const {uri, title, recipe, ingredients} = route.params;

    //for the list of ingredients
    var tempArrIngredients = [];  
    var length_ingredients = ingredients.length; 
    for(var t=0; t<length_ingredients; t++){
          var new_ingredient = ingredients[t].original;
          tempArrIngredients = tempArrIngredients.concat(new_ingredient);
      }
    //for the list of steps per recipe 
    var tempArrSteps = [];
    var length_steps = recipe[0].steps.length;
    for(var i=0; i< length_steps; i++)
    {
      var new_steps = recipe[0].steps[i].step;
      tempArrSteps = tempArrSteps.concat(new_steps);
    }
    
    setStepsList(tempArrSteps);
    setIngredientsList(tempArrIngredients);
  
  },[])


  return(
       <Box flex={1} >
             <Box flex={1.2} >
             <ImageBackground  source={{uri: `${uri}`}} 
                               style={styles.image} >
             <Text style={{
                           fontSize:30,
                           color: "white",
                           fontFamily: "Alata",
                           marginTop: height* 0.05,
                           fontWeight:"bold"
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
                          height: height * 0.4
                          }}>
             
              </View> 
             </ImageBackground> 
            </Box>
            <Box flex={4.1}  style={{ 
                                     borderTopLeftRadius: 80,
                                     borderTopRightRadius : 80,
                                     borderBottomLeftRadius: 80, 
                                     borderBottomRightRadius: 80, 
                                     backgroundColor: "white", 
                                     shadowColor: "#000",
                                     shadowOffset: {
                                       width: 4,
                                       height: 4,
                                     },
                                     shadowOpacity: 0.32,
                                     shadowRadius: 5.46,
                                     elevation: 12
                                     }}>

            <View style={{borderTopLeftRadius: 80,
                          borderTopRightRadius : 80,
                          backgroundColor:"transparent",
                          }} />
             <Recipe stepsList={stepsList} ingredientsList={ingredientsList}/>
            </Box>
            <Box flex={0.7} style={{borderRadius: 30}}>
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
        alignItems: 'center',
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
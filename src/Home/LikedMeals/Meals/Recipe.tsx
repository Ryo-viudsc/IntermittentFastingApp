import React, { createRef, useState } from 'react';
import { Text, StyleSheet, Dimensions, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Box } from '../../../components';
import Button from '../../../components/Button';
import ActionSheet from "react-native-actions-sheet";
import Ingredient from './Ingredient';

const { width, height } = Dimensions.get("window");

interface RecipeProps {
   recipe ?: string[];
}

const recipe = [
  {step: "Add the salt and baking soda to the water and mix until dissolved."},
  {step: "Add the vegetable oil to a heavy-bottomed pot such as a dutch oven and heat over medium-high heat until the oil is shimmering (but not smoking)."},
  {step: "Add the chicken in a single layer with the skin-side down and fry undisturbed until the skin is browned and crisp (about 3 minutes). Flip the chicken over and brown the second side."},
  {step: "Add the onions along with the baking soda solution and quickly give it a stir to coat the onions evenly with the mixture. Cover the pot with a lid and turn down the leat to low, allowing the onions to steam for 10 minutes."},
  {step: "Add the curry powder and stir the mixture together until it is very fragrant (about 1 minute). Be careful not to burn it."},
  {step: "The curry is done when the vegetables and chicken are tender, and the sauce is very thick. Taste the curry and adjust the seasonings with salt and cayenne pepper to taste. If you like a looser curry, you can add water to thin it out."},
  {step: "Serve the Japanese curry with Japanese short-grain rice."},
]

const Ingredients = [
  { name: "ingredient a", 
    "amount ": {
      "metric": {
          "unit": "g",
          "value": 222.0
      },
  }},
  { name: "ingredient b",
   "amount ": {
    "metric": {
        "unit": "g",
        "value": 222.0
    }
  }
 },  
{ name: "ingredient b",
 "amount ": {
  "metric": {
      "unit": "g",
      "value": 222.0
  }
}
},
{ name: "ingredient b",
  "amount ": {
  "metric": {
      "unit": "g",
      "value": 222.0
  }
 }
},
{ name: "ingredient b",
  "amount ": {
  "metric": {
      "unit": "g",
      "value": 222.0
  }
 }
},
{ name: "ingredient b",
  "amount ": {
  "metric": {
      "unit": "g",
      "value": 222.0
  }
 }
},
{ name: "ingredient b",
  "amount ": {
  "metric": {
      "unit": "g",
      "value": 222.0
  }
 }
},
{ name: "ingredient b",
  "amount ": {
  "metric": {
      "unit": "g",
      "value": 222.0
  }
 }
},
{ name: "ingredient b",
  "amount ": {
  "metric": {
      "unit": "g",
      "value": 222.0
  }
 }
},
{ name: "ingredient b",
  "amount ": {
  "metric": {
      "unit": "g",
      "value": 222.0
  }
 }
},
{ name: "ingredient b",
  "amount ": {
  "metric": {
      "unit": "g",
      "value": 222.0
  }
 }
},
{ name: "ingredient b",
  "amount ": {
  "metric": {
      "unit": "g",
      "value": 222.0
  }
 }
}
]; 



const Recipe = ({navigation}:any) => {

  const actionSheetRef : any = createRef();





  return (
      <View style={{ paddingVertical: height* 0.05,backgroundColor:"transparent"}}>
       <View style={{ position: "absolute", backgroundColor:"transparent", height: 200, width: width, borderTopLeftRadius: 80, 
      borderTopRightRadius : 80,}}/> 
      <ScrollView 
             alwaysBounceVertical={true}
             style={styles.container} 
             contentContainerStyle={styles.container}
             automaticallyAdjustContentInsets={true}
             fadingEdgeLength={100}
      >
        <View style={{marginVertical:height*0.01, alignItems:"center"}}>
          <Button 
              variant="primary" 
              onPress={()=>{actionSheetRef.current?.setModalVisible(); }} 
              label="See Ingredients"/>
        </View>
          {
              recipe.map((item, index) => (
                  <View key={index} style={index !== (recipe.length - 1) ? styles.separator : {}}>
                      <Text style={styles.step}>{`${index + 1}`}</Text>
              <Text style={styles.text}>{item.step} {'\n'}</Text>
                  </View>
              ))
           }
      </ScrollView>
      <ActionSheet 
           containerStyle={{width: width*0.85,
                            borderTopLeftRadius: 90, 
                            borderBottomRightRadius: 90,
                            marginBottom: height* 0.2,
                            borderBottomLeftRadius: 10
                         }}
       ref={actionSheetRef} 
       bounciness={90}
       headerAlwaysVisible
       footerAlwaysVisible
       bounceOnOpen
       springOffset={90}
      >
      <View style={{height: height* 0.6 }}>
        <View style={{alignItems: "center"}}>
        <Text style={{textAlign:"center", 
                      fontFamily:"Alata",
                       fontSize: 30,
                       marginVertical: 20 }}>
             Ingredients
      </Text>
        </View>
        <ScrollView 
             showsVerticalScrollIndicator={false}
             alwaysBounceVertical={true}
             style={styles.container} 
             contentContainerStyle={styles.container}
             automaticallyAdjustContentInsets={true}
             fadingEdgeLength={100}
             >
        {   Ingredients.map((item, index) => (
                  <View key={index} style={index !== (Ingredients.length - 1) ? styles.separator : {}}>
                       <View style={{flexDirection:"row", justifyContent:"space-evenly"}}>
                       <Text style={styles.step}>{`${index + 1}`}</Text>
                       <Text style={styles.text}>
                         {"\n"}
                         {item.name} 
                         {"  "}{item["amount "].metric.value} g   {" "}
                         {/* <Ingredient name={item.name} /> */}
                         {"\n"}
          
                        </Text>
                        </View>
                  </View>
              ))
          }
          </ScrollView>  
      </View>
    </ActionSheet> 


      </View>
       );




};


const styles = StyleSheet.create({
  container: {
      borderTopLeftRadius: 80, 
      borderTopRightRadius : 80,
      backgroundColor: "white",
      marginHorizontal: width * 0.05, 
   },
  separator:{
      borderBottomWidth: 1,
      borderColor: "lightgrey",
      
  },
  step: {
    marginRight: width * 0.005,
    color: "darkgrey",
    fontFamily:"Alata"
  },
   text: {
    marginHorizontal: width* 0.005,
    fontFamily:"Alata",
    fontSize: 14,
    color: "black"
   }
  
});



export default Recipe;
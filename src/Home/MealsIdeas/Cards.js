import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Animated, PanResponder, useState } from 'react-native';
import TitledCard from "./TitledCard";
import axios from 'axios';

import { AsyncStorage } from 'react-native';


const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

var TEST_USER_ID = "Ryo Kihara";
var MealKey = "idList";


const _storeData = async ( list) => {
  //transorm the js object into the json object 
  try {
    var temp = JSON.stringify(list);
    console.log("saving this => " + temp);
    await AsyncStorage.setItem("idList", temp);
  } catch (error) {
    console.log("Couldn't save it...");
  }
};



const hasDuplicates = (arr, val) => 
{
  for (var i = 0, size = arr.length; i < size; i++)
  {
    if(val == arr[i])
    {
      return true;
    }
  }
  return false; 
}



export default class Cards extends React.Component {
   
  constructor() {
    super()

    this.position = new Animated.ValueXY()
    this.state = {
      currentIndex: 0,
      newRecipes : [

          {
          "id": 1095689,
          "image": "https://spoonacular.com/recipeImages/1095689-312x231.jpg",
          "imageType": "jpg",
          "nutrition":   {
            "nutrients":  [
                {
                "amount": 509.39,
                "title": "Calories",
                "unit": "kcal",
              },
                {
                "amount": 33.0718,
                "title": "Protein",
                "unit": "g",
              },
                {
                "amount": 39.0891,
                "title": "Fat",
                "unit": "g",
              },
                {
                "amount": 8.3546,
                "title": "Carbohydrates",
                "unit": "g",
              },
            ],
          },
          "title": "Garlic Oregano Olive Tapenade ",
        },
         
          {
          "id": 639306,
          "image": "https://spoonacular.com/recipeImages/639306-312x231.jpg",
          "imageType": "jpg",
          "nutrition":   {
            "nutrients":  [
                {
                "amount": 518.942,
                "title": "Calories",
                "unit": "kcal",
              },
                {
                "amount": 24.242,
                "title": "Protein",
                "unit": "g",
              },
                {
                "amount": 42.8367,
                "title": "Fat",
                "unit": "g",
              },
                {
                "amount": 9.80968,
                "title": "Carbohydrates",
                "unit": "g",
              },
            ],
          },
          "title": "Simple Poached Egg Dinner",
        },
  
          {
          "id": 780000,
          "image": "https://spoonacular.com/recipeImages/780000-312x231.jpg",
          "imageType": "jpg",
          "nutrition":   {
            "nutrients":  [
                {
                "amount": 537.7,
                "title": "Calories",
                "unit": "kcal",
              },
                {
                "amount": 33.6557,
                "title": "Protein",
                "unit": "g",
              },
                {
                "amount": 42.0508,
                "title": "Fat",
                "unit": "g",
              },
                {
                "amount": 11.0851,
                "title": "Carbohydrates",
                "unit": "g",
              },
            ],
          },
          "title": "Chicken Avocado Burger (Whole 30, PALEO, & Simple Fit Forty)",
        },
          {
          "id": 648758,
          "image": "https://spoonacular.com/recipeImages/648758-312x231.jpg",
          "imageType": "jpg",
          "nutrition":   {
            "nutrients":  [
                {
                "amount": 357.352,
                "title": "Calories",
                "unit": "kcal",
              },
                {
                "amount": 24.5071,
                "title": "Protein",
                "unit": "g",
              },
                {
                "amount": 26.4124,
                "title": "Fat",
                "unit": "g",
              },
                {
                "amount": 5.74292,
                "title": "Carbohydrates",
                "unit": "g",
              },
            ],
          },
          "title": "Kari Kepala Ikan Bersama Belimbing Buluh (Fish Head Curry)",
        },
          {
          "id": 638166,
          "image": "https://spoonacular.com/recipeImages/638166-312x231.jpg",
          "imageType": "jpg",
          "nutrition":   {
            "nutrients":  [
                {
                "amount": 613.337,
                "title": "Calories",
                "unit": "kcal",
              },
                {
                "amount": 44.6236,
                "title": "Protein",
                "unit": "g",
              },
                {
                "amount": 42.475,
                "title": "Fat",
                "unit": "g",
              },
                {
                "amount": 10.1029,
                "title": "Carbohydrates",
                "unit": "g",
              },
            ],
          },
          "title": "Chicken Liver Salad",
        },
          {
          "id": 646512,
          "image": "https://spoonacular.com/recipeImages/646512-312x231.jpg",
          "imageType": "jpg",
          "nutrition":   {
            "nutrients":  [
                {
                "amount": 393.007,
                "title": "Calories",
                "unit": "kcal",
              },
                {
                "amount": 26.8966,
                "title": "Protein",
                "unit": "g",
              },
                {
                "amount": 28.9447,
                "title": "Fat",
                "unit": "g",
              },
                {
                "amount": 7.17732,
                "title": "Carbohydrates",
                "unit": "g",
              },
            ],
          },
          "title": "Salmon Caesar Salad",
        },
          {
          "id": 716427,
          "image": "https://spoonacular.com/recipeImages/716427-312x231.jpg",
          "imageType": "jpg",
          "nutrition":   {
            "nutrients":  [
                {
                "amount": 674.982,
                "title": "Calories",
                "unit": "kcal",
              },
                {
                "amount": 42.6131,
                "title": "Protein",
                "unit": "g",
              },
                {
                "amount": 48.2548,
                "title": "Fat",
                "unit": "g",
              },
                {
                "amount": 16.7197,
                "title": "Carbohydrates",
                "unit": "g",
              },
            ],
          },
          "title": "Roasted Butterflied Chicken w. Onions & Carrots",
        },
          {
          "id": 656752,
          "image": "https://spoonacular.com/recipeImages/656752-312x231.jpg",
          "imageType": "jpg",
          "nutrition":   {
            "nutrients":  [
                {
                "amount": 735.117,
                "title": "Calories",
                "unit": "kcal",
              },
                {
                "amount": 51.9306,
                "title": "Protein",
                "unit": "g",
              },
                {
                "amount": 51.257,
                "title": "Fat",
                "unit": "g",
              },
                {
                "amount": 11.8614,
                "title": "Carbohydrates",
                "unit": "g",
              },
            ],
          },
          "title": "Pork Chops with Garlic Cream",
        },
          
          {
          "id": 780001,
          "image": "https://spoonacular.com/recipeImages/780001-312x231.jpg",
          "imageType": "jpg",
          "nutrition":   {
            "nutrients":  [
                {
                "amount": 538.777,
                "title": "Calories",
                "unit": "kcal",
              },
                {
                "amount": 35.6616,
                "title": "Protein",
                "unit": "g",
              },
                {
                "amount": 41.1778,
                "title": "Fat",
                "unit": "g",
              },
                {
                "amount": 7.65406,
                "title": "Carbohydrates",
                "unit": "g",
              },
            ],
          },
          "title": "Pesto Chicken Zoodles",
        },

          {
          "id": 643428,
          "image": "https://spoonacular.com/recipeImages/643428-312x231.jpg",
          "imageType": "jpg",
          "nutrition":   {
            "nutrients":  [
                {
                "amount": 308.579,
                "title": "Calories",
                "unit": "kcal",
              },
                {
                "amount": 21.6072,
                "title": "Protein",
                "unit": "g",
              },
                {
                "amount": 22.2024,
                "title": "Fat",
                "unit": "g",
              },
                {
                "amount": 7.25895,
                "title": "Carbohydrates",
                "unit": "g",
              },
            ],
          },
          "title": "Fresh and Simple Swai Ceviche",
        },
      ],
      likedMeals : [
      ]
    }


    this.rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH /2 ,0, SCREEN_WIDTH /2],
      outputRange: ['-10deg', '0deg', '10deg'],
      extrapolate: 'clamp'
    })
    this.rotateAndTranslate = {
      transform: [{
        rotate: this.rotate
      },
      ...this.position.getTranslateTransform()
      ]
    }
    this.likeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [0, 0, 10],
      extrapolate: 'clamp'
    })
    this.dislikeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [10, 0, 0],
      extrapolate: 'clamp'
    })
    this.nextCardOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 1],
      extrapolate: 'clamp'
    })
    this.nextCardScale = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 1.2, 1],
      extrapolate: 'clamp'
    })
  }


    //utility function to load the saved ID list from the local storage  
    async _retrieveData (){
      try {
        const value = await AsyncStorage.getItem(MealKey);
        if (value !== null) {
          var promise_temp = value.replace(/\\/g, '');
          var js_temp = JSON.parse(promise_temp);
          this.setState((prevState)=>{
            likedMeals:  prevState.likedMeals = js_temp
          })
        }
      } catch (error) {
        return "error"; 
      }
    };



   //initialize the list of new recipes 
   //* axios automatically returns the stringified object 
   async componentDidMount()
   {

    //as the very first step,
    //retrieve the likedMeals list that contains the list of ids 
          _retrieveData = async () => {
            try {
              const value = await AsyncStorage.getItem(MealKey);
              if (value !== null) {

                var promise_temp = value.replace(/\\/g, '');
                var js_temp = JSON.parse(promise_temp);
                 
                this.setState((prevState)=>{
                  likedMeals:  prevState.likedMeals = js_temp
                })
              }
            } catch (error) {
              return "error"; 
            }
        };

        //first load the likedMeals id list from local storage
        _retrieveData();
     
        // axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=73cf9aebc64843fc83ff773bfdbddc88`,
        // {
        //   params: {
        //     diet: "Ketogenic",
        //     number: 10,
        //     maxCarbs: 100,
        //     maxFat: 100, 
        //     maxProtein: 100,
        //     maxCalories : 800
        //   }
        // })
        // .then((response) => {
        //   if (response !== null) {
        //     console.log(response.data.results)
        //     this.setState((prevState)=>{
        //         newRecipes: prevState.newRecipes = response.data.results 
        //     });
        //     console.log("here")
        //     console.log(this.state.newRecipes)
        //   }
        // })
   }
  
    UNSAFE_componentWillMount() {
  
      this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        this.position.setValue({ x: gestureState.dx, y: gestureState.dy })
      },
      onPanResponderRelease: (evt, gestureState) => {

        if (gestureState.dx > 120) {
          Animated.spring(this.position, {
            toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy },
            useNativeDriver: true
          }).start(() => {
              this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 });
      
              console.log("swiped right");
              var temp = this.state.newRecipes[this.state.currentIndex-1].id
          

              //make sure there's no duplicate
              if(hasDuplicates(this.state.likedMeals, temp)){
                    console.log("has duplicates");
  
             }else{                
                  this.state.likedMeals.push(temp);
                  this.setState((prevState)=>{
                    likedMeals : prevState.likedMeals = this.state.likedMeals
                  });
                  var newVal = this.state.likedMeals;
                 _storeData(this.state.likedMeals);

              }

            })
          })
        } else if (gestureState.dx < -120) {
          Animated.spring(this.position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy },
            useNativeDriver: true,
          }).start(() => {
              this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 });
              console.log("swiped left");
            })
          })
        }
        else {
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0 },
            friction: 4,
            useNativeDriver: true
          }).start()
        }
      }
    })
  }


  renderUsers = () => {
   
    return this.state.newRecipes.map((item, i) => {
      if (i < this.state.currentIndex) {
        return null
      }
      else if (i == this.state.currentIndex) {
        return (

          <Animated.View
            speed={60}
            useNativeDriver={true}
            {...this.PanResponder.panHandlers}
            key={item.id} 
            style={[ this.rotateAndTranslate, 
             {
              alignItems: 'center',
              height: SCREEN_HEIGHT * 0.68, 
              width: SCREEN_WIDTH, 
              position: 'absolute'
          }]}>
            <Animated.View  useNativeDriver={true} style={{ opacity: this.likeOpacity, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
              <Text style={{ fontFamily: 'Alata', borderRadius:25, borderWidth:10, borderColor: 'green', color: 'green', fontSize: 80, fontWeight: '800', padding: 10 }}> LIKE!</Text>
            </Animated.View>
            <Animated.View   useNativeDriver={true}style={{ opacity: this.dislikeOpacity, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
              <Text style={{ fontFamily: 'Alata', borderRadius:20, borderWidth: 10, borderColor: 'red', color: 'red', fontSize:60, fontWeight: '800', padding: 10 }}> NOPE...</Text>
            </Animated.View>
         
            <TitledCard  
                          title={item.title}
                          remoteURL={item.image.replace(/312x231/g,"636x393")} 
                          calories={ Math.trunc(item.nutrition.nutrients[0].amount)}
                          protein={ Math.trunc(item.nutrition.nutrients[1].amount)}
                          fat={Math.trunc(item.nutrition.nutrients[2].amount)}
                          carbs={ Math.trunc(item.nutrition.nutrients[3].amount)}
            />
          </Animated.View>
        )
      }
      else {
        return (
          <Animated.View
             speed={60}
             useNativeDriver={true}
            key={item.id} style={[{
              opacity: this.nextCardOpacity,
              transform: [{ scale: this.nextCardScale }],
              height: SCREEN_HEIGHT * 0.68, 
              width: SCREEN_WIDTH , 
              position: 'absolute', 
              alignItems: 'center',
            }]}>
            <Animated.View useNativeDriver={true} style={{ opacity: 0, transform: [{ rotate: '-40deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
              <Text style={{ borderWidth: 1, borderColor: 'green', color: 'green', fontSize: 32, fontWeight: '800', padding: 10 }}>LIKE!</Text>
            </Animated.View>
            <Animated.View  useNativeDriver={true} style={{ opacity: 0, transform: [{ rotate: '40deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
              <Text style={{ borderWidth: 1, borderColor: 'red', color: 'red', fontSize: 32, fontWeight: '800', padding: 10 }}>NOPE...</Text>
            </Animated.View>
            <TitledCard  
                          title={item.title}
                          remoteURL={item.image.replace(/312x231/g,"636x393")} 
                          calories={Math.trunc(item.nutrition.nutrients[0].amount)}
                          protein={Math.trunc(item.nutrition.nutrients[1].amount)}
                          fat={Math.trunc(item.nutrition.nutrients[2].amount)}
                          carbs={Math.trunc(item.nutrition.nutrients[3].amount)}        
             />
          </Animated.View>
        )
      }
    }).reverse()
  }


  render() {
    return (
        <View style={{ flex: 1 }}>
          {this.renderUsers()}
        </View>
    );
  }
}
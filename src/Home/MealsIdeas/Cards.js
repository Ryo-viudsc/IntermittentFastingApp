import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Animated, PanResponder, useState } from 'react-native';
import TitledCard from "./TitledCard";
import axios from 'axios';

import { AsyncStorage } from 'react-native';



const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

var TEST_USER_ID = "Ryo Kihara";

var MealKey = "likedMeals";

   
const _storeData = async (key, list) => {
  //transorm the js object into the json object 
  try {
    var temp = JSON.stringify(list);
    await AsyncStorage.setItem(key, temp);
  } catch (error) {
    console.log("Couldn't save it...");
  }

};


export default class Cards extends React.Component {
   
  constructor() {
    super()

    this.position = new Animated.ValueXY()
    this.state = {
      currentIndex: 0,
      newRecipes : [
        {
          "id": 716427,
          "image": "https://spoonacular.com/recipeImages/716427-636x393.jpg",
          "imageType": "jpg",
          "title": "Roasted Butterflied Chicken w. Onions & Carrots",
        },
        {
          "id": 656752,
          "image": "https://spoonacular.com/recipeImages/656752-636x393.jpg",
          "imageType": "jpg",
          "title": "Pork Chops with Garlic Cream",
        },
        {
          "id": 649248,
          "image": "https://spoonacular.com/recipeImages/649248-636x393.jpg",
          "imageType": "jpg",
          "title": "Lamb Tagine Stew",
        },
       {
          "id": 1095693,
          "image": "https://spoonacular.com/recipeImages/1095693-312x231.jpg",
          "imageType": "jpg",
          "title": "Raspberry Arugula Side Salad ",
        },
        {
          "id": 1095689,
          "image": "https://spoonacular.com/recipeImages/1095689-312x231.jpg",
          "imageType": "jpg",
          "title": "Garlic Oregano Olive Tapenade ",
        },
        {
          "id": 780001,
          "image": "https://spoonacular.com/recipeImages/780001-312x231.jpg",
          "imageType": "jpg",
          "title": "Pesto Chicken Zoodles",
        },
        {
          "id": 650377,
          "image": "https://spoonacular.com/recipeImages/650377-312x231.jpg",
          "imageType": "jpg",
          "title": "Low Carb Brunch Burger",
        },
        {
          "id": 639306,
          "image": "https://spoonacular.com/recipeImages/639306-312x231.jpg",
          "imageType": "jpg",
          "title": "Simple Poached Egg Dinner",
        }
      ],

      likedMeals : [


      ]
    }

   

    //using useEffect or componentDidMount to load the initial list from 
    //local storage here

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
          // We have data!!
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
     //defined the retrive function just for componentDidMount 
          _retrieveData = async () => {
            try {
              const value = await AsyncStorage.getItem(MealKey);
              if (value !== null) {
                // We have data!!
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
        //https://api.spoonacular.com/recipes/complexSearch?apiKey=73cf9aebc64843fc83ff773bfdbddc88
        //https://api.edamam.com/search

 //HERE GOES THE EXAMPLE
        // var url = 'https://api.edamam.com/api/nutrition-details?app_id=' + app_id + '&app_key=' + app_key;

        // var xhr = createCORSRequest('POST', url);
        // if (!xhr) {
        //   alert('CORS not supported');
        //   return;
        // }




        //first load the likedMeals id list from local storage
        _retrieveData();
     
        // axios.get(``,
        // {
        //   params: {
        //     query: "pasta",
        //     number: 10
         
        //  }
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
//.map(function(x){ return x.image.replace(/312x231/g,"636x393") });
  
 

  hasDuplicates(arr, val)
  {
    for (i = 0, size = arr.length; i < size; i++)
    {
      if(val == arr[i])
      {
        return true;
      }
    }
    return false; 
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
        
              let obj = {
                  id : this.state.newRecipes[this.state.currentIndex-1].id,
                  title: this.state.newRecipes[this.state.currentIndex-1].title , 
                  image : this.state.newRecipes[this.state.currentIndex-1].image,
              }

              //check what is inside on console  
              console.log("swiped right");
              console.log(obj);
             
              // if(!this.hasDuplicates(this.likedMeals, obj.id))
              // {
                  //save the entire array of ids in the local storage 
                  _storeData(MealKey, this.likedMeals);
              // }          
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
    //TODO
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
            {console.log("debut " +item.image)}
            <TitledCard  
                          title={item.title}
                          remoteURL={item.image} 
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
                          remoteURL={item.image} 
                           
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
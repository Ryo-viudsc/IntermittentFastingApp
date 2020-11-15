import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Animated, PanResponder, useState } from 'react-native';
import TitledCard from "./TitledCard";

import { AsyncStorage } from 'react-native';


const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

var TEST_USER_ID = "Ryo Kihara";

var MealKey = "likedMeals";

const Users = [
   { id: "1", color: "red",  title:"AAAA", diet:"test", cuisineType:"test", uri: require("../../images/Meals/test.jpg")},
   { id: "2",  color: "blue", title:"BBBB", diet:"test", cuisineType:"test", uri: require("../../images/Meals/test.jpg")},
   { id: "3",  color: "yellow", title:"CCCC", diet:"test", cuisineType:"test", uri: require('../../images/Meals/test.jpg') },
   { id: "4",  color: "white", title:"DDDD", diet:"test", cuisineType:"test", uri: require('../../images/Meals/test.jpg') },
   { id: "5",  color: "green", title:"EEEE", diet:"test", cuisineType:"test", uri: require('../../images/Meals/test.jpg') },
   { id: "6",  color: "orange", title:"FFFF", diet:"test", cuisineType:"test", uri: require('../../images/Meals/test.jpg') },
   { id: "7",  color: "red", title:"GGGG", diet:"test", cuisineType:"test", uri: require('../../images/Meals/test.jpg') },
   { id: "8",  color: "grey", title:"HHHH", diet:"test", cuisineType:"test", uri: require('../../images/Meals/test.jpg') },
];


_storeData = async (key, list) => {
  //transorm the js object into the json object 
  try {
    var temp = JSON.stringify(list);
    await AsyncStorage.setItem(key, temp);
  } catch (error) {
    console.log("Couldn't save it...");
  }

};

//make sure that you have the parse fucntion right after retrieveData....
_retrieveData = async () => {

  try {
    const value = await AsyncStorage.getItem(MealKey);
    if (value !== null) {
      // We have data!!
      var promise_temp = value.replace(/\\/g, '');
      var js_temp = JSON.parse(promise_temp);
      return js_temp;
    }
  } catch (error) {
     return "error"; 
  }

};





export default class Cards extends React.Component {
   
  constructor() {
    super()

    this.position = new Animated.ValueXY()
    this.state = {
      currentIndex: 0
    }

    
    //using useEffect or componentDidMount to load the initial list from 
    //local storage here
    //this.recepieList = new Array();

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

  
  //initialize the list of liked recepies 
  componentDidMount()
  {
    (async () => {
      
      //console.log(await _retrieveData())
      // var temp = [];
      // temp  = await _retrieveData();
      // this.recepieList = temp => [...new Set(temp)];
      //console.log(this.recepieList);
    })();
    console.log("debug for componentDidMount " + this.recepieList);
     // console.log(this.recepieList);
  }

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


  initializeCards(recepieList)
  {
    (async () => {
      this.recepieList = new Array();
      console.log("First initialize the list " + this.recepieList);

    })();
     // console.log(this.recepieList);
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
              
              //javascript object 
              let obj = {
                  id : Users[this.state.currentIndex-1].id,
                  title: Users[this.state.currentIndex-1].title , 
                  diet: Users[this.state.currentIndex-1].diet, 
                  uri : Users[this.state.currentIndex-1].uri,
            
              }
              //check what is inside on console  
              console.log("swiped right");
              
            if(this.recepieList == undefined)
            {
               console.log("undefined detected, initialize the array");
              //initializing the array list
               this.initializeCards(this.recepieList);
            }
            
            if(!this.hasDuplicates(this.recepieList, obj))
            {
              this.recepieList.push(obj);
              _storeData(MealKey ,this.recepieList);
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
             
              (async () => {
                console.log(await _retrieveData())
                this.recepieList = await _retrieveData();
                console.log("end of the async");
              })();
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
    return Users.map((item, i) => {
      if (i < this.state.currentIndex) {
        return null
      }
      else if (i == this.state.currentIndex) {
        return (
          <Animated.View
            useNativeDriver={true}
            {...this.PanResponder.panHandlers}
            key={item.id} 
            style={[ this.rotateAndTranslate, 
             {
               alignItems: 'center',
              height: SCREEN_HEIGHT * 0.68, 
              width: SCREEN_WIDTH, 
              position: 'absolute',
            
              }]}>
            <Animated.View  useNativeDriver={true} style={{ opacity: this.likeOpacity, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
              <Text style={{ fontFamily: 'Alata', borderRadius:25, borderWidth:10, borderColor: 'green', color: 'green', fontSize: 80, fontWeight: '800', padding: 10 }}> LIKE!</Text>
            </Animated.View>
            <Animated.View   useNativeDriver={true}style={{ opacity: this.dislikeOpacity, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
              <Text style={{ fontFamily: 'Alata', borderRadius:20, borderWidth: 10, borderColor: 'red', color: 'red', fontSize:60, fontWeight: '800', padding: 10 }}> NOPE...</Text>
            </Animated.View>
            <TitledCard  
                          title="Tandry Chicken"
                          uri={item.uri} 
                          time={12}
                          diet="High Protein"
                          cuisineType="Mexican"
            />
          </Animated.View>
        )
      }
      else {
        return (
          <Animated.View
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
                          title="Tandry Chicken"
                          uri={item.uri} 
                          time={12}
                          diet="High Protein"
                          cuisineType="Mexican"   
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
import * as React from "react";
import Learn from "./Learn/Learn";
import MealsIdeas from "./MealsIdeas";
import LiquidSwipe from "./Timer/LiquidSwipe";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeRoutes, LearnRoutes, MealRoutes, LiquidSwipeRoutes } from "../components/Navigation";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import TimerSettingScreen from "./Timer/TimerSettingScreen";
import LikedMeals from "./LikedMeals";
import Ongoing from "./Learn/Ongoing";
import Meal from "./LikedMeals/Meals/Meal";
export { assets } from "./Drawer";


const Tab = createBottomTabNavigator<HomeRoutes>();
const Mealset = createStackNavigator<MealRoutes>();
const Learns = createStackNavigator<LearnRoutes>();
const Timer = createStackNavigator<LiquidSwipeRoutes>();


const TimerStack = () => {
  return(
    <NavigationContainer independent={true}>
    <Timer.Navigator
      initialRouteName="TimerSettingScreen"
      headerMode="none"
     screenOptions={{
      gestureEnabled: false,
     }}
    >
    <Timer.Screen  options={{gestureEnabled:false}} name="TimerSettingScreen" component={TimerSettingScreen} />
    <Timer.Screen options={{gestureEnabled:false}} name="LiquidSwipe" component={LiquidSwipe} />
    <Timer.Screen   options={{gestureEnabled:false}}name="Learn" component={Learn} />
    <Timer.Screen   options={{gestureEnabled:false}}name="Ongoing" component={Ongoing} />

  </Timer.Navigator>
  </NavigationContainer>
  )
}

const LearnStack = () => {
   return(
      <NavigationContainer independent={true}>
      <Learns.Navigator
        initialRouteName="Learn"
        headerMode="none"
      >
      <Learns.Screen name="Learn" component={Learn} />
      <Learns.Screen name="Ongoing" component={Ongoing} />
    </Learns.Navigator>
    </NavigationContainer>
   )
}


const MealsStack = () => {
    return(
      <NavigationContainer independent={true}>
      <Mealset.Navigator
        initialRouteName="LikedMeals"
        headerMode="none"
      >
      <Mealset.Screen name="LikedMeals" component={LikedMeals} />
      <Mealset.Screen  name="Meal" component={Meal} />
    </Mealset.Navigator>
    </NavigationContainer>
    )
}


export const HomeNavigator = () => (
    
    <Tab.Navigator
        initialRouteName="LiquidSwipe"
        tabBarOptions={{
          activeTintColor: '#e91e63',
        }}
      
    > 
       <Tab.Screen 
              name="Learn" 
              component={LearnStack} 
              options={{
                tabBarLabel: 'Learn',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="book" color={color} size={size} />
                ),
              }}
          />
        
         <Tab.Screen 
             name="LiquidSwipe" 
             component={TimerStack} 
                options={{
                  
                  tabBarLabel: 'Home',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="timer" color={color} size={size} />
                  ),
                }}
             />
  
         <Tab.Screen 
              name="MealsIdeas" 
              component={MealsIdeas} 
              options={{
                tabBarLabel: 'Meal Plan',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="food-apple-outline" color={color} size={size} />
                ),
              }}
              />

          <Tab.Screen 
              name="LikedMeals" 
              component={MealsStack} 
              options={{
                tabBarLabel: 'Liked',
                tabBarIcon: ({ color, size }) => (
                  <FontAwesome5 name="hand-holding-heart" size={size} color={color} />
                ),
              }}
              />
            


     </Tab.Navigator>
);

  
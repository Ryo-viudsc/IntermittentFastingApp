import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack' ;

import Onboarding from "../Authentication/Onboarding/Onboarding";



const AuthenticationStack = createStackNavigator();

const AuthenticationNavigator = () => {
  return <AuthenticationStack.Navigator>
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
  </AuthenticationStack.Navigator>
};



export default function WelcomeScreen() {
  return (
    <NavigationContainer>
       <AuthenticationNavigator />
    </NavigationContainer>
  );
}
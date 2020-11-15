import * as React from 'react';

import { ThemeProvider } from "@shopify/restyle";
import {SafeAreaProvider} from "react-native-safe-area-context";
import { createStackNavigator } from '@react-navigation/stack';

import {
  assets as authenticationAssets,
  AuthenticationNavigator,
} from "./src/Authentication";

import { LoadAssets } from "./src/components";
import { AppRoutes  } from "./src/components/Navigation";
import { theme } from "./src/components/Theme";
import { HomeNavigator, assets as homeAssets } from "./src/Home";

const assets = [...authenticationAssets, ...homeAssets];
const fonts = {
  "SFProText-Bold": require("./assets/fonts/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/fonts/SF-Pro-Text-Regular.otf"),
  "AudioWide" : require("./assets/fonts/fonts/audiowide.otf"),
  "Alata" : require("./assets/fonts/fonts/Alata.otf"),
  "Digital" : require("./assets/fonts/fonts/alarm-clock.otf"),
  "Roboto" : require("./assets/fonts/fonts/Roboto-Black.otf"),
  "Catara" : require("./assets/fonts/fonts/Catamaran-Black.otf")
};

const AppStack = createStackNavigator<AppRoutes>();

export default function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <LoadAssets {...{ fonts, assets }}>
        <SafeAreaProvider>
          <AppStack.Navigator 
             headerMode={"none"}
             initialRouteName={"Authentication"}
             >
            <AppStack.Screen
              name="Authentication"
              component={AuthenticationNavigator}
            />
            <AppStack.Screen name="Home" component={HomeNavigator} />
          </AppStack.Navigator>
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>
  );
}

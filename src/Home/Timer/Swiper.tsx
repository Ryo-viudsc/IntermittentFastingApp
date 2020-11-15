import React, { useState } from "react";
import { Dimensions, StyleSheet, View, Text } from "react-native";
import Animated, {
  Value,
  cond,
  multiply,
  divide,
  interpolate,
} from "react-native-reanimated";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import { onGestureEvent, snapPoint } from "react-native-redash";

import Wave from "./Wave";
import { followPointer, snapProgress } from "./AnimationHelpers";
import {
  initialSideWidth,
  initialWaveCenter,
  sideWidth,
  waveHorRadius,
  waveHorRadiusBack,
  waveVertRadius,
} from "./WaveHelpers";
//import Content from "./Content";
import Button from "./Button";


export const assets = [
  require("../../images/medicine.png"),
  require("../../images/success.png"),
  // require("../../images/notStarted.png"),
  // require("../../images/onGoing.png"),
];


const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export const Swiper =  ({swiped}: any,{children}:any) => {
  const y = new Value(initialWaveCenter);
  const translationX = new Value(0);
  const velocityX = new Value(0);
  const state = new Value(State.UNDETERMINED);
  const gestureHandler = onGestureEvent({
    translationX,
    velocityX,
    y,
    state,
  });

  const maxDist = width - initialSideWidth;
  
  const isBack = new Value(0);
  
  const gestureProgress = cond(
    isBack,
    interpolate(translationX, {
      inputRange: [0, maxDist],
      outputRange: [1, 0],
    }),
    interpolate(translationX, {
      inputRange: [-maxDist, 0],
      outputRange: [0.4, 0],
    })
  );
  const progress = snapProgress(
    gestureProgress,
    state,
    isBack,
    snapPoint(
      gestureProgress,
      divide(
        multiply(-1, velocityX),
        cond(isBack, maxDist, multiply(maxDist, 0.4))
      ),
      [0, 1]
    )
  );
  const centerY = followPointer(y);
  const horRadius = cond(
    isBack,
    waveHorRadiusBack(progress),
    waveHorRadius(progress)
  );
  const vertRadius = waveVertRadius(progress);
  const sWidth = sideWidth(progress);
      //might need another component for the one after swiping 

//here goes the useState? to keep truck of the 
//current user status 
//finished or notstarted or ongoing 
  return (
     
      <PanGestureHandler {...gestureHandler}>
        <Animated.View style={StyleSheet.absoluteFill}>
          <Wave sideWidth={sWidth} {...{ centerY, horRadius, vertRadius }}>
            {children} 
          </Wave>
          <Button y={centerY} {...{ progress }} />
        </Animated.View>
      </PanGestureHandler>
 
  );
};
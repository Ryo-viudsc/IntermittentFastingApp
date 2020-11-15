import React from "react";
import { StyleSheet, Dimensions, ImageRequireSource, Text, View } from "react-native";
import Animated, {
  add,
  Extrapolate,
  interpolate,
  color,
} from "react-native-reanimated";
import { mixColor, mix, usePanGestureHandler } from "react-native-redash";
import { PanGestureHandler } from "react-native-gesture-handler";
import { Box } from "../../components";

import { useSpring } from "./Animation";
import CardTitle from "./TitledCard";



var styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5
    },
    buttonText: {
      fontSize: 18,
      fontFamily: 'Gill Sans',
      textAlign: 'center',
      margin: 10,
      color: '#ffffff',
      backgroundColor: 'transparent',
    },
  });


const { width: wWidth } = Dimensions.get("window");
const width = wWidth * 0.88;
const height = width * (440 / 294);
const borderRadius = 24;

interface CardProps {
  positions: Animated.Node<number>;
  onSwipe: () => void;
  source: ImageRequireSource;
  step: number;
  swiped: () => void; 
}
//swiped function is different from onSwipe function 

const Card = ({ positions, onSwipe, source, step }: CardProps) => {
  const {
    gestureHandler,
    translation,
    velocity,
    state,
    position,
  } = usePanGestureHandler();
  const backgroundColor = mixColor(positions, "#C9E9E7", "#74BCB8");
  const translateYOffset = mix(positions, 0, -50);
  const scale = mix(positions, 1, 0.9);
  const imageScale = interpolate(positions, {
    inputRange: [0, step],
    outputRange: [1, 1],
    extrapolate: Extrapolate.CLAMP,
  });

  const translateX = useSpring({
    value: translation.x,
    velocity: velocity.x,
    state,
    snapPoints: [-wWidth, 0, wWidth],
    onSnap: ([x]) => x !== 0 && onSwipe(),
  });

  const translateY = add(
    translateYOffset,
    useSpring({
      value: translation.y,
      velocity: velocity.y,
      state,
      snapPoints: [0],
    })
  );
  

 const likeOpacity = position.x.interpolate({
    inputRange: [-width, 0, width],
    outputRange: [0, 0, 1],
    extrapolate: Extrapolate.CLAMP,
 });

 const nopeOpacity = position.x.interpolate({
    inputRange: [-width, 0, width],
    outputRange: [1, 0, 0],
    extrapolate: Extrapolate.CLAMP,
 })


  return (
    
    <Box
      style={StyleSheet.absoluteFill}
      justifyContent="center"
      alignItems="center"
   
    >
      <PanGestureHandler {...gestureHandler}>
        <Animated.View
          style={{
            backgroundColor: "black",
            width,
            height,
            borderRadius,
            transform: [{ translateY }, { translateX }, { scale }],
            overflow: "hidden",
           
          }}
         
        >
   <Animated.View
      style={{
        transform: [{ rotate: "-30deg" }],
        position: "absolute",
        top: 50,
        left: 40,
        zIndex: 1000,
        opacity: likeOpacity,
      }}
    >
      <Text
        style={{
          borderWidth: 1,
          borderColor: "green",
          color: "green",
          fontSize: 42,
          fontWeight: "800",
          padding: 10
        }}
      >
        LIKE
      </Text>
    </Animated.View>

    <Animated.View
      style={{
        transform: [{ rotate: "30deg" }],
        position: "absolute",
        top: 50,
        right: 40,
        zIndex: 1000,
        opacity:nopeOpacity,
      }}
    >
      <Text
        style={{
          borderWidth: 1,
          borderColor: "red",
          color: "red",
          fontSize: 32,
          fontWeight: "800",
          padding: 10
        }}
      >
        NOPE
      </Text>
    </Animated.View>
          <Animated.Image
            {...{ source }}
            style={{
              ...StyleSheet.absoluteFillObject,
              width: width,
              height: height,
              transform: [{ scale: imageScale }],
            }}
          />
        </Animated.View>
      </PanGestureHandler>
    </Box>
  );
};

export default Card;
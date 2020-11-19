import React, { useEffect, useState } from "react";
import { BackHandler,Dimensions, StyleSheet, View, Text } from "react-native";
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
import Content from "./Content";
import Button from "./Button";
import {Button as NavButton}  from "../../components"
import ElapsedTimer from "./ElapsedTimer";
import { Header } from "react-native-elements";
import ModalContent from "./Swipe/components/ModalContent";


//TODO
//1, set up the API 
//2, create the modal selector for the timer 
//3, screen shot the videos for learn screen 
//4, search function for recipe list 

//here comes the tab bar component


export const assets = [
  require("../../images/medicine.png"),
  require("../../images/success.png"),
  require("../../images/background/white.jpg"),
  require("../../images/background/congrats.jpg"),
  require("../../images/relapsed.png"),
  require("../../images/after.jpg"),
  require("../../images/cooking.jpg"),
  
];

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }});



const LiquidSwipe= ({navigation, route}) => {

  const {currentHours} = route.params;
  console.log(currentHours);
 //current hours is the number of hours to be scheduled 
 //which is different from the remaining time 
  
  useEffect(()=>{
    console.log("useEffect for the liquidSwipe screen ")
    setHours(currentHours);
  
  }, []);

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

  const [ status, setStatus] = useState("notStarted");
  const [ hours, setHours] = useState<number>(0);
  const [remainingHours, setRemainingHours] = useState<number>(0);

  // const [ time, setTime ] = useState<String>("00:00");
  const finishedHandler = (s : string) => {
      setStatus(s);
  }

  const remainingHoursHandler = (h:number) => {
     setRemainingHours(h);
  }

 
  return (
   <>
     <Header 
       // leftComponent={{ icon: 'menu', color: 'white', size:30 }}
        centerComponent={{ text: 'IF TIMER', style: { fontFamily: "Catara" ,fontSize:25 ,color: "white" } }}
       // rightComponent={{ icon: 'home', color: '#fff' }}
        linearGradientProps={{
           colors: ['red', 'blue'],
           start: [1, 0],
           end: [0.1, 0],
        }}
          containerStyle={{
          //backgroundColor: "#F26764",
          justifyContent: 'space-around',
          height: height* 0.08
          }}
    />

  <View style={styles.container}>
   { status === "finished" ?  
       <>
          <ElapsedTimer
             navigation={navigation}
             backgroundPic={assets[5]}
          />
    </>
    :
    <>          
        {/* <ModalContent  hours={remainingHours}/>    */}
        {/* <PanGestureHandler {...gestureHandler}>
        <Animated.View style={StyleSheet.absoluteFill}>
        <Wave sideWidth={sWidth} {...{ centerY, horRadius, vertRadius }}> */}
          <Content
            finishedHandler={finishedHandler}
            remainingHoursHandler={remainingHoursHandler}
            hours={currentHours}
            seconds={currentHours*60*60}
            navigation={navigation}
          />
        {/* </Wave>
        <Button y={centerY} {...{ progress }} />
       </Animated.View>
      </PanGestureHandler> */}
      </>
    }
      </View>
  </>
 
  );
};


export default LiquidSwipe;










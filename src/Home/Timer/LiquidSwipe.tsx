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
import Content from "./Content";
import Button from "./Button";
import Finished from "./Status";
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
  },
});

export default ({navigation}) => {
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
  const [ time, setTime ] = useState<String>("00:00");
  const finishedHandler = (s : string) => {
      setStatus(s);
  }

  const Handler = (e : number) => { 
        setHours(e);
  };

  //set the start time and the end time based on the current time
  const Scheduler = () => {
       var hours = new Date().getHours(); //To get the Current Hours
       var min = new Date().getMinutes();
       
       console.log(hours);
       console.log(min)

      //  setTime(time);
  };

  //to do
  //1, make the profile components 
  //2, put the thumbnail on the top-right of the header
  //3, insta-like story line to see who's on fasting right now 

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
          height: height* 0.12
          }}
    />

  <View style={styles.container}>
   { status === "finished" ?  
       <>
          <ElapsedTimer
             backgroundPic={assets[5]}
             source={assets[4]}
             color="white"
             Handler={Handler}
             status={status}
          />
    </>
    :
    <>          
        <ModalContent  hours={hours}/>   
        <PanGestureHandler {...gestureHandler}>
        <Animated.View style={StyleSheet.absoluteFill}>
        <Wave sideWidth={sWidth} {...{ centerY, horRadius, vertRadius }}>
          <Content
            finishedHandler={finishedHandler}
            source={assets[0]}
            color="red"
            hours={hours}
            backgroundPic={assets[2]}
            navigation={navigation}
          />
        </Wave>
        <Button y={centerY} {...{ progress }} />
       </Animated.View>
      </PanGestureHandler>
      </>
    }
      </View>
  </>
 
  );
};













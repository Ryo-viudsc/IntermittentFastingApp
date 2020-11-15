import React, { Children } from 'react';
import {Text, Button as RNButton, View, StyleSheet, Animated, Button, Dimensions} from 'react-native';
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { Box } from '../../components';

const { width, height } = Dimensions.get("window");


interface CountDownTimerProps {
    animatedColor: string; 
    duration: number;
   
    finishedHandler : (s: string) => void; 
}

const CountDownTimer = ({duration, finishedHandler}: CountDownTimerProps) => {

const children =(remainingTime : number | undefined) => {
        const hours = remainingTime ? Math.floor(remainingTime/ 3600) : null; 
        const minutes = remainingTime ?  Math.floor((remainingTime % 3600)/ 60) : null;
        const seconds = remainingTime ? remainingTime % 60 : null; 
        
        const HOURS = hours? ( hours > 9 ? "" + hours : "0" + hours) : "00";
        const MINUTES = minutes?  ( minutes > 9 ? "" + minutes : "0" + minutes) : "00";
        const SECONDS = seconds? (seconds > 9 ? "" + seconds : "0" + seconds) : "00";

        return `${HOURS}:${MINUTES}:${SECONDS}`;
};


const elapsedTime = (duration: number | undefined, remainingTime:number | undefined) => {
         if(duration != null  && remainingTime != null) {
             const elapsedTime = duration - remainingTime; 

             const hours = elapsedTime ? Math.floor(elapsedTime/ 3600) : null; 
             const minutes = elapsedTime ?  Math.floor((elapsedTime % 3600)/ 60) : null;
             const seconds = elapsedTime ? elapsedTime % 60 : null; 
             
             const HOURS = hours? ( hours > 9 ? "" + hours : "0" + hours) : "00";
             const MINUTES = minutes?  ( minutes > 9 ? "" + minutes : "0" + minutes) : "00";
             const SECONDS = seconds? (seconds > 9 ? "" + seconds : "0" + seconds) : "00";
     
             return `You've fasted for ${HOURS}:${MINUTES}:${SECONDS} `;
        } else {
            return null; 
        }
};

function TimeProp (duration: number, remainingTime:number | undefined) : number {
  if(duration != null  && remainingTime != null) {
    const elapsedTime = duration - remainingTime; 
     const  HOURS = elapsedTime ? Math.floor(elapsedTime/ 3600) : -1; 
    return HOURS;
  }else {
    return -1; 
  }
};

 // {finishedHandler}
 //{Handler(0)}

return (
    <View style={{marginBottom:30, marginTop: 15, alignItems:"center"}}>
 
    <CountdownCircleTimer
      isPlaying
      { ...{duration}}
      colors={[
        ["#add8e6", 0.05],
        ["#0BB5FF", 0.1]
        ]}
      strokeWidth={30}
      size={220} 
      initialRemainingTime={duration}
      strokeLinecap="round"
      trailColor =  "transparent" 
      isLinearGradient={true}
      onComplete={()=> { finishedHandler("finished");}}
     >
  
    {({ remainingTime } ) => (
         remainingTime === 0
      ? 
       <Animated.Text style={{
        fontSize: 30,
        fontFamily: "Alata",
        alignItems: "center"
            }} > 
          You've Completed Fasting!! 
            <Animated.Text
              style={{fontSize:17, alignItems: "center"}}
            > 
            
              {"\n"} {"\n"} {"\n"}
            </Animated.Text>
          </Animated.Text> 
      :<Animated.Text style={{
         fontSize: 40,
         fontFamily: "Alata",
         
         }} >
        {children(remainingTime)}
        {'\n'}
        <Animated.Text 
            style={{
              fontSize: 12,
              fontFamily: "Alata", 
            }}
        >
        {elapsedTime(duration,remainingTime)} 
        </Animated.Text>
      </Animated.Text>
    )} 
    </CountdownCircleTimer>
     <View style={{ flexDirection:"row",
                    justifyContent: "space-between"
      }}>
         <View style={{ paddingHorizontal: width* 0.04, 
                        paddingVertical: height*0.01,
                        marginHorizontal: width*0.13, 
                        backgroundColor:"white",
                        borderColor:"lightblue",
                        borderWidth:1,
                        borderTopRightRadius: 40,
                        borderRadius: 10
                       
          }}>
         <Animated.Text style={styles.timerText}>Start</Animated.Text>
         <Animated.Text style={styles.timerText}> 334455</Animated.Text>
         </View>

        <View style={{ paddingHorizontal:width*0.04, 
                       paddingVertical: height*0.01,
                       marginHorizontal: width*0.13,
                       backgroundColor:"white",
                       borderColor:"lightblue",
                       borderWidth:1,
                       borderTopLeftRadius: 40,
                       borderRadius: 10
                       
        }}> 
        <Animated.Text style={styles.timerText}>End</Animated.Text>
        <Animated.Text style={styles.timerText}> 432654 </Animated.Text>  
        </View>
     </View>
    </View>
  )
 };
 

 const styles = StyleSheet.create({
    timerText : {
        fontFamily : "Alata",
        fontSize: 14
    }



 });



export default CountDownTimer;




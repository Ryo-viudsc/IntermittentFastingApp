import React, { createRef, useEffect, useState, Children } from "react";
import { StyleSheet, Text, Modal, View, Dimensions,TouchableHighlight, ImageRequireSource, SafeAreaView, Animated, FlatList, TouchableOpacity  } from "react-native";
// import CountDownTimer from "./CountDownTimer";
import { Box, Button } from "../../components";
// import PreModalContent from "./PreModalContent";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

import CurrentTimeLable from "./CurrentTimeLable";

const { width, height } = Dimensions.get("window");
const HEIGHT = width * 1.6;


//hours is the scheduled hours 

interface ContentProps {
  finishedHandler : (s:string) => void; 
  hours: number; 
  seconds: number; 
  navigation : any;
  remainingHoursHandler: (h:number)=>void;
  //this is gonna be set up after the currenthours logic is done 
}


export default ({  seconds, hours, finishedHandler, navigation }: ContentProps) => {
    
    // const [modalVisible, setModalVisible] = useState(false);
    const [currentHours, setCurrentHours] = useState<number>(1);
    const [currentSeconds, setCurrentSeconds] = useState<number>(1);

    const [play, setPlay] = useState<boolean>(false);
    
  
      useEffect(()=>{
          //when rendered first, 
          //start playing the timer 
         // setCurrentHours(hours);
          
         

          console.log("currentHours is " + hours);
          console.log("sec is " + seconds);
          setCurrentSeconds(seconds);
          //function to convert hours into seconds
          //to put it in the CountDownCircleTimer 
           
      },[]);
        
   
    const buttonList = [
      {key: '10 hours', hours: 10},
      {key: '12 hours', hours: 12},
      {key: '14 hours', hours: 14},
      {key: '16 hours', hours: 16},
      {key: '18 hours', hours: 18}
    ];



    const CurrentTimeChecker = () => {

    
     var currenttime = new Date(); 

     var HOURS= currenttime.getHours();
     var MINS = currenttime.getMinutes();

     var HOURS_CONVERTED  = HOURS ? ( HOURS > 9 ? "" + HOURS : "0" + HOURS  ) : "00";
     var MINS_CONVERTED = MINS ?  ( MINS > 9 ? "" + MINS : "0" + MINS  ) : "00";

     var SUMMED_HOURS = HOURS + currentHours;
     if(SUMMED_HOURS > 24)
     {
       SUMMED_HOURS = SUMMED_HOURS % 24;
     }

    var AFTER_HOURS = SUMMED_HOURS ?  ( SUMMED_HOURS > 9 ? "" + SUMMED_HOURS : "0" + SUMMED_HOURS ) : "00";

      return(<View style={{
            marginTop:HEIGHT*0.01, 
            marginHorizontal:width*0.1,
            flexDirection:"row",
             }}>
            <Text style={styles.radioText}> start  {HOURS_CONVERTED} : {MINS_CONVERTED} </Text>
            <Text style={styles.radioText}> end   {AFTER_HOURS} : {MINS_CONVERTED} </Text>
          </View>
          );
  }
  

  const children =(remainingTime : number | undefined) => {
   

    const hours = remainingTime ? Math.floor(remainingTime/ 3600) : null; 
    const minutes = remainingTime ?  Math.floor((remainingTime % 3600)/ 60) : null;
    const seconds = remainingTime ? remainingTime % 60 : null; 
    
    const HOURS = hours? ( hours > 9 ? "" + hours : "0" + hours) : "00";
    const MINUTES = minutes?  ( minutes > 9 ? "" + minutes : "0" + minutes) : "00";
    const SECONDS = seconds? (seconds > 9 ? "" + seconds : "0" + seconds) : "00";
   

    return `${HOURS}:${MINUTES}:${SECONDS}`;
};
   



    
  return (
  
    <Box flex={1} flexDirection="column" style={{ backgroundColor:"#FFFFFF"
  }}> 
    <View
      style={{
        ...StyleSheet.absoluteFillObject,
        padding: HEIGHT * 0.02,
        alignItems: "center",
        justifyContent: "center"
      }}>  
        <Box flex={1} style={{paddingTop: HEIGHT * 0.1}}> 
        <Text style={{fontFamily:"Alata", fontSize:13, marginVertical: HEIGHT*0.01}}>
            Snap the right tag to see your current fasting state! 
        </Text>
        {/* <PreModalContent slotHours={hours}/>  */}
        </Box> 
        <Box flex={2} alignItems="center" 
        style={{width: width}}>
        <View style={{ marginTop: 5, alignItems:"center"}}>
            <CountdownCircleTimer
                isPlaying={play}
                duration={seconds}
              colors={[
                ["#add8e6", 0.05],
                ["#0BB5FF", 0.1]
                ]}
              strokeWidth={30}
              size={220} 
              initialRemainingTime={seconds}
              strokeLinecap="round"
              trailColor =  "lightgrey" 
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
                </Animated.Text>
              </Animated.Text>
            )} 
            </CountdownCircleTimer>
            </View>
         <CurrentTimeLable currentHours={currentHours} />
        </Box>
       <Box flex={1} >
           <View  style={{ 
             width: width,
             justifyContent: "center",
             alignItems:"center"}}>   
        <Button onPress={ ()=>{ setPlay(true) } } label="Start" variant="default" />
        <Button onPress={() => navigation.navigate("Learn")} label="Learn More!" variant="default" />
        </View> 
        </Box>   
    </View>
    </Box> 
  );
};

const styles = StyleSheet.create({
  title1: {
    fontSize: 48,
    fontWeight: "300",
    fontFamily:"Alata"
  },
  title2: {
    fontSize: 48,
    fontWeight: "600",
    fontFamily:"Alata"
  },
  description: {
    opacity: 0.5,
    fontSize: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",

  },
  openButton: {
    backgroundColor: "white",
    borderRadius: 30,
    width : width * 0.9,
    height : width * 0.23,
    padding: 10,
    
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.92,
    shadowRadius: 5.46,
  },
  closeButton: {
    backgroundColor: "white",
    borderRadius: 10,
    margin: 10,
    marginBottom: -20
  },
  textStyle: {
    color: "black",
    textAlign: "left",
    fontFamily: "Alata", 
    fontSize: 15,
  },
  speechTitleStyle: {
    fontFamily: "Alata", 
    textAlign: "center",
    fontSize: 18, 
    marginBottom:20,
    }, 
    preSpeechStyle: {
      fontFamily: "Alata", 
      textAlign: "center",
      fontSize: 20, 
      marginBottom:2,
      marginTop: 2 
    },
   speechStyle: {
    fontFamily: "Alata", 
    textAlign: "left",
    fontSize: 18, 
    marginBottom:10,
    marginTop:10
  }, 
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    padding: 10,
    flexDirection: "row"
  },
  radioText: {
    marginHorizontal: width*0.05,
    fontSize: 16,
    color: '#000',
    fontWeight: '300',
    fontFamily: "Alata"
    },
    radioCircle: {
    height: 30,
    width: 30,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#2CB9B0',
    alignItems: 'center',
    justifyContent: 'center',
    },
    selectedRb: {
    width: 15,
    height: 15,
    borderRadius: 50,
    backgroundColor: '#2CB9B0',
    },
    timerText : {
      fontFamily : "Alata",
      fontSize: 14
    },
    timerlabel: {
      paddingHorizontal: width* 0.04, 
      marginHorizontal: width*0.13, 
      backgroundColor:"white",
      borderColor:"lightblue",
      borderWidth:1,
      borderTopRightRadius: 40,
      borderRadius: 10
    }

});






// <ActionSheet 
// containerStyle={{
//                 width: width*0.85,
//                 borderTopLeftRadius: 90, 
//                 borderBottomRightRadius: 90,
//                 marginBottom: HEIGHT* 0.6,
//                 borderBottomLeftRadius: 30,
//                 borderTopRightRadius: 30,
//                 alignItems:"center",
//                 justifyContent: "center"
//               }}
// ref={actionSheetRef} 
// bounciness={70}
// footerAlwaysVisible
// headerAlwaysVisible
// bounceOnOpen
// springOffset={40}
// > 
// <Text style={{textAlign:"center", 
//        fontFamily:"Alata",
//         fontSize: 30,
//        marginVertical: 20,
//       }}>
// Timer Setting
// </Text>
// <View style={{alignItems:"center"}}>
// <FlatList 
//     renderItem={({item }) => 
//       <View style={{flexDirection:"row", marginBottom: HEIGHT * 0.03}}>
//       <Text style={styles.radioText}>{item.key}</Text>
//       <TouchableOpacity
//         style={styles.radioCircle}
//         onPress={() => {
//               setValue(item.key);
//               setCurrentHours(item.hours); 
//         }}>
//        {value === item.key && <View style={styles.selectedRb} />} 
//       </TouchableOpacity>
//       </View>
//     }
//     data={buttonList}
// />
// {value !== null ?  <Text style={styles.radioText}> {value}</Text> : null }
// {CurrentTimeChecker()}
// </View>  
// <Text style={{fontFamily:"Alata"}}> tap the outside to set the timer </Text>
// </ActionSheet>
import React, { createRef, useEffect, useState, Children } from "react";
import { Button as RButton, StyleSheet, Text, View, Dimensions,TouchableHighlight, ImageRequireSource, SafeAreaView, Animated, FlatList, TouchableOpacity  } from "react-native";
// import CountDownTimer from "./CountDownTimer";
import { Box, Button } from "../../components";
import PreModalContent from "./PreModalContent";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

import CurrentTimeLable from "./CurrentTimeLable";
import Modal from 'react-native-modal';
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");
const HEIGHT = width * 1.6;

//hours is the scheduled hours 
  interface ContentProps {

    finishedHandler : (s:string) => void; 
    hours: number; 
    seconds: number; 
    navigation : any;
    remainingHoursHandler: (h:number)=>void;
    
  }
  

  //todo 
  //adjust the components for small screens!

export default ({  seconds, hours, finishedHandler, navigation }: ContentProps) => {
    
    //keeps track of the elapsed hours 
    const [ElapsedHours, setElapsedHours] = useState<number>(1);
    
    //keeps track of the remaining seconds 
    const [ElapsedSeconds, setElapsedSeconds] = useState<number>(1);
    
    const [toggleButton, setToggleButton] = useState<boolean>(true);
    
    const [play, setPlay] = useState<boolean>(false);
    
    const [isModalVisible, setModalVisible] = useState(false);
    // const [elapsedHours, setElapsedHours] = useState<number>(1); 



    const ModalTrigger = () => {
        setModalVisible(!isModalVisible)
      
    };


    const ModalCloseAndNext = () => {
      setModalVisible(!isModalVisible);
      finishedHandler("finished");
    };
    
    useEffect(()=>{
        // setCurrentHours(hours);
       // setElapsedSecond(seconds);
    },[]);
        
   
     const elaspedLabel = (remainingTime : number | undefined) => {

        //keep track of the time every seconds
        useEffect(()=>{

        }, []);
      
        
        const scheduledSeconds = hours * 60* 60;
        
        var elapsedTotalSeconds = remainingTime ? ( scheduledSeconds - remainingTime ) : null;
         
        var HOURS = elapsedTotalSeconds ? (Math.floor(elapsedTotalSeconds / 3600)) : null; 
        var MINS =  elapsedTotalSeconds ? (Math.floor((elapsedTotalSeconds%3600)/60)) : null; 
        var SECS =  elapsedTotalSeconds ? ((elapsedTotalSeconds%3600)%60) : null; 
        

        var NEW_HOURS = HOURS? ( HOURS > 9 ? "" + HOURS : "0" + HOURS) : "00";
        var NEW_MINS = MINS?  ( MINS > 9 ? "" + MINS : "0" + MINS) : "00";
        var NEW_SECS = SECS? (SECS > 9 ? "" + SECS : "0" + SECS) : "00";
        
 

         return `${NEW_HOURS}:${NEW_MINS}:${NEW_SECS}`;
     } 

          
      const children =(remainingTime : number | undefined, setElapsedSecond : any, setElapsedHours : any) => {
        
        useEffect(()=>{
          
             setElapsedSecond(remainingTime);
             
             //convertedHours === "remainingHours"
             var remainingHours = remainingTime ? Math.floor(remainingTime/ 3600) : 1;
             
             //elapsedHours = scheduled hours (e.g.16hours) - remainingHours (e.g.10hours) = 6 hours have passed  
             var elapsedHours = hours ? ( hours - remainingHours) : 1;
          
             setElapsedHours(elapsedHours);
              
        },[remainingTime]);


        const hours = remainingTime ? Math.floor(remainingTime/ 3600) : null; 
        const minutes = remainingTime ?  Math.floor((remainingTime % 3600)/ 60) : null;
        const seconds = remainingTime ? remainingTime % 60 : null; 
        

        const HOURS = hours? ( hours > 9 ? "" + hours : "0" + hours) : "00";
        const MINUTES = minutes?  ( minutes > 9 ? "" + minutes : "0" + minutes) : "00";
        const SECONDS = seconds? (seconds > 9 ? "" + seconds : "0" + seconds) : "00";

        return `${HOURS}:${MINUTES}:${SECONDS} \n `;
    };
      
    
  return (
  
    <Box flex={1} flexDirection="column" style={{ backgroundColor:"d3d3d3"}}> 
    <View
      style={{
        ...StyleSheet.absoluteFillObject,
       
        alignItems: "center",
        justifyContent: "center"
      }}>  
        <Box flex={4.4} 
                    style={{
                    width: width,
                    backgroundColor:"white",
                    borderBottomLeftRadius: 80,
                    borderBottomRightRadius: 80,
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 4,
                      height: 8,
                    },
                    shadowOpacity: 0.32,
                    shadowRadius: 5.46,
                    elevation: 12,
                   }}> 
         <View style={{ 
                marginTop: 5, 
                alignItems:"center",
                justifyContent: "center",

                }}>
        <Text style={{fontFamily:"Alata", fontSize:13, marginVertical: HEIGHT*0.01}}>
           Tap here to see your current fasting status 
        </Text>


        <View style={{marginVertical: height*0.03}}>
        <PreModalContent slotHours={ElapsedHours}/>
        </View>
            <CountdownCircleTimer
                
                isPlaying={play}
                duration={seconds}
                colors={[
                ["#add8e6", 0.05],
                ["#0BB5FF", 0.1]
                ]}
                strokeWidth={30}
                size={240} 
                initialRemainingTime={seconds}
                strokeLinecap="round"
                trailColor =  "lightgrey" 
                isLinearGradient={true}
                onComplete={()=> { finishedHandler("finished");}}
              >
           
            {({ remainingTime } ) => (
            <Animated.Text style={{
                  fontSize: 44,
                  fontFamily: "Alata",
                  textAlign: "center"
                }} >
                {children(remainingTime, setElapsedSeconds, setElapsedHours)}
                <Animated.Text 
                    style={{
                      fontSize: 15,
                      fontFamily: "Alata", 
                    }}
                >

                  You've fasted for {elaspedLabel(remainingTime)}
                </Animated.Text>
              </Animated.Text>
            )} 
            </CountdownCircleTimer>
            </View>
            <View style={{marginTop: height*0.03, alignItems:"center"}}>
            { toggleButton === true ? 
                          <Button onPress={ ()=>{ setPlay(true); setToggleButton(false); }} label="Start" variant="primary" />
                        :<CurrentTimeLable currentHours={hours} />
            }
            </View>
        </Box>
       <Box flex={1.6} style={{ backgroundColor:"transparent"}}>
           <View  style={{ 
             width: width,
             justifyContent: "space-evenly",
             alignItems:"center",

             }}>   
             <View style={{marginVertical: height*0.02}}>
              <Button onPress={() => navigation.navigate("Learn")} label="Learn More!" variant="primary" />
             </View>
             <View style={{ marginVertical: height*0.02,    }}> 
             <TouchableWithoutFeedback
                        style={styles.buttonStyle2}
                        onPress={()=>{ ModalTrigger();}}               
                     >
                        <Text style={[styles.radioText, {color:"black"}]}>
                              end fasting
                        </Text>
             </TouchableWithoutFeedback>
             </View> 
          <Modal isVisible={isModalVisible}>
              <View style={{
                flex: 1,
                width: width*0.85,
                marginVertical: HEIGHT* 0.5,
                borderBottomLeftRadius: 30,
                borderTopRightRadius: 30,
                alignItems:"center",
                justifyContent: "center"
              }}>
             <Text style={{
                    marginHorizontal: width*0.05,
                    fontSize: 20,
                    color: "white",
                    fontWeight: '300',
                    fontFamily: "Alata",
                    textAlign:"center"  
             }}> Are you sure you end fasting now?</Text>
             
             <View>
                 <View>
                     <TouchableHighlight 
                        underlayColor="#DDDDDD"
                        style={styles.buttonStyle}
                        onPress={()=>{ ModalTrigger();}}>
                        <Text style={[styles.radioText, {color:"white"}]}>
                          No, I'll continue
                        </Text>
                     </TouchableHighlight>
                 </View>
                 <View>
                     <TouchableHighlight
                       underlayColor="#DDDDDD"
                        style={styles.buttonStyle2}
                        onPress={()=>{ setModalVisible(!isModalVisible);
                          finishedHandler("finished"); }}>
                          <Text style={[styles.textStyle, {color:"black"}]}>
                            Yes, I end fasting now
                          </Text>
                     </TouchableHighlight>
                </View> 
                </View>
          </View>
        </Modal>
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
    fontSize: 13,
    color: '#000',
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
    }, 
    buttonStyle: {
      borderRadius: 25,
      marginTop: 10,  
      marginBottom: 25,
      height: HEIGHT * 0.08, 
      width: width * 0.55, 
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#2CB9B0",
      shadowColor: "#000",
      shadowOffset: {
        width: 4,
        height: 4,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,
      elevation: 12,

    },
    buttonStyle2: {
      borderRadius: 25,
      marginTop: 10,  
      marginBottom: 25,
      height: HEIGHT * 0.08, 
      width: width * 0.6, 
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,
      elevation: 9,
    }

});





  //  <ActionSheet 
  //           containerStyle={{
  //                           width: width*0.85,
  //                           borderTopLeftRadius: 90, 
  //                           borderBottomRightRadius: 90,
  //                           marginBottom: HEIGHT* 0.6,
  //                           borderBottomLeftRadius: 30,
  //                           borderTopRightRadius: 30,
  //                           alignItems:"center",
  //                           justifyContent: "center"
  //                         }}
  //           ref={actionSheetRef} 
  //           bounciness={70}
  //           footerAlwaysVisible
  //           headerAlwaysVisible
  //           bounceOnOpen
  //           springOffset={40}
  //           > 
  //           <Text style={{textAlign:"center", 
  //                 fontFamily:"Alata",
  //                   fontSize: 30,
  //                 marginVertical: 20,
  //                 }}>
  //           What Now?
  //           </Text>
  //           <View style={{alignItems:"center"}}>
        
  //           </View>  
  //           <Text style={{fontFamily:"Alata", 
  //                         textAlign:"center",
  //                         fontSize:17,
  //                         marginVertical: height* 0.02,
  //                         marginHorizontal: width*0.12}}>
  //                           Are you sure you end fasting now?  
  //            </Text>
  //            <Text  style={{
  //                         fontFamily:"Alata", 
  //                         textAlign:"center",
  //                         fontSize:12,
  //                         marginVertical: height* 0.02,
  //                         marginHorizontal: width*0.12}}>
  //              or tap the outside to close this tab
  //             </Text>

  //            <Button variant="primary" label="End fasting now" onPress={()=>{ console.log("end taaaa");finishedHandler("finished")}} ></Button>
   
  //           </ActionSheet>
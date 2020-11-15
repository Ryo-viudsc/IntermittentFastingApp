import React, { createRef, useEffect, useState } from "react";
import { ImageBackground, Image, StyleSheet, Text, Modal, View, Dimensions,TouchableHighlight, ImageRequireSource, SafeAreaView, Animated  } from "react-native";
import CountDownTimer from "./CountDownTimer";
import { Box, Button } from "../../components";
import ActionSheet from "react-native-actions-sheet";
import { ScrollView } from 'react-native-gesture-handler';
import Icons from "./Swipe/components/Icons";
import PreModalContent from "./PreModalContent";




/*
  To do for the home screen
  1, remake the whole UI (especially the top-half)
  2, fix the modal components 

*/

const { width } = Dimensions.get("window");
const HEIGHT = width * 1.6;



interface ContentProps {
  color: string;
  finishedHandler : (s:string) => void; 
  source: number;
  hours: number; 
  backgroundPic: ImageRequireSource;
  navigation : any;
}




export default ({ backgroundPic, source, hours, finishedHandler, navigation }: ContentProps) => {
    
    const [modalVisible, setModalVisible] = useState(false);
    const actionSheetRef : any = createRef();
    const [currentHours, setCurrentHours] = useState<number>(0);
    const [endTime, setEndTime] = useState('');

    // useEffect(()=>{

    //       var hours = new Date().getHours(); //Current Hours
    //       var minutes = new Date().getMinutes(); //Current Minutes

    //       const HOURS = hours? ( hours > 9 ? "" + hours : "0" + hours) : "00";
    //       const MINUTES = minutes?  ( minutes > 9 ? "" + minutes : "0" + minutes) : "00";
    //       const END_HOURS = (hours + currentHours) % 24 ? ( hours > 9 ? "" + hours : "0" + hours) : "00";

    //       setCurrentTime(
    //          `${HOURS}` + ':' + `${MINUTES}`
    //       );
          
    //       setEndTime(
    //         `${END_HOURS}` + ':' + `${MINUTES}`
    //       );

    //  },[]);
   
  
    const changeHours = (hours:number) => {
        return (setCurrentHours(hours));
    }



    
  return (
  
    <Box flex={1} flexDirection="column" style={{ backgroundColor:"#FFFFFF"
  }}> 
    <View
      style={{
        ...StyleSheet.absoluteFillObject,
        padding: HEIGHT * 0.02,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "red"
      }}>  
        <Box flex={1} style={{paddingTop: HEIGHT * 0.1, borderWidth: 1,
        borderColor: "red"}}> 
        <Text style={{fontFamily:"Alata", fontSize:13, marginVertical: HEIGHT*0.01}}>
            Snap the right tag to see your current fasting state! 
        </Text>
        <PreModalContent slotHours={hours}/> 
       </Box> 
        <Box flex={2} alignItems="center" 
        style={{borderWidth: 1,
                borderColor: "red",
                width: width
                }}>
          <CountDownTimer 
                  animatedColor="white" 
                  duration={1000} 
                  finishedHandler={finishedHandler}
          />
        </Box>
        <Box flex={1} 
             >
           <View  style={{ 
             borderWidth: 1,
             borderColor: "red",
             width: width,
             justifyContent: "center",
             alignItems:"center"}}>   
          <Button onPress={() => {actionSheetRef.current?.setModalVisible();}} label="Choose Time Slot?" variant="homeButton" />
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
              > 
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <TouchableHighlight
                      style={{ ...styles.closeButton, backgroundColor: "white"}}
                      onPress={() => {true}}> 
                      <Icons       
                              name="x" 
                              size={66} 
                              color="primary"
                              backgroundColor="white"
                        />  
                    </TouchableHighlight> 
                  </View>
                </View>
              </Modal>
        <Button onPress={() => {navigation.navigate("Learn")}} label="Learn More!" variant="default" />
        </View> 
        </Box> 
         <ActionSheet 
            containerStyle={{width: width*0.85,
                            borderTopLeftRadius: 90, 
                            borderBottomRightRadius: 90,
                            marginBottom: HEIGHT* 0.2,
                            borderBottomLeftRadius: 30,
                            borderTopRightRadius: 30,
                            alignItems:"center",
                            justifyContent: "center",
                          }}
            ref={actionSheetRef} 
            bounciness={90}
            headerAlwaysVisible
            footerAlwaysVisible
            bounceOnOpen
            springOffset={90}
        > 
        <Text style={{textAlign:"center", 
                   fontFamily:"Alata",
                    fontSize: 30,
                    marginVertical: 20 }}>
          Timer Setting
        </Text>
          <View>
             
          </View>  
           <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <Animated.Text style={styles.textStyle}>
                  Start {currentHours}
                </Animated.Text>
                <Animated.Text style={styles.textStyle}>
                   End  
                </Animated.Text>
            </View>
          </SafeAreaView>
         {/*   */}
         <Button variant="primary" label="Start Fasting" onPress={()=>{}}  />

   </ActionSheet>

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
});


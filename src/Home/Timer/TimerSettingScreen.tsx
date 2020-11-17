import React, { useState } from 'react';
import { StyleSheet, Text, Modal, View, Dimensions,TouchableHighlight, ImageRequireSource, SafeAreaView, Animated, FlatList, TouchableOpacity  } from "react-native";
import { Header } from 'react-native-elements';
import { Box, Button } from "../../components";
import CurrentTimeLable from './CurrentTimeLable';

const { width, height } = Dimensions.get("window");

interface TimerSettingScreenProps {



}

const TimerSettingScreen = () => {
  
  const [currentHours, setCurrentHours] = useState<number>(1);
  const [value, setValue] = useState("");

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
           marginTop:height*0.01, 
           marginHorizontal:width*0.1,
           flexDirection:"row",
            }}>
           <Text style={styles.radioText}> start  {HOURS_CONVERTED} : {MINS_CONVERTED} </Text>
           <Text style={styles.radioText}> end   {AFTER_HOURS} : {MINS_CONVERTED} </Text>
         </View>
         );
 }

 

      const buttonList = [
        {key: '10 hours', hours: 10},
        {key: '12 hours', hours: 12},
        {key: '14 hours', hours: 14},
        {key: '16 hours', hours: 16},
        {key: '18 hours', hours: 18}
      ];
 

  return (

       <Box flex={1}>
        <Header      
          // leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Timer Setting', style: { fontFamily: "Catara" ,fontSize:25 ,color: "white" } }}
          containerStyle={{
              backgroundColor: "#222222",
              justifyContent: 'space-around',
              height: height* 0.12
          }} 
        /> 

         
            <Box flex={1}>
                  <View style={{backgroundColor:"#00DBFF",
                                borderBottomEndRadius: 80,
                                shadowColor: "#000",
                                shadowOffset: {
                                  width: 0,
                                  height: 11,
                                },
                                shadowOpacity: 0.55,
                                shadowRadius: 14.78,
                                elevation: 22,
                                borderColor: "red", 
                                borderWidth:1
                   }}>



                  </View>
            </Box>
            <Box flex={4}>
                <View style={{
                              backgroundColor:"#white", 
                              borderColor: "red", 
                              borderWidth:1
                }}>
                        <View style={{alignItems:"center"}}>
                        <FlatList 
                              renderItem={({item }) => 
                                <View style={{flexDirection:"row", marginBottom: height * 0.03}}>
                                <Text style={styles.radioText}>{item.key}</Text>
                                <TouchableOpacity
                                  style={styles.radioCircle}
                                  onPress={() => {
                                        setValue(item.key);
                                        setCurrentHours(item.hours); 
                                  }}>
                                {value === item.key && <View style={styles.selectedRb} />} 
                                </TouchableOpacity>
                                </View>
                              }
                              data={buttonList}
                          />
                      {value !== null ?  <Text style={styles.radioText}> {value}</Text> : null }
                      {CurrentTimeChecker()}
                   </View> 
                   <CurrentTimeLable currentHours={currentHours} />  
                   {/**  confirm button goes here */}

               </View> 
            </Box>
        </Box>
 
  );
};

const styles = StyleSheet.create(
  {
    container: {
      width: width*0.85,
      borderTopLeftRadius: 90, 
      borderBottomRightRadius: 90,
      marginBottom: height* 0.6,
      borderBottomLeftRadius: 30,
      borderTopRightRadius: 30,
      alignItems:"center",
      justifyContent: "center",
    }, 
    radioText: {
      marginHorizontal: width*0.05,
      fontSize: 16,
      color: '#000',
      fontWeight: '300',
      fontFamily: "Alata"
    },

  }
);


export default TimerSettingScreen;
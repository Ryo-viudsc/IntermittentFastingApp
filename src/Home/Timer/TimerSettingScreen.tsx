import React, { useState } from 'react';
import { StyleSheet, Text, Modal, View, Dimensions,TouchableHighlight, ImageRequireSource, SafeAreaView, Animated, FlatList, TouchableOpacity  } from "react-native";
import { Header } from 'react-native-elements';
import { Box, Button } from "../../components";
import CurrentTimeLable from './CurrentTimeLable';
const { width, height } = Dimensions.get("window");
import { CommonActions } from '@react-navigation/native';

interface TimerSettingScreenProps {
  currentHours: number;
}

const TimerSettingScreen = ({navigation}) => {
  
  const [currentHours, setCurrentHours] = useState<number>(0);
  const [value, setValue] = useState("");
  const [err, setErr] = useState(false);
  var errMsg = "Please choose the fasting plan."
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
            justifyContent:"center",
           flexDirection:"row",
            }}>
           <Text style={styles.radioText}> start  {HOURS_CONVERTED} : {MINS_CONVERTED} </Text>
           <Text style={styles.radioText}> end   {AFTER_HOURS} : {MINS_CONVERTED} </Text>
         </View>
         );
    }
      const buttonList = [
        {key: '10 hours ', hours: 10},
        {key: '12 hours', hours: 12},
        {key: '14 hours', hours: 14},
        {key: '16 hours', hours: 16},
        {key: '18 hours', hours: 18}
      ];

  return (
    <Box flex={1}>
       <View style={{
              flex: 1,
              marginRight:width*0.1,
              marginLeft: width*0.1,
              marginTop: height*0.1,
              marginBottom: height*0.1,
              backgroundColor: "white",
              shadowColor: "#000",
              shadowOffset: {
                width: 10,
                height: 10,
              },
              shadowOpacity: 0.12,
              shadowRadius: 5.46,
              elevation: 19,
              borderColor:"black",
              borderWidth: 2,
              height: height*0.8,
              width: width*0.8,
              borderTopLeftRadius: 80,
              borderBottomRightRadius: 80,
              borderBottomLeftRadius: 30,
              borderTopRightRadius: 30,
              justifyContent: "center",
              flexDirection: "column"
          }}>
           <Text style={{
                  textAlign:"center", 
                   fontFamily:"Alata",
                   fontSize: 30,
                   marginVertical: height * 0.05,
                   
                  }}>
            Timer Setting
          </Text>
          <FlatList 
                renderItem={({item }) => 
                  <View style={{flexDirection:"row", marginBottom: height * 0.03, justifyContent:"center"}}>
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
            <Text style={styles.radioText}>
                   Please choose your fasting plan. 
                   {'\n'}
                   <Text style={styles.starText}>
                   *the minimum hours (=10) would be recommended if this is your first time 
                   </Text>
            </Text>
            {value !== null ?  (<Text style={styles.radioText}> {value} </Text>) : null }
            {CurrentTimeChecker()}
            <View style={{
                          justifyContent:"center", 
                          alignItems:"center",
                          marginBottom: height*0.03
                                        }}>
                          <Button 
                                label="Let's get started!" 
                                onPress={()=>{ 
                                     if(currentHours != 0){
                                          navigation.navigate("LiquidSwipe");
                                          navigation.dispatch(
                                            CommonActions.reset({
                                                index: 0,
                                                routes: [
                                                  { name: 'LiquidSwipe',
                                                    params : {currentHours:currentHours } 
                                                  }
                                                ]
                                            })
                                      );
                                     }else{
                                       console.log("plase choose time slot.")
                                       setErr(true);
                                     } 
                                }} //navigation with props 11/17
                                variant="primary"
                          />
              {err === true ? <Text style={styles.starText}> {errMsg} </Text> : null}            
              </View>
      </View>      
    </Box>
        );
};

//Preventing going back with react navigation 
//https://reactnavigation.org/docs/preventing-going-back/


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
      fontSize: 17,
      color: '#000',
      fontWeight: '300',
      fontFamily: "Alata",
      alignItems:"center",
      textAlign:"center",
      marginBottom :height * 0.01
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
        //paddingVertical: HEIGHT*0.01,
        marginHorizontal: width*0.13, 
        backgroundColor:"white",
        borderColor:"lightblue",
        borderWidth:1,
        borderTopRightRadius: 40,
        borderRadius: 10
      },
      starText: {
        marginHorizontal: width*0.05,
        fontSize: 13,
        color: '#000',
        fontWeight: '300',
        fontFamily: "Alata",
        alignItems:"center",
        textAlign:"center",
        marginBottom :height * 0.01
      
      }

  }
);


export default TimerSettingScreen;


  {/* <Header      
          // leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Timer Setting', style: { fontFamily: "Catara" ,fontSize:25 ,color: "white" } }}
          containerStyle={{
              backgroundColor: "#222222",
              justifyContent: 'space-around',
              height: height* 0.12}} 
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
                    {/* <Button label ="goback" onPress={navigation.navigate("LiquidSwipe")}></Button> */}
                  //   </View> 
                  // </Box> */}
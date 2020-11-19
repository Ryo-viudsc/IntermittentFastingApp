import React from 'react';
import { Dimensions, View, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';


const { width } = Dimensions.get("window");


interface CurrentTimeLableProps {
  currentHours : number;  
}

//TO DO
//1, converting functions need to be implemented here as wel 
//2, style sheet accordingly


const CurrentTimeLable = ({currentHours}:CurrentTimeLableProps) => {
    
    //factorize the time label component and 
    //pass the current time props to JUST show the two labels 
    //no call back functions inside of it 
    var currenttime = new Date(); 

     var HOURS= currenttime.getHours();
     var MINS = currenttime.getMinutes();

     var HOURS_CONVERTED  = HOURS ? ( HOURS > 9 ? "" + HOURS : "0" + HOURS  ) : "00";
     var MINS_CONVERTED = MINS ?  ( MINS > 9 ? "" + MINS : "0" +  MINS  ) : "00";

     var SUMMED_HOURS = HOURS + currentHours;

     if(SUMMED_HOURS > 24)
     {
       SUMMED_HOURS = SUMMED_HOURS % 24;
     }
    var AFTER_HOURS = SUMMED_HOURS ?  ( SUMMED_HOURS > 9 ? "" + SUMMED_HOURS : "0" + SUMMED_HOURS ) : "00";



  
      return(
            <View style={{ flexDirection:"row",
                    justifyContent: "space-between"
            }}>
            <View style={styles.timerlabel1}>
            <Animated.Text style={styles.timerText}>Start</Animated.Text>
            <Animated.Text style={styles.timerText}>{HOURS_CONVERTED} : {MINS_CONVERTED}</Animated.Text>
            </View>

            <View style={styles.timerlabel2}> 
            <Animated.Text style={styles.timerText}>End</Animated.Text>
            <Animated.Text style={styles.timerText}> {AFTER_HOURS} : {MINS_CONVERTED} </Animated.Text>  
            </View>
            </View>
        );
    
 };

 const styles = StyleSheet.create({
  timerText : {
      fontFamily : "Alata",
      fontSize: 15
    },
    timerlabel1: {
      paddingHorizontal: width* 0.04, 
      //paddingVertical: HEIGHT*0.01,
      marginHorizontal: width*0.13, 
      backgroundColor:"white",
      borderColor:"lightblue",
      borderWidth:5,
      borderTopRightRadius: 40,
      borderRadius: 10
    },
    timerlabel2: {
      paddingHorizontal: width* 0.04, 
      //paddingVertical: HEIGHT*0.01,
      marginHorizontal: width*0.13, 
      backgroundColor:"white",
      borderColor:"lightblue",
      borderWidth:5,
      borderTopLeftRadius: 40,
      borderRadius: 10
    }

 });





export default CurrentTimeLable;
      

  

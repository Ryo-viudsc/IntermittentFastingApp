import React from 'react';


const { width } = Dimensions.get("window");


interface CurrentTimeLableProps {

}

//TO DO
//1, converting functions need to be implemented here as wel 
//2, style sheet accordingly


const CurrentTimeLable = () => {
    
    //factorize the time label component and 
    //pass the current time props to JUST show the two labels 
    //no call back functions inside of it 
   
      return(
            <View style={{ flexDirection:"row",
                    justifyContent: "space-between"
            }}>
            <View style={styles.timerlabel}>
            <Animated.Text style={styles.timerText}>Start</Animated.Text>
            <Animated.Text style={styles.timerText}> {startTime}</Animated.Text>
            </View>

            <View style={styles.timerlabel}> 
            <Animated.Text style={styles.timerText}>End</Animated.Text>
            <Animated.Text style={styles.timerText}>{} </Animated.Text>  
            </View>
            </View>
        );
    
 };

 const styles = StyleSheet.create({
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
    }
 });





export default CurrentTimeLable;
      

  

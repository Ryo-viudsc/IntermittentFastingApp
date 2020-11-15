import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';



interface TimeProps {

}

const Time = () => {
        const [currentTime, setCurrentTime] = useState('');

        useEffect(() => {
          var date = new Date().getDate(); //Current Date
          var month = new Date().getMonth() + 1; //Current Month
          var year = new Date().getFullYear(); //Current Year
          var hours = new Date().getHours(); //Current Hours
          var min = new Date().getMinutes(); //Current Minutes
          var sec = new Date().getSeconds(); //Current Seconds
          setCurrentTime(
               hours + ':' + min
          );
        }, []);

        return (
          <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
              
           
                <Text style={styles.textStyle}>
                  {currentTime}
                </Text>
            </View>
          </SafeAreaView>
        );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 10,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
  },
});


export default Time;
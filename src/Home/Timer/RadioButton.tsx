import React, { useState, Component, Dispatch } from 'react';
import { SetStateAction } from 'react';
import { Dimensions, FlatList } from 'react-native';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get("window");

interface RadioButtonProps {
    setHours: Dispatch<SetStateAction<number>>;
}

const buttonList = [
    {key: '10 hours', hours: 10},
    {key: '12 hours', hours: 12},
    {key: '14 hours', hours: 14},
    {key: '16 hours', hours: 16},
    {key: '18 hours', hours: 18}
];

const RadioButton = ({setHours} : RadioButtonProps) => {
     
   const update = (hours:number) => {
       setHours(hours);
       console.log("updated with " + hours );
   }

    const [value, setValue] = useState("");

      //buttonList is the list of button 
        return (
          <View style={styles.container}>
            <FlatList 
                renderItem={({item }) => 
                  <View style={{flexDirection:"row", marginBottom: height * 0.03}}>
                  <Text style={styles.radioText}>{item.key}</Text>
                  <TouchableOpacity
                    style={styles.radioCircle}
                    onPress={() => {
                          setValue(item.key);
                          update(item.hours);            
                    }}>
                   {value === item.key && <View style={styles.selectedRb} />} 
                  </TouchableOpacity>
                  </View>
                }
                data={buttonList}
            />
            {value !== null ?  <Text style={styles.radioText}> {value}</Text> : null }
            <View style={{
                          marginTop:height*0.01, 
                          marginHorizontal:width*0.1,
                          flexDirection:"row",
                          
                          }}>
                {value !== null ? <Text style={styles.radioText}> Start  13:00   </Text>: null} 
                {value !== null ? <Text style={styles.radioText}> Start  13:00   </Text>: null} 
            </View>
        </View>
      );
}

const styles = StyleSheet.create({
	container: {
        marginBottom: 35,
        alignItems: 'center',
        flexDirection: 'column',
		justifyContent: 'space-between',
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
    result: {
        marginTop: 20,
        color: 'white',
        fontWeight: '600',
        backgroundColor: '#F3FBFE',
    },
});


export default RadioButton;

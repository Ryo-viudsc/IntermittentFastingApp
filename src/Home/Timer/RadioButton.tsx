import React, { useState, Component } from 'react';
import { FlatList } from 'react-native';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';


interface RadioButtonProps {

}


const buttonList = [
    {key: '10 Hours', hours: 10},
    {key: '12 Hours', hours: 12},
    {key: '14 Hours', hours: 14},
    {key: '16 Hours', hours: 16},
    {key: '18 Hours', hours: 18}
];

const RadioButton = () => {
     
    const [value, setValue] = useState("");

      //buttonList is the list of button 
        return (
          <View>
            <FlatList 
                renderItem={({item }) => 
                  <View>
                  <Text style={styles.radioText}>{item.key}</Text>
                  <TouchableOpacity
                    style={styles.radioCircle}
                    onPress={() => {
                          setValue(item.key)
                    }}>
                  {value === item.key && <View style={styles.selectedRb} />} 
                  </TouchableOpacity>
                  </View>
                }
                data={buttonList}
            />
            <Text> Selected: {value} </Text>
        </View>
      );
    
}

const styles = StyleSheet.create({
	container: {
        marginBottom: 35,
        alignItems: 'center',
        flexDirection: 'row',
		justifyContent: 'space-between',
	},
    radioText: {
        marginRight: 35,
        fontSize: 20,
        color: '#000',
        fontWeight: '700'
    },
	radioCircle: {
		height: 30,
		width: 30,
		borderRadius: 100,
		borderWidth: 2,
		borderColor: '#3740ff',
		alignItems: 'center',
		justifyContent: 'center',
  },
  selectedRb: {
		width: 15,
		height: 15,
		borderRadius: 50,
		backgroundColor: '#3740ff',
    },
    result: {
        marginTop: 20,
        color: 'white',
        fontWeight: '600',
        backgroundColor: '#F3FBFE',
    },
});


export default RadioButton;

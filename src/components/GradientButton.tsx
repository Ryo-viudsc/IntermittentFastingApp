import React, { ReactNode } from 'react';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';


//children component can consist
//a chunk of JSX element 
//this should be noted....0821 


const Pink = ['#ffc3a0', '#ffafbd'];
const AquaSplash = ['#13547a', '#80d0c7'];
const HealthyWater = ['#96deda', '#50c9c3'];


export default class GradientButton extends React.Component {

  render() {
    return (
      <TouchableOpacity>        
        <LinearGradient
          // Button Linear Gradient
          colors={HealthyWater}
          style={{ padding: 10, alignItems: 'center', borderRadius: 5 }}>
            <Text
            style={{
              backgroundColor: 'transparent',
              fontSize: 10,
              color: '#fff',
            }}>
            {this.props.children}
          </Text>
        </LinearGradient>
        </TouchableOpacity>

    );
  }
}

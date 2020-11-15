import React from 'react';
import { View, StyleSheet} from 'react-native';


interface TriangleProps {

}

const Triangle = () => {
return (  
     <View style={[styles.triangleCorner]} />
);
 };

 const styles = StyleSheet.create({
    triangleCorner : {
            width: 0,
            height: 0,
            backgroundColor: 'transparent',
            borderStyle: 'solid',
            borderRightWidth: 70,
            borderTopWidth: 20,
            borderRightColor: 'transparent',
            borderTopColor: 'white',
            borderBottomLeftRadius: 8,
            elevation: 0,
            transform: [
                {rotate: '180deg'}
              ]
    }, 

 });


export default Triangle;
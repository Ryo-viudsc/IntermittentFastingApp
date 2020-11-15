import React from 'react';
import { View, StyleSheet, Dimensions } from "react-native";

import { Button, Text } from "../../components"; 


const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent:"center",
        alignItems: "center",
        padding:44,
        width,
        backgroundColor: "white",
       
    },
    subtitle: {
        marginBottom: 12, 
        textAlign: "center", 
         fontFamily: "Alata"
    },
    description:{
        fontFamily: "Alata",
        color: "#0C0D34",
        textAlign: "center", 
        marginBottom: 20, 
    }
});


interface SubslideProps {
    subtitle: string;
    description: string;
    last?:boolean;
    onPress: () => void; 
} 


const Subslide = ({subtitle, description, last, onPress} : SubslideProps ) => {
    return (
        <View style={styles.container}>
            <Text variant="title2" style={styles.subtitle}>{subtitle}</Text>
            <Text variant="body" style={styles.description} >{description}</Text>
            <Button 
               label={last ? "Let's get started" : "Next"} 
               variant={last ? "primary" : "default"} 
               {...{onPress}}/>    
        </View>

    );
};



export default Subslide; 
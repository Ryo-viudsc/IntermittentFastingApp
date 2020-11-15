import React from 'react';
import { View, StyleSheet, Button as RNbutton } from 'react-native';
import footer from "../../Authentication/components/components/Footer";
import { Container, Button, Text, Box } from "./../../components";
import CountDownTimer from "./CountDownTimer";

import Progress from "./Progress";
import { HomeNavigationProps, HomeRoutes, AuthNavigationProps } from '../../components/Navigation';


const Timer = ({navigation} : HomeNavigationProps<"Timer">) => {

    return ( 
        <Container  pattern={1} {...{footer}}>
        <Box flex={1} borderColor="grey" borderWidth={1}  paddingTop="m"  alignItems="center" >   
        </Box> 
        <Box flex={3} alignItems="center" marginTop="m" borderColor="grey" borderWidth={1} >   
             
            <Text > TESTss for Timer screen </Text>
         
            <Button label="Choose time slot?" onPress={ () => navigation.navigate("Timer")} variant="gradient" />
        </Box>
         <Box flex={2} alignItems="center"marginTop="m" marginBottom="m" borderColor="grey" borderWidth={1} >
            <Progress timeSlot={14} timeCurrent={undefined} timeConvert={ () => undefined} />
            <Button  label="Gooo to Liquid" onPress={ () => 
                  navigation.navigate("LikedMeals")
                  } variant="gradient" ></Button>
        </Box> 
      
           
        </Container>
    ); 
};


const styles = StyleSheet.create({
    CountDownTimer: {
        paddingBottom: 4
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    Button: {
      
    }
  });

export default Timer;



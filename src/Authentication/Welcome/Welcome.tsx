import React from 'react';
import {theme, Box, Text} from "../../components/Theme";
import { Image , Dimensions} from "react-native";
import { Button } from '../../components';

import { AuthNavigationProps } from "../../components/Navigation";
import { BorderlessButton } from 'react-native-gesture-handler';

const  { width } = Dimensions.get("window"); 

const picture = {
        src: require('../../images/dna.png'),
        width: 5400,
        height: 4000
}

export const assets = [picture.src]; 

const Welcome = ( {navigation} : AuthNavigationProps<"Welcome">) => {
  
    return (  
    <Box flex={1} backgroundColor="white">
       <Box
            flex={1}
            borderBottomRightRadius="xl"
            backgroundColor="grey"
            alignItems="center"
            justifyContent="flex-end"
       >
      <Image
        source={picture.src}
        style={{
          width: width - theme.borderRadii.xl,
          height:
            ((width - theme.borderRadii.xl) * picture.height) / picture.width,
        }}
      />
    
    </Box>
    <Box flex={1} borderTopLeftRadius="xl">
      <Box
        backgroundColor="grey"
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
      />
      <Box
        backgroundColor="white"
        borderTopLeftRadius="xl"
        justifyContent="space-evenly"
        alignItems="center"
        flex={1}
        padding="xl"
      >
                <Text variant="title2">Let’s get started</Text>
              <Text variant="body" textAlign="center">
                Login to your account below or signup for an amazing experience
                </Text>
                <Button
                variant="primary"
                label="Have an account? Login"
                onPress={() => navigation.navigate("Login")}
                />
                <Button
                 variant="default"
                 label="Join us, it’s Free"
                 onPress={() => navigation.navigate("SignUp")}
                />
                <BorderlessButton 
                    style={{marginTop:10}}
                    onPress={() => navigation.navigate("ForgotPassword")}>
                      <Text variant="button"
                             color="secondary">
                              Forgot Password?
                       </Text>
                </BorderlessButton>      
         </Box>
      </Box>
      </Box>

    )};




export default Welcome; 
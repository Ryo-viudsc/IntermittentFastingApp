import React from 'react';


import { AuthNavigationProps } from '../components/Navigation';
import {
    Container,
    Box,
    Text,
    Button,
    RoundedIcon,
    RoundedIconButton,
  } from "../components";


  const SIZE = 60;


const PasswordChanged = ({navigation} : AuthNavigationProps<"PasswordChanged">) =>  {

//navigation.pop() takes you to the previous page 
        return (
            <Container
                pattern={0}
                footer={
                <Box flexDirection="row" justifyContent="center" marginBottom="xl">
                <RoundedIconButton
                    backgroundColor="white"
                    color="primary"
                    name="x"
                    size={60}
                    onPress={() => navigation.pop()}
                />
                </Box>
      }
    >
      <Box alignSelf="center" marginTop="xl" justifyContent="center">
        <RoundedIcon
          name="check-square"
          size={SIZE}
          backgroundColor="primaryLight"
          color="primary"
        />
      </Box>
      <Text variant="title1" textAlign="center" marginVertical="l">
        Your password was successfully changed
      </Text>
      <Text variant="body" textAlign="center" marginBottom="l">
        Close this window 
      </Text>
      <Box alignItems="center" marginTop="m">
        {/* <Button
          variant="primary"
          onPress={() => navigation.navigate("Login")}
          label="Reset password"
        /> */}
      </Box>
    </Container>
    
        );

}



export default PasswordChanged; 
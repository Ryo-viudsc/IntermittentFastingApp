import React from 'react';
import {Image, Dimensions, StyleSheet } from 'react-native';
import SocialLogin from '../SocialLogin';

import { Box, Text } from "../../../components"
import { BorderlessButton } from 'react-native-gesture-handler';


interface FooterProps {
    onPress: () => void;
    title: string;
    action: string; 

}


const Footer = ({onPress, title, action} : FooterProps) => {
   
   
    return (
        <>
        <SocialLogin /> 
        <Box alignItems="center" 
             marginHorizontal="s"
        >
            
        <BorderlessButton 
                {...{onPress}}
                 style={{marginBottom: 30}}
        > 
            <Text variant="button" color="white"> 
            <Text color="white">
                    { `${title}` }
                    {'       '}
             </Text>
            <Text color="primary" 
                  variant="button">
                  {action}
            </Text>
            </Text>
        </BorderlessButton>
        </Box>
  
    </>
        );

}


export default Footer; 
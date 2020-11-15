import React, { useState, forwardRef, RefObject } from 'react';
import { TextInput as RNTextInput, StyleSheet, TextInputProps as RNTextInputProps } from 'react-native';
import { Box, useTheme } from '../../../components';

import {Feather as Icon} from "@expo/vector-icons";


//NOTICE THE EXTEND PART 
//those interface props below are used like this 
//sort of like 2 dimentional props 
//parameter 
// >
// {({
//    values, 
//    touched,
//    errors
//     }) => (
//     <Box>
// error={errors.email}
// touched={touched.email}

interface TextInputProps extends RNTextInputProps {
    icon: string;
    touched?: boolean;
    error?: string; 
}

// type InputState = typeof Valid | typeof Invalid | typeof Pristine; 

//accept the icon name as TextInputProps 
const TextInput = forwardRef<RNTextInput, TextInputProps>(
({icon, touched, error, ...props }, ref) => {
   
    const theme = useTheme(); 
    const SIZE = theme.borderRadii.m * 2; 
    const reColor = !touched ? "text" : (error? "danger" : "primary"); 
    const color = theme.colors[reColor];


    return(
            <Box 
                flexDirection="row" 
                alignItems="center"
                height={48}
                borderRadius="s"
                borderColor={reColor}
                borderWidth={2} //{StyleSheet.hairlineWidth}
                >

                <Box padding="s" >    
                <Icon name={icon} 
                      {...{color}} 
                      size={20}
                      style={{marginRight:10}}
                />
                </Box>

                <Box flex={1}>
                <RNTextInput 
                   placeholderTextColor="grey"
                   {...props}
                   {...{ref}}
                   underlineColorAndroid="transparent" />
                </Box>

                { touched && (
                    <Box height={SIZE} 
                         width={SIZE} 
                         borderRadius="m"
                          justifyContent="center"
                         alignItems="center"
                         backgroundColor={ !error ? "primary" : "danger"}
                         marginRight="s"
                         style={{borderRadius: SIZE/2}}

                         >
                        <Icon color="white" 
                              name={ !error ? "user-check" : "x-circle"}  
                              size={19} 
                              style={{textAlign:"center"}}
                              />
                    </Box>
                )}
            </Box>
    )
    //KeyboardAvoidView ? for the screen input on Android 
});

//user check

export default TextInput; 
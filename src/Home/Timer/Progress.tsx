import React from 'react';
import {Text, Box, Button} from "../../components";
import { RoundedIconButton } from "../../components";




//time slot is the uration of fasting that an user chooses 

interface ProgressProps {
    timeCurrent?: 'number';
    timeSlot: 12 | 14 | 16 | 18 | 20;
    timeConvert: (timeSlot: any) => void | undefined;
}

const Progress = ({ timeCurrent, timeConvert, timeSlot }: ProgressProps) => {

const endTime = timeConvert(timeSlot); 

return(
    <Box justifyContent="space-between">
            <Box justifyContent="space-around" flexDirection="row" >
            <Text variant="title2" style={{marginTop: 10}}> Start Time {'   '} {timeCurrent}</Text>  
            </Box> 
            <Box justifyContent="space-around" flexDirection="row">
            <Text variant="title2" > End Time {' '} {endTime} lalala </Text>
            <Text style={{marginBottom: 10}}> {endTime} </Text>
            </Box>
            <Box>
                <Button  label="Choose time slot?" 
                         onPress={ () => true} 
                         variant="gradient"/>
            </Box>
    </Box>
    )  
}

export default Progress;
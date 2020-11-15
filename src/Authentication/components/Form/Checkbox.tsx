import React from 'react';
import { Box } from '../../../components';
import {Text} from "../../../components/Theme"
import { RectButton } from 'react-native-gesture-handler';
import { View } from 'react-native';
import { Feather as Icon } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";


interface CheckboxProps {
    label: string;
    checked: boolean;
    onChange: () => void;
}




const Checkbox = ({label, onChange, checked} : CheckboxProps) => {
       
        return (
       
            <BorderlessButton 
                    onPress={ () => onChange()}>
            <Box flexDirection="row" alignItems="center" >
                 <Box 
                     height={20}
                     width={20}
                     marginRight="s"
                     borderColor="primary"
                     borderWidth={1}
                     borderRadius="s"
                     alignItems="center"
                     justifyContent="center"
                     backgroundColor={checked? "primary" : "white"}>
                   <Icon name="check" color="white"/> 
                </Box> 
                
                <Text variant="body">{label}</Text>
            </Box>
            </BorderlessButton> 


        );
}



export default Checkbox; 





import React, { useState } from 'react';
import {TouchableOpacity, View, Text} from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 
import { TouchableHighlight } from 'react-native-gesture-handler';


//<MaterialIcons name="check-box" size={24} color="black" />
//<MaterialIcons name="check-box-outline-blank" size={24} color="black" />
interface IngredientProps {
   name: string;
}

const Ingredient = ({name}: IngredientProps) => {

    const [check, setCheck] = useState<boolean>(false);
    const Checked = ()  => {
        setCheck(!check);
        //this way, you can mimic the radio button function
    }

    return (
     <>
        <TouchableOpacity onPress={() =>Checked()}>
                <View >
                 <MaterialIcons name={check ? "check-box" : "check-box-outline-blank"} size={24} color="black" />
                </View>
        </TouchableOpacity>
     </>
    );
};

export default Ingredient;
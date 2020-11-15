import React from 'react';
import { Image, ImageRequireSource, StyleSheet, Text, View } from "react-native";
import { Box, Button } from "../../../components";
import BackgroundVideo from "../../../components/backgroundVideo";

interface FinishedProps {
    color: string;
    backgroundColor: string;
    source: number;
 
}

const Finished = ({color, source}: FinishedProps) => {
return (
    <>
    
    <Box flex={1} flexDirection="column" > 
    <View
      style={{
        ...StyleSheet.absoluteFillObject,
        padding: 32,
     
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >  
      <Box flex={1}>
        <Image {...{ source }} />
      </Box>  
    {/* //   <ModalContent fastingState={0}/> */}
         
        <Box alignItems="center" >
             <Text>Congratulations!</Text>
        </Box>
        <Box flex={1}>
         <Text>  THIS IS FINISHED SCREEN  </Text>
        </Box>
    </View>
    </Box> 
    </>

   );
};

export default Finished; 
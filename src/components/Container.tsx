import React, { ReactNode } from 'react';
import { Image, Dimensions, StyleSheet, Platform} from 'react-native';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme, Box } from './Theme';
import  { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Constants  from 'expo-constants';


const {width, height: wHeight } = Dimensions.get("window");
const aspectRatio = 750 / 1125; 
const height = width * aspectRatio;

interface ContainerProps {
    children: ReactNode;
    footer: ReactNode;
    marginBottom?: number;
    pattern: 0 | 1 | 2 | 3; 
}


export const assets = [
    require("./assets/patterns/green.jpg"),
    require("./assets/patterns/water1.jpg"),
    require("./assets/patterns/water2.jpg"),
    require("./assets/patterns/blue.png"),
] as const;

const Container = ({children, footer, pattern}: ContainerProps) =>  {

    const insets = useSafeAreaInsets();
    const asset = assets[pattern];
    const theme = useTheme();
    //re-render it as component 

        return (  
    
      <KeyboardAwareScrollView scrollEnabled={false}>
         <Box height={wHeight
               + (Platform.OS === "android" ? Constants.statusBarHeight : 0 )} 
              backgroundColor="secondary">
             <Box backgroundColor="white"> 
             <Box   
                   borderBottomLeftRadius="xl"
                   overflow="hidden"
                   height= {height * 0.30} 
                   backgroundColor="white"
              >

                <Box 
        
                       style={{ 
                             backgroundColor: "#0C0D34",
                            ...StyleSheet.absoluteFillObject,
                            width,
                            height, 
                            top: - height * 0.0,
                            borderBottomLeftRadius:theme.borderRadii.xl,
                        }} 
                 />
              </Box> 
              </Box>
              
              <Box flex={1} >    
                    <Box 
                            style={{ 
                                    backgroundColor: "#0C0D34",
                                    ...StyleSheet.absoluteFillObject,
                                    width,
                                    height, 
                                   // borderBottomLeftRadius:theme.borderRadii.xl,
                                }} 
                        />
                     
                    <Box  
                         borderRadius="xl" 
                         borderTopLeftRadius={0}
                         backgroundColor="white"
                         flex={1}>
                    {children}
                    </Box>
                 

             </Box>
             
            <Box 
             backgroundColor="secondary"
             paddingTop="m"
             >

             {footer}
             <Box height={insets.bottom} />
               
            </Box>
             
          </Box>   
          </KeyboardAwareScrollView>
    );
}



//third box is gonna be on the third layer to make the white space 
export default Container
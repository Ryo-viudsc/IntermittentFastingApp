import React from 'react';
import { View, Text, Image, ImageRequireSource, Dimensions, ImageBackground, ImageBackgroundProps } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

interface TitledCardProps {
    title? : string;
    remoteURL: ImageBackgroundProps;
}

 const SCREEN_HEIGHT = Dimensions.get('window').height;
 const SCREEN_WIDTH = Dimensions.get('window').width;
//.map(function(x){ return x.image.replace(/312x231/g,"636x393") });

//REMEMBER
//ALTERNATIVE to the maskedView 
// ->  use zIndex and position=absolute since RN uses relative for position as default




const TitledCard = ( {title, remoteURL } : TitledCardProps ) => {
return (
    <View style={{  flexDirection: "row-reverse",borderColor: "black", borderWidth: 5,  overflow:"hidden", borderRadius: 30, borderTopLeftRadius:100, borderBottomRightRadius: 100, height:SCREEN_HEIGHT* 0.80, width: SCREEN_WIDTH*0.9}}>
       <ImageBackground source={{uri:`${remoteURL}`}}
           resizeMode="contain"
           style={{ 
                    position: 'relative', 
                    zIndex: -10,
                    
                    alignItems: 'center',
                    flex: 1,
                    flexDirection: "row-reverse",
                    height:SCREEN_HEIGHT* 1.35, //zooming the background here
                    width: SCREEN_WIDTH*2,
                    transform: [{ rotate: '90deg' }]
                   }}
        />
              <LinearGradient colors={['transparent', 'black']} 
                    style={{
                            height: SCREEN_HEIGHT *  0.45, 
                            width:SCREEN_WIDTH,
                            alignSelf: "flex-end",
                            flexDirection: "row-reverse",
                            alignItems: "center",
                           
                            zIndex:-3,
                            position :"absolute",
                            
                          }}

           />   

              <View style={{ 
                            height: SCREEN_HEIGHT * 0.79,
                            width: SCREEN_WIDTH*0.88,
                            justifyContent: "flex-end",
                            flexDirection: "row-reverse",
                            alignItems: "flex-start",
                            zIndex: 2,
                            position : "absolute"
                          }}>
                
             
             
              <View style={{ 
                 
                            width: SCREEN_WIDTH*0.89, 
                            alignSelf: "flex-end",
                            //paddingTop: SCREEN_HEIGHT * 0.02,
                            paddingBottom: SCREEN_HEIGHT * 0.06,
                            alignItems: "center",
                            overflow:"hidden",
                     
                          }}>
        
                    <Text style={{
                        fontSize: 28,
                        color:   "white",
                        fontFamily: "Alata",
                        fontWeight: "bold",
                        marginHorizontal: SCREEN_WIDTH * 0.03,
                        textAlign: "left"         
                    }}> 
                    {title}
                    </Text> 
                    
              </View>
            
            </View>
   
    </View>
   ); 
};

export default TitledCard;
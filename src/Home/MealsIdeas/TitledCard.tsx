import React from 'react';
import { View, Text, Image, ImageRequireSource, Dimensions, ImageBackground } from 'react-native';


interface TitledCardProps {
    title? : string;
    mealtype?: string; 
    diet? : string;
    cuisineType? : string; 
    time? : number;
    uri: ImageRequireSource;

}


 const SCREEN_HEIGHT = Dimensions.get('window').height;
 const SCREEN_WIDTH = Dimensions.get('window').width;


const TitledCard = ( {title, uri, diet, cuisineType, time } : TitledCardProps ) => {
return (
    <View style={{borderColor: "black", borderWidth: 6,  overflow:"hidden", borderRadius: 30, borderTopLeftRadius:100, borderBottomRightRadius: 100, height:SCREEN_HEIGHT* 0.80, width: SCREEN_WIDTH*0.9}}>
       <ImageBackground source={uri} 
           style={{ position: 'relative', justifyContent: "center", alignItems: 'center',flex: 1, height:SCREEN_HEIGHT* 0.8, width: SCREEN_WIDTH*0.94 }}
        >
        <View style={{flex:4}}></View> 
        <View style={{ width: SCREEN_WIDTH*0.94, 
                       overflow:"hidden",
                       shadowColor: "#000",
                       backgroundColor: 'rgba(0,0,0,0.55)'}}>
        <Text
          style={{
            fontSize: 15,
            color:   "white",
            fontFamily: "Alata",
            textAlign: "left",
            marginHorizontal: 10,
            marginVertical: 1,
            paddingVertical: 1,
          }}
        >{cuisineType}
        
        </Text>
        <Text style={{
            fontSize: 38,
            color:   "white",
            fontFamily: "Alata",
            fontWeight: "bold",
            marginHorizontal: 5,
            textAlign: "left",
        }}>
         {title} 
    </Text> 
    
      <Text
              style={{
                fontSize: 20,
                color:   "white",
                fontFamily: "Alata",
                marginHorizontal: 10,
                textAlign: "left",
            }}
      >
        {diet}
     </Text>
      <Text
         style={{
          fontSize: 15,
          color:   "white",
          fontFamily: "Alata",
           marginHorizontal: 10,
           paddingBottom: 60, 
          
          textAlign: "right",
      }}
      >{time} mins {'  '} {'\n'} </Text>
      </View>

    </ImageBackground>
    </View>
   ); 
};

export default TitledCard;
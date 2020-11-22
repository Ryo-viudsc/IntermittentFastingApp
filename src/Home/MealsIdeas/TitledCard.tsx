import React from 'react';
import { View, Text, Image, ImageRequireSource, Dimensions, ImageBackground, ImageBackgroundProps } from 'react-native';


interface TitledCardProps {
    title? : string;
    remoteURL: ImageBackgroundProps;
}

 const SCREEN_HEIGHT = Dimensions.get('window').height;
 const SCREEN_WIDTH = Dimensions.get('window').width;
//.map(function(x){ return x.image.replace(/312x231/g,"636x393") });

const TitledCard = ( {title, remoteURL } : TitledCardProps ) => {
return (
    <View style={{borderColor: "black", borderWidth: 6,  overflow:"hidden", borderRadius: 30, borderTopLeftRadius:100, borderBottomRightRadius: 100, height:SCREEN_HEIGHT* 0.80, width: SCREEN_WIDTH*0.9}}>
       <ImageBackground source={{uri:`${remoteURL}`}}
           resizeMode="contain"
           
           style={{ position: 'relative', 
                   justifyContent: "center", 
                   alignItems: 'center',
                   flex: 1,
                    height:SCREEN_HEIGHT* 0.8, 
                    width: SCREEN_WIDTH*0.94,
                    
                   }}
        >
        
        <View style={{flex:4}}></View> 
        <View style={{ width: SCREEN_WIDTH*0.94, 
                       zIndex: 10,
                       overflow:"hidden",
                       shadowColor: "#000",
                       backgroundColor: 'rgba(0,0,0,0.75)'}}>
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
        >
        </Text>
        <Text style={{
            fontSize: 28,
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
      </Text>
      </View>

    </ImageBackground>
    </View>
   ); 
};

export default TitledCard;
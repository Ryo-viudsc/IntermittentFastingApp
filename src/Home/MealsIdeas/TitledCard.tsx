import React from 'react';
import { View, Text, Image, ImageRequireSource, Dimensions, ImageBackground, ImageBackgroundProps } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";



interface TitledCardProps {
    title? : string;
    remoteURL: ImageBackgroundProps;
    calories? : number;
    protein?:number; 
    fat?:number; 
    carbs?:number; 
}


 const SCREEN_HEIGHT = Dimensions.get('window').height;
 const SCREEN_WIDTH = Dimensions.get('window').width;
//.map(function(x){ return x.image.replace(/312x231/g,"636x393") });

const TitledCard = ( {title, remoteURL, calories, fat, protein, carbs } : TitledCardProps ) => {
return (
    
    <View style={{  flexDirection: "row-reverse",borderColor: "black", borderWidth: 5,  overflow:"hidden", borderRadius: 30, borderTopLeftRadius:100, borderBottomRightRadius: 100, height:SCREEN_HEIGHT* 0.80, width: SCREEN_WIDTH*0.9}}>
       <ImageBackground source={{uri:`${remoteURL}`}}
           resizeMode="cover"
           style={{ 
            
                    position: 'relative', 
                    zIndex: -10,
                    alignItems: 'center',
                    flex: 1,
                    alignSelf:"flex-start",
                    flexDirection: "row",
                    marginTop: 0,
                    height:SCREEN_HEIGHT*0.5,
                    width: SCREEN_WIDTH,
                   }}
        />
        {console.log(remoteURL)}
              <LinearGradient 
                    start={[0.1,0.3]}
                    end={[0.1,0.4]}
                    colors={['transparent', 'black']} 
                    style={{
                            height: SCREEN_HEIGHT*0.5, 
                            width:SCREEN_WIDTH,
                            alignSelf: "flex-end",
                            flexDirection: "row-reverse",
                            alignItems: "center",
                            zIndex:-3,
                            position :"absolute"
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
                            paddingBottom: SCREEN_HEIGHT * 0.05,
                            overflow:"hidden",
                     
                          }}>
        
                    <Text style={{
                        fontSize: 34,
                        color:   "white",
                        fontFamily: "Alata",
                        fontWeight: "bold",
                        marginHorizontal: SCREEN_WIDTH * 0.03,
                        textAlign: "left"         
                    }}> 
                    {title} 
                    </Text> 
                    <Text style={{
                        fontSize: 19,
                        color:   "white",
                        fontFamily: "Alata",
                        fontWeight: "bold",
                        marginHorizontal: SCREEN_WIDTH * 0.01,
                        textAlign: "left"         
                    }}> 
                    Kcal : {calories} 
                    </Text> 
                    <Text style={{
                        fontSize: 19,
                        color:   "white",
                        fontFamily: "Alata",
                        fontWeight: "bold",
                        marginHorizontal: SCREEN_WIDTH * 0.01,
                        textAlign: "left"         
                    }}> 
                    Protein : {protein}g
                    </Text> 
                    <Text style={{
                        fontSize: 19,
                        color:   "white",
                        fontFamily: "Alata",
                        fontWeight: "bold",
                        marginHorizontal: SCREEN_WIDTH * 0.01,
                        textAlign: "left"         
                    }}> 
                    Carbs : {carbs}g
                    </Text> 
                    <Text style={{
                        fontSize: 19,
                        color:   "white",
                        fontFamily: "Alata",
                        fontWeight: "bold",
                        marginHorizontal: SCREEN_WIDTH * 0.01,
                        textAlign: "left"         
                    }}> 
                    Fat : {fat}g
                    </Text> 

                    
              </View>
            
            </View>
   
    </View>
   ); 
};

export default TitledCard;
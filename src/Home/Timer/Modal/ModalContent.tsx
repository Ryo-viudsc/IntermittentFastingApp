import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  Dimensions
} from "react-native";
import  { ScrollView } from "react-native-gesture-handler"; 
import { Button, Box } from "../../../components"
import Icons from "../Swipe/components/Icons";
import Triangle from "../Modal/components/Triangle";
import { AntDesign } from '@expo/vector-icons';

const { width } = Dimensions.get("window");

interface ModalContentProps {
  hours : number; 
};


export const tips = [
  {
      stage: "1st Stage", 
      duration : "0 - 4 hours",
      picture: {
          src: require('../../../images/stage1.png'),
          width: width * 0.3,
          height: width * 0.3,
      },
      title: "High Blood Sugar",
      content: "Up to 4 hours after having a meal, your blood sugar remains high. \nThe body is flushed with insulin to remove this blood sugar and convert it into glycogen. This spike in insulin results in a sugar crash due to which people start feeling hungry after 4 hours of a meal. \nThe higher the glycaemic index of your meal the greater this crash will be. This is why high carb food keeps people hooked onto eating a lot.", 
  }, 
  {
      stage: "2nd Stage", 
      duration : "4 - 8 hours",
      picture: {
          src: require('../../../images/stage2.png'),
          width: width * 0.3,
          height: width * 0.3,
      },
      title: "Low Blood Sugar",
      content: "Blood sugar starts to drop and starts moving towards its normal levels. \n Your body is constantly trying to detoxify itself 24 hours a day. \nThe body uses a great deal of energy to detoxify, but it also uses a great deal of energy to digest food. \nWhen your body is not busy digesting food, it can focus its energy on eliminating toxins and healing.", 
  }, 
  {
      stage: "3rd Stage", 
      duration : "8 - 12 hours",
      picture: {
        src: require('../../../images/stage3.png'),
          width: width * 0.3,
          height: width * 0.3,
      },
      title: "Normal Blood Sugar",
      content: "The body primarily starts utilizing fats for energy. This state results in increased Ketone Bodies (or Keto Bodies) in your system. Research indicates that this state is also linked with overall decrease in inflammation in the body. Rejuvenation and healing processes start to kick in. You start to feel more alert and attentive.", 
  }, 
  {
      stage: "4th Stage", 
      duration : "12 - 18 hours",
      picture: {
        src: require('../../../images/stage4.png'),
          width: width * 0.3,
          height: width * 0.3,
      },
      title: "Partial Ketosis",
      content: "This is the beginning of the Ketosis State. Ketosis is a metabolic state that allows your body to burn fat instead of sugars or glycogen. At this stage the body is fueled by both metabolic pathways – Ketosis and Glycolysis. \nFasting has been shown to support mitochondrial health and anything that supports mitochondrial health also improves brain health.", 
  }, 
  {
      stage: "5th Stage", 
      duration : "18 - 28 hours",
      picture: {
        src: require('../../../images/stage5.png'),
        width: width * 0.3,
        height: width * 0.3,
      },
      title: "Ketosis and Fat Burning",
      content: "The body primarily starts utilizing fats for energy. This state results in increased Ketone Bodies (or Keto Bodies) in your system. Research indicates that this state is also linked with overall decrease in inflammation in the body. Rejuvenation and healing processes start to kick in. You start to feel more alert and attentive.", 
  }  
];

function converter ({hours}:ModalContentProps) : number {
   if(hours <= 4 && 0 <= hours) {
         return 0;    
   }else if( 4 < hours &&  hours <= 8){
         return 1;
   }else if( 8 < hours && hours <= 12){
         return 2; 
   }else if( 12 < hours && hours <= 18){
         return 3; 
   }else{
        return 4; 
   }
}  


const ModalContent = ({hours}:ModalContentProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  const slotHours : number = converter({hours});

  const preModalContent = ({slotHours}) => {
      return(
         <View style={{flexDirection:"row", justifyContent: "center"}}>
         <Box justifyContent="flex-end" >
         <Image  
              style={{
                  width: tips[slotHours].picture.width / 1.8,
                  height: tips[slotHours].picture.width / 1.8,
                  marginRight:4
                }} 
                 source={tips[slotHours].picture.src} 
          />
         </Box> 
          <Box justifyContent="space-between" flexDirection="row">
              <Box>
                <Text style={styles.textStyle}>{tips[slotHours].stage}</Text>
                <Text style={styles.preSpeechStyle}> {tips[slotHours].title}</Text> 
              </Box>
              <Box>
              <Text>{'      '}</Text>
              </Box>
              <Box justifyContent="center" flexDirection="column">  
                <AntDesign name="right" size={18} color="black" />
              </Box>
          </Box> 

        </View>

       
      
      );
  }

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("The screen has been closed.");
        }}
      > 
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
                <Text style={styles.speechTitleStyle}>{tips[slotHours].stage}</Text>
                <Image 
                    style={{
                      width: tips[slotHours].picture.width,
                      height: tips[slotHours].picture.width,
                      justifyContent: "center",
                    }} 
                    source={tips[slotHours].picture.src}
                />
                <Text style={styles.speechStyle}>{tips[slotHours].duration}</Text>
                <ScrollView alwaysBounceVertical={true}> 
                <Text style={styles.speechStyle}>{tips[slotHours].content}</Text>
                </ScrollView>
                 {/* <Button 
                       label="See More" 
                       variant="primary"
                       onPress={()=> true} /> */}

            <TouchableHighlight
              style={{ ...styles.closeButton, backgroundColor: "white"}}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            > 
                 <Icons       
                        name="x" 
                        size={66} 
                        color="primary"
                        backgroundColor="white"
                   />  
                 </TouchableHighlight> 
          </View>
        </View>
      </Modal>
       <View style={{justifyContent:"space-around", 
                      alignSelf: "flex-start",
                      marginLeft: 25,
                      marginTop: 20
            }}>
        <Triangle />
       </View>
      <TouchableHighlight
         activeOpacity={0.6}
         underlayColor="white"
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      > 
        {preModalContent({slotHours})}
      </TouchableHighlight>
      
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5
  },
  openButton: {
    backgroundColor: "white",
    borderRadius: 30,
    width : width * 0.9,
    height : width * 0.23,
    padding: 10,
    
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.92,
    shadowRadius: 5.46,
  },
  closeButton: {
    backgroundColor: "white",
    borderRadius: 10,
    margin: 10,
    marginBottom: -20
  },
  textStyle: {
    color: "black",
    // fontWeight: "bold",
    textAlign: "left",
    fontFamily: "Alata", 
    fontSize: 15,
  },
  speechTitleStyle: {
    fontFamily: "Alata", 
    textAlign: "center",
    fontSize: 18, 
    marginBottom:20,
    }, 
    preSpeechStyle: {
      fontFamily: "Alata", 
      textAlign: "center",
      fontSize: 20, 
      marginBottom:2,
      marginTop: 2 
    },
   speechStyle: {
    fontFamily: "Alata", 
    textAlign: "left",
    fontSize: 18, 
    marginBottom:10,
    marginTop:10
  }
});

export default ModalContent;

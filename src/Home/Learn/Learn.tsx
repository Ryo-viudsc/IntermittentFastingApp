import React, { Children } from 'react';
import {ImageBackground, Image, Text, View, FlatList, StyleSheet, Animated, Button, Dimensions, TouchableOpacity} from 'react-native';

const { width, height } = Dimensions.get("window");

interface LearnProps {

}

const state = {
    topic:[
        {
            index: 0,
            title: 'Weight Loss',
            subtitle:'Can Intermittent Fasting Help You Lose Weight and Belly Fat?',
            pic: require('../../images/background/gym.jpg'),
            video: require('../../../assets/VideoBG/wakeup.video.mp4'),
            slides: [
                "Generally speaking, intermittent fasting will make you eat fewer meals.",
                "Unless if you compensate by eating much more during the other meals, you will end up taking in fewer calories.",
                "Additionally, intermittent fasting enhances hormone function to facilitate weight loss.",
                "Lower insulin levels, higher growth hormone levels and increased amounts of norepinephrine (noradrenaline) all increase the breakdown of body fat and facilitate its use for energy.",
            ]
        },
        {
            index: 1,
            title: 'Productivity and Focus',
            subtitle:'Is Intermittent Fasting Good For Your Brain?',
            pic: require('../../images/background/workspace.jpg'),
            video:require('../../../assets/VideoBG/focus.Video.mp4'),
            slides: [
                "According to Dr Mark Mattson, a professor of Neurology at John Hopkins University, fasting has been shown to increase rates of neurogenesis in the brain.",
                "Perhaps there is a reason why most of the world’s major religions call for periodic fasting. Intermittent hunger clears the mind, awakens the senses, and improves brain functioning. ",
                "Protein sparing, reduction of inflammation and autophagy and increase of BDNF(Brain-derived neurotrophic factor ) production benefit our brain",
                "Intermittent fasting may increase the growth of new nerve cells, which should have benefits for brain function.",
            ]
        },
        {
            index: 2,
            title: 'Frequency',
            subtitle:'Should I do intermittent fasging everday?',
            pic: require('../../images/background/timer.jpg'),
            video:require('../../../assets/VideoBG/vege.video.mp4'),
            slides: [
               "16/8 intermittent fasting cycle can be repeated as frequently as you like from just once or twice per week to every day, depending on your personal preference.",
               "Many people prefer to eat between noon and 8 p.m., as this means you’ll only need to fast overnight and skip breakfast but can still eat a balanced lunch and dinner, along with a few snacks throughout the day.",
               "When partaking in this form of intermittent fasting, you will skip one meal (most likely breakfast) in the morning. You will eat a late breakfast, lunch, and finally dinner within an eight-hour time frame, then fast until breakfast the next day. ",
               "At the end of the day, There is no right or wrong approach to an intermittent fasting schedule — there is only a schedule that works best for you. ",
            ]
        },
        {
            index: 3,
            title: 'Common Questions',
            subtitle:'e.g. Can I Work out While Fasted?',
            pic: require('../../images/background/productive.jpg'),
            video: require('../../../assets/VideoBG/productivity.video.mp4'),
            slides: [
                "Can I Work out While Fasted? - Yes, fasted workouts are fine. Some people recommend taking branched-chain amino acids (BCAAs) before a fasted workout.",
                "Will Fasting Slow Down My Metabolism? - No. Studies show that short-term fasts actually boost metabolism. However, longer fasts of 3 or more days can suppress metabolism",
                "Will Fasting Cause Muscle Loss? - All weight loss methods can cause muscle loss, which is why it’s important to lift weights and keep your protein intake high. One study showed that intermittent fasting causes less muscle loss than regular calorie restriction",
                "Can I Drink Liquids During the Fast? - Yes. Water, coffee, tea and other non-caloric beverages are fine. Do not add sugar to your coffee. Small amounts of milk or cream may be okay. Coffee can be particularly beneficial during a fast, as it can blunt hunger.",
            ]
        },
    ],
  }



const Learn = ({navigation}) => {
return (
    <View style={styles.container}>
        <FlatList
        style={{flex:1}}
        data={state.topic}
        renderItem={({ item }) =>
               <View style={{overflow:"hidden"}}>
               <TouchableOpacity style={styles.listItem} 
                                onPress={() => {navigation.navigate("Ongoing", 
                                                    {   
                                                        title: item.title, 
                                                        subtitle: item.subtitle,
                                                        pic: item.pic,
                                                        video: item.video,
                                                        slides: item.slides
                                                    }
                                                )}} >
               <ImageBackground source={item.pic} style={styles.image} >
                         <View style={{position: "absolute", 
                                        top: 0, 
                                        left: 0,
                                        right: 0, 
                                        bottom: 0, 
                                        justifyContent: 'center', 
                                        alignItems: 'center',
                                        overflow:"hidden",
                                        shadowColor: "#000",
                                        backgroundColor: 'rgba(0,0,0,0.25)'}}>
                         <Text style={{color:'white', fontFamily:"Alata", fontSize: 30,textAlign: "center"}} >{item.title}</Text>
                         <Text style={{color:'white', fontFamily:"Alata", fontSize:14, textAlign: "center", paddingHorizontal: width* 0.1}} >{item.subtitle}</Text>
                         </View>
                </ImageBackground>
               </TouchableOpacity>
               </View>
            }
          keyExtractor={item => item.title}
        />
  </View>
);
 };


 const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F7F7F7',
      marginTop:60,
      
    },
    listItem:{
      width:width*0.9,
      height: height * 0.3,
      margin:10,
      flex:1,
      alignSelf:"center",
      flexDirection:"row",
      borderRadius: 10,
      overflow:"hidden",
      shadowColor: "#000",
      backgroundColor: 'rgba(0,0,0,0.55)'
    },
    image:{
        overflow:"hidden",
        justifyContent: "center",
        width:width*0.9,
        height: height * 0.3,
        
    },
    title:{


    },
    subtitle:{


    }

});

export default Learn;
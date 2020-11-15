import React, { useRef } from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import { useValue, onScrollEvent, interpolateColor, useScrollHandler, pinchGestureHandler } from "react-native-redash";
import Slide, { SLIDE_HEIGHT } from "./Slide";
import Animated, { multiply, divide, Extrapolate, interpolate } from "react-native-reanimated";
import Subslide from "./Subslide"; 
import Dot from "./Dot";
import { useTheme } from "../../components";
import { AuthNavigationProps } from "../../components/Navigation";
import { Theme, makeStyles } from "../../components/Theme";

const { width } = Dimensions.get("window");


const useStyles = makeStyles((theme: Theme) => ({
    container: {
      flex: 1,
      backgroundColor: "white",
    },
    underlay: {
      ...StyleSheet.absoluteFillObject,
      alignItems: "center",
      justifyContent: "flex-end",
      borderBottomRightRadius: theme.borderRadii.xl,
      overflow: "hidden",
    },
    slider: {
      height: SLIDE_HEIGHT,
      borderBottomRightRadius: theme.borderRadii.xl,
    },
    footer: {
      flex: 1,
    },
    footerContent: {
      flex: 1,
      backgroundColor: "white",
      borderTopLeftRadius: theme.borderRadii.xl,
    },
    pagination: {
      ...StyleSheet.absoluteFillObject,
      height: theme.borderRadii.xl,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  }));
  
const slides = [
    { 
        title: "CREATIVE" , subtitle: "What is intermittent fasting?", description:"First message ges here", color: "#E6A966", 
       picture: {
        src: require('../../images/creative.png'),
        width: 3903, 
        height: 3283,
      }
    },
    { 
      title: "PRODUCTIVE",  subtitle: "Second Screen", description:"Second message goes here?", color: "#B3C0CB",
      picture: {
        src: require('../../images/productive.png'),
        width: 3903, 
        height: 3283,
      }
    },
    { 
      title: "ENERGETIC",  subtitle: "Third Screen", description:"Third message goes here?", color: "#9ccc9c",
      picture: {
            src: require('../../images/energetic.png'),
            width: 3803, 
            height: 3283
      }
    },
    { 
      title: "CHEERFUL",  subtitle: "Forth Screen", description:"Fourth message goes here", color: "#FFDDDD",
      picture:{
            src:  require('../../images/cheerful.png'),
            width: 3903, 
            height: 3283,
      }
    }, 
];


export const assets = slides.map(slides => slides.picture.src); 


const Onboarding = ({ navigation }: AuthNavigationProps<"Onboarding">) => {

    const styles = useStyles();
    const theme = useTheme();
    const { scrollHandler, x } = useScrollHandler( );
    const scroll = useRef<Animated.ScrollView>(null);
    const backgroundColor = interpolateColor( x, {
        inputRange: slides.map( ( _, i) => i * width ),
        outputRange: slides.map( (slide) => slide.color ),
  });

     return (
        <View style={styles.container}>
             <Animated.View style={[styles.slider, {backgroundColor}]}>

            {slides.map(({picture}, index) => {
                    const opacity = interpolate(x, {
                                            inputRange: [
                                                (index - 0.5) * width, 
                                                index* width, 
                                                (index + 0.5)* width],
                                            outputRange: [0, 1, 0],
                                            extrapolate: Extrapolate.CLAMP,
                                            });
                    return(
                        
                    <Animated.View style={[styles.underlay, { opacity }]} key={index}>
                       
                        <Image
                              style={{
                                width: width,// - theme.borderRadii.xl,
                                height: ((width - theme.borderRadii.xl) * picture.height )  / picture.width,
                                
                              }} 
                              //might chanhge here later 
                              source={picture.src}/>                              
                    </Animated.View>
                    );
             })}

                 <Animated.ScrollView 
                             ref={scroll}
                             horizontal 
                             snapToInterval={width} 
                             decelerationRate="fast" 
                             showsHorizontalScrollIndicator={false}
                             bounces={false}
                             {...scrollHandler}
                            >
                         {slides.map( ({ title, picture }, index ) => (
                            <Slide key={index} right={!!(index % 2)} {...{title, picture }} />
                        ))}   

                 </Animated.ScrollView>
                 
                </Animated.View>
                <View style={styles.footer }>
                  <Animated.View 
                     style={{...StyleSheet.absoluteFillObject, backgroundColor }}
                  />
                  <View style={styles.footerContent} >
                       <View style={styles.pagination}>
                       {slides.map((_, index) => (
                       <Dot key={index} currentIndex={divide(x, width)} {...{ index }} />
                       ))}
                        </View>

                            <Animated.View style={{  
                                flexDirection: "row",
                                flex: 1, 
                                width: width * slides.length,
                                transform: [{ translateX : multiply(x, -1)}]
                            }}>

                         {slides.map( ({subtitle, description}, index ) =>{ 
                             const last = index === (slides.length - 1) 
                                   return (
                                        <Subslide 
                                            key={index} 
                                            onPress={ ( ) => {
                                                if(last) {
                                                    navigation.navigate("Welcome");
                                                }else{
                                                    scroll.current
                                                    ?.getNode()
                                                    .scrollTo({ x: width * (index + 1), animated : true })
                                                    }
                                   } } 
                                    { ...{subtitle, description, last }} 
                                />);
                                })}   
                            </Animated.View>
                   </View>
            </View>
        </View>

    );
}

export default Onboarding; 
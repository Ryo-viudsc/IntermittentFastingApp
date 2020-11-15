import React from 'react';
import { Dimensions, StyleSheet } from  "react-native";
import { Video } from "expo-av";

const { width, height } = Dimensions.get("window");


interface BackgroundVideoProps {
    sourceNumber: number;
}


const videoAssets = [
  require("../../assets/VideoBG/focusVideo.mp4"),
//   require("../../../assets/VideoBG/productivity.video.mp4"),
//   require("../../../assets/VideoBG/swipedVideo.mp4"),
//   require("../../../assets/VideoBG/vege.video.mp4"),
//   require("../../../assets/VideoBG/wakeup.video.mp4"),
]; 


const BackgroundVideo = ({sourceNumber}: BackgroundVideoProps) => {
   return (

    <Video
    source={videoAssets[sourceNumber]}
    style={styles.backgroundVideo}
    rate={1.0}
    volume={1.0}
    isMuted={true}
    resizeMode="cover"
    shouldPlay
    isLooping
  />
      
   );
};

const styles = StyleSheet.create({
    backgroundVideo: {
        height: height,
        position: "absolute",
        top: 0,
        left: 0,
        alignItems: "stretch",
        bottom: 0,
        right: 0
      }
});


export default BackgroundVideo ;
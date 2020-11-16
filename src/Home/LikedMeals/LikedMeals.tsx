import React, { useState, useRef, useEffect } from "react";
import { ActivityIndicator, AsyncStorage, FlatList, ScrollView, RefreshControl, Dimensions, StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity } from "react-native";
import {
  Transitioning,
  Transition,
  TransitioningView,
} from "react-native-reanimated";

import { Box,  useTheme } from "../../components";
import { MaterialIcons } from '@expo/vector-icons'; 
import { Header, SearchBar } from 'react-native-elements';



const { width, height } = Dimensions.get("window");


var MealKey = "likedMeals";

interface LikedMealsProps
{
   id: number;
   title: string;
   diet: string;
   uri : any;
}

 const LikedMeals = ({navigation}) => {

  const [search, setSearch] = useState("");
  
  //this is used to save the filtered source 
  const [filteredDataSource, setFilteredDataSource] = useState<LikedMealsProps[]>([]);

  //this regular state is used as the master data source 
  const [state, setState] = useState<LikedMealsProps[]>([]);
  const [refreshing, setRefreshing] = useState(false); 


  const Load = async () => {
     
    try{
      const value = await AsyncStorage.getItem("likedMeals");
      if(value !== null)
      {
        var promiseItem = value.replace(/\\/g, '');
        var js_temp = JSON.parse(promiseItem);
       
        
        //set the master souce 
        setState(js_temp);
        setFilteredDataSource(js_temp);
        
        console.log(js_temp);


      }else{
        console.log("Failed to load")
      }
    } catch{
      console.log("Failed to load for try");
    }
  }
  


 
  const searchFilterFunction = (text:any) => {
    // Check if searched text is not blank

    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = state.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();

        return itemData.indexOf(textData) > -1;

      });

      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSour
      setFilteredDataSource(state);
      setSearch(text);
    }
  };


  useEffect(()=>{
    async function update(){
      await Load();
    }
    update();
  },[])
  
  
  const onRefresh = () => {
    async function update(){
      await Load();
    }
    update().then( ()=> {
      setRefreshing(false);
    }
    );
  }


  const transition = (
    <Transition.Together>
      <Transition.Out type="fade" />
      <Transition.In type="fade" />
    </Transition.Together>
  );

  const list = useRef<TransitioningView>(null);
  const theme = useTheme();
  
 
  return (

    <Box flex={2}  >
    <Header 
       // leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Liked Meals', style: { fontFamily: "Catara" ,fontSize:25 ,color: "white" } }}
    
        containerStyle={{
          backgroundColor: "#222222",
          justifyContent: 'space-around',
          height: height* 0.12
          }}
    /> 
     
         <SearchBar 
            round
            cancelIcon
            lightTheme
            searchIcon={{ size: 20 }}
            onChangeText={(text) => searchFilterFunction(text) }
            onClear={() => searchFilterFunction('')}
            placeholder="Search here or pull to refresh"
            value={search}
            inputStyle={{fontSize:15}}
            containerStyle={{backgroundColor:"white"}}
            inputContainerStyle={{backgroundColor:"lightgrey"}}
         />
  
      <Box flex={4}>
          <Transitioning.View ref={list} transition={transition}>
              <Box>
                  {refreshing ? <ActivityIndicator /> : null}
                  <FlatList 
                  //keyExtractor={(item, index) => index}
                    renderItem={({ item }) => 
                    <View style={{overflow:"hidden"}}>
                    <TouchableOpacity style={styles.listItem} 
                        onPress={() => { navigation.navigate("Meal",
                          {
                            title: item.title,
                            diet: item.diet,
                            uri: item.uri
                          }
                        )}} >
                          
                    <ImageBackground source={item.uri} style={styles.image} >
                        <View style={{
                              position: "absolute", 
                              top: 0, 
                              left: 0,
                              right: 0, 
                              bottom: 0, 
                              justifyContent: 'center', 
                              alignItems: 'center',
                              overflow:"hidden",
                              shadowColor: "#000",
                              backgroundColor: 'rgba(0,0,0,0.25)'
                              }}>
                        <Text style={{color:'white', fontFamily:"Alata", fontSize:30,textAlign: "left"}} >{item.title}</Text>
                        <Text style={{color:'white', fontFamily:"Alata", fontSize:14, textAlign: "left", paddingHorizontal: width* 0.1}} >{item.diet}</Text>
                        </View>
                 </ImageBackground>
               </TouchableOpacity>
               </View>    
           } //the end of flat list component
                    data={filteredDataSource}
                    refreshControl={
                      <RefreshControl
                        //refresh control used for the Pull to Refresh
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                      />
                    }
          />
            </Box>
          </Transitioning.View>
      </Box>
    </Box>
  );
};


const styles = StyleSheet.create({

  titleText:{
    fontFamily: "Alata",
    fontSize: 40,
    color: "lightgrey"
  },
  listItem:{
    width:width*0.85,
    height: height * 0.13,
    margin:10,
    flex:1,
    alignSelf:"center",
    flexDirection:"row",
    borderRadius: 10,
    overflow:"hidden",
    shadowColor: "#000",
    backgroundColor: 'rgba(0,0,0,0.55)',
    borderColor: "black",
    borderWidth: 2
  },
  image:{
      overflow:"hidden",
      justifyContent: "center",
      width:width*0.85,
      height: height * 0.13,

  },

});

export default LikedMeals;
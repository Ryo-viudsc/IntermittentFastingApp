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
import axios, { AxiosResponse } from 'axios';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { TouchableHighlight } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

var MealKey = "likedMeals";

interface LikedMealsProps
{
   id: number;
   title?: string;
   analyzedInstructions?: Array<string>;
   image?: any;
   extendedIngredients? : Array<string>;
}

 const LikedMeals = ({navigation}) => {

  const [search, setSearch] = useState("");
  
  //this is used to save the filtered source 
  

  //this regular state is used as the master data source 
  const [state, setState] = useState<LikedMealsProps[]>([]);
  //filteredDataSource is used with the master data source above 
  const [filteredDataSource, setFilteredDataSource] = useState<LikedMealsProps[]>([]);

  const [refreshing, setRefreshing] = useState(false); 
  const [IdList, setIdList] = useState<String[]>([]);

  const NewLoad = async () => {
    try{
      const value = await AsyncStorage.getItem("idList");
      if(value !== null)
      {
        var promiseItem = value.replace(/\\/g, '');
        var js_temp = JSON.parse(promiseItem);
        console.log(js_temp);
        setIdList(js_temp);
        setState(js_temp);
        // setFilteredDataSource(js_temp);
      }else{
        console.log("Nothing in liked meals list")
      }
    } catch{
      console.log("Failed to load for try");
    }
  }

 
  const searchFilterFunction = (text:any) => {
    // Check if searched text is not blank

    if (text) {
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

      const Load = async () => {
        try{
          const value = await AsyncStorage.getItem("idList");
          if(value !== null)
          {
            var promiseItem = value.replace(/\\/g, '');
            var js_temp = JSON.parse(promiseItem);
            console.log(js_temp);
            setIdList(js_temp);
        
            //setFilteredDataSource(js_temp);
          }else{
            console.log("Failed to load")
          }
        } catch{
          console.log("Failed to load for try");
        }
      }
  
        //first load the list of id to make a new API call  
      
      Load();
    

      //since axios doesn't accept a raw array as its paramters 
        var stringList = IdList.toString().replace("[", "").replace("]", "");    
        console.log("updating the id list => " + stringList);  
        axios.get(`https://api.spoonacular.com/recipes/informationBulk?apiKey=73cf9aebc64843fc83ff773bfdbddc88`,
        {
          params: {
              ids : stringList ,
              includeNutrition : false
          }
        })
        .then((response:AxiosResponse<any>) => {
            setState(response.data); 
            setFilteredDataSource(response.data);             
        })
        .catch((error : Error) =>{ console.log(error)})

  },[])
  
  


  const onRefresh = () => {
      async function update(){
        await NewLoad();
      }
      update().then( ()=> {
        setRefreshing(false);
      });

      var stringList = IdList.toString().replace("[", "").replace("]", "");      
      axios.get(`https://api.spoonacular.com/recipes/informationBulk?apiKey=73cf9aebc64843fc83ff773bfdbddc88`,
      {
        params: {
            ids : stringList ,
            includeNutrition : false
        }
      })
      .then((response:AxiosResponse<any>) => {
          setFilteredDataSource(response.data)
          setState(response.data);          
      })
      .catch((error : Error) =>{ console.log(error)})
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
        centerComponent={{ text: 'Liked Meals', style: { fontFamily: "Catara", fontSize:25, color: "white" } }}
    
        containerStyle={{
          backgroundColor: "#222222",
          justifyContent: 'space-around',
          height: height* 0.08
        }}
    /> 
      <View style={{ 
                     flexDirection: "row", 
                     justifyContent:"center", 
                     alignItems:"center"
                    }}>
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
            containerStyle={{
                              backgroundColor:"white",
                              width:width*0.9,
                              borderRadius :20
                            }}
            inputContainerStyle={{backgroundColor:"lightgrey"}}
         />
        <TouchableHighlight
            underlayColor="transparent" 
            onPress={()=>{ 
                  onRefresh();
                  console.log("Icons was pressed");
             }}
             containerStyle={{
                  backgroundColor:"transparent"
             }}
            style={{padding:0}}
        
        >
        <MaterialCommunityIcons name="refresh" size={width*0.1} color="grey" />
        </TouchableHighlight>
       </View>
      <Box flex={4}>
          <Transitioning.View ref={list} transition={transition}>
              <Box>
                  {refreshing ? <ActivityIndicator /> : null}
                  <FlatList 
                    renderItem={({ item }) => 
                    <View style={{overflow:"hidden"}}>
                    <TouchableOpacity style={styles.listItem} 
                        onPress={() => { navigation.navigate("Meal",
                          {
                             title: item.title,
                             uri: item.image,
                             recipe: item.analyzedInstructions,
                             ingredients : item.extendedIngredients
                          }
                        )}} >
                    
                    <ImageBackground source={{uri:`${item.image}`}} style={styles.image} >
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
                        <Text style={{fontWeight: "bold",color:'white', fontFamily:"Alata", fontSize:23,textAlign: "center"}} >{item.title}</Text>
                        {/* <Text style={{color:'white', fontFamily:"Alata", fontSize:14, textAlign: "left", paddingHorizontal: width* 0.1}} >{item.dishTypes}</Text> */}
                        </View>
                 </ImageBackground>
               </TouchableOpacity>
               </View>    
           } //the end of flat list component
                    keyExtractor={(item, index) => String(index)}
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
    borderRadius: 20,
    overflow:"hidden",
    shadowColor: "#000",
    backgroundColor: 'rgba(0,0,0,0.55)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  image:{
      overflow:"hidden",
      justifyContent: "center",
      width:width*0.85,
      height: height * 0.13,

  },

});

export default LikedMeals;
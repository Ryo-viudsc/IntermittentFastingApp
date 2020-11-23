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



//TODO 
//1, use the local storage to grab the array of ids that an user has liked 
//2, call the API with a link of bulksearch with the array that contains the list of ids 
//3, sort the response with words like reuslt, recipes, etc 
//4, pass those props accordingly 



const { width, height } = Dimensions.get("window");


var MealKey = "likedMeals";

// interface LikedMealsProps
// {
//    id: number;
//    title: string;
//    recipe: Array<string>;
//    uri : any;
// }

 const LikedMeals = ({navigation}) => {

  const [search, setSearch] = useState("");
  
  //this is used to save the filtered source 
  // const [filteredDataSource, setFilteredDataSource] = useState<LikedMealsProps[]>([]);

  //this regular state is used as the master data source 
  const [state, setState] = useState([]);
  const [refreshing, setRefreshing] = useState(false); 
  const [IdList, setIdList] = useState<String[]>([ "638166", "780001"]);

  const Load = async () => {
     
    try{
      const value = await AsyncStorage.getItem("idList");
      if(value !== null)
      {
        var promiseItem = value.replace(/\\/g, '');
        var js_temp = JSON.parse(promiseItem);
        console.log(js_temp);
        
        setState(js_temp);
        // setFilteredDataSource(js_temp);

      }else{
        console.log("Failed to load")
      }
    } catch{
      console.log("Failed to load for try");
    }
  }
  


 
  // const searchFilterFunction = (text:any) => {
  //   // Check if searched text is not blank

  //   if (text) {
  //     // Inserted text is not blank
  //     // Filter the masterDataSource
  //     // Update FilteredDataSource
  //     const newData = state.filter(function (item) {
  //       const itemData = item.title
  //         ? item.title.toUpperCase()
  //         : ''.toUpperCase();
  //       const textData = text.toUpperCase();

  //       return itemData.indexOf(textData) > -1;

  //     });

  //     setFilteredDataSource(newData);
  //     setSearch(text);
  //   } else {
  //     // Inserted text is blank
  //     // Update FilteredDataSource with masterDataSour
  //     setFilteredDataSource(state);
  //     setSearch(text);
  //   }
  // };


  useEffect(()=>{
    //first load the list of id to make a new API call  
    async function update(){
      await Load();
    }  
      
      //since axios doesn't accept a raw array as its paramters 
      //  var stringList = IdList.toString().replace("[", "").replace("]", ""); 

      //  console.log(stringList);
     
      //   axios.get(`https://api.spoonacular.com/recipes/informationBulk?apiKey=73cf9aebc64843fc83ff773bfdbddc88`,
      //   {
      //     params: {
      //         ids : stringList ,
      //         includeNutrition : false
      //     }
      //   })
      //   .then((response : AxiosResponse<any>) => {
 
      //       setState(response.data);
      //       
      //   })
      //   .catch((error : Error) =>{ console.log(error)})

    

  

    //update is going to update the ldList 
    // update();
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
          height: height* 0.08
        }}
    /> 
     
         <SearchBar 
            round
            cancelIcon
            lightTheme
            searchIcon={{ size: 20 }}
            // onChangeText={(text) => searchFilterFunction(text) }
            // onClear={() => searchFilterFunction('')}
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
                        {/* <Text style={{color:'white', fontFamily:"Alata", fontSize:14, textAlign: "left", paddingHorizontal: width* 0.1}} >{item.dishTypes}</Text> */}
                        </View>
                 </ImageBackground>
               </TouchableOpacity>
               </View>    
           } //the end of flat list component
                    data={state}
                    // refreshControl={
                    //   <RefreshControl
                    //     //refresh control used for the Pull to Refresh
                    //     refreshing={refreshing}
                    //     onRefresh={onRefresh}
                    //   />
                    // }
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
import axios from 'axios';
import React, { useState } from 'react';
import { SetStateAction } from 'react';
import {Text, Image} from 'react-native';


//this one is the function 
//for home screen to trigger in useEffect 
//it returns the array of strings 
export const Initialize_NewCards = async () => {
  
    
      // console.log(response.data); 

      // return  response.data;
          
}


//the parameters are the array of ids(string) that are associated with liked meals 
//and the setState function to store the result 
//the idList is loaded from a local storage 
export const getLikedCardsBulk = (idList : string[]) => {

      console.log("printing the content of idList here" + idList);
      axios.get(`https://api.spoonacular.com/recipes/informationBulk?apiKey=73cf9aebc64843fc83ff773bfdbddc88`, 
                  { 
                    params: {  
                                id :  idList,
                                includeNutrition : false,    
                            }
                })
          .then(res => {

              const results = res.data;
              console.log(results);
              return results;

          }).catch(error => console.log("error"));

}




//https://api.spoonacular.com/recipes/random?apiKey=73cf9aebc64843fc83ff773bfdbddc88.

//the endpoints is under the baseURL 
//All Yelp Fusion API endpoints are under 
//https://api.yelp.com/v3.


//https://masteringjs.io/tutorials/axios/get-query-params
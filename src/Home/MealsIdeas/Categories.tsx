import React from "react";
import { ScrollView, View, Dimensions } from "react-native";

import Category from "./Category";

const { width } = Dimensions.get("window");
const HEIGHT = width * 1.6;


//https://colorhunt.co/palettes/pastel
//might use country flag as background 
const categories = [
  {
    id: "mexican",
    title: "Mexican",
    color: "#d0fffe"
  },
  {
    id: "japanese",
    title: "Japanese",
    color: "#fffddb"
  },
  {
    id: "italian",
    title: "Italian",
    color: "#e4ffde"
  },
  {
    id: "vietanamese",
    title: "Vietnamese",
    color: "#ffd3fd"
  },
  {
    id: "random",
    title: "Random",
    color: "#ffe7d3"
  },
  {
    id: "random0",
    title: "Random",
    color: "#ea907a"
  },
  {
    id: "Random1",
    title: "Random",
    color: "#fbc687"
  },
  {
    id: "Random2",
    title: "Random",
    color: "#82c4c3"
  },
  {
    id: "Random4",
    title: "Random",
    color: "#f1935c"
  },
];

const Categories = () => {
  return (
    <View style={{paddingHorizontal: 3}}>
      <ScrollView  showsHorizontalScrollIndicator={true} horizontal>
        {categories.map((category) => (
          <Category  key={category.id} category={category}  />
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;
import React from "react";
import { Dimensions, Image } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";

import { Box, useTheme, Text } from "../../components";

import DrawerItem, { DrawerItemProps } from "./DrawerItem";

export const assets = [require("../../images/background/gym.jpg")];
const { width } = Dimensions.get("window");
export const DRAWER_WIDTH = width * 0.8;
const aspectRatio = 750 / 1125;
const height = DRAWER_WIDTH * aspectRatio;
// const items: DrawerItemProps[] = [
//   {
//     icon: "zap",
//     label: "MealsIdeas",
//     screen: "MealsIdeas",
//     color: "primary",
//   },
//   {
//     icon: "heart",
//     label: "FavoritesMeals",
//     screen: "FavoritMeals",
//     color: "orange",
//   },
//   {
//     icon: "user",
//     label: "Edit Profile",
//     screen: "FavoritMeals",
//     color: "yellow",
//   },
//   {
//     icon: "clock",
//     label: "Transaction History",
//     screen: "TransactionHistory",
//     color: "pink",
//   },
//   {
//     icon: "settings",
//     label: "Notifications Settings",
//     screen: "FavoritMeals",
//     color: "violet",
//   },
//   {
//     icon: "log-out",
//     label: "Logout",
//     screen: "FavoritMeals",
//     color: "secondary",
//   },
// ];
const Drawer = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  return (
    <Box flex={1}>
      <Box flex={0.2} backgroundColor="white">
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          borderBottomRightRadius="xl"
          backgroundColor="secondary"
        >
       
        </Box>
      </Box>
      <Box flex={0.8}>
        <Box flex={1} backgroundColor="secondary" />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          backgroundColor="white"
          borderTopLeftRadius="xl"
          borderBottomRightRadius="xl"
          justifyContent="center"
          padding="xl"
        >
          <Box
            position="absolute"
            left={DRAWER_WIDTH / 2 - 50}
            top={-50}
            backgroundColor="white"
            width={100}
            height={100}
            style={{ borderRadius: 50 }}
          />
          <Box marginVertical="m">
            <Text variant="title1" textAlign="center">
              Mike Peter
            </Text>
            <Text variant="body" textAlign="center">
              mike@flexinstudio.com
            </Text>
          </Box>
          {/* {items.map((item) => (
            <DrawerItem key={item.icon} {...item} />
          ))} */}
        </Box>
      </Box>
      <Box
        backgroundColor="white"
        width={DRAWER_WIDTH}
        overflow="hidden"
        height={height * 0.61}
      >
        <Image
          source={assets[0]}
          style={{
            width: DRAWER_WIDTH,
            height,
            borderTopLeftRadius: theme.borderRadii.xl,
          }}
        />
      </Box>
    </Box>
  );
};

export default Drawer;
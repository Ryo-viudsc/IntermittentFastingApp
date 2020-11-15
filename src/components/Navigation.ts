import { RouteProp, CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { DrawerNavigationProp } from "@react-navigation/drawer";



export interface AuthNavigationProps<
  RouteName extends keyof AuthenticationRoutes
> {
  navigation: CompositeNavigationProp<
    StackNavigationProp<AuthenticationRoutes, RouteName>,
    DrawerNavigationProp<AppRoutes, "Home">
  >;
  route: RouteProp<AuthenticationRoutes, RouteName>;
}

export interface HomeNavigationProps<RouteName extends keyof HomeRoutes> {
  navigation: StackNavigationProp<HomeRoutes, RouteName>;
  route: RouteProp<HomeRoutes, RouteName>;
}


export interface MealsNavigationProps<RouteName extends keyof MealRoutes> {
  navigation: StackNavigationProp<MealRoutes, RouteName>;
  route: RouteProp<MealRoutes, RouteName>;
}

export interface BottomNavigationProps<RouteName extends keyof HomeRoutes> {
  navigation: StackNavigationProp<HomeRoutes, RouteName>;
  route: RouteProp<HomeRoutes, RouteName>;
}


export type AppRoutes = {
  Authentication: undefined;
  Home: undefined;
};

export type AuthenticationRoutes = {
  Onboarding: undefined;
  Welcome: undefined;
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  PasswordChanged: undefined;
};

export type HomeRoutes = {
  Timer: undefined; 
  LiquidSwipe : undefined;
  Learn: undefined;
  MealsIdeas: undefined;
  LikedMeals: undefined;
};

export type LearnRoutes = {
  Learn: undefined;
  Ongoing: undefined; 
};

export type MealRoutes = {
  Meal: undefined; 
  LikedMeals : undefined; 
};


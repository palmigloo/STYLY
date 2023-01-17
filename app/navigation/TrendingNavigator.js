import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TrendingCardScreen from "../screens/TrendingCardScreen";
import TrendingDetailScreen from "../screens/TrendingDetailScreen";
import BoardDetailsScreen from "../screens/BoardDetailsScreen";
import StylingItemScreen from "../screens/StylingItemScreen";

const Stack = createStackNavigator();

const TrendingNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen
      name="Get Insipired"
      component={TrendingCardScreen}
      options={{
        title: " ",
      }}
    />
    <Stack.Screen
      name="TrendingDetail"
      component={TrendingDetailScreen}
      options={{
        title: " ",
      }}
      // options={{ headerShown: false }}
    />
    <Stack.Screen
      name="TrendingItem"
      component={StylingItemScreen}
      options={{
        title: " ",
      }}
      // options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default TrendingNavigator;

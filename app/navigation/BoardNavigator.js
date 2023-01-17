import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BoardScreen from "../screens/BoardScreen";
import BoardDetailsScreen from "../screens/BoardDetailsScreen";

const Stack = createStackNavigator();

const BoardNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen name="Boards" component={BoardScreen} />
    <Stack.Screen
      name="BoardDetail"
      component={BoardDetailsScreen}
      options={{
        title: "Detail",
        // headerShown: false,
      }}
      // options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default BoardNavigator;

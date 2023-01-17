import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import StylingQuestionScreen from "../screens/StylingQuestionScreen";
import StylingResultScreen from "../screens/StylingResultScreen";
import StylingItemScreen from "../screens/StylingItemScreen";

const Stack = createStackNavigator();

const StylingNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen name="Styling" component={StylingQuestionScreen} />
    <Stack.Screen
      name="StylingResult"
      component={StylingResultScreen}
      options={{
        title: " ",
      }}
      // options={{ headerShown: false }}
    />
    <Stack.Screen
      name="StylingItem"
      component={StylingItemScreen}
      options={{
        title: " ",
        headerStyle: {
          backgroundColor: "black",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    />
  </Stack.Navigator>
);

export default StylingNavigator;

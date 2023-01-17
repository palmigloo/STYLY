import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import StylingNavigator from "./StylingNavigator";
import BoardNavigator from "./BoardNavigator";
import TrendingNavigator from "./TrendingNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Trending"
      component={TrendingNavigator}
      options={{
        title: "Trending NOW",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Styling"
      component={StylingNavigator}
      options={({ navigation }) => ({
        // tabBarButton: () => (
        //   <StyleFinderButton onPress={() => navigation.navigate("Styling")} />
        // ),
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="plus-circle"
            color={color}
            size={size}
          />
        ),
      })}
    />
    <Tab.Screen
      name="My Board"
      component={BoardNavigator}
      // component={ImageList}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;

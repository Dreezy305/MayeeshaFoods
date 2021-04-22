import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import {
  createBottomTabNavigator,
  BottomTabBarHeightContext,
} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "../screens/Home";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <View>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        {/* <Tab.Screen name="Home" component={Home} /> */}
      </Tab.Navigator>
    </View>
  );
};

export default Tabs;

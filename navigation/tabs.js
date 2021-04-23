import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import {
  createBottomTabNavigator,
  BottomTabBarHeightContext,
} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "../screens/Home";
import { COLORS, icon } from "../constants";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <View>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ focused }) => (
              <Image
                source={icon.cutlery}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? COLORS.primary : COLORS.secondary,
                }}
              />
            ),
          }}
        />
        {/* <Tab.Screen name="Home" component={Home} /> */}
      </Tab.Navigator>
    </View>
  );
};

export default Tabs;

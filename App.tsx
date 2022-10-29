import React from "react";
import {
  NativeBaseProvider,
} from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import UserScreen from "./screens/UserScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
      <Tab.Navigator
          initialRouteName="Home"
          screenOptions={() => ({
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen
            name = "Home"
            component={HomeScreen}
            options={{
              title: "ホーム画面",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="ios-home" size={size} color={color} />
              )
            }}
          />
          <Tab.Screen
            name = "User"
            component={UserScreen}
            options={{
              title: "ユーザ画面",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person" size={size} color={color} />
              )
            }}
          />
        </Tab.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
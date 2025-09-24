import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        // tabBarActiveTintColor: "#7C3AED",
        tabBarActiveTintColor: "#ffffff",
        tabBarStyle: {
          backgroundColor: "#1F2937",
          paddingTop: 4,
        },
      }}
    >
      <Tabs.Screen
        name='home'
        options={{
          tabBarLabel: () => null, // hide default label
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: "center", marginTop: 4 }}>
              <Ionicons
                name={focused ? "home-sharp" : "home-outline"}
                size={28}
                color={color}
              />
              <Text style={{ fontSize: 10, color }}>
                {focused ? "Home" : "Home"}
              </Text>
            </View>
          ),
        }}
      />
      {/* <Tabs.Screen name='login' options={{ title: "Login" }} /> */}
      <Tabs.Screen
        name='pay'
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: "center", marginTop: 4 }}>
              <Ionicons
                name={focused ? "arrow-up-circle" : "arrow-up-circle-outline"}
                size={28}
                color={color}
              />
              <Text style={{ fontSize: 10, color }}>Pay</Text>
            </View>
          ),
        }}
      />

      {/* <Tabs.Screen
        name='play'
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: "center", marginTop: 4 }}>
              <Ionicons
                name={
                  focused ? "game-controller-sharp" : "game-controller-outline"
                }
                size={28}
                color={color}
              />
              <Text style={{ fontSize: 10, color }}>Play</Text>
            </View>
          ),
        }}
      /> */}

      <Tabs.Screen
        name='profile'
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: "center", marginTop: 4 }}>
              <Ionicons
                name={focused ? "person-circle-sharp" : "person-circle-outline"}
                size={28}
                color={color}
              />
              <Text style={{ fontSize: 10, color }}>Me</Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

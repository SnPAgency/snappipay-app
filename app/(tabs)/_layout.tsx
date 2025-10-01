import { Tabs } from "expo-router";
import { View, Text, Image, StyleSheet } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#0f0c1d",
          paddingTop: 15,
          borderTopWidth: 0.3,
          borderTopColor: "#7157da",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              label="Home"
              focused={focused}
              image={require("../../assets/home.png")}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="pay"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              label="Pay"
              focused={focused}
              image={require("../../assets/payments.png")}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="assets"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              label="Assets"
              focused={focused}
              image={require("../../assets/assets.png")}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              label="Profile"
              focused={focused}
              image={require("../../assets/profile-circle.png")}
            />
          ),
        }}
      />

      
    </Tabs>
  );
}

/** Reusable icon component */
const TabIcon = ({
  label,
  focused,
  image,
}: {
  label: string;
  focused: boolean;
  image: any;
}) => (
  <View
    style={[
      styles.iconContainer,
      focused ? styles.activeBackground : styles.inactiveBackground,
    ]}
  >
    <Image source={image} style={styles.icon} resizeMode="contain" />
    <Text style={[styles.label, focused ? styles.activeText : styles.inactiveText]}>
      {label}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    padding: 0,
    marginTop: 4,
  },
  activeBackground: {
   
  },
  inactiveBackground: {
   
  },
  icon: {
    width: 24,
    height: 24,
    marginBottom: 2,
  },
  label: {
    fontSize: 10,
    fontFamily: "Manrope",
    textAlign: "center",
    flexShrink: 0,
  },
  activeText: {
    color: "#ffffff",
  },
  inactiveText: {
    color: "#888888",
  },
});

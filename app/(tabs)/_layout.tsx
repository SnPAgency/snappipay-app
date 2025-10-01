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
              activeImage={require("../../assets/home1.png")}
              inactiveImage={require("../../assets/home.png")}
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
              activeImage={require("../../assets/payments1.png")}
              inactiveImage={require("../../assets/payments.png")}
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
              activeImage={require("../../assets/assets1.png")}
              inactiveImage={require("../../assets/assets.png")}
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
              activeImage={require("../../assets/profile-circle1.png")}
              inactiveImage={require("../../assets/profile-circle.png")}
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
  activeImage,
  inactiveImage,
}: {
  label: string;
  focused: boolean;
  activeImage: any;
  inactiveImage: any;
}) => (
  <View style={styles.iconContainer}>
    <Image
      source={focused ? activeImage : inactiveImage}
      style={styles.icon}
      resizeMode="contain"
    />
    <Text style={[styles.label, focused ? styles.activeText : styles.inactiveText]}>
      {label}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    marginTop: 4,
  },
  icon: {
    width: 26,
    height: 26,
    marginBottom: 2,
  },
  label: {
    fontSize: 10,
    fontFamily: "Manrope",
    textAlign: "center",
  },
  activeText: {
    color: "#ffffff",
  },
  inactiveText: {
    color: "#888888",
  },
});

import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import profile from "../assets/img/profile.png";
import AntDesign from "@expo/vector-icons/AntDesign";

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={profile} style={{ borderRadius: "50%" }} />
          <Text
            style={{
              fontSize: 24,
              color: "#ffffff",
              fontFamily: "SpaceGroteskRegular",
            }}
          >
            Hi, GODSWILL
          </Text>
        </View>
        <View style={{ flexDirection: "row", gap: 6, alignItems: "center" }}>
          <MaterialIcons name='notifications' size={24} color='white' />
          <AntDesign name='customerservice' size={24} color='white' />
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});

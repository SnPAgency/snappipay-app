import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import profile from "../assets/img/profile.png";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";

const Home = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#020617", padding: 20 }}>
      {/* Back Button */}
      <TouchableOpacity 
        onPress={() => router.back()}
        style={{
          position: 'absolute',
          top: 50,
          left: 20,
          zIndex: 999,
          padding: 15,
          backgroundColor: 'rgba(0,0,0,0.3)',
          borderRadius: 8,
        }}
      >
        <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'SpaceGroteskRegular', fontWeight: '500' }}>
          ← Back
        </Text>
      </TouchableOpacity>
      
      <View style={{ marginTop: 80, flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={profile} style={{ width: 50, height: 50, borderRadius: 25 }} />
          <Text
            style={{
              fontSize: 24,
              color: "#ffffff",
              fontFamily: "SpaceGroteskRegular",
              marginLeft: 15,
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
      
      <View style={{ marginTop: 40, alignItems: 'center' }}>
        <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'SpaceGroteskRegular' }}>
          Welcome to SnappiPay Dashboard!
        </Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});

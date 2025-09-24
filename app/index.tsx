import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import Logo from "../assets/img/logo.png";
import JetLogo from "../assets/img/jetlogo.png";
import ShieldLogo from "../assets/img/shieldlogo.png";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";

const WelcomePage = () => {
  return (
    <LinearGradient
 colors={[ "#C5E1A5", "#000", ]}
 start={{ x: 0, y: 0 }}
 end={{ x: 0, y: 1 }}
 style={styles.mainContainer}
>
      <View style={styles.topContentContainers}>
        <Image source={Logo} />
        <Text
          style={{
            fontSize: 36,
            color: "#ffffff",
            fontWeight: "500",
            fontFamily: "SpaceGroteskRegular",
          }}
        >
          SnappiPay
        </Text>

        <View style={{ gap: 10 }}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 18,
              color: "#ffffff",
              fontFamily: "SpaceGroteskRegular",
            }}
          >
            Pay vendors with crypto
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 14,
              color: "#fff",
              fontFamily: "SpaceGroteskRegular",
            }}
          >
            They receive local fiat instantly
          </Text>
        </View>
      </View>

      <View style={{ marginTop: 60, gap: 20 }}>
        <View
          style={{
            backgroundColor: '#000',
            borderColor: '#c5e1a5',
            borderWidth: 1,
            padding: 20,
            gap: 20,
            borderRadius: 12,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Image source={JetLogo} />
            <Text
              style={{ color: "#FFFFFF", fontFamily: "SpaceGroteskRegular" }}
            >
              Instant Conversion
            </Text>
          </View>
          <Text
            style={{
              color: "#FFFFFFB2",
              fontSize: 14,
              fontFamily: "SpaceGroteskRegular",
            }}
          >
            Convert crypto to local currency in real-{"\n"}time
          </Text>
        </View>

        <View
          style={{
           backgroundColor: '#000',
          borderColor: '#c5e1a5',
          borderWidth: 1, padding: 20,
            gap: 20,
            borderRadius: 12,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Image source={ShieldLogo} />
            <Text
              style={{ color: "#FFFFFF", fontFamily: "SpaceGroteskRegular" }}
            >
              Secure & Fast
            </Text>
          </View>
          <Text
            style={{
              color: "#FFFFFFB2",
              fontSize: 14,
              fontFamily: "SpaceGroteskRegular",
            }}
          >
            Military-grade security with lightning-{"\n"}speed
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 30 }}>
      
          <Link href={"/login"} asChild>
            <TouchableOpacity
              style={{
                padding: 20,
                borderRadius: 16,
                width: "100%",
                backgroundColor: "#c5e1a5",
               
              }}
            >
              <Text style={{ color: "#000", textAlign: "center", fontSize: 18, fontFamily: "sans-serif" }}>
                Get Started
              </Text>
            </TouchableOpacity>
          </Link>
     
      </View>
    </LinearGradient>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  topContentContainers: {
    gap: 20,
    alignItems: "center",
  },
});

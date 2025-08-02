import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import Logo from "../assets/img/logo.png";
import JetLogo from "../assets/img/jetlogo.png";
import ShieldLogo from "../assets/img/shieldlogo.png";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";

const WelcomePage = () => {
  return (
    <View style={styles.mainContainer}>
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
              color: "#9CA3AF",
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
            borderColor: "rgba(59, 130, 246, 0.3)",
            borderWidth: 1,
            backgroundColor:
              "linear-gradient(90deg, rgba(59, 130, 246, 0.2) 0%, rgba(147, 51, 234, 0.2) 100%)",
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
            borderColor: "rgba(59, 130, 246, 0.3)",
            borderWidth: 1,
            backgroundColor:
              "linear-gradient(90deg, rgba(59, 130, 246, 0.2) 0%, rgba(147, 51, 234, 0.2) 100%)",
            padding: 20,
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
      <View style={{ marginTop: 40 }}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["#00D4FF", "#8B5CF6"]}
          style={{ borderRadius: 16 }}
        >
          <Link href={"/login"} asChild>
            <TouchableOpacity
              onPress={() => console.log("Tapped")}
              style={{
                padding: 20,
                borderRadius: 16,
                width: "100%",
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: 18,
                  fontFamily: "SpaceGroteskRegular",
                }}
              >
                Get Started
              </Text>
            </TouchableOpacity>
          </Link>
        </LinearGradient>
      </View>
    </View>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#111827",
    paddingHorizontal: 20,
  },
  topContentContainers: {
    gap: 20,
    alignItems: "center",
  },
});

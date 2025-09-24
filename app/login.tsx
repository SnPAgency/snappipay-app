import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Logo from "../assets/img/logo.png";
import { LinearGradient } from "expo-linear-gradient";
import { Link, router } from "expo-router";
import arrowicon from "../assets/img/rightarrow.png";
import walletconnecticon from "../assets/img/walletconnect.png";
import orimg from "../assets/img/orimg.png";
import googleicon from "../assets/img/google.png";
import greenshieldicon from "../assets/img/greenshield.png";
import instant from "../assets/img/instant.png";
import secure from "../assets/img/secure.png";
import lowfees from "../assets/img/lowfees.png";
import WebView, { WebViewMessageEvent } from "react-native-webview";
import * as WebBrowser from "expo-web-browser";
import * as Linking from "expo-linking";
const Login = () => {
  const [result, setResult] =
    useState<WebBrowser.WebBrowserAuthSessionResult | null>(null);
  const webviewRef = useRef<WebView>(null);

  const redirectUri = Linking.createURL("login");
  console.log(redirectUri);

  const _handlePressButtonAsync = async () => {
    // let result = await WebBrowser.openBrowserAsync("http://localhost:5173");
    const result = await WebBrowser.openAuthSessionAsync(
      "http://localhost:5173",
      redirectUri
    );
    console.log(result);
    setResult(result);
    if (result.type == "success") {
      router.push("/home");
    }
  };
  return (
    <View style={styles.container}>
      <View style={{ gap: 10, alignItems: "center" }}>
        <Image style={{ width: 100, height: 100 }} source={Logo} />
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

        <Text
          style={{
            textAlign: "center",
            fontSize: 14,
            color: "#9CA3AF",
            fontFamily: "SpaceGroteskRegular",
          }}
        >
          Seamless crypto off-ramping
        </Text>
      </View>
      <View style={{ alignItems: "center", gap: 10, marginTop: 40 }}>
        <Text
          style={{
            fontSize: 24,
            color: "#ffffff",
            fontWeight: "500",
            fontFamily: "SpaceGroteskRegular",
          }}
        >
          Welcome
        </Text>
        <Text
          style={{
            color: "#9CA3AF",
            fontSize: 14,
            fontFamily: "SpaceGroteskRegular",
            textAlign: "center",
          }}
        >
          Connect your wallet or sign in with Google to {"\n"} continue
        </Text>
      </View>
      <View style={{ gap: 14, marginTop: 40 }}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["#3B82F633", "#9333EA33"]}
          style={{ borderRadius: 16, borderWidth: 1, borderColor: "#3B82F64D" }}
        >
          <Link href={"/home"} asChild>
            <TouchableOpacity
              // onPress={_handlePressButtonAsync}
              style={{
                padding: 20,
                borderRadius: 16,
                width: "100%",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <Image
                    style={{ width: 32, height: 32 }}
                    source={walletconnecticon}
                  />
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontSize: 18,
                      fontFamily: "SpaceGroteskRegular",
                    }}
                  >
                    Connect with WalletConnect
                  </Text>
                </View>
                <Image source={arrowicon} />
              </View>
            </TouchableOpacity>
          </Link>
        </LinearGradient>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Image source={orimg} />
        </View>

        <Link href={"/login"} asChild>
          <TouchableOpacity
            onPress={() => console.log("Tapped")}
            style={{
              padding: 20,
              borderRadius: 16,
              width: "100%",
              backgroundColor: "#1F2937",
              borderWidth: 1,
              borderColor: "#4B5563",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <Image style={{ width: 32, height: 32 }} source={googleicon} />
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: 18,
                    fontFamily: "SpaceGroteskRegular",
                  }}
                >
                  Continue with Google
                </Text>
              </View>
              <Image source={arrowicon} />
            </View>
          </TouchableOpacity>
        </Link>
      </View>

      <View
        style={{
          borderColor: "#10B98133",
          borderWidth: 1,
          backgroundColor: "#10B9811A",
          padding: 20,
          gap: 20,
          borderRadius: 12,
          flexDirection: "row",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <Image source={greenshieldicon} />
        <View style={{ gap: 4 }}>
          <Text
            style={{
              color: "#10B981",
              fontFamily: "SpaceGroteskRegular",
              fontWeight: "500",
            }}
          >
            Bank-Grade Security
          </Text>
          <Text
            style={{
              color: "#9CA3AF",
              fontSize: 14,
              fontFamily: "SpaceGroteskRegular",
            }}
          >
            Your funds and data are protected with {"\n"}enterprise-level
            encryption
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 30,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Image style={{ width: 50, height: 50 }} source={instant} />
          <Text
            style={{
              color: "#9CA3AF",
              fontSize: 12,
              fontFamily: "SpaceGroteskRegular",
            }}
          >
            Instant
          </Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <Image style={{ width: 50, height: 50 }} source={secure} />
          <Text
            style={{
              color: "#9CA3AF",
              fontSize: 12,
              fontFamily: "SpaceGroteskRegular",
            }}
          >
            Secure
          </Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <Image style={{ width: 50, height: 50 }} source={lowfees} />
          <Text
            style={{
              color: "#9CA3AF",
              fontSize: 12,
              fontFamily: "SpaceGroteskRegular",
            }}
          >
            Instant
          </Text>
        </View>
      </View>

      <View style={{ marginTop: 40 }}>
        <Text
          style={{
            color: "#9CA3AF",
            fontSize: 12,
            fontFamily: "SpaceGroteskRegular",
            textAlign: "center",
          }}
        >
          By continuing, you agree to our Terms of Service and {"\n"} Privacy
          Policy
        </Text>
        <View></View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#111827",
    paddingHorizontal: 20,
  },
});

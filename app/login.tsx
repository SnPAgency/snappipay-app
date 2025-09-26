import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from "react-native";
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

  // const _handlePressButtonAsync = async () => {
  //   let result = await WebBrowser.openBrowserAsync("http://localhost:5173");
  //   const result = await WebBrowser.openAuthSessionAsync(
  //     "http://localhost:5173",
  //     redirectUri
  //   );
  //   console.log(result);
  //   setResult(result);
  //   if (result.type == "success") {
  //     router.push("/home");
  //   }
  // };


  return (
    <ImageBackground
    source={require('../assets/bg2.png')}
    style={styles.container}
    resizeMode="cover"
    imageStyle={styles.image}
    >

    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#896ef7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    opacity: 1,
  },
});

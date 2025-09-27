import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, Dimensions } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Logo from "../assets/img/logo.png";
import { LinearGradient } from "expo-linear-gradient";
import { Link, router } from "expo-router";

import WebView, { WebViewMessageEvent } from "react-native-webview";
import * as WebBrowser from "expo-web-browser";
import * as Linking from "expo-linking";

const { width, height } = Dimensions.get('window');

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

  <View  style={styles.page}>
            {/* Image in the center */}
            <View style={styles.imageContainer}>
              {/* <Image
                source={require('../assets/illus1.png')}
                style={styles.pageImage}
                resizeMode="contain"
              /> */}
            </View>
            
            {/* Text content below image, above button */}
            <View style={styles.textContainer}>
              <Text style={styles.title}>Welcome</Text>
              <Text style={styles.description}>Connect your wallet or Sign In with your Google account to continue</Text>

              <Link href={'#'} style={{ marginBottom: 30 }} >
              <TouchableOpacity style={styles.Button1}>
                  <Image
                    style={styles.googleIcon}
                    source={require('../assets/Google.png')}
                  />
                  <Text style={styles.Button1Text}>Continue with Google</Text>
                </TouchableOpacity>
              </Link>

              <Link href={'#'} style={{ marginBottom: 30 }} >
              <TouchableOpacity style={styles.Button2}>
                  <Image
                    style={styles.walletIcon}
                    source={require('../assets/walletConnect.png')}
                  />
                  <Text style={styles.Button2Text}>Connect with Wallet Connect</Text>
                </TouchableOpacity>
              </Link>

              <Link href={'/register'}>
              <Text style={styles.description}>By continuing, you agree with our terms of service and Privacy Policy</Text>
              </Link>


           

            </View>
          </View>

    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    opacity: 1,
  },
  page: {
    width: width,
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-between', // Distribute space evenly
  },
  imageContainer: {
   
  },
  pageImage: {
    width: width * 0.7, // 70% of screen width
    height: height * 0.7, // 35% of screen height
    maxWidth: 500,
    maxHeight: 500,
 
  },
  textContainer: {
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingBottom: 20, // Space above indicators
    paddingHorizontal: 10,
    marginBottom: 100
 
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#f9fafb',
    textAlign: 'left',
    marginBottom: 16,
    fontFamily: 'Manrope',
  },

  description: {
    fontSize: 14,
    fontWeight: '400',
    color: '#f9fafb',
    textAlign: 'left',
    lineHeight: 24,
    marginBottom: 40,
    fontFamily: 'Manrope',
  },

  Button1: {
    flexDirection: 'row',       // ← arrange icon & text side by side
    alignItems: 'center',       // ← vertically center them
    backgroundColor: '#0d0d0d',
    paddingVertical: 18,
    paddingHorizontal: 10,
    borderRadius: 8,
    justifyContent: 'flex-start', 
    borderWidth: 1,
    borderColor: '#6366f1',
    shadowColor: '#0d0d0d',
    width: '100%',

  },
  
  Button1Text: {
    fontSize: 14,
    fontWeight: '400',
    color: '#fff',
    fontFamily: 'Manrope',
    marginLeft: 8,              // ← space between icon and text
  },
  
  googleIcon: {
    width: 20,
    height: 20,
  },

  walletIcon: {
    width: 20,
    height: 20,
  },

  Button2: {
    flexDirection: 'row',       // ← arrange icon & text side by side
    alignItems: 'center',       // ← vertically center them
    backgroundColor: '#0d0d0d',
    paddingVertical: 18,
    paddingHorizontal: 10,
    borderRadius: 8,
    justifyContent: 'flex-start', 
    borderWidth: 1,
    borderColor: '#1f2937',
    shadowColor: '#0d0d0d',
    width: '100%',

  },
  
  Button2Text: {
    fontSize: 14,
    fontWeight: '400',
    color: '#fff',
    fontFamily: 'Manrope',
    marginLeft: 8,              // ← space between icon and text
  },


});

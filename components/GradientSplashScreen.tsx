import React, { useEffect } from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as SplashScreen from 'expo-splash-screen';

const { width, height } = Dimensions.get('window');

// Keep the splash screen visible while we prepare the app
SplashScreen.preventAutoHideAsync();

interface GradientSplashScreenProps {
  duration?: number;
}

export default function GradientSplashScreen({ duration = 3000 }: GradientSplashScreenProps) {
  useEffect(() => {
    // Just handle the native splash screen hiding
    const timer: NodeJS.Timeout = setTimeout(() => {
      SplashScreen.hideAsync();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <LinearGradient
    colors={[
      '#000000',    // pure black
      '#000000',    // stay black for most of the view
      '#1b0e2f',    // deep almost-black purple
      '#4b2c91'     // rich purple at the bottom
    ]}
    locations={[0, 0.7, 0.9, 1]}   // black holds until ~70%, fade after
    start={{ x: 0, y: 0 }}
    end={{ x: 0, y: 1 }}
    style={styles.container}
  >
    <View style={styles.logoContainer}>
      <Image
        source={require('../assets/Logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: width * 0.50, // Reduced to make room for text
    height: width * 0.50,
    maxWidth: 150,
    maxHeight: 150,
 
  },
});
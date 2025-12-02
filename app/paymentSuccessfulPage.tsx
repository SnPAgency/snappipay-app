import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from "react-native";
import { Link } from "expo-router";
import { useLocalSearchParams } from 'expo-router';
import React, { useRef } from 'react';
import LottieView from 'lottie-react-native';

const { width, height } = Dimensions.get('window');

const PaymentSuccessful: React.FC = () => {
  const { feedback, output } = useLocalSearchParams<{
    feedback?: string;
    output?: string;
  }>();
  const animationRef = useRef<LottieView>(null);

  // Remove useEffect since autoPlay={true} handles the animation automatically

  return(
    <View style={styles.container}>
      <View
        style={{
          paddingTop: 40,
          paddingHorizontal: 20,
          marginBottom: 20
        }}
      >
        <Link href="/home" asChild>
          <TouchableOpacity>
            <Image source={require('../assets/back-arrow.png')} style={{height: 30, width: 30}}/>
          </TouchableOpacity>
        </Link>
      </View>

      <View style={styles.middleSection}>
        {/* Lottie Animation replacing the static image */}
        <LottieView
          ref={animationRef}
          source={require('../assets/success-animation.json')}
          style={styles.successAnimation}
          autoPlay={true}
          loop={false}
        />
        <Text style={styles.text1}>{feedback}</Text>
        <Text style={styles.text2}>{output}</Text>
      </View>

      <View style={styles.bottomSection}>
        <Link 
          href={{
            pathname: '/home',
            params: {
              feedback: 'Payment Failed!',
              output: 'Purchase of 0.0003 BTC failed.'
            }
          }}
          style={styles.continueButton}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </Link>
      </View>
    </View>
  )
}

export default PaymentSuccessful;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#020202",
    flex: 1,
    padding: 20,
  },
  middleSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  successAnimation: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  bottomSection: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    marginBottom: 20,
  },
  text1: {
    color: "#fff",
    fontSize: 20,
    lineHeight: 32,
    fontFamily: "Manrope",
    fontWeight: "600",
    marginBottom: 10,
    textAlign: 'center',
  },
  text2: {
    color: "#D1D5DB",
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "400",
    fontFamily: "Manrope",
    marginBottom: 10,
    textAlign: 'center',
  },
  continueButton: {
    backgroundColor: '#755ae2',
    paddingVertical: 18,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    textAlign: "center"
  },
  continueButtonText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#fff',
    fontFamily: 'Manrope',
  },
});
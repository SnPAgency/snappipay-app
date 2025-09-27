

import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Dimensions, ImageBackground, Animated } from 'react-native';
import Svg, { Path, G } from 'react-native-svg';

interface GradientSplashScreenProps {

}

const { width } = Dimensions.get('window');

const AnimatedSnappayLogo = () => {
  const iconSlideAnim = useRef(new Animated.Value(-200)).current; 
  const iconFadeAnim = useRef(new Animated.Value(0)).current;
  const textSlideAnim = useRef(new Animated.Value(200)).current; 
  const textFadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
   
    Animated.parallel([
    
      Animated.parallel([
        Animated.spring(iconSlideAnim, {
          toValue: 0,
          tension: 40,   
          friction: 8,
          useNativeDriver: true,
        }),
        Animated.timing(iconFadeAnim, {
          toValue: 1,
          duration: 1200, // Longer duration
          useNativeDriver: true,
        }),
      ]),
      
      // Text slides in from right - slower with more delay
      Animated.sequence([
        Animated.delay(600), // Longer delay so you see icon first
        Animated.parallel([
          Animated.spring(textSlideAnim, {
            toValue: 0,
            tension: 40,    // Lower tension = slower
            friction: 8,
            useNativeDriver: true,
          }),
          Animated.timing(textFadeAnim, {
            toValue: 1,
            duration: 1200, // Longer duration
            useNativeDriver: true,
          }),
        ]),
      ]),
    ]).start();

   
  }, []);

  return (
    <View style={styles.logoWrapper}>
      <View style={styles.logoRow}>
        {/* Icon Slides from left */}
        <Animated.View
          style={[
            styles.iconContainer,
            {
              transform: [{ translateX: iconSlideAnim }],
              opacity: iconFadeAnim,
            }
          ]}
        >
          <Svg
            width={40}
            height={40}
            viewBox="0 0 32 32"
            style={styles.iconSvg}
          >
            <G>
              <Path d="M16 1H21V6H16V1Z" fill="white"/>
              <Path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M16 11V6H8C3.85786 6 0.5 9.35786 0.5 13.5C0.5 17.6421 3.85786 21 8 21H16V26H11V31H16V26H24C28.1421 26 31.5 22.6421 31.5 18.5C31.5 14.3579 28.1421 11 24 11H16ZM16 16H8C6.61929 16 5.5 14.8807 5.5 13.5C5.5 12.1193 6.61929 11 8 11H16V16ZM16 16V21H24C25.3807 21 26.5 19.8807 26.5 18.5C26.5 17.1193 25.3807 16 24 16H16Z" 
                fill="white"
              />
            </G>
          </Svg>
        </Animated.View>

        {/* Text Slides from right */}
        <Animated.View
          style={[
            styles.textContainer,
            {
              transform: [{ translateX: textSlideAnim }],
              opacity: textFadeAnim,
            }
          ]}
        >
          <Svg
            width={width * 0.5}
            height={35}
            viewBox="40 0 160 32"
            style={styles.textSvg}
          >
            <G>
              <Path d="M42.3601 19.144C44.4081 20.616 47.0321 21.672 50.2001 21.672C53.1121 21.672 55.0321 20.808 55.0321 18.568C55.0321 13.544 40.4081 17.032 40.4081 8.03999C40.4081 3.30399 44.7921 1.15999 49.2721 1.15999C52.7921 1.15999 55.8641 2.34399 57.9441 4.07199L55.8641 7.01599C54.0401 5.70399 51.7041 4.93599 49.0481 4.93599C46.7441 4.93599 44.4721 5.73599 44.4721 7.97599C44.4721 12.776 59.0961 9.25599 59.0961 18.568C59.0961 23.112 55.4481 25.448 50.2321 25.448C46.2321 25.448 42.5201 24.072 40.1521 22.088L42.3601 19.144ZM71.0029 6.53599C75.0349 6.53599 77.8189 9.44799 77.8189 14.184V25H73.9469V14.888C73.9469 11.72 72.1869 10.056 69.5309 10.056C66.5549 10.056 64.3789 12.104 64.3789 14.952V25H60.5069V6.85599H64.3789V9.79999C65.7869 8.23199 67.9949 6.53599 71.0029 6.53599ZM92.0399 25C92.0399 24.232 92.0079 23.464 92.0079 22.696C90.6959 24.552 88.4239 25.288 86.0559 25.288C82.0879 25.288 79.1439 23.304 79.1439 19.624C79.1439 15.848 82.7599 13.672 86.7279 13.672C88.5199 13.672 90.0879 13.896 91.9119 14.408C91.9759 11.336 90.5039 9.86399 87.3359 9.86399C85.3519 9.86399 82.9519 10.408 81.2879 11.208L80.2959 8.29599C82.6959 7.14399 85.2559 6.50399 87.8479 6.50399C93.0959 6.50399 95.7839 9.09599 95.7839 14.664V25H92.0399ZM87.0479 22.408C89.5119 22.408 91.9119 21.128 91.9119 18.568V17.032C90.4719 16.552 89.0319 16.328 87.5599 16.328C85.1919 16.328 83.0799 17.32 83.0799 19.368C83.0799 21.448 84.9039 22.408 87.0479 22.408ZM108.418 6.50399C113.09 6.50399 116.61 10.216 116.61 15.944C116.61 21.672 113.09 25.352 108.418 25.352C105.314 25.352 103.362 24.296 102.178 22.728V31.688H98.3706V6.85599H102.178V9.12799C103.362 7.55999 105.314 6.50399 108.418 6.50399ZM107.298 21.8C110.658 21.8 112.706 19.208 112.706 15.912C112.706 12.68 110.658 10.056 107.298 10.056C103.938 10.056 102.114 12.68 102.114 15.912C102.114 19.208 103.938 21.8 107.298 21.8ZM128.303 6.50399C132.975 6.50399 136.495 10.216 136.495 15.944C136.495 21.672 132.975 25.352 128.303 25.352C125.199 25.352 123.247 24.296 122.063 22.728V31.688H118.255V6.85599H122.063V9.12799C123.247 7.55999 125.199 6.50399 128.303 6.50399ZM127.183 21.8C130.543 21.8 132.591 19.208 132.591 15.912C132.591 12.68 130.543 10.056 127.183 10.056C123.823 10.056 121.999 12.68 121.999 15.912C121.999 19.208 123.823 21.8 127.183 21.8ZM142.749 2.37599C142.749 3.59199 141.693 4.61599 140.413 4.61599C139.1 4.61599 138.044 3.59199 138.044 2.37599C138.044 1.15999 139.132 0.135986 140.413 0.135986C141.693 0.135986 142.749 1.12799 142.749 2.37599ZM138.46 25V6.85599H142.333V25H138.46ZM154.167 1.57599C159.959 1.57599 163.415 4.83999 163.415 9.51199C163.415 14.216 160.055 17.384 154.167 17.384H149.815V25H145.719V1.57599H154.167ZM154.103 13.8C157.655 13.8 159.287 12.008 159.287 9.51199C159.287 6.98399 157.655 5.12799 154.103 5.12799H149.815V13.8H154.103ZM175.809 25C175.809 24.232 175.777 23.464 175.777 22.696C174.465 24.552 172.193 25.288 169.825 25.288C165.856 25.288 162.912 23.304 162.912 19.624C162.912 15.848 166.529 13.672 170.497 13.672C172.288 13.672 173.857 13.896 175.681 14.408C175.745 11.336 174.273 9.86399 171.104 9.86399C169.121 9.86399 166.720 10.408 165.056 11.208L164.064 8.29599C166.464 7.14399 169.024 6.50399 171.616 6.50399C176.865 6.50399 179.552 9.09599 179.552 14.664V25H175.809ZM170.816 22.408C173.281 22.408 175.681 21.128 175.681 18.568V17.032C174.241 16.552 172.8 16.328 171.328 16.328C168.961 16.328 166.848 17.32 166.848 19.368C166.848 21.448 168.673 22.408 170.816 22.408ZM194.797 6.85599H199.053L190.893 26.344C189.197 30.408 187.213 32.008 183.661 32.008C181.933 32.008 180.685 31.656 179.149 30.952L180.365 27.816C181.229 28.2 182.093 28.552 183.309 28.552C185.325 28.552 186.349 27.528 187.469 24.84L187.501 24.744L179.533 6.85599H183.949L189.421 20.072L194.797 6.85599Z" fill="white"/>
            </G>
          </Svg>
        </Animated.View>
      </View>
    </View>
  );
};

export default function GradientSplashScreen({}: GradientSplashScreenProps) {
  return (
    <ImageBackground
      source={require('../assets/bg.png')}
      style={styles.container}
      resizeMode="cover"
      imageStyle={styles.image}
    >
      <View style={styles.logoContainer}>
        <AnimatedSnappayLogo />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    opacity: 1,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.9, // Full width container
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  iconContainer: {
    marginRight: 0, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconSvg: {
   
  },
  textSvg: {
 
  },
});
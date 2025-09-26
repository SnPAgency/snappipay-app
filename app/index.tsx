import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView, Image, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Logo from "../assets/Logo.png"
import { Link } from 'expo-router';

const { width, height } = Dimensions.get('window');

// Page Indicator 
const PageIndicator = ({ currentPage, totalPages }: { currentPage: number, totalPages: number }) => (
  <View style={styles.indicatorContainer}>
    {Array.from({ length: totalPages }, (_, index) => (
      <View
        key={index}
        style={[
          styles.dot,
          currentPage === index ? styles.activeDot : styles.inactiveDot
        ]}
      />
    ))}
  </View>
);

export default function OnboardingIndex() {
  const [currentPage, setCurrentPage] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

 
  const pages = [
    {
      title: "Make payments with crypto.",
      description: "Pay local vendors instantly in your local currency."
    },
    {
      title: "Fast and secure transaction.",
      description: "Every transaction can be completed in as little as 20 seconds."
    },
    {
      title: "Instant Conversion",
      description: "Convert your crypto to cash in your local currency."
    }
  ];

  const handleContinue = () => {
    if (currentPage < pages.length - 1) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      
     
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({
          x: nextPage * width,
          animated: true
        });
      }
    }
  };

  const handleGetStarted = () => {
   
    // console.log('Navigate to main app');
   
  };

  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const pageIndex = Math.round(scrollPosition / width);
    setCurrentPage(pageIndex);
  };

  return (
    <View style={styles.container}>
    
      <View style={styles.logoContainer}>
        <Image
          source={Logo} // Your PNG logo path
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Scrollable content */}
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        {pages.map((page, index) => (
          <View key={index} style={styles.page}>
            <View style={styles.contentContainer}>
              <Text style={styles.title}>{page.title}</Text>
              <Text style={styles.description}>{page.description}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Page Indicators */}
      <PageIndicator currentPage={currentPage} totalPages={pages.length} />

      {/* Button */}
      <View style={styles.buttonContainer}>
        {currentPage < pages.length - 1 ? (
          <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        ) : (
         
          <Link href={'/login'} style={styles.getStartedButton} onPress={handleGetStarted}>
            <Text style={styles.getStartedButtonText}>Get Started</Text>
          </Link>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020202',
  },
  logoContainer: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 20,
  },
  logo: {
    width: width * 0.5,
    height: 40, // Adjust based on your logo aspect ratio
    maxWidth: 250,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    // This ensures proper scrolling behavior
  },
  page: {
    width: width,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    marginTop: 270,
    
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: width * 0.85,
   
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 16,
    fontFamily: 'Inter', // Use your custom font if available
  },
  subtitle: {
    fontSize: 16,
    color: '#cccccc',
    textAlign: 'center',
    marginBottom: 24,
    fontWeight: '500',
    fontFamily: 'Inter',
  },
  description: {
    fontSize: 16,
    color: '#888888',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 40,
    fontFamily: 'InterRegular',
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 6,
  },
  activeDot: {
    backgroundColor: '#ffffff',
    width: 24, // Elongated active dot
  },
  inactiveDot: {
    backgroundColor: '#444444',
  },
  buttonContainer: {
    paddingHorizontal: 40,
    paddingBottom: 50,
  },
  continueButton: {
    backgroundColor: '#755ae2',
    paddingVertical: 18,
    paddingHorizontal: 32,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#ffffff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  getStartedButton: {
    backgroundColor: '#755ae2', // Blue accent color for final button
    paddingVertical: 18,
    paddingHorizontal: 32,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#007AFF',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  continueButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
    fontFamily: 'Manrope',
  },
  getStartedButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
    fontFamily: 'Manrope',
    textAlign: 'center'
  },
});
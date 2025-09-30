import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ImageBackground, Dimensions } from "react-native";
import React, { useEffect, useRef, useState } from "react";

import { Link, router } from "expo-router";
import { Picker } from '@react-native-picker/picker';
import CustomDropdown from "../components/selectCountry";


const { width, height } = Dimensions.get('window');


const Register = () => {
 
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');

  // Dropdown options
  const countryOptions = [
    { label: 'Nigeria', value: 'NG' },
    { label: 'United States', value: 'US' },
    { label: 'United Kingdom', value: 'UK' },
    { label: 'Canada', value: 'CA' },
    { label: 'Germany', value: 'DE' },
    { label: 'Japan', value: 'JP' },
  ];
  

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
              <Text style={styles.title}>Let’s personalize your account</Text>
            
              <View style={styles.field}>
                <Text style={styles.label}>Your Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your name"
                    value={name}
                    onChangeText={setName}
                    placeholderTextColor="#6b7280"
                />
                </View>

                <View style={styles.field}>
            <Text style={styles.label}>Favorite Language</Text>
            <CustomDropdown
              options={countryOptions}
              selectedValue={country}
              onSelect={setCountry}
              placeholder="Select Country"
              style={styles.dropdown}
            />
          </View>

       

              <Link href={'/(tabs)/home'}>
              <View style={styles.Button3}>
                <Text style={styles.Button3Text}>Continue</Text>
            </View>
              </Link>


           

            </View>
          </View>

    </ImageBackground>
  );
};

export default Register;

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
    marginBottom: 40,
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

 

Button3: {
    backgroundColor: '#755ae2',
    paddingVertical: 18,
    paddingHorizontal: 32,
    borderRadius: 8,
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
    width: '100%',
  },
  
Button3Text: {
    fontSize: 14,
    fontWeight: '400',
    color: '#fff',
    fontFamily: 'Manrope',
  },

  field: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
    color: '#f9fafb',
  },
  input: {
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 18,
    fontSize: 14,
    color: '#f9fafb',
    borderWidth: 1,
    borderColor: '#6366f1',
    shadowColor: '#0d0d0d',
    width: '100%',
    backgroundColor: '#0d0d0d'
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#6366f1',
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent background
    overflow: 'hidden',
  },
  picker: {
    color: '#f9fafb',
    paddingHorizontal: 10,
    paddingVertical: 18,
  },
  pickerItem: { // iOS only
    color: '#000',
    fontSize: 16,
  },
  dropdown: {
    width: '100%',
  },

  

});

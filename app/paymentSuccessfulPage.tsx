import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ImageBackground, Dimensions } from "react-native";
import React, { useEffect, useRef, useState } from "react";

import { Link, router } from "expo-router";
import { Picker } from '@react-native-picker/picker';
import SelectCountry from "../components/selectCountry";


const { width, height } = Dimensions.get('window');

const PaymentSuccessful = () => {

    return(
        <View style={styles.container}>
            <View
            style={{
                paddingTop: 80,
                paddingHorizontal: 20,
                marginBottom:20
            }}
            >
            <Link href="/home" asChild>
                <TouchableOpacity>
               
                <Image source={require('../assets/back-arrow.png')} style={{height:30, width:30}}/>
                </TouchableOpacity>
            </Link>
            </View>

            <View style={styles.middleSection}>
            <Image source={require('../assets/successful.png')} style={{height: 120, width: 120}}/>
            <Text style={styles.text1}>Payment Successful</Text>
            <Text style={styles.text2}>You just sent 5000 NGN to Jamal Musiala</Text>
            </View>

           
             
        
            
            <View style={styles.bottomSection}>
            <Link href={'/failedTransaction'} style={styles.continueButton}>
                <Text style={styles.continueButtonText}>Continue</Text>
             </Link>
            </View>
           
            
            
          

            
           
        </View>
    )
}

export default PaymentSuccessful;


const styles = StyleSheet.create({
container:{
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
  bottomSection: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },

text1:{
    color: "#fff",
    fontSize:20,
    lineHeight:32,
    fontFamily: "Manrope",
    fontWeight:600,
    marginBottom:10,
},

text2:{
 color: "#D1D5DB",
 fontSize: 14,
 lineHeight:24,
 fontWeight:400,
 fontFamily: "Manrope",
marginBottom: 10
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
  btnContainer:{

  }

})
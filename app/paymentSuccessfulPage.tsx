import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ImageBackground, Dimensions } from "react-native";

import { Link, router } from "expo-router";
import { useLocalSearchParams } from 'expo-router';


const { width, height } = Dimensions.get('window');

const PaymentSuccessful = () => {
    const { feedback, output } = useLocalSearchParams();
    return(
        <View style={styles.container}>
            <View
            style={{
                paddingTop: 40,
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
            <Text style={styles.text1}>{feedback}</Text>
            <Text style={styles.text2}>{output}</Text>
            </View>

           
             
        
            
            <View style={styles.bottomSection}>
            <Link  href={{
                  pathname: '/failedTransaction',
                  params: { 
                    feedback: 'Payment Failed!',
                    output: 'Purchase of 0.0003 BTC failed.'
                  }
                }} 
            
            style={styles.continueButton}>
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
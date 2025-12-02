import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ImageBackground, Dimensions } from "react-native";
import { useLocalSearchParams } from 'expo-router';

import { Link, router } from "expo-router";



const { width, height } = Dimensions.get('window');

const failedTransaction = () => {
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
            <Image source={require('../assets/failed.png')} style={{height: 80, width: 80, marginBottom: 10}}/>
            <Text style={styles.text1}>{feedback}</Text>
            <Text style={styles.text2}>{output}</Text>
            </View>

           
                 
            <View style={styles.bottomSection}>
            <View style={styles.bottomSection}>
            <View style={styles.buttonRow}>
                <Link href={'/home'} style={[styles.cancelButton, { flex: 4 }]}>
                <Text style={styles.continueButtonText}>Cancel</Text>
                </Link>

                <Link href={'/home'} style={[styles.retryButton, { flex: 6 }]}>
                <Text style={styles.continueButtonText}>Retry</Text>
                </Link>
            </View>
            </View>

            </View>  
        </View>
    )
}

export default failedTransaction;


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
    marginBottom:0,
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10, 
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

retryButton: {
    backgroundColor: '#755ae2',
    paddingVertical: 18,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    textAlign: "center"
  },

  cancelButton: {
    backgroundColor: '#020202',
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
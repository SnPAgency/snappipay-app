import React, { useCallback, useRef, useState } from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet
} from "react-native";

// Type fix for React 19 compatibility
const TouchableOpacityFixed = TouchableOpacity as any;
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import btclogo from "../../assets/img/btc.png";
import ethLogo from "../../assets/eth.png";
import usdtLogo from "../../assets/usdt.png";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import BankSelect from "../../components/selectBank";
import { Ionicons } from "@expo/vector-icons";





// Cryptocurrency options
const cryptoOptions = [
  { id: 'btc', name: 'Bitcoin', symbol: 'BTC', price: 100000, logo: btclogo },
  { id: 'eth', name: 'Ethereum', symbol: 'ETH', price: 4000, logo: ethLogo },
  { id: 'usdt', name: 'Tether', symbol: 'USDT', price: 1, logo: usdtLogo },
];



const Pay = () => {
  const [selectedCrypto, setSelectedCrypto] = useState(cryptoOptions[0]);
  const [showCryptoModal, setShowCryptoModal] = useState(false);
  const [bankName, setBankName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');

  const handleCryptoSelect = (crypto: any) => {
    setSelectedCrypto(crypto);
    setShowCryptoModal(false);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#020202" }}>
       {/* Header */}
       <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between", 
                paddingTop: 80,
                paddingHorizontal: 20,
                marginBottom:20
            }}
            >
            {/* Left: Back Arrow */}
            <Link href="/home" asChild>
                <TouchableOpacity>
               
                <Image source={require('../../assets/back-arrow.png')} style={{height:30, width:30}}/>
                </TouchableOpacity>
            </Link>

            {/* Center: Title */}
            <Text
                style={{
                  fontSize: 18,
                  lineHeight:32,
                  fontWeight: "600",
                  color: "#ffffff",
                  fontFamily: "Manrope",
                }}
            >
                Make Payment
            </Text>

           
            <View style={{ width: 24 }} />
            </View>
              <ScrollView
                style={{
                  flex: 1,
                  paddingHorizontal: 20,
                }}
                contentContainerStyle={{ paddingBottom: 20 }}
              >

        
            <BankSelect
              label="Select Bank"
              onSelect={(bank) => {
                console.log("Selected bank:", bank.name, bank.code);
              }}
            />


         {/* Account Number Input */}

        <View style={styles.container}>
          <Text style={styles.label}>Account Number</Text>
            <TextInput
              value={accountNumber}
              onChangeText={setAccountNumber}
              keyboardType="numeric"
              style={styles.textInput}
            />
          </View>

       
         {/* Cryptocurrency Selection */}
         <View style={styles.container}>
          <Text style={styles.label}>
            Select Asset
          </Text>
          <TouchableOpacityFixed
            onPress={() => setShowCryptoModal(true)}
            style={styles.textInput}
          >
            <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
              <Image source={selectedCrypto.logo} style={{ width: 30, height: 30 }} />
              <View style={{ gap: 6 }}>
                <Text
                  style={{
                    fontFamily: "Manrope",
                    fontSize: 14,
                    color: "#ffffff",
                  }}
                >
                  {selectedCrypto.name}
                </Text>
              </View>
            </View>
            <Entypo name='chevron-down' size={24} color='#9CA3AF' />
          </TouchableOpacityFixed>
        </View>


        {/* Payment Amount */}
        <View style={styles.container}>
          <View
          style={{flexDirection: "row", 
            justifyContent: "space-between", 
            alignItems: "center",}}>
               <Text
            style={styles.label}
          >
             Amount
          </Text>
          <Text
          style={styles.label}
          >Bal: 0.00</Text>
          </View>
         
          <View
          style={{
            backgroundColor: "#0d0d0d",
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 18,
            borderWidth: 1,
            borderColor: '#374151',
            width: "100%",
          }}
          >
            <View>
              <TextInput
                value={amount}
                onChangeText={setAmount}
                placeholderTextColor={"#ADAEBC"}
               style={{color: "#fff", fontFamily: "Manrope"}}
                placeholder='0.00'
                keyboardType="numeric"
              />
            
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Manrope",
                  color: "#9CA3AF",
                }}
              >
                {amount ? (parseFloat(amount || '0') / selectedCrypto.price).toFixed(6) : '0.000'} {selectedCrypto.symbol}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Manrope",
                  color: "#9CA3AF",
                }}
              >
                Fee: NGN10.0
              </Text>
            </View>

          </View>
        </View>

        

        {/* Transaction Summary */}
        <View
          style={{
            margin:10,
            paddingHorizontal: 10,
            paddingVertical: 18,
            backgroundColor: "#0d0d0d",
            borderRadius: 8,
            borderWidth: 1,
            borderColor: '#374151',
          }}
        >
          <Text
            style={{
              color: "#f9fafB",
              fontFamily: "Manrope",
              fontSize: 14,
              lineHeight:24,
              fontWeight: 400,
            }}
          >
            Transaction Summary
          </Text>
          <View style={{ marginTop: 16, gap: 10 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  color: "#f9fafB",
                  fontFamily: "Manrope",
                  fontSize: 14,
                  lineHeight:24,
                  fontWeight: 400,
                }}
              >
                Amount
              </Text>
              <Text
                style={{ color: "#FFFFFF", fontFamily: "Manrope" }}
              >
                ₦{amount || '0.00'}
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  color: "#f9fafB",
                  fontFamily: "Manrope",
                  fontSize: 14,
                  lineHeight:24,
                  fontWeight: 400,
                }}
              >
                Network Fee
              </Text>
              <Text
                style={{ color: "#FFFFFF", fontFamily: "Manrope" }}
              >
                ₦2.50
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  color: "#f9fafB",
                  fontFamily: "Manrope",
                  fontSize: 14,
                  lineHeight:24,
                  fontWeight: 400,
                }}
              >
                Processing Fee
              </Text>
              <Text
                style={{ color: "#FFFFFF", fontFamily: "Manrope" }}
              >
                ₦1.25
              </Text>
            </View>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#4B5563",
                paddingVertical: 6,
              }}
            />

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{  color: "#f9fafB",
                  fontFamily: "Manrope",
                  fontSize: 14,
                  lineHeight:24,
                  fontWeight: 400, }}
              >
                Total
              </Text>
              <Text
                style={{ color: "#FFFFFF", fontFamily: "Manrope" }}
              >
                ₦{amount ? (parseFloat(amount) + 3.75).toFixed(2) : '3.75'}
              </Text>
            </View>
          </View>
        </View>

        {/* Send Payment Button */}
        <View style={{ margin: 10, paddingBottom: 20 }}>
            <TouchableOpacityFixed
              onPress={() => console.log("Payment sent!", { bankName, accountNumber, amount, selectedCrypto })}
              style={{
                backgroundColor: '#755ae2',
                paddingVertical: 18,
                paddingHorizontal: 32,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
                shadowColor: '#ffffff',
               
              }}
            >
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontSize: 14,
                      fontFamily: "Manrope",
                      fontWeight:600,
                      lineHeight: 24,
                    }}
                  >
                    Send Payment
                  </Text>
            </TouchableOpacityFixed>
        </View>
      </ScrollView>



      {/* Cryptocurrency Selection Modal */}
     <Modal
        visible={showCryptoModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowCryptoModal(false)}
      >
        <View style={{
          flex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          justifyContent: 'flex-end',
        }}>
          <View style={{
            backgroundColor: "#0f0c1d",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            maxHeight: "85%",
            paddingBottom: 40,
          }}>
            {/* Modal Header */}
            <View style={{ 
              padding: 20, 
              borderBottomWidth: 1, 
              borderBottomColor: "#374151",
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <Text style={{
                color: "#ffffff",
                fontSize: 20,
                fontWeight: "600",
                fontFamily: "Manrope",
              }}>
                Select Asset
              </Text>
              <TouchableOpacityFixed onPress={() => setShowCryptoModal(false)}>
                <FontAwesome name='times' size={24} color='#9CA3AF' />
              </TouchableOpacityFixed>
            </View>

            {/* Results count */}
            <Text style={{
              color: "#9CA3AF",
              fontSize: 14,
              paddingHorizontal: 20,
              marginTop: 10,
              fontFamily: "Manrope",
            }}>
              {cryptoOptions.length} asset{cryptoOptions.length !== 1 ? 's' : ''} available
            </Text>

            {/* Assets List */}
            <FlatList
              data={cryptoOptions}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              style={{ marginTop: 10 }}
              renderItem={({ item, index }) => (
                <TouchableOpacityFixed
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingHorizontal: 20,
                    paddingVertical: 15,
                    borderBottomWidth: index === cryptoOptions.length - 1 ? 0 : 1,
                    borderBottomColor: "#374151",
                    backgroundColor: selectedCrypto.id === item.id ? "#374151" : "transparent",
                  }}
                  onPress={() => handleCryptoSelect(item)}
                >
                  <View style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    backgroundColor: "#374151",
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: 12,
                  }}>
                    <Image source={item.logo} style={{ width: 24, height: 24 }} />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={{
                      fontFamily: "Manrope",
                      fontSize: 16,
                      color: "#ffffff",
                    }}>
                      {item.name}
                    </Text>
                    <Text style={{
                      fontFamily: "Manrope",
                      fontSize: 12,
                      color: "#9CA3AF",
                      marginTop: 2,
                    }}>
                      {item.symbol} • ${item.price.toLocaleString()}
                    </Text>
                  </View>
                  {selectedCrypto.id === item.id && (
                    <FontAwesome name='check-circle' size={22} color='#755AE2' />
                  )}
                </TouchableOpacityFixed>
              )}
            />
          </View>
        </View>
      </Modal>

    </View>
  );
};

export default Pay;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  label: {
    fontSize: 14,
    color: "#f9fafb",
    marginBottom: 6,
  },
  textInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#0d0d0d",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 18,
    borderWidth: 1,
    borderColor: '#374151',
    color:"#fff",
    width: "100%",
  },

})
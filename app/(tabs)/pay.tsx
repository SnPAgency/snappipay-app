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
} from "react-native";

// Type fix for React 19 compatibility
const TouchableOpacityFixed = TouchableOpacity as any;
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import btclogo from "../../assets/img/btc.png";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";

// Cryptocurrency options
const cryptoOptions = [
  { id: 'btc', name: 'Bitcoin', symbol: 'BTC', price: 100000, logo: btclogo },
  { id: 'eth', name: 'Ethereum', symbol: 'ETH', price: 4000, logo: btclogo },
  { id: 'usdt', name: 'Tether', symbol: 'USDT', price: 1, logo: btclogo },
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
    <View style={{ flex: 1, backgroundColor: "#111827" }}>
      <ScrollView
        style={{
          flex: 1,
          paddingTop: 70,
          paddingHorizontal: 20,
        }}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* Header */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacityFixed>
            <AntDesign name='arrow-left' size={24} color='#9CA3AF' />
          </TouchableOpacityFixed>
          <Text
            style={{
              fontSize: 18,
              color: "#ffffff",
              fontFamily: "SpaceGroteskRegular",
            }}
          >
            Pay Vendor
          </Text>
          <TouchableOpacityFixed>
            <MaterialIcons name='more-vert' size={24} color='#9CA3AF' />
          </TouchableOpacityFixed>
        </View>

        {/* Cryptocurrency Selection */}
        <View style={{ marginTop: 40 }}>
          <Text
            style={{
              color: "#D1D5DB",
              fontFamily: "SpaceGroteskRegular",
              fontSize: 16,
            }}
          >
            Select Cryptocurrency
          </Text>
          <TouchableOpacityFixed
            onPress={() => setShowCryptoModal(true)}
            style={{
              borderWidth: 1,
              borderColor: "#374151",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 20,
              backgroundColor: "#2D2E36",
              borderRadius: 12,
              marginTop: 20,
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
            >
              <Image source={selectedCrypto.logo} style={{ width: 40, height: 40 }} />
              <View style={{ gap: 6 }}>
                <Text
                  style={{
                    fontFamily: "SpaceGroteskRegular",
                    fontSize: 16,
                    color: "#ffffff",
                  }}
                >
                  {selectedCrypto.name}
                </Text>
                <Text
                  style={{
                    fontFamily: "SpaceGroteskRegular",
                    fontSize: 16,
                    color: "#9CA3AF",
                  }}
                >
                  {selectedCrypto.symbol} * ${selectedCrypto.price.toLocaleString()}
                </Text>
              </View>
            </View>
            <Entypo name='chevron-down' size={24} color='#9CA3AF' />
          </TouchableOpacityFixed>
        </View>

        {/* Vendor Details */}
        <View style={{ marginTop: 35, marginBottom: 35 }}>
          <Text
            style={{
              fontFamily: "SpaceGroteskRegular",
              color: "white",
              fontSize: 18,
            }}
          >
            Vendor Details
          </Text>
        </View>

        {/* Bank Name Input */}
        <View>
          <Text
            style={{
              color: "#D1D5DB",
              fontFamily: "SpaceGroteskRegular",
              fontSize: 16,
            }}
          >
            Bank Name
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#374151",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 20,
              backgroundColor: "#2D2E36",
              borderRadius: 12,
              marginTop: 14,
            }}
          >
            <TextInput
              value={bankName}
              onChangeText={setBankName}
              placeholder="Enter bank name"
              placeholderTextColor="#9CA3AF"
              style={{
                fontFamily: "SpaceGroteskRegular",
                fontSize: 16,
                color: "#ffffff",
                flex: 1,
              }}
            />
            <FontAwesome name='bank' size={20} color='#9CA3AF' />
          </View>
        </View>

        {/* Account Number Input */}
        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              color: "#D1D5DB",
              fontFamily: "SpaceGroteskRegular",
              fontSize: 16,
            }}
          >
            Account Number
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#374151",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 20,
              backgroundColor: "#2D2E36",
              borderRadius: 12,
              marginTop: 14,
            }}
          >
            <TextInput
              value={accountNumber}
              onChangeText={setAccountNumber}
              placeholder="Enter account number"
              placeholderTextColor="#9CA3AF"
              keyboardType="numeric"
              style={{
                fontFamily: "SpaceGroteskRegular",
                fontSize: 16,
                color: "#ffffff",
                flex: 1,
              }}
            />
            <FontAwesome name='credit-card' size={24} color='#9CA3AF' />
          </View>
        </View>

        {/* Payment Amount */}
        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              color: "#D1D5DB",
              fontFamily: "SpaceGroteskRegular",
              fontSize: 16,
            }}
          >
            Payment Amount
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#374151",
              padding: 20,
              backgroundColor: "#2D2E36",
              borderRadius: 12,
              marginTop: 14,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TextInput
                value={amount}
                onChangeText={setAmount}
                placeholderTextColor={"#ADAEBC"}
                style={{
                  fontSize: 24,
                  fontFamily: "SpaceGroteskRegular",
                  color: "#ffffff",
                  flex: 1,
                }}
                placeholder='0.00'
                keyboardType="numeric"
              />
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "SpaceGroteskBold",
                  color: "#D1D5DB",
                }}
              >
                NGN
              </Text>
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
                  fontFamily: "SpaceGroteskRegular",
                  color: "#9CA3AF",
                }}
              >
                {amount ? (parseFloat(amount || '0') / selectedCrypto.price).toFixed(6) : '0.000'} {selectedCrypto.symbol}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "SpaceGroteskRegular",
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
            marginTop: 20,
            padding: 20,
            backgroundColor: "#2D2E36",
            borderRadius: 12,
          }}
        >
          <Text
            style={{
              color: "#D1D5DB",
              fontFamily: "SpaceGroteskRegular",
              fontSize: 16,
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
                  color: "#9CA3AF",
                  fontFamily: "SpaceGroteskRegular",
                }}
              >
                Amount
              </Text>
              <Text
                style={{ color: "#FFFFFF", fontFamily: "SpaceGroteskBold" }}
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
                  color: "#9CA3AF",
                  fontFamily: "SpaceGroteskRegular",
                }}
              >
                Network Fee
              </Text>
              <Text
                style={{ color: "#FFFFFF", fontFamily: "SpaceGroteskBold" }}
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
                  color: "#9CA3AF",
                  fontFamily: "SpaceGroteskRegular",
                }}
              >
                Processing Fee
              </Text>
              <Text
                style={{ color: "#FFFFFF", fontFamily: "SpaceGroteskBold" }}
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
                style={{ color: "#FFFFFF", fontFamily: "SpaceGroteskBold" }}
              >
                Total
              </Text>
              <Text
                style={{ color: "#FFFFFF", fontFamily: "SpaceGroteskBold" }}
              >
                ₦{amount ? (parseFloat(amount) + 3.75).toFixed(2) : '3.75'}
              </Text>
            </View>
          </View>
        </View>

        {/* Send Payment Button */}
        <View style={{ marginTop: 20, paddingBottom: 20 }}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#0066FF", "#7C3AED"]}
            style={{
              borderRadius: 16,
              borderWidth: 1,
              borderColor: "#3B82F64D",
            }}
          >
            <TouchableOpacityFixed
              onPress={() => console.log("Payment sent!", { bankName, accountNumber, amount, selectedCrypto })}
              style={{
                padding: 20,
                borderRadius: 16,
                width: "100%",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <FontAwesome name='send-o' size={24} color='white' />
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontSize: 18,
                      fontFamily: "SpaceGroteskBold",
                    }}
                  >
                    Send Payment
                  </Text>
                </View>
              </View>
            </TouchableOpacityFixed>
          </LinearGradient>
        </View>
      </ScrollView>

      {/* Cryptocurrency Selection Modal */}
      <Modal
        visible={showCryptoModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowCryptoModal(false)}
      >
        <TouchableOpacityFixed 
          style={{
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => setShowCryptoModal(false)}
        >
          <View style={{
            backgroundColor: "#1F2937",
            borderRadius: 12,
            borderWidth: 1,
            borderColor: "#374151",
            width: "90%",
            maxHeight: "60%",
          }}>
            <View style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: "#374151" }}>
              <Text style={{
                color: "#ffffff",
                fontSize: 18,
                fontFamily: "SpaceGroteskBold",
                textAlign: "center"
              }}>
                Select Cryptocurrency
              </Text>
            </View>
            <FlatList
              data={cryptoOptions}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacityFixed
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    padding: 20,
                    borderBottomWidth: 1,
                    borderBottomColor: "#374151",
                  }}
                  onPress={() => handleCryptoSelect(item)}
                >
                  <Image source={item.logo} style={{ width: 40, height: 40 }} />
                  <View style={{ marginLeft: 12, flex: 1 }}>
                    <Text style={{
                      fontFamily: "SpaceGroteskRegular",
                      fontSize: 16,
                      color: "#ffffff",
                    }}>
                      {item.name}
                    </Text>
                    <Text style={{
                      fontFamily: "SpaceGroteskRegular",
                      fontSize: 14,
                      color: "#9CA3AF",
                    }}>
                      {item.symbol} * ${item.price.toLocaleString()}
                    </Text>
                  </View>
                  {selectedCrypto.id === item.id && (
                    <FontAwesome name='check' size={20} color='#0066FF' />
                  )}
                </TouchableOpacityFixed>
              )}
            />
          </View>
        </TouchableOpacityFixed>
      </Modal>
    </View>
  );
};

export default Pay;
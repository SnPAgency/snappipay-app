import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
} from "react-native";
import { useAccount, useProvider } from "@reown/appkit-react-native";

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
import { Link, router } from "expo-router";
import BankSelect from "../../components/selectBank";
import { Ionicons } from "@expo/vector-icons";
import {
  approve,
  offRampDeposit,
  offRampNative,
} from "../../utils/transaction";
import {
  HEDERA_CONTRACT,
  HEDERA_USDT_CONTRACT,
  SUPPORTED_ASSETS,
} from "../../utils/constants";
import { ethers } from "ethers";
import { useAsset } from "../../hooks/useAsset";

// Cryptocurrency options
const cryptoOptions = SUPPORTED_ASSETS;

// [
//   { id: "btc", name: "Bitcoin", symbol: "BTC", price: 100000, logo: btclogo },
//   { id: "eth", name: "Ethereum", symbol: "ETH", price: 4000, logo: ethLogo },
//   { id: "usdt", name: "Tether", symbol: "USDT", price: 1, logo: usdtLogo },
// ];

const paymentOptions = [
  { id: "bank_transfer", name: "Bank Transfer" },
  { id: "mobile_money", name: "Mobile Money Service" },
];

export enum PaymentMethod {
  NONE = "none",
  BANK_TRANSFER = "Bank Transfer",
  MOBILE_MONEY = "Mobile Money Service",
}

const Pay = () => {
  const [selectedCrypto, setSelectedCrypto] = useState(cryptoOptions[0]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(
    paymentOptions[0]
  );
  const [showCryptoModal, setShowCryptoModal] = useState(false);
  const [showPaymentMethodModal, setShowPaymentMethodModal] = useState(false);
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(
    PaymentMethod.BANK_TRANSFER
  );
  const [balance, setBalance] = useState("0.00");
  const [fiatToAsset, setFiatToAsset] = useState(0);

  const { provider } = useProvider();
  const { address, isConnected, chainId } = useAccount();
  const { assets } = useAsset();
  const [approveSuccessful, setapproveSuccessful] = useState(false);
  const [transactionSuccessful, setTransactionSuccessful] = useState(false);

  useEffect(() => {
    if (assets.length > 0) {
      const asset = assets.find(
        (asset) => asset.symbol === selectedCrypto.symbol
      );
      if (asset) {
        console.log("asset", asset.fiatToAsset);
        setBalance(parseFloat(asset.balance).toFixed(2));
        setFiatToAsset(asset.fiatToAsset);
      }
    }
  }, [assets]);

  const handleCryptoSelect = (crypto: any) => {
    setSelectedCrypto(crypto);
    setShowCryptoModal(false);
  };

  const handleApprove = async () => {
    console.log("Approving USDT spend...");
    const hash = await approve(
      address as string,
      HEDERA_CONTRACT,
      ethers.toBigInt(1),
      provider as any,
      HEDERA_USDT_CONTRACT
    );

    if (hash) {
      setapproveSuccessful(true);
    }
  };

  const handlePay = async () => {
    if (!selectedCrypto.native) {
      const hash = await offRampDeposit(
        provider as any,
        HEDERA_CONTRACT,
        address as string,
        selectedCrypto.contractAddress,
        ethers.toBigInt(1),
        0,
        0,
        ""
      );

      if (hash) {
        router.push("/paymentSuccessfulPage");
        setTransactionSuccessful(true);
      }
    } else {
      const hash = await offRampNative(
        provider as any,
        HEDERA_CONTRACT,
        address as string,
        ethers.toBigInt("1000000000000000000"),
        0,
        0,
        "0x"
      );

      if (hash) {
        router.push("/paymentSuccessfulPage");
        setTransactionSuccessful(true);
      }
    }
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
          marginBottom: 20,
        }}
      >
        {/* Left: Back Arrow */}
        <Link href='/home' asChild>
          <TouchableOpacity>
            <Image
              source={require("../../assets/back-arrow.png")}
              style={{ height: 30, width: 30 }}
            />
          </TouchableOpacity>
        </Link>

        {/* Center: Title */}
        <Text
          style={{
            fontSize: 18,
            lineHeight: 32,
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
        <View style={styles.container}>
          <Text style={styles.label}>Select Payment Method</Text>
          <TouchableOpacityFixed
            onPress={() => setShowPaymentMethodModal(true)}
            style={styles.textInput}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
            >
              {/* <Image
                source={selectedCrypto.logo}
                style={{ width: 30, height: 30 }}
              /> */}
              <View style={{ gap: 6 }}>
                <Text
                  style={{
                    fontFamily: "Manrope",
                    fontSize: 14,
                    color: "#ffffff",
                  }}
                >
                  {paymentMethod}
                </Text>
              </View>
            </View>
            <Entypo name='chevron-down' size={24} color='#9CA3AF' />
          </TouchableOpacityFixed>
        </View>

        <BankSelect
          paymentMethod={paymentMethod}
          label={
            paymentMethod === PaymentMethod.BANK_TRANSFER
              ? "Select Bank"
              : "Select Mobile Money Provider"
          }
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
            keyboardType='numeric'
            style={styles.textInput}
          />
        </View>

        {/* Cryptocurrency Selection */}
        <View style={styles.container}>
          <Text style={styles.label}>Select Asset</Text>
          <TouchableOpacityFixed
            onPress={() => setShowCryptoModal(true)}
            style={styles.textInput}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
            >
              <Image
                source={selectedCrypto.logo}
                style={{ width: 30, height: 30 }}
              />
              <View style={{ gap: 6 }}>
                <Text
                  style={{
                    fontFamily: "Manrope",
                    fontSize: 14,
                    color: "#ffffff",
                  }}
                >
                  {selectedCrypto.symbol}
                </Text>
              </View>
            </View>
            <Entypo name='chevron-down' size={24} color='#9CA3AF' />
          </TouchableOpacityFixed>
        </View>

        {/* Payment Amount */}
        <View style={styles.container}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={styles.label}>Amount</Text>
            <Text style={styles.label}>Bal: {balance}</Text>
          </View>

          <View
            style={{
              backgroundColor: "#0d0d0d",
              borderRadius: 8,
              paddingHorizontal: 10,
              paddingVertical: 18,
              borderWidth: 1,
              borderColor: "#374151",
              width: "100%",
            }}
          >
            <View>
              <TextInput
                value={amount}
                onChangeText={setAmount}
                placeholderTextColor={"#ADAEBC"}
                style={{ color: "#fff", fontFamily: "Manrope" }}
                placeholder='0.00'
                keyboardType='numeric'
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
                {amount
                  ? (parseFloat(amount || "0") / fiatToAsset).toFixed(2)
                  : "0.000"}{" "}
                {selectedCrypto.symbol}
              </Text>
              {/* <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Manrope",
                  color: "#9CA3AF",
                }}
              >
                Fee: {selectedCrypto.symbol}0.0
              </Text> */}
            </View>
          </View>
        </View>

        {/* Transaction Summary */}
        <View
          style={{
            margin: 10,
            paddingHorizontal: 10,
            paddingVertical: 18,
            backgroundColor: "#0d0d0d",
            borderRadius: 8,
            borderWidth: 1,
            borderColor: "#374151",
          }}
        >
          <Text
            style={{
              color: "#f9fafB",
              fontFamily: "Manrope",
              fontSize: 14,
              lineHeight: 24,
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
                  lineHeight: 24,
                  fontWeight: 400,
                }}
              >
                Amount
              </Text>
              <Text style={{ color: "#FFFFFF", fontFamily: "Manrope" }}>
                {amount
                  ? (parseFloat(amount || "0") / fiatToAsset).toFixed(2)
                  : "0.00"}{" "}
                {selectedCrypto.symbol}
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
                  lineHeight: 24,
                  fontWeight: 400,
                }}
              >
                Network Fee
              </Text>
              <Text style={{ color: "#FFFFFF", fontFamily: "Manrope" }}>
                0.00 {selectedCrypto.symbol}
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
                  lineHeight: 24,
                  fontWeight: 400,
                }}
              >
                Processing Fee
              </Text>
              <Text style={{ color: "#FFFFFF", fontFamily: "Manrope" }}>
                0.00 {selectedCrypto?.symbol}
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
                style={{
                  color: "#f9fafB",
                  fontFamily: "Manrope",
                  fontSize: 14,
                  lineHeight: 24,
                  fontWeight: 400,
                }}
              >
                Total
              </Text>
              <Text style={{ color: "#FFFFFF", fontFamily: "Manrope" }}>
                {amount
                  ? (parseFloat(amount || "0") / fiatToAsset).toFixed(2)
                  : "0.00"}{" "}
                {selectedCrypto.symbol}
              </Text>
            </View>
          </View>
        </View>

        {/* Send Payment Button */}
        <View style={{ margin: 10, paddingBottom: 20 }}>
          <TouchableOpacityFixed
            onPress={() => {
              if (selectedCrypto.native) {
                handlePay();
              } else if (selectedCrypto.native && !approveSuccessful) {
                handleApprove();
              } else if (selectedCrypto.native && !approveSuccessful) {
                handlePay();
              }
            }}
            style={{
              backgroundColor: "#755ae2",
              paddingVertical: 18,
              paddingHorizontal: 32,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              shadowColor: "#ffffff",
            }}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 14,
                fontFamily: "Manrope",
                fontWeight: 600,
                lineHeight: 24,
              }}
            >
              {selectedCrypto?.native
                ? "Send Payment"
                : !approveSuccessful
                ? `Approve ${selectedCrypto.symbol} Spend`
                : "Send Payment"}
            </Text>
          </TouchableOpacityFixed>
        </View>
      </ScrollView>

      {/* Payment Method Selection modal */}
      <Modal
        visible={showPaymentMethodModal}
        transparent={true}
        animationType='slide'
        onRequestClose={() => setShowPaymentMethodModal(false)}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            justifyContent: "flex-end",
          }}
        >
          <View
            style={{
              backgroundColor: "#0f0c1d",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              maxHeight: "85%",
              paddingBottom: 40,
            }}
          >
            {/* Modal Header */}
            <View
              style={{
                padding: 20,
                borderBottomWidth: 1,
                borderBottomColor: "#374151",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#ffffff",
                  fontSize: 20,
                  fontWeight: "600",
                  fontFamily: "Manrope",
                }}
              >
                Select Payment Method
              </Text>
              <TouchableOpacityFixed
                onPress={() => setShowPaymentMethodModal(false)}
              >
                <FontAwesome name='times' size={24} color='#9CA3AF' />
              </TouchableOpacityFixed>
            </View>

            {/* Assets List */}
            <FlatList
              data={paymentOptions}
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
                    borderBottomWidth:
                      index === paymentOptions.length - 1 ? 0 : 1,
                    borderBottomColor: "#374151",
                    backgroundColor:
                      selectedPaymentMethod.id === item.id
                        ? "#374151"
                        : "transparent",
                  }}
                  onPress={() => {
                    if (item.id === "bank_transfer") {
                      setPaymentMethod(PaymentMethod.BANK_TRANSFER);
                    } else if (item.id === "mobile_money") {
                      setPaymentMethod(PaymentMethod.MOBILE_MONEY);
                    } else {
                      setPaymentMethod(PaymentMethod.NONE);
                    }
                    setSelectedPaymentMethod(item);
                    setShowPaymentMethodModal(false);
                  }}
                >
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        fontFamily: "Manrope",
                        fontSize: 16,
                        color: "#ffffff",
                      }}
                    >
                      {item.name}
                    </Text>
                  </View>
                  {selectedPaymentMethod.id === item.id && (
                    <FontAwesome
                      name='check-circle'
                      size={22}
                      color='#755AE2'
                    />
                  )}
                </TouchableOpacityFixed>
              )}
            />
          </View>
        </View>
      </Modal>

      {/* Cryptocurrency Selection Modal */}
      <Modal
        visible={showCryptoModal}
        transparent={true}
        animationType='slide'
        onRequestClose={() => setShowCryptoModal(false)}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            justifyContent: "flex-end",
          }}
        >
          <View
            style={{
              backgroundColor: "#0f0c1d",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              maxHeight: "85%",
              paddingBottom: 40,
            }}
          >
            {/* Modal Header */}
            <View
              style={{
                padding: 20,
                borderBottomWidth: 1,
                borderBottomColor: "#374151",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#ffffff",
                  fontSize: 20,
                  fontWeight: "600",
                  fontFamily: "Manrope",
                }}
              >
                Select Asset
              </Text>
              <TouchableOpacityFixed onPress={() => setShowCryptoModal(false)}>
                <FontAwesome name='times' size={24} color='#9CA3AF' />
              </TouchableOpacityFixed>
            </View>

            {/* Results count */}
            <Text
              style={{
                color: "#9CA3AF",
                fontSize: 14,
                paddingHorizontal: 20,
                marginTop: 10,
                fontFamily: "Manrope",
              }}
            >
              {cryptoOptions.length} asset
              {cryptoOptions.length !== 1 ? "s" : ""} available
            </Text>

            {/* Assets List */}
            <FlatList
              data={cryptoOptions}
              keyExtractor={(item) => item.id.toString()}
              showsVerticalScrollIndicator={false}
              style={{ marginTop: 10 }}
              renderItem={({ item, index }) => (
                <TouchableOpacityFixed
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingHorizontal: 20,
                    paddingVertical: 15,
                    borderBottomWidth:
                      index === cryptoOptions.length - 1 ? 0 : 1,
                    borderBottomColor: "#374151",
                    backgroundColor:
                      selectedCrypto.id === item.id ? "#374151" : "transparent",
                  }}
                  onPress={() => handleCryptoSelect(item)}
                >
                  <View
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 20,
                      backgroundColor: "#374151",
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: 12,
                    }}
                  >
                    <Image
                      source={item.logo}
                      style={{ width: 24, height: 24 }}
                    />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        fontFamily: "Manrope",
                        fontSize: 16,
                        color: "#ffffff",
                      }}
                    >
                      {item.symbol}
                    </Text>
                    <Text
                      style={{
                        fontFamily: "Manrope",
                        fontSize: 12,
                        color: "#9CA3AF",
                        marginTop: 2,
                      }}
                    >
                      {item.symbol} • ${item.price.toLocaleString()}
                    </Text>
                  </View>
                  {selectedCrypto.id === item.id && (
                    <FontAwesome
                      name='check-circle'
                      size={22}
                      color='#755AE2'
                    />
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
    borderColor: "#374151",
    color: "#fff",
    width: "100%",
  },
});

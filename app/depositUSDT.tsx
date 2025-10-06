import React, { useState } from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import * as Clipboard from "expo-clipboard";
import { Link } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import DropDownPicker from "react-native-dropdown-picker";

interface DropdownItem {
  label: string;
  value: string;
}

const CopyUSDT: React.FC = () => {
  const [usdt] = useState<string>("0x12A34b56Cd78Ef90123abC45");
  const [open, setOpen] = useState<boolean>(false);
  const [network, setNetwork] = useState<string>("Hedera");
  const [items, setItems] = useState<DropdownItem[]>([
    { label: "Hedera", value: "Hedera" },
    { label: "Ethereum", value: "Ethereum" },
    { label: "Polygon", value: "Polygon" },
    { label: "BNB", value: "BNB" },
  ]);

  const handleCopy = async (): Promise<void> => {
    await Clipboard.setStringAsync(usdt);
    Alert.alert("Copied!", "Wallet address copied to clipboard.");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#020202" }}>
      {/* Header */}
      <View style={styles.header}>
        <Link href="/home" asChild>
          <TouchableOpacity>
            <Image
              source={require("../assets/back-arrow.png")}
              style={{ height: 30, width: 30 }}
            />
          </TouchableOpacity>
        </Link>

        <Text style={styles.headerTitle}>USDT Deposit</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Scrollable Body */}
      <ScrollView
        style={{ flex: 1, paddingHorizontal: 20 }}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* Network Section */}
        <View style={styles.wrapper}>
          <View style={styles.inlineNetworkRow}>
            <Text style={styles.label2}>Network:</Text>

            <View style={styles.dropdownWrapper}>
            <DropDownPicker<string>
                open={open}
                value={network}
                items={items}
                setOpen={setOpen}
                setValue={(callback) => {
                    const next = callback(network);
                    // next may be string | null depending on library types
                    if (typeof next === "string") {
                      setNetwork(next);
                    }
                }}
                setItems={setItems}
                style={styles.dropdownInline}
                dropDownContainerStyle={styles.dropdownList}
                textStyle={styles.networkText}
                placeholder="Select Network"
                listMode="SCROLLVIEW"
                showArrowIcon={true}
                ArrowDownIconComponent={() => (
                    <Entypo name="chevron-down" size={16} color="#9CA3AF" />
                )}
                ArrowUpIconComponent={() => (
                    <Entypo name="chevron-up" size={16} color="#9CA3AF" />
                )}
                arrowIconContainerStyle={{
                    position: "relative",
                    marginLeft: 5, 
                }}
                labelStyle={{
                    flex: 0,
                    marginRight: 0,
                    paddingLeft:0,

                }}
                containerStyle={{
                    width: 120, 
                }}
                listItemLabelStyle={{
                    paddingLeft:0
                }}
                dropDownDirection="AUTO"
                zIndex={1000}
                />
            </View>
          </View>

          {/* QR Code */}
          <Image
            source={require("../assets/qrcode.png")}
            style={styles.qrImage}
          />
        </View>

        {/* Wallet Address */}
        <View style={styles.container}>
          <Text style={styles.label}>Wallet Address</Text>

          <TouchableOpacity
            onPress={handleCopy}
            activeOpacity={0.8}
            style={styles.inputWrapper}
          >
            <TextInput
              value={usdt}
              editable={false}
              multiline
              numberOfLines={4}
              style={styles.textInput}
              placeholder="Wallet address will appear here..."
              placeholderTextColor="#6b7280"
            />

            <View style={styles.iconButton}>
              <Image
                source={require("../assets/copy.png")}
                style={{ height: 20, width: 20, tintColor: "#fff" }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Footer Buttons */}
      <View style={styles.bottomSection}>
        <View style={styles.buttonRow}>
          <Link href={"/notificationDemo"} style={[styles.cancelButton, { flex: 4 }]}>
            <Text style={styles.continueButtonText}>Go Back</Text>
          </Link>

          <TouchableOpacity
            onPress={handleCopy}
            style={[styles.retryButton, { flex: 6 }]}
          >
            <Text style={styles.continueButtonText}>Copy Address</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CopyUSDT;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 80,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    lineHeight: 32,
    fontWeight: "600",
    color: "#ffffff",
    fontFamily: "Manrope",
  },
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom:20,
    zIndex: 1000, // important for dropdown visibility
  },
  inlineNetworkRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    gap: 0,
    alignSelf:"center",
    zIndex: 1000,
    marginLeft:20
   
  },
  dropdownWrapper: {
    width: "auto",
    zIndex: 1000,
  },
  dropdownInline: {
    backgroundColor: "transparent",
    borderWidth: 0,
    minHeight: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal:0,
  },
  dropdownList: {
    backgroundColor: "#0d0d0d",
    // borderColor: "#7157da",
    // borderWidth: 1,
    borderRadius: 6,
    zIndex: 999,

  },
  label2: {
    color: "#9ca3af",
    fontSize: 14,
    fontFamily: "Manrope",
  },
  networkText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Manrope",
  },
  qrImage: {
    height: 200,
    width: 200,
  },
  container: {
    margin: 10,
  },
  label: {
    fontSize: 14,
    color: "#f9fafb",
    marginBottom: 6,
    fontFamily: "Manrope",
  },
  inputWrapper: {
    position: "relative",
    justifyContent: "center",
  },
  textInput: {
    backgroundColor: "#0d0d0d",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 18,
    borderWidth: 1,
    borderColor: "#374151",
    color: "#fff",
    width: "100%",
    height: 100,
    paddingRight: 40,
    textAlignVertical: "top",
  },
  iconButton: {
    position: "absolute",
    right: 10,
    top: "50%",
    transform: [{ translateY: -10 }],
    padding: 6,

  },
  bottomSection: {
    paddingHorizontal: 20,
    paddingBottom: 60,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  retryButton: {
    backgroundColor: "#755ae2",
    paddingVertical: 18,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  cancelButton: {
    backgroundColor: "#020202",
    // borderWidth: 1,
    // borderColor: "#755ae2",
    paddingVertical: 18,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    textAlign:"center"
  },
  continueButtonText: {
    fontSize: 14,
    fontWeight: "400",
    color: "#fff",
    fontFamily: "Manrope",
  },
});
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Clipboard from "expo-clipboard";
import Ionicons from "@expo/vector-icons/Ionicons";

const Support = () => {
  const email = "Snappipay@gmail.com";

  const handleCopyEmail = async () => {
    await Clipboard.setStringAsync(email);
    Alert.alert("Copied!", "Email address copied to clipboard.");
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <Link href="/(tabs)/profile" asChild>
          <TouchableOpacity>
            <Image
              source={require("../assets/back-arrow.png")}
              style={styles.backArrow}
            />
          </TouchableOpacity>
        </Link>
        <Text style={styles.headerTitle}>Support</Text>
        <View style={styles.placeholder} />
      </View>

      {/* Content */}
      <View style={styles.content}>
        <View style={styles.supportBox}>
          <Text style={styles.supportText}>For Support, contact us via email</Text>
          <View style={styles.emailContainer}>
            <Text style={styles.emailText}>{email}</Text>
            <TouchableOpacity onPress={handleCopyEmail} style={styles.copyButton}>
             <Image source={require("../assets/copy.png")} style={styles.copyIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Support;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020202",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  backArrow: {
    height: 30,
    width: 30,
  },
  headerTitle: {
    fontSize: 18,
    color: "#FFFFFF",
    fontFamily: "Manrope",
    fontWeight: "600",
  },
  placeholder: {
    width: 30,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  supportBox: {
    backgroundColor: "#0d0d0d",
    borderWidth: 1,
    borderColor: "#374151",
    borderRadius: 8,
    padding: 20,
    gap: 16,
  },
  supportText: {
    fontSize: 14,
    color: "#e5e7eb",
    fontFamily: "Manrope",
  },
  emailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  emailText: {
    fontSize: 16,
    color: "#F9fafb",
    fontFamily: "Manrope",
  },
  copyButton: {
    padding: 4,
  },
  copyIcon: {
    width: 24,
    height: 24,
  },
});


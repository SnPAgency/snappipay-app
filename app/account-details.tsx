import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const AccountDetails = () => {
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
        <Text style={styles.headerTitle}>Account Details</Text>
        <View style={styles.placeholder} />
      </View>

      {/* Content */}
      <View style={styles.content}>
        <View style={styles.detailsBox}>
          <View style={styles.detailItem}>
            <Text style={styles.label}>Full name</Text>
            <Text style={styles.value}>Benedict Phidel</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.label}>Country</Text>
            <Text style={styles.value}>Kenya</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AccountDetails;

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
  detailsBox: {
    backgroundColor: "#0d0d0d",
    borderRadius: 8,
    padding: 20,
    gap: 24,
    borderWidth: 1,
    borderColor: "#1F2937",
  },
  detailItem: {
    gap: 8,
  },
  label: {
    fontSize: 14,
    color: "#f9fafb",
    fontFamily: "Manrope",
  },
  value: {
    fontSize: 16,
    color: "#FFFFFF",
    fontFamily: "Manrope",
  },
});


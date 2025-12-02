import { StyleSheet, Text, View, Image, TouchableOpacity, Switch, Modal, Alert } from "react-native";
import React, { useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Entypo from "@expo/vector-icons/Entypo";

const Security = () => {
  const [biometricsEnabled, setBiometricsEnabled] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDeleteAccount = () => {
    // Handle account deletion logic here
    Alert.alert("Account Deleted", "Your account has been deleted.");
    setShowDeleteModal(false);
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
        <Text style={styles.headerTitle}>Security</Text>
        <View style={styles.placeholder} />
      </View>

      {/* Content */}
      <View style={styles.content}>
        {/* Biometrics Option */}
        <View style={styles.optionContainer}>
          <View style={styles.optionItem}>
            <View style={styles.optionLeft}>
              <View style={styles.optionIcon}>
               <Image source={require("../assets/finger-scan.png")} style={styles.fingerprintIcon} />
              </View>
              <Text style={styles.optionText}>Unlock with Biometrics</Text>
            </View>
            <View style={styles.switchContainer}>
              <Switch
                value={biometricsEnabled}
                onValueChange={setBiometricsEnabled}
                trackColor={{ false: "#374151", true: "#6366f1" }}
                thumbColor={biometricsEnabled ? "#FFFFFF" : "#9CA3AF"}
                style={styles.switch}
              />
            </View>
          </View>
        </View>

        {/* Delete Account Option */}
        <View style={styles.optionContainer}>
          <TouchableOpacity
            style={styles.optionItem}
            onPress={() => setShowDeleteModal(true)}
          >
            <View style={styles.optionLeft}>
              <View style={[styles.optionIcon, styles.deleteIcon]}>
               <Image source={require("../assets/trash.png")} style={styles.trashIcon} />
              </View>
              <Text style={[styles.optionText, styles.deleteText]}>Delete Account</Text>
            </View>
            <Entypo name="chevron-right" size={24} color="#9CA3AF" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Delete Account Modal */}
      <Modal
        visible={showDeleteModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowDeleteModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalIconContainer}>
            <Image source={require("../assets/trash.png")} style={styles.trashIcon} />
            </View>
            <Text style={styles.modalTitle}>Delete your account</Text>
            <Text style={styles.modalDescription}>
              Deleting your account will lead to complete loss of access to your assets and details on Snappipay. Transfer all your assets out before proceeding
            </Text>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={handleDeleteAccount}
            >
              <Text style={styles.deleteButtonText}>Delete My Account</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setShowDeleteModal(false)}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Security;

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
    gap: 20,
   
  },
  optionContainer: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#374151",
    overflow: "hidden",
     backgroundColor: "#0d0d0d"
  },
  optionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 13,
    paddingHorizontal: 16,
  },
  optionLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    flex: 1,
  },
  switchContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  switch: {
    transform: [{ scaleY: 0.90 }],
  },
  optionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteIcon: {
    // backgroundColor: "#1F1F1F",
  },
  optionText: {
    fontSize: 16,
    color: "#FFFFFF",
    fontFamily: "Manrope",
  },
  deleteText: {
    color: "#fecaca",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "#181b25",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    paddingBottom: 40,
    alignItems: "center",
  },
  modalIconContainer: {
    marginBottom: 20,
   
  },
  modalTitle: {
    fontSize: 20,
    color: "#FFFFFF",
    fontFamily: "Manrope",
    fontWeight: "600",
    marginBottom: 16,
    textAlign: "center",
  },
  modalDescription: {
    fontSize: 14,
    color: "#9CA3AF",
    fontFamily: "Manrope",
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 32,
  },
  deleteButton: {
    width: "100%",
    backgroundColor: "#EF4444",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: 12,
  },
  deleteButtonText: {
    fontSize: 16,
    color: "#FFFFFF",
    fontFamily: "Manrope",
    fontWeight: "600",
  },
  cancelButton: {
    width: "100%",
    paddingVertical: 16,
    alignItems: "center",
  },
  cancelButtonText: {
    fontSize: 16,
    color: "#9CA3AF",
    fontFamily: "Manrope",
  },
  fingerprintIcon: {
    width: 24,
    height: 24,
  },
  trashIcon: {
    width: 24,
    height: 24,
  },
 
});


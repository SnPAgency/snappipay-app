import { Image, StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Link, router } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as Clipboard from "expo-clipboard";
import pic from "../../assets/img/profile.png";
import { SafeAreaView } from "react-native-safe-area-context";

const profile = () => {
  const uid = "0AA8983";

  const handleCopyUID = async () => {
    await Clipboard.setStringAsync(uid);
    Alert.alert("Copied!", "UID copied to clipboard.");
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header with centered title */}
        <View style={styles.header}>
          <View style={styles.placeholder} />
        
          <View style={styles.placeholder} />
        </View>

        {/* User Information Section */}
        <View style={styles.userSection}>
          <Image source={pic} style={styles.avatar} />
          <Text style={styles.username}>Josh 21</Text>
          <View style={styles.uidContainer}>
            <Text style={styles.uidText}>UID: {uid}</Text>
            <TouchableOpacity
              onPress={handleCopyUID}
              style={styles.uidIcon}
            >
              <Image source={require("../../assets/copy.png")} style={styles.copyIcon} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Menu Options */}
        <View style={styles.menuContainer}>
          {/* First three options grouped together */}
          <View style={styles.menuGroup}>
            <Link href="/account-details" asChild>
              <TouchableOpacity style={styles.menuItem}>
                <View style={styles.menuItemLeft}>
                  <View style={styles.menuIcon}>
                   <Image source={require("../../assets/acct-1.png")} style={styles.menuIconImage}/>
                  </View>
                  <Text style={styles.menuText}>Account Details</Text>
                </View>
                <Entypo name="chevron-right" size={24} color="#9CA3AF" />
              </TouchableOpacity>
            </Link>

           

            <Link href="/security" asChild>
              <TouchableOpacity style={styles.menuItem}>
                <View style={styles.menuItemLeft}>
                  <View style={styles.menuIcon}>
                  <Image source={require("../../assets/acct-2.png")} style={styles.menuIconImage}/>
                  </View>
                  <Text style={styles.menuText}>Security</Text>
                </View>
                <Entypo name="chevron-right" size={24} color="#9CA3AF" />
              </TouchableOpacity>
            </Link>

          

            <Link href="/support" asChild>
              <TouchableOpacity style={styles.menuItem}>
                <View style={styles.menuItemLeft}>
                  <View style={styles.menuIcon}>
                  <Image source={require("../../assets/acct-3.png")} style={styles.menuIconImage}/>
                  </View>
                  <Text style={styles.menuText}>Support</Text>
                </View>
                <Entypo name="chevron-right" size={24} color="#9CA3AF" />
              </TouchableOpacity>
            </Link>
          </View>

          {/* Log Out option separate */}
          <View style={styles.logoutGroup}>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuItemLeft}>
                <View style={[styles.menuIcon]}>
                <Image source={require("../../assets/logout.png")} style={styles.menuIconImage}/>
                </View>
                <Text style={[styles.menuText, styles.logoutText]}>Log Out</Text>
              </View>
              <Entypo name="chevron-right" size={24} color="#9CA3AF" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020202",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 40,
  },
  placeholder: {
    width: 24,
  },
  headerTitle: {
    fontSize: 18,
    color: "#FFFFFF",
    fontFamily: "Manrope",
    fontWeight: "600",
  },
  userSection: {
    alignItems: "center",
    marginBottom: 40,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 16,
  },
  username: {
    fontSize: 24,
    color: "#FFFFFF",
    fontFamily: "Manrope",
    fontWeight: "600",
    marginBottom: 8,
  },
  uidContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  uidText: {
    fontSize: 14,
    color: "#9CA3AF",
    fontFamily: "Manrope",
  },
  uidIcon: {
    padding: 4,
  },
  copyIcon: {
    width: 16,
    height: 16,
  },
  menuContainer: {
    gap: 12,
  },
  menuGroup: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#374151",
    overflow: "hidden",
     backgroundColor: "#0d0d0d"
  },
  logoutGroup: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#374151",
    overflow: "hidden",
     backgroundColor: "#0d0d0d"
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  menuDivider: {
   
  },
  menuItemLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  menuIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    // backgroundColor: "#1F2937",
    justifyContent: "center",
    alignItems: "center",
  },
  
  menuText: {
    fontSize: 16,
    color: "#FFFFFF",
    fontFamily: "Manrope",
  },
  logoutText: {
    color: "#f3f4f6",
  },
  menuIconImage: {
    width: 27,
    height: 27,
  },
});

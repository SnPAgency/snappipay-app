import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Entypo from "@expo/vector-icons/Entypo";
import btclogo from "../assets/img/btc.png";

const Receive = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#111827",
        paddingTop: 70,
        paddingHorizontal: 20,
      }}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <AntDesign name='arrowleft' size={24} color='#9CA3AF' />
        </View>
        <Text
          style={{
            fontSize: 18,
            color: "#ffffff",
            fontFamily: "SpaceGroteskRegular",
          }}
        >
          Receive
        </Text>
        <View>
          <MaterialIcons name='more-vert' size={24} color='#9CA3AF' />
        </View>
      </View>

      <View style={{ marginTop: 40 }}>
        <Text
          style={{
            color: "#D1D5DB",
            fontFamily: "SpaceGroteskRegular",
            fontSize: 16,
          }}
        >
          Select Asset
        </Text>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#00FFFF",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 14,
            backgroundColor: "#1A1A2E",
            borderRadius: 12,
            marginTop: 20,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
            <View style={{ gap: 6 }}>
              <Text
                style={{
                  fontFamily: "SpaceGroteskRegular",
                  fontSize: 16,
                  color: "#ffffff",
                }}
              >
                Nigerian Naira (NGN)
              </Text>
            </View>
          </View>

          <View>
            <Entypo name='chevron-down' size={24} color='#9CA3AF' />
          </View>
        </View>
      </View>

      <View style={{ marginTop: 40 }}>
        <View>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#6C5CE733", "#00D4FF33"]}
            style={{
              borderRadius: 16,
              borderWidth: 1,
              borderColor: "#FFFFFF1A",
              padding: 20,
              paddingVertical: 28,
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                gap: 4,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "SpaceGroteskRegular",
                  color: "#D1D5DB",
                }}
              >
                Current Balance
              </Text>
              <Text
                style={{
                  fontSize: 36,
                  fontFamily: "SpaceGroteskRegular",
                  color: "#00FFFF",
                }}
              >
                ₦125,430.50
              </Text>
              <Text
                style={{
                  color: "#9CA3AF",
                  fontSize: 14,
                  fontFamily: "SpaceGroteskRegular",
                }}
              >
                ~$250.00 USD
              </Text>
            </View>
          </LinearGradient>
        </View>
      </View>

      <View style={{ marginTop: 40 }}>
        <Text
          style={{
            fontFamily: "SpaceGroteskRegular",
            color: "#FFFFFF",
            fontSize: 18,
            marginBottom: 14,
          }}
        >
          Account Details
        </Text>
        <View>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#1A1B1FCC", "#1F2937CC"]}
            style={{
              borderRadius: 16,
              borderWidth: 1,
              borderColor: "#FFFFFF1A",
              padding: 20,
              paddingVertical: 28,
            }}
          >
            <View>
              <View style={{ gap: 14 }}>
                <View
                  style={{
                    padding: 14,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    backgroundColor: "#FFFFFF0D",
                    borderRadius: 12,
                  }}
                >
                  <View style={{ gap: 6 }}>
                    <Text
                      style={{
                        color: "#9CA3AF",
                        fontSize: 14,
                        fontFamily: "SpaceGroteskRegular",
                      }}
                    >
                      Account Number
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <Text
                        style={{
                          color: "#ffffff",
                          fontFamily: "SpaceGroteskRegular",
                          fontSize: 18,
                        }}
                      >
                        0123456789
                      </Text>
                      <View>
                        <FontAwesome5 name='copy' size={20} color='#00FFFF' />
                      </View>
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    padding: 14,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    backgroundColor: "#FFFFFF0D",
                    borderRadius: 12,
                  }}
                >
                  <View style={{ gap: 6 }}>
                    <Text
                      style={{
                        color: "#9CA3AF",
                        fontSize: 14,
                        fontFamily: "SpaceGroteskRegular",
                      }}
                    >
                      Bank Name
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <Text
                        style={{
                          color: "#ffffff",
                          fontFamily: "SpaceGroteskRegular",
                          fontSize: 18,
                        }}
                      >
                        Providus Bank
                      </Text>
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    padding: 14,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    backgroundColor: "#FFFFFF0D",
                    borderRadius: 12,
                  }}
                >
                  <View style={{ gap: 6 }}>
                    <Text
                      style={{
                        color: "#9CA3AF",
                        fontSize: 14,
                        fontFamily: "SpaceGroteskRegular",
                      }}
                    >
                      Account Name
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <Text
                        style={{
                          color: "#ffffff",
                          fontFamily: "SpaceGroteskRegular",
                          fontSize: 18,
                        }}
                      >
                        Snappipay - John Doe
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </LinearGradient>
        </View>
      </View>

      <View style={{ marginTop: 40 }}>
        <Text
          style={{
            fontFamily: "SpaceGroteskRegular",
            color: "#FFFFFF",
            fontSize: 18,
            marginBottom: 14,
          }}
        >
          Recent Deposits
        </Text>
        <View>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#1A1B1FCC", "#1F2937CC"]}
            style={{
              borderRadius: 16,
              borderWidth: 1,
              borderColor: "#FFFFFF1A",
              padding: 20,
              paddingVertical: 28,
            }}
          >
            <View>
              <View style={{ gap: 14 }}>
                <View
                  style={{
                    padding: 14,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    backgroundColor: "#FFFFFF0D",
                    borderRadius: 12,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      width: "100%",
                    }}
                  >
                    <View style={{ gap: 4 }}>
                      <Text
                        style={{
                          color: "#ffffff",
                          fontFamily: "SpaceGroteskRegular",
                          fontSize: 18,
                        }}
                      >
                        ₦25,000.00
                      </Text>
                      <Text
                        style={{
                          color: "#9CA3AF",
                          fontSize: 14,
                          fontFamily: "SpaceGroteskRegular",
                        }}
                      >
                        NGN • Bank Transfer
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          width: "100%",
                        }}
                      >
                        <Text
                          style={{
                            color: "#6B7280",
                            fontSize: 14,
                            fontFamily: "SpaceGroteskRegular",
                          }}
                        >
                          Dec 15, 2024 • 14:32
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        backgroundColor: "#22C55E33",
                        padding: 8,
                        borderRadius: 22,
                      }}
                    >
                      <Text
                        style={{
                          color: "#86EFAC",
                          fontFamily: "SpaceGroteskRegular",
                          fontSize: 12,
                        }}
                      >
                        Completed
                      </Text>
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    padding: 14,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    backgroundColor: "#FFFFFF0D",
                    borderRadius: 12,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      width: "100%",
                    }}
                  >
                    <View style={{ gap: 4 }}>
                      <Text
                        style={{
                          color: "#ffffff",
                          fontFamily: "SpaceGroteskRegular",
                          fontSize: 18,
                        }}
                      >
                        0.0045 BTC
                      </Text>
                      <Text
                        style={{
                          color: "#9CA3AF",
                          fontSize: 14,
                          fontFamily: "SpaceGroteskRegular",
                        }}
                      >
                        Bitcoin • Wallet
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          width: "100%",
                        }}
                      >
                        <Text
                          style={{
                            color: "#6B7280",
                            fontSize: 14,
                            fontFamily: "SpaceGroteskRegular",
                          }}
                        >
                          Dec 14, 2024 • 09:15
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        backgroundColor: "#22C55E33",
                        padding: 8,
                        borderRadius: 22,
                      }}
                    >
                      <Text
                        style={{
                          color: "#86EFAC",
                          fontFamily: "SpaceGroteskRegular",
                          fontSize: 12,
                        }}
                      >
                        Completed
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </LinearGradient>
        </View>
      </View>
    </ScrollView>
  );
};

export default Receive;

const styles = StyleSheet.create({});

import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import pic from "../../assets/img/profile.png";
import questionmark from "../../assets/img/questionmark.png";
import btc from "../../assets/img/btc.png";
import eth from "../../assets/img/eth.png";
import txhistoryicon from "../../assets/img/transactionhistory.png";
import settingsicon from "../../assets/img/settings.png";
import kycicon from "../../assets/img/kycverification.png";
import securityicon from "../../assets/img/security.png";
import supporticon from "../../assets/img/support.png";
import logout from "../../assets/img/logout.png";
import Entypo from "@expo/vector-icons/Entypo";

const profile = () => {
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
          Profile
        </Text>
        <View>
          <MaterialIcons name='more-vert' size={24} color='#9CA3AF' />
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
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{ flexDirection: "row", gap: 14, alignItems: "center" }}
              >
                <View>
                  <Image
                    source={pic}
                    style={{
                      borderRadius: "50%",
                      width: 64,
                      height: 64,
                      borderWidth: 2,
                      borderColor: "#00D4FF",
                    }}
                  />
                </View>
                <View style={{ gap: 4 }}>
                  <Text
                    style={{
                      fontFamily: "RobotoMonoRegular",
                      fontSize: 20,
                      color: "#ffffff",
                    }}
                  >
                    John Doe
                  </Text>
                  <Text
                    style={{
                      fontFamily: "RobotoMonoRegulat",
                      fontSize: 14,
                      color: "#9CA3AF",
                    }}
                  >
                    ID: #CX4891
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text
                      style={{
                        color: "#00B894",
                        fontFamily: "RobotoMonoRegular",
                        fontSize: 12,
                      }}
                    >
                      Verified
                    </Text>
                    <Image source={questionmark} width={12} height={12} />
                  </View>
                </View>
              </View>
              <View
                style={{
                  width: 40,
                  height: 40,
                  //   borderWidth: 1,
                  //   borderColor: "#E5E7EB",
                  backgroundColor: "#FFFFFF1A",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                }}
              >
                <MaterialIcons name='mode-edit' size={20} color='#FFFFFF' />
              </View>
            </View>
          </LinearGradient>
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text
          style={{
            color: "#ffffff",
            fontSize: 20,
            marginBottom: 20,
            fontFamily: "SpaceGroteskRegular",
          }}
        >
          Wallet Balance
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
              <View
                style={{
                  gap: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 20,
                }}
              >
                <Text
                  style={{
                    color: "#9CA3AF",
                    fontSize: 14,
                    fontFamily: "RobotoMonoRegular",
                  }}
                >
                  Total Portfolio Value
                </Text>
                <View style={{ gap: 6, alignItems: "center" }}>
                  <Text
                    style={{
                      fontFamily: "RobotoMonoRegular",
                      fontSize: 30,
                      color: "#ffffff",
                    }}
                  >
                    $24,567.89
                  </Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text
                      style={{
                        color: "#00B894",
                        fontFamily: "RobotoMonoRegular",
                        fontSize: 14,
                      }}
                    >
                      +12.5%
                    </Text>
                  </View>
                </View>
              </View>

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
                  <View style={{ flexDirection: "row", gap: 8 }}>
                    <Image source={btc} style={{ width: 40, height: 40 }} />
                    <View style={{ gap: 3 }}>
                      <Text
                        style={{
                          fontFamily: "RobotoMonoRegular",
                          fontSize: 16,
                          color: "#FFFFFF",
                        }}
                      >
                        Bitcoin
                      </Text>
                      <Text
                        style={{
                          fontFamily: "RobotoMonoRegular",
                          fontSize: 14,
                          color: "#9CA3AF",
                        }}
                      >
                        0.5821 BTC
                      </Text>
                    </View>
                  </View>

                  <View style={{ gap: 3, alignItems: "flex-end" }}>
                    <Text
                      style={{
                        fontFamily: "RobotoMonoRegular",
                        fontSize: 16,
                        color: "#FFFFFF",
                      }}
                    >
                      $18,245.67
                    </Text>
                    <Text
                      style={{
                        fontFamily: "RobotoMonoRegular",
                        fontSize: 14,
                        color: "#00B894",
                      }}
                    >
                      +8.2%
                    </Text>
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
                  <View style={{ flexDirection: "row", gap: 8 }}>
                    <Image source={eth} style={{ width: 40, height: 40 }} />
                    <View style={{ gap: 3 }}>
                      <Text
                        style={{
                          fontFamily: "RobotoMonoRegular",
                          fontSize: 16,
                          color: "#FFFFFF",
                        }}
                      >
                        Ethereum
                      </Text>
                      <Text
                        style={{
                          fontFamily: "RobotoMonoRegular",
                          fontSize: 14,
                          color: "#9CA3AF",
                        }}
                      >
                        2.1547 ETH
                      </Text>
                    </View>
                  </View>

                  <View style={{ gap: 3, alignItems: "flex-end" }}>
                    <Text
                      style={{
                        fontFamily: "RobotoMonoRegular",
                        fontSize: 16,
                        color: "#FFFFFF",
                      }}
                    >
                      $6,322.22
                    </Text>
                    <Text
                      style={{
                        fontFamily: "RobotoMonoRegular",
                        fontSize: 14,
                        color: "#F87171",
                      }}
                    >
                      -2.2%
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </LinearGradient>
        </View>
        <View style={{ marginTop: 20, marginBottom: 20 }}>
          <Text
            style={{
              color: "#ffffff",
              fontSize: 20,
              fontFamily: "SpaceGroteskRegular",
            }}
          >
            Quick Actions
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 20,
          }}
        >
          <View
            style={{
              flex: 1,
            }}
          >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#00D4FF33", "#6C5CE733"]}
              style={{
                borderRadius: 16,
                borderWidth: 1,
                borderColor: "#FFFFFF1A",
                padding: 20,
                width: "100%",
                height: 140,
              }}
            >
              <View style={{ gap: 3, alignItems: "center" }}>
                <Image source={txhistoryicon} />
                <Text
                  style={{
                    fontFamily: "RobotoMonoRegular",
                    fontSize: 16,
                    color: "#ffffff",
                    textAlign: "center",
                  }}
                >
                  Transaction {"\n"} History
                </Text>
              </View>
            </LinearGradient>
          </View>

          <View style={{ flex: 1 }}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#6C5CE733", "#00D4FF33"]}
              style={{
                borderRadius: 16,
                borderWidth: 1,
                borderColor: "#FFFFFF1A",
                padding: 20,
                width: "100%",
                height: 140,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={{ gap: 3, alignItems: "center" }}>
                <Image source={settingsicon} />
                <Text
                  style={{
                    fontFamily: "RobotoMonoRegular",
                    fontSize: 16,
                    color: "#ffffff",
                  }}
                >
                  Settings
                </Text>
              </View>
            </LinearGradient>
          </View>
        </View>

        <View style={{ marginTop: 20, marginBottom: 20 }}>
          <Text
            style={{
              color: "#ffffff",
              fontSize: 20,
              fontFamily: "SpaceGroteskRegular",
            }}
          >
            Account
          </Text>
        </View>

        <View
          style={{
            paddingVertical: 28,
            paddingHorizontal: 24,
            borderWidth: 1,
            borderColor: "#FFFFFF1A",
            borderRadius: 24,
            gap: 24,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{ flexDirection: "row", gap: 20, alignItems: "center" }}
            >
              <Image style={{ width: 40, height: 40 }} source={kycicon} />
              <Text
                style={{
                  fontFamily: "RobotoMonoRegular",
                  fontSize: 16,
                  color: "#ffffff",
                }}
              >
                KYC Verification
              </Text>
            </View>

            <View>
              <Entypo name='chevron-right' size={24} color='#9CA3AF' />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{ flexDirection: "row", gap: 20, alignItems: "center" }}
            >
              <Image style={{ width: 40, height: 40 }} source={securityicon} />
              <Text
                style={{
                  fontFamily: "RobotoMonoRegular",
                  fontSize: 16,
                  color: "#ffffff",
                }}
              >
                Security
              </Text>
            </View>

            <View>
              <Entypo name='chevron-right' size={24} color='#9CA3AF' />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{ flexDirection: "row", gap: 20, alignItems: "center" }}
            >
              <Image style={{ width: 40, height: 40 }} source={supporticon} />
              <Text
                style={{
                  fontFamily: "RobotoMonoRegular",
                  fontSize: 16,
                  color: "#ffffff",
                }}
              >
                Support
              </Text>
            </View>

            <View>
              <Entypo name='chevron-right' size={24} color='#9CA3AF' />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{ flexDirection: "row", gap: 20, alignItems: "center" }}
            >
              <Image style={{ width: 40, height: 40 }} source={logout} />
              <Text
                style={{
                  fontFamily: "RobotoMonoRegular",
                  fontSize: 16,
                  color: "#ffffff",
                }}
              >
                Logout
              </Text>
            </View>

            <View>
              <Entypo name='chevron-right' size={24} color='#9CA3AF' />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default profile;

const styles = StyleSheet.create({});

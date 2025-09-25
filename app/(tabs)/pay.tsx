import {
  ScrollView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import React, { useCallback, useRef } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import btclogo from "../../assets/img/btc.png";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

const Pay = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);
  return (
    <>
      <GestureHandlerRootView>
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
              Pay Vendor
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
              Select Cryptocurrency
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
                marginTop: 20,
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
              >
                <Image source={btclogo} style={{ width: 40, height: 40 }} />
                <View style={{ gap: 6 }}>
                  <Text
                    style={{
                      fontFamily: "SpaceGroteskRegular",
                      fontSize: 16,
                      color: "#ffffff",
                    }}
                  >
                    Bitcoin
                  </Text>
                  <Text
                    style={{
                      fontFamily: "SpaceGroteskRegular",
                      fontSize: 16,
                      color: "#9CA3AF",
                    }}
                  >
                    BTC * $100000
                  </Text>
                </View>
              </View>

              <View>
                <Entypo name='chevron-down' size={24} color='#9CA3AF' />
              </View>
            </View>
          </View>

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
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
              >
                {/* <Button title='Select Bank' onPress={handlePresentModalPress} /> */}
                <View style={{ gap: 6 }}>
                  <Text
                    style={{
                      fontFamily: "SpaceGroteskRegular",
                      fontSize: 16,
                      color: "#ffffff",
                    }}
                  >
                    Enter bank name
                  </Text>
                </View>
              </View>

              <View>
                <FontAwesome name='bank' size={20} color='#9CA3AF' />
              </View>
            </View>
          </View>

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
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
              >
                <View style={{ gap: 6 }}>
                  <Text
                    style={{
                      fontFamily: "SpaceGroteskRegular",
                      fontSize: 16,
                      color: "#ffffff",
                    }}
                  >
                    Enter account number
                  </Text>
                </View>
              </View>

              <View>
                <FontAwesome name='credit-card' size={24} color='#9CA3AF' />
              </View>
            </View>
          </View>

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
                flex: 1,

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
                  placeholderTextColor={"#ADAEBC"}
                  style={{
                    fontSize: 24,
                    fontFamily: "SpaceGroteskRegular",
                  }}
                  placeholder='0.00'
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
                  0.000 BTC
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

          <View
            style={{
              marginTop: 20,
              flex: 1,
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
                  $0.00
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
                  $2.50
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
                  $1.25
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
                  $3.75
                </Text>
              </View>
            </View>
          </View>
          <View style={{ marginTop: 20, paddingBottom: 20 }}>
            <View>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#0066FF", "#7C3AED"]}
                style={{
                  borderRadius: 16,
                  borderWidth: 1,
                  borderColor: "#3B82F64D",
                  //   padding: 20,
                }}
              >
                <TouchableOpacity
                  onPress={() => console.log("Tapped")}
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
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
        </ScrollView>
        <BottomSheetModalProvider>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            onChange={handleSheetChanges}
          >
            <BottomSheetView style={{ flex: 1 }}>
              <Text>Awesome 🎉</Text>
            </BottomSheetView>
          </BottomSheetModal>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </>
  );
};

export default Pay;

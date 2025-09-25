import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import profile from "../../assets/img/profile.png";
import AntDesign from "@expo/vector-icons/AntDesign";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import btclogo from "../../assets/img/btc.png";
import ethlogo from "../../assets/img/eth.png";
import tetherlogo from "../../assets/img/tether.png";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [selectedCrypto, setSelectedCrypto] = useState("Bitcoin");
  const [items, setItems] = useState([
    { label: "Bitcoin", value: "Bitcoin" },
    { label: "Ethereum", value: "Ethereum" },
    { label: "Solana", value: "Solana" },
    { label: "Cardano", value: "Cardano" },
    { label: "Polkadot", value: "Polkadot" },
  ]);
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#111827",
        paddingTop: 70,
        // justifyContent: "flex-start",
        paddingHorizontal: 20,
      }}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
          <Image
            source={profile}
            style={{ borderRadius: "50%", width: 40, height: 40 }}
          />
          <Text
            style={{
              fontSize: 18,
              color: "#ffffff",
              fontFamily: "SpaceGroteskRegular",
            }}
          >
            Hi, GODSWILL
          </Text>
        </View>
        <View style={{ flexDirection: "row", gap: 6, alignItems: "center" }}>
          <MaterialIcons name='notifications' size={24} color='#3B82F6' />
          <AntDesign name='customerservice' size={24} color='#3B82F6' />
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <View>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#0066FF", "#7C3AED"]}
            style={{
              borderRadius: 16,
              borderWidth: 1,
              borderColor: "#3B82F64D",
              padding: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: "#ffffff",
                  fontFamily: "SpaceGroteskRegular",
                }}
              >
                Available Balance
              </Text>

              <AntDesign name='eye' size={24} color='#FFFFFF' />
            </View>

            <View style={{ gap: 10 }}>
              <Text
                style={{
                  fontSize: 36,
                  color: "#FFFFFF",
                  fontFamily: "SpaceGroteskRegular",
                  fontWeight: "800",
                }}
              >
                $1,234.56
              </Text>
              <Text style={{ color: "#FFFFFF", fontSize: 14 }}>
                0.025 BTC ≈ $1,234.56
              </Text>
            </View>
          </LinearGradient>
        </View>
      </View>

      <View
        style={{
          padding: 20,
          backgroundColor: "#1F2937",
          borderRadius: 16,
          marginTop: 20,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Link href={"/pay"} asChild>
            <TouchableOpacity>
              <View style={{ alignItems: "center", gap: 4 }}>
                <View
                  style={{
                    borderRadius: "50%",
                    paddingVertical: 14,
                    paddingHorizontal: 14,
                    backgroundColor: "#7C3AED",
                    justifyContent: "center",
                  }}
                >
                  <AntDesign name='arrowup' size={24} color='white' />
                </View>
                <Text style={{ fontSize: 14, color: "#FFFFFF" }}>Send</Text>
              </View>
            </TouchableOpacity>
          </Link>
          <Link href={"/receive"} asChild>
            <TouchableOpacity>
              <View style={{ alignItems: "center", gap: 4 }}>
                <View
                  style={{
                    borderRadius: "50%",
                    paddingVertical: 14,
                    paddingHorizontal: 14,
                    backgroundColor: "#7C3AED",
                    justifyContent: "center",
                  }}
                >
                  <AntDesign name='arrowdown' size={24} color='white' />
                </View>
                <Text style={{ fontSize: 14, color: "#FFFFFF" }}>Receive</Text>
              </View>
            </TouchableOpacity>
          </Link>

          <Link href={"/play"} asChild>
            <TouchableOpacity>
              <View style={{ alignItems: "center", gap: 4 }}>
                <View
                  style={{
                    borderRadius: "50%",
                    paddingVertical: 14,
                    paddingHorizontal: 14,
                    backgroundColor: "#7C3AED",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Ionicons
                    style={{ marginLeft: 2 }}
                    name='play-outline'
                    size={24}
                    color='white'
                  />
                </View>
                <Text style={{ fontSize: 14, color: "#FFFFFF" }}>Play</Text>
              </View>
            </TouchableOpacity>
          </Link>

          <View style={{ alignItems: "center", gap: 4 }}>
            <View
              style={{
                borderRadius: "50%",
                paddingVertical: 14,
                paddingHorizontal: 14,
                backgroundColor: "#7C3AED",
                justifyContent: "center",
              }}
            >
              <MaterialIcons name='more-horiz' size={24} color='white' />
            </View>
            <Text style={{ fontSize: 14, color: "#FFFFFF" }}>More</Text>
          </View>
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
          Recent Activity
        </Text>

        <View style={{ gap: 12 }}>
          <View
            style={{
              borderRadius: 10,
              padding: 20,
              backgroundColor: "#1F2937",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={{ gap: 6 }}>
                <Text
                  style={{
                    fontSize: 14,
                    color: "#FFFFFF",
                    fontFamily: "InterRegular",
                  }}
                >
                  Sent $50 to Vendor X
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: "#9CA3AF",
                    fontFamily: "InterRegular",
                  }}
                >
                  2 hours ago
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 18,
                  color: "#F87171",
                  fontFamily: "InterBold",
                }}
              >
                -$50.00
              </Text>
            </View>
          </View>

          <View
            style={{
              borderRadius: 10,
              padding: 20,
              backgroundColor: "#1F2937",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={{ gap: 6 }}>
                <Text
                  style={{
                    fontSize: 14,
                    color: "#FFFFFF",
                    fontFamily: "InterRegular",
                  }}
                >
                  Received from DeFi Swap
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: "#9CA3AF",
                    fontFamily: "InterRegular",
                  }}
                >
                  1 day ago
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 18,
                  color: "#22C55E",
                  fontFamily: "InterBold",
                }}
              >
                +$50.00
              </Text>
            </View>
          </View>

          <View
            style={{
              borderRadius: 10,
              padding: 20,
              backgroundColor: "#1F2937",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={{ gap: 6 }}>
                <Text
                  style={{
                    fontSize: 14,
                    color: "#FFFFFF",
                    fontFamily: "InterRegular",
                  }}
                >
                  Sent $50 to Vendor X
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: "#9CA3AF",
                    fontFamily: "InterRegular",
                  }}
                >
                  2 hours ago
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 18,
                  color: "#F87171",
                  fontFamily: "InterBold",
                }}
              >
                -$50.00
              </Text>
            </View>
          </View>
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
          Top Crypto Holdings
        </Text>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View
            style={{
              borderRadius: 10,
              padding: 20,
              backgroundColor: "#1F2937",
              justifyContent: "center",
              width: 175,
              boxShadow: "0px 0px 20px 0px #9333EA4D",
              borderWidth: 1,
              borderColor: "#F973164D",
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Image source={btclogo} style={{ width: 32, height: 32 }} />
              <Text
                style={{
                  color: "#ffffff",
                  fontSize: 16,
                  fontFamily: "InterRegular",
                }}
              >
                BTC
              </Text>
            </View>
            <View style={{ marginTop: 14, gap: 4 }}>
              <View
                style={{ flexDirection: "row", gap: 4, alignItems: "center" }}
              >
                <Text
                  style={{
                    fontFamily: "SpaceGroteskRegular",
                    fontSize: 18,
                    color: "#ffffff",
                  }}
                >
                  $1,234.56
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: "InterRegular",
                    color: "#F87171",
                  }}
                >
                  -4.2%
                </Text>
              </View>

              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "InterRegular",
                  color: "#9CA3AF",
                }}
              >
                0.025 BTC
              </Text>
            </View>
          </View>

          <View
            style={{
              borderRadius: 10,
              padding: 20,
              backgroundColor: "#1F2937",
              justifyContent: "center",
              width: 175,
              boxShadow: "0px 0px 20px 0px #06B6D44D",
              borderWidth: 1,
              borderColor: "#3B82F64D",
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Image source={ethlogo} style={{ width: 32, height: 32 }} />
              <Text
                style={{
                  color: "#ffffff",
                  fontSize: 16,
                  fontFamily: "InterRegular",
                }}
              >
                ETH
              </Text>
            </View>
            <View style={{ marginTop: 14, gap: 4 }}>
              <View
                style={{ flexDirection: "row", gap: 4, alignItems: "center" }}
              >
                <Text
                  style={{
                    fontFamily: "SpaceGroteskRegular",
                    fontSize: 18,
                    color: "#ffffff",
                  }}
                >
                  $834.06
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: "InterRegular",
                    color: "#4ADE80",
                  }}
                >
                  +1.2%
                </Text>
              </View>

              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "InterRegular",
                  color: "#9CA3AF",
                }}
              >
                0.45 ETH
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            borderRadius: 10,
            padding: 20,
            backgroundColor: "#1F2937",
            justifyContent: "center",
            width: 175,
            boxShadow: "0px 0px 20px 0px #06B6D44D",
            borderWidth: 1,
            borderColor: "#3B82F64D",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Image source={tetherlogo} style={{ width: 32, height: 32 }} />
            <Text
              style={{
                color: "#ffffff",
                fontSize: 16,
                fontFamily: "InterRegular",
              }}
            >
              USDT
            </Text>
          </View>
          <View style={{ marginTop: 14, gap: 4 }}>
            <View
              style={{ flexDirection: "row", gap: 4, alignItems: "center" }}
            >
              <Text
                style={{
                  fontFamily: "SpaceGroteskRegular",
                  fontSize: 18,
                  color: "#ffffff",
                }}
              >
                $834.06
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "InterRegular",
                  color: "#4ADE80",
                }}
              >
                +1.2%
              </Text>
            </View>

            <Text
              style={{
                fontSize: 12,
                fontFamily: "InterRegular",
                color: "#9CA3AF",
              }}
            >
              834 USDT
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  dropdownContainer: {
    width: 140,
  },
  dropdown: {
    backgroundColor: "transparent",
    borderRadius: 8,
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderColor: "white",
  },
  dropdownText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  dropDownList: {
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    marginTop: 2,
  },
  arrowIcon: {
    tintColor: "#fff",
  },
  selectedText: {
    fontSize: 16,
    marginTop: 20,
    color: "#333",
  },
});

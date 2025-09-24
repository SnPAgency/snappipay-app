import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import playlogo from "../assets/img/playlogo.png";
import pic from "../assets/img/profile.png";
import { LinearGradient } from "expo-linear-gradient";
import Entypo from "@expo/vector-icons/Entypo";
import { Link } from "expo-router";

const Play = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#111827",
        paddingTop: 70,
      }}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          borderBottomWidth: 1,
          borderColor: "#FFFFFF1A",
          paddingHorizontal: 10,
        }}
      >
        <View>
          <Image source={playlogo} style={{ width: 52, height: 52 }} />
        </View>

        <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
          <View>
            <Text
              style={{
                color: "#9CA3AF",
                fontSize: 12,
                fontFamily: "SpaceGroteskRegular",
              }}
            >
              Balance
            </Text>
            <Text
              style={{
                color: "#22D3EE",
                fontSize: 14,
                fontFamily: "SpaceGroteskRegular",
              }}
            >
              $2,450.00
            </Text>
          </View>
          <View>
            <Image
              source={pic}
              style={{
                borderRadius: "50%",
                width: 32,
                height: 32,
                borderWidth: 1,
                borderColor: "#00D4FF",
              }}
            />
          </View>
        </View>
      </View>

      <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
        <View>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#06B6D41A", "#9333EA1A", "#EC48991A"]}
            style={{
              borderRadius: 16,
              borderWidth: 1,
              borderColor: "#06B6D480",
              padding: 20,
              paddingVertical: 28,
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "flex-start",
                gap: 14,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "OrbitronRegular",
                  color: "#22D3EE",
                }}
              >
                Trading Pair
              </Text>
              <View
                style={{
                  width: "100%",
                  borderWidth: 1,
                  borderColor: "#06B6D44D",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: 14,
                  backgroundColor: "#1A1A2E",
                  borderRadius: 12,
                }}
              >
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
                >
                  <View style={{ gap: 6 }}>
                    <Text
                      style={{
                        fontFamily: "OrbitronRegular",
                        fontSize: 16,
                        color: "#ffffff",
                      }}
                    >
                      BTC/USD
                    </Text>
                  </View>
                </View>

                <View>
                  <Entypo name='chevron-down' size={24} color='#ffffff' />
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: "OrbitronRegular",
                    fontSize: 24,
                    color: "#ffffff",
                  }}
                >
                  $43,456.76
                </Text>
                <Text
                  style={{
                    color: "#4ADE80",
                    fontFamily: "SpaceGroteskRegular",
                    fontSize: 14,
                  }}
                >
                  +2.45%
                </Text>
              </View>
            </View>
          </LinearGradient>
        </View>
      </View>

      <View style={{ marginTop: 30, paddingHorizontal: 20 }}>
        <View>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#06B6D41A", "#9333EA1A", "#EC48991A"]}
            style={{
              borderRadius: 16,
              borderWidth: 1,
              borderColor: "#06B6D480",
              padding: 20,
              paddingVertical: 28,
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "flex-start",
                gap: 14,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "OrbitronRegular",
                  color: "#22D3EE",
                }}
              >
                Make Prediction
              </Text>
              <View style={{ width: "100%", gap: 6, marginVertical: 14 }}>
                <Text
                  style={{
                    color: "#D1D5DB",
                    fontFamily: "SpaceGroteskRegular",
                  }}
                >
                  Predicted Price
                </Text>
                <TextInput
                  placeholderTextColor={"#ADAEBC"}
                  style={{
                    color: "#ADAEBC",
                    fontSize: 24,
                    fontFamily: "OrbitronRegular",
                    borderWidth: 1,
                    width: "100%",
                    borderColor: "#A855F74D",
                    padding: 10,
                    borderRadius: 8,
                  }}
                  placeholder='0.00'
                />
              </View>

              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#06B6D4", "#9333EA"]}
                style={{
                  borderRadius: 16,
                  borderWidth: 1,
                  borderColor: "#3B82F64D",
                  width: "100%",
                }}
              >
                <Link href={"/home"} asChild>
                  <TouchableOpacity
                    onPress={() => console.log("Tapped")}
                    style={{
                      padding: 20,
                      borderRadius: 16,
                      width: "100%",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          gap: 10,
                        }}
                      >
                        <Text
                          style={{
                            color: "white",
                            textAlign: "center",
                            fontSize: 18,
                            fontFamily: "OrbitronRegular",
                          }}
                        >
                          Place Bet
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </Link>
              </LinearGradient>
            </View>
          </LinearGradient>
        </View>
      </View>

      <View style={{ marginTop: 30, paddingHorizontal: 20 }}>
        <View>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#06B6D41A", "#9333EA1A", "#EC48991A"]}
            style={{
              borderRadius: 16,
              borderWidth: 1,
              borderColor: "#06B6D480",
              padding: 20,
              paddingVertical: 28,
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "flex-start",
                gap: 14,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "OrbitronRegular",
                  color: "#22D3EE",
                }}
              >
                Recent Bets
              </Text>

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
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <View style={{ gap: 4 }}>
                        <Text
                          style={{
                            color: "#ffffff",
                            fontFamily: "OrbitronRegular",
                            fontSize: 18,
                          }}
                        >
                          BTC/USD
                        </Text>
                        <Text
                          style={{
                            color: "#9CA3AF",
                            fontSize: 14,
                            fontFamily: "SpaceGroteskRegular",
                          }}
                        >
                          Predicted: $44,500
                        </Text>
                      </View>
                      <View
                        style={{
                          alignItems: "flex-end",
                        }}
                      >
                        <Text
                          style={{
                            color: "#4ADE80",
                            fontFamily: "SpaceGroteskRegular",
                            fontSize: 16,
                          }}
                        >
                          +$45.50
                        </Text>
                        <Text
                          style={{
                            color: "#4ADE80",
                            fontFamily: "SpaceGroteskRegular",
                            fontSize: 12,
                          }}
                        >
                          Won
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
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <View style={{ gap: 4 }}>
                        <Text
                          style={{
                            color: "#ffffff",
                            fontFamily: "OrbitronRegular",
                            fontSize: 18,
                          }}
                        >
                          ETH/USD
                        </Text>
                        <Text
                          style={{
                            color: "#9CA3AF",
                            fontSize: 14,
                            fontFamily: "SpaceGroteskRegular",
                          }}
                        >
                          Predicted: $44,500
                        </Text>
                      </View>
                      <View
                        style={{
                          alignItems: "flex-end",
                        }}
                      >
                        <Text
                          style={{
                            color: "#F87171",
                            fontFamily: "SpaceGroteskRegular",
                            fontSize: 16,
                          }}
                        >
                          -$45.50
                        </Text>
                        <Text
                          style={{
                            color: "#F87171",
                            fontFamily: "SpaceGroteskRegular",
                            fontSize: 12,
                          }}
                        >
                          Lost
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
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <View style={{ gap: 4 }}>
                        <Text
                          style={{
                            color: "#ffffff",
                            fontFamily: "OrbitronRegular",
                            fontSize: 18,
                          }}
                        >
                          SOL/USD
                        </Text>
                        <Text
                          style={{
                            color: "#9CA3AF",
                            fontSize: 14,
                            fontFamily: "SpaceGroteskRegular",
                          }}
                        >
                          Predicted: $200
                        </Text>
                      </View>
                      <View
                        style={{
                          alignItems: "flex-end",
                        }}
                      >
                        <Text
                          style={{
                            color: "#FACC15",
                            fontFamily: "SpaceGroteskRegular",
                            fontSize: 16,
                          }}
                        >
                          Pending
                        </Text>
                        <Text
                          style={{
                            color: "#FACC15",
                            fontFamily: "SpaceGroteskRegular",
                            fontSize: 12,
                          }}
                        >
                          2h lefet
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </LinearGradient>
        </View>
      </View>

      <View style={{ marginTop: 30, paddingHorizontal: 20 }}>
        <View>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#06B6D41A", "#9333EA1A", "#EC48991A"]}
            style={{
              borderRadius: 16,
              borderWidth: 1,
              borderColor: "#06B6D480",
              padding: 20,
              paddingVertical: 28,
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "flex-start",
                gap: 14,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "OrbitronRegular",
                  color: "#22D3EE",
                }}
              >
                Top Predictors
              </Text>

              <View>
                <View style={{ gap: 14 }}>
                  <View>
                    <LinearGradient
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      colors={["#CA8A0433", "#EAB3081A"]}
                      style={{
                        borderRadius: 16,
                        borderWidth: 1,
                        borderColor: "#FFFFFF1A",
                        padding: 10,
                        paddingVertical: 20,
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                          width: "100%",
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 10,
                          }}
                        >
                          <View
                            style={{
                              width: 32,
                              height: 32,
                              backgroundColor: "#EAB308",
                              borderRadius: "50%",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Text
                              style={{
                                color: "#000000",
                                fontFamily: "SpaceGroteskRegular",
                                fontSize: 14,
                              }}
                            >
                              1
                            </Text>
                          </View>
                          <View
                            style={{
                              flexDirection: "row",
                              alignItems: "center",
                              gap: 8,
                            }}
                          >
                            <Image
                              style={{ width: 32, height: 32 }}
                              source={pic}
                            />
                            <View style={{ gap: 4 }}>
                              <Text
                                style={{
                                  color: "#ffffff",
                                  fontFamily: "SpaceGroteskRegular",
                                  fontSize: 14,
                                }}
                              >
                                CryptoQueen
                              </Text>
                              <Text
                                style={{
                                  color: "#9CA3AF",
                                  fontSize: 14,
                                  fontFamily: "SpaceGroteskRegular",
                                }}
                              >
                                95% accuracy
                              </Text>
                            </View>
                          </View>
                        </View>

                        <View
                          style={{
                            alignItems: "flex-end",
                          }}
                        >
                          <Text
                            style={{
                              color: "#FACC15",
                              fontFamily: "OrbitronRegular",
                              fontSize: 18,
                            }}
                          >
                            $45.50
                          </Text>
                        </View>
                      </View>
                    </LinearGradient>
                  </View>

                  <View
                    style={{
                      padding: 10,
                      paddingVertical: 20,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          gap: 10,
                        }}
                      >
                        <View
                          style={{
                            width: 32,
                            height: 32,
                            backgroundColor: "#4B5563",
                            borderRadius: "50%",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Text
                            style={{
                              color: "#ffffff",
                              fontFamily: "SpaceGroteskRegular",
                              fontSize: 14,
                            }}
                          >
                            2
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 8,
                          }}
                        >
                          <Image
                            style={{ width: 32, height: 32 }}
                            source={pic}
                          />
                          <View style={{ gap: 4 }}>
                            <Text
                              style={{
                                color: "#ffffff",
                                fontFamily: "SpaceGroteskRegular",
                                fontSize: 14,
                              }}
                            >
                              TradeMaster
                            </Text>
                            <Text
                              style={{
                                color: "#9CA3AF",
                                fontSize: 14,
                                fontFamily: "SpaceGroteskRegular",
                              }}
                            >
                              87% accuracy
                            </Text>
                          </View>
                        </View>
                      </View>

                      <View
                        style={{
                          alignItems: "flex-end",
                        }}
                      >
                        <Text
                          style={{
                            color: "#D1D5DB",
                            fontFamily: "OrbitronRegular",
                            fontSize: 18,
                          }}
                        >
                          $20.00
                        </Text>
                      </View>
                    </View>
                  </View>

                  <View
                    style={{
                      padding: 10,
                      paddingVertical: 20,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          gap: 10,
                        }}
                      >
                        <View
                          style={{
                            width: 32,
                            height: 32,
                            backgroundColor: "#EA580C",
                            borderRadius: "50%",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Text
                            style={{
                              color: "#ffffff",
                              fontFamily: "SpaceGroteskRegular",
                              fontSize: 14,
                            }}
                          >
                            3
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 8,
                          }}
                        >
                          <Image
                            style={{ width: 32, height: 32 }}
                            source={pic}
                          />
                          <View style={{ gap: 4 }}>
                            <Text
                              style={{
                                color: "#ffffff",
                                fontFamily: "SpaceGroteskRegular",
                                fontSize: 14,
                              }}
                            >
                              BitWizard
                            </Text>
                            <Text
                              style={{
                                color: "#9CA3AF",
                                fontSize: 14,
                                fontFamily: "SpaceGroteskRegular",
                              }}
                            >
                              82% accuracy
                            </Text>
                          </View>
                        </View>
                      </View>

                      <View
                        style={{
                          alignItems: "flex-end",
                        }}
                      >
                        <Text
                          style={{
                            color: "#FB923C",
                            fontFamily: "OrbitronRegular",
                            fontSize: 18,
                          }}
                        >
                          $18.00
                        </Text>
                      </View>
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

export default Play;

const styles = StyleSheet.create({});

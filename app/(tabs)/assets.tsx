import React, { useCallback, useRef, useState } from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
  FlatList,
} from "react-native";

const TouchableOpacityFixed = TouchableOpacity as any;
import { Link } from "expo-router";
import AssetRow from "../../components/AssetsRow";
import { currency, useAsset } from "../../hooks/useAsset";

const Assets = () => {
  const { assets } = useAsset();

  return (
    <View style={{ flex: 1, backgroundColor: "#020202" }}>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: 80,
          paddingHorizontal: 20,
          marginBottom: 20,
        }}
      >
        {/* Left: Back Arrow */}
        <Link href='/home' asChild>
          <TouchableOpacity>
            <Image
              source={require("../../assets/back-arrow.png")}
              style={{ height: 30, width: 30 }}
            />
          </TouchableOpacity>
        </Link>

        {/* Center: Title */}
        <Text
          style={{
            fontSize: 18,
            lineHeight: 32,
            fontWeight: "600",
            color: "#ffffff",
            fontFamily: "Manrope",
          }}
        >
          Assets
        </Text>

        <View style={{ width: 24 }} />
      </View>
      {/* <ScrollView
        style={{
          flex: 1,
          paddingHorizontal: 20,
        }}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <AssetRow
          type='eth'
          symbol='wETH'
          network='Ethereum'
          price='$3,200'
          change='+1.2%'
          changeColor='#22c55e'
          balance='0.42'
          value='$26,544'
        />

        <AssetRow
          type='usdt'
          symbol='USDT'
          network='Hedera'
          price='$1.01'
          change='-$0.10'
          balance='1000.08'
          value='$1000.10'
        />
      </ScrollView> */}
      <FlatList
        data={assets}
        keyExtractor={(item) => item.contractAddress}
        showsVerticalScrollIndicator={false}
        // style={{ marginTop: 10 }}
        style={{
          flex: 1,
          paddingHorizontal: 20,
        }}
        renderItem={({ item, index }) => (
          <AssetRow
            type={item.symbol.toLowerCase()}
            symbol={item.symbol}
            network={item.network}
            price={`${item.assetToFiat.toFixed(2)}`}
            balance={item.balance}
            value={`${(parseFloat(item.balance) * item.assetToFiat).toFixed(
              2
            )}`}
            currency={currency}
          />
        )}
      />
    </View>
  );
};

export default Assets;

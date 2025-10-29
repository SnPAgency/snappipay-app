import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from "react-native";

type AssetType = "usdt" | "eth" | "hbar";

interface AssetRowProps {
  type: string;
  iconOverride?: ImageSourcePropType;
  symbol: string;
  network: string;
  price: string;
  change: string;
  changeColor?: string;
  balance: string;
  value: string;
}

const AssetRow: React.FC<AssetRowProps> = ({
  type,
  iconOverride,
  symbol,
  network,
  price,
  change,
  changeColor = "#ef4444",
  balance,
  value,
}) => {
  /** choose the correct icon depending on type or use override */
  const renderIcon = () => {
    if (iconOverride) return iconOverride;

    switch (type) {
      //   case 'btc':
      //     return require('../assets/btc.png');
      case "eth":
        return require("../assets/eth.png");
      case "hbar":
        return require("../assets/eth.png");
      case "usdt":
      default:
        return require("../assets/usdt.png");
    }
  };

  return (
    <View style={styles.row}>
      {/* Left section */}
      <View style={styles.left}>
        <Image source={renderIcon()} style={styles.icon} />
        <View>
          <View style={styles.titleRow}>
            <Text style={styles.symbol}>{symbol}</Text>
            <Text style={styles.network}>{network}</Text>
          </View>
          <View style={styles.priceRow}>
            <Text style={styles.price}>{price}</Text>
            <Text style={[styles.change, { color: changeColor }]}>
              {change}
            </Text>
          </View>
        </View>
      </View>

      {/* Right section */}
      <View style={styles.right}>
        <Text style={styles.balance}>{balance}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
};

export default AssetRow;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 0.3,
    borderBottomColor: "#7157da",
    paddingVertical: 16,
  },
  left: { flexDirection: "row", alignItems: "center", flex: 1 },
  icon: { height: 48, width: 48, borderRadius: 24, marginRight: 12 },
  titleRow: { flexDirection: "row", alignItems: "center", marginBottom: 4 },
  symbol: {
    fontSize: 14,
    lineHeight: 16,
    color: "#FFFFFF",
    fontFamily: "Manrope",
    fontWeight: "500",
    marginRight: 6,
  },
  network: {
    fontSize: 10,
    lineHeight: 16,
    fontWeight: 400,
    color: "#A1A1AA",
    fontFamily: "Manrope",
  },
  priceRow: { flexDirection: "row", alignItems: "center" },
  price: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 400,
    color: "#FFFFFF",
    fontFamily: "Manrope",
    marginRight: 6,
  },
  change: {
    fontSize: 10,
    lineHeight: 16,
    fontWeight: 400,
    fontFamily: "Manrope",
  },
  right: { alignItems: "flex-end" },
  balance: {
    fontSize: 12,
    lineHeight: 16,
    color: "#FFFFFF",
    fontFamily: "Manrope",
    fontWeight: "500",
  },
  value: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 400,
    color: "#9ca3af",
    fontFamily: "Manrope",
    marginTop: 2,
  },
});

import React from 'react';
import { View, Text, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type TransactionType = 'sent' | 'receive' | 'pay';

type TransactionRowProps = {
  type: TransactionType;
  title: string;
  subtitle: string;
  amount: string;
  time: string;
  // optional custom images
  sentImage?: ImageSourcePropType;
  receiveImage?: ImageSourcePropType;
  payImage?: ImageSourcePropType;
};

const TransactionRow: React.FC<TransactionRowProps> = ({
  type,
  title,
  subtitle,
  amount,
  time,
  sentImage,
  receiveImage,
  payImage,
}) => {
  
  const renderIcon = () => {
    if (type === 'sent' && sentImage) {
      return <Image source={sentImage} style={styles.customIcon} />;
    }
    if (type === 'receive' && receiveImage) {
      return <Image source={receiveImage} style={styles.customIcon} />;
    }
    if (type === 'pay' && payImage) {
      return <Image source={payImage} style={styles.customIcon} />;
    }

    // fallback Ionicons if no image is passed
    switch (type) {
      case 'sent':
        return <Ionicons name="arrow-up" size={24} color="#ef4444" style={styles.icon} />;
      case 'receive':
        return <Ionicons name="arrow-down" size={24} color="#22c55e" style={styles.icon} />;
      case 'pay':
        return <Ionicons name="card" size={24} color="#3b82f6" style={styles.icon} />;
    }
  };

  return (
    <View style={styles.row}>
      <View style={styles.left}>
        {renderIcon()}
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>

      <View>
        <Text style={styles.amount}>{amount}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  );
};

export default TransactionRow;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 0.3,
    borderBottomColor: '#7157da',
    paddingBottom: 20,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  customIcon: {
    height: 35,
    width: 35,
    marginRight: 10,
    resizeMode: 'contain',
  },
  icon: {
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    color: '#FFFFFF',
    fontFamily: 'Manrope',
    fontWeight: '400',
    lineHeight: 24,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 11,
    color: '#fff',
    fontFamily: 'Manrope',
  },
  amount: {
    fontSize: 18,
    color: '#FFFFFF',
    fontFamily: 'Manrope',
    fontWeight: '400',
    lineHeight: 24,
    marginBottom: 5,
    textAlign: 'right',
  },
  time: {
    fontSize: 11,
    color: '#fff',
    fontFamily: 'Manrope',
    textAlign: 'right',
  },
});

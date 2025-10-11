import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions, Image } from 'react-native';

const { width } = Dimensions.get('window');

interface NotificationProps {
  title: string;
  message: string;
  visible: boolean;
  onHide?: () => void;
  duration?: number;
  type?: 'success' | 'error' | 'info' | 'warning';
}

const Notification: React.FC<NotificationProps> = ({
  title,
  message,
  visible,
  onHide,
  duration = 3000,
  type = 'success'
}) => {
  const translateY = useRef(new Animated.Value(-100)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      // Show notification
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();

      // Auto hide after duration
      const timer = setTimeout(() => {
        hideNotification();
      }, duration);

      return () => clearTimeout(timer);
    } else {
      hideNotification();
    }
  }, [visible]);

  const hideNotification = () => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: -100,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      if (onHide) onHide();
    });
  };

  const getIconColor = () => {
    switch (type) {
      case 'success':
        return '#10B981';
      case 'error':
        return '#EF4444';
      case 'warning':
        return '#F59E0B';
      case 'info':
        return '#3B82F6';
      default:
        return '#10B981';
    }
  };

  if (!visible) return null;

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{ translateY }],
          opacity,
        },
      ]}
    >
      <View style={styles.content}>
        {/* Icon */}
        <View style={styles.iconContainer}>
          <Image source={require('../assets/verify.png')} style={{height: 30, width: 30}}/>
        </View>

        {/* Text Content */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>
        </View>
      </View>
    </Animated.View>
  );
};

// Example usage component
export const NotificationExample = () => {
  const [showNotification, setShowNotification] = React.useState(false);

  const handleShowNotification = () => {
    setShowNotification(true);
  };

  return (
    <View style={styles.exampleContainer}>
      <Notification
        title="Deposit Confirmed"
        message="You just received 550 USDT"
        visible={showNotification}
        onHide={() => setShowNotification(false)}
        type="success"
        duration={3000}
      />

      {/* Demo button */}
      <View style={styles.buttonContainer}>
        <Text 
          style={styles.button}
          onPress={handleShowNotification}
        >
          Show Notification
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    left: 20,
    right: 20,
    zIndex: 9999,
    elevation: 10,
  },
  content: {
    backgroundColor: '#0f0f0f',
    borderRadius: 12,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    borderWidth: 1,
    borderColor: '#41327c',
  },
  iconContainer: {
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 6,
    marginTop: -50,
  },
  iconText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    lineHeight:32,
    fontWeight: '600',
    marginBottom: 4,
    fontFamily: 'Manrope',
  },
  message: {
    color: '#D1D5DB',
    fontSize: 14,
    lineHeight:24,
    fontWeight: '400',
    fontFamily: 'Manrope',
  },

  exampleContainer: {
    flex: 1,
    backgroundColor: '#020202',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#755ae2',
    color: '#FFFFFF',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    fontSize: 16,
    fontWeight: '600',
    overflow: 'hidden',
  },
});

export default Notification;
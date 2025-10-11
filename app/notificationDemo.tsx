import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,Image

} from 'react-native';
import Notification from '../components/notification';
import { Link } from 'expo-router';

const NotificationDemo = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [notifData, setNotifData] = useState({
    title: '',
    message: '',
    type: 'success' as 'success' | 'error' | 'info' | 'warning',
  });

  const triggerNotification = (
    title: string,
    message: string,
    type: 'success' | 'error' | 'info' | 'warning' = 'success'
  ) => {
    setNotifData({ title, message, type });
    setShowNotification(true);
  };

  return (
    <View style={styles.container}>
      {/* Notification Component */}
      <Notification
        title={notifData.title}
        message={notifData.message}
        visible={showNotification}
        onHide={() => setShowNotification(false)}
        type={notifData.type}
      />

 
       
                <Link href="/home" asChild>
                <TouchableOpacity>
                <Image source={require('../assets/back-arrow.png')} style={{height:30, width:30, marginBottom: 50}}/>
                </TouchableOpacity>
            </Link>
      

        {/* Custom Example */}
        <TouchableOpacity
          style={[styles.button, styles.customButton]}
          onPress={() =>
            triggerNotification(
              'Deposit Confirmed',
              'You just received 1000 USDT on Ethereum network',
              'success'
            )
          }
        >
          <Text style={styles.buttonText}>Show Custom Message</Text>
        </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020202',
    padding: 20,
    paddingTop: 140,
  },

  button: {
    paddingVertical: 18,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Manrope',
  },
 
  customButton: {
    backgroundColor: '#755ae2',
  },
});

export default NotificationDemo;
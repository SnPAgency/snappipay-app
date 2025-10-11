import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Pressable
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
import TransactionRow from "../../components/TxnRow";

const { width, height } = Dimensions.get('window');
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
        backgroundColor: "#020202",
        paddingTop: 80,
        paddingHorizontal: 20,
      }}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal:10, }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
          <Image
            source={profile}
            style={{ borderRadius: "50%", width: 40, height: 40 }}
          />
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.helloText}>
              Good morning 👋🏽
            </Text>
            <Text style={styles.nameText}>
              Femi
            </Text>
          </View>
        </View>

        <Link href={'#'}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image style={{height: 40, width: 40}} source={require('../../assets/noti-icon.png')}/>
         
        </View>
        </Link>
       
      </View>
      <View style={{ marginTop: 20 }}>
        <View>
          <LinearGradient
            colors={['#755AE2', '#40317C', '#40317C']}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            locations={[0, 0.6, 1]}
            style={{
              borderRadius: 8,
              borderWidth: 1,
              borderColor: "#3B82F64D",
              padding: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 10,
                gap: 12,
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
    
                <Image source={require('../../assets/open-eye-icon.png')} style={{height: 20, width: 20}}/>
            </View>

            <View style={{ gap: 10 }}>
              <Text
                style={{
                  fontSize: 28,
                  lineHeight:36,
                  color: "#FFFFFF",
                  fontFamily: "Geist",
                  fontWeight: "600",
                }}
              >
                <Text
                style={{fontSize: 14, fontFamily: "Geist", fontWeight: "400"}}
                >$</Text>1,234.56
              </Text>
            
            </View>



            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20, gap: 10 }}>
            <Link href={"/pay"} asChild>
              <TouchableOpacity style={{ alignItems: "center", gap: 4, flex: 1 }}>
                <View
                  style={{
                    borderRadius: 25,
                    paddingVertical: 14,
                    paddingHorizontal: 15,
                    backgroundColor: "#927de8",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 4,
                    width: "100%", // Make button fill container width
                  }}
                >
                  
                  <Image source={require('../../assets/send-arrow.png')} style={{width: 17, height: 17}}/>
                  
                </View>
                <Text style={{ fontSize: 14, color: "#FFFFFF", fontWeight: 500, fontFamily: 'Geist', marginTop: 5, }}>Send</Text>
              </TouchableOpacity>
            </Link>
            
            <Link href={"/receive"} asChild>
              <TouchableOpacity style={{ alignItems: "center", gap: 4, flex: 1 }}>
                <View
                  style={{
                    borderRadius: 25,
                    paddingVertical: 14,
                    paddingHorizontal: 15,
                    backgroundColor: "#927de8",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 4,
                    width: "100%",
                  }}
                >
                 
                  <Image source={require('../../assets/receive-arrow.png')} style={{width: 17, height: 17}}/>
                </View>
                <Text style={{ fontSize: 14, color: "#FFFFFF", fontWeight: 500, fontFamily: 'Geist', marginTop:5 }}>Receive</Text>
              </TouchableOpacity>
            </Link>

            <Link href={"/buy"} asChild>
              <TouchableOpacity style={{ alignItems: "center", gap: 4, flex: 1 }}>
                <View
                  style={{
                    borderRadius: 25,
                    paddingVertical: 14,
                    paddingHorizontal: 15,
                    backgroundColor: "#927de8",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 4,
                    width: "100%",
                  }}
                >
                 
                  <Image source={require('../../assets/buy.png')} style={{width: 17, height: 17}}/>
                </View>
                <Text style={{ fontSize: 14, color: "#FFFFFF", fontWeight: 500, fontFamily: 'Geist', marginTop: 5 }}>Buy</Text>
              </TouchableOpacity>
            </Link>
            
            <Link href={"/pay"} asChild>
              <TouchableOpacity style={{ alignItems: "center", gap: 4, flex: 1 }}>
                <View
                  style={{
                    borderRadius: 25,
                    paddingVertical: 14,
                    paddingHorizontal: 15,
                    backgroundColor: "#927de8",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 4,
                    width: "100%",
                  }}
                >
                 
                  <Image source={require('../../assets/pay-icon.png')} style={{width: 17, height: 17}}/>
                </View>
                <Text style={{ fontSize: 14, color: "#FFFFFF", fontWeight: 500, fontFamily: 'Geist', marginTop: 5 }}>Pay</Text>
              </TouchableOpacity>
            </Link>
          </View>
          </LinearGradient>
        </View>
      </View>

    

      <View style={{ marginTop: 20,
      backgroundColor: '#0f0c1d',
      paddingHorizontal: 15,
      paddingVertical: 15,
      borderRadius: 4,

      }}>
       <View style={{ 
        flexDirection: "row", 
        justifyContent: "space-between", 
        alignItems: "center",
        marginBottom: 20,
      }}>
        <Text
          style={{
            color: "#ffffff",
            fontSize: 16,
            fontFamily: "Trap",
            fontWeight: "600",
            lineHeight: 24
          }}
        >
          Recent
        </Text>
        <Link href={'#'}>
          <Text style={{ color: "#927de8",
            fontFamily: "Trap",
            fontSize: 12,
            lineHeight: 24,
            fontWeight: 600,
           }}>View all</Text>
        </Link>
      </View>

      <View style={{marginBottom: 20,}}>
        <Text
         style={{
          color: "#FFFFFFB2",

          fontSize: 14,
          fontFamily: "Trap",
          fontWeight: "600",
          lineHeight: 24
        }}
        >Today</Text>
      </View>

      <ScrollView>
      <TransactionRow
      type="receive"
      title="USDC Deposit"
      subtitle="Payment received"
      amount="+700.00"
      time="12:12"
      receiveImage={require('../../assets/received-arrow.png')}
      sentImage={require('../../assets/sent-arrow.png')}
      payImage={require('../../assets/payment-arrow.png')}
        />

        <TransactionRow
          type="sent"
          title="USDC Sent"
          subtitle="Payment sent"
          amount="-250.00"
          time="13:45"
          receiveImage={require('../../assets/received-arrow.png')}
          sentImage={require('../../assets/sent-arrow.png')}
          payImage={require('../../assets/payment-arrow.png')}
        />

        <TransactionRow
          type="pay"
          title="Request from Ard..."
          subtitle="Payment received"
          amount="-50.00"
          time="15:20"
          receiveImage={require('../../assets/received-arrow.png')}
          sentImage={require('../../assets/sent-arrow.png')}
          payImage={require('../../assets/payment-arrow.png')}
        />

    </ScrollView>



      
      

          


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
    backgroundColor: "#020202",
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


  helloText:{
    color: '#FFFFFFA3',
    fontSize: 12,
    lineHeight: 16,
    fontWeight:400,
    fontFamily: 'Geist'

  },
  nameText:{
    color: '#FFFFFF',
    fontFamily: 'Geist',
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 24,
   
  }
});

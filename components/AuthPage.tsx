// AuthScreen.tsx
import React from "react";
import { SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";
// import { useToken } from "./TokenContext";

export default function AuthScreen() {
  //   const { setToken } = useToken();

  const handleMessage = (event: any) => {
    try {
      const data = JSON.parse(event.nativeEvent.data);
      if (data.type === "AUTH_TOKEN") {
        // setToken(data.token); // save token into context
        console.log("DATA", data);
      }
    } catch (err) {
      console.warn("Invalid message from WebView:", event.nativeEvent.data);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{ uri: "http://localhost:5173" }} // your local web app
        onMessage={handleMessage}
      />
    </SafeAreaView>
  );
}

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { JSX, useEffect, useState } from "react";
import { Slot } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import GradientSplashScreen from "../components/GradientSplashScreen";
import { AppKitProvider } from "@reown/appkit-react-native";
import { appKit } from "../config/AppKitConfig";
import { AppKit } from "@reown/appkit-react-native";

export default function RootLayout(): JSX.Element {
  const [appIsReady, setAppIsReady] = useState<boolean>(false);

  const [loaded, error] = useFonts({
    SpaceGroteskRegular: require("../assets/fonts/SpaceGrotesk-Regular.ttf"),
    SpaceGroteskBold: require("../assets/fonts/SpaceGrotesk-Bold.ttf"),
    InterRegular: require("../assets/fonts/interRegular.ttf"),
    InterBold: require("../assets/fonts/interBold.ttf"),
    RobotoMonoRegular: require("../assets/fonts/RobotoMono-Regular.ttf"),
    OrbitronRegular: require("../assets/fonts/OrbitronRegular.ttf"),
  });

  // Hide the native splash screen as soon as React mounts
  useEffect(() => {
    SplashScreen.hideAsync().catch(() => {});
  }, []);

  useEffect(() => {
    async function prepare(): Promise<void> {
      try {
        if (loaded || error) {
          // console.log('Fonts loaded, app initialization complete');

          await new Promise((resolve) => setTimeout(resolve, 7000));

          setAppIsReady(true);
        }
      } catch (e) {
        console.warn("Error during app initialization:", e);
        setTimeout(() => setAppIsReady(true), 7000);
      }
    }

    prepare();
  }, [loaded, error]);

  if (!appIsReady) {
    return <GradientSplashScreen />;
  }

  return (
    <AppKitProvider instance={appKit}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Slot />
        <AppKit />
      </GestureHandlerRootView>
    </AppKitProvider>
  );
}

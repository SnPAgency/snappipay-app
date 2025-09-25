import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { Slot } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import GradientSplashScreen from "../components/GradientSplashScreen"; // Adjust path as needed

// Hide the native splash screen as soon as React mounts
// (keeps native splash from flashing before our custom splash renders)
useEffect(() => {
  SplashScreen.hideAsync().catch(() => {});
}, []);

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

  useEffect(() => {
    async function prepare(): Promise<void> {
      try {
        // Wait for fonts to load
        if (loaded || error) {
          // Add any other initialization logic here
          console.log('Fonts loaded, app initialization complete');
          
          // Wait a bit more to ensure splash shows for minimum time
          await new Promise(resolve => setTimeout(resolve, 3500)); // Slightly longer than splash duration
          
          setAppIsReady(true);
        }
      } catch (e) {
        console.warn('Error during app initialization:', e);
        setTimeout(() => setAppIsReady(true), 3500); // Fallback timing
      }
    }

    prepare();
  }, [loaded, error]);

  // Always show custom splash screen until app is ready
  if (!appIsReady) {
    return <GradientSplashScreen duration={3000} />;
  }

  // Show the main app when ready
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Slot />
    </GestureHandlerRootView>
  );
}
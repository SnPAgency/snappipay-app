import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Slot, Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceGroteskRegular: require("../assets/fonts/SpaceGrotesk-Regular.ttf"),
    SpaceGroteskBold: require("../assets/fonts/SpaceGrotesk-Bold.ttf"),
    InterRegular: require("../assets/fonts/interRegular.ttf"),
    InterBold: require("../assets/fonts/interBold.ttf"),
    RobotoMonoRegular: require("../assets/fonts/RobotoMono-Regular.ttf"),
    OrbitronRegular: require("../assets/fonts/OrbitronRegular.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    // <Stack>
    //   <Stack.Screen name='index' options={{ title: "Welcome" }} />
    //   <Stack.Screen name='home' options={{ title: "Home" }} />
    //   <Stack.Screen name='login' options={{ title: "Login" }} />
    //   <Stack.Screen name='pay' options={{ title: "Pay" }} />
    // </Stack>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Slot />
    </GestureHandlerRootView>
  );
}

import { useCallback } from 'react';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { 
  useFonts, 
  Inter_400Regular, 
  Inter_500Medium, 
  Inter_700Bold
} from '@expo-google-fonts/inter'
import * as SplashScreen from 'expo-splash-screen';
import Routes from "./src/routes";
import 'react-native-gesture-handler';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
     <Routes/>
     <StatusBar backgroundColor={'#009BFF'}/>
    </SafeAreaProvider>
  );
}
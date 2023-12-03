import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import Routes from "./src/routes";

import 'react-native-gesture-handler';

export default function App() {
  return (
    <SafeAreaProvider>
     <Routes/>
     <StatusBar backgroundColor={'#009BFF'}/>
    </SafeAreaProvider>
  );
}
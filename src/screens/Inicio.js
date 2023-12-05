import { StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

import HeaderInicio from '../components/HeaderInicio';
import FiltroLoja from "../components/FiltroLojas";

export default function Inicio() {
  return(
    <SafeAreaView style={styles.container}>
      <HeaderInicio/>
      <FiltroLoja/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
})
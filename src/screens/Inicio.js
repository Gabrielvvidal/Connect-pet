import { StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

import HeaderInicio from '../components/HeaderInicio';
import FiltroLoja from "../components/FiltroLojas";
import FiltrosOrdem from "../components/FiltrosOrdem";

export default function Inicio() {
  return(
    <SafeAreaView style={styles.container}>
      <HeaderInicio/>
      <FiltroLoja/>
      <FiltrosOrdem/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    //padding: 20
  }
})
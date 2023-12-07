import { StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

import HeaderInicio from '../components/HeaderInicio';
import FiltroLoja from "../components/FiltroLojas";
import FiltrosOrdem from "../components/FiltrosOrdem";
import Recomendacoes from "../components/Recomendacoes";

export default function Inicio() {
  return(
    <SafeAreaView style={styles.container}>
      <HeaderInicio/>
      <FiltroLoja/>
      <FiltrosOrdem/>
      <Recomendacoes/>
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
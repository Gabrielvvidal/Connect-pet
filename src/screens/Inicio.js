import { StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFilterContext } from "../hooks/useFilterContext";

import HeaderInicio from '../components/HeaderInicio';
import FiltroLojas from "../components/FiltroLojas";
import FiltrosOrdem from "../components/FiltrosOrdem";
import ExibirLojas from "../components/ExibirLojas";

export default function Inicio() {
  const { categoria } = useFilterContext()

  return(
    <SafeAreaView style={styles.container}>
      <HeaderInicio/>
      <FiltroLojas/>
      <FiltrosOrdem/>
      
      {categoria === "petshop" && <ExibirLojas tituloCat="Petshops"/>}

      {categoria === "veterinaria" && <ExibirLojas tituloCat="Veterinárias"/>}

      {categoria === "cuidadores" && <ExibirLojas tituloCat="Cuidadores"/>}

      {categoria === "hoteis" && <ExibirLojas tituloCat="Hotéis"/>}

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  }
})
import { StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFilterContext } from "../hooks/useFilterContext";

import HeaderInicio from '../components/HeaderInicio';
import FiltroLojas from "../components/FiltroLojas";
import FiltrosOrdem from "../components/FiltrosOrdem";
import CategoriaLojas from "../components/CategoriaLojas";

export default function Inicio() {
  const { categoria } = useFilterContext()

  return(
    <SafeAreaView style={styles.container}>
      <HeaderInicio/>
      <FiltroLojas/>
      <FiltrosOrdem/>
      
      {categoria === "petshop" && <CategoriaLojas tituloCat="Petshops"/>}

      {categoria === "veterinaria" && <CategoriaLojas tituloCat="Veterinárias"/>}

      {categoria === "cuidadores" && <CategoriaLojas tituloCat="Cuidadores"/>}

      {categoria === "hoteis" && <CategoriaLojas tituloCat="Hotéis"/>}

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  }
})
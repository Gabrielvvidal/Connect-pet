import * as React from "react"
import { View, StyleSheet } from "react-native"

import PetShopImg from "../images/petshop.png"
import VeterinariaImg from "../images/veterinaria.png"
import CuidadorImg from "../images/cuidadores.png"
import HotelImg from "../images/hoteis.png"

import BotaoCategoria from "./BotaoCategoria"

export default function FiltroLoja() {
  return(
    <View style={styles.filtroContainer}>
      <BotaoCategoria
        nomeCat="petshop"
        textoCat="Petshops"
        imgCat={PetShopImg}
      />

      <BotaoCategoria
        nomeCat="veterinaria"
        textoCat="Veterinárias"
        imgCat={VeterinariaImg}
      />

      <BotaoCategoria
        nomeCat="cuidadores"
        textoCat="Cuidadores"
        imgCat={CuidadorImg}
      />

      <BotaoCategoria
        nomeCat="hoteis"
        textoCat="Hotéis"
        imgCat={HotelImg}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  filtroContainer: {
    height: 135,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#000000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity:  0.25,
    shadowRadius: 1,
    elevation: 1,
    overflow: 'hidden',
    marginTop: -20,
    paddingTop: 20,
    gap: 20
  }
})
import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

import BotaoOrdem from './BotaoOrdem'

export default function FiltrosOrdem(){
  return(
    <View style={styles.ordemContainer}>
      <BotaoOrdem
        nomeFiltro="Ordernar"
      >
        <MaterialIcons name="keyboard-arrow-down" size={20} color="#000000" />
      </BotaoOrdem>

      <BotaoOrdem
        nomeFiltro="Distância"
      >
        <MaterialIcons name="keyboard-arrow-down" size={20} color="#000000" />
      </BotaoOrdem>
    </View>
  )
}

const styles = StyleSheet.create({
  ordemContainer: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10
  }
})
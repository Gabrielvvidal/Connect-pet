import * as React from 'react'
import  { Text, StyleSheet, View } from 'react-native'

export default function Recomendacoes() {
  return(
    <View style={styles.recContainer}>
      <Text style={styles.recText}>Recomendações</Text>

      <Text style={styles.recNotFound}>Nenhum estabelecimento encontrado</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  recContainer: {
    paddingLeft: 20
  },

  recText: {
    fontSize: 18,
    fontFamily: 'Inter_700Bold',
    marginBottom: 10
  },

  recNotFound: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular'
  }
})
import * as React from 'react'
import  { Text, StyleSheet, View } from 'react-native'

export default function ExibirLojas({tituloCat}) {
  return(
    <View style={styles.recContainer}>
      <Text style={styles.recText}>{tituloCat}</Text>

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
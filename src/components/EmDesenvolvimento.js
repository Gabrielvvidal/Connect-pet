import * as React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image, Text, StyleSheet } from "react-native";

export default function EmDesenvolvimento() {
  return(
    <SafeAreaView style={styles.container}>
      <Image source={require('../images/notFound.png')} style={styles.image}/>

      <Text style={styles.aviso}>Tela em desenvolvimento</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },

  image: {
    width: 400,
    height: 400,
    objectFit: 'contain'
  },

  aviso: {
    fontSize: 24,
    fontFamily: 'Inter_600SemiBold',
    color: '#009BFF'
  }
})
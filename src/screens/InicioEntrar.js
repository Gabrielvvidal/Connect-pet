import * as React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet } from 'react-native'

import HeaderEntrar from '../components/HeaderEntrar'

export default function InicioEntrar(){
  return(
    <SafeAreaView style={styles.container}>
      <HeaderEntrar/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8'
  }
})
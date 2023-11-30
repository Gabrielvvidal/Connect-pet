import * as React from 'react'
import { Text, View , StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Inicio() {
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.headerBackground}>
      </View>
      <View style={styles.headerElipse}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },

  headerBackground: {
    height: 120,
    backgroundColor: '#009BFF',
    zIndex: 10,
    flexDirection: 'row'
  },

  headerElipse: {
    borderRadius: 50,
    backgroundColor: '#009bff',
    width: 100,
    height: 100,
    transform: [{ scaleX: 7 }],
    alignSelf: 'center',
    marginTop: -63,
    borderWidth: 10,
    borderColor: '#00D1FF'
  },

  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    paddingTop: 30
  },
})
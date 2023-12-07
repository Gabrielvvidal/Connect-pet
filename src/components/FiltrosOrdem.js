import * as React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

export default function FiltrosOrdem(){
  return(
    <View style={styles.ordemContainer}>
      <Pressable
        style={styles.ordemBtn}
      >
        <Text style={styles.ordemText}>Ordenar</Text>

        <MaterialIcons name="keyboard-arrow-down" size={20} color="#000000" />
      </Pressable>

      <Pressable
        style={styles.ordemBtn}
      >
        <Text style={styles.ordemText}>Distância</Text>

        <MaterialIcons name="keyboard-arrow-down" size={20} color="#000000" />
      </Pressable>

      <Pressable
        style={styles.ordemBtn}
      >
        <Text style={styles.ordemText}>Leva e traz</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  ordemContainer: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10
  },

  ordemBtn: {
    width: 85,
    height: 25,
    backgroundColor: '#F8F8F8',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginRight: 10
  },
  
  ordemText: {
    fontSize: 12,
    fontFamily: 'Inter_400Regular',
    alignSelf: 'center'
  }
})
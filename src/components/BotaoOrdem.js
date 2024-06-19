import * as React from 'react'
import { Text, Pressable, StyleSheet } from 'react-native'

export default function FiltrosOrdem({children, nomeFiltro}){
  return(
    <Pressable
      style={styles.ordemBtn}
    >
      <Text style={styles.ordemText}>{nomeFiltro}</Text>

      {children}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  ordemBtn: {
    width: 85,
    height: 25,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginRight: 10,
    paddingLeft: 5,
    shadowColor: '#000000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 1,
    zIndex: 99
  },
  
  ordemText: {
    fontSize: 12,
    fontFamily: 'Inter_400Regular',
    alignSelf: 'center'
  }
})
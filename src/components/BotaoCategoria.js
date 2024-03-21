import * as React from "react"
import { useFilterContext } from "../hooks/useFilterContext"
import { Text, StyleSheet, Image, Pressable } from "react-native"

export default function BotaoCategoria({nomeCat, textoCat, imgCat}) {
  const {categoria, setCategoria} = useFilterContext()

  return(
    <Pressable onPress={() => setCategoria(nomeCat)}>
        <Image
          style={styles.filterImage} 
          source={imgCat}
        />

        <Text style={categoria === nomeCat ? styles.filterTextActive : styles.filterText}>{textoCat}</Text>
      </Pressable>
  )
}

const styles = StyleSheet.create({
  filterImage: {
    width: 60,
    height: 60,
    borderRadius: 20,
    marginBottom: 5,
    alignSelf: 'center'
  },

  filterText: {
    fontSize: 12,
    fontFamily: 'Inter_700Bold',
    textAlign: 'center'
  },

  filterTextActive: {
    fontSize: 12,
    fontFamily: 'Inter_700Bold',
    textAlign: 'center',
    color: "#009BFF"
  }
})
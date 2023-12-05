import * as React from "react"
import { Text, View, StyleSheet, Image, Pressable } from "react-native"

export default function FiltroLoja() {
  return(
    <View style={styles.filtroContainer}>
      <Pressable style={styles.filterBtn}>
        <Image
          style={styles.filterImage} 
          source={require('../images/petshop.png')}
        />

        <Text style={styles.filterText}>Petshops</Text>
      </Pressable>

      <Pressable style={styles.filterBtn}>
        <Image 
          style={styles.filterImage} 
          source={require('../images/veterinaria.png')}
        />

        <Text style={styles.filterText}>Veterinárias</Text>
      </Pressable>

      <Pressable style={styles.filterBtn}>
        <Image
          style={styles.filterImage}  
          source={require('../images/cuidadores.png')}
        />

        <Text style={styles.filterText}>Cuidadores</Text>
      </Pressable>

      <Pressable style={styles.filterBtn}>
        <Image
          style={styles.filterImage}  
          source={require('../images/hoteis.png')}
        />

        <Text style={styles.filterText}>Hotéis</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  filtroContainer: {
    height: 120,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 25
  },

  filterImage: {
    width: 60,
    height: 60,
    borderRadius: 20,
    alignSelf: 'center'
  },

  filterText: {
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center'
  }
})
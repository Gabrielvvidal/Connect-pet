import * as React from "react"
import { Text, View, StyleSheet, Image, Pressable } from "react-native"

export default function FiltroLoja() {
  return(
    <View style={styles.filtroContainer}>
      <Pressable>
        <Image
          style={styles.filterImage} 
          source={require('../images/petshop.png')}
        />

        <Text style={styles.filterText}>Petshops</Text>
      </Pressable>

      <Pressable>
        <Image 
          style={styles.filterImage} 
          source={require('../images/veterinaria.png')}
        />

        <Text style={styles.filterText}>Veterinárias</Text>
      </Pressable>

      <Pressable>
        <Image
          style={styles.filterImage}  
          source={require('../images/cuidadores.png')}
        />

        <Text style={styles.filterText}>Cuidadores</Text>
      </Pressable>

      <Pressable>
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
    height: 135,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#000000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity:  0.5,
    shadowRadius: 3,
    elevation: 4,
    overflow: 'hidden',
    marginTop: -20,
    paddingTop: 20,
    gap: 20
  },

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
  }
})
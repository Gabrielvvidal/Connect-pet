import { View, TextInput, StyleSheet } from "react-native";
import LupaIcon from "../../assets/svg/lupa.svg"

export default function BarraPesquisa() {
  return(
    <View style={styles.searchContainer}>
      <LupaIcon/>

      <TextInput
        style={styles.searchInput}
        placeholder="Pesquise..."
        placeholderTextColor= "#000000"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  searchContainer:{
    backgroundColor: '#ffffff',
    borderRadius: 20,
    flexDirection: 'row',
    height: 30,
    alignItems: 'center',
    marginTop: 30,
    marginLeft: 13,
    marginRight: 13,
    paddingLeft: 10
  },

  searchInput: {
    width: 190,
    height: 30,
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    paddingLeft: 5,
    paddingRight: 10
  }
})
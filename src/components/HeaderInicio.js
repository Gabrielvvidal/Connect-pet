import { Text, View, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import BarraPesquisa from "./BarraPesquisa";
import HeaderBtn from "./HeaderBtn"

import MenuIcon from "../../assets/svg/menu.svg"
import CarrinhoIcon from "../../assets/svg/carrinho.svg"

export default function HeaderInicio() {
  const navigation = useNavigation()

  return(
    <>
      <View style={styles.headerBackground}>
        <View style={styles.rowCorrection}>
          <HeaderBtn funcPress={() => navigation.openDrawer()}>
            <MenuIcon/>
          </HeaderBtn>

          <BarraPesquisa/>

          <HeaderBtn>
            <CarrinhoIcon/>
          </HeaderBtn>
        </View>

        <View style={styles.addressContainer}>
          <Text style={styles.addressText}>
            Estr. Washington Luís, 1596
          </Text>

          <MaterialIcons name="keyboard-arrow-down" size={25} color="#ffffff" />
        </View>
      </View>
      <View style={styles.headerElipse}/>
    </>
  )
}

const styles = StyleSheet.create({
  headerBackground: {
    height: 95,
    backgroundColor: '#009BFF',
    zIndex: 10,
    alignItems: "center"
  },

  headerElipse: {
    borderRadius: 50,
    backgroundColor: '#009bff',
    width: 110,
    height: 95,
    transform: [{ scaleX: 7 }],
    alignSelf: 'center',
    marginTop: -63,
    borderWidth: 10,
    borderColor: '#00D1FF',
    zIndex: 9
  },

  rowCorrection: {
    flexDirection: 'row'
  },

  addressContainer: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5
  },

  addressText: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: '#ffffff'
  }
})
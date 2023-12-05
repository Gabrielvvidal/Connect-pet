import { Text, View, Pressable, TextInput, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function HeaderInicio() {
  const navigation = useNavigation()

  return(
    <>
      <View style={styles.headerBackground}>
        <View style={styles.rowCorrection}>
          <Pressable 
            style={styles.Btn}
            onPress={() => navigation.openDrawer()}
          >
            <Feather name="menu" size={32} color="black" />
          </Pressable>

          <View style={styles.searchContainer}>
            <Feather name="search" size={25} color="black" />
            <TextInput
              style={styles.searchInput}
              placeholder="Pesquise..."
              placeholderTextColor= "#000000"
            />
          </View>

          <Pressable 
            style={styles.Btn}
          >
            <Ionicons name="cart-outline" size={32} color="black" />
          </Pressable>
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
    width: 100,
    height: 100,
    transform: [{ scaleX: 7 }],
    alignSelf: 'center',
    marginTop: -63,
    borderWidth: 10,
    borderColor: '#00D1FF'
  },

  Btn: {
    backgroundColor: '#ffffff',
    width: 50,
    height: 50,
    borderRadius: 20,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },

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
    paddingLeft: 5,
    paddingRight: 10
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
    fontSize: 15,
    color: '#ffffff'
  }
})
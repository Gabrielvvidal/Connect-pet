import { Text, View, StyleSheet } from "react-native";

export default function HeaderInicio() {
  return(
    <>
      <View style={styles.headerBackground}>
          <Text style={styles.headerText}>Testando</Text>
        </View>
      <View style={styles.headerElipse}/>
    </>
  )
}

const styles = StyleSheet.create({
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
    color: '#000000',
    textAlign: 'center',
    paddingTop: 30
  }
})
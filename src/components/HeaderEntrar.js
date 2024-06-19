import { Text, View, StyleSheet } from "react-native";

export default function HeaderEntrar() {
  return(
    <>
      <View style={styles.headerBackground}/>

      <View style={styles.headerElipse}/>
    </>
  )
}

const styles = StyleSheet.create({
  headerBackground: {
    height: 230,
    backgroundColor: '#009BFF',
    zIndex: 10,
    alignItems: "center"
  },

  headerElipse: {
    borderRadius: 50,
    backgroundColor: '#009bff',
    width: 115,
    height: 100,
    transform: [{ scaleX: 5 }],
    alignSelf: 'center',
    marginTop: -63,
    borderWidth: 10,
    borderColor: '#00D1FF',
    zIndex: 9
  }
})
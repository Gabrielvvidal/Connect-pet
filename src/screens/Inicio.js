import { Text, View , StyleSheet } from "react-native";

export default function Inicio() {
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Teste</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff'
  },

  header: {
    marginTop: 50,
    marginHorizontal: 10 
  },

  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginTop: 35
  }
})
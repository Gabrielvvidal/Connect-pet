import { Pressable, StyleSheet } from "react-native";

export default function HeaderBtn({children, funcPress}) {
  return(
    <Pressable 
      style={styles.Btn}
      onPress={funcPress}
    >
      {children}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  Btn: {
    backgroundColor: '#ffffff',
    width: 50,
    height: 50,
    borderRadius: 20,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
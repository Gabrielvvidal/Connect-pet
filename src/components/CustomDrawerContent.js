import { DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import { View, Text, SafeAreaView, StyleSheet, Pressable } from 'react-native'
import { Feather } from '@expo/vector-icons';

export default function CustomDrawerContent(props){
  return(
    <SafeAreaView style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.headerBackground}>
          <View style={styles.avatarImg}>
            <Feather name="user" size={40} color="#000000" />
          </View>

          <View>
            <Text style={styles.nomeUser}>Visitante</Text>

            <Text style={styles.emailUser}>Faça login ou crie uma conta</Text>
          </View>
        </View>
        <View style={styles.headerElipse}/>

        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  headerBackground: {
    height: 80,
    backgroundColor: '#009BFF',
    marginTop: -4,
    zIndex: 10,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 10
  },

  headerElipse: {
    borderRadius: 50,
    backgroundColor: '#009bff',
    width: 100,
    height: 100,
    transform: [{ scaleX: 7 }],
    alignSelf: 'center',
    marginTop: -80,
    borderWidth: 10,
    borderColor: '#00D1FF',
    zIndex: 9
  },

  avatarImg: {
    width: 60,
    height: 60,
    backgroundColor: "#ffffff",
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  },

  nomeUser: {
    fontFamily: 'Inter_700Bold',
    fontSize: 18,
    color: '#FFFFFF'
  },

  emailUser: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: '#434343'
  },

  itemDrawer: {
    flexDirection: 'row',
    backgroundColor: '#ff0000',
    height: 50,
    alignItems: 'center',
  },

  textDrawerItem: {
    fontFamily: 'Inter_600SemiBold'
  }
})
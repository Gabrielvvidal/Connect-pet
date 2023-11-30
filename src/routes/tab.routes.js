import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Inicio from "../screens/Inicio"
import Pedidos from "../screens/Pedidos"
import Favoritos from "../screens/Favoritos"
import Perfil from "../screens/Perfil"

import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return(
    <Tab.Navigator screenOptions={{ 
      headerShown: false,
      tabBarStyle: {
        backgroundColor: '#ffffff',
        borderTopWidth: 0,
        shadowColor:'transparent',
        paddingBottom: 6.5,
        paddingTop: 6.5,
        height: 70,
        columnGap: 35
      },
      tabBarLabelStyle: {
        fontSize: 12,
      },
      tabBarActiveTintColor: '#009bff',
      tabBarInactiveTintColor: '#000000'
    }}>
      <Tab.Screen 
        name="Início" 
        component={Inicio}
        options={{
          tabBarIcon: ({focused}) => {
            return <Feather name="home" size={24} color={focused ? "#009bff" : "#000000"} />
          }
        }}
      />

      <Tab.Screen 
        name="Pedidos" 
        component={Pedidos}
        options={{
          tabBarIcon: ({focused}) => {
            return <Feather name="shopping-bag" size={24} color={focused ? "#009bff" : "#000000"} />
          }
        }}
      />

      <Tab.Screen 
        name="Favoritos" 
        component={Favoritos}
        options={{
          tabBarIcon: ({focused}) => {
            return <Feather name="heart" size={24} color={focused ? "#009bff" : "#000000"} />
          }
        }}
      />

      <Tab.Screen 
        name="Perfil" 
        component={Perfil}
        options={{
          tabBarIcon: ({focused}) => {
            return <Feather name="user" size={24} color={focused ? "#009bff" : "#000000"} />
          }
        }}
      />
    </Tab.Navigator>
  )
}
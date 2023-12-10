import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Inicio from "../screens/Inicio"
import Pedidos from "../screens/Pedidos"
import Favoritos from "../screens/Favoritos"
import Perfil from "../screens/Perfil"

import InicioIcon from "../../assets/svg/inicio.svg"
import PedidosIcon from "../../assets/svg/pedidos.svg"
import FavoritosIcon from "../../assets/svg/favoritos.svg"
import PerfilIcon from "../../assets/svg/perfil.svg"

import InicioBlueIcon from "../../assets/svg/inicioBlue.svg"
import PedidosBlueIcon from "../../assets/svg/pedidosBlue.svg"
import FavoritosBlueIcon from "../../assets/svg/favoritosBlue.svg"
import PerfilBlueIcon from "../../assets/svg/perfilBlue.svg"

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return(
    <Tab.Navigator screenOptions={{ 
      headerShown: false,
      tabBarStyle: {
        backgroundColor: '#ffffff',
        borderTopWidth: 0,
        paddingBottom: 6.5,
        paddingTop: 6.5,
        paddingLeft: 30,
        paddingRight: 30,
        height: 70
      },
      tabBarLabelStyle: {
        fontSize: 12,
        fontFamily: 'Inter_400Regular'
      },
      tabBarActiveTintColor: '#009bff',
      tabBarInactiveTintColor: '#000000',
      tabBarHideOnKeyboard: true
    }}>
      <Tab.Screen 
        name="Início" 
        component={Inicio}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? <InicioBlueIcon /> : <InicioIcon />
          }
        }}
      />

      <Tab.Screen 
        name="Pedidos" 
        component={Pedidos}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? <PedidosBlueIcon /> : <PedidosIcon />
          }
        }}
      />

      <Tab.Screen 
        name="Favoritos" 
        component={Favoritos}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? <FavoritosBlueIcon /> : <FavoritosIcon />
          }
        }}
      />

      <Tab.Screen 
        name="Perfil" 
        component={Perfil}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? <PerfilBlueIcon /> : <PerfilIcon />
          }
        }}
      />
    </Tab.Navigator>
  )
}
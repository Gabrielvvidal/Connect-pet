import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Inicio from "../screens/Inicio"
import Pedidos from "../screens/Pedidos"
import Favoritos from "../screens/Favoritos"
import Perfil from "../screens/Perfil"

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return(
    <Tab.Navigator screenOptions={{ headerShown: false}}>
      <Tab.Screen name="Início" component={Inicio}/>
      <Tab.Screen name="Pedidos" component={Pedidos}/>
      <Tab.Screen name="Favoritos" component={Favoritos}/>
      <Tab.Screen name="Perfil" component={Perfil}/>
    </Tab.Navigator>
  )
}
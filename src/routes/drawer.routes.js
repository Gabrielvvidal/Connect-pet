import { createDrawerNavigator } from "@react-navigation/drawer";

import TabRoutes from "./tab.routes";

import FormasLogin from "../screens/FormasLogin";
import CustomDrawerContent from "../components/CustomDrawerContent";
import Inicio from "../screens/Inicio";

import EntrarIcon from "../../assets/svg/entrarIcon.svg"
import AjudaIcon from "../../assets/svg/ajuda.svg"
import SobreIcon from "../../assets/svg/sobre.svg"

const Drawer = createDrawerNavigator()

export default function DrawerRoutes(){
  return(
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />} 
      screenOptions={{ 
        headerShown: false,
        drawerLabelStyle: {
          color: '#000000',
          fontFamily: 'Inter_600SemiBold',
          fontSize: 16,
          marginLeft: -20
        },
        drawerActiveBackgroundColor: "transparent"
      }}
    >
      <Drawer.Screen
        name="InicioDrawer"
        component={TabRoutes}
        options={{
          drawerItemStyle: {
            display: "none"
          }
        }}
      />

      <Drawer.Screen
        name="EntrarDrawer"
        component={FormasLogin}
        options={{
          drawerLabel: 'Entrar',
          drawerIcon: () => <EntrarIcon style={{marginLeft: 6}}/>,
          drawerItemStyle: {
            borderBottomColor: "#CFCFCF",
            borderBottomWidth: 1,
            borderRadius: 0,
            width: '100%',
            marginLeft: 0
          }
        }}
      />

      <Drawer.Screen
        name="AjudaDrawer"
        component={Inicio}
        options={{
          drawerLabel: 'Ajuda',
          drawerIcon: () => <AjudaIcon style={{marginLeft: 5}}/>,
          drawerItemStyle: {
            marginTop: -5,
            borderRadius: 0,
            width: '100%',
            marginLeft: 0
          }
        }}
      />

      <Drawer.Screen
        name="SobreDrawer"
        component={Inicio}
        options={{
          drawerLabel: 'Sobre',
          drawerIcon: () => <SobreIcon style={{marginLeft: 5}}/>,
          drawerItemStyle: {
            marginTop: -15,
            borderRadius: 0,
            width: '100%',
            marginLeft: 0
          }
        }}
      />
    </Drawer.Navigator>
  )
}
import { createDrawerNavigator } from "@react-navigation/drawer";

import TabRoutes from "./tab.routes";

const Drawer = createDrawerNavigator()

export default function DrawerRoutes(){
  return(
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen
        name="EntrarMenu"
        component={TabRoutes}
        options={{
          drawerLabel: 'Entrar'
        }}
      />
    </Drawer.Navigator>
  )
}
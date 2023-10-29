import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Icon } from "@rneui/themed";
import { StyleSheet } from "react-native";
import RoutesHome from "../routes/Home.routes";
import Denuncia from "../views/Denuncia";
import Encuesta from "../views/Encuesta";
import User from "../views/User";

const Tab = createMaterialBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator
      tabBarActivateBackgroundColor="#fff"
      activateColor="#000"
      inactiveColor="#95a5a6"
      barStyle={styles.navigationBar}
    >
      <Tab.Screen
        name="Incio"
        component={RoutesHome}
        options={{
          tabBarLabel: "Inicio",
          tabBarIcon: () => <Icon name="home" size={24} color="#000" />,
        }}
      />
      <Tab.Screen
        name="Encuesta"
        component={Encuesta}
        options={{
          tabBarLabel: "Encuesta",
          tabBarIcon: () => <Icon name="poll" color="#000" size={24} />,
        }}
      />
      <Tab.Screen
        name="Denuncia"
        component={Denuncia}
        options={{
          tabBarLabel: "Denuncia",
          tabBarIcon: () => <Icon name="gavel" color="#000" size={24} />,
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarLabel: "Usuario",
          tabBarIcon: () => (
            <Icon name="user" color="#000" size={24} type="font-awesome" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  navigationBar: {
    backgroundColor: "#fff",
    borderTopWidth: 0.5,
    borderTopColor: "#7f7777",
  },
});

export default Navigation;

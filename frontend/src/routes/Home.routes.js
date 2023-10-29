import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../views/Home";
import EventsScreen from "../views/EventsScreen";
import InformationScreen from "../views/InformationScreen";

const Stack = createNativeStackNavigator();

const RoutesHome = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Information"
        component={InformationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Events"
        component={EventsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RoutesHome;

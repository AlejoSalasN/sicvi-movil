import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Signin from "../views/Signin";
import Signup from "../views/Signup";
import SignupNext from "../views/SignupNext";
import ForgetPassword from "../views/ForgetPassword";
import Navigation from "./Routes";

const Stack = createNativeStackNavigator();

const RoutesSesion = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signin">
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="All"
          component={Navigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignupNext"
          component={SignupNext}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Forget"
          component={ForgetPassword}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RoutesSesion;

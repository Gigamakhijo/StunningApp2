import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LoginScreen, SignUpScreen, SetProfileScreen } from "../screens";
import { TabNavigator } from "./TabNavigator";

export function AppStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
      initialRouteName="Login"
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="SetProfile" component={SetProfileScreen} />
      <Stack.Screen name="Tab" component={TabNavigator} />
    </Stack.Navigator>
  );
}

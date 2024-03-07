import Ract from "react"
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { 
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  NavigatorScreenParams,
 } from "@react-navigation/native"
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import { useColorScheme } from "react-native";
import { LoginScreen } from "./app/screens/LoginScreen";
import { SignInScreen } from "./app/screens/SignInScreen";

export type AppStackParamList = {
  Login: undefined
  SignIn: undefined
}

export type AppStackScreenProps<T extends keyof AppStackParamList> = NativeStackScreenProps<AppStackParamList, T>

const Stack = createNativeStackNavigator<AppStackParamList>()

function AppStack() {
  // const {
  //   authenticationStore: { isAuthenticated },
  // }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
      initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
      </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer    >
      <AppStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

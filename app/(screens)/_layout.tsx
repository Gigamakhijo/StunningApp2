import { Redirect, Stack } from "expo-router";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

import { useAuth0 } from "react-native-auth0";
import HeaderComponent from "@/components/HeaderComponent";
import MainHeader from "@/components/MainHeader";
import TodoScreen from "./todo";
export default function Layout() {
  const { clearSession, clearCredentials, user, isLoading } = useAuth0();

  const loggedIn = user !== undefined && user !== null;

  const onLogout = async () => {
    try {
      await clearSession();
      await clearCredentials();
    } catch (e) {
      console.log("Log out cancelled");
    }
  };

  if (isLoading) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

  if (!loggedIn) {
    return <Redirect href="/login" />;
  } else {
  }


  return(
    <Stack 
      screenOptions={{header: MainHeader}}
    >
    <Stack.Screen name="todo" options={{header: HeaderComponent}}/>

    </Stack>
  );
  
}

import { Redirect, Stack } from "expo-router";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

import { useAuth0 } from "react-native-auth0";
import HeaderComponent from "@/components/HeaderComponent";
import MainHeader from "@/components/MainHeader";
import TodoScreen from "./todo";
import colors from "@/constants/Colors";
import { Header } from "react-native/Libraries/NewAppScreen";

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
      initialRouteName="index"
      screenOptions={{
        header: MainHeader,
        headerStyle:{backgroundColor: colors.lightgray.background}
      }}
    >
    <Stack.Screen name="schedule" options={{header: HeaderComponent}}/>
    <Stack.Screen name="todo" options={{header: HeaderComponent}}/>
    {/* <Stack.Screen name="Comment" options={{header:HeaderComponent}}/> */}
    {/* <Stack.Screen name="challenge" options={{header: HeaderComponent}}/> */}
    </Stack>
  );
  
}

import { Redirect, Stack } from "expo-router";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

import { useAuth0 } from "react-native-auth0";

export default function Layout() {
  const { clearSession, user, isLoading } = useAuth0();

  const loggedIn = user !== undefined && user !== null;

  const onLogout = async () => {
    try {
      await clearSession();
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

  return <Stack />;
}

import { Redirect, Stack, Tabs } from "expo-router";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

import { useAuth0 } from "react-native-auth0";

export default function Layout() {
  const { clearSession, user, isLoading } = useAuth0();

  const loggedIn = user !== undefined && user !== null;

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

  return (
    <Tabs
      screenOptions={{ headerShown: false, tabBarActiveTintColor: "#408DFE" }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="schedule"
        options={{
          title: "일정",
        }}
      />
      <Tabs.Screen
        name="comment_challenge"
        options={{
          title: "cc",
        }}
      />
    </Tabs>
  );
}

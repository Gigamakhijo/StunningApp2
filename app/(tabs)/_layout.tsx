import { Redirect, Stack, Tabs } from "expo-router";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

import { useAuth0 } from "react-native-auth0";
import HeaderComponent from "@/components/HeaderComponent";
import MainHeader from "@/components/MainHeader";
import TodoScreen from "../(screens)/todo"
import colors from "@/constants/Colors";
import { Header } from "react-native/Libraries/NewAppScreen";
import { Ionicons } from "@expo/vector-icons";

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

  return (
    <Tabs
      screenOptions={{ headerShown: false, tabBarActiveTintColor: "#408DFE" }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarShowLabel: false,
          tabBarIcon: () => <Ionicons name="checkbox-outline" size={25} color="#000000" />
        }}
      
      />
      <Tabs.Screen
        name="schedule"
        options={{
          title: "일정",
          tabBarShowLabel: false,
          tabBarIcon: () => <Ionicons name="calendar-clear-outline" size={25} color="#000000" />
        }}
      />
      <Tabs.Screen
        name="comment_challenge"
        options={{
          title: "cc",
          tabBarShowLabel: false,
          tabBarIcon: () => <Ionicons name="create-outline" size={25} color="#000000" />
        }}
      />
    </Tabs>
  );
}

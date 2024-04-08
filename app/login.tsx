import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { Redirect } from "expo-router";

import LoginButton from "@/components/LoginButton";
import Logo from "@/components/Logo";

import { useAuth0 } from "react-native-auth0";

export default function LoginScreen() {
  const { authorize, user } = useAuth0();

  const onLogin = async () => {
    await authorize();
  };

  const loggedIn = user !== undefined && user !== null;

  if (loggedIn) {
    return <Redirect href="/(screens)" />;
  } else {
    return (
      <>
        <Logo />

        <LoginButton onPress={onLogin} />
      </>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

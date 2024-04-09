import { StyleSheet } from "react-native";
import { router } from "expo-router";

import LoginButton from "@/components/LoginButton";
import Logo from "@/components/Logo";

import { useAuth0 } from "react-native-auth0";

export default function LoginScreen() {
  const { authorize, user } = useAuth0();

  const onLogin = async () => {
    await authorize();

    // doesn't run if authentication fails
    router.replace("/");
  };

  return (
    <>
      <Logo />

      <LoginButton onPress={onLogin} />
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

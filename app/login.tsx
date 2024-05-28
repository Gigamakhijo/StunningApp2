import { StyleSheet } from "react-native";
import { router } from "expo-router";

import LoginButton from "@/components/LoginButton";
import Logo from "@/components/Logo";

import { useAuth0 } from "react-native-auth0";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const { authorize, user } = useAuth0();

  const onLogin = async () => {
    await authorize();

    // doesn't run if authentication fails
    router.replace("/(tabs)");
  };

  return (
    <>
      <SafeAreaView style={styles.contianer}>
        <Logo />

        <LoginButton onPress={onLogin} />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    backgroundColor: "#F7F8FC",
  },
});

import { StyleSheet } from "react-native";
import { router } from "expo-router";
import CryptoJS from "crypto-js";
import LoginButton from "@/components/LoginButton";
import Logo from "@/components/Logo";
import { generateVerifier, generatePKCE, getCode, getToken } from "./service/api/auth";
import { useAuth0 } from "react-native-auth0";
import { SafeAreaView } from "react-native-safe-area-context";
import base64 from 'base-64';
export default function LoginScreen() {
  const { authorize, user } = useAuth0();

  
  const onLogin = async () => {
    const credentials = await authorize();
    if(credentials){
      const verifier = await generateVerifier();
      const challenge = await generatePKCE(verifier);

      const result = await getCode(challenge);
      const token = await getToken(result.code, verifier, challenge);
      const access_token = base64.decode(token.access_token)
      console.log(access_token)
      router.replace('/(tabs)/')
    }
    // doesn't run if authentication fails
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

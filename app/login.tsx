import { StyleSheet } from "react-native";
import { router } from "expo-router";
import LoginButton from "@/components/LoginButton";
import Logo from "@/components/Logo";
import { useAuth0 } from "react-native-auth0";
import { SafeAreaView } from "react-native-safe-area-context";
import { generateVerifier, generateChallenge, authenticate, getAuthURL } from "./service/api/auth";
import * as AuthSession from 'expo-auth-session';

const auth0ClientId = "l6zVUuSOjmexJPFTsg38FbcH5ov1slxl";
const domain = "https://dev-w0c3tnyi46mfgb5q.us.auth0.com"
const redirectUri = "com.stunning.auth0://dev-w0c3tnyi46mfgb5q.us.auth0.com/ios/com.stunning/callback"
const authorizationEndpoint = `${domain}/authorize`;
const tokenEndpoint = `${domain}/oauth/token`;

// WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {
  const { authorize, user } = useAuth0();
  // const [request, response, promptAsync] = useAuthRequest({ clientId, scopes, redirectUri, }, discovery);
  const [request, result, promptAsync] = AuthSession.useAuthRequest(
    {     
      responseType: "code",   
      clientId: auth0ClientId,
      redirectUri,
      scopes: [],      
    },
    { authorizationEndpoint }
);

  const onLogin = async () => {
    const authUrl = await getAuthURL;
    console.log(authUrl)
    // const credentials = await authorize();
    // if(credentials){
    //   router.replace('/(tabs)/')
    // }
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

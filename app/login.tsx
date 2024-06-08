import { StyleSheet, Alert, Linking } from "react-native";
import { router } from "expo-router";
import LoginButton from "@/components/LoginButton";
import Logo from "@/components/Logo";
// import { useAuth0 } from "react-native-auth0";
import { SafeAreaView } from "react-native-safe-area-context";
import { generateVerifier, generateChallenge, authenticate, getAuthURL, extractCodeFromUrl, getToken } from "./service/api/auth";
import * as AuthSession from 'expo-auth-session';
import { useState, useEffect, useCallback } from 'react'
import { v4 as uuidv4 } from 'uuid';
import * as ExpoCrypto from 'expo-crypto';
import { useAuth0 } from "react-native-auth0";
import Auth from "react-native-auth0/lib/typescript/src/auth";
import { openAuthSessionAsync} from "expo-web-browser";

const auth0ClientId = "l6zVUuSOjmexJPFTsg38FbcH5ov1slxl";
const domain = "dev-w0c3tnyi46mfgb5q.us.auth0.com"
const redirectUri = AuthSession.makeRedirectUri({native: "com.stunning.auth0://dev-w0c3tnyi46mfgb5q.us.auth0.com/ios/com.stunning/callback"})
const authorizationEndpoint = `${domain}/authorize`;

function generateRandomString(length: number): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// "xyzABC123"과 같은 랜덤한 문자열 생성

// WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState<string|null>(null);
  const scopeValue = encodeURIComponent("read:todos write:todos openid");
  const { authorize, user } = useAuth0();

      
  const loginWithAuth0 = async () => {
      const stateValue = generateRandomString(8);
      console.log('Generated state value:', stateValue);
      const codeVerifier = await generateVerifier();
      const codeChallenge = await generateChallenge(codeVerifier);

    setLoading(true);

    try {
      console.log("1")
      const result = await fetch(`https://dev-w0c3tnyi46mfgb5q.us.auth0.com/authorize?` +
      `response_type=code&` +
      `code_challenge=${codeChallenge}&` +
      `code_challenge_method=S256&` +
      `client_id=${auth0ClientId}&` +
      `redirect_uri=${redirectUri}&` +
      `scope=${scopeValue}&` +
      `audience=com.stunning.todos&` +
      `state=${stateValue}`
    );
      console.log(result)
      console.log("2")
      console.log(result.status)
      if(result.status === 200){
        const authResult = await openAuthSessionAsync(`https://dev-w0c3tnyi46mfgb5q.us.auth0.com/authorize?` +
        `response_type=code&` +
        `code_challenge=${codeChallenge}&` +
        `code_challenge_method=S256&` +
        `client_id=${auth0ClientId}&` +
        `redirect_uri=${redirectUri}&` +
        `scope=${scopeValue}&` +
        `audience=com.stunning.todos&` +
        `state=${stateValue}`, "myapp:///")
        console.log(authResult)
        if(authResult.type==="success" && authResult.url){
          const authorization_code = extractCodeFromUrl(authResult.url)
          setCode(authorization_code)
          if(authorization_code){
            const credentials = await getToken(redirectUri, codeVerifier, authorization_code)
            console.log(credentials)
          }
        }
        console.log("4")    
        router.replace('/(tabs)/')   
      }
      
    } catch (error: any) {
      console.error('Error in login:', error);
      Alert.alert('Error', `Login failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // const onLogin = async () => {
  //   const results = await authorize()
  //   router.replace('/(tabs)')
  // };


  return (
    <>
      <SafeAreaView style={styles.contianer}>
        <Logo />

        <LoginButton onPress={loginWithAuth0} />
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

import { StyleSheet, Alert } from "react-native";
import { router } from "expo-router";
import LoginButton from "@/components/LoginButton";
import Logo from "@/components/Logo";
import { useAuth0 } from "react-native-auth0";
import { SafeAreaView } from "react-native-safe-area-context";
import { generateVerifier, generateChallenge, authenticate, getAuthURL } from "./service/api/auth";
import * as AuthSession from 'expo-auth-session';
import { useState, useEffect } from "react";
import axios from "axios";
import * as qs from 'qs'; // URL 인코딩을 위한 라이브러리
import { v4 as uuidv4 } from 'uuid';
import * as ExpoCrypto from 'expo-crypto';
import { red } from "react-native-reanimated/lib/typescript/reanimated2/Colors";
const auth0ClientId = "l6zVUuSOjmexJPFTsg38FbcH5ov1slxl";
const domain = "dev-w0c3tnyi46mfgb5q.us.auth0.com"
const redirectUri = "com.stunning.auth0://dev-w0c3tnyi46mfgb5q.us.auth0.com/ios/com.stunning/callback"
const authorizationEndpoint = `${domain}/authorize`;
const tokenEndpoint = `${domain}/oauth/token`;

const generateState = async () => {
  try {
    // 16 바이트의 랜덤 값을 생성합니다.
    const randomBytes = await ExpoCrypto.getRandomBytesAsync(16);
    // 생성된 랜덤 바이트를 UUID로 변환합니다.
    const uuid = uuidv4({ random: randomBytes });
    return uuid;
  } catch (error) {
    console.error('Error generating state:', error);
    // 오류가 발생한 경우 기본값으로 현재 시간을 기반으로 하는 값을 반환합니다.
    return Date.now().toString();
  }
};

// generateState 함수를 호출하여 state 값을 생성합니다.
const state = generateState();

const useDiscovery = (domain: string) => {
  const [discovery, setDiscovery] = useState<AuthSession.DiscoveryDocument | null>(null);

  useEffect(() => {
    const fetchDiscovery = async () => {
      const response = await fetch(`https://${domain}/authorize`);
      const discoveryDocument = await response.json();
      setDiscovery(discoveryDocument);
    };

    fetchDiscovery();
  }, [domain]);

  return discovery;
};



// WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {
  const discovery = useDiscovery(`https://${domain}`);
  const [loading, setLoading] = useState(false);

  
  const loginWithAuth0 = async () => {
    // if (!discovery) {
    //   console.error('Discovery document not loaded');
    //   return;
    // }

    setLoading(true);

    try {
      function generateRandomString(length: number): string {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
      }
      
      // "xyzABC123"과 같은 랜덤한 문자열 생성
      const stateValue = generateRandomString(8);
      console.log('Generated state value:', stateValue);
      const codeVerifier = await generateVerifier();
      const codeChallenge = await generateChallenge(codeVerifier);
      console.log("1")
      const authorizationRequestConfig = {
        response_type: 'code',
        clientId: auth0ClientId,
        code_challenge: codeChallenge,
        code_challenge_method:'S256',
        redirectUri: redirectUri,
        scopes: ['profile'],
        audience: 'com.stunning.todos',
        state: stateValue,
      };
      const request = new AuthSession.AuthRequest(authorizationRequestConfig);
      console.log("2")
      const result = await request.promptAsync({authorizationEndpoint: '/authorize?'+
      `response_type=code&` +
      `code_challenge=${codeChallenge}&` +
      `code_challenge_method=${AuthSession.CodeChallengeMethod.S256}6&` +
      `client_id=${auth0ClientId}&` +
      `redirect_uri=${redirectUri}&` +
      `scope=profile&` +
      `audience=com.stunning.todos&` +
      `state=${stateValue}`});
      console.log("3")
      if (result.type === 'success') {
        const authCode = result.params.code;
        console.log('Auth Code:', authCode);
        Alert.alert('Success', `Auth Code: ${authCode}`);

        // 토큰을 교환하기 위해 Auth0 토큰 엔드포인트에 요청
        const tokenResponse = await axios.post(`https://${domain}/oauth/token`, qs.stringify({
          grant_type: 'authorization_code',
          client_id: auth0ClientId,
          code_verifier: codeVerifier,
          code: authCode,
          redirect_uri: redirectUri,
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        });

        console.log('Token Response:', tokenResponse.data);
      } else {
        console.error('Authentication error:', result);
        Alert.alert('Error', 'Authentication failed');
      }
    } catch (error: any) {
      console.error('Error in login:', error);
      Alert.alert('Error', `Login failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };


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

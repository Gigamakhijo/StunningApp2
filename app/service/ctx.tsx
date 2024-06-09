import React, {useState} from 'react';
import { Alert } from 'react-native';
import { useStorageState } from './useStorageState';
import authStore from '../store/authStore';
import * as AuthSession from 'expo-auth-session';
import { generateChallenge, generateVerifier, extractCodeFromUrl, getToken } from './api/auth';
import { openAuthSessionAsync } from 'expo-web-browser';
import { router } from 'expo-router';

const auth0ClientId = "l6zVUuSOjmexJPFTsg38FbcH5ov1slxl";
const domain = "dev-w0c3tnyi46mfgb5q.us.auth0.com"
const redirectUri = AuthSession.makeRedirectUri({native: "com.stunning.auth0://dev-w0c3tnyi46mfgb5q.us.auth0.com/ios/com.stunning/callback"})
const scopeValue = encodeURIComponent("read:todos write:todos openid");

function generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

const AuthContext = React.createContext<{
  LogIn: () => void;
  LogOut: () => void;
  session?: string | null;
  isLoading: boolean;
}>({
  LogIn: () => null,
  LogOut: () => null,
  session: null,
  isLoading: false,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = React.useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
  }

  return value;
}

export function AuthProvider(props: React.PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState('session');
  const [code, setCode] = useState<string|null>(null);

  return (
    <AuthContext.Provider
      value={{
        LogIn: async () => {
            const stateValue = generateRandomString(8);
            console.log('Generated state value:', stateValue);
            const codeVerifier = await generateVerifier();
            const codeChallenge = await generateChallenge(codeVerifier);
      
        //   setLoading(true);
      
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
                  authStore.setAccessToken(credentials.access_token)
                  authStore.setIdToken(credentials.id_token)
                  console.log(credentials)
                }
                router.replace('/(tabs)')
              }
              console.log("4")    
            }
            
          } catch (error: any) {
            console.error('Error in login:', error);
            Alert.alert('Error', `Login failed: ${error.message}`);
          } finally {
            // setLoading(false);
          }
          // Perform sign-in logic here
          setSession('ok');
        },
        LogOut: () => {
            authStore.setAccessToken(null);
            authStore.setIdToken(null);
            setSession(null);
        },
        session,
        isLoading,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
}

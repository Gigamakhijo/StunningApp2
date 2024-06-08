import * as Crypto from "expo-crypto";
import { encode as btoa } from 'base-64';
import * as AuthSession from 'expo-auth-session';
import Auth from "react-native-auth0/lib/typescript/src/auth";
import { ApiResponse, create } from "apisauce";
import { Buffer } from 'buffer';
import { jwtDecode } from "jwt-decode";
const auth0ClientId = "l6zVUuSOjmexJPFTsg38FbcH5ov1slxl";
const domain = "https://dev-w0c3tnyi46mfgb5q.us.auth0.com"
const redirectUri = "com.stunning.auth0://dev-w0c3tnyi46mfgb5q.us.auth0.com/ios/com.stunning/callback"
const authorizationEndpoint = `${domain}/authorize`;


const api = create({
  baseURL: 'https://dev-w0c3tnyi46mfgb5q.us.auth0.com',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  }
});

function base64URLEncode(str: string): string {
  return str
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
}

export async function generateVerifier() {
  const randomBytes = await Crypto.getRandomBytesAsync(32);
  const verifier = btoa(String.fromCharCode.apply(null, Array.from(randomBytes)));
  return base64URLEncode(verifier);
}

async function sha256(buffer: string){
  const hash = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      buffer,
      { encoding: Crypto.CryptoEncoding.BASE64 }
  );
  return hash;
}

export async function generateChallenge(verifier: string) {
  const hash = await sha256(verifier);
  return base64URLEncode(hash);
}

export async function getAuthURL(){
  const verifier = await generateVerifier();
  const challenge = await generateChallenge(verifier);

  const authUrl = `https://dev-w0c3tnyi46mfgb5q.us.auth0.com/authorize?` +
      `response_type=code&` +
      `code_challenge=${challenge}&` +
      `code_challenge_method=S256&` +
      `client_id=${auth0ClientId}&` +
      `redirect_uri=${redirectUri}&` +
      `scope=&` +
      `audience=com.stunning.todos&` +
      `state=`;

  return authUrl;
}

export async function authenticate(){
  const verifier = await generateVerifier();
  const challenge = await generateChallenge(verifier);

  const authUrl = `https://dev-w0c3tnyi46mfgb5q.us.auth0.com/authorize?` +
      `response_type=code&` +
      `code_challenge=${challenge}&` +
      `code_challenge_method=S256&` +
      `client_id=${auth0ClientId}&` +
      `redirect_uri=${redirectUri}&` +
      `scope=&` +
      `audience=com.stunning.todos&` +
      `state=`;

  const request =new AuthSession.AuthRequest({
    clientId: auth0ClientId,
    redirectUri: redirectUri,
    responseType: AuthSession.ResponseType.Code,
    scopes: ['openid', 'profile', 'email'],
    extraParams: {
      code_challenge: challenge,
      code_challenge_method: 'S256',}
    }
    );

  // const reault = await request.promptAsync()
  // console.log(result)
}

// GET Request on /authorize
// POST Reqeust on /oauth/token

export const extractCodeFromUrl = (url: string): string | null => {
  const urlObject = new URL(url);
  const code = urlObject.searchParams.get('code');
  return code;
};

export const getToken = async (redirect_uri: string, code_verifier: string, code: string) => {
  const tokenUrl = 'https://dev-w0c3tnyi46mfgb5q.us.auth0.com/oauth/token'
  try {
    const response: ApiResponse<any> = await api.post(
      '/oauth/token',
      new URLSearchParams({
          grant_type: 'authorization_code',
          client_id: auth0ClientId,
          code_verifier: code_verifier,
          code: code,
          redirect_uri: redirect_uri
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    )

    if(response.status===200){
      console.log("token success")
      const decodeToken = JSON.parse(Buffer.from(response.data.access_token.split('.')[1], 'base64').toString())
      console.log(decodeToken)
    }
    return response.data;
  } catch(error){
    console.error('Error fetching token:', error);
  }

}
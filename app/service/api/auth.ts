import axios, { HttpStatusCode } from "axios";
import { getRandomBytesAsync } from "expo-crypto";
import base64 from 'base-64'

function base64URLEncode(str: string): string {
    return str
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=/g, '');
  }
  
  export async function generateVerifier(): Promise<string> {
    const randomBytes = await getRandomBytesAsync(32);
    const verifier = base64.encode(String.fromCharCode(...randomBytes));
    console.log(verifier)
    return verifier
  }
  async function generateRandomBytesBase64(hash: any) {
    const byteCount = 16; // 원하는 바이트 수
  
    // 바이트 배열을 Base64 문자열로 인코딩
    const base64String = Buffer.from(hash).toString('base64');
  
    console.log(base64String);
    return base64String;
  }

  function sha256(plain: string) {
    const hash = CryptoJS.SHA256(plain);
    const result = generateRandomBytesBase64(hash)
    return result
    // return base64URLEncode(CryptoJS.enc.Base64.stringify(hash));
  }
  
  
 export async function generatePKCE(verifier: string): Promise<string> {
    const challenge = sha256(verifier);
    return challenge
  }

export async function getCode(challenge: string):Promise<{status: HttpStatusCode, callbackUrl: string, code: string, state: string}>{
    const authUrl = `https://dev-w0c3tnyi46mfgb5q.us.auth0.com/authorize?` +
    `response_type=code&` +
    `code_challenge=${challenge}&` +
    `code_challenge_method=S256&` +
    `client_id=l6zVUuSOjmexJPFTsg38FbcH5ov1slxl&` +
    `redirect_uri=com.stunning.auth0://dev-w0c3tnyi46mfgb5q.us.auth0.com/ios/com.stunning/callback&` +
    `scope=appointments%20contacts&` +
    `audience=appointments:api&` +
    `state=xyzABC123`;
  
    const response = await axios.post(authUrl,{
    },{
})
    return response.data;
}

export async function getToken(authorizationCode: string, codeVerifier: string, codeChallenge: string):Promise<{kind: "ok"; access_token: string, refresh_token: string, id_token: string, token_type: "Bearer", expires_in: string}> {

    const tokenUrl = `https://dev-w0c3tnyi46mfgb5q.us.auth0.com/oauth/token`;

    const response = await axios.post(tokenUrl, {
      grant_type: 'authorization_code',
      client_id: "l6zVUuSOjmexJPFTsg38FbcH5ov1slxl",
      code_verifier: codeVerifier,
      code: authorizationCode,
      redirect_uri: "com.stunning.auth0://dev-w0c3tnyi46mfgb5q.us.auth0.com/ios/com.stunning/callback",
    }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    console.log(response.data)
    return response.data;
  }
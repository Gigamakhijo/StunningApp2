import { makeAutoObservable } from "mobx";
import Auth from "react-native-auth0/lib/typescript/src/auth";
import jwtDecode from 'jwt-decode'

interface DecodedToken {
    [key: string]: any;
  }

class AuthStore{
    accessToken: string | null = null;
    idToken: string | null = null;
    constructor(){
        makeAutoObservable(this);
    }

    setAccessToken(token: string | null){
        this.accessToken = token;
        // console.log(this.accessToken);
    }

    setIdToken(token: string | null){
        this.idToken = token;
        console.log(this.idToken);
        
        if(this.idToken){
            const decodeidToken = jwtDecode(this.idToken)
            console.log(decodeidToken)
        }
    }
}

const authStore = new AuthStore()
export default authStore;

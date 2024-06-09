import { makeAutoObservable } from "mobx";
import { Buffer } from "buffer";
interface DecodedToken {
    [key: string]: any;
  }

class AuthStore{
    accessToken: string | null = null;
    idToken: string | null = null;
    sub: string | null = null;
    constructor(){
        makeAutoObservable(this);
    }

    setAccessToken(token: string | null){
        this.accessToken = token;
        console.log(this.accessToken)
    }

    setIdToken(token: string | null){
        this.idToken = token;
        console.log(this.idToken);
        
        if(this.idToken){
            const decodeidToken = JSON.parse(Buffer.from(this.idToken.split('.')[1], 'base64').toString())
            // const decodeidToken = jwtDecode(this.idToken)
            console.log(decodeidToken)
            this.sub = decodeidToken.sub
            console.log(this.sub)
        }
    }
}

const authStore = new AuthStore()
export default authStore;

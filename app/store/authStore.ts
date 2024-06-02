import { makeAutoObservable } from "mobx";
import Auth from "react-native-auth0/lib/typescript/src/auth";

class AuthStore{
    accessToken: string | undefined

    constructor(){
        makeAutoObservable(this);
    }

    setAccessToken(token: string | undefined){
        this.accessToken = token;
        console.log(this.accessToken);
    }

}

const authStore = new AuthStore()
export default authStore;
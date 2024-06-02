import { create } from "apisauce";
import configProd from "@/app/config/config.prod";
import authStore from "@/app/store/authStore";

const api = create({
    baseURL: configProd.API_URL,
    headers:{
        Accept: 'application.json', 
        'Content-Type': 'application.json'
    }
});

// api.addAsyncRequestTransform(async (request) => {
//     const token = authStore.accessToken;
//     if(token){
//         request.headers['Authorization'] = 'Bearer ${token}';
//     }
//     else{
//         console.log("undefined token")
//     }
// });
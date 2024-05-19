import HeaderComponent from "@/components/HeaderComponent";
import { Slot } from "expo-router";
import { Auth0Provider } from "react-native-auth0";
import { Header } from "react-native/Libraries/NewAppScreen";
import { Redirect, Stack } from "expo-router";

export default function Layout() {
  return (
    <Auth0Provider domain={"dev-txofdyv5y7iqh1gd.us.auth0.com"} clientId={"qJE2uM0S653dLAMoQLC72to5vLOV3Bn6"}>
      <Slot />
    </Auth0Provider>
  );
}

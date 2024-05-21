import { Slot } from "expo-router";
import { Stack } from "expo-router";
import { Auth0Provider } from "react-native-auth0";

export default function Layout() {
  return (
    <Auth0Provider
      domain={""}
      clientId={""}
    >
      <Slot />
    </Auth0Provider>
  );
}

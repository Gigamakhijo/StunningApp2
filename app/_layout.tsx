import { Slot } from "expo-router";
import { Stack } from "expo-router";
import { Auth0Provider } from "react-native-auth0";

export default function Layout() {
  return (
    <Auth0Provider domain={"dev-w0c3tnyi46mfgb5q.us.auth0.com"} clientId={"l6zVUuSOjmexJPFTsg38FbcH5ov1slxl"}>
      <Slot />
    </Auth0Provider>
  );
}

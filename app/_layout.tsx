import { Slot } from "expo-router";
import { Auth0Provider } from "react-native-auth0";
import { AuthProvider } from "./service/ctx";

export default function Layout() {
  return (
    <AuthProvider >
      <Slot />
    </AuthProvider>
  );
}

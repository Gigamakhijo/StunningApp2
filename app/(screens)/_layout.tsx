import { Redirect, Stack } from "expo-router";

export default function Layout() {
  const authenticated = true;

  if (!authenticated) {
    return <Redirect href="/login" />;
  }

  return <Stack />;
}

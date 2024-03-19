import { View, StyleSheet } from "react-native";

import TextField from "@/components/TextField";
import LoginButton from "@/components/LoginButton";
import SignUpButton from "@/components/SignUpButton";
import Logo from "@/components/Logo";

export default function LoginScreen() {
  return (
    <>
      <Logo />

      <TextField />
      <TextField />

      <SignUpButton />
      <LoginButton />
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

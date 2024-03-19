import { StyleSheet } from "react-native";

import { Text } from "react-native";
import TextField from "@/components/TextField";
import ConfirmButton from "@/components/ConfirmButton";
import CancelButton from "@/components/CancelButton";
import Logo from "@/components/Logo";

export default function SignUp() {
  return (
    <>
      <Logo />

      <TextField />
      <TextField />

      <CancelButton href="/" />
      <ConfirmButton href="/name" />
    </>
  );
}

const styles = StyleSheet.create({});

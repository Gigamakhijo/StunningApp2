import { StyleSheet, Text } from "react-native";
import Logo from "@/components/Logo";
import TextField from "@/components/TextField";
import CancelButton from "@/components/CancelButton";
import ConfirmButton from "@/components/ConfirmButton";

export default function LoginScreen() {
  return (
    <>
      <Logo />

      <Text>"당신을 도와줄 Trainer의 이름을 설정해 주세요!"</Text>

      <TextField />

      <CancelButton href="/signup" />
      <ConfirmButton href="/" />
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

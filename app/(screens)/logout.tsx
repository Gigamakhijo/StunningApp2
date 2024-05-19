import { StyleSheet, Text } from "react-native";
import Logo from "@/components/Logo";
import TextField from "@/components/TextField";
import CancelButton from "@/components/CancelButton";
import ConfirmButton from "@/components/ConfirmButton";

export default function LoginScreen() {
  return (
    <>
      <Text style={styles.textstyle}>logout page</Text>
    </>
  );
}

const styles = StyleSheet.create({
  textstyle:{
    marginTop:"5%",
  },
});

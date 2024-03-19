import { View, Text, Pressable } from "react-native";
import { StyleSheet } from "react-native";

import { Link } from "expo-router";

export default function SignUpButton(props: any) {
  return (
    <Link href="/signup" asChild>
      <Pressable style={styles.button}>
        <Text style={styles.text}>회원가입</Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: {},
  button: {},
});

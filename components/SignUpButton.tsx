import { View, Text, Pressable } from "react-native";
import { StyleSheet } from "react-native";

import { Link, router } from "expo-router";

const onPress = () => {
  router.replace('/login')
}
export default function SignUpButton(props: any) {
  return (
      <Pressable style={styles.button}>
        <Text style={styles.text}>회원가입</Text>
      </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: {},
  button: {},
});

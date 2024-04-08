import { View, Text, Pressable } from "react-native";
import { StyleSheet } from "react-native";

import { Link } from "expo-router";

export default function LoginButton(props: any) {
  return (
    <View style={styles.container}>
      <Link href="/" asChild>
        <Pressable style={styles.button} onPress={props.onPress}>
          <Text style={styles.text}>로그인</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 90,
  },
  text: {},
  button: {},
});

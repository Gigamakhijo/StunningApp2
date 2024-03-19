import { View, Text, Pressable } from "react-native";
import { StyleSheet } from "react-native";

import { Link } from "expo-router";

export default function CancelButton(props: { href: string }) {
  return (
    <View style={styles.container}>
      <Link href={props.href} asChild>
        <Pressable style={styles.button}>
          <Text style={styles.text}>취소</Text>
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

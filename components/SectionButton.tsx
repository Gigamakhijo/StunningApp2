import { View, Text, Pressable } from "react-native";
import { StyleSheet } from "react-native";

import { Link } from "expo-router";

export default function SectionButton(props: { href: string; text: string }) {
  return (
    <View style={styles.container}>
      <Link href={props.href} asChild>
        <Pressable style={styles.button}>
          <Text style={styles.text}>{props.text}</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: {},
  button: {},
});
